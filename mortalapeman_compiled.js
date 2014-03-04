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
lt.objs.command.command.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"command","command",1964298941),new cljs.core.Keyword(null,"tabset.close-all-but-active","tabset.close-all-but-active",3205009926),new cljs.core.Keyword(null,"desc","desc",1016984067),"Tabset: Close all tabs/tabsets except active",new cljs.core.Keyword(null,"exec","exec",1017031683),(function (){var tabs = lt.object.by_tag.call(null,new cljs.core.Keyword(null,"tabset.tab","tabset.tab",1444337222));var tabsets = lt.object.by_tag.call(null,new cljs.core.Keyword(null,"tabset","tabset",4427500575));var active_tabset = lt.objs.context.__GT_obj.call(null,new cljs.core.Keyword(null,"tabset","tabset",4427500575));var active_tab = new cljs.core.Keyword(null,"active-obj","active-obj",3056705826).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,active_tabset));var seq__8298_8306 = cljs.core.seq.call(null,cljs.core.filter.call(null,cljs.core.comp.call(null,cljs.core.not,cljs.core.PersistentHashSet.fromArray([active_tab], true)),tabs));var chunk__8299_8307 = null;var count__8300_8308 = 0;var i__8301_8309 = 0;while(true){
if((i__8301_8309 < count__8300_8308))
{var x_8310 = cljs.core._nth.call(null,chunk__8299_8307,i__8301_8309);lt.object.raise.call(null,x_8310,new cljs.core.Keyword(null,"close","close",1108660586));
{
var G__8311 = seq__8298_8306;
var G__8312 = chunk__8299_8307;
var G__8313 = count__8300_8308;
var G__8314 = (i__8301_8309 + 1);
seq__8298_8306 = G__8311;
chunk__8299_8307 = G__8312;
count__8300_8308 = G__8313;
i__8301_8309 = G__8314;
continue;
}
} else
{var temp__4092__auto___8315 = cljs.core.seq.call(null,seq__8298_8306);if(temp__4092__auto___8315)
{var seq__8298_8316__$1 = temp__4092__auto___8315;if(cljs.core.chunked_seq_QMARK_.call(null,seq__8298_8316__$1))
{var c__7500__auto___8317 = cljs.core.chunk_first.call(null,seq__8298_8316__$1);{
var G__8318 = cljs.core.chunk_rest.call(null,seq__8298_8316__$1);
var G__8319 = c__7500__auto___8317;
var G__8320 = cljs.core.count.call(null,c__7500__auto___8317);
var G__8321 = 0;
seq__8298_8306 = G__8318;
chunk__8299_8307 = G__8319;
count__8300_8308 = G__8320;
i__8301_8309 = G__8321;
continue;
}
} else
{var x_8322 = cljs.core.first.call(null,seq__8298_8316__$1);lt.object.raise.call(null,x_8322,new cljs.core.Keyword(null,"close","close",1108660586));
{
var G__8323 = cljs.core.next.call(null,seq__8298_8316__$1);
var G__8324 = null;
var G__8325 = 0;
var G__8326 = 0;
seq__8298_8306 = G__8323;
chunk__8299_8307 = G__8324;
count__8300_8308 = G__8325;
i__8301_8309 = G__8326;
continue;
}
}
} else
{}
}
break;
}
var seq__8302 = cljs.core.seq.call(null,cljs.core.filter.call(null,cljs.core.comp.call(null,cljs.core.not,cljs.core.PersistentHashSet.fromArray([active_tabset], true)),lt.plugins.mortalapeman.tabset));var chunk__8303 = null;var count__8304 = 0;var i__8305 = 0;while(true){
if((i__8305 < count__8304))
{var x = cljs.core._nth.call(null,chunk__8303,i__8305);lt.objs.tabs.rem_tabset.call(null,x);
{
var G__8327 = seq__8302;
var G__8328 = chunk__8303;
var G__8329 = count__8304;
var G__8330 = (i__8305 + 1);
seq__8302 = G__8327;
chunk__8303 = G__8328;
count__8304 = G__8329;
i__8305 = G__8330;
continue;
}
} else
{var temp__4092__auto__ = cljs.core.seq.call(null,seq__8302);if(temp__4092__auto__)
{var seq__8302__$1 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__8302__$1))
{var c__7500__auto__ = cljs.core.chunk_first.call(null,seq__8302__$1);{
var G__8331 = cljs.core.chunk_rest.call(null,seq__8302__$1);
var G__8332 = c__7500__auto__;
var G__8333 = cljs.core.count.call(null,c__7500__auto__);
var G__8334 = 0;
seq__8302 = G__8331;
chunk__8303 = G__8332;
count__8304 = G__8333;
i__8305 = G__8334;
continue;
}
} else
{var x = cljs.core.first.call(null,seq__8302__$1);lt.objs.tabs.rem_tabset.call(null,x);
{
var G__8335 = cljs.core.next.call(null,seq__8302__$1);
var G__8336 = null;
var G__8337 = 0;
var G__8338 = 0;
seq__8302 = G__8335;
chunk__8303 = G__8336;
count__8304 = G__8337;
i__8305 = G__8338;
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