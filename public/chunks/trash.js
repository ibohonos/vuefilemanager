(window.webpackJsonp=window.webpackJsonp||[]).push([[50],{259:function(t,e,n){"use strict";var i=n(70);n.n(i).a},260:function(t,e,n){(t.exports=n(5)(!1)).push([t.i,".content-sidebar[data-v-5101d4ac] {\n  background: rgba(244, 245, 246, 0.6);\n  -webkit-user-select: none;\n     -moz-user-select: none;\n      -ms-user-select: none;\n          user-select: none;\n  padding-top: 25px;\n  overflow-y: auto;\n  flex: 0 0 225px;\n}\n@media only screen and (max-width: 1024px) {\n.content-sidebar[data-v-5101d4ac] {\n    flex: 0 0 205px;\n}\n}\n@media only screen and (max-width: 690px) {\n.content-sidebar[data-v-5101d4ac] {\n    display: none;\n}\n}\n@media (prefers-color-scheme: dark) {\n.content-sidebar[data-v-5101d4ac] {\n    background: rgba(30, 32, 36, 0.2);\n}\n}\n",""])},261:function(t,e,n){"use strict";var i=n(71);n.n(i).a},262:function(t,e,n){(t.exports=n(5)(!1)).push([t.i,".text-label[data-v-4c36e0a9] {\n  padding-left: 25px;\n  font-size: 0.75em;\n  color: #AFAFAF;\n  font-weight: 700;\n  display: block;\n  margin-bottom: 5px;\n}\n@media only screen and (max-width: 1024px) {\n.text-label[data-v-4c36e0a9] {\n    padding-left: 20px;\n}\n}\n@media (prefers-color-scheme: dark) {\n.text-label[data-v-4c36e0a9] {\n    color: #00BC7E;\n}\n}\n",""])},263:function(t,e,n){"use strict";var i=n(72);n.n(i).a},264:function(t,e,n){(t.exports=n(5)(!1)).push([t.i,".content-group[data-v-da1bd2b8] {\n  margin-bottom: 30px;\n}\n",""])},273:function(t,e,n){"use strict";var i=n(77);n.n(i).a},274:function(t,e,n){(t.exports=n(5)(!1)).push([t.i,"#files-view {\n  font-family: 'Nunito', sans-serif;\n  font-size: 16px;\n  width: 100%;\n  height: 100%;\n  position: relative;\n  min-width: 320px;\n  overflow-x: hidden;\n  padding-left: 15px;\n  padding-right: 15px;\n  overflow-y: hidden;\n}\n@media only screen and (max-width: 690px) {\n#files-view {\n    padding-left: 0;\n    padding-right: 0;\n}\n}\n",""])},34:function(t,e,n){"use strict";var i={name:"TextLabel"},r=(n(261),n(0)),o={name:"ContentGroup",props:["title"],components:{TextLabel:Object(r.a)(i,(function(){var t=this.$createElement;return(this._self._c||t)("b",{staticClass:"text-label"},[this._t("default")],2)}),[],!1,null,"4c36e0a9",null).exports}},a=(n(263),Object(r.a)(o,(function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"content-group"},[e("TextLabel",[this._v(this._s(this.title))]),this._v(" "),this._t("default")],2)}),[],!1,null,"da1bd2b8",null));e.a=a.exports},36:function(t,e,n){"use strict";var i={name:"ContentSidebar"},r=(n(259),n(0)),o=Object(r.a)(i,(function(){var t=this.$createElement;return(this._self._c||t)("section",{staticClass:"content-sidebar"},[this._t("default")],2)}),[],!1,null,"5101d4ac",null);e.a=o.exports},49:function(t,e,n){"use strict";var i=n(171),r=n(170),o=n(172),a=n(7),s=n(3);function c(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);e&&(i=i.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,i)}return n}function l(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}var u={name:"FilesView",components:{DesktopToolbar:i.a,FileBrowser:r.a,ContextMenu:o.a},computed:function(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?c(Object(n),!0).forEach((function(e){l(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):c(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}({},Object(a.b)(["config"])),methods:{fileViewClick:function(){s.a.$emit("contextMenu:hide")},contextMenu:function(t,e){s.a.$emit("contextMenu:show",t,e)}}},d=(n(273),n(0)),p=Object(d.a)(u,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"files-view"},on:{click:t.fileViewClick,"!contextmenu":function(e){return e.preventDefault(),t.contextMenu(e,void 0)}}},[n("ContextMenu"),t._v(" "),n("DesktopToolbar"),t._v(" "),n("FileBrowser")],1)}),[],!1,null,null,null);e.a=p.exports},595:function(t,e,n){"use strict";n.r(e);var i=n(49),r=n(36),o=n(34),a=n(1),s={name:"FilesView",components:{ContentFileView:i.a,ContentSidebar:r.a,ContentGroup:o.a,TrashIcon:a.Q},methods:{emptyTrash:function(){this.$store.dispatch("emptyTrash")}},created:function(){this.$store.dispatch("getTrash")}},c=n(0),l=Object(c.a)(s,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("section",{attrs:{id:"viewport"}},[n("ContentSidebar",[n("ContentGroup",{staticClass:"navigator",attrs:{title:t.$t("sidebar.tools_title")}},[n("div",{staticClass:"menu-list-wrapper vertical"},[n("div",{staticClass:"menu-list-item link",on:{click:function(e){return t.emptyTrash()}}},[n("div",{staticClass:"icon"},[n("trash-icon",{attrs:{size:"17"}})],1),t._v(" "),n("div",{staticClass:"label"},[t._v("\n                        "+t._s(t.$t("context_menu.empty_trash"))+"\n                    ")])])])])],1),t._v(" "),n("ContentFileView")],1)}),[],!1,null,"e9e084de",null);e.default=l.exports},70:function(t,e,n){var i=n(260);"string"==typeof i&&(i=[[t.i,i,""]]);var r={hmr:!0,transform:void 0,insertInto:void 0};n(6)(i,r);i.locals&&(t.exports=i.locals)},71:function(t,e,n){var i=n(262);"string"==typeof i&&(i=[[t.i,i,""]]);var r={hmr:!0,transform:void 0,insertInto:void 0};n(6)(i,r);i.locals&&(t.exports=i.locals)},72:function(t,e,n){var i=n(264);"string"==typeof i&&(i=[[t.i,i,""]]);var r={hmr:!0,transform:void 0,insertInto:void 0};n(6)(i,r);i.locals&&(t.exports=i.locals)},77:function(t,e,n){var i=n(274);"string"==typeof i&&(i=[[t.i,i,""]]);var r={hmr:!0,transform:void 0,insertInto:void 0};n(6)(i,r);i.locals&&(t.exports=i.locals)}}]);