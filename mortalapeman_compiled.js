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
lt.plugins.mortalapeman.open_gnome_terminal = (function open_gnome_terminal(path){var cp = require("child_process");return cp.spawn("gnome-terminal",[[cljs.core.str("--working-directory="),cljs.core.str(path)].join('')]);
});
lt.plugins.mortalapeman.__BEH__subfolder_menu = (function __BEH__subfolder_menu(this$,items){return cljs.core.conj.call(null,items,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"label","label",1116631654),"Open Terminal Here",new cljs.core.Keyword(null,"order","order",1119910592),7,new cljs.core.Keyword(null,"click","click",1108654330),(function (){var pred__8323 = cljs.core._EQ_;var expr__8324 = process.platform;if(cljs.core.truth_(pred__8323.call(null,"linux",expr__8324)))
{return lt.plugins.mortalapeman.open_gnome_terminal.call(null,new cljs.core.Keyword(null,"path","path",1017337751).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,this$)));
} else
{throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(expr__8324)].join('')));
}
})], null));
});
lt.object.behavior_STAR_.call(null,new cljs.core.Keyword("lt.plugins.mortalapeman","subfolder-menu","lt.plugins.mortalapeman/subfolder-menu",1145547032),new cljs.core.Keyword(null,"reaction","reaction",4441361819),lt.plugins.mortalapeman.__BEH__subfolder_menu,new cljs.core.Keyword(null,"triggers","triggers",2516997421),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"menu-items","menu-items",3782623556),null], null), null));
lt.objs.command.command.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"command","command",1964298941),new cljs.core.Keyword(null,"tabset.close-other-tabs","tabset.close-other-tabs",3361386915),new cljs.core.Keyword(null,"desc","desc",1016984067),"Tabset: Close other tabs and tabsets",new cljs.core.Keyword(null,"hidden","hidden",4091384092),true,new cljs.core.Keyword(null,"exec","exec",1017031683),(function (active_obj){var tabs = lt.object.by_tag.call(null,new cljs.core.Keyword(null,"tabset.tab","tabset.tab",1444337222));var tabsets = lt.object.by_tag.call(null,new cljs.core.Keyword(null,"tabset","tabset",4427500575));var seq__8326_8347 = cljs.core.seq.call(null,cljs.core.filter.call(null,cljs.core.comp.call(null,cljs.core.not,cljs.core.PersistentHashSet.fromArray([active_obj], true)),tabs));var chunk__8327_8348 = null;var count__8328_8349 = 0;var i__8329_8350 = 0;while(true){
if((i__8329_8350 < count__8328_8349))
{var x_8351 = cljs.core._nth.call(null,chunk__8327_8348,i__8329_8350);lt.object.raise.call(null,x_8351,new cljs.core.Keyword(null,"close","close",1108660586));
{
var G__8352 = seq__8326_8347;
var G__8353 = chunk__8327_8348;
var G__8354 = count__8328_8349;
var G__8355 = (i__8329_8350 + 1);
seq__8326_8347 = G__8352;
chunk__8327_8348 = G__8353;
count__8328_8349 = G__8354;
i__8329_8350 = G__8355;
continue;
}
} else
{var temp__4092__auto___8356 = cljs.core.seq.call(null,seq__8326_8347);if(temp__4092__auto___8356)
{var seq__8326_8357__$1 = temp__4092__auto___8356;if(cljs.core.chunked_seq_QMARK_.call(null,seq__8326_8357__$1))
{var c__7112__auto___8358 = cljs.core.chunk_first.call(null,seq__8326_8357__$1);{
var G__8359 = cljs.core.chunk_rest.call(null,seq__8326_8357__$1);
var G__8360 = c__7112__auto___8358;
var G__8361 = cljs.core.count.call(null,c__7112__auto___8358);
var G__8362 = 0;
seq__8326_8347 = G__8359;
chunk__8327_8348 = G__8360;
count__8328_8349 = G__8361;
i__8329_8350 = G__8362;
continue;
}
} else
{var x_8363 = cljs.core.first.call(null,seq__8326_8357__$1);lt.object.raise.call(null,x_8363,new cljs.core.Keyword(null,"close","close",1108660586));
{
var G__8364 = cljs.core.next.call(null,seq__8326_8357__$1);
var G__8365 = null;
var G__8366 = 0;
var G__8367 = 0;
seq__8326_8347 = G__8364;
chunk__8327_8348 = G__8365;
count__8328_8349 = G__8366;
i__8329_8350 = G__8367;
continue;
}
}
} else
{}
}
break;
}
var seq__8330 = cljs.core.seq.call(null,cljs.core.filter.call(null,cljs.core.comp.call(null,cljs.core.not,cljs.core.PersistentHashSet.fromArray([new cljs.core.Keyword("lt.objs.tabs","tabset","lt.objs.tabs/tabset",3378091779).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,active_obj))], true)),tabsets));var chunk__8331 = null;var count__8332 = 0;var i__8333 = 0;while(true){
if((i__8333 < count__8332))
{var x = cljs.core._nth.call(null,chunk__8331,i__8333);lt.objs.tabs.rem_tabset.call(null,x);
{
var G__8368 = seq__8330;
var G__8369 = chunk__8331;
var G__8370 = count__8332;
var G__8371 = (i__8333 + 1);
seq__8330 = G__8368;
chunk__8331 = G__8369;
count__8332 = G__8370;
i__8333 = G__8371;
continue;
}
} else
{var temp__4092__auto__ = cljs.core.seq.call(null,seq__8330);if(temp__4092__auto__)
{var seq__8330__$1 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__8330__$1))
{var c__7112__auto__ = cljs.core.chunk_first.call(null,seq__8330__$1);{
var G__8372 = cljs.core.chunk_rest.call(null,seq__8330__$1);
var G__8373 = c__7112__auto__;
var G__8374 = cljs.core.count.call(null,c__7112__auto__);
var G__8375 = 0;
seq__8330 = G__8372;
chunk__8331 = G__8373;
count__8332 = G__8374;
i__8333 = G__8375;
continue;
}
} else
{var x = cljs.core.first.call(null,seq__8330__$1);lt.objs.tabs.rem_tabset.call(null,x);
{
var G__8376 = cljs.core.next.call(null,seq__8330__$1);
var G__8377 = null;
var G__8378 = 0;
var G__8379 = 0;
seq__8330 = G__8376;
chunk__8331 = G__8377;
count__8332 = G__8378;
i__8333 = G__8379;
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
return (function (p1__8334_SHARP_){return (lt.objs.tabs.__GT_index.call(null,p1__8334_SHARP_) > index);
});})(index))
,new cljs.core.Keyword(null,"objs","objs",1017308622).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,new cljs.core.Keyword("lt.objs.tabs","tabset","lt.objs.tabs/tabset",3378091779).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,active_obj)))));var seq__8335 = cljs.core.seq.call(null,tabs);var chunk__8336 = null;var count__8337 = 0;var i__8338 = 0;while(true){
if((i__8338 < count__8337))
{var x = cljs.core._nth.call(null,chunk__8336,i__8338);lt.object.raise.call(null,x,new cljs.core.Keyword(null,"close","close",1108660586));
{
var G__8380 = seq__8335;
var G__8381 = chunk__8336;
var G__8382 = count__8337;
var G__8383 = (i__8338 + 1);
seq__8335 = G__8380;
chunk__8336 = G__8381;
count__8337 = G__8382;
i__8338 = G__8383;
continue;
}
} else
{var temp__4092__auto__ = cljs.core.seq.call(null,seq__8335);if(temp__4092__auto__)
{var seq__8335__$1 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__8335__$1))
{var c__7112__auto__ = cljs.core.chunk_first.call(null,seq__8335__$1);{
var G__8384 = cljs.core.chunk_rest.call(null,seq__8335__$1);
var G__8385 = c__7112__auto__;
var G__8386 = cljs.core.count.call(null,c__7112__auto__);
var G__8387 = 0;
seq__8335 = G__8384;
chunk__8336 = G__8385;
count__8337 = G__8386;
i__8338 = G__8387;
continue;
}
} else
{var x = cljs.core.first.call(null,seq__8335__$1);lt.object.raise.call(null,x,new cljs.core.Keyword(null,"close","close",1108660586));
{
var G__8388 = cljs.core.next.call(null,seq__8335__$1);
var G__8389 = null;
var G__8390 = 0;
var G__8391 = 0;
seq__8335 = G__8388;
chunk__8336 = G__8389;
count__8337 = G__8390;
i__8338 = G__8391;
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
lt.objs.command.command.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"command","command",1964298941),new cljs.core.Keyword(null,"tabset.close-all-but-active","tabset.close-all-but-active",3205009926),new cljs.core.Keyword(null,"desc","desc",1016984067),"Tabset: Close all tabs/tabsets except active",new cljs.core.Keyword(null,"exec","exec",1017031683),(function (){var tabs = lt.object.by_tag.call(null,new cljs.core.Keyword(null,"tabset.tab","tabset.tab",1444337222));var tabsets = lt.object.by_tag.call(null,new cljs.core.Keyword(null,"tabset","tabset",4427500575));var active_tabset = lt.objs.context.__GT_obj.call(null,new cljs.core.Keyword(null,"tabset","tabset",4427500575));var active_tab = new cljs.core.Keyword(null,"active-obj","active-obj",3056705826).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,active_tabset));var seq__8339_8392 = cljs.core.seq.call(null,cljs.core.filter.call(null,cljs.core.comp.call(null,cljs.core.not,cljs.core.PersistentHashSet.fromArray([active_tab], true)),tabs));var chunk__8340_8393 = null;var count__8341_8394 = 0;var i__8342_8395 = 0;while(true){
if((i__8342_8395 < count__8341_8394))
{var x_8396 = cljs.core._nth.call(null,chunk__8340_8393,i__8342_8395);lt.object.raise.call(null,x_8396,new cljs.core.Keyword(null,"close","close",1108660586));
{
var G__8397 = seq__8339_8392;
var G__8398 = chunk__8340_8393;
var G__8399 = count__8341_8394;
var G__8400 = (i__8342_8395 + 1);
seq__8339_8392 = G__8397;
chunk__8340_8393 = G__8398;
count__8341_8394 = G__8399;
i__8342_8395 = G__8400;
continue;
}
} else
{var temp__4092__auto___8401 = cljs.core.seq.call(null,seq__8339_8392);if(temp__4092__auto___8401)
{var seq__8339_8402__$1 = temp__4092__auto___8401;if(cljs.core.chunked_seq_QMARK_.call(null,seq__8339_8402__$1))
{var c__7112__auto___8403 = cljs.core.chunk_first.call(null,seq__8339_8402__$1);{
var G__8404 = cljs.core.chunk_rest.call(null,seq__8339_8402__$1);
var G__8405 = c__7112__auto___8403;
var G__8406 = cljs.core.count.call(null,c__7112__auto___8403);
var G__8407 = 0;
seq__8339_8392 = G__8404;
chunk__8340_8393 = G__8405;
count__8341_8394 = G__8406;
i__8342_8395 = G__8407;
continue;
}
} else
{var x_8408 = cljs.core.first.call(null,seq__8339_8402__$1);lt.object.raise.call(null,x_8408,new cljs.core.Keyword(null,"close","close",1108660586));
{
var G__8409 = cljs.core.next.call(null,seq__8339_8402__$1);
var G__8410 = null;
var G__8411 = 0;
var G__8412 = 0;
seq__8339_8392 = G__8409;
chunk__8340_8393 = G__8410;
count__8341_8394 = G__8411;
i__8342_8395 = G__8412;
continue;
}
}
} else
{}
}
break;
}
var seq__8343 = cljs.core.seq.call(null,cljs.core.filter.call(null,cljs.core.comp.call(null,cljs.core.not,cljs.core.PersistentHashSet.fromArray([active_tabset], true)),tabsets));var chunk__8344 = null;var count__8345 = 0;var i__8346 = 0;while(true){
if((i__8346 < count__8345))
{var x = cljs.core._nth.call(null,chunk__8344,i__8346);lt.objs.tabs.rem_tabset.call(null,x);
{
var G__8413 = seq__8343;
var G__8414 = chunk__8344;
var G__8415 = count__8345;
var G__8416 = (i__8346 + 1);
seq__8343 = G__8413;
chunk__8344 = G__8414;
count__8345 = G__8415;
i__8346 = G__8416;
continue;
}
} else
{var temp__4092__auto__ = cljs.core.seq.call(null,seq__8343);if(temp__4092__auto__)
{var seq__8343__$1 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__8343__$1))
{var c__7112__auto__ = cljs.core.chunk_first.call(null,seq__8343__$1);{
var G__8417 = cljs.core.chunk_rest.call(null,seq__8343__$1);
var G__8418 = c__7112__auto__;
var G__8419 = cljs.core.count.call(null,c__7112__auto__);
var G__8420 = 0;
seq__8343 = G__8417;
chunk__8344 = G__8418;
count__8345 = G__8419;
i__8346 = G__8420;
continue;
}
} else
{var x = cljs.core.first.call(null,seq__8343__$1);lt.objs.tabs.rem_tabset.call(null,x);
{
var G__8421 = cljs.core.next.call(null,seq__8343__$1);
var G__8422 = null;
var G__8423 = 0;
var G__8424 = 0;
seq__8343 = G__8421;
chunk__8344 = G__8422;
count__8345 = G__8423;
i__8346 = G__8424;
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