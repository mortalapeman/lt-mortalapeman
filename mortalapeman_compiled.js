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
lt.plugins.mortalapeman.__BEH__sidebar_menu_items = (function __BEH__sidebar_menu_items(this$,items){return cljs.core.conj.call(null,items,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"label","label",1116631654),"Create new workspace",new cljs.core.Keyword(null,"click","click",1108654330),(function (){return lt.objs.command.exec_BANG_.call(null,new cljs.core.Keyword(null,"workspace.new","workspace.new",2700812345));
})], null));
});
lt.object.behavior_STAR_.call(null,new cljs.core.Keyword("lt.plugins.mortalapeman","sidebar-menu-items","lt.plugins.mortalapeman/sidebar-menu-items",3624932563),new cljs.core.Keyword(null,"reaction","reaction",4441361819),lt.plugins.mortalapeman.__BEH__sidebar_menu_items,new cljs.core.Keyword(null,"triggers","triggers",2516997421),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"menu-items","menu-items",3782623556),null], null), null));
lt.plugins.mortalapeman.open_gnome_terminal = (function open_gnome_terminal(path){var cp = require("child_process");return cp.spawn("gnome-terminal",[[cljs.core.str("--working-directory="),cljs.core.str(path)].join('')]);
});
lt.plugins.mortalapeman.__BEH__subfolder_menu = (function __BEH__subfolder_menu(this$,items){return cljs.core.conj.call(null,items,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"label","label",1116631654),"Open Terminal Here",new cljs.core.Keyword(null,"order","order",1119910592),7,new cljs.core.Keyword(null,"click","click",1108654330),(function (){var pred__8824 = cljs.core._EQ_;var expr__8825 = process.platform;if(cljs.core.truth_(pred__8824.call(null,"linux",expr__8825)))
{return lt.plugins.mortalapeman.open_gnome_terminal.call(null,new cljs.core.Keyword(null,"path","path",1017337751).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,this$)));
} else
{throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(expr__8825)].join('')));
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
lt.objs.command.command.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"command","command",1964298941),new cljs.core.Keyword(null,"tabset.close-other-tabs","tabset.close-other-tabs",3361386915),new cljs.core.Keyword(null,"desc","desc",1016984067),"Tabset: Close other tabs and tabsets",new cljs.core.Keyword(null,"hidden","hidden",4091384092),true,new cljs.core.Keyword(null,"exec","exec",1017031683),(function (active_obj){var tabs = lt.object.by_tag.call(null,new cljs.core.Keyword(null,"tabset.tab","tabset.tab",1444337222));var tabsets = lt.object.by_tag.call(null,new cljs.core.Keyword(null,"tabset","tabset",4427500575));var seq__8827_8848 = cljs.core.seq.call(null,cljs.core.filter.call(null,cljs.core.comp.call(null,cljs.core.not,cljs.core.PersistentHashSet.fromArray([active_obj], true)),tabs));var chunk__8828_8849 = null;var count__8829_8850 = 0;var i__8830_8851 = 0;while(true){
if((i__8830_8851 < count__8829_8850))
{var x_8852 = cljs.core._nth.call(null,chunk__8828_8849,i__8830_8851);lt.object.raise.call(null,x_8852,new cljs.core.Keyword(null,"close","close",1108660586));
{
var G__8853 = seq__8827_8848;
var G__8854 = chunk__8828_8849;
var G__8855 = count__8829_8850;
var G__8856 = (i__8830_8851 + 1);
seq__8827_8848 = G__8853;
chunk__8828_8849 = G__8854;
count__8829_8850 = G__8855;
i__8830_8851 = G__8856;
continue;
}
} else
{var temp__4092__auto___8857 = cljs.core.seq.call(null,seq__8827_8848);if(temp__4092__auto___8857)
{var seq__8827_8858__$1 = temp__4092__auto___8857;if(cljs.core.chunked_seq_QMARK_.call(null,seq__8827_8858__$1))
{var c__7112__auto___8859 = cljs.core.chunk_first.call(null,seq__8827_8858__$1);{
var G__8860 = cljs.core.chunk_rest.call(null,seq__8827_8858__$1);
var G__8861 = c__7112__auto___8859;
var G__8862 = cljs.core.count.call(null,c__7112__auto___8859);
var G__8863 = 0;
seq__8827_8848 = G__8860;
chunk__8828_8849 = G__8861;
count__8829_8850 = G__8862;
i__8830_8851 = G__8863;
continue;
}
} else
{var x_8864 = cljs.core.first.call(null,seq__8827_8858__$1);lt.object.raise.call(null,x_8864,new cljs.core.Keyword(null,"close","close",1108660586));
{
var G__8865 = cljs.core.next.call(null,seq__8827_8858__$1);
var G__8866 = null;
var G__8867 = 0;
var G__8868 = 0;
seq__8827_8848 = G__8865;
chunk__8828_8849 = G__8866;
count__8829_8850 = G__8867;
i__8830_8851 = G__8868;
continue;
}
}
} else
{}
}
break;
}
var seq__8831 = cljs.core.seq.call(null,cljs.core.filter.call(null,cljs.core.comp.call(null,cljs.core.not,cljs.core.PersistentHashSet.fromArray([new cljs.core.Keyword("lt.objs.tabs","tabset","lt.objs.tabs/tabset",3378091779).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,active_obj))], true)),tabsets));var chunk__8832 = null;var count__8833 = 0;var i__8834 = 0;while(true){
if((i__8834 < count__8833))
{var x = cljs.core._nth.call(null,chunk__8832,i__8834);lt.objs.tabs.rem_tabset.call(null,x);
{
var G__8869 = seq__8831;
var G__8870 = chunk__8832;
var G__8871 = count__8833;
var G__8872 = (i__8834 + 1);
seq__8831 = G__8869;
chunk__8832 = G__8870;
count__8833 = G__8871;
i__8834 = G__8872;
continue;
}
} else
{var temp__4092__auto__ = cljs.core.seq.call(null,seq__8831);if(temp__4092__auto__)
{var seq__8831__$1 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__8831__$1))
{var c__7112__auto__ = cljs.core.chunk_first.call(null,seq__8831__$1);{
var G__8873 = cljs.core.chunk_rest.call(null,seq__8831__$1);
var G__8874 = c__7112__auto__;
var G__8875 = cljs.core.count.call(null,c__7112__auto__);
var G__8876 = 0;
seq__8831 = G__8873;
chunk__8832 = G__8874;
count__8833 = G__8875;
i__8834 = G__8876;
continue;
}
} else
{var x = cljs.core.first.call(null,seq__8831__$1);lt.objs.tabs.rem_tabset.call(null,x);
{
var G__8877 = cljs.core.next.call(null,seq__8831__$1);
var G__8878 = null;
var G__8879 = 0;
var G__8880 = 0;
seq__8831 = G__8877;
chunk__8832 = G__8878;
count__8833 = G__8879;
i__8834 = G__8880;
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
return (function (p1__8835_SHARP_){return (lt.objs.tabs.__GT_index.call(null,p1__8835_SHARP_) > index);
});})(index))
,new cljs.core.Keyword(null,"objs","objs",1017308622).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,new cljs.core.Keyword("lt.objs.tabs","tabset","lt.objs.tabs/tabset",3378091779).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,active_obj)))));var seq__8836 = cljs.core.seq.call(null,tabs);var chunk__8837 = null;var count__8838 = 0;var i__8839 = 0;while(true){
if((i__8839 < count__8838))
{var x = cljs.core._nth.call(null,chunk__8837,i__8839);lt.object.raise.call(null,x,new cljs.core.Keyword(null,"close","close",1108660586));
{
var G__8881 = seq__8836;
var G__8882 = chunk__8837;
var G__8883 = count__8838;
var G__8884 = (i__8839 + 1);
seq__8836 = G__8881;
chunk__8837 = G__8882;
count__8838 = G__8883;
i__8839 = G__8884;
continue;
}
} else
{var temp__4092__auto__ = cljs.core.seq.call(null,seq__8836);if(temp__4092__auto__)
{var seq__8836__$1 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__8836__$1))
{var c__7112__auto__ = cljs.core.chunk_first.call(null,seq__8836__$1);{
var G__8885 = cljs.core.chunk_rest.call(null,seq__8836__$1);
var G__8886 = c__7112__auto__;
var G__8887 = cljs.core.count.call(null,c__7112__auto__);
var G__8888 = 0;
seq__8836 = G__8885;
chunk__8837 = G__8886;
count__8838 = G__8887;
i__8839 = G__8888;
continue;
}
} else
{var x = cljs.core.first.call(null,seq__8836__$1);lt.object.raise.call(null,x,new cljs.core.Keyword(null,"close","close",1108660586));
{
var G__8889 = cljs.core.next.call(null,seq__8836__$1);
var G__8890 = null;
var G__8891 = 0;
var G__8892 = 0;
seq__8836 = G__8889;
chunk__8837 = G__8890;
count__8838 = G__8891;
i__8839 = G__8892;
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
lt.objs.command.command.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"command","command",1964298941),new cljs.core.Keyword(null,"tabset.close-all-but-active","tabset.close-all-but-active",3205009926),new cljs.core.Keyword(null,"desc","desc",1016984067),"Tabset: Close all tabs/tabsets except active",new cljs.core.Keyword(null,"exec","exec",1017031683),(function (){var tabs = lt.object.by_tag.call(null,new cljs.core.Keyword(null,"tabset.tab","tabset.tab",1444337222));var tabsets = lt.object.by_tag.call(null,new cljs.core.Keyword(null,"tabset","tabset",4427500575));var active_tabset = lt.objs.context.__GT_obj.call(null,new cljs.core.Keyword(null,"tabset","tabset",4427500575));var active_tab = new cljs.core.Keyword(null,"active-obj","active-obj",3056705826).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,active_tabset));var seq__8840_8893 = cljs.core.seq.call(null,cljs.core.filter.call(null,cljs.core.comp.call(null,cljs.core.not,cljs.core.PersistentHashSet.fromArray([active_tab], true)),tabs));var chunk__8841_8894 = null;var count__8842_8895 = 0;var i__8843_8896 = 0;while(true){
if((i__8843_8896 < count__8842_8895))
{var x_8897 = cljs.core._nth.call(null,chunk__8841_8894,i__8843_8896);lt.object.raise.call(null,x_8897,new cljs.core.Keyword(null,"close","close",1108660586));
{
var G__8898 = seq__8840_8893;
var G__8899 = chunk__8841_8894;
var G__8900 = count__8842_8895;
var G__8901 = (i__8843_8896 + 1);
seq__8840_8893 = G__8898;
chunk__8841_8894 = G__8899;
count__8842_8895 = G__8900;
i__8843_8896 = G__8901;
continue;
}
} else
{var temp__4092__auto___8902 = cljs.core.seq.call(null,seq__8840_8893);if(temp__4092__auto___8902)
{var seq__8840_8903__$1 = temp__4092__auto___8902;if(cljs.core.chunked_seq_QMARK_.call(null,seq__8840_8903__$1))
{var c__7112__auto___8904 = cljs.core.chunk_first.call(null,seq__8840_8903__$1);{
var G__8905 = cljs.core.chunk_rest.call(null,seq__8840_8903__$1);
var G__8906 = c__7112__auto___8904;
var G__8907 = cljs.core.count.call(null,c__7112__auto___8904);
var G__8908 = 0;
seq__8840_8893 = G__8905;
chunk__8841_8894 = G__8906;
count__8842_8895 = G__8907;
i__8843_8896 = G__8908;
continue;
}
} else
{var x_8909 = cljs.core.first.call(null,seq__8840_8903__$1);lt.object.raise.call(null,x_8909,new cljs.core.Keyword(null,"close","close",1108660586));
{
var G__8910 = cljs.core.next.call(null,seq__8840_8903__$1);
var G__8911 = null;
var G__8912 = 0;
var G__8913 = 0;
seq__8840_8893 = G__8910;
chunk__8841_8894 = G__8911;
count__8842_8895 = G__8912;
i__8843_8896 = G__8913;
continue;
}
}
} else
{}
}
break;
}
var seq__8844 = cljs.core.seq.call(null,cljs.core.filter.call(null,cljs.core.comp.call(null,cljs.core.not,cljs.core.PersistentHashSet.fromArray([active_tabset], true)),tabsets));var chunk__8845 = null;var count__8846 = 0;var i__8847 = 0;while(true){
if((i__8847 < count__8846))
{var x = cljs.core._nth.call(null,chunk__8845,i__8847);lt.objs.tabs.rem_tabset.call(null,x);
{
var G__8914 = seq__8844;
var G__8915 = chunk__8845;
var G__8916 = count__8846;
var G__8917 = (i__8847 + 1);
seq__8844 = G__8914;
chunk__8845 = G__8915;
count__8846 = G__8916;
i__8847 = G__8917;
continue;
}
} else
{var temp__4092__auto__ = cljs.core.seq.call(null,seq__8844);if(temp__4092__auto__)
{var seq__8844__$1 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__8844__$1))
{var c__7112__auto__ = cljs.core.chunk_first.call(null,seq__8844__$1);{
var G__8918 = cljs.core.chunk_rest.call(null,seq__8844__$1);
var G__8919 = c__7112__auto__;
var G__8920 = cljs.core.count.call(null,c__7112__auto__);
var G__8921 = 0;
seq__8844 = G__8918;
chunk__8845 = G__8919;
count__8846 = G__8920;
i__8847 = G__8921;
continue;
}
} else
{var x = cljs.core.first.call(null,seq__8844__$1);lt.objs.tabs.rem_tabset.call(null,x);
{
var G__8922 = cljs.core.next.call(null,seq__8844__$1);
var G__8923 = null;
var G__8924 = 0;
var G__8925 = 0;
seq__8844 = G__8922;
chunk__8845 = G__8923;
count__8846 = G__8924;
i__8847 = G__8925;
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