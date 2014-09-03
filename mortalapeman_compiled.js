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
lt.plugins.mortalapeman.__BEH__subfolder_menu = (function __BEH__subfolder_menu(this$,items){return cljs.core.conj.call(null,items,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"label","label",1116631654),"Open Terminal Here",new cljs.core.Keyword(null,"order","order",1119910592),7,new cljs.core.Keyword(null,"click","click",1108654330),(function (){var pred__9165 = cljs.core._EQ_;var expr__9166 = process.platform;if(cljs.core.truth_(pred__9165.call(null,"linux",expr__9166)))
{return lt.plugins.mortalapeman.open_gnome_terminal.call(null,new cljs.core.Keyword(null,"path","path",1017337751).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,this$)));
} else
{throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(expr__9166)].join('')));
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
lt.objs.command.command.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"command","command",1964298941),new cljs.core.Keyword(null,"tabset.close-other-tabs","tabset.close-other-tabs",3361386915),new cljs.core.Keyword(null,"desc","desc",1016984067),"Tabset: Close other tabs and tabsets",new cljs.core.Keyword(null,"hidden","hidden",4091384092),true,new cljs.core.Keyword(null,"exec","exec",1017031683),(function (active_obj){var tabs = lt.object.by_tag.call(null,new cljs.core.Keyword(null,"tabset.tab","tabset.tab",1444337222));var tabsets = lt.object.by_tag.call(null,new cljs.core.Keyword(null,"tabset","tabset",4427500575));var seq__9168_9189 = cljs.core.seq.call(null,cljs.core.filter.call(null,cljs.core.comp.call(null,cljs.core.not,cljs.core.PersistentHashSet.fromArray([active_obj], true)),tabs));var chunk__9169_9190 = null;var count__9170_9191 = 0;var i__9171_9192 = 0;while(true){
if((i__9171_9192 < count__9170_9191))
{var x_9193 = cljs.core._nth.call(null,chunk__9169_9190,i__9171_9192);lt.object.raise.call(null,x_9193,new cljs.core.Keyword(null,"close","close",1108660586));
{
var G__9194 = seq__9168_9189;
var G__9195 = chunk__9169_9190;
var G__9196 = count__9170_9191;
var G__9197 = (i__9171_9192 + 1);
seq__9168_9189 = G__9194;
chunk__9169_9190 = G__9195;
count__9170_9191 = G__9196;
i__9171_9192 = G__9197;
continue;
}
} else
{var temp__4092__auto___9198 = cljs.core.seq.call(null,seq__9168_9189);if(temp__4092__auto___9198)
{var seq__9168_9199__$1 = temp__4092__auto___9198;if(cljs.core.chunked_seq_QMARK_.call(null,seq__9168_9199__$1))
{var c__7112__auto___9200 = cljs.core.chunk_first.call(null,seq__9168_9199__$1);{
var G__9201 = cljs.core.chunk_rest.call(null,seq__9168_9199__$1);
var G__9202 = c__7112__auto___9200;
var G__9203 = cljs.core.count.call(null,c__7112__auto___9200);
var G__9204 = 0;
seq__9168_9189 = G__9201;
chunk__9169_9190 = G__9202;
count__9170_9191 = G__9203;
i__9171_9192 = G__9204;
continue;
}
} else
{var x_9205 = cljs.core.first.call(null,seq__9168_9199__$1);lt.object.raise.call(null,x_9205,new cljs.core.Keyword(null,"close","close",1108660586));
{
var G__9206 = cljs.core.next.call(null,seq__9168_9199__$1);
var G__9207 = null;
var G__9208 = 0;
var G__9209 = 0;
seq__9168_9189 = G__9206;
chunk__9169_9190 = G__9207;
count__9170_9191 = G__9208;
i__9171_9192 = G__9209;
continue;
}
}
} else
{}
}
break;
}
var seq__9172 = cljs.core.seq.call(null,cljs.core.filter.call(null,cljs.core.comp.call(null,cljs.core.not,cljs.core.PersistentHashSet.fromArray([new cljs.core.Keyword("lt.objs.tabs","tabset","lt.objs.tabs/tabset",3378091779).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,active_obj))], true)),tabsets));var chunk__9173 = null;var count__9174 = 0;var i__9175 = 0;while(true){
if((i__9175 < count__9174))
{var x = cljs.core._nth.call(null,chunk__9173,i__9175);lt.objs.tabs.rem_tabset.call(null,x);
{
var G__9210 = seq__9172;
var G__9211 = chunk__9173;
var G__9212 = count__9174;
var G__9213 = (i__9175 + 1);
seq__9172 = G__9210;
chunk__9173 = G__9211;
count__9174 = G__9212;
i__9175 = G__9213;
continue;
}
} else
{var temp__4092__auto__ = cljs.core.seq.call(null,seq__9172);if(temp__4092__auto__)
{var seq__9172__$1 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__9172__$1))
{var c__7112__auto__ = cljs.core.chunk_first.call(null,seq__9172__$1);{
var G__9214 = cljs.core.chunk_rest.call(null,seq__9172__$1);
var G__9215 = c__7112__auto__;
var G__9216 = cljs.core.count.call(null,c__7112__auto__);
var G__9217 = 0;
seq__9172 = G__9214;
chunk__9173 = G__9215;
count__9174 = G__9216;
i__9175 = G__9217;
continue;
}
} else
{var x = cljs.core.first.call(null,seq__9172__$1);lt.objs.tabs.rem_tabset.call(null,x);
{
var G__9218 = cljs.core.next.call(null,seq__9172__$1);
var G__9219 = null;
var G__9220 = 0;
var G__9221 = 0;
seq__9172 = G__9218;
chunk__9173 = G__9219;
count__9174 = G__9220;
i__9175 = G__9221;
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
return (function (p1__9176_SHARP_){return (lt.objs.tabs.__GT_index.call(null,p1__9176_SHARP_) > index);
});})(index))
,new cljs.core.Keyword(null,"objs","objs",1017308622).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,new cljs.core.Keyword("lt.objs.tabs","tabset","lt.objs.tabs/tabset",3378091779).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,active_obj)))));var seq__9177 = cljs.core.seq.call(null,tabs);var chunk__9178 = null;var count__9179 = 0;var i__9180 = 0;while(true){
if((i__9180 < count__9179))
{var x = cljs.core._nth.call(null,chunk__9178,i__9180);lt.object.raise.call(null,x,new cljs.core.Keyword(null,"close","close",1108660586));
{
var G__9222 = seq__9177;
var G__9223 = chunk__9178;
var G__9224 = count__9179;
var G__9225 = (i__9180 + 1);
seq__9177 = G__9222;
chunk__9178 = G__9223;
count__9179 = G__9224;
i__9180 = G__9225;
continue;
}
} else
{var temp__4092__auto__ = cljs.core.seq.call(null,seq__9177);if(temp__4092__auto__)
{var seq__9177__$1 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__9177__$1))
{var c__7112__auto__ = cljs.core.chunk_first.call(null,seq__9177__$1);{
var G__9226 = cljs.core.chunk_rest.call(null,seq__9177__$1);
var G__9227 = c__7112__auto__;
var G__9228 = cljs.core.count.call(null,c__7112__auto__);
var G__9229 = 0;
seq__9177 = G__9226;
chunk__9178 = G__9227;
count__9179 = G__9228;
i__9180 = G__9229;
continue;
}
} else
{var x = cljs.core.first.call(null,seq__9177__$1);lt.object.raise.call(null,x,new cljs.core.Keyword(null,"close","close",1108660586));
{
var G__9230 = cljs.core.next.call(null,seq__9177__$1);
var G__9231 = null;
var G__9232 = 0;
var G__9233 = 0;
seq__9177 = G__9230;
chunk__9178 = G__9231;
count__9179 = G__9232;
i__9180 = G__9233;
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
lt.objs.command.command.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"command","command",1964298941),new cljs.core.Keyword(null,"tabset.close-all-but-active","tabset.close-all-but-active",3205009926),new cljs.core.Keyword(null,"desc","desc",1016984067),"Tabset: Close all tabs/tabsets except active",new cljs.core.Keyword(null,"exec","exec",1017031683),(function (){var tabs = lt.object.by_tag.call(null,new cljs.core.Keyword(null,"tabset.tab","tabset.tab",1444337222));var tabsets = lt.object.by_tag.call(null,new cljs.core.Keyword(null,"tabset","tabset",4427500575));var active_tabset = lt.objs.context.__GT_obj.call(null,new cljs.core.Keyword(null,"tabset","tabset",4427500575));var active_tab = new cljs.core.Keyword(null,"active-obj","active-obj",3056705826).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,active_tabset));var seq__9181_9234 = cljs.core.seq.call(null,cljs.core.filter.call(null,cljs.core.comp.call(null,cljs.core.not,cljs.core.PersistentHashSet.fromArray([active_tab], true)),tabs));var chunk__9182_9235 = null;var count__9183_9236 = 0;var i__9184_9237 = 0;while(true){
if((i__9184_9237 < count__9183_9236))
{var x_9238 = cljs.core._nth.call(null,chunk__9182_9235,i__9184_9237);lt.object.raise.call(null,x_9238,new cljs.core.Keyword(null,"close","close",1108660586));
{
var G__9239 = seq__9181_9234;
var G__9240 = chunk__9182_9235;
var G__9241 = count__9183_9236;
var G__9242 = (i__9184_9237 + 1);
seq__9181_9234 = G__9239;
chunk__9182_9235 = G__9240;
count__9183_9236 = G__9241;
i__9184_9237 = G__9242;
continue;
}
} else
{var temp__4092__auto___9243 = cljs.core.seq.call(null,seq__9181_9234);if(temp__4092__auto___9243)
{var seq__9181_9244__$1 = temp__4092__auto___9243;if(cljs.core.chunked_seq_QMARK_.call(null,seq__9181_9244__$1))
{var c__7112__auto___9245 = cljs.core.chunk_first.call(null,seq__9181_9244__$1);{
var G__9246 = cljs.core.chunk_rest.call(null,seq__9181_9244__$1);
var G__9247 = c__7112__auto___9245;
var G__9248 = cljs.core.count.call(null,c__7112__auto___9245);
var G__9249 = 0;
seq__9181_9234 = G__9246;
chunk__9182_9235 = G__9247;
count__9183_9236 = G__9248;
i__9184_9237 = G__9249;
continue;
}
} else
{var x_9250 = cljs.core.first.call(null,seq__9181_9244__$1);lt.object.raise.call(null,x_9250,new cljs.core.Keyword(null,"close","close",1108660586));
{
var G__9251 = cljs.core.next.call(null,seq__9181_9244__$1);
var G__9252 = null;
var G__9253 = 0;
var G__9254 = 0;
seq__9181_9234 = G__9251;
chunk__9182_9235 = G__9252;
count__9183_9236 = G__9253;
i__9184_9237 = G__9254;
continue;
}
}
} else
{}
}
break;
}
var seq__9185 = cljs.core.seq.call(null,cljs.core.filter.call(null,cljs.core.comp.call(null,cljs.core.not,cljs.core.PersistentHashSet.fromArray([active_tabset], true)),tabsets));var chunk__9186 = null;var count__9187 = 0;var i__9188 = 0;while(true){
if((i__9188 < count__9187))
{var x = cljs.core._nth.call(null,chunk__9186,i__9188);lt.objs.tabs.rem_tabset.call(null,x);
{
var G__9255 = seq__9185;
var G__9256 = chunk__9186;
var G__9257 = count__9187;
var G__9258 = (i__9188 + 1);
seq__9185 = G__9255;
chunk__9186 = G__9256;
count__9187 = G__9257;
i__9188 = G__9258;
continue;
}
} else
{var temp__4092__auto__ = cljs.core.seq.call(null,seq__9185);if(temp__4092__auto__)
{var seq__9185__$1 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__9185__$1))
{var c__7112__auto__ = cljs.core.chunk_first.call(null,seq__9185__$1);{
var G__9259 = cljs.core.chunk_rest.call(null,seq__9185__$1);
var G__9260 = c__7112__auto__;
var G__9261 = cljs.core.count.call(null,c__7112__auto__);
var G__9262 = 0;
seq__9185 = G__9259;
chunk__9186 = G__9260;
count__9187 = G__9261;
i__9188 = G__9262;
continue;
}
} else
{var x = cljs.core.first.call(null,seq__9185__$1);lt.objs.tabs.rem_tabset.call(null,x);
{
var G__9263 = cljs.core.next.call(null,seq__9185__$1);
var G__9264 = null;
var G__9265 = 0;
var G__9266 = 0;
seq__9185 = G__9263;
chunk__9186 = G__9264;
count__9187 = G__9265;
i__9188 = G__9266;
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