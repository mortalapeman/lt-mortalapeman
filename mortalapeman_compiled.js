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
lt.plugins.mortalapeman.__BEH__subfolder_menu = (function __BEH__subfolder_menu(this$,items){return cljs.core.conj.call(null,items,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"label","label",1116631654),"Open Terminal Here",new cljs.core.Keyword(null,"order","order",1119910592),7,new cljs.core.Keyword(null,"click","click",1108654330),(function (){var pred__9060 = cljs.core._EQ_;var expr__9061 = process.platform;if(cljs.core.truth_(pred__9060.call(null,"linux",expr__9061)))
{return lt.plugins.mortalapeman.open_gnome_terminal.call(null,new cljs.core.Keyword(null,"path","path",1017337751).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,this$)));
} else
{throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(expr__9061)].join('')));
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
lt.object.behavior_STAR_.call(null,new cljs.core.Keyword("lt.plugins.mortalapeman","tabset.tab.close-when-empty","lt.plugins.mortalapeman/tabset.tab.close-when-empty",2854918589),new cljs.core.Keyword(null,"reaction","reaction",4441361819),lt.plugins.mortalapeman.__BEH__tabset__DOT__tab__DOT__close_when_empty,new cljs.core.Keyword(null,"triggers","triggers",2516997421),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"close","close",1108660586),null], null), null));
lt.objs.command.command.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"command","command",1964298941),new cljs.core.Keyword(null,"tabset.close-other-tabs","tabset.close-other-tabs",3361386915),new cljs.core.Keyword(null,"desc","desc",1016984067),"Tabset: Close other tabs and tabsets",new cljs.core.Keyword(null,"hidden","hidden",4091384092),true,new cljs.core.Keyword(null,"exec","exec",1017031683),(function (active_obj){var tabs = lt.object.by_tag.call(null,new cljs.core.Keyword(null,"tabset.tab","tabset.tab",1444337222));var tabsets = lt.object.by_tag.call(null,new cljs.core.Keyword(null,"tabset","tabset",4427500575));var seq__9063_9084 = cljs.core.seq.call(null,cljs.core.filter.call(null,cljs.core.comp.call(null,cljs.core.not,cljs.core.PersistentHashSet.fromArray([active_obj], true)),tabs));var chunk__9064_9085 = null;var count__9065_9086 = 0;var i__9066_9087 = 0;while(true){
if((i__9066_9087 < count__9065_9086))
{var x_9088 = cljs.core._nth.call(null,chunk__9064_9085,i__9066_9087);lt.object.raise.call(null,x_9088,new cljs.core.Keyword(null,"close","close",1108660586));
{
var G__9089 = seq__9063_9084;
var G__9090 = chunk__9064_9085;
var G__9091 = count__9065_9086;
var G__9092 = (i__9066_9087 + 1);
seq__9063_9084 = G__9089;
chunk__9064_9085 = G__9090;
count__9065_9086 = G__9091;
i__9066_9087 = G__9092;
continue;
}
} else
{var temp__4092__auto___9093 = cljs.core.seq.call(null,seq__9063_9084);if(temp__4092__auto___9093)
{var seq__9063_9094__$1 = temp__4092__auto___9093;if(cljs.core.chunked_seq_QMARK_.call(null,seq__9063_9094__$1))
{var c__7112__auto___9095 = cljs.core.chunk_first.call(null,seq__9063_9094__$1);{
var G__9096 = cljs.core.chunk_rest.call(null,seq__9063_9094__$1);
var G__9097 = c__7112__auto___9095;
var G__9098 = cljs.core.count.call(null,c__7112__auto___9095);
var G__9099 = 0;
seq__9063_9084 = G__9096;
chunk__9064_9085 = G__9097;
count__9065_9086 = G__9098;
i__9066_9087 = G__9099;
continue;
}
} else
{var x_9100 = cljs.core.first.call(null,seq__9063_9094__$1);lt.object.raise.call(null,x_9100,new cljs.core.Keyword(null,"close","close",1108660586));
{
var G__9101 = cljs.core.next.call(null,seq__9063_9094__$1);
var G__9102 = null;
var G__9103 = 0;
var G__9104 = 0;
seq__9063_9084 = G__9101;
chunk__9064_9085 = G__9102;
count__9065_9086 = G__9103;
i__9066_9087 = G__9104;
continue;
}
}
} else
{}
}
break;
}
var seq__9067 = cljs.core.seq.call(null,cljs.core.filter.call(null,cljs.core.comp.call(null,cljs.core.not,cljs.core.PersistentHashSet.fromArray([new cljs.core.Keyword("lt.objs.tabs","tabset","lt.objs.tabs/tabset",3378091779).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,active_obj))], true)),tabsets));var chunk__9068 = null;var count__9069 = 0;var i__9070 = 0;while(true){
if((i__9070 < count__9069))
{var x = cljs.core._nth.call(null,chunk__9068,i__9070);lt.objs.tabs.rem_tabset.call(null,x);
{
var G__9105 = seq__9067;
var G__9106 = chunk__9068;
var G__9107 = count__9069;
var G__9108 = (i__9070 + 1);
seq__9067 = G__9105;
chunk__9068 = G__9106;
count__9069 = G__9107;
i__9070 = G__9108;
continue;
}
} else
{var temp__4092__auto__ = cljs.core.seq.call(null,seq__9067);if(temp__4092__auto__)
{var seq__9067__$1 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__9067__$1))
{var c__7112__auto__ = cljs.core.chunk_first.call(null,seq__9067__$1);{
var G__9109 = cljs.core.chunk_rest.call(null,seq__9067__$1);
var G__9110 = c__7112__auto__;
var G__9111 = cljs.core.count.call(null,c__7112__auto__);
var G__9112 = 0;
seq__9067 = G__9109;
chunk__9068 = G__9110;
count__9069 = G__9111;
i__9070 = G__9112;
continue;
}
} else
{var x = cljs.core.first.call(null,seq__9067__$1);lt.objs.tabs.rem_tabset.call(null,x);
{
var G__9113 = cljs.core.next.call(null,seq__9067__$1);
var G__9114 = null;
var G__9115 = 0;
var G__9116 = 0;
seq__9067 = G__9113;
chunk__9068 = G__9114;
count__9069 = G__9115;
i__9070 = G__9116;
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
return (function (p1__9071_SHARP_){return (lt.objs.tabs.__GT_index.call(null,p1__9071_SHARP_) > index);
});})(index))
,new cljs.core.Keyword(null,"objs","objs",1017308622).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,new cljs.core.Keyword("lt.objs.tabs","tabset","lt.objs.tabs/tabset",3378091779).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,active_obj)))));var seq__9072 = cljs.core.seq.call(null,tabs);var chunk__9073 = null;var count__9074 = 0;var i__9075 = 0;while(true){
if((i__9075 < count__9074))
{var x = cljs.core._nth.call(null,chunk__9073,i__9075);lt.object.raise.call(null,x,new cljs.core.Keyword(null,"close","close",1108660586));
{
var G__9117 = seq__9072;
var G__9118 = chunk__9073;
var G__9119 = count__9074;
var G__9120 = (i__9075 + 1);
seq__9072 = G__9117;
chunk__9073 = G__9118;
count__9074 = G__9119;
i__9075 = G__9120;
continue;
}
} else
{var temp__4092__auto__ = cljs.core.seq.call(null,seq__9072);if(temp__4092__auto__)
{var seq__9072__$1 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__9072__$1))
{var c__7112__auto__ = cljs.core.chunk_first.call(null,seq__9072__$1);{
var G__9121 = cljs.core.chunk_rest.call(null,seq__9072__$1);
var G__9122 = c__7112__auto__;
var G__9123 = cljs.core.count.call(null,c__7112__auto__);
var G__9124 = 0;
seq__9072 = G__9121;
chunk__9073 = G__9122;
count__9074 = G__9123;
i__9075 = G__9124;
continue;
}
} else
{var x = cljs.core.first.call(null,seq__9072__$1);lt.object.raise.call(null,x,new cljs.core.Keyword(null,"close","close",1108660586));
{
var G__9125 = cljs.core.next.call(null,seq__9072__$1);
var G__9126 = null;
var G__9127 = 0;
var G__9128 = 0;
seq__9072 = G__9125;
chunk__9073 = G__9126;
count__9074 = G__9127;
i__9075 = G__9128;
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
lt.objs.command.command.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"command","command",1964298941),new cljs.core.Keyword(null,"tabset.close-all-but-active","tabset.close-all-but-active",3205009926),new cljs.core.Keyword(null,"desc","desc",1016984067),"Tabset: Close all tabs/tabsets except active",new cljs.core.Keyword(null,"exec","exec",1017031683),(function (){var tabs = lt.object.by_tag.call(null,new cljs.core.Keyword(null,"tabset.tab","tabset.tab",1444337222));var tabsets = lt.object.by_tag.call(null,new cljs.core.Keyword(null,"tabset","tabset",4427500575));var active_tabset = lt.objs.context.__GT_obj.call(null,new cljs.core.Keyword(null,"tabset","tabset",4427500575));var active_tab = new cljs.core.Keyword(null,"active-obj","active-obj",3056705826).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,active_tabset));var seq__9076_9129 = cljs.core.seq.call(null,cljs.core.filter.call(null,cljs.core.comp.call(null,cljs.core.not,cljs.core.PersistentHashSet.fromArray([active_tab], true)),tabs));var chunk__9077_9130 = null;var count__9078_9131 = 0;var i__9079_9132 = 0;while(true){
if((i__9079_9132 < count__9078_9131))
{var x_9133 = cljs.core._nth.call(null,chunk__9077_9130,i__9079_9132);lt.object.raise.call(null,x_9133,new cljs.core.Keyword(null,"close","close",1108660586));
{
var G__9134 = seq__9076_9129;
var G__9135 = chunk__9077_9130;
var G__9136 = count__9078_9131;
var G__9137 = (i__9079_9132 + 1);
seq__9076_9129 = G__9134;
chunk__9077_9130 = G__9135;
count__9078_9131 = G__9136;
i__9079_9132 = G__9137;
continue;
}
} else
{var temp__4092__auto___9138 = cljs.core.seq.call(null,seq__9076_9129);if(temp__4092__auto___9138)
{var seq__9076_9139__$1 = temp__4092__auto___9138;if(cljs.core.chunked_seq_QMARK_.call(null,seq__9076_9139__$1))
{var c__7112__auto___9140 = cljs.core.chunk_first.call(null,seq__9076_9139__$1);{
var G__9141 = cljs.core.chunk_rest.call(null,seq__9076_9139__$1);
var G__9142 = c__7112__auto___9140;
var G__9143 = cljs.core.count.call(null,c__7112__auto___9140);
var G__9144 = 0;
seq__9076_9129 = G__9141;
chunk__9077_9130 = G__9142;
count__9078_9131 = G__9143;
i__9079_9132 = G__9144;
continue;
}
} else
{var x_9145 = cljs.core.first.call(null,seq__9076_9139__$1);lt.object.raise.call(null,x_9145,new cljs.core.Keyword(null,"close","close",1108660586));
{
var G__9146 = cljs.core.next.call(null,seq__9076_9139__$1);
var G__9147 = null;
var G__9148 = 0;
var G__9149 = 0;
seq__9076_9129 = G__9146;
chunk__9077_9130 = G__9147;
count__9078_9131 = G__9148;
i__9079_9132 = G__9149;
continue;
}
}
} else
{}
}
break;
}
var seq__9080 = cljs.core.seq.call(null,cljs.core.filter.call(null,cljs.core.comp.call(null,cljs.core.not,cljs.core.PersistentHashSet.fromArray([active_tabset], true)),tabsets));var chunk__9081 = null;var count__9082 = 0;var i__9083 = 0;while(true){
if((i__9083 < count__9082))
{var x = cljs.core._nth.call(null,chunk__9081,i__9083);lt.objs.tabs.rem_tabset.call(null,x);
{
var G__9150 = seq__9080;
var G__9151 = chunk__9081;
var G__9152 = count__9082;
var G__9153 = (i__9083 + 1);
seq__9080 = G__9150;
chunk__9081 = G__9151;
count__9082 = G__9152;
i__9083 = G__9153;
continue;
}
} else
{var temp__4092__auto__ = cljs.core.seq.call(null,seq__9080);if(temp__4092__auto__)
{var seq__9080__$1 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__9080__$1))
{var c__7112__auto__ = cljs.core.chunk_first.call(null,seq__9080__$1);{
var G__9154 = cljs.core.chunk_rest.call(null,seq__9080__$1);
var G__9155 = c__7112__auto__;
var G__9156 = cljs.core.count.call(null,c__7112__auto__);
var G__9157 = 0;
seq__9080 = G__9154;
chunk__9081 = G__9155;
count__9082 = G__9156;
i__9083 = G__9157;
continue;
}
} else
{var x = cljs.core.first.call(null,seq__9080__$1);lt.objs.tabs.rem_tabset.call(null,x);
{
var G__9158 = cljs.core.next.call(null,seq__9080__$1);
var G__9159 = null;
var G__9160 = 0;
var G__9161 = 0;
seq__9080 = G__9158;
chunk__9081 = G__9159;
count__9082 = G__9160;
i__9083 = G__9161;
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
lt.objs.command.exec_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"command","command",1964298941),new cljs.core.Keyword(null,"editor.capture-position","editor.capture-position",4265296291),new cljs.core.Keyword(null,"desc","desc",1016984067),"Editor: Save current cursor position",new cljs.core.Keyword(null,"exec","exec",1017031683),(function (){return lt.object.raise.call(null,lt.objs.editor.pool.last_active.call(null),new cljs.core.Keyword(null,"position.capture!","position.capture!",3117460530));
})], null));
lt.objs.command.exec_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"command","command",1964298941),new cljs.core.Keyword(null,"editor.reset-position","editor.reset-position",2120468986),new cljs.core.Keyword(null,"desc","desc",1016984067),"Editor: Reset cursor to previously captured position",new cljs.core.Keyword(null,"exec","exec",1017031683),(function (){return lt.object.raise.call(null,lt.objs.editor.pool.last_active.call(null),new cljs.core.Keyword(null,"position.reset!","position.reset!",2821364873));
})], null));
lt.plugins.mortalapeman.blah = lt.objs.editor.pool.last_active.call(null);
lt.object.__GT_id.call(null,lt.plugins.mortalapeman.blah);
lt.objs.editor.__GT_cursor.call(null,lt.plugins.mortalapeman.blah);
}

//# sourceMappingURL=mortalapeman_compiled.js.map