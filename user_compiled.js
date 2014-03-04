if(!lt.util.load.provided_QMARK_('lt.plugins.user')) {
goog.provide('lt.plugins.user');
goog.require('cljs.core');
goog.require('lt.objs.command');
goog.require('lt.objs.command');
goog.require('lt.objs.tabs');
goog.require('lt.objs.tabs');
goog.require('lt.objs.context');
goog.require('lt.objs.context');
goog.require('lt.object');
goog.require('lt.object');
lt.objs.command.command.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"command","command",1964298941),new cljs.core.Keyword(null,"tabset.close-all-but-active","tabset.close-all-but-active",3205009926),new cljs.core.Keyword(null,"desc","desc",1016984067),"Tabset: Close all tabs/tabsets except active",new cljs.core.Keyword(null,"exec","exec",1017031683),(function (){var tabs = lt.object.by_tag.call(null,new cljs.core.Keyword(null,"tabset.tab","tabset.tab",1444337222));var tabsets = lt.object.by_tag.call(null,new cljs.core.Keyword(null,"tabset","tabset",4427500575));var active_tabset = lt.objs.context.__GT_obj.call(null,new cljs.core.Keyword(null,"tabset","tabset",4427500575));var active_tab = new cljs.core.Keyword(null,"active-obj","active-obj",3056705826).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,active_tabset));var seq__8425_8433 = cljs.core.seq.call(null,cljs.core.filter.call(null,cljs.core.comp.call(null,cljs.core.not,cljs.core.PersistentHashSet.fromArray([active_tab], true)),tabs));var chunk__8426_8434 = null;var count__8427_8435 = 0;var i__8428_8436 = 0;while(true){
if((i__8428_8436 < count__8427_8435))
{var x_8437 = cljs.core._nth.call(null,chunk__8426_8434,i__8428_8436);lt.object.raise.call(null,x_8437,new cljs.core.Keyword(null,"close","close",1108660586));
{
var G__8438 = seq__8425_8433;
var G__8439 = chunk__8426_8434;
var G__8440 = count__8427_8435;
var G__8441 = (i__8428_8436 + 1);
seq__8425_8433 = G__8438;
chunk__8426_8434 = G__8439;
count__8427_8435 = G__8440;
i__8428_8436 = G__8441;
continue;
}
} else
{var temp__4092__auto___8442 = cljs.core.seq.call(null,seq__8425_8433);if(temp__4092__auto___8442)
{var seq__8425_8443__$1 = temp__4092__auto___8442;if(cljs.core.chunked_seq_QMARK_.call(null,seq__8425_8443__$1))
{var c__7500__auto___8444 = cljs.core.chunk_first.call(null,seq__8425_8443__$1);{
var G__8445 = cljs.core.chunk_rest.call(null,seq__8425_8443__$1);
var G__8446 = c__7500__auto___8444;
var G__8447 = cljs.core.count.call(null,c__7500__auto___8444);
var G__8448 = 0;
seq__8425_8433 = G__8445;
chunk__8426_8434 = G__8446;
count__8427_8435 = G__8447;
i__8428_8436 = G__8448;
continue;
}
} else
{var x_8449 = cljs.core.first.call(null,seq__8425_8443__$1);lt.object.raise.call(null,x_8449,new cljs.core.Keyword(null,"close","close",1108660586));
{
var G__8450 = cljs.core.next.call(null,seq__8425_8443__$1);
var G__8451 = null;
var G__8452 = 0;
var G__8453 = 0;
seq__8425_8433 = G__8450;
chunk__8426_8434 = G__8451;
count__8427_8435 = G__8452;
i__8428_8436 = G__8453;
continue;
}
}
} else
{}
}
break;
}
var seq__8429 = cljs.core.seq.call(null,cljs.core.filter.call(null,cljs.core.comp.call(null,cljs.core.not,cljs.core.PersistentHashSet.fromArray([active_tabset], true)),lt.plugins.user.tabset));var chunk__8430 = null;var count__8431 = 0;var i__8432 = 0;while(true){
if((i__8432 < count__8431))
{var x = cljs.core._nth.call(null,chunk__8430,i__8432);lt.objs.tabs.rem_tabset.call(null,x);
{
var G__8454 = seq__8429;
var G__8455 = chunk__8430;
var G__8456 = count__8431;
var G__8457 = (i__8432 + 1);
seq__8429 = G__8454;
chunk__8430 = G__8455;
count__8431 = G__8456;
i__8432 = G__8457;
continue;
}
} else
{var temp__4092__auto__ = cljs.core.seq.call(null,seq__8429);if(temp__4092__auto__)
{var seq__8429__$1 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__8429__$1))
{var c__7500__auto__ = cljs.core.chunk_first.call(null,seq__8429__$1);{
var G__8458 = cljs.core.chunk_rest.call(null,seq__8429__$1);
var G__8459 = c__7500__auto__;
var G__8460 = cljs.core.count.call(null,c__7500__auto__);
var G__8461 = 0;
seq__8429 = G__8458;
chunk__8430 = G__8459;
count__8431 = G__8460;
i__8432 = G__8461;
continue;
}
} else
{var x = cljs.core.first.call(null,seq__8429__$1);lt.objs.tabs.rem_tabset.call(null,x);
{
var G__8462 = cljs.core.next.call(null,seq__8429__$1);
var G__8463 = null;
var G__8464 = 0;
var G__8465 = 0;
seq__8429 = G__8462;
chunk__8430 = G__8463;
count__8431 = G__8464;
i__8432 = G__8465;
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

//# sourceMappingURL=user_compiled.js.map