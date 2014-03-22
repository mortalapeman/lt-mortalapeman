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
lt.plugins.mortalapeman.__BEH__tab_menu_items = (function __BEH__tab_menu_items(this$,items){return cljs.core.conj.call(null,items,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1017479852),"separator",new cljs.core.Keyword(null,"order","order",1119910592),3], null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"label","label",1116631654),"Close tabs to the right",new cljs.core.Keyword(null,"order","order",1119910592),4,new cljs.core.Keyword(null,"click","click",1108654330),(function (){return lt.objs.command.exec_BANG_.call(null,new cljs.core.Keyword(null,"tabset.close-tabs-to-right","tabset.close-tabs-to-right",1757769557),this$);
})], null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"label","label",1116631654),"Close other tabs",new cljs.core.Keyword(null,"order","order",1119910592),5,new cljs.core.Keyword(null,"click","click",1108654330),(function (){return lt.objs.command.exec_BANG_.call(null,new cljs.core.Keyword(null,"tabset.close-other-tabs","tabset.close-other-tabs",3361386915),this$);
})], null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"label","label",1116631654),"Close all tabs",new cljs.core.Keyword(null,"order","order",1119910592),6,new cljs.core.Keyword(null,"click","click",1108654330),(function (){return lt.objs.command.exec_BANG_.call(null,new cljs.core.Keyword(null,"tabs.close-all","tabs.close-all",2444215630));
})], null));
});
lt.object.behavior_STAR_.call(null,new cljs.core.Keyword("lt.plugins.mortalapeman","tab-menu-items","lt.plugins.mortalapeman/tab-menu-items",1230141180),new cljs.core.Keyword(null,"reaction","reaction",4441361819),lt.plugins.mortalapeman.__BEH__tab_menu_items,new cljs.core.Keyword(null,"triggers","triggers",2516997421),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tab-menu-items","tab-menu-items",3083849340),null], null), null));
lt.objs.command.command.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"command","command",1964298941),new cljs.core.Keyword(null,"tabset.close-other-tabs","tabset.close-other-tabs",3361386915),new cljs.core.Keyword(null,"desc","desc",1016984067),"Tabset: Close other tabs and tabsets",new cljs.core.Keyword(null,"hidden","hidden",4091384092),true,new cljs.core.Keyword(null,"exec","exec",1017031683),(function (active_obj){var tabs = lt.object.by_tag.call(null,new cljs.core.Keyword(null,"tabset.tab","tabset.tab",1444337222));var tabsets = lt.object.by_tag.call(null,new cljs.core.Keyword(null,"tabset","tabset",4427500575));var seq__10456_10477 = cljs.core.seq.call(null,cljs.core.filter.call(null,cljs.core.comp.call(null,cljs.core.not,cljs.core.PersistentHashSet.fromArray([active_obj], true)),tabs));var chunk__10457_10478 = null;var count__10458_10479 = 0;var i__10459_10480 = 0;while(true){
if((i__10459_10480 < count__10458_10479))
{var x_10481 = cljs.core._nth.call(null,chunk__10457_10478,i__10459_10480);lt.object.raise.call(null,x_10481,new cljs.core.Keyword(null,"close","close",1108660586));
{
var G__10482 = seq__10456_10477;
var G__10483 = chunk__10457_10478;
var G__10484 = count__10458_10479;
var G__10485 = (i__10459_10480 + 1);
seq__10456_10477 = G__10482;
chunk__10457_10478 = G__10483;
count__10458_10479 = G__10484;
i__10459_10480 = G__10485;
continue;
}
} else
{var temp__4092__auto___10486 = cljs.core.seq.call(null,seq__10456_10477);if(temp__4092__auto___10486)
{var seq__10456_10487__$1 = temp__4092__auto___10486;if(cljs.core.chunked_seq_QMARK_.call(null,seq__10456_10487__$1))
{var c__7564__auto___10488 = cljs.core.chunk_first.call(null,seq__10456_10487__$1);{
var G__10489 = cljs.core.chunk_rest.call(null,seq__10456_10487__$1);
var G__10490 = c__7564__auto___10488;
var G__10491 = cljs.core.count.call(null,c__7564__auto___10488);
var G__10492 = 0;
seq__10456_10477 = G__10489;
chunk__10457_10478 = G__10490;
count__10458_10479 = G__10491;
i__10459_10480 = G__10492;
continue;
}
} else
{var x_10493 = cljs.core.first.call(null,seq__10456_10487__$1);lt.object.raise.call(null,x_10493,new cljs.core.Keyword(null,"close","close",1108660586));
{
var G__10494 = cljs.core.next.call(null,seq__10456_10487__$1);
var G__10495 = null;
var G__10496 = 0;
var G__10497 = 0;
seq__10456_10477 = G__10494;
chunk__10457_10478 = G__10495;
count__10458_10479 = G__10496;
i__10459_10480 = G__10497;
continue;
}
}
} else
{}
}
break;
}
var seq__10460 = cljs.core.seq.call(null,cljs.core.filter.call(null,cljs.core.comp.call(null,cljs.core.not,cljs.core.PersistentHashSet.fromArray([new cljs.core.Keyword("lt.objs.tabs","tabset","lt.objs.tabs/tabset",3378091779).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,active_obj))], true)),tabsets));var chunk__10461 = null;var count__10462 = 0;var i__10463 = 0;while(true){
if((i__10463 < count__10462))
{var x = cljs.core._nth.call(null,chunk__10461,i__10463);lt.objs.tabs.rem_tabset.call(null,x);
{
var G__10498 = seq__10460;
var G__10499 = chunk__10461;
var G__10500 = count__10462;
var G__10501 = (i__10463 + 1);
seq__10460 = G__10498;
chunk__10461 = G__10499;
count__10462 = G__10500;
i__10463 = G__10501;
continue;
}
} else
{var temp__4092__auto__ = cljs.core.seq.call(null,seq__10460);if(temp__4092__auto__)
{var seq__10460__$1 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__10460__$1))
{var c__7564__auto__ = cljs.core.chunk_first.call(null,seq__10460__$1);{
var G__10502 = cljs.core.chunk_rest.call(null,seq__10460__$1);
var G__10503 = c__7564__auto__;
var G__10504 = cljs.core.count.call(null,c__7564__auto__);
var G__10505 = 0;
seq__10460 = G__10502;
chunk__10461 = G__10503;
count__10462 = G__10504;
i__10463 = G__10505;
continue;
}
} else
{var x = cljs.core.first.call(null,seq__10460__$1);lt.objs.tabs.rem_tabset.call(null,x);
{
var G__10506 = cljs.core.next.call(null,seq__10460__$1);
var G__10507 = null;
var G__10508 = 0;
var G__10509 = 0;
seq__10460 = G__10506;
chunk__10461 = G__10507;
count__10462 = G__10508;
i__10463 = G__10509;
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
return (function (p1__10464_SHARP_){return (lt.objs.tabs.__GT_index.call(null,p1__10464_SHARP_) > index);
});})(index))
,new cljs.core.Keyword(null,"objs","objs",1017308622).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,new cljs.core.Keyword("lt.objs.tabs","tabset","lt.objs.tabs/tabset",3378091779).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,active_obj)))));var seq__10465 = cljs.core.seq.call(null,tabs);var chunk__10466 = null;var count__10467 = 0;var i__10468 = 0;while(true){
if((i__10468 < count__10467))
{var x = cljs.core._nth.call(null,chunk__10466,i__10468);lt.object.raise.call(null,x,new cljs.core.Keyword(null,"close","close",1108660586));
{
var G__10510 = seq__10465;
var G__10511 = chunk__10466;
var G__10512 = count__10467;
var G__10513 = (i__10468 + 1);
seq__10465 = G__10510;
chunk__10466 = G__10511;
count__10467 = G__10512;
i__10468 = G__10513;
continue;
}
} else
{var temp__4092__auto__ = cljs.core.seq.call(null,seq__10465);if(temp__4092__auto__)
{var seq__10465__$1 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__10465__$1))
{var c__7564__auto__ = cljs.core.chunk_first.call(null,seq__10465__$1);{
var G__10514 = cljs.core.chunk_rest.call(null,seq__10465__$1);
var G__10515 = c__7564__auto__;
var G__10516 = cljs.core.count.call(null,c__7564__auto__);
var G__10517 = 0;
seq__10465 = G__10514;
chunk__10466 = G__10515;
count__10467 = G__10516;
i__10468 = G__10517;
continue;
}
} else
{var x = cljs.core.first.call(null,seq__10465__$1);lt.object.raise.call(null,x,new cljs.core.Keyword(null,"close","close",1108660586));
{
var G__10518 = cljs.core.next.call(null,seq__10465__$1);
var G__10519 = null;
var G__10520 = 0;
var G__10521 = 0;
seq__10465 = G__10518;
chunk__10466 = G__10519;
count__10467 = G__10520;
i__10468 = G__10521;
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
lt.objs.command.command.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"command","command",1964298941),new cljs.core.Keyword(null,"tabset.close-all-but-active","tabset.close-all-but-active",3205009926),new cljs.core.Keyword(null,"desc","desc",1016984067),"Tabset: Close all tabs/tabsets except active",new cljs.core.Keyword(null,"exec","exec",1017031683),(function (){var tabs = lt.object.by_tag.call(null,new cljs.core.Keyword(null,"tabset.tab","tabset.tab",1444337222));var tabsets = lt.object.by_tag.call(null,new cljs.core.Keyword(null,"tabset","tabset",4427500575));var active_tabset = lt.objs.context.__GT_obj.call(null,new cljs.core.Keyword(null,"tabset","tabset",4427500575));var active_tab = new cljs.core.Keyword(null,"active-obj","active-obj",3056705826).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,active_tabset));var seq__10469_10522 = cljs.core.seq.call(null,cljs.core.filter.call(null,cljs.core.comp.call(null,cljs.core.not,cljs.core.PersistentHashSet.fromArray([active_tab], true)),tabs));var chunk__10470_10523 = null;var count__10471_10524 = 0;var i__10472_10525 = 0;while(true){
if((i__10472_10525 < count__10471_10524))
{var x_10526 = cljs.core._nth.call(null,chunk__10470_10523,i__10472_10525);lt.object.raise.call(null,x_10526,new cljs.core.Keyword(null,"close","close",1108660586));
{
var G__10527 = seq__10469_10522;
var G__10528 = chunk__10470_10523;
var G__10529 = count__10471_10524;
var G__10530 = (i__10472_10525 + 1);
seq__10469_10522 = G__10527;
chunk__10470_10523 = G__10528;
count__10471_10524 = G__10529;
i__10472_10525 = G__10530;
continue;
}
} else
{var temp__4092__auto___10531 = cljs.core.seq.call(null,seq__10469_10522);if(temp__4092__auto___10531)
{var seq__10469_10532__$1 = temp__4092__auto___10531;if(cljs.core.chunked_seq_QMARK_.call(null,seq__10469_10532__$1))
{var c__7564__auto___10533 = cljs.core.chunk_first.call(null,seq__10469_10532__$1);{
var G__10534 = cljs.core.chunk_rest.call(null,seq__10469_10532__$1);
var G__10535 = c__7564__auto___10533;
var G__10536 = cljs.core.count.call(null,c__7564__auto___10533);
var G__10537 = 0;
seq__10469_10522 = G__10534;
chunk__10470_10523 = G__10535;
count__10471_10524 = G__10536;
i__10472_10525 = G__10537;
continue;
}
} else
{var x_10538 = cljs.core.first.call(null,seq__10469_10532__$1);lt.object.raise.call(null,x_10538,new cljs.core.Keyword(null,"close","close",1108660586));
{
var G__10539 = cljs.core.next.call(null,seq__10469_10532__$1);
var G__10540 = null;
var G__10541 = 0;
var G__10542 = 0;
seq__10469_10522 = G__10539;
chunk__10470_10523 = G__10540;
count__10471_10524 = G__10541;
i__10472_10525 = G__10542;
continue;
}
}
} else
{}
}
break;
}
var seq__10473 = cljs.core.seq.call(null,cljs.core.filter.call(null,cljs.core.comp.call(null,cljs.core.not,cljs.core.PersistentHashSet.fromArray([active_tabset], true)),tabsets));var chunk__10474 = null;var count__10475 = 0;var i__10476 = 0;while(true){
if((i__10476 < count__10475))
{var x = cljs.core._nth.call(null,chunk__10474,i__10476);lt.objs.tabs.rem_tabset.call(null,x);
{
var G__10543 = seq__10473;
var G__10544 = chunk__10474;
var G__10545 = count__10475;
var G__10546 = (i__10476 + 1);
seq__10473 = G__10543;
chunk__10474 = G__10544;
count__10475 = G__10545;
i__10476 = G__10546;
continue;
}
} else
{var temp__4092__auto__ = cljs.core.seq.call(null,seq__10473);if(temp__4092__auto__)
{var seq__10473__$1 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__10473__$1))
{var c__7564__auto__ = cljs.core.chunk_first.call(null,seq__10473__$1);{
var G__10547 = cljs.core.chunk_rest.call(null,seq__10473__$1);
var G__10548 = c__7564__auto__;
var G__10549 = cljs.core.count.call(null,c__7564__auto__);
var G__10550 = 0;
seq__10473 = G__10547;
chunk__10474 = G__10548;
count__10475 = G__10549;
i__10476 = G__10550;
continue;
}
} else
{var x = cljs.core.first.call(null,seq__10473__$1);lt.objs.tabs.rem_tabset.call(null,x);
{
var G__10551 = cljs.core.next.call(null,seq__10473__$1);
var G__10552 = null;
var G__10553 = 0;
var G__10554 = 0;
seq__10473 = G__10551;
chunk__10474 = G__10552;
count__10475 = G__10553;
i__10476 = G__10554;
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