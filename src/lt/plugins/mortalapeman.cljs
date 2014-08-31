(ns lt.plugins.mortalapeman
  (:require [lt.object :as object]
            [lt.objs.context :as ctx]
            [lt.objs.tabs :as tabs]
            [lt.objs.clients.local :as local]
            [lt.objs.command :as cmd]
            [crate.binding :refer [bound]])
  (:require-macros [lt.macros :refer [defui behavior]]))

;;****************************************************
;; Development
;;****************************************************

(behavior ::dev-playground.close
          :triggers #{:close}
          :reaction (fn [this]
                      (tabs/rem! this)))

(behavior ::dev-playground.set!
          :triggers #{:set!}
          :reaction (fn [this obj]
                      (object/merge! this {:obj obj})))

(behavior ::dev-playground.open
          :triggers #{:open}
          :reaction (fn [this]
                      (tabs/add-or-focus! this)))

(object/object* ::dev-playground
                :behaviors [::dev-playground.close
                            ::dev-playground.open
                            ::dev-playground.set!]
                :obj nil
                :name "Dev playground"
                :init (fn [this]
                        [:div.dev-playground
                         (bound this
                                (fn []
                                  (when-let [obj (:obj @this)]
                                    (object/->content obj))))]))

(def dev-playground (object/create ::dev-playground))


(cmd/command {:command :dev-playground.set!
              :hidden true
              :desc "Sets the current object for display"
              :exec (fn [obj]
                      (object/raise dev-playground :set! obj)
                      (object/raise dev-playground :open))})

;;****************************************************
;; Workspace
;;****************************************************


(behavior ::sidebar-menu-items
          :triggers #{:menu-items}
          :reaction (fn [this items]
                      (conj items {:label "Create new workspace"
                                   :click (fn []
                                            (cmd/exec! :workspace.new))})))

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


;;****************************************************
;; Tabs
;;****************************************************

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
