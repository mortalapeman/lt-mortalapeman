(ns lt.plugins.mortalapeman
  (:require [lt.object :as object]
            [lt.objs.context :as ctx]
            [lt.objs.tabs :as tabs]
            [lt.objs.clients.local :as local]
            [lt.objs.command :as cmd]
            [clojure.zip :as zip]
            [lt.util.dom :as dom])
  (:require-macros [lt.macros :refer [defui behavior]]))

(defn atom? [x]
  (boolean
   (when x
     (instance? Atom x))))

(defn children [[k v]]
  (if (map? v)
    (seq v)
    (map-indexed vector v)))

(defn branch? [[k v]]
  (or (map? v)
      (sequential? v)
      (set? v)))

(defn make-node [[k v] children]
  (if (map? v)
    (into v children)
    (into v (map second children))))

(defn zipper? [obj]
  (contains? (meta obj) :zip/make-node))

(defn zip-obj [obj]
  (zip/zipper branch? children make-node [:root obj]))

(defn ->zip-obj [obj]
  (if (zipper? obj)
    obj
    (zip-obj obj)))

(defn zchildren [z]
  (letfn [(go-right [z n]
                    (cons n
                          (lazy-seq
                           (if-let [r (zip/right z)]
                             (go-right r r)))))]
    (if-let [d (zip/down z)]
      (go-right d d))))


(defn display-summary [[k v]]
  (let [value-display (cond
                       (map? v) "Map"
                       (vector? v) "Vector"
                       (list? v) "List"
                       (set? v) "Set"
                       (atom? v) "Atom"
                       :else (str (apply str (take 120  (pr-str v)))))
        key-display (if (number? k)
                      (str "[" k "]")
                      (pr-str k))]
    (str key-display " " value-display)))

(defui display-str [this z]
  [:span.display (display-summary (zip/node z))]
  :click (fn [e] (object/raise this :click)))

(defui create-children [this children]
  [:div.children
   (for [c children]
     (object/->content c))])

(object/object* ::obj.browser.node
                :tags #{:obj.browser.node}
                :behaviors [::toggle-children]
                :zipper nil
                :open false
                :children nil
                :init (fn [this obj]
                        (object/merge! this {:zipper (->zip-obj obj)})
                        [:div.obj-node
                         (display-str this (:zipper @this))]))

(def demo (object/create ::obj.browser.node {:asdf 1 :woot [1 2 3] :editor (atom ['a 'b 'c])}))
;;(def demo (object/create ::obj.browser.node (deref (first (object/by-tag :editor)))))

(behavior ::toggle-children
          :triggers #{:click}
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
                              children (map #(object/create ::obj.browser.node %)
                                            (zchildren (:zipper @this)))]
                          (dom/append div (create-children this children))
                          (object/merge! this {:open true
                                               :children children})))))

(object/object* ::object.browser
                :tags #{:object.browser :tab :tabset.tab}
                :behaviors [::on-close]
                :name "LT Objects"
                :init (fn [this]
                        [:div.obj-root
                         (object/->content demo)]))

(def browser (object/create ::object.browser))

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
