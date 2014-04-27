if(!lt.util.load.provided_QMARK_('lt.plugins.mortalapeman')) {
goog.provide('lt.plugins.mortalapeman');
goog.require('cljs.core');
goog.require('lt.objs.context');
goog.require('lt.objs.tabs');
goog.require('lt.objs.clients.local');
goog.require('lt.objs.context');
goog.require('lt.objs.command');
goog.require('lt.object');
goog.require('lt.object');
goog.require('lt.objs.clients.local');
goog.require('lt.objs.tabs');
goog.require('lt.objs.command');
lt.plugins.mortalapeman.__BEH__sidebar_menu_items = (function __BEH__sidebar_menu_items(this$,items){return cljs.core.conj.call(null,items,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"label","label",1116631654),"Create new workspace",new cljs.core.Keyword(null,"click","click",1108654330),(function (){return lt.objs.command.exec_BANG_.call(null,new cljs.core.Keyword(null,"workspace.new","workspace.new",2700812345));
})], null));
});
lt.object.behavior_STAR_.call(null,new cljs.core.Keyword("lt.plugins.mortalapeman","sidebar-menu-items","lt.plugins.mortalapeman/sidebar-menu-items",3624932563),new cljs.core.Keyword(null,"reaction","reaction",4441361819),lt.plugins.mortalapeman.__BEH__sidebar_menu_items,new cljs.core.Keyword(null,"triggers","triggers",2516997421),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"menu-items","menu-items",3782623556),null], null), null));
lt.plugins.mortalapeman.__BEH__tab_menu_items = (function __BEH__tab_menu_items(this$,items){return cljs.core.conj.call(null,items,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1017479852),"separator",new cljs.core.Keyword(null,"order","order",1119910592),3], null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"label","label",1116631654),"Close tabs to the right",new cljs.core.Keyword(null,"order","order",1119910592),4,new cljs.core.Keyword(null,"click","click",1108654330),(function (){return lt.objs.command.exec_BANG_.call(null,new cljs.core.Keyword(null,"tabset.close-tabs-to-right","tabset.close-tabs-to-right",1757769557),new cljs.core.Keyword("lt.objs.tabs","tab-object","lt.objs.tabs/tab-object",3521887033).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,this$)));
})], null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"label","label",1116631654),"Close other tabs",new cljs.core.Keyword(null,"order","order",1119910592),5,new cljs.core.Keyword(null,"click","click",1108654330),(function (){return lt.objs.command.exec_BANG_.call(null,new cljs.core.Keyword(null,"tabset.close-other-tabs","tabset.close-other-tabs",3361386915),new cljs.core.Keyword("lt.objs.tabs","tab-object","lt.objs.tabs/tab-object",3521887033).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,this$)));
})], null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"label","label",1116631654),"Close all tabs",new cljs.core.Keyword(null,"order","order",1119910592),6,new cljs.core.Keyword(null,"click","click",1108654330),(function (){return lt.objs.command.exec_BANG_.call(null,new cljs.core.Keyword(null,"tabs.close-all","tabs.close-all",2444215630));
})], null));
});
lt.object.behavior_STAR_.call(null,new cljs.core.Keyword("lt.plugins.mortalapeman","tab-menu-items","lt.plugins.mortalapeman/tab-menu-items",1230141180),new cljs.core.Keyword(null,"reaction","reaction",4441361819),lt.plugins.mortalapeman.__BEH__tab_menu_items,new cljs.core.Keyword(null,"triggers","triggers",2516997421),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"menu+","menu+",1117686302),null], null), null));
lt.objs.command.command.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"command","command",1964298941),new cljs.core.Keyword(null,"tabset.close-other-tabs","tabset.close-other-tabs",3361386915),new cljs.core.Keyword(null,"desc","desc",1016984067),"Tabset: Close other tabs and tabsets",new cljs.core.Keyword(null,"hidden","hidden",4091384092),true,new cljs.core.Keyword(null,"exec","exec",1017031683),(function (active_obj){var tabs = lt.object.by_tag.call(null,new cljs.core.Keyword(null,"tabset.tab","tabset.tab",1444337222));var tabsets = lt.object.by_tag.call(null,new cljs.core.Keyword(null,"tabset","tabset",4427500575));var seq__8379_8400 = cljs.core.seq.call(null,cljs.core.filter.call(null,cljs.core.comp.call(null,cljs.core.not,cljs.core.PersistentHashSet.fromArray([active_obj], true)),tabs));var chunk__8380_8401 = null;var count__8381_8402 = 0;var i__8382_8403 = 0;while(true){
if((i__8382_8403 < count__8381_8402))
{var x_8404 = cljs.core._nth.call(null,chunk__8380_8401,i__8382_8403);lt.object.raise.call(null,x_8404,new cljs.core.Keyword(null,"close","close",1108660586));
{
var G__8405 = seq__8379_8400;
var G__8406 = chunk__8380_8401;
var G__8407 = count__8381_8402;
var G__8408 = (i__8382_8403 + 1);
seq__8379_8400 = G__8405;
chunk__8380_8401 = G__8406;
count__8381_8402 = G__8407;
i__8382_8403 = G__8408;
continue;
}
} else
{var temp__4092__auto___8409 = cljs.core.seq.call(null,seq__8379_8400);if(temp__4092__auto___8409)
{var seq__8379_8410__$1 = temp__4092__auto___8409;if(cljs.core.chunked_seq_QMARK_.call(null,seq__8379_8410__$1))
{var c__7564__auto___8411 = cljs.core.chunk_first.call(null,seq__8379_8410__$1);{
var G__8412 = cljs.core.chunk_rest.call(null,seq__8379_8410__$1);
var G__8413 = c__7564__auto___8411;
var G__8414 = cljs.core.count.call(null,c__7564__auto___8411);
var G__8415 = 0;
seq__8379_8400 = G__8412;
chunk__8380_8401 = G__8413;
count__8381_8402 = G__8414;
i__8382_8403 = G__8415;
continue;
}
} else
{var x_8416 = cljs.core.first.call(null,seq__8379_8410__$1);lt.object.raise.call(null,x_8416,new cljs.core.Keyword(null,"close","close",1108660586));
{
var G__8417 = cljs.core.next.call(null,seq__8379_8410__$1);
var G__8418 = null;
var G__8419 = 0;
var G__8420 = 0;
seq__8379_8400 = G__8417;
chunk__8380_8401 = G__8418;
count__8381_8402 = G__8419;
i__8382_8403 = G__8420;
continue;
}
}
} else
{}
}
break;
}
var seq__8383 = cljs.core.seq.call(null,cljs.core.filter.call(null,cljs.core.comp.call(null,cljs.core.not,cljs.core.PersistentHashSet.fromArray([new cljs.core.Keyword("lt.objs.tabs","tabset","lt.objs.tabs/tabset",3378091779).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,active_obj))], true)),tabsets));var chunk__8384 = null;var count__8385 = 0;var i__8386 = 0;while(true){
if((i__8386 < count__8385))
{var x = cljs.core._nth.call(null,chunk__8384,i__8386);lt.objs.tabs.rem_tabset.call(null,x);
{
var G__8421 = seq__8383;
var G__8422 = chunk__8384;
var G__8423 = count__8385;
var G__8424 = (i__8386 + 1);
seq__8383 = G__8421;
chunk__8384 = G__8422;
count__8385 = G__8423;
i__8386 = G__8424;
continue;
}
} else
{var temp__4092__auto__ = cljs.core.seq.call(null,seq__8383);if(temp__4092__auto__)
{var seq__8383__$1 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__8383__$1))
{var c__7564__auto__ = cljs.core.chunk_first.call(null,seq__8383__$1);{
var G__8425 = cljs.core.chunk_rest.call(null,seq__8383__$1);
var G__8426 = c__7564__auto__;
var G__8427 = cljs.core.count.call(null,c__7564__auto__);
var G__8428 = 0;
seq__8383 = G__8425;
chunk__8384 = G__8426;
count__8385 = G__8427;
i__8386 = G__8428;
continue;
}
} else
{var x = cljs.core.first.call(null,seq__8383__$1);lt.objs.tabs.rem_tabset.call(null,x);
{
var G__8429 = cljs.core.next.call(null,seq__8383__$1);
var G__8430 = null;
var G__8431 = 0;
var G__8432 = 0;
seq__8383 = G__8429;
chunk__8384 = G__8430;
count__8385 = G__8431;
i__8386 = G__8432;
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
return (function (p1__8387_SHARP_){return (lt.objs.tabs.__GT_index.call(null,p1__8387_SHARP_) > index);
});})(index))
,new cljs.core.Keyword(null,"objs","objs",1017308622).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,new cljs.core.Keyword("lt.objs.tabs","tabset","lt.objs.tabs/tabset",3378091779).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,active_obj)))));var seq__8388 = cljs.core.seq.call(null,tabs);var chunk__8389 = null;var count__8390 = 0;var i__8391 = 0;while(true){
if((i__8391 < count__8390))
{var x = cljs.core._nth.call(null,chunk__8389,i__8391);lt.object.raise.call(null,x,new cljs.core.Keyword(null,"close","close",1108660586));
{
var G__8433 = seq__8388;
var G__8434 = chunk__8389;
var G__8435 = count__8390;
var G__8436 = (i__8391 + 1);
seq__8388 = G__8433;
chunk__8389 = G__8434;
count__8390 = G__8435;
i__8391 = G__8436;
continue;
}
} else
{var temp__4092__auto__ = cljs.core.seq.call(null,seq__8388);if(temp__4092__auto__)
{var seq__8388__$1 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__8388__$1))
{var c__7564__auto__ = cljs.core.chunk_first.call(null,seq__8388__$1);{
var G__8437 = cljs.core.chunk_rest.call(null,seq__8388__$1);
var G__8438 = c__7564__auto__;
var G__8439 = cljs.core.count.call(null,c__7564__auto__);
var G__8440 = 0;
seq__8388 = G__8437;
chunk__8389 = G__8438;
count__8390 = G__8439;
i__8391 = G__8440;
continue;
}
} else
{var x = cljs.core.first.call(null,seq__8388__$1);lt.object.raise.call(null,x,new cljs.core.Keyword(null,"close","close",1108660586));
{
var G__8441 = cljs.core.next.call(null,seq__8388__$1);
var G__8442 = null;
var G__8443 = 0;
var G__8444 = 0;
seq__8388 = G__8441;
chunk__8389 = G__8442;
count__8390 = G__8443;
i__8391 = G__8444;
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
lt.objs.command.command.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"command","command",1964298941),new cljs.core.Keyword(null,"tabset.close-all-but-active","tabset.close-all-but-active",3205009926),new cljs.core.Keyword(null,"desc","desc",1016984067),"Tabset: Close all tabs/tabsets except active",new cljs.core.Keyword(null,"exec","exec",1017031683),(function (){var tabs = lt.object.by_tag.call(null,new cljs.core.Keyword(null,"tabset.tab","tabset.tab",1444337222));var tabsets = lt.object.by_tag.call(null,new cljs.core.Keyword(null,"tabset","tabset",4427500575));var active_tabset = lt.objs.context.__GT_obj.call(null,new cljs.core.Keyword(null,"tabset","tabset",4427500575));var active_tab = new cljs.core.Keyword(null,"active-obj","active-obj",3056705826).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,active_tabset));var seq__8392_8445 = cljs.core.seq.call(null,cljs.core.filter.call(null,cljs.core.comp.call(null,cljs.core.not,cljs.core.PersistentHashSet.fromArray([active_tab], true)),tabs));var chunk__8393_8446 = null;var count__8394_8447 = 0;var i__8395_8448 = 0;while(true){
if((i__8395_8448 < count__8394_8447))
{var x_8449 = cljs.core._nth.call(null,chunk__8393_8446,i__8395_8448);lt.object.raise.call(null,x_8449,new cljs.core.Keyword(null,"close","close",1108660586));
{
var G__8450 = seq__8392_8445;
var G__8451 = chunk__8393_8446;
var G__8452 = count__8394_8447;
var G__8453 = (i__8395_8448 + 1);
seq__8392_8445 = G__8450;
chunk__8393_8446 = G__8451;
count__8394_8447 = G__8452;
i__8395_8448 = G__8453;
continue;
}
} else
{var temp__4092__auto___8454 = cljs.core.seq.call(null,seq__8392_8445);if(temp__4092__auto___8454)
{var seq__8392_8455__$1 = temp__4092__auto___8454;if(cljs.core.chunked_seq_QMARK_.call(null,seq__8392_8455__$1))
{var c__7564__auto___8456 = cljs.core.chunk_first.call(null,seq__8392_8455__$1);{
var G__8457 = cljs.core.chunk_rest.call(null,seq__8392_8455__$1);
var G__8458 = c__7564__auto___8456;
var G__8459 = cljs.core.count.call(null,c__7564__auto___8456);
var G__8460 = 0;
seq__8392_8445 = G__8457;
chunk__8393_8446 = G__8458;
count__8394_8447 = G__8459;
i__8395_8448 = G__8460;
continue;
}
} else
{var x_8461 = cljs.core.first.call(null,seq__8392_8455__$1);lt.object.raise.call(null,x_8461,new cljs.core.Keyword(null,"close","close",1108660586));
{
var G__8462 = cljs.core.next.call(null,seq__8392_8455__$1);
var G__8463 = null;
var G__8464 = 0;
var G__8465 = 0;
seq__8392_8445 = G__8462;
chunk__8393_8446 = G__8463;
count__8394_8447 = G__8464;
i__8395_8448 = G__8465;
continue;
}
}
} else
{}
}
break;
}
var seq__8396 = cljs.core.seq.call(null,cljs.core.filter.call(null,cljs.core.comp.call(null,cljs.core.not,cljs.core.PersistentHashSet.fromArray([active_tabset], true)),tabsets));var chunk__8397 = null;var count__8398 = 0;var i__8399 = 0;while(true){
if((i__8399 < count__8398))
{var x = cljs.core._nth.call(null,chunk__8397,i__8399);lt.objs.tabs.rem_tabset.call(null,x);
{
var G__8466 = seq__8396;
var G__8467 = chunk__8397;
var G__8468 = count__8398;
var G__8469 = (i__8399 + 1);
seq__8396 = G__8466;
chunk__8397 = G__8467;
count__8398 = G__8468;
i__8399 = G__8469;
continue;
}
} else
{var temp__4092__auto__ = cljs.core.seq.call(null,seq__8396);if(temp__4092__auto__)
{var seq__8396__$1 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__8396__$1))
{var c__7564__auto__ = cljs.core.chunk_first.call(null,seq__8396__$1);{
var G__8470 = cljs.core.chunk_rest.call(null,seq__8396__$1);
var G__8471 = c__7564__auto__;
var G__8472 = cljs.core.count.call(null,c__7564__auto__);
var G__8473 = 0;
seq__8396 = G__8470;
chunk__8397 = G__8471;
count__8398 = G__8472;
i__8399 = G__8473;
continue;
}
} else
{var x = cljs.core.first.call(null,seq__8396__$1);lt.objs.tabs.rem_tabset.call(null,x);
{
var G__8474 = cljs.core.next.call(null,seq__8396__$1);
var G__8475 = null;
var G__8476 = 0;
var G__8477 = 0;
seq__8396 = G__8474;
chunk__8397 = G__8475;
count__8398 = G__8476;
i__8399 = G__8477;
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
lt.objs.command.command.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"command","command",1964298941),new cljs.core.Keyword(null,"app.connect-to-lt-ui","app.connect-to-lt-ui",3899501641),new cljs.core.Keyword(null,"desc","desc",1016984067),"Connect: Connect to Light Table UI",new cljs.core.Keyword(null,"exec","exec",1017031683),(function (){return lt.objs.clients.local.init.call(null);
})], null));
}

//# sourceMappingURL=mortalapeman_compiled.js.map