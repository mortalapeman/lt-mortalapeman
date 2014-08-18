(ns lt.plugins.mortalapeman
  (:require [lt.object :as object]
            [lt.objs.context :as ctx]
            [lt.objs.tabs :as tabs]
            [lt.objs.clients.local :as local]
            [lt.objs.command :as cmd]
            [clojure.zip :as zip]
            [lt.util.dom :as dom])
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
                      :number "cm-number"})
(defn display-span [v]
  (str "span."
       (get type-key->class (type-key v) "unknown")))

(defn value->span [v]
  [(keyword (display-span v))
   (display-string v)])

(value->span :asdf)







(defn value-display [v]
  (cond
   (atom? v) (str "#<" (type-name v) ": " (type-name @v) ">")
   (branchable? v) (type-name v)
   (string? v) (pr-str v)
   (keyword? v) (pr-str v)
   (number? v) (pr-str v)
   (symbol? v) (pr-str v)
   :else (generic-value-display v 80)))

(defn display-summary [[k v]]
  (let [vd (value-display v)
        kd (if (number? k)
             (str "[" k "]")
             (pr-str k))]
    (if (= k ::atom)
      vd
      (str kd " " vd))))

(defui display-str [this z]
  [:span.display (display-summary (zip/node z))]
  :click (fn [e] (object/raise this :click)))

(defn bnode-key [bnode]
  (let [[k _] (zip/node (:zipper @bnode))]
    k))

(defui create-children [this children]
  [:div.children
   (for [c (sort-by bnode-key children)]
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
                         (display-str this (:zipper @this))]))

;;(def demo (object/create ::obj.browser.node {:asdf 1 :woot [1 2 3] :editor (atom ['a 'b 'c])}))
(def demo (object/create ::obj.browser.node nil (deref (first (object/by-tag :editor)))))

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

(object/object* ::object.browser
                :tags #{:object.browser :tab :tabset.tab}
                :behaviors [::on-close]
                :name "LT Objects"
                :init (fn [this title]
                        (object/raise demo :toggle)
                        [:div.obj-root
                         [:h3 title
                          (object/->content demo)]]))

(def browser (object/create ::object.browser "Editor Object"))

(behavior ::on-close
          :triggers #{:close}
          :reaction (fn [this]
                      (tabs/rem! this)))

(cmd/command {:command :object.browse
              :desc "Objects: open browser"
              :exec (fn []
                      (tabs/add-or-focus! browser))})



(comment
  (def data [:root {:asdf ['a 'b {:args 1}] :woot {:qwer 2} :blergs "fruity"}])
  (def blah (zip/zipper branch?
                        children
                        make-node
                        data)))


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
