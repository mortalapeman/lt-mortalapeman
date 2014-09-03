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
lt.plugins.mortalapeman.__BEH__subfolder_menu = (function __BEH__subfolder_menu(this$,items){return cljs.core.conj.call(null,items,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"label","label",1116631654),"Open Terminal Here",new cljs.core.Keyword(null,"order","order",1119910592),7,new cljs.core.Keyword(null,"click","click",1108654330),(function (){var pred__8077 = cljs.core._EQ_;var expr__8078 = process.platform;if(cljs.core.truth_(pred__8077.call(null,"linux",expr__8078)))
{return lt.plugins.mortalapeman.open_gnome_terminal.call(null,new cljs.core.Keyword(null,"path","path",1017337751).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,this$)));
} else
{throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(expr__8078)].join('')));
}
})], null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"label","label",1116631654),"Open in file manager",new cljs.core.Keyword(null,"order","order",1119910592),8,new cljs.core.Keyword(null,"click","click",1108654330),(function (){var pred__8080 = cljs.core._EQ_;var expr__8081 = process.platform;if(cljs.core.truth_(pred__8080.call(null,"linux",expr__8081)))
{return lt.plugins.mortalapeman.open_file_manager.call(null,new cljs.core.Keyword(null,"path","path",1017337751).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,this$)));
} else
{throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(expr__8081)].join('')));
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
lt.plugins.mortalapeman.tabset_empty_QMARK_ = (function tabset_empty_QMARK_(this$){var temp__4092__auto__ = lt.plugins.mortalapeman.ed__GT_tabset.call(null,this$);if(cljs.core.truth_(temp__4092__auto__))
{var tabset = temp__4092__auto__;return cljs.core.empty_QMARK_.call(null,cljs.core.filter.call(null,cljs.core.comp.call(null,cljs.core.not,cljs.core.PersistentHashSet.fromArray([this$], true)),new cljs.core.Keyword(null,"objs","objs",1017308622).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,tabset))));
} else
{return null;
}
});
lt.plugins.mortalapeman.__BEH__tabset__DOT__tab__DOT__close_when_empty = (function __BEH__tabset__DOT__tab__DOT__close_when_empty(this$){if(cljs.core.truth_(lt.plugins.mortalapeman.tabset_empty_QMARK_.call(null,this$)))
{return lt.objs.tabs.rem_tabset.call(null,lt.plugins.mortalapeman.ed__GT_tabset.call(null,this$));
} else
{return null;
}
});
lt.object.behavior_STAR_.call(null,new cljs.core.Keyword("lt.plugins.mortalapeman","tabset.tab.close-when-empty","lt.plugins.mortalapeman/tabset.tab.close-when-empty",2854918589),new cljs.core.Keyword(null,"reaction","reaction",4441361819),lt.plugins.mortalapeman.__BEH__tabset__DOT__tab__DOT__close_when_empty,new cljs.core.Keyword(null,"desc","desc",1016984067),"Closes the active tabset of the closed tab when tabset is empty.",new cljs.core.Keyword(null,"triggers","triggers",2516997421),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"close","close",1108660586),null], null), null));
lt.objs.command.command.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"command","command",1964298941),new cljs.core.Keyword(null,"tabset.close-other-tabs","tabset.close-other-tabs",3361386915),new cljs.core.Keyword(null,"desc","desc",1016984067),"Tabset: Close other tabs and tabsets",new cljs.core.Keyword(null,"hidden","hidden",4091384092),true,new cljs.core.Keyword(null,"exec","exec",1017031683),(function (active_obj){var tabs = lt.object.by_tag.call(null,new cljs.core.Keyword(null,"tabset.tab","tabset.tab",1444337222));var tabsets = lt.object.by_tag.call(null,new cljs.core.Keyword(null,"tabset","tabset",4427500575));var seq__8083_8104 = cljs.core.seq.call(null,cljs.core.filter.call(null,cljs.core.comp.call(null,cljs.core.not,cljs.core.PersistentHashSet.fromArray([active_obj], true)),tabs));var chunk__8084_8105 = null;var count__8085_8106 = 0;var i__8086_8107 = 0;while(true){
if((i__8086_8107 < count__8085_8106))
{var x_8108 = cljs.core._nth.call(null,chunk__8084_8105,i__8086_8107);lt.object.raise.call(null,x_8108,new cljs.core.Keyword(null,"close","close",1108660586));
{
var G__8109 = seq__8083_8104;
var G__8110 = chunk__8084_8105;
var G__8111 = count__8085_8106;
var G__8112 = (i__8086_8107 + 1);
seq__8083_8104 = G__8109;
chunk__8084_8105 = G__8110;
count__8085_8106 = G__8111;
i__8086_8107 = G__8112;
continue;
}
} else
{var temp__4092__auto___8113 = cljs.core.seq.call(null,seq__8083_8104);if(temp__4092__auto___8113)
{var seq__8083_8114__$1 = temp__4092__auto___8113;if(cljs.core.chunked_seq_QMARK_.call(null,seq__8083_8114__$1))
{var c__7112__auto___8115 = cljs.core.chunk_first.call(null,seq__8083_8114__$1);{
var G__8116 = cljs.core.chunk_rest.call(null,seq__8083_8114__$1);
var G__8117 = c__7112__auto___8115;
var G__8118 = cljs.core.count.call(null,c__7112__auto___8115);
var G__8119 = 0;
seq__8083_8104 = G__8116;
chunk__8084_8105 = G__8117;
count__8085_8106 = G__8118;
i__8086_8107 = G__8119;
continue;
}
} else
{var x_8120 = cljs.core.first.call(null,seq__8083_8114__$1);lt.object.raise.call(null,x_8120,new cljs.core.Keyword(null,"close","close",1108660586));
{
var G__8121 = cljs.core.next.call(null,seq__8083_8114__$1);
var G__8122 = null;
var G__8123 = 0;
var G__8124 = 0;
seq__8083_8104 = G__8121;
chunk__8084_8105 = G__8122;
count__8085_8106 = G__8123;
i__8086_8107 = G__8124;
continue;
}
}
} else
{}
}
break;
}
var seq__8087 = cljs.core.seq.call(null,cljs.core.filter.call(null,cljs.core.comp.call(null,cljs.core.not,cljs.core.PersistentHashSet.fromArray([new cljs.core.Keyword("lt.objs.tabs","tabset","lt.objs.tabs/tabset",3378091779).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,active_obj))], true)),tabsets));var chunk__8088 = null;var count__8089 = 0;var i__8090 = 0;while(true){
if((i__8090 < count__8089))
{var x = cljs.core._nth.call(null,chunk__8088,i__8090);lt.objs.tabs.rem_tabset.call(null,x);
{
var G__8125 = seq__8087;
var G__8126 = chunk__8088;
var G__8127 = count__8089;
var G__8128 = (i__8090 + 1);
seq__8087 = G__8125;
chunk__8088 = G__8126;
count__8089 = G__8127;
i__8090 = G__8128;
continue;
}
} else
{var temp__4092__auto__ = cljs.core.seq.call(null,seq__8087);if(temp__4092__auto__)
{var seq__8087__$1 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__8087__$1))
{var c__7112__auto__ = cljs.core.chunk_first.call(null,seq__8087__$1);{
var G__8129 = cljs.core.chunk_rest.call(null,seq__8087__$1);
var G__8130 = c__7112__auto__;
var G__8131 = cljs.core.count.call(null,c__7112__auto__);
var G__8132 = 0;
seq__8087 = G__8129;
chunk__8088 = G__8130;
count__8089 = G__8131;
i__8090 = G__8132;
continue;
}
} else
{var x = cljs.core.first.call(null,seq__8087__$1);lt.objs.tabs.rem_tabset.call(null,x);
{
var G__8133 = cljs.core.next.call(null,seq__8087__$1);
var G__8134 = null;
var G__8135 = 0;
var G__8136 = 0;
seq__8087 = G__8133;
chunk__8088 = G__8134;
count__8089 = G__8135;
i__8090 = G__8136;
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
return (function (p1__8091_SHARP_){return (lt.objs.tabs.__GT_index.call(null,p1__8091_SHARP_) > index);
});})(index))
,new cljs.core.Keyword(null,"objs","objs",1017308622).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,new cljs.core.Keyword("lt.objs.tabs","tabset","lt.objs.tabs/tabset",3378091779).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,active_obj)))));var seq__8092 = cljs.core.seq.call(null,tabs);var chunk__8093 = null;var count__8094 = 0;var i__8095 = 0;while(true){
if((i__8095 < count__8094))
{var x = cljs.core._nth.call(null,chunk__8093,i__8095);lt.object.raise.call(null,x,new cljs.core.Keyword(null,"close","close",1108660586));
{
var G__8137 = seq__8092;
var G__8138 = chunk__8093;
var G__8139 = count__8094;
var G__8140 = (i__8095 + 1);
seq__8092 = G__8137;
chunk__8093 = G__8138;
count__8094 = G__8139;
i__8095 = G__8140;
continue;
}
} else
{var temp__4092__auto__ = cljs.core.seq.call(null,seq__8092);if(temp__4092__auto__)
{var seq__8092__$1 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__8092__$1))
{var c__7112__auto__ = cljs.core.chunk_first.call(null,seq__8092__$1);{
var G__8141 = cljs.core.chunk_rest.call(null,seq__8092__$1);
var G__8142 = c__7112__auto__;
var G__8143 = cljs.core.count.call(null,c__7112__auto__);
var G__8144 = 0;
seq__8092 = G__8141;
chunk__8093 = G__8142;
count__8094 = G__8143;
i__8095 = G__8144;
continue;
}
} else
{var x = cljs.core.first.call(null,seq__8092__$1);lt.object.raise.call(null,x,new cljs.core.Keyword(null,"close","close",1108660586));
{
var G__8145 = cljs.core.next.call(null,seq__8092__$1);
var G__8146 = null;
var G__8147 = 0;
var G__8148 = 0;
seq__8092 = G__8145;
chunk__8093 = G__8146;
count__8094 = G__8147;
i__8095 = G__8148;
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
lt.objs.command.command.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"command","command",1964298941),new cljs.core.Keyword(null,"tabset.close-all-but-active","tabset.close-all-but-active",3205009926),new cljs.core.Keyword(null,"desc","desc",1016984067),"Tabset: Close all tabs/tabsets except active",new cljs.core.Keyword(null,"exec","exec",1017031683),(function (){var tabs = lt.object.by_tag.call(null,new cljs.core.Keyword(null,"tabset.tab","tabset.tab",1444337222));var tabsets = lt.object.by_tag.call(null,new cljs.core.Keyword(null,"tabset","tabset",4427500575));var active_tabset = lt.objs.context.__GT_obj.call(null,new cljs.core.Keyword(null,"tabset","tabset",4427500575));var active_tab = new cljs.core.Keyword(null,"active-obj","active-obj",3056705826).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,active_tabset));var seq__8096_8149 = cljs.core.seq.call(null,cljs.core.filter.call(null,cljs.core.comp.call(null,cljs.core.not,cljs.core.PersistentHashSet.fromArray([active_tab], true)),tabs));var chunk__8097_8150 = null;var count__8098_8151 = 0;var i__8099_8152 = 0;while(true){
if((i__8099_8152 < count__8098_8151))
{var x_8153 = cljs.core._nth.call(null,chunk__8097_8150,i__8099_8152);lt.object.raise.call(null,x_8153,new cljs.core.Keyword(null,"close","close",1108660586));
{
var G__8154 = seq__8096_8149;
var G__8155 = chunk__8097_8150;
var G__8156 = count__8098_8151;
var G__8157 = (i__8099_8152 + 1);
seq__8096_8149 = G__8154;
chunk__8097_8150 = G__8155;
count__8098_8151 = G__8156;
i__8099_8152 = G__8157;
continue;
}
} else
{var temp__4092__auto___8158 = cljs.core.seq.call(null,seq__8096_8149);if(temp__4092__auto___8158)
{var seq__8096_8159__$1 = temp__4092__auto___8158;if(cljs.core.chunked_seq_QMARK_.call(null,seq__8096_8159__$1))
{var c__7112__auto___8160 = cljs.core.chunk_first.call(null,seq__8096_8159__$1);{
var G__8161 = cljs.core.chunk_rest.call(null,seq__8096_8159__$1);
var G__8162 = c__7112__auto___8160;
var G__8163 = cljs.core.count.call(null,c__7112__auto___8160);
var G__8164 = 0;
seq__8096_8149 = G__8161;
chunk__8097_8150 = G__8162;
count__8098_8151 = G__8163;
i__8099_8152 = G__8164;
continue;
}
} else
{var x_8165 = cljs.core.first.call(null,seq__8096_8159__$1);lt.object.raise.call(null,x_8165,new cljs.core.Keyword(null,"close","close",1108660586));
{
var G__8166 = cljs.core.next.call(null,seq__8096_8159__$1);
var G__8167 = null;
var G__8168 = 0;
var G__8169 = 0;
seq__8096_8149 = G__8166;
chunk__8097_8150 = G__8167;
count__8098_8151 = G__8168;
i__8099_8152 = G__8169;
continue;
}
}
} else
{}
}
break;
}
var seq__8100 = cljs.core.seq.call(null,cljs.core.filter.call(null,cljs.core.comp.call(null,cljs.core.not,cljs.core.PersistentHashSet.fromArray([active_tabset], true)),tabsets));var chunk__8101 = null;var count__8102 = 0;var i__8103 = 0;while(true){
if((i__8103 < count__8102))
{var x = cljs.core._nth.call(null,chunk__8101,i__8103);lt.objs.tabs.rem_tabset.call(null,x);
{
var G__8170 = seq__8100;
var G__8171 = chunk__8101;
var G__8172 = count__8102;
var G__8173 = (i__8103 + 1);
seq__8100 = G__8170;
chunk__8101 = G__8171;
count__8102 = G__8172;
i__8103 = G__8173;
continue;
}
} else
{var temp__4092__auto__ = cljs.core.seq.call(null,seq__8100);if(temp__4092__auto__)
{var seq__8100__$1 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__8100__$1))
{var c__7112__auto__ = cljs.core.chunk_first.call(null,seq__8100__$1);{
var G__8174 = cljs.core.chunk_rest.call(null,seq__8100__$1);
var G__8175 = c__7112__auto__;
var G__8176 = cljs.core.count.call(null,c__7112__auto__);
var G__8177 = 0;
seq__8100 = G__8174;
chunk__8101 = G__8175;
count__8102 = G__8176;
i__8103 = G__8177;
continue;
}
} else
{var x = cljs.core.first.call(null,seq__8100__$1);lt.objs.tabs.rem_tabset.call(null,x);
{
var G__8178 = cljs.core.next.call(null,seq__8100__$1);
var G__8179 = null;
var G__8180 = 0;
var G__8181 = 0;
seq__8100 = G__8178;
chunk__8101 = G__8179;
count__8102 = G__8180;
i__8103 = G__8181;
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