if(!lt.util.load.provided_QMARK_('lt.plugins.mortalapeman')) {
goog.provide('lt.plugins.mortalapeman');
goog.require('cljs.core');
goog.require('crate.binding');
goog.require('lt.objs.context');
goog.require('lt.objs.tabs');
goog.require('lt.objs.clients.local');
goog.require('lt.objs.context');
goog.require('lt.objs.command');
goog.require('crate.binding');
goog.require('lt.object');
goog.require('lt.object');
goog.require('lt.objs.clients.local');
goog.require('lt.objs.tabs');
goog.require('lt.objs.command');
lt.plugins.mortalapeman.__BEH__dev_playground__DOT__close = (function __BEH__dev_playground__DOT__close(this$){return lt.objs.tabs.rem_BANG_.call(null,this$);
});
lt.object.behavior_STAR_.call(null,new cljs.core.Keyword("lt.plugins.mortalapeman","dev-playground.close","lt.plugins.mortalapeman/dev-playground.close",3598329001),new cljs.core.Keyword(null,"reaction","reaction",4441361819),lt.plugins.mortalapeman.__BEH__dev_playground__DOT__close,new cljs.core.Keyword(null,"triggers","triggers",2516997421),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"close","close",1108660586),null], null), null));
lt.plugins.mortalapeman.__BEH__dev_playground__DOT__set_BANG_ = (function __BEH__dev_playground__DOT__set_BANG_(this$,obj){return lt.object.merge_BANG_.call(null,this$,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"obj","obj",1014014057),obj], null));
});
lt.object.behavior_STAR_.call(null,new cljs.core.Keyword("lt.plugins.mortalapeman","dev-playground.set!","lt.plugins.mortalapeman/dev-playground.set!",4314120332),new cljs.core.Keyword(null,"reaction","reaction",4441361819),lt.plugins.mortalapeman.__BEH__dev_playground__DOT__set_BANG_,new cljs.core.Keyword(null,"triggers","triggers",2516997421),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"set!","set!",1017430897),null], null), null));
lt.plugins.mortalapeman.__BEH__dev_playground__DOT__open = (function __BEH__dev_playground__DOT__open(this$){return lt.objs.tabs.add_or_focus_BANG_.call(null,this$);
});
lt.object.behavior_STAR_.call(null,new cljs.core.Keyword("lt.plugins.mortalapeman","dev-playground.open","lt.plugins.mortalapeman/dev-playground.open",4314228945),new cljs.core.Keyword(null,"reaction","reaction",4441361819),lt.plugins.mortalapeman.__BEH__dev_playground__DOT__open,new cljs.core.Keyword(null,"triggers","triggers",2516997421),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"open","open",1017321916),null], null), null));
lt.object.object_STAR_.call(null,new cljs.core.Keyword("lt.plugins.mortalapeman","dev-playground","lt.plugins.mortalapeman/dev-playground",1679764579),new cljs.core.Keyword(null,"behaviors","behaviors",607554515),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("lt.plugins.mortalapeman","dev-playground.close","lt.plugins.mortalapeman/dev-playground.close",3598329001),new cljs.core.Keyword("lt.plugins.mortalapeman","dev-playground.open","lt.plugins.mortalapeman/dev-playground.open",4314228945),new cljs.core.Keyword("lt.plugins.mortalapeman","dev-playground.set!","lt.plugins.mortalapeman/dev-playground.set!",4314120332)], null),new cljs.core.Keyword(null,"obj","obj",1014014057),null,new cljs.core.Keyword(null,"name","name",1017277949),"Dev playground",new cljs.core.Keyword(null,"init","init",1017141378),(function (this$){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.dev-playground","div.dev-playground",3331119330),crate.binding.bound.call(null,this$,(function (){return cljs.core.fnil.call(null,new cljs.core.Keyword(null,"obj","obj",1014014057).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,this$)),lt.plugins.mortalapeman.object__GT_content,null);
}))], null);
}));
lt.plugins.mortalapeman.dev_playground = lt.object.create.call(null,new cljs.core.Keyword("lt.plugins.mortalapeman","dev-playground","lt.plugins.mortalapeman/dev-playground",1679764579));
lt.objs.command.command.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"command","command",1964298941),new cljs.core.Keyword(null,"dev-playground.set!","dev-playground.set!",1850074636),new cljs.core.Keyword(null,"hidden","hidden",4091384092),true,new cljs.core.Keyword(null,"desc","desc",1016984067),"Sets the current object for display",new cljs.core.Keyword(null,"exec","exec",1017031683),(function (obj){lt.object.raise.call(null,lt.plugins.mortalapeman.dev_playground,new cljs.core.Keyword(null,"set!","set!",1017430897),obj);
return lt.object.raise.call(null,lt.plugins.mortalapeman.dev_playground,new cljs.core.Keyword(null,"open","open",1017321916));
})], null));
lt.plugins.mortalapeman.__BEH__sidebar_menu_items = (function __BEH__sidebar_menu_items(this$,items){return cljs.core.conj.call(null,items,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"label","label",1116631654),"Create new workspace",new cljs.core.Keyword(null,"click","click",1108654330),(function (){return lt.objs.command.exec_BANG_.call(null,new cljs.core.Keyword(null,"workspace.new","workspace.new",2700812345));
})], null));
});
lt.object.behavior_STAR_.call(null,new cljs.core.Keyword("lt.plugins.mortalapeman","sidebar-menu-items","lt.plugins.mortalapeman/sidebar-menu-items",3624932563),new cljs.core.Keyword(null,"reaction","reaction",4441361819),lt.plugins.mortalapeman.__BEH__sidebar_menu_items,new cljs.core.Keyword(null,"triggers","triggers",2516997421),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"menu-items","menu-items",3782623556),null], null), null));
lt.plugins.mortalapeman.open_gnome_terminal = (function open_gnome_terminal(path){var cp = require("child_process");return cp.spawn("gnome-terminal",[[cljs.core.str("--working-directory="),cljs.core.str(path)].join('')]);
});
lt.plugins.mortalapeman.__BEH__subfolder_menu = (function __BEH__subfolder_menu(this$,items){return cljs.core.conj.call(null,items,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"label","label",1116631654),"Open Terminal Here",new cljs.core.Keyword(null,"order","order",1119910592),7,new cljs.core.Keyword(null,"click","click",1108654330),(function (){var pred__8719 = cljs.core._EQ_;var expr__8720 = process.platform;if(cljs.core.truth_(pred__8719.call(null,"linux",expr__8720)))
{return lt.plugins.mortalapeman.open_gnome_terminal.call(null,new cljs.core.Keyword(null,"path","path",1017337751).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,this$)));
} else
{throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(expr__8720)].join('')));
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
lt.objs.command.command.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"command","command",1964298941),new cljs.core.Keyword(null,"tabset.close-other-tabs","tabset.close-other-tabs",3361386915),new cljs.core.Keyword(null,"desc","desc",1016984067),"Tabset: Close other tabs and tabsets",new cljs.core.Keyword(null,"hidden","hidden",4091384092),true,new cljs.core.Keyword(null,"exec","exec",1017031683),(function (active_obj){var tabs = lt.object.by_tag.call(null,new cljs.core.Keyword(null,"tabset.tab","tabset.tab",1444337222));var tabsets = lt.object.by_tag.call(null,new cljs.core.Keyword(null,"tabset","tabset",4427500575));var seq__8722_8743 = cljs.core.seq.call(null,cljs.core.filter.call(null,cljs.core.comp.call(null,cljs.core.not,cljs.core.PersistentHashSet.fromArray([active_obj], true)),tabs));var chunk__8723_8744 = null;var count__8724_8745 = 0;var i__8725_8746 = 0;while(true){
if((i__8725_8746 < count__8724_8745))
{var x_8747 = cljs.core._nth.call(null,chunk__8723_8744,i__8725_8746);lt.object.raise.call(null,x_8747,new cljs.core.Keyword(null,"close","close",1108660586));
{
var G__8748 = seq__8722_8743;
var G__8749 = chunk__8723_8744;
var G__8750 = count__8724_8745;
var G__8751 = (i__8725_8746 + 1);
seq__8722_8743 = G__8748;
chunk__8723_8744 = G__8749;
count__8724_8745 = G__8750;
i__8725_8746 = G__8751;
continue;
}
} else
{var temp__4092__auto___8752 = cljs.core.seq.call(null,seq__8722_8743);if(temp__4092__auto___8752)
{var seq__8722_8753__$1 = temp__4092__auto___8752;if(cljs.core.chunked_seq_QMARK_.call(null,seq__8722_8753__$1))
{var c__7112__auto___8754 = cljs.core.chunk_first.call(null,seq__8722_8753__$1);{
var G__8755 = cljs.core.chunk_rest.call(null,seq__8722_8753__$1);
var G__8756 = c__7112__auto___8754;
var G__8757 = cljs.core.count.call(null,c__7112__auto___8754);
var G__8758 = 0;
seq__8722_8743 = G__8755;
chunk__8723_8744 = G__8756;
count__8724_8745 = G__8757;
i__8725_8746 = G__8758;
continue;
}
} else
{var x_8759 = cljs.core.first.call(null,seq__8722_8753__$1);lt.object.raise.call(null,x_8759,new cljs.core.Keyword(null,"close","close",1108660586));
{
var G__8760 = cljs.core.next.call(null,seq__8722_8753__$1);
var G__8761 = null;
var G__8762 = 0;
var G__8763 = 0;
seq__8722_8743 = G__8760;
chunk__8723_8744 = G__8761;
count__8724_8745 = G__8762;
i__8725_8746 = G__8763;
continue;
}
}
} else
{}
}
break;
}
var seq__8726 = cljs.core.seq.call(null,cljs.core.filter.call(null,cljs.core.comp.call(null,cljs.core.not,cljs.core.PersistentHashSet.fromArray([new cljs.core.Keyword("lt.objs.tabs","tabset","lt.objs.tabs/tabset",3378091779).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,active_obj))], true)),tabsets));var chunk__8727 = null;var count__8728 = 0;var i__8729 = 0;while(true){
if((i__8729 < count__8728))
{var x = cljs.core._nth.call(null,chunk__8727,i__8729);lt.objs.tabs.rem_tabset.call(null,x);
{
var G__8764 = seq__8726;
var G__8765 = chunk__8727;
var G__8766 = count__8728;
var G__8767 = (i__8729 + 1);
seq__8726 = G__8764;
chunk__8727 = G__8765;
count__8728 = G__8766;
i__8729 = G__8767;
continue;
}
} else
{var temp__4092__auto__ = cljs.core.seq.call(null,seq__8726);if(temp__4092__auto__)
{var seq__8726__$1 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__8726__$1))
{var c__7112__auto__ = cljs.core.chunk_first.call(null,seq__8726__$1);{
var G__8768 = cljs.core.chunk_rest.call(null,seq__8726__$1);
var G__8769 = c__7112__auto__;
var G__8770 = cljs.core.count.call(null,c__7112__auto__);
var G__8771 = 0;
seq__8726 = G__8768;
chunk__8727 = G__8769;
count__8728 = G__8770;
i__8729 = G__8771;
continue;
}
} else
{var x = cljs.core.first.call(null,seq__8726__$1);lt.objs.tabs.rem_tabset.call(null,x);
{
var G__8772 = cljs.core.next.call(null,seq__8726__$1);
var G__8773 = null;
var G__8774 = 0;
var G__8775 = 0;
seq__8726 = G__8772;
chunk__8727 = G__8773;
count__8728 = G__8774;
i__8729 = G__8775;
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
return (function (p1__8730_SHARP_){return (lt.objs.tabs.__GT_index.call(null,p1__8730_SHARP_) > index);
});})(index))
,new cljs.core.Keyword(null,"objs","objs",1017308622).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,new cljs.core.Keyword("lt.objs.tabs","tabset","lt.objs.tabs/tabset",3378091779).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,active_obj)))));var seq__8731 = cljs.core.seq.call(null,tabs);var chunk__8732 = null;var count__8733 = 0;var i__8734 = 0;while(true){
if((i__8734 < count__8733))
{var x = cljs.core._nth.call(null,chunk__8732,i__8734);lt.object.raise.call(null,x,new cljs.core.Keyword(null,"close","close",1108660586));
{
var G__8776 = seq__8731;
var G__8777 = chunk__8732;
var G__8778 = count__8733;
var G__8779 = (i__8734 + 1);
seq__8731 = G__8776;
chunk__8732 = G__8777;
count__8733 = G__8778;
i__8734 = G__8779;
continue;
}
} else
{var temp__4092__auto__ = cljs.core.seq.call(null,seq__8731);if(temp__4092__auto__)
{var seq__8731__$1 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__8731__$1))
{var c__7112__auto__ = cljs.core.chunk_first.call(null,seq__8731__$1);{
var G__8780 = cljs.core.chunk_rest.call(null,seq__8731__$1);
var G__8781 = c__7112__auto__;
var G__8782 = cljs.core.count.call(null,c__7112__auto__);
var G__8783 = 0;
seq__8731 = G__8780;
chunk__8732 = G__8781;
count__8733 = G__8782;
i__8734 = G__8783;
continue;
}
} else
{var x = cljs.core.first.call(null,seq__8731__$1);lt.object.raise.call(null,x,new cljs.core.Keyword(null,"close","close",1108660586));
{
var G__8784 = cljs.core.next.call(null,seq__8731__$1);
var G__8785 = null;
var G__8786 = 0;
var G__8787 = 0;
seq__8731 = G__8784;
chunk__8732 = G__8785;
count__8733 = G__8786;
i__8734 = G__8787;
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
lt.objs.command.command.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"command","command",1964298941),new cljs.core.Keyword(null,"tabset.close-all-but-active","tabset.close-all-but-active",3205009926),new cljs.core.Keyword(null,"desc","desc",1016984067),"Tabset: Close all tabs/tabsets except active",new cljs.core.Keyword(null,"exec","exec",1017031683),(function (){var tabs = lt.object.by_tag.call(null,new cljs.core.Keyword(null,"tabset.tab","tabset.tab",1444337222));var tabsets = lt.object.by_tag.call(null,new cljs.core.Keyword(null,"tabset","tabset",4427500575));var active_tabset = lt.objs.context.__GT_obj.call(null,new cljs.core.Keyword(null,"tabset","tabset",4427500575));var active_tab = new cljs.core.Keyword(null,"active-obj","active-obj",3056705826).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,active_tabset));var seq__8735_8788 = cljs.core.seq.call(null,cljs.core.filter.call(null,cljs.core.comp.call(null,cljs.core.not,cljs.core.PersistentHashSet.fromArray([active_tab], true)),tabs));var chunk__8736_8789 = null;var count__8737_8790 = 0;var i__8738_8791 = 0;while(true){
if((i__8738_8791 < count__8737_8790))
{var x_8792 = cljs.core._nth.call(null,chunk__8736_8789,i__8738_8791);lt.object.raise.call(null,x_8792,new cljs.core.Keyword(null,"close","close",1108660586));
{
var G__8793 = seq__8735_8788;
var G__8794 = chunk__8736_8789;
var G__8795 = count__8737_8790;
var G__8796 = (i__8738_8791 + 1);
seq__8735_8788 = G__8793;
chunk__8736_8789 = G__8794;
count__8737_8790 = G__8795;
i__8738_8791 = G__8796;
continue;
}
} else
{var temp__4092__auto___8797 = cljs.core.seq.call(null,seq__8735_8788);if(temp__4092__auto___8797)
{var seq__8735_8798__$1 = temp__4092__auto___8797;if(cljs.core.chunked_seq_QMARK_.call(null,seq__8735_8798__$1))
{var c__7112__auto___8799 = cljs.core.chunk_first.call(null,seq__8735_8798__$1);{
var G__8800 = cljs.core.chunk_rest.call(null,seq__8735_8798__$1);
var G__8801 = c__7112__auto___8799;
var G__8802 = cljs.core.count.call(null,c__7112__auto___8799);
var G__8803 = 0;
seq__8735_8788 = G__8800;
chunk__8736_8789 = G__8801;
count__8737_8790 = G__8802;
i__8738_8791 = G__8803;
continue;
}
} else
{var x_8804 = cljs.core.first.call(null,seq__8735_8798__$1);lt.object.raise.call(null,x_8804,new cljs.core.Keyword(null,"close","close",1108660586));
{
var G__8805 = cljs.core.next.call(null,seq__8735_8798__$1);
var G__8806 = null;
var G__8807 = 0;
var G__8808 = 0;
seq__8735_8788 = G__8805;
chunk__8736_8789 = G__8806;
count__8737_8790 = G__8807;
i__8738_8791 = G__8808;
continue;
}
}
} else
{}
}
break;
}
var seq__8739 = cljs.core.seq.call(null,cljs.core.filter.call(null,cljs.core.comp.call(null,cljs.core.not,cljs.core.PersistentHashSet.fromArray([active_tabset], true)),tabsets));var chunk__8740 = null;var count__8741 = 0;var i__8742 = 0;while(true){
if((i__8742 < count__8741))
{var x = cljs.core._nth.call(null,chunk__8740,i__8742);lt.objs.tabs.rem_tabset.call(null,x);
{
var G__8809 = seq__8739;
var G__8810 = chunk__8740;
var G__8811 = count__8741;
var G__8812 = (i__8742 + 1);
seq__8739 = G__8809;
chunk__8740 = G__8810;
count__8741 = G__8811;
i__8742 = G__8812;
continue;
}
} else
{var temp__4092__auto__ = cljs.core.seq.call(null,seq__8739);if(temp__4092__auto__)
{var seq__8739__$1 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__8739__$1))
{var c__7112__auto__ = cljs.core.chunk_first.call(null,seq__8739__$1);{
var G__8813 = cljs.core.chunk_rest.call(null,seq__8739__$1);
var G__8814 = c__7112__auto__;
var G__8815 = cljs.core.count.call(null,c__7112__auto__);
var G__8816 = 0;
seq__8739 = G__8813;
chunk__8740 = G__8814;
count__8741 = G__8815;
i__8742 = G__8816;
continue;
}
} else
{var x = cljs.core.first.call(null,seq__8739__$1);lt.objs.tabs.rem_tabset.call(null,x);
{
var G__8817 = cljs.core.next.call(null,seq__8739__$1);
var G__8818 = null;
var G__8819 = 0;
var G__8820 = 0;
seq__8739 = G__8817;
chunk__8740 = G__8818;
count__8741 = G__8819;
i__8742 = G__8820;
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