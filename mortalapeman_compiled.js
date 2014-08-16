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
lt.plugins.mortalapeman.open_powershel = (function open_powershel(path){var cp = require("child_process");return cp.spawn("powershell",new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, ["-noexit","-command","\"cd '",path,"'\""], null));
});
lt.plugins.mortalapeman.open_gnome_terminal = (function open_gnome_terminal(path){var cp = require("child_process");return cp.spawn("gnome-terminal",[[cljs.core.str("--working-directory="),cljs.core.str(path)].join('')]);
});
lt.plugins.mortalapeman.__BEH__subfolder_menu__DOT__open_gnome_termial = (function __BEH__subfolder_menu__DOT__open_gnome_termial(this$,items){return cljs.core.conj.call(null,items,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"label","label",1116631654),"Open Terminal Here",new cljs.core.Keyword(null,"order","order",1119910592),7,new cljs.core.Keyword(null,"click","click",1108654330),(function (){var pred__8371 = cljs.core._EQ_;var expr__8372 = process.platform;if(cljs.core.truth_(pred__8371.call(null,"linux",expr__8372)))
{return lt.plugins.mortalapeman.open_gnome_terminal.call(null,new cljs.core.Keyword(null,"path","path",1017337751).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,this$)));
} else
{if(cljs.core.truth_(pred__8371.call(null,"win32",expr__8372)))
{return lt.plugins.mortalapeman.open_powershel.call(null,new cljs.core.Keyword(null,"path","path",1017337751).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,this$)));
} else
{throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(expr__8372)].join('')));
}
}
})], null));
});
lt.object.behavior_STAR_.call(null,new cljs.core.Keyword("lt.plugins.mortalapeman","subfolder-menu.open-gnome-termial","lt.plugins.mortalapeman/subfolder-menu.open-gnome-termial",2868382750),new cljs.core.Keyword(null,"reaction","reaction",4441361819),lt.plugins.mortalapeman.__BEH__subfolder_menu__DOT__open_gnome_termial,new cljs.core.Keyword(null,"triggers","triggers",2516997421),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"menu-items","menu-items",3782623556),null], null), null));
lt.objs.command.command.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"command","command",1964298941),new cljs.core.Keyword(null,"tabset.close-other-tabs","tabset.close-other-tabs",3361386915),new cljs.core.Keyword(null,"desc","desc",1016984067),"Tabset: Close other tabs and tabsets",new cljs.core.Keyword(null,"hidden","hidden",4091384092),true,new cljs.core.Keyword(null,"exec","exec",1017031683),(function (active_obj){var tabs = lt.object.by_tag.call(null,new cljs.core.Keyword(null,"tabset.tab","tabset.tab",1444337222));var tabsets = lt.object.by_tag.call(null,new cljs.core.Keyword(null,"tabset","tabset",4427500575));var seq__8374_8395 = cljs.core.seq.call(null,cljs.core.filter.call(null,cljs.core.comp.call(null,cljs.core.not,cljs.core.PersistentHashSet.fromArray([active_obj], true)),tabs));var chunk__8375_8396 = null;var count__8376_8397 = 0;var i__8377_8398 = 0;while(true){
if((i__8377_8398 < count__8376_8397))
{var x_8399 = cljs.core._nth.call(null,chunk__8375_8396,i__8377_8398);lt.object.raise.call(null,x_8399,new cljs.core.Keyword(null,"close","close",1108660586));
{
var G__8400 = seq__8374_8395;
var G__8401 = chunk__8375_8396;
var G__8402 = count__8376_8397;
var G__8403 = (i__8377_8398 + 1);
seq__8374_8395 = G__8400;
chunk__8375_8396 = G__8401;
count__8376_8397 = G__8402;
i__8377_8398 = G__8403;
continue;
}
} else
{var temp__4092__auto___8404 = cljs.core.seq.call(null,seq__8374_8395);if(temp__4092__auto___8404)
{var seq__8374_8405__$1 = temp__4092__auto___8404;if(cljs.core.chunked_seq_QMARK_.call(null,seq__8374_8405__$1))
{var c__7115__auto___8406 = cljs.core.chunk_first.call(null,seq__8374_8405__$1);{
var G__8407 = cljs.core.chunk_rest.call(null,seq__8374_8405__$1);
var G__8408 = c__7115__auto___8406;
var G__8409 = cljs.core.count.call(null,c__7115__auto___8406);
var G__8410 = 0;
seq__8374_8395 = G__8407;
chunk__8375_8396 = G__8408;
count__8376_8397 = G__8409;
i__8377_8398 = G__8410;
continue;
}
} else
{var x_8411 = cljs.core.first.call(null,seq__8374_8405__$1);lt.object.raise.call(null,x_8411,new cljs.core.Keyword(null,"close","close",1108660586));
{
var G__8412 = cljs.core.next.call(null,seq__8374_8405__$1);
var G__8413 = null;
var G__8414 = 0;
var G__8415 = 0;
seq__8374_8395 = G__8412;
chunk__8375_8396 = G__8413;
count__8376_8397 = G__8414;
i__8377_8398 = G__8415;
continue;
}
}
} else
{}
}
break;
}
var seq__8378 = cljs.core.seq.call(null,cljs.core.filter.call(null,cljs.core.comp.call(null,cljs.core.not,cljs.core.PersistentHashSet.fromArray([new cljs.core.Keyword("lt.objs.tabs","tabset","lt.objs.tabs/tabset",3378091779).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,active_obj))], true)),tabsets));var chunk__8379 = null;var count__8380 = 0;var i__8381 = 0;while(true){
if((i__8381 < count__8380))
{var x = cljs.core._nth.call(null,chunk__8379,i__8381);lt.objs.tabs.rem_tabset.call(null,x);
{
var G__8416 = seq__8378;
var G__8417 = chunk__8379;
var G__8418 = count__8380;
var G__8419 = (i__8381 + 1);
seq__8378 = G__8416;
chunk__8379 = G__8417;
count__8380 = G__8418;
i__8381 = G__8419;
continue;
}
} else
{var temp__4092__auto__ = cljs.core.seq.call(null,seq__8378);if(temp__4092__auto__)
{var seq__8378__$1 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__8378__$1))
{var c__7115__auto__ = cljs.core.chunk_first.call(null,seq__8378__$1);{
var G__8420 = cljs.core.chunk_rest.call(null,seq__8378__$1);
var G__8421 = c__7115__auto__;
var G__8422 = cljs.core.count.call(null,c__7115__auto__);
var G__8423 = 0;
seq__8378 = G__8420;
chunk__8379 = G__8421;
count__8380 = G__8422;
i__8381 = G__8423;
continue;
}
} else
{var x = cljs.core.first.call(null,seq__8378__$1);lt.objs.tabs.rem_tabset.call(null,x);
{
var G__8424 = cljs.core.next.call(null,seq__8378__$1);
var G__8425 = null;
var G__8426 = 0;
var G__8427 = 0;
seq__8378 = G__8424;
chunk__8379 = G__8425;
count__8380 = G__8426;
i__8381 = G__8427;
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
return (function (p1__8382_SHARP_){return (lt.objs.tabs.__GT_index.call(null,p1__8382_SHARP_) > index);
});})(index))
,new cljs.core.Keyword(null,"objs","objs",1017308622).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,new cljs.core.Keyword("lt.objs.tabs","tabset","lt.objs.tabs/tabset",3378091779).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,active_obj)))));var seq__8383 = cljs.core.seq.call(null,tabs);var chunk__8384 = null;var count__8385 = 0;var i__8386 = 0;while(true){
if((i__8386 < count__8385))
{var x = cljs.core._nth.call(null,chunk__8384,i__8386);lt.object.raise.call(null,x,new cljs.core.Keyword(null,"close","close",1108660586));
{
var G__8428 = seq__8383;
var G__8429 = chunk__8384;
var G__8430 = count__8385;
var G__8431 = (i__8386 + 1);
seq__8383 = G__8428;
chunk__8384 = G__8429;
count__8385 = G__8430;
i__8386 = G__8431;
continue;
}
} else
{var temp__4092__auto__ = cljs.core.seq.call(null,seq__8383);if(temp__4092__auto__)
{var seq__8383__$1 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__8383__$1))
{var c__7115__auto__ = cljs.core.chunk_first.call(null,seq__8383__$1);{
var G__8432 = cljs.core.chunk_rest.call(null,seq__8383__$1);
var G__8433 = c__7115__auto__;
var G__8434 = cljs.core.count.call(null,c__7115__auto__);
var G__8435 = 0;
seq__8383 = G__8432;
chunk__8384 = G__8433;
count__8385 = G__8434;
i__8386 = G__8435;
continue;
}
} else
{var x = cljs.core.first.call(null,seq__8383__$1);lt.object.raise.call(null,x,new cljs.core.Keyword(null,"close","close",1108660586));
{
var G__8436 = cljs.core.next.call(null,seq__8383__$1);
var G__8437 = null;
var G__8438 = 0;
var G__8439 = 0;
seq__8383 = G__8436;
chunk__8384 = G__8437;
count__8385 = G__8438;
i__8386 = G__8439;
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
lt.objs.command.command.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"command","command",1964298941),new cljs.core.Keyword(null,"tabset.close-all-but-active","tabset.close-all-but-active",3205009926),new cljs.core.Keyword(null,"desc","desc",1016984067),"Tabset: Close all tabs/tabsets except active",new cljs.core.Keyword(null,"exec","exec",1017031683),(function (){var tabs = lt.object.by_tag.call(null,new cljs.core.Keyword(null,"tabset.tab","tabset.tab",1444337222));var tabsets = lt.object.by_tag.call(null,new cljs.core.Keyword(null,"tabset","tabset",4427500575));var active_tabset = lt.objs.context.__GT_obj.call(null,new cljs.core.Keyword(null,"tabset","tabset",4427500575));var active_tab = new cljs.core.Keyword(null,"active-obj","active-obj",3056705826).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,active_tabset));var seq__8387_8440 = cljs.core.seq.call(null,cljs.core.filter.call(null,cljs.core.comp.call(null,cljs.core.not,cljs.core.PersistentHashSet.fromArray([active_tab], true)),tabs));var chunk__8388_8441 = null;var count__8389_8442 = 0;var i__8390_8443 = 0;while(true){
if((i__8390_8443 < count__8389_8442))
{var x_8444 = cljs.core._nth.call(null,chunk__8388_8441,i__8390_8443);lt.object.raise.call(null,x_8444,new cljs.core.Keyword(null,"close","close",1108660586));
{
var G__8445 = seq__8387_8440;
var G__8446 = chunk__8388_8441;
var G__8447 = count__8389_8442;
var G__8448 = (i__8390_8443 + 1);
seq__8387_8440 = G__8445;
chunk__8388_8441 = G__8446;
count__8389_8442 = G__8447;
i__8390_8443 = G__8448;
continue;
}
} else
{var temp__4092__auto___8449 = cljs.core.seq.call(null,seq__8387_8440);if(temp__4092__auto___8449)
{var seq__8387_8450__$1 = temp__4092__auto___8449;if(cljs.core.chunked_seq_QMARK_.call(null,seq__8387_8450__$1))
{var c__7115__auto___8451 = cljs.core.chunk_first.call(null,seq__8387_8450__$1);{
var G__8452 = cljs.core.chunk_rest.call(null,seq__8387_8450__$1);
var G__8453 = c__7115__auto___8451;
var G__8454 = cljs.core.count.call(null,c__7115__auto___8451);
var G__8455 = 0;
seq__8387_8440 = G__8452;
chunk__8388_8441 = G__8453;
count__8389_8442 = G__8454;
i__8390_8443 = G__8455;
continue;
}
} else
{var x_8456 = cljs.core.first.call(null,seq__8387_8450__$1);lt.object.raise.call(null,x_8456,new cljs.core.Keyword(null,"close","close",1108660586));
{
var G__8457 = cljs.core.next.call(null,seq__8387_8450__$1);
var G__8458 = null;
var G__8459 = 0;
var G__8460 = 0;
seq__8387_8440 = G__8457;
chunk__8388_8441 = G__8458;
count__8389_8442 = G__8459;
i__8390_8443 = G__8460;
continue;
}
}
} else
{}
}
break;
}
var seq__8391 = cljs.core.seq.call(null,cljs.core.filter.call(null,cljs.core.comp.call(null,cljs.core.not,cljs.core.PersistentHashSet.fromArray([active_tabset], true)),tabsets));var chunk__8392 = null;var count__8393 = 0;var i__8394 = 0;while(true){
if((i__8394 < count__8393))
{var x = cljs.core._nth.call(null,chunk__8392,i__8394);lt.objs.tabs.rem_tabset.call(null,x);
{
var G__8461 = seq__8391;
var G__8462 = chunk__8392;
var G__8463 = count__8393;
var G__8464 = (i__8394 + 1);
seq__8391 = G__8461;
chunk__8392 = G__8462;
count__8393 = G__8463;
i__8394 = G__8464;
continue;
}
} else
{var temp__4092__auto__ = cljs.core.seq.call(null,seq__8391);if(temp__4092__auto__)
{var seq__8391__$1 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__8391__$1))
{var c__7115__auto__ = cljs.core.chunk_first.call(null,seq__8391__$1);{
var G__8465 = cljs.core.chunk_rest.call(null,seq__8391__$1);
var G__8466 = c__7115__auto__;
var G__8467 = cljs.core.count.call(null,c__7115__auto__);
var G__8468 = 0;
seq__8391 = G__8465;
chunk__8392 = G__8466;
count__8393 = G__8467;
i__8394 = G__8468;
continue;
}
} else
{var x = cljs.core.first.call(null,seq__8391__$1);lt.objs.tabs.rem_tabset.call(null,x);
{
var G__8469 = cljs.core.next.call(null,seq__8391__$1);
var G__8470 = null;
var G__8471 = 0;
var G__8472 = 0;
seq__8391 = G__8469;
chunk__8392 = G__8470;
count__8393 = G__8471;
i__8394 = G__8472;
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