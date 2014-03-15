if(!lt.util.load.provided_QMARK_('lt.plugins.mortalapeman')) {
goog.provide('lt.plugins.mortalapeman');
goog.require('cljs.core');
goog.require('lt.objs.command');
goog.require('lt.objs.command');
goog.require('lt.objs.tabs');
goog.require('lt.objs.tabs');
goog.require('lt.objs.context');
goog.require('lt.objs.context');
goog.require('lt.object');
goog.require('lt.object');
lt.plugins.mortalapeman.__BEH__sidebar_menu_items = (function __BEH__sidebar_menu_items(this$,items){return cljs.core.conj.call(null,items,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"label","label",1116631654),"Create new workspace",new cljs.core.Keyword(null,"click","click",1108654330),(function (){return lt.objs.command.exec_BANG_.call(null,new cljs.core.Keyword(null,"workspace.new","workspace.new",2700812345));
})], null));
});
lt.object.behavior_STAR_.call(null,new cljs.core.Keyword("lt.plugins.mortalapeman","sidebar-menu-items","lt.plugins.mortalapeman/sidebar-menu-items",3624932563),new cljs.core.Keyword(null,"reaction","reaction",4441361819),lt.plugins.mortalapeman.__BEH__sidebar_menu_items,new cljs.core.Keyword(null,"triggers","triggers",2516997421),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"menu-items","menu-items",3782623556),null], null), null));
lt.objs.command.command.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"command","command",1964298941),new cljs.core.Keyword(null,"tabset.close-all-but-active","tabset.close-all-but-active",3205009926),new cljs.core.Keyword(null,"desc","desc",1016984067),"Tabset: Close all tabs/tabsets except active",new cljs.core.Keyword(null,"exec","exec",1017031683),(function (){var tabs = lt.object.by_tag.call(null,new cljs.core.Keyword(null,"tabset.tab","tabset.tab",1444337222));var tabsets = lt.object.by_tag.call(null,new cljs.core.Keyword(null,"tabset","tabset",4427500575));var active_tabset = lt.objs.context.__GT_obj.call(null,new cljs.core.Keyword(null,"tabset","tabset",4427500575));var active_tab = new cljs.core.Keyword(null,"active-obj","active-obj",3056705826).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,active_tabset));var seq__8249_8257 = cljs.core.seq.call(null,cljs.core.filter.call(null,cljs.core.comp.call(null,cljs.core.not,cljs.core.PersistentHashSet.fromArray([active_tab], true)),tabs));var chunk__8250_8258 = null;var count__8251_8259 = 0;var i__8252_8260 = 0;while(true){
if((i__8252_8260 < count__8251_8259))
{var x_8261 = cljs.core._nth.call(null,chunk__8250_8258,i__8252_8260);lt.object.raise.call(null,x_8261,new cljs.core.Keyword(null,"close","close",1108660586));
{
var G__8262 = seq__8249_8257;
var G__8263 = chunk__8250_8258;
var G__8264 = count__8251_8259;
var G__8265 = (i__8252_8260 + 1);
seq__8249_8257 = G__8262;
chunk__8250_8258 = G__8263;
count__8251_8259 = G__8264;
i__8252_8260 = G__8265;
continue;
}
} else
{var temp__4092__auto___8266 = cljs.core.seq.call(null,seq__8249_8257);if(temp__4092__auto___8266)
{var seq__8249_8267__$1 = temp__4092__auto___8266;if(cljs.core.chunked_seq_QMARK_.call(null,seq__8249_8267__$1))
{var c__7500__auto___8268 = cljs.core.chunk_first.call(null,seq__8249_8267__$1);{
var G__8269 = cljs.core.chunk_rest.call(null,seq__8249_8267__$1);
var G__8270 = c__7500__auto___8268;
var G__8271 = cljs.core.count.call(null,c__7500__auto___8268);
var G__8272 = 0;
seq__8249_8257 = G__8269;
chunk__8250_8258 = G__8270;
count__8251_8259 = G__8271;
i__8252_8260 = G__8272;
continue;
}
} else
{var x_8273 = cljs.core.first.call(null,seq__8249_8267__$1);lt.object.raise.call(null,x_8273,new cljs.core.Keyword(null,"close","close",1108660586));
{
var G__8274 = cljs.core.next.call(null,seq__8249_8267__$1);
var G__8275 = null;
var G__8276 = 0;
var G__8277 = 0;
seq__8249_8257 = G__8274;
chunk__8250_8258 = G__8275;
count__8251_8259 = G__8276;
i__8252_8260 = G__8277;
continue;
}
}
} else
{}
}
break;
}
var seq__8253 = cljs.core.seq.call(null,cljs.core.filter.call(null,cljs.core.comp.call(null,cljs.core.not,cljs.core.PersistentHashSet.fromArray([active_tabset], true)),lt.plugins.mortalapeman.tabset));var chunk__8254 = null;var count__8255 = 0;var i__8256 = 0;while(true){
if((i__8256 < count__8255))
{var x = cljs.core._nth.call(null,chunk__8254,i__8256);lt.objs.tabs.rem_tabset.call(null,x);
{
var G__8278 = seq__8253;
var G__8279 = chunk__8254;
var G__8280 = count__8255;
var G__8281 = (i__8256 + 1);
seq__8253 = G__8278;
chunk__8254 = G__8279;
count__8255 = G__8280;
i__8256 = G__8281;
continue;
}
} else
{var temp__4092__auto__ = cljs.core.seq.call(null,seq__8253);if(temp__4092__auto__)
{var seq__8253__$1 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__8253__$1))
{var c__7500__auto__ = cljs.core.chunk_first.call(null,seq__8253__$1);{
var G__8282 = cljs.core.chunk_rest.call(null,seq__8253__$1);
var G__8283 = c__7500__auto__;
var G__8284 = cljs.core.count.call(null,c__7500__auto__);
var G__8285 = 0;
seq__8253 = G__8282;
chunk__8254 = G__8283;
count__8255 = G__8284;
i__8256 = G__8285;
continue;
}
} else
{var x = cljs.core.first.call(null,seq__8253__$1);lt.objs.tabs.rem_tabset.call(null,x);
{
var G__8286 = cljs.core.next.call(null,seq__8253__$1);
var G__8287 = null;
var G__8288 = 0;
var G__8289 = 0;
seq__8253 = G__8286;
chunk__8254 = G__8287;
count__8255 = G__8288;
i__8256 = G__8289;
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
}

//# sourceMappingURL=mortalapeman_compiled.js.map