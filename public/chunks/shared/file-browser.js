(window.webpackJsonp=window.webpackJsonp||[]).push([[72],{"77bE":function(t,e,n){"use strict";n.r(e);var i=n("FdzE"),r=n("yMep"),o=n("LtV2"),a=n("hXay"),s=n("2QtR"),c=n("c4kp"),l=n("CjXH"),u=n("L2JU"),d=n("xCqy");function p(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);e&&(i=i.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,i)}return n}function h(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}var v={name:"SharedFileBrowser",components:{TreeMenuNavigator:i.a,ContentSidebar:o.a,DesktopToolbar:r.a,ContentGroup:a.a,ContextMenu:s.a,FileBrowser:c.a,HomeIcon:l.H},computed:function(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?p(Object(n),!0).forEach((function(e){h(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):p(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}({},Object(u.b)(["sharedDetail","navigation","config"]),{navigationTree:function(){return this.navigation?this.navigation[0].folders:void 0}}),data:function(){return{homeDirectory:void 0}},methods:{goHome:function(){this.$store.dispatch("browseShared",[{folder:this.homeDirectory,back:!1,init:!0}])},contextMenu:function(t,e){d.a.$emit("contextMenu:show",t,e)},initFileBrowser:function(){this.homeDirectory={id:this.sharedDetail.item_id,name:this.$t("locations.home"),location:"public"},this.$store.dispatch("getFolderTree"),this.goHome()}},created:function(){var t=this;this.sharedDetail?this.initFileBrowser():this.$store.dispatch("getShareDetail",this.$route.params.token).then((function(){t.initFileBrowser()}))}},f=(n("nvG3"),n("KHd+")),b=Object(f.a)(v,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"viewport"},on:{"!contextmenu":function(e){return e.preventDefault(),t.contextMenu(e,void 0)}}},[t.navigationTree&&t.navigationTree.length>=1?n("ContentSidebar",[n("ContentGroup",{attrs:{title:t.$t("sidebar.locations_title")}},[n("div",{staticClass:"menu-list-wrapper vertical"},[n("a",{staticClass:"menu-list-item link",on:{click:t.goHome}},[n("div",{staticClass:"icon"},[n("home-icon",{attrs:{size:"17"}})],1),t._v(" "),n("div",{staticClass:"label"},[t._v("\n                        "+t._s(t.$t("sidebar.home"))+"\n                    ")])])])]),t._v(" "),n("ContentGroup",{staticClass:"navigator",attrs:{title:t.$t("sidebar.navigator_title")}},t._l(t.navigationTree,(function(t){return n("TreeMenuNavigator",{key:t.id,staticClass:"folder-tree",attrs:{depth:0,nodes:t}})})),1)],1):t._e(),t._v(" "),n("div",{attrs:{id:"files-view"}},[n("ContextMenu"),t._v(" "),n("DesktopToolbar"),t._v(" "),n("FileBrowser")],1)],1)}),[],!1,null,null,null);e.default=b.exports},lEpy:function(t,e,n){var i=n("nKEh");"string"==typeof i&&(i=[[t.i,i,""]]);var r={hmr:!0,transform:void 0,insertInto:void 0};n("aET+")(i,r);i.locals&&(t.exports=i.locals)},nKEh:function(t,e,n){(t.exports=n("I1BE")(!1)).push([t.i,"#files-view {\n  font-family: 'Nunito', sans-serif;\n  font-size: 16px;\n  width: 100%;\n  height: 100%;\n  position: relative;\n  min-width: 320px;\n  overflow-x: hidden;\n  padding-left: 15px;\n  padding-right: 15px;\n  overflow-y: hidden;\n}\n",""])},nvG3:function(t,e,n){"use strict";var i=n("lEpy");n.n(i).a}}]);