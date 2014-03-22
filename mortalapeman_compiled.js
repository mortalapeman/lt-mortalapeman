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
lt.plugins.mortalapeman.__BEH__tab_menu_items = (function __BEH__tab_menu_items(this$,items){return cljs.core.conj.call(null,items,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1017479852),"separator",new cljs.core.Keyword(null,"order","order",1119910592),3], null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"label","label",1116631654),"Close all tabs",new cljs.core.Keyword(null,"order","order",1119910592),4,new cljs.core.Keyword(null,"click","click",1108654330),(function (){return lt.objs.command.exec_BANG_.call(null,new cljs.core.Keyword(null,"tabs.close-all","tabs.close-all",2444215630));
})], null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"label","label",1116631654),"Close tabs to the right",new cljs.core.Keyword(null,"order","order",1119910592),4,new cljs.core.Keyword(null,"click","click",1108654330),(function (){return lt.objs.command.exec_BANG_.call(null,new cljs.core.Keyword(null,"tabset.close-tabs-to-right","tabset.close-tabs-to-right",1757769557),this$);
})], null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"label","label",1116631654),"Close other tabs",new cljs.core.Keyword(null,"order","order",1119910592),5,new cljs.core.Keyword(null,"click","click",1108654330),(function (){return lt.objs.command.exec_BANG_.call(null,new cljs.core.Keyword(null,"tabset.close-other-tabs","tabset.close-other-tabs",3361386915),this$);
})], null));
});
lt.object.behavior_STAR_.call(null,new cljs.core.Keyword("lt.plugins.mortalapeman","tab-menu-items","lt.plugins.mortalapeman/tab-menu-items",1230141180),new cljs.core.Keyword(null,"reaction","reaction",4441361819),lt.plugins.mortalapeman.__BEH__tab_menu_items,new cljs.core.Keyword(null,"triggers","triggers",2516997421),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tab-menu-items","tab-menu-items",3083849340),null], null), null));
lt.objs.command.command.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"command","command",1964298941),new cljs.core.Keyword(null,"tabset.close-other-tabs","tabset.close-other-tabs",3361386915),new cljs.core.Keyword(null,"desc","desc",1016984067),"Tabset: Close other tabs and tabsets",new cljs.core.Keyword(null,"hidden","hidden",4091384092),true,new cljs.core.Keyword(null,"exec","exec",1017031683),(function (active_obj){var tabs = lt.object.by_tag.call(null,new cljs.core.Keyword(null,"tabset.tab","tabset.tab",1444337222));var tabsets = lt.object.by_tag.call(null,new cljs.core.Keyword(null,"tabset","tabset",4427500575));var seq__10315_10336 = cljs.core.seq.call(null,cljs.core.filter.call(null,cljs.core.comp.call(null,cljs.core.not,cljs.core.PersistentHashSet.fromArray([active_obj], true)),tabs));var chunk__10316_10337 = null;var count__10317_10338 = 0;var i__10318_10339 = 0;while(true){
if((i__10318_10339 < count__10317_10338))
{var x_10340 = cljs.core._nth.call(null,chunk__10316_10337,i__10318_10339);lt.object.raise.call(null,x_10340,new cljs.core.Keyword(null,"close","close",1108660586));
{
var G__10341 = seq__10315_10336;
var G__10342 = chunk__10316_10337;
var G__10343 = count__10317_10338;
var G__10344 = (i__10318_10339 + 1);
seq__10315_10336 = G__10341;
chunk__10316_10337 = G__10342;
count__10317_10338 = G__10343;
i__10318_10339 = G__10344;
continue;
}
} else
{var temp__4092__auto___10345 = cljs.core.seq.call(null,seq__10315_10336);if(temp__4092__auto___10345)
{var seq__10315_10346__$1 = temp__4092__auto___10345;if(cljs.core.chunked_seq_QMARK_.call(null,seq__10315_10346__$1))
{var c__7564__auto___10347 = cljs.core.chunk_first.call(null,seq__10315_10346__$1);{
var G__10348 = cljs.core.chunk_rest.call(null,seq__10315_10346__$1);
var G__10349 = c__7564__auto___10347;
var G__10350 = cljs.core.count.call(null,c__7564__auto___10347);
var G__10351 = 0;
seq__10315_10336 = G__10348;
chunk__10316_10337 = G__10349;
count__10317_10338 = G__10350;
i__10318_10339 = G__10351;
continue;
}
} else
{var x_10352 = cljs.core.first.call(null,seq__10315_10346__$1);lt.object.raise.call(null,x_10352,new cljs.core.Keyword(null,"close","close",1108660586));
{
var G__10353 = cljs.core.next.call(null,seq__10315_10346__$1);
var G__10354 = null;
var G__10355 = 0;
var G__10356 = 0;
seq__10315_10336 = G__10353;
chunk__10316_10337 = G__10354;
count__10317_10338 = G__10355;
i__10318_10339 = G__10356;
continue;
}
}
} else
{}
}
break;
}
var seq__10319 = cljs.core.seq.call(null,cljs.core.filter.call(null,cljs.core.comp.call(null,cljs.core.not,cljs.core.PersistentHashSet.fromArray([new cljs.core.Keyword("lt.objs.tabs","tabset","lt.objs.tabs/tabset",3378091779).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,active_obj))], true)),tabsets));var chunk__10320 = null;var count__10321 = 0;var i__10322 = 0;while(true){
if((i__10322 < count__10321))
{var x = cljs.core._nth.call(null,chunk__10320,i__10322);lt.objs.tabs.rem_tabset.call(null,x);
{
var G__10357 = seq__10319;
var G__10358 = chunk__10320;
var G__10359 = count__10321;
var G__10360 = (i__10322 + 1);
seq__10319 = G__10357;
chunk__10320 = G__10358;
count__10321 = G__10359;
i__10322 = G__10360;
continue;
}
} else
{var temp__4092__auto__ = cljs.core.seq.call(null,seq__10319);if(temp__4092__auto__)
{var seq__10319__$1 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__10319__$1))
{var c__7564__auto__ = cljs.core.chunk_first.call(null,seq__10319__$1);{
var G__10361 = cljs.core.chunk_rest.call(null,seq__10319__$1);
var G__10362 = c__7564__auto__;
var G__10363 = cljs.core.count.call(null,c__7564__auto__);
var G__10364 = 0;
seq__10319 = G__10361;
chunk__10320 = G__10362;
count__10321 = G__10363;
i__10322 = G__10364;
continue;
}
} else
{var x = cljs.core.first.call(null,seq__10319__$1);lt.objs.tabs.rem_tabset.call(null,x);
{
var G__10365 = cljs.core.next.call(null,seq__10319__$1);
var G__10366 = null;
var G__10367 = 0;
var G__10368 = 0;
seq__10319 = G__10365;
chunk__10320 = G__10366;
count__10321 = G__10367;
i__10322 = G__10368;
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
return (function (p1__10323_SHARP_){return (lt.objs.tabs.__GT_index.call(null,p1__10323_SHARP_) > index);
});})(index))
,new cljs.core.Keyword(null,"objs","objs",1017308622).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,new cljs.core.Keyword("lt.objs.tabs","tabset","lt.objs.tabs/tabset",3378091779).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,active_obj)))));var seq__10324 = cljs.core.seq.call(null,tabs);var chunk__10325 = null;var count__10326 = 0;var i__10327 = 0;while(true){
if((i__10327 < count__10326))
{var x = cljs.core._nth.call(null,chunk__10325,i__10327);lt.object.raise.call(null,x,new cljs.core.Keyword(null,"close","close",1108660586));
{
var G__10369 = seq__10324;
var G__10370 = chunk__10325;
var G__10371 = count__10326;
var G__10372 = (i__10327 + 1);
seq__10324 = G__10369;
chunk__10325 = G__10370;
count__10326 = G__10371;
i__10327 = G__10372;
continue;
}
} else
{var temp__4092__auto__ = cljs.core.seq.call(null,seq__10324);if(temp__4092__auto__)
{var seq__10324__$1 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__10324__$1))
{var c__7564__auto__ = cljs.core.chunk_first.call(null,seq__10324__$1);{
var G__10373 = cljs.core.chunk_rest.call(null,seq__10324__$1);
var G__10374 = c__7564__auto__;
var G__10375 = cljs.core.count.call(null,c__7564__auto__);
var G__10376 = 0;
seq__10324 = G__10373;
chunk__10325 = G__10374;
count__10326 = G__10375;
i__10327 = G__10376;
continue;
}
} else
{var x = cljs.core.first.call(null,seq__10324__$1);lt.object.raise.call(null,x,new cljs.core.Keyword(null,"close","close",1108660586));
{
var G__10377 = cljs.core.next.call(null,seq__10324__$1);
var G__10378 = null;
var G__10379 = 0;
var G__10380 = 0;
seq__10324 = G__10377;
chunk__10325 = G__10378;
count__10326 = G__10379;
i__10327 = G__10380;
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
lt.objs.command.command.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"command","command",1964298941),new cljs.core.Keyword(null,"tabset.close-all-but-active","tabset.close-all-but-active",3205009926),new cljs.core.Keyword(null,"desc","desc",1016984067),"Tabset: Close all tabs/tabsets except active",new cljs.core.Keyword(null,"exec","exec",1017031683),(function (){var tabs = lt.object.by_tag.call(null,new cljs.core.Keyword(null,"tabset.tab","tabset.tab",1444337222));var tabsets = lt.object.by_tag.call(null,new cljs.core.Keyword(null,"tabset","tabset",4427500575));var active_tabset = lt.objs.context.__GT_obj.call(null,new cljs.core.Keyword(null,"tabset","tabset",4427500575));var active_tab = new cljs.core.Keyword(null,"active-obj","active-obj",3056705826).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,active_tabset));var seq__10328_10381 = cljs.core.seq.call(null,cljs.core.filter.call(null,cljs.core.comp.call(null,cljs.core.not,cljs.core.PersistentHashSet.fromArray([active_tab], true)),tabs));var chunk__10329_10382 = null;var count__10330_10383 = 0;var i__10331_10384 = 0;while(true){
if((i__10331_10384 < count__10330_10383))
{var x_10385 = cljs.core._nth.call(null,chunk__10329_10382,i__10331_10384);lt.object.raise.call(null,x_10385,new cljs.core.Keyword(null,"close","close",1108660586));
{
var G__10386 = seq__10328_10381;
var G__10387 = chunk__10329_10382;
var G__10388 = count__10330_10383;
var G__10389 = (i__10331_10384 + 1);
seq__10328_10381 = G__10386;
chunk__10329_10382 = G__10387;
count__10330_10383 = G__10388;
i__10331_10384 = G__10389;
continue;
}
} else
{var temp__4092__auto___10390 = cljs.core.seq.call(null,seq__10328_10381);if(temp__4092__auto___10390)
{var seq__10328_10391__$1 = temp__4092__auto___10390;if(cljs.core.chunked_seq_QMARK_.call(null,seq__10328_10391__$1))
{var c__7564__auto___10392 = cljs.core.chunk_first.call(null,seq__10328_10391__$1);{
var G__10393 = cljs.core.chunk_rest.call(null,seq__10328_10391__$1);
var G__10394 = c__7564__auto___10392;
var G__10395 = cljs.core.count.call(null,c__7564__auto___10392);
var G__10396 = 0;
seq__10328_10381 = G__10393;
chunk__10329_10382 = G__10394;
count__10330_10383 = G__10395;
i__10331_10384 = G__10396;
continue;
}
} else
{var x_10397 = cljs.core.first.call(null,seq__10328_10391__$1);lt.object.raise.call(null,x_10397,new cljs.core.Keyword(null,"close","close",1108660586));
{
var G__10398 = cljs.core.next.call(null,seq__10328_10391__$1);
var G__10399 = null;
var G__10400 = 0;
var G__10401 = 0;
seq__10328_10381 = G__10398;
chunk__10329_10382 = G__10399;
count__10330_10383 = G__10400;
i__10331_10384 = G__10401;
continue;
}
}
} else
{}
}
break;
}
var seq__10332 = cljs.core.seq.call(null,cljs.core.filter.call(null,cljs.core.comp.call(null,cljs.core.not,cljs.core.PersistentHashSet.fromArray([active_tabset], true)),tabsets));var chunk__10333 = null;var count__10334 = 0;var i__10335 = 0;while(true){
if((i__10335 < count__10334))
{var x = cljs.core._nth.call(null,chunk__10333,i__10335);lt.objs.tabs.rem_tabset.call(null,x);
{
var G__10402 = seq__10332;
var G__10403 = chunk__10333;
var G__10404 = count__10334;
var G__10405 = (i__10335 + 1);
seq__10332 = G__10402;
chunk__10333 = G__10403;
count__10334 = G__10404;
i__10335 = G__10405;
continue;
}
} else
{var temp__4092__auto__ = cljs.core.seq.call(null,seq__10332);if(temp__4092__auto__)
{var seq__10332__$1 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__10332__$1))
{var c__7564__auto__ = cljs.core.chunk_first.call(null,seq__10332__$1);{
var G__10406 = cljs.core.chunk_rest.call(null,seq__10332__$1);
var G__10407 = c__7564__auto__;
var G__10408 = cljs.core.count.call(null,c__7564__auto__);
var G__10409 = 0;
seq__10332 = G__10406;
chunk__10333 = G__10407;
count__10334 = G__10408;
i__10335 = G__10409;
continue;
}
} else
{var x = cljs.core.first.call(null,seq__10332__$1);lt.objs.tabs.rem_tabset.call(null,x);
{
var G__10410 = cljs.core.next.call(null,seq__10332__$1);
var G__10411 = null;
var G__10412 = 0;
var G__10413 = 0;
seq__10332 = G__10410;
chunk__10333 = G__10411;
count__10334 = G__10412;
i__10335 = G__10413;
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