(window.webpackJsonp=window.webpackJsonp||[]).push([[72],{"77bE":function(t,e,i){"use strict";i.r(e);var n=i("FdzE"),o=i("yMep"),r=i("LtV2"),a=i("hXay"),s=i("2QtR"),c=i("c4kp"),l=i("CjXH"),u=i("L2JU"),d=i("xCqy");function p(t,e){var i=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),i.push.apply(i,n)}return i}function h(t){for(var e=1;e<arguments.length;e++){var i=null!=arguments[e]?arguments[e]:{};e%2?p(Object(i),!0).forEach((function(e){v(t,e,i[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(i)):p(Object(i)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(i,e))}))}return t}function v(t,e,i){return e in t?Object.defineProperty(t,e,{value:i,enumerable:!0,configurable:!0,writable:!0}):t[e]=i,t}var f={name:"SharedFileBrowser",components:{TreeMenuNavigator:n.a,ContentSidebar:r.a,DesktopToolbar:o.a,ContentGroup:a.a,ContextMenu:s.a,FileBrowser:c.a,HomeIcon:l.H},computed:h(h({},Object(u.b)(["sharedDetail","navigation","config"])),{},{navigationTree:function(){return this.navigation?this.navigation[0].folders:void 0}}),data:function(){return{homeDirectory:void 0}},methods:{goHome:function(){this.$store.dispatch("browseShared",[{folder:this.homeDirectory,back:!1,init:!0}])},contextMenu:function(t,e){d.a.$emit("contextMenu:show",t,e)},initFileBrowser:function(){this.homeDirectory={id:this.sharedDetail.item_id,name:this.$t("locations.home"),location:"public"},this.$store.dispatch("getFolderTree"),this.goHome()}},created:function(){var t=this;this.sharedDetail?this.initFileBrowser():this.$store.dispatch("getShareDetail",this.$route.params.token).then((function(){t.initFileBrowser()}))}},b=(i("nvG3"),i("KHd+")),g=Object(b.a)(f,(function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{attrs:{id:"viewport"},on:{"!contextmenu":function(e){return e.preventDefault(),t.contextMenu(e,void 0)}}},[t.navigationTree&&t.navigationTree.length>=1?i("ContentSidebar",[i("ContentGroup",{attrs:{title:t.$t("sidebar.locations_title")}},[i("div",{staticClass:"menu-list-wrapper vertical"},[i("a",{staticClass:"menu-list-item link",on:{click:t.goHome}},[i("div",{staticClass:"icon"},[i("home-icon",{attrs:{size:"17"}})],1),t._v(" "),i("div",{staticClass:"label"},[t._v("\n                        "+t._s(t.$t("sidebar.home"))+"\n                    ")])])])]),t._v(" "),i("ContentGroup",{staticClass:"navigator",attrs:{title:t.$t("sidebar.navigator_title")}},t._l(t.navigationTree,(function(t){return i("TreeMenuNavigator",{key:t.id,staticClass:"folder-tree",attrs:{depth:0,nodes:t}})})),1)],1):t._e(),t._v(" "),i("div",{attrs:{id:"files-view"}},[i("ContextMenu"),t._v(" "),i("DesktopToolbar"),t._v(" "),i("FileBrowser")],1)],1)}),[],!1,null,null,null);e.default=g.exports},lEpy:function(t,e,i){var n=i("nKEh");"string"==typeof n&&(n=[[t.i,n,""]]);var o={hmr:!0,transform:void 0,insertInto:void 0};i("aET+")(n,o);n.locals&&(t.exports=n.locals)},nKEh:function(t,e,i){(t.exports=i("I1BE")(!1)).push([t.i,"#files-view{font-family:Nunito,sans-serif;font-size:16px;width:100%;height:100%;position:relative;min-width:320px;overflow-x:hidden;padding-left:15px;padding-right:15px;overflow-y:hidden}",""])},nvG3:function(t,e,i){"use strict";i("lEpy")}}]);