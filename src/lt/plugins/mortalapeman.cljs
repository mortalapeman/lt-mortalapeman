(ns lt.plugins.mortalapeman
  (:require [lt.object :as object]
            [lt.objs.context :as ctx]
            [lt.objs.tabs :as tabs]
            [lt.objs.command :as cmd])
  (:require-macros [lt.macros :refer [defui behavior]]))

(cmd/command {:command :tabset.close-all-but-active
              :desc "Tabset: Close all tabs/tabsets except active"
              :exec (fn []
                      (let [tabs (object/by-tag :tabset.tab)
                            tabsets (object/by-tag :tabset)
                            active-tabset (ctx/->obj :tabset)
                            active-tab (:active-obj @active-tabset)]
                        (doseq [x (filter (comp not #{active-tab}) tabs)]
                          (object/raise x :close))
                        (doseq [x (filter (comp not #{active-tabset}) tabset)]
                          (tabs/rem-tabset x))))})
