(window.webpackJsonp=window.webpackJsonp||[]).push([[54],{"2wZp":function(t,e,n){"use strict";var i=n("Mlra");n.n(i).a},"6Rdq":function(t,e,n){"use strict";var i=n("9Q3x"),r=n("yMep"),o=n("c4kp"),s=n("2QtR"),a=n("L2JU"),c=n("xCqy");function l(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);e&&(i=i.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,i)}return n}function p(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}var d={name:"FilesView",components:{DesktopSortingAndPreview:i.a,DesktopToolbar:r.a,FileBrowser:o.a,ContextMenu:s.a},computed:function(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?l(Object(n),!0).forEach((function(e){p(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}({},Object(a.b)(["config"])),methods:{contextMenu:function(t,e){c.a.$emit("contextMenu:show",t,e)}}},u=(n("2wZp"),n("KHd+")),f=Object(u.a)(d,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"files-view"},on:{"!contextmenu":function(e){return e.preventDefault(),t.contextMenu(e,void 0)}}},[n("ContextMenu"),t._v(" "),n("DesktopSortingAndPreview"),t._v(" "),n("DesktopToolbar"),t._v(" "),n("FileBrowser")],1)}),[],!1,null,null,null);e.a=f.exports},CoTS:function(t,e,n){"use strict";n.r(e);var i=n("6Rdq"),r=n("LtV2"),o=n("hXay"),s=n("CjXH"),a={name:"FilesView",components:{ContentFileView:i.a,ContentSidebar:r.a,ContentGroup:o.a,LinkIcon:s.H,UsersIcon:s.hb},methods:{getShared:function(){this.$store.dispatch("getShared",[{back:!1,init:!1}])},getParticipantUploads:function(){this.$store.dispatch("getParticipantUploads")}},mounted:function(){this.getShared()}},c=n("KHd+"),l=Object(c.a)(a,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("section",{attrs:{id:"viewport"}},[n("ContentSidebar",[n("ContentGroup",{attrs:{title:t.$t("sidebar.locations_title")}},[n("div",{staticClass:"menu-list-wrapper vertical"},[n("li",{staticClass:"menu-list-item link",class:{"is-active":t.$isThisLocation(["shared"])},on:{click:t.getShared}},[n("div",{staticClass:"icon text-theme"},[n("link-icon",{attrs:{size:"17"}})],1),t._v(" "),n("div",{staticClass:"label text-theme"},[t._v("\n                        "+t._s(t.$t("sidebar.my_shared"))+"\n                    ")])]),t._v(" "),n("li",{staticClass:"menu-list-item link",class:{"is-active":t.$isThisLocation(["participant_uploads"])},on:{click:t.getParticipantUploads}},[n("div",{staticClass:"icon text-theme"},[n("users-icon",{attrs:{size:"17"}})],1),t._v(" "),n("div",{staticClass:"label text-theme"},[t._v("\n                        "+t._s(t.$t("sidebar.participant_uploads"))+"\n                    ")])])])])],1),t._v(" "),n("ContentFileView")],1)}),[],!1,null,"4b1985f4",null);e.default=l.exports},Mlra:function(t,e,n){var i=n("Q8SN");"string"==typeof i&&(i=[[t.i,i,""]]);var r={hmr:!0,transform:void 0,insertInto:void 0};n("aET+")(i,r);i.locals&&(t.exports=i.locals)},Q8SN:function(t,e,n){(t.exports=n("I1BE")(!1)).push([t.i,"#files-view {\n  font-family: 'Nunito', sans-serif;\n  font-size: 16px;\n  width: 100%;\n  height: 100%;\n  position: relative;\n  min-width: 320px;\n  overflow-x: hidden;\n  padding-left: 15px;\n  padding-right: 15px;\n  overflow-y: hidden;\n}\n@media only screen and (max-width: 690px) {\n#files-view {\n    padding-left: 0;\n    padding-right: 0;\n}\n}\n",""])}}]);