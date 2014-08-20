(ns lt.plugins.mortalapeman
  (:require [lt.object :as object]
            [lt.objs.context :as ctx]
            [lt.objs.tabs :as tabs]
            [lt.objs.clients.local :as local]
            [lt.objs.command :as cmd]
            [lt.util.dom :as dom]
            [cljs.reader :as reader]
            [clojure.zip :as zip]
            [clojure.walk :as walk]
            [clojure.string :as string]
            [crate.core :as crate]
            [crate.binding :refer [bound subatom]])
  (:require-macros [lt.macros :refer [defui behavior]]))

;;*****************************************************************************
;; Utility
;;*****************************************************************************

(defn atom? [x]
  (boolean
   (when x
     (instance? Atom x))))

(defn zipper? [obj]
  (contains? (meta obj) :zip/make-node))

(defn type-name [v]
  (cond
   (zipper? v) "Zipper"
   (atom? v) "Atom"
   (map? v) "Map"
   (vector? v) "Vector"
   (list? v) "List"
   (set? v) "Set"
   (string? v) "String"
   (keyword? v) "Keyword"
   (number? v) "Number"
   (nil? v) "nil"
   (fn? v) "Function"
   (array? v) "Array"
   (symbol? v) "Symbol"
   (seq? v) "Seq"
   :else "?"))

(defn type-key [v]
  (-> (type-name v)
      (.toLowerCase)
      keyword))


;;*****************************************************************************
;; Zipper
;;*****************************************************************************

(def branchable #{:map :set :atom :vector :list :seq})
(def values #{:symbol :string :number :nil :keyword})

(defn children [[k v]]
  (condp = (type-key v)
    :map (seq v)
    :atom [[::atom @v]]
    (map-indexed vector v)))

(defn branchable? [v]
  (branchable (type-key v)))

(defn branch? [[k v]]
  (branchable? v))

(defn make-node [[k v] children]
  (if (map? v)
    (into v children)
    (into v (map second children))))

(defn zip-obj [obj]
  (zip/zipper branch? children make-node [:root obj]))

(defn ->zip-obj [obj]
  (if (zipper? obj)
    obj
    (zip-obj obj)))

(defn zchildren [z]
  (letfn [(go-right
           [z n]
           (cons n
                 (lazy-seq
                  (if-let [r (zip/right z)]
                    (go-right r r)))))]
    (if-let [d (zip/down z)]
      (go-right d d))))

;;*****************************************************************************
;; Display
;;*****************************************************************************

(defn simple-display [v cnt]
  (let [s (pr-str v)
        f (apply str (take cnt s))
        r (drop cnt s)]
    (if (seq r)
      (str f " ..")
      f)))

(defn node-value-type [v]
  (cond
   (branchable? v) :branchable
   (values (type-key v)) :value
   :else :other))

(defmulti display-string node-value-type)

(defmethod display-string :branchable [x]
  (if (atom? x)
    (str "#<" (type-name x) ": " (type-name @x) ">")
    (type-name x)))

(defmethod display-string :value [x] (pr-str x))

(defmethod display-string :other [x] (simple-display x 80))

(def type-key->class {:keyword "cm-atom"
                      :number "cm-number"
                      :string "cm-string"
                      :symbol "cm-symbol"})
(defn display-span [v]
  (str "span."
       (get type-key->class (type-key v) "cm-builtin")))

(defn value->span [v]
  [(keyword (display-span v))
   (display-string v)])


(defn key->span [k]
  [:span.node-key
   (cond
    (number? k) (str "[" k "]")
    (nil? k) "[0]"
    :else (value->span k))])

(defn display-summary [[k v]]
  (let [vd (value->span v)
        kd (key->span k)]
    (if (= k ::atom)
      [:span.cm-s-default vd]
      [:span.cm-s-default kd " " vd])))

(defui display-zipper [this z]
  [:span.display (display-summary (zip/node z))]
  :click (fn [e] (object/raise this :click)))

(defn node-key [node]
  (let [[k _] (zip/node (:zipper @node))]
    k))

(defui create-children [this children]
  [:div.children
   (for [c (sort-by node-key children)]
     (object/->content c))])

(object/object* ::obj.browser.node
                :tags #{:obj.browser.node}
                :behaviors [::toggle-children]
                :zipper nil
                :open false
                :parent nil
                :children nil
                :init (fn [this parent obj]
                        (object/merge! this {:zipper (->zip-obj obj)
                                             :parent parent})
                        [:div.obj-node
                         (display-zipper this (:zipper @this))]))

(behavior ::toggle-children
          :triggers #{:click :toggle}
          :reaction (fn [this]
                      (if (:open @this)
                        (do
                          (doseq [x (:children @this)]
                            (object/destroy! x))
                          (->> (object/->content this)
                               (dom/$ :.children)
                               (dom/remove))
                          (object/merge! this {:open false}))
                        (let [div (object/->content this)
                              children (map #(object/create ::obj.browser.node this %)
                                            (zchildren (:zipper @this)))]
                          (dom/append div (create-children this children))
                          (object/merge! this {:open true
                                               :children children})))))

(behavior ::set-object
          :triggers #{:set!}
          :reaction (fn [this obj]
                      (when-let [old (:obj this)]
                        (object/destroy! old))
                      (object/merge! this {:obj (object/create ::obj.browser.node nil obj)})
                      (object/raise (:obj @this) :toggle)))

(defui browserui [this]
  [:div
   (bound (subatom this [:obj])
          (fn [v]
            (if (and v @v)
              (object/->content v)
              [:span "No object selected"])))])

(defui toggle-button [this]
  [:button "Toggle Capture"]
  :click (fn [] (object/merge! this {:capture (not (:capture @this))})))


(object/object* ::object.browser
                :tags #{:object.browser :tab :tabset.tab}
                :behaviors [::on-close ::set-object]
                :name "Data Viewer"
                :obj nil
                :capture false
                :init (fn [this n]
                        (when title
                          (object/merge! this {:name n}))
                        [:div.obj-root
                         [:div
                          (toggle-button this)
                          [:span
                           (bound (subatom this [:capture]) (fn [v] (if v "On" "Off")))]]
                         (browserui this)]))


(def browser (object/create ::object.browser))


(behavior ::on-close
          :triggers #{:close}
          :reaction (fn [this]
                      (tabs/rem! this)))

(cmd/command {:command :object.browse
              :desc "Object: open browser"
              :exec (fn []
                      (tabs/add-or-focus! browser))})

(cmd/command {:command :object.browser.set!
              :desc "Object: set object"
              :hidden true
              :exec (fn [obj]
                      (object/raise browser :set! obj))})

;;*****************************************************************************
;; Alpeh
;;*****************************************************************************

(behavior ::on-select
          :triggers #{:select}
          :reaction (fn [_ obj]
                      (cmd/exec! :object.browser.set! (object/by-id (object/->id obj)))))

;;*****************************************************************************
;; Edtior
;;*****************************************************************************

(defn find-unreadable-forms [s]
  (loop [state {:capture [] :final [] :#? false :level 0}
         c (first (seq s))
         r (rest (seq s))]
    (let [prevHash? (:#? state)
          c-is-hash (= "#" c)
          c-is-start (= "<" c)
          c-is-end (= ">" c)
          next-c (first r)
          next-r (rest r)]
      (cond

       ;; We have reached the end of the stream
       (nil? c)
       (:final state)

       ;; We have found a #
       (and c-is-hash  (not prevHash?))
       (recur (assoc state :#? true) next-c next-r)

       ;; The next character after a # was not a <
       (and (not c-is-start) prevHash?)
       (recur (assoc state :#? false) next-c next-r)

       ;; The next character after a # was a <, start capture.
       (and c-is-start prevHash?)
       (recur (-> (assoc state :#? false)
                  (update-in [:capture] conj "#<")
                  (update-in [:level] inc))
              next-c
              next-r)

       ;; We are still inside a #<...>
       (and (< 0 (:level state)) (not c-is-end))
       (recur (update-in state [:capture] conj c)
              next-c
              next-r)

       ;; We have reached the end of the first #<...>
       (and (and (= 1 (:level state)) c-is-end))
       (recur (-> (update-in state [:final] conj (apply str (conj (:capture state) c)))
                  (update-in [:level] dec)
                  (assoc :capture []))
              next-c
              next-r)

       ;; We have reached the end of a #<..>, but we are still inside the first #<...>
       (and (< 1 (:level state)) c-is-end)
       (recur (-> (update-in state [:capture] conj c)
                  (update-in [:level] dec))
              next-c
              next-r)

       ;; We are not inside a #<...>
       (and (= 0 (:level state )) (not prevHash?))
       (recur state next-c next-r)

       ;; We missed a state somewhere
       :else nil))))

(def atom-re #"^#<Atom: (.+)>$")
(def other-re #"^#<.+>$")

(defn atom-str? [s]
  (and (string? s)
       (boolean (re-find atom-re s))))

(defn other-str? [s]
  (and (string? s)
       (boolean (re-find other-re s))))

(defn atom-str-value [s]
  (-> (re-find atom-re s)
      second))

(defn santize-pr-str [s]
  (let [bad-strs (find-unreadable-forms s)
        sanitize (fn [a n]
                  (string/replace a n (quote-string n)))]
    (reduce sanitize s bad-strs)))

(defn post-process [obj]
  (letfn [(parse
           [v]
           (if (atom-str? v)
             (atom (->> (atom-str-value v)
                        (santize-pr-str)
                        (reader/read-string)
                        post-process))
             v))]
    (if (string? obj)
      (walk/postwalk parse (parse obj))
      (walk/postwalk parse obj))))


(behavior ::browser.editor-result
          :triggers #{:editor.result}
          :reaction (fn [this result loc opts]
                      (when (:capture @browser)
                        (object/merge! browser {:capture false})
                        (cmd/exec! :object.browser.set! (-> (santize-pr-str result)
                                                            reader/read-string
                                                            post-process)))))

;;*****************************************************************************
;; Menus
;;*****************************************************************************

(behavior ::sidebar-menu-items
          :triggers #{:menu-items}
          :reaction (fn [this items]
                      (conj items {:label "Create new workspace"
                                   :click (fn []
                                            (cmd/exec! :workspace.new))})))

(behavior ::tab-menu-items
          :triggers #{:menu+}
          :reaction (fn [this items]
                      (do this)
                      (conj items
                            {:type "separator"
                             :order 3}
                            {:label "Close tabs to the right"
                             :order 4
                             :click (fn [] (cmd/exec! :tabset.close-tabs-to-right (:lt.objs.tabs/tab-object @this)))}
                            {:label "Close other tabs"
                             :order 5
                             :click (fn []
                                      (cmd/exec! :tabset.close-other-tabs (:lt.objs.tabs/tab-object @this)))}
                            {:label "Close all tabs"
                             :order 6
                             :click (fn [] (cmd/exec! :tabs.close-all))})))

(defn open-gnome-terminal [path]
  (let [cp (js/require "child_process")]
    (.spawn cp "gnome-terminal" #js [(str "--working-directory=" path)])))

(behavior ::subfolder-menu
          :triggers #{:menu-items}
          :reaction (fn [this items]
                      (conj items
                            {:label "Open Terminal Here"
                             :order 7
                             :click (fn []
                                      (condp = process.platform
                                        "linux" (open-gnome-terminal (:path @this))))})))


(cmd/command {:command :tabset.close-other-tabs
              :desc "Tabset: Close other tabs and tabsets"
              :hidden true
              :exec (fn [active-obj]
                      (let [tabs (object/by-tag :tabset.tab)
                            tabsets (object/by-tag :tabset)]
                        (doseq [x (filter (comp not #{active-obj}) tabs)]
                          (object/raise x :close))
                        (doseq [x (filter (comp not #{(:lt.objs.tabs/tabset @active-obj)}) tabsets)]
                          (tabs/rem-tabset x))))})

(cmd/command {:command :tabset.close-tabs-to-right
              :desc "Tab: Close tabs to the right"
              :hidden true
              :exec (fn [active-obj]
                      (let [index (tabs/->index active-obj)
                            tabs (->> @(:lt.objs.tabs/tabset @active-obj)
                                      :objs
                                      (filter #(> (tabs/->index %) index)))]
                        (doseq [x tabs]
                          (object/raise x :close))))})

(cmd/command {:command :tabset.close-all-but-active
              :desc "Tabset: Close all tabs/tabsets except active"
              :exec (fn []
                      (let [tabs (object/by-tag :tabset.tab)
                            tabsets (object/by-tag :tabset)
                            active-tabset (ctx/->obj :tabset)
                            active-tab (:active-obj @active-tabset)]
                        (doseq [x (filter (comp not #{active-tab}) tabs)]
                          (object/raise x :close))
                        (doseq [x (filter (comp not #{active-tabset}) tabsets)]
                          (tabs/rem-tabset x))))})


(cmd/command {:command :app.connect-to-lt-ui
              :desc "Connect: Connect to Light Table UI"
              :exec (fn []
                      (local/init))})
