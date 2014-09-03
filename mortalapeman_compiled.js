if(!lt.util.load.provided_QMARK_('lt.plugins.mortalapeman')) {
goog.provide('lt.plugins.mortalapeman');
goog.require('cljs.core');
goog.require('crate.binding');
goog.require('lt.objs.context');
goog.require('lt.objs.tabs');
goog.require('lt.objs.clients.local');
goog.require('lt.objs.context');
goog.require('lt.objs.editor.pool');
goog.require('lt.objs.command');
goog.require('crate.binding');
goog.require('lt.objs.editor');
goog.require('lt.object');
goog.require('lt.object');
goog.require('lt.objs.clients.local');
goog.require('lt.objs.tabs');
goog.require('lt.objs.editor.pool');
goog.require('lt.objs.command');
goog.require('lt.objs.editor');
lt.plugins.mortalapeman.__BEH__dev_playground__DOT__close = (function __BEH__dev_playground__DOT__close(this$){return lt.objs.tabs.rem_BANG_.call(null,this$);
});
lt.object.behavior_STAR_.call(null,new cljs.core.Keyword("lt.plugins.mortalapeman","dev-playground.close","lt.plugins.mortalapeman/dev-playground.close",3598329001),new cljs.core.Keyword(null,"reaction","reaction",4441361819),lt.plugins.mortalapeman.__BEH__dev_playground__DOT__close,new cljs.core.Keyword(null,"triggers","triggers",2516997421),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"close","close",1108660586),null], null), null));
lt.plugins.mortalapeman.__BEH__dev_playground__DOT__set_BANG_ = (function __BEH__dev_playground__DOT__set_BANG_(this$,obj){return lt.object.merge_BANG_.call(null,this$,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"obj","obj",1014014057),obj], null));
});
lt.object.behavior_STAR_.call(null,new cljs.core.Keyword("lt.plugins.mortalapeman","dev-playground.set!","lt.plugins.mortalapeman/dev-playground.set!",4314120332),new cljs.core.Keyword(null,"reaction","reaction",4441361819),lt.plugins.mortalapeman.__BEH__dev_playground__DOT__set_BANG_,new cljs.core.Keyword(null,"triggers","triggers",2516997421),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"set!","set!",1017430897),null], null), null));
lt.plugins.mortalapeman.__BEH__dev_playground__DOT__open = (function __BEH__dev_playground__DOT__open(this$){return lt.objs.tabs.add_or_focus_BANG_.call(null,this$);
});
lt.object.behavior_STAR_.call(null,new cljs.core.Keyword("lt.plugins.mortalapeman","dev-playground.open","lt.plugins.mortalapeman/dev-playground.open",4314228945),new cljs.core.Keyword(null,"reaction","reaction",4441361819),lt.plugins.mortalapeman.__BEH__dev_playground__DOT__open,new cljs.core.Keyword(null,"triggers","triggers",2516997421),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"open","open",1017321916),null], null), null));
lt.object.object_STAR_.call(null,new cljs.core.Keyword("lt.plugins.mortalapeman","dev-playground","lt.plugins.mortalapeman/dev-playground",1679764579),new cljs.core.Keyword(null,"behaviors","behaviors",607554515),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("lt.plugins.mortalapeman","dev-playground.close","lt.plugins.mortalapeman/dev-playground.close",3598329001),new cljs.core.Keyword("lt.plugins.mortalapeman","dev-playground.open","lt.plugins.mortalapeman/dev-playground.open",4314228945),new cljs.core.Keyword("lt.plugins.mortalapeman","dev-playground.set!","lt.plugins.mortalapeman/dev-playground.set!",4314120332)], null),new cljs.core.Keyword(null,"obj","obj",1014014057),null,new cljs.core.Keyword(null,"name","name",1017277949),"Dev playground",new cljs.core.Keyword(null,"init","init",1017141378),(function (this$){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.dev-playground","div.dev-playground",3331119330),crate.binding.bound.call(null,this$,(function (){var temp__4092__auto__ = new cljs.core.Keyword(null,"obj","obj",1014014057).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,this$));if(cljs.core.truth_(temp__4092__auto__))
{var obj = temp__4092__auto__;return lt.object.__GT_content.call(null,obj);
} else
{return null;
}
}))], null);
}));
lt.plugins.mortalapeman.dev_playground = lt.object.create.call(null,new cljs.core.Keyword("lt.plugins.mortalapeman","dev-playground","lt.plugins.mortalapeman/dev-playground",1679764579));
lt.objs.command.command.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"command","command",1964298941),new cljs.core.Keyword(null,"dev-playground.set!","dev-playground.set!",1850074636),new cljs.core.Keyword(null,"hidden","hidden",4091384092),true,new cljs.core.Keyword(null,"desc","desc",1016984067),"Sets the current object for display",new cljs.core.Keyword(null,"exec","exec",1017031683),(function (obj){lt.object.raise.call(null,lt.plugins.mortalapeman.dev_playground,new cljs.core.Keyword(null,"set!","set!",1017430897),obj);
return lt.object.raise.call(null,lt.plugins.mortalapeman.dev_playground,new cljs.core.Keyword(null,"open","open",1017321916));
})], null));
lt.objs.command.command.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"command","command",1964298941),new cljs.core.Keyword(null,"app.connect-to-lt-ui","app.connect-to-lt-ui",3899501641),new cljs.core.Keyword(null,"desc","desc",1016984067),"Connect: Connect to Light Table UI",new cljs.core.Keyword(null,"exec","exec",1017031683),(function (){return lt.objs.clients.local.init.call(null);
})], null));
lt.plugins.mortalapeman.__BEH__sidebar_menu_items = (function __BEH__sidebar_menu_items(this$,items){return cljs.core.conj.call(null,items,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"label","label",1116631654),"Create new workspace",new cljs.core.Keyword(null,"click","click",1108654330),(function (){return lt.objs.command.exec_BANG_.call(null,new cljs.core.Keyword(null,"workspace.new","workspace.new",2700812345));
})], null));
});
lt.object.behavior_STAR_.call(null,new cljs.core.Keyword("lt.plugins.mortalapeman","sidebar-menu-items","lt.plugins.mortalapeman/sidebar-menu-items",3624932563),new cljs.core.Keyword(null,"reaction","reaction",4441361819),lt.plugins.mortalapeman.__BEH__sidebar_menu_items,new cljs.core.Keyword(null,"triggers","triggers",2516997421),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"menu-items","menu-items",3782623556),null], null), null));
lt.plugins.mortalapeman.open_gnome_terminal = (function open_gnome_terminal(path){var cp = require("child_process");return cp.spawn("gnome-terminal",[[cljs.core.str("--working-directory="),cljs.core.str(path)].join('')]);
});
lt.plugins.mortalapeman.open_file_manager = (function open_file_manager(path){var cp = require("child_process");return cp.spawn("nautilus",[path]);
});
lt.plugins.mortalapeman.__BEH__subfolder_menu = (function __BEH__subfolder_menu(this$,items){return cljs.core.conj.call(null,items,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"label","label",1116631654),"Open Terminal Here",new cljs.core.Keyword(null,"order","order",1119910592),7,new cljs.core.Keyword(null,"click","click",1108654330),(function (){var pred__7845 = cljs.core._EQ_;var expr__7846 = process.platform;if(cljs.core.truth_(pred__7845.call(null,"linux",expr__7846)))
{return lt.plugins.mortalapeman.open_gnome_terminal.call(null,new cljs.core.Keyword(null,"path","path",1017337751).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,this$)));
} else
{throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(expr__7846)].join('')));
}
})], null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"label","label",1116631654),"Open in file manager",new cljs.core.Keyword(null,"order","order",1119910592),8,new cljs.core.Keyword(null,"click","click",1108654330),(function (){var pred__7848 = cljs.core._EQ_;var expr__7849 = process.platform;if(cljs.core.truth_(pred__7848.call(null,"linux",expr__7849)))
{return lt.plugins.mortalapeman.open_file_manager.call(null,new cljs.core.Keyword(null,"path","path",1017337751).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,this$)));
} else
{throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(expr__7849)].join('')));
}
})], null));
});
lt.object.behavior_STAR_.call(null,new cljs.core.Keyword("lt.plugins.mortalapeman","subfolder-menu","lt.plugins.mortalapeman/subfolder-menu",1145547032),new cljs.core.Keyword(null,"reaction","reaction",4441361819),lt.plugins.mortalapeman.__BEH__subfolder_menu,new cljs.core.Keyword(null,"triggers","triggers",2516997421),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"menu-items","menu-items",3782623556),null], null), null));
lt.plugins.mortalapeman.__BEH__tab_menu_items = (function __BEH__tab_menu_items(this$,items){return cljs.core.conj.call(null,items,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1017479852),"separator",new cljs.core.Keyword(null,"order","order",1119910592),3], null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"label","label",1116631654),"Close tabs to the right",new cljs.core.Keyword(null,"order","order",1119910592),4,new cljs.core.Keyword(null,"click","click",1108654330),(function (){return lt.objs.command.exec_BANG_.call(null,new cljs.core.Keyword(null,"tabset.close-tabs-to-right","tabset.close-tabs-to-right",1757769557),new cljs.core.Keyword("lt.objs.tabs","tab-object","lt.objs.tabs/tab-object",3521887033).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,this$)));
})], null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"label","label",1116631654),"Close other tabs",new cljs.core.Keyword(null,"order","order",1119910592),5,new cljs.core.Keyword(null,"click","click",1108654330),(function (){return lt.objs.command.exec_BANG_.call(null,new cljs.core.Keyword(null,"tabset.close-other-tabs","tabset.close-other-tabs",3361386915),new cljs.core.Keyword("lt.objs.tabs","tab-object","lt.objs.tabs/tab-object",3521887033).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,this$)));
})], null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"label","label",1116631654),"Close all tabs",new cljs.core.Keyword(null,"order","order",1119910592),6,new cljs.core.Keyword(null,"click","click",1108654330),(function (){return lt.objs.command.exec_BANG_.call(null,new cljs.core.Keyword(null,"tabs.close-all","tabs.close-all",2444215630));
})], null));
});
lt.object.behavior_STAR_.call(null,new cljs.core.Keyword("lt.plugins.mortalapeman","tab-menu-items","lt.plugins.mortalapeman/tab-menu-items",1230141180),new cljs.core.Keyword(null,"reaction","reaction",4441361819),lt.plugins.mortalapeman.__BEH__tab_menu_items,new cljs.core.Keyword(null,"triggers","triggers",2516997421),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"menu+","menu+",1117686302),null], null), null));
lt.plugins.mortalapeman.ed__GT_tabset = (function ed__GT_tabset(this$){return new cljs.core.Keyword("lt.objs.tabs","tabset","lt.objs.tabs/tabset",3378091779).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,this$));
});
lt.plugins.mortalapeman.tabset_empty_QMARK_ = (function tabset_empty_QMARK_(this$){return cljs.core.empty_QMARK_.call(null,cljs.core.filter.call(null,cljs.core.comp.call(null,cljs.core.not,cljs.core.PersistentHashSet.fromArray([this$], true)),new cljs.core.Keyword(null,"objs","objs",1017308622).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,lt.plugins.mortalapeman.ed__GT_tabset.call(null,this$)))));
});
lt.plugins.mortalapeman.__BEH__tabset__DOT__tab__DOT__close_when_empty = (function __BEH__tabset__DOT__tab__DOT__close_when_empty(this$){if(lt.plugins.mortalapeman.tabset_empty_QMARK_.call(null,this$))
{return lt.objs.tabs.rem_tabset.call(null,lt.plugins.mortalapeman.ed__GT_tabset.call(null,this$));
} else
{return null;
}
});
lt.object.behavior_STAR_.call(null,new cljs.core.Keyword("lt.plugins.mortalapeman","tabset.tab.close-when-empty","lt.plugins.mortalapeman/tabset.tab.close-when-empty",2854918589),new cljs.core.Keyword(null,"reaction","reaction",4441361819),lt.plugins.mortalapeman.__BEH__tabset__DOT__tab__DOT__close_when_empty,new cljs.core.Keyword(null,"desc","desc",1016984067),"Closes the active tabset of the closed tab when tabset is empty.",new cljs.core.Keyword(null,"triggers","triggers",2516997421),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"close","close",1108660586),null], null), null));
lt.objs.command.command.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"command","command",1964298941),new cljs.core.Keyword(null,"tabset.close-other-tabs","tabset.close-other-tabs",3361386915),new cljs.core.Keyword(null,"desc","desc",1016984067),"Tabset: Close other tabs and tabsets",new cljs.core.Keyword(null,"hidden","hidden",4091384092),true,new cljs.core.Keyword(null,"exec","exec",1017031683),(function (active_obj){var tabs = lt.object.by_tag.call(null,new cljs.core.Keyword(null,"tabset.tab","tabset.tab",1444337222));var tabsets = lt.object.by_tag.call(null,new cljs.core.Keyword(null,"tabset","tabset",4427500575));var seq__7851_7882 = cljs.core.seq.call(null,cljs.core.filter.call(null,cljs.core.comp.call(null,cljs.core.not,cljs.core.PersistentHashSet.fromArray([active_obj], true)),tabs));var chunk__7852_7883 = null;var count__7853_7884 = 0;var i__7854_7885 = 0;while(true){
if((i__7854_7885 < count__7853_7884))
{var x_7886 = cljs.core._nth.call(null,chunk__7852_7883,i__7854_7885);lt.object.raise.call(null,x_7886,new cljs.core.Keyword(null,"close","close",1108660586));
{
var G__7887 = seq__7851_7882;
var G__7888 = chunk__7852_7883;
var G__7889 = count__7853_7884;
var G__7890 = (i__7854_7885 + 1);
seq__7851_7882 = G__7887;
chunk__7852_7883 = G__7888;
count__7853_7884 = G__7889;
i__7854_7885 = G__7890;
continue;
}
} else
{var temp__4092__auto___7891 = cljs.core.seq.call(null,seq__7851_7882);if(temp__4092__auto___7891)
{var seq__7851_7892__$1 = temp__4092__auto___7891;if(cljs.core.chunked_seq_QMARK_.call(null,seq__7851_7892__$1))
{var c__7112__auto___7893 = cljs.core.chunk_first.call(null,seq__7851_7892__$1);{
var G__7894 = cljs.core.chunk_rest.call(null,seq__7851_7892__$1);
var G__7895 = c__7112__auto___7893;
var G__7896 = cljs.core.count.call(null,c__7112__auto___7893);
var G__7897 = 0;
seq__7851_7882 = G__7894;
chunk__7852_7883 = G__7895;
count__7853_7884 = G__7896;
i__7854_7885 = G__7897;
continue;
}
} else
{var x_7898 = cljs.core.first.call(null,seq__7851_7892__$1);lt.object.raise.call(null,x_7898,new cljs.core.Keyword(null,"close","close",1108660586));
{
var G__7899 = cljs.core.next.call(null,seq__7851_7892__$1);
var G__7900 = null;
var G__7901 = 0;
var G__7902 = 0;
seq__7851_7882 = G__7899;
chunk__7852_7883 = G__7900;
count__7853_7884 = G__7901;
i__7854_7885 = G__7902;
continue;
}
}
} else
{}
}
break;
}
var seq__7855 = cljs.core.seq.call(null,cljs.core.filter.call(null,cljs.core.comp.call(null,cljs.core.not,cljs.core.PersistentHashSet.fromArray([new cljs.core.Keyword("lt.objs.tabs","tabset","lt.objs.tabs/tabset",3378091779).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,active_obj))], true)),tabsets));var chunk__7856 = null;var count__7857 = 0;var i__7858 = 0;while(true){
if((i__7858 < count__7857))
{var x = cljs.core._nth.call(null,chunk__7856,i__7858);lt.objs.tabs.rem_tabset.call(null,x);
{
var G__7903 = seq__7855;
var G__7904 = chunk__7856;
var G__7905 = count__7857;
var G__7906 = (i__7858 + 1);
seq__7855 = G__7903;
chunk__7856 = G__7904;
count__7857 = G__7905;
i__7858 = G__7906;
continue;
}
} else
{var temp__4092__auto__ = cljs.core.seq.call(null,seq__7855);if(temp__4092__auto__)
{var seq__7855__$1 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__7855__$1))
{var c__7112__auto__ = cljs.core.chunk_first.call(null,seq__7855__$1);{
var G__7907 = cljs.core.chunk_rest.call(null,seq__7855__$1);
var G__7908 = c__7112__auto__;
var G__7909 = cljs.core.count.call(null,c__7112__auto__);
var G__7910 = 0;
seq__7855 = G__7907;
chunk__7856 = G__7908;
count__7857 = G__7909;
i__7858 = G__7910;
continue;
}
} else
{var x = cljs.core.first.call(null,seq__7855__$1);lt.objs.tabs.rem_tabset.call(null,x);
{
var G__7911 = cljs.core.next.call(null,seq__7855__$1);
var G__7912 = null;
var G__7913 = 0;
var G__7914 = 0;
seq__7855 = G__7911;
chunk__7856 = G__7912;
count__7857 = G__7913;
i__7858 = G__7914;
continue;
}
}
} else
{return null;
}
}
break;
}
})], null));
lt.objs.command.command.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"command","command",1964298941),new cljs.core.Keyword(null,"tabset.close-tabs-to-right","tabset.close-tabs-to-right",1757769557),new cljs.core.Keyword(null,"desc","desc",1016984067),"Tab: Close tabs to the right",new cljs.core.Keyword(null,"hidden","hidden",4091384092),true,new cljs.core.Keyword(null,"exec","exec",1017031683),(function (active_obj){var index = lt.objs.tabs.__GT_index.call(null,active_obj);var tabs = cljs.core.filter.call(null,((function (index){
return (function (p1__7859_SHARP_){return (lt.objs.tabs.__GT_index.call(null,p1__7859_SHARP_) > index);
});})(index))
,new cljs.core.Keyword(null,"objs","objs",1017308622).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,new cljs.core.Keyword("lt.objs.tabs","tabset","lt.objs.tabs/tabset",3378091779).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,active_obj)))));var seq__7860 = cljs.core.seq.call(null,tabs);var chunk__7861 = null;var count__7862 = 0;var i__7863 = 0;while(true){
if((i__7863 < count__7862))
{var x = cljs.core._nth.call(null,chunk__7861,i__7863);lt.object.raise.call(null,x,new cljs.core.Keyword(null,"close","close",1108660586));
{
var G__7915 = seq__7860;
var G__7916 = chunk__7861;
var G__7917 = count__7862;
var G__7918 = (i__7863 + 1);
seq__7860 = G__7915;
chunk__7861 = G__7916;
count__7862 = G__7917;
i__7863 = G__7918;
continue;
}
} else
{var temp__4092__auto__ = cljs.core.seq.call(null,seq__7860);if(temp__4092__auto__)
{var seq__7860__$1 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__7860__$1))
{var c__7112__auto__ = cljs.core.chunk_first.call(null,seq__7860__$1);{
var G__7919 = cljs.core.chunk_rest.call(null,seq__7860__$1);
var G__7920 = c__7112__auto__;
var G__7921 = cljs.core.count.call(null,c__7112__auto__);
var G__7922 = 0;
seq__7860 = G__7919;
chunk__7861 = G__7920;
count__7862 = G__7921;
i__7863 = G__7922;
continue;
}
} else
{var x = cljs.core.first.call(null,seq__7860__$1);lt.object.raise.call(null,x,new cljs.core.Keyword(null,"close","close",1108660586));
{
var G__7923 = cljs.core.next.call(null,seq__7860__$1);
var G__7924 = null;
var G__7925 = 0;
var G__7926 = 0;
seq__7860 = G__7923;
chunk__7861 = G__7924;
count__7862 = G__7925;
i__7863 = G__7926;
continue;
}
}
} else
{return null;
}
}
break;
}
})], null));
lt.objs.command.command.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"command","command",1964298941),new cljs.core.Keyword(null,"tabset.close-all-but-active","tabset.close-all-but-active",3205009926),new cljs.core.Keyword(null,"desc","desc",1016984067),"Tabset: Close all tabs/tabsets except active",new cljs.core.Keyword(null,"exec","exec",1017031683),(function (){var tabs = lt.object.by_tag.call(null,new cljs.core.Keyword(null,"tabset.tab","tabset.tab",1444337222));var tabsets = lt.object.by_tag.call(null,new cljs.core.Keyword(null,"tabset","tabset",4427500575));var active_tabset = lt.objs.context.__GT_obj.call(null,new cljs.core.Keyword(null,"tabset","tabset",4427500575));var active_tab = new cljs.core.Keyword(null,"active-obj","active-obj",3056705826).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,active_tabset));var seq__7864_7927 = cljs.core.seq.call(null,cljs.core.filter.call(null,cljs.core.comp.call(null,cljs.core.not,cljs.core.PersistentHashSet.fromArray([active_tab], true)),tabs));var chunk__7865_7928 = null;var count__7866_7929 = 0;var i__7867_7930 = 0;while(true){
if((i__7867_7930 < count__7866_7929))
{var x_7931 = cljs.core._nth.call(null,chunk__7865_7928,i__7867_7930);lt.object.raise.call(null,x_7931,new cljs.core.Keyword(null,"close","close",1108660586));
{
var G__7932 = seq__7864_7927;
var G__7933 = chunk__7865_7928;
var G__7934 = count__7866_7929;
var G__7935 = (i__7867_7930 + 1);
seq__7864_7927 = G__7932;
chunk__7865_7928 = G__7933;
count__7866_7929 = G__7934;
i__7867_7930 = G__7935;
continue;
}
} else
{var temp__4092__auto___7936 = cljs.core.seq.call(null,seq__7864_7927);if(temp__4092__auto___7936)
{var seq__7864_7937__$1 = temp__4092__auto___7936;if(cljs.core.chunked_seq_QMARK_.call(null,seq__7864_7937__$1))
{var c__7112__auto___7938 = cljs.core.chunk_first.call(null,seq__7864_7937__$1);{
var G__7939 = cljs.core.chunk_rest.call(null,seq__7864_7937__$1);
var G__7940 = c__7112__auto___7938;
var G__7941 = cljs.core.count.call(null,c__7112__auto___7938);
var G__7942 = 0;
seq__7864_7927 = G__7939;
chunk__7865_7928 = G__7940;
count__7866_7929 = G__7941;
i__7867_7930 = G__7942;
continue;
}
} else
{var x_7943 = cljs.core.first.call(null,seq__7864_7937__$1);lt.object.raise.call(null,x_7943,new cljs.core.Keyword(null,"close","close",1108660586));
{
var G__7944 = cljs.core.next.call(null,seq__7864_7937__$1);
var G__7945 = null;
var G__7946 = 0;
var G__7947 = 0;
seq__7864_7927 = G__7944;
chunk__7865_7928 = G__7945;
count__7866_7929 = G__7946;
i__7867_7930 = G__7947;
continue;
}
}
} else
{}
}
break;
}
var seq__7868 = cljs.core.seq.call(null,cljs.core.filter.call(null,cljs.core.comp.call(null,cljs.core.not,cljs.core.PersistentHashSet.fromArray([active_tabset], true)),tabsets));var chunk__7869 = null;var count__7870 = 0;var i__7871 = 0;while(true){
if((i__7871 < count__7870))
{var x = cljs.core._nth.call(null,chunk__7869,i__7871);lt.objs.tabs.rem_tabset.call(null,x);
{
var G__7948 = seq__7868;
var G__7949 = chunk__7869;
var G__7950 = count__7870;
var G__7951 = (i__7871 + 1);
seq__7868 = G__7948;
chunk__7869 = G__7949;
count__7870 = G__7950;
i__7871 = G__7951;
continue;
}
} else
{var temp__4092__auto__ = cljs.core.seq.call(null,seq__7868);if(temp__4092__auto__)
{var seq__7868__$1 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__7868__$1))
{var c__7112__auto__ = cljs.core.chunk_first.call(null,seq__7868__$1);{
var G__7952 = cljs.core.chunk_rest.call(null,seq__7868__$1);
var G__7953 = c__7112__auto__;
var G__7954 = cljs.core.count.call(null,c__7112__auto__);
var G__7955 = 0;
seq__7868 = G__7952;
chunk__7869 = G__7953;
count__7870 = G__7954;
i__7871 = G__7955;
continue;
}
} else
{var x = cljs.core.first.call(null,seq__7868__$1);lt.objs.tabs.rem_tabset.call(null,x);
{
var G__7956 = cljs.core.next.call(null,seq__7868__$1);
var G__7957 = null;
var G__7958 = 0;
var G__7959 = 0;
seq__7868 = G__7956;
chunk__7869 = G__7957;
count__7870 = G__7958;
i__7871 = G__7959;
continue;
}
}
} else
{return null;
}
}
break;
}
})], null));
lt.plugins.mortalapeman.__BEH__editor__DOT__capture_position = (function __BEH__editor__DOT__capture_position(this$){return lt.object.merge_BANG_.call(null,this$,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("lt.plugins.mortalapeman","previous-pos","lt.plugins.mortalapeman/previous-pos",2477106296),lt.objs.editor.__GT_cursor.call(null,this$)], null));
});
lt.object.behavior_STAR_.call(null,new cljs.core.Keyword("lt.plugins.mortalapeman","editor.capture-position","lt.plugins.mortalapeman/editor.capture-position",2434720805),new cljs.core.Keyword(null,"reaction","reaction",4441361819),lt.plugins.mortalapeman.__BEH__editor__DOT__capture_position,new cljs.core.Keyword(null,"triggers","triggers",2516997421),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"position.capture!","position.capture!",3117460530),null], null), null));
lt.plugins.mortalapeman.__BEH__editor__DOT__reset_position = (function __BEH__editor__DOT__reset_position(this$){lt.objs.editor.move_cursor.call(null,this$,new cljs.core.Keyword("lt.plugins.mortalapeman","previous-pos","lt.plugins.mortalapeman/previous-pos",2477106296).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,this$)));
return cljs.core.swap_BANG_.call(null,this$,cljs.core.dissoc,new cljs.core.Keyword("lt.plugins.mortalapeman","previous-pos","lt.plugins.mortalapeman/previous-pos",2477106296));
});
lt.object.behavior_STAR_.call(null,new cljs.core.Keyword("lt.plugins.mortalapeman","editor.reset-position","lt.plugins.mortalapeman/editor.reset-position",4576402558),new cljs.core.Keyword(null,"reaction","reaction",4441361819),lt.plugins.mortalapeman.__BEH__editor__DOT__reset_position,new cljs.core.Keyword(null,"triggers","triggers",2516997421),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"position.reset!","position.reset!",2821364873),null], null), null));
lt.objs.command.command.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"command","command",1964298941),new cljs.core.Keyword(null,"editor.capture-position","editor.capture-position",4265296291),new cljs.core.Keyword(null,"desc","desc",1016984067),"Editor: Save current cursor position",new cljs.core.Keyword(null,"exec","exec",1017031683),(function (){return lt.object.raise.call(null,lt.objs.editor.pool.last_active.call(null),new cljs.core.Keyword(null,"position.capture!","position.capture!",3117460530));
})], null));
lt.objs.command.command.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"command","command",1964298941),new cljs.core.Keyword(null,"editor.reset-position","editor.reset-position",2120468986),new cljs.core.Keyword(null,"desc","desc",1016984067),"Editor: Reset cursor to previously captured position",new cljs.core.Keyword(null,"exec","exec",1017031683),(function (){return lt.object.raise.call(null,lt.objs.editor.pool.last_active.call(null),new cljs.core.Keyword(null,"position.reset!","position.reset!",2821364873));
})], null));
}

//# sourceMappingURL=mortalapeman_compiled.js.map