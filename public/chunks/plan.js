(window.webpackJsonp=window.webpackJsonp||[]).push([[53],{"+NaO":function(n,e,t){"use strict";t.r(e);var a=t("CjXH"),i=t("D62o"),s=t("THmQ"),o=t("2Sb1"),r=t("zTYo"),l=t("vDqi"),c=t.n(l),d={name:"Plan",components:{UsersIcon:a.mb,Trash2Icon:a.gb,SettingsIcon:a.bb,SectionTitle:s.a,MobileHeader:i.a,PageHeader:o.a,Spinner:r.a},data:function(){return{isLoading:!0,plan:void 0}},created:function(){var n=this;c.a.get("/api/admin/plans/"+this.$route.params.id).then((function(e){n.plan=e.data.data,n.isLoading=!1}))}},m=(t("2hc5"),t("KHd+")),p=Object(m.a)(d,(function(){var n=this,e=n.$createElement,t=n._self._c||e;return t("div",{attrs:{id:"single-page"}},[n.isLoading?n._e():t("div",{attrs:{id:"page-content"}},[t("MobileHeader",{attrs:{title:n.$t(n.$router.currentRoute.meta.title)}}),n._v(" "),t("PageHeader",{attrs:{"can-back":!0,title:n.$t(n.$router.currentRoute.meta.title)}}),n._v(" "),t("div",{staticClass:"content-page"},[t("div",{staticClass:"menu-list-wrapper horizontal"},[t("router-link",{staticClass:"menu-list-item link link border-bottom-theme",attrs:{replace:"",to:{name:"PlanSettings",params:{id:n.plan.id}}}},[t("div",{staticClass:"icon text-theme"},[t("settings-icon",{attrs:{size:"17"}})],1),n._v(" "),t("div",{staticClass:"label text-theme"},[n._v("\n                        "+n._s(n.$t("admin_page_plans.tabs.settings"))+"\n                    ")])]),n._v(" "),t("router-link",{staticClass:"menu-list-item link link border-bottom-theme",attrs:{replace:"",to:{name:"PlanSubscribers",params:{id:n.plan.id}}}},[t("div",{staticClass:"icon text-theme"},[t("users-icon",{attrs:{size:"17"}})],1),n._v(" "),t("div",{staticClass:"label text-theme"},[n._v("\n                        "+n._s(n.$t("admin_page_plans.tabs.subscribers"))+"\n                    ")])]),n._v(" "),t("router-link",{staticClass:"menu-list-item link link border-bottom-theme",attrs:{replace:"",to:{name:"PlanDelete",params:{id:n.plan.id}}}},[t("div",{staticClass:"icon text-theme"},[t("trash2-icon",{attrs:{size:"17"}})],1),n._v(" "),t("div",{staticClass:"label text-theme"},[n._v("\n                        "+n._s(n.$t("admin_page_plans.tabs.delete"))+"\n                    ")])])],1),n._v(" "),t("router-view",{attrs:{plan:n.plan}})],1)],1),n._v(" "),n.isLoading?t("div",{attrs:{id:"loader"}},[t("Spinner")],1):n._e()])}),[],!1,null,"9ae15358",null);e.default=p.exports},"2Sb1":function(n,e,t){"use strict";var a={name:"PageHeader",props:["title","canBack"],components:{ChevronLeftIcon:t("CjXH").h}},i=(t("JOXf"),t("KHd+")),s=Object(i.a)(a,(function(){var n=this,e=n.$createElement,t=n._self._c||e;return t("div",{staticClass:"page-header"},[n.canBack?t("div",{staticClass:"go-back",on:{click:function(e){return n.$router.back()}}},[t("chevron-left-icon",{attrs:{size:"17"}})],1):n._e(),n._v(" "),t("div",{staticClass:"content"},[t("h1",{staticClass:"title"},[n._v(n._s(n.title))])])])}),[],!1,null,"9fd0a424",null);e.a=s.exports},"2hc5":function(n,e,t){"use strict";var a=t("o/4R");t.n(a).a},"3eeM":function(n,e,t){(n.exports=t("I1BE")(!1)).push([n.i,".page-header[data-v-9fd0a424] {\n  display: flex;\n  align-items: center;\n  background: white;\n  z-index: 9;\n  width: 100%;\n  position: -webkit-sticky;\n  position: sticky;\n  top: 0;\n  padding-top: 20px;\n  padding-bottom: 20px;\n}\n.page-header .title[data-v-9fd0a424] {\n  font-size: 1.125em;\n  font-weight: 700;\n  color: #1B2539;\n}\n.page-header .go-back[data-v-9fd0a424] {\n  margin-right: 10px;\n  cursor: pointer;\n}\n.page-header .go-back svg[data-v-9fd0a424] {\n  vertical-align: middle;\n  margin-top: -4px;\n}\n@media only screen and (max-width: 960px) {\n.page-header .title[data-v-9fd0a424] {\n    font-size: 1.125em;\n}\n}\n@media only screen and (max-width: 690px) {\n.page-header[data-v-9fd0a424] {\n    display: none;\n}\n}\n@media (prefers-color-scheme: dark) {\n.page-header[data-v-9fd0a424] {\n    background: #141414;\n}\n.page-header .title[data-v-9fd0a424] {\n    color: #bec6cf;\n}\n.page-header .icon path[data-v-9fd0a424] {\n    fill: #00BC7E;\n}\n}\n",""])},D62o:function(n,e,t){"use strict";var a=t("xCqy"),i=t("CjXH"),s={name:"MobileHeader",props:["title"],components:{ChevronLeftIcon:i.h,MenuIcon:i.P},methods:{showMobileNavigation:function(){a.a.$emit("mobile-menu:show","user-navigation")},goBack:function(){this.$router.back()}}},o=(t("R6Y3"),t("KHd+")),r=Object(o.a)(s,(function(){var n=this.$createElement,e=this._self._c||n;return e("header",{staticClass:"mobile-header"},[e("div",{staticClass:"go-back",on:{click:this.goBack}},[e("chevron-left-icon",{staticClass:"icon",attrs:{size:"17"}})],1),this._v(" "),e("div",{staticClass:"location-name"},[this._v(this._s(this.title))]),this._v(" "),e("div",{staticClass:"mobile-menu",on:{click:this.showMobileNavigation}},[e("menu-icon",{staticClass:"icon",attrs:{size:"17"}})],1)])}),[],!1,null,"699fe34a",null);e.a=r.exports},GuTZ:function(n,e,t){(n.exports=t("I1BE")(!1)).push([n.i,".user-thumbnail[data-v-9ae15358] {\n  display: flex;\n  align-items: center;\n  cursor: pointer;\n}\n.user-thumbnail .avatar[data-v-9ae15358] {\n  margin-right: 20px;\n}\n.user-thumbnail .avatar img[data-v-9ae15358] {\n  line-height: 0;\n  width: 62px;\n  height: 62px;\n  border-radius: 12px;\n}\n.user-thumbnail .info .name[data-v-9ae15358] {\n  display: block;\n  font-size: 1.0625em;\n  line-height: 1;\n}\n.user-thumbnail .info .email[data-v-9ae15358] {\n  color: rgba(27, 37, 57, 0.7);\n  font-size: 0.875em;\n}\n@media (prefers-color-scheme: dark) {\n.user-thumbnail .info .email[data-v-9ae15358] {\n    color: #7d858c;\n}\n}\n",""])},JOXf:function(n,e,t){"use strict";var a=t("nr4+");t.n(a).a},R6Y3:function(n,e,t){"use strict";var a=t("Xm12");t.n(a).a},THmQ:function(n,e,t){"use strict";var a={name:"SectionTitle"},i=(t("UHE7"),t("KHd+")),s=Object(i.a)(a,(function(){var n=this.$createElement;return(this._self._c||n)("b",{staticClass:"text-label"},[this._t("default")],2)}),[],!1,null,"6d799cf2",null);e.a=s.exports},UHE7:function(n,e,t){"use strict";var a=t("UmJ6");t.n(a).a},UmJ6:function(n,e,t){var a=t("vFyo");"string"==typeof a&&(a=[[n.i,a,""]]);var i={hmr:!0,transform:void 0,insertInto:void 0};t("aET+")(a,i);a.locals&&(n.exports=a.locals)},Xm12:function(n,e,t){var a=t("q8nf");"string"==typeof a&&(a=[[n.i,a,""]]);var i={hmr:!0,transform:void 0,insertInto:void 0};t("aET+")(a,i);a.locals&&(n.exports=a.locals)},"nr4+":function(n,e,t){var a=t("3eeM");"string"==typeof a&&(a=[[n.i,a,""]]);var i={hmr:!0,transform:void 0,insertInto:void 0};t("aET+")(a,i);a.locals&&(n.exports=a.locals)},"o/4R":function(n,e,t){var a=t("GuTZ");"string"==typeof a&&(a=[[n.i,a,""]]);var i={hmr:!0,transform:void 0,insertInto:void 0};t("aET+")(a,i);a.locals&&(n.exports=a.locals)},q8nf:function(n,e,t){(n.exports=t("I1BE")(!1)).push([n.i,".mobile-header[data-v-699fe34a] {\n  padding: 10px 0;\n  text-align: center;\n  background: white;\n  position: -webkit-sticky;\n  position: sticky;\n  display: none;\n  z-index: 6;\n  top: 0;\n}\n.mobile-header > div[data-v-699fe34a] {\n  flex-grow: 1;\n  align-self: center;\n  white-space: nowrap;\n}\n.mobile-header .go-back[data-v-699fe34a] {\n  text-align: left;\n}\n.mobile-header .location-name[data-v-699fe34a] {\n  line-height: 1;\n  text-align: center;\n  width: 100%;\n  vertical-align: middle;\n  font-size: 0.9375em;\n  color: #1B2539;\n  font-weight: 700;\n  max-width: 220px;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  display: inline-block;\n}\n.mobile-header .mobile-menu[data-v-699fe34a] {\n  text-align: right;\n}\n.mobile-header .icon[data-v-699fe34a] {\n  vertical-align: middle;\n  margin-top: -4px;\n}\n@media only screen and (max-width: 690px) {\n.mobile-header[data-v-699fe34a] {\n    display: flex;\n    margin-bottom: 15px;\n}\n}\n@media (prefers-color-scheme: dark) {\n.mobile-header[data-v-699fe34a] {\n    background: #141414;\n}\n.mobile-header .location-name[data-v-699fe34a] {\n    color: #bec6cf;\n}\n}\n",""])},vFyo:function(n,e,t){(n.exports=t("I1BE")(!1)).push([n.i,".text-label[data-v-6d799cf2] {\n  font-size: 0.75em;\n  color: #AFAFAF;\n  font-weight: 700;\n  display: block;\n  margin-bottom: 20px;\n}\n@media (prefers-color-scheme: dark) {\n.text-label[data-v-6d799cf2] {\n    color: #00BC7E;\n}\n}\n",""])}}]);