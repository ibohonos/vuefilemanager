(window.webpackJsonp=window.webpackJsonp||[]).push([[52],{"0ppm":function(t,n,e){(t.exports=e("I1BE")(!1)).push([t.i,".content-sidebar[data-v-7f84dd9c] {\n  background: rgba(244, 245, 246, 0.6);\n  -webkit-user-select: none;\n     -moz-user-select: none;\n      -ms-user-select: none;\n          user-select: none;\n  padding-top: 25px;\n  overflow-y: auto;\n  flex: 0 0 225px;\n}\n@media only screen and (max-width: 1024px) {\n.content-sidebar[data-v-7f84dd9c] {\n    flex: 0 0 205px;\n}\n}\n@media only screen and (max-width: 690px) {\n.content-sidebar[data-v-7f84dd9c] {\n    display: none;\n}\n}\n@media (prefers-color-scheme: dark) {\n.content-sidebar[data-v-7f84dd9c] {\n    background: rgba(30, 32, 36, 0.2);\n}\n}\n",""])},"0rhn":function(t,n,e){var a=e("MWZw");"string"==typeof a&&(a=[[t.i,a,""]]);var i={hmr:!0,transform:void 0,insertInto:void 0};e("aET+")(a,i);a.locals&&(t.exports=a.locals)},"1pgO":function(t,n,e){"use strict";var a=e("I7+L");e.n(a).a},"2Sb1":function(t,n,e){"use strict";var a={name:"PageHeader",props:["title","canBack"],components:{ChevronLeftIcon:e("CjXH").g}},i=(e("JOXf"),e("KHd+")),r=Object(i.a)(a,(function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",{staticClass:"page-header"},[t.canBack?e("div",{staticClass:"go-back",on:{click:function(n){return t.$router.back()}}},[e("chevron-left-icon",{attrs:{size:"17"}})],1):t._e(),t._v(" "),e("div",{staticClass:"content"},[e("h1",{staticClass:"title"},[t._v(t._s(t.title))])])])}),[],!1,null,"9fd0a424",null);n.a=r.exports},"3YzG":function(t,n,e){(t.exports=e("I1BE")(!1)).push([t.i,".dropzone[data-v-1b35e671] {\n  position: relative;\n  line-height: 0;\n}\n.dropzone input[type='file'][data-v-1b35e671] {\n  opacity: 0;\n  position: absolute;\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  z-index: 2;\n  width: 100%;\n  cursor: pointer;\n}\n.dropzone .image-preview[data-v-1b35e671] {\n  width: 62px;\n  height: 62px;\n  -o-object-fit: cover;\n     object-fit: cover;\n  border-radius: 8px;\n  z-index: 1;\n  position: relative;\n}\n.dropzone .blurred[data-v-1b35e671] {\n  position: absolute;\n  left: 0;\n  top: 2px;\n  z-index: 0;\n  -webkit-filter: blur(8px);\n          filter: blur(8px);\n  opacity: 0.5;\n}\n",""])},"3eeM":function(t,n,e){(t.exports=e("I1BE")(!1)).push([t.i,".page-header[data-v-9fd0a424] {\n  display: flex;\n  align-items: center;\n  background: white;\n  z-index: 9;\n  width: 100%;\n  position: -webkit-sticky;\n  position: sticky;\n  top: 0;\n  padding-top: 20px;\n  padding-bottom: 20px;\n}\n.page-header .title[data-v-9fd0a424] {\n  font-size: 1.125em;\n  font-weight: 700;\n  color: #1B2539;\n}\n.page-header .go-back[data-v-9fd0a424] {\n  margin-right: 10px;\n  cursor: pointer;\n}\n.page-header .go-back svg[data-v-9fd0a424] {\n  vertical-align: middle;\n  margin-top: -4px;\n}\n@media only screen and (max-width: 960px) {\n.page-header .title[data-v-9fd0a424] {\n    font-size: 1.125em;\n}\n}\n@media only screen and (max-width: 690px) {\n.page-header[data-v-9fd0a424] {\n    display: none;\n}\n}\n@media (prefers-color-scheme: dark) {\n.page-header[data-v-9fd0a424] {\n    background: #141414;\n}\n.page-header .title[data-v-9fd0a424] {\n    color: #bec6cf;\n}\n.page-header .icon path[data-v-9fd0a424] {\n    fill: #00BC7E;\n}\n}\n",""])},"9JAZ":function(t,n,e){(t.exports=e("I1BE")(!1)).push([t.i,".text-label[data-v-943e24b4] {\n  padding-left: 25px;\n  font-size: 0.75em;\n  color: #AFAFAF;\n  font-weight: 700;\n  display: block;\n  margin-bottom: 5px;\n}\n@media only screen and (max-width: 1024px) {\n.text-label[data-v-943e24b4] {\n    padding-left: 20px;\n}\n}\n@media (prefers-color-scheme: dark) {\n.text-label[data-v-943e24b4] {\n    opacity: 0.35;\n}\n}\n",""])},GgfX:function(t,n,e){"use strict";e.r(n);var a=e("LtV2"),i=e("hXay"),r=e("Rbea"),o=e("D62o"),s=e("Nv84"),l=e("KnjL"),c=e("2Sb1"),d=e("kPoH"),p=e("zTYo"),u=e("L2JU"),v=e("CjXH");function f(t,n){var e=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(t,n).enumerable}))),e.push.apply(e,a)}return e}function m(t,n,e){return n in t?Object.defineProperty(t,n,{value:e,enumerable:!0,configurable:!0,writable:!0}):t[n]=e,t}var b={name:"Settings",components:{ContentSidebar:a.a,CreditCardIcon:v.n,UserImageInput:r.a,HardDriveIcon:v.B,FileTextIcon:v.w,MobileHeader:o.a,ContentGroup:i.a,ButtonBase:s.a,ColorLabel:d.a,PageHeader:c.a,CloudIcon:v.j,UserIcon:v.eb,LockIcon:v.I,Spinner:p.a,InfoBox:l.a},computed:function(t){for(var n=1;n<arguments.length;n++){var e=null!=arguments[n]?arguments[n]:{};n%2?f(Object(e),!0).forEach((function(n){m(t,n,e[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(e)):f(Object(e)).forEach((function(n){Object.defineProperty(t,n,Object.getOwnPropertyDescriptor(e,n))}))}return t}({},Object(u.b)(["user","config"]),{subscriptionStatus:function(){return this.user.data.attributes.subscription?this.$t("global.premium"):this.$t("global.free")},subscriptionColor:function(){return this.user.data.attributes.subscription?"green":"purple"},canShowSubscriptionSettings:function(){return this.config.isSaaS&&this.config.app_payments_active},canShowUpgradeWarning:function(){return this.config.storageLimit&&this.user.data.attributes.storage.used>95},canShowIncompletePayment:function(){return this.user.data.attributes.incomplete_payment}}),data:function(){return{avatar:void 0,isLoading:!1}}},g=(e("my7I"),e("KHd+")),h=Object(g.a)(b,(function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("section",{attrs:{id:"viewport"}},[e("ContentSidebar",[e("ContentGroup",{staticClass:"navigator",attrs:{title:"Menu"}},[e("div",{staticClass:"menu-list-wrapper vertical"},[e("router-link",{staticClass:"menu-list-item link",attrs:{replace:"",to:{name:"Profile"}}},[e("div",{staticClass:"icon text-theme"},[e("user-icon",{attrs:{size:"17"}})],1),t._v(" "),e("div",{staticClass:"label text-theme"},[t._v("\n                        "+t._s(t.$t("menu.profile"))+"\n                    ")])]),t._v(" "),e("router-link",{staticClass:"menu-list-item link",attrs:{replace:"",to:{name:"Storage"}}},[e("div",{staticClass:"icon text-theme"},[e("hard-drive-icon",{attrs:{size:"17"}})],1),t._v(" "),e("div",{staticClass:"label text-theme"},[t._v("\n                        "+t._s(t.$t("menu.storage"))+"\n                    ")])]),t._v(" "),e("router-link",{staticClass:"menu-list-item link",attrs:{replace:"",to:{name:"Password"}}},[e("div",{staticClass:"icon text-theme"},[e("lock-icon",{attrs:{size:"17"}})],1),t._v(" "),e("div",{staticClass:"label text-theme"},[t._v("\n                        "+t._s(t.$t("menu.password"))+"\n                    ")])])],1)]),t._v(" "),t.canShowSubscriptionSettings?e("ContentGroup",{staticClass:"navigator",attrs:{title:"Subscription"}},[e("div",{staticClass:"menu-list-wrapper vertical"},[e("router-link",{staticClass:"menu-list-item link",attrs:{replace:"",to:{name:"Subscription"}}},[e("div",{staticClass:"icon text-theme"},[e("cloud-icon",{attrs:{size:"17"}})],1),t._v(" "),e("div",{staticClass:"label text-theme"},[t._v("\n                        "+t._s(t.$t("menu.subscription"))+"\n                    ")])]),t._v(" "),e("router-link",{staticClass:"menu-list-item link",attrs:{replace:"",to:{name:"PaymentMethods"}}},[e("div",{staticClass:"icon text-theme"},[e("credit-card-icon",{attrs:{size:"17"}})],1),t._v(" "),e("div",{staticClass:"label text-theme"},[t._v("\n                        "+t._s(t.$t("menu.payment_cards"))+"\n                    ")])]),t._v(" "),e("router-link",{staticClass:"menu-list-item link",attrs:{replace:"",to:{name:"Invoice"}}},[e("div",{staticClass:"icon text-theme"},[e("file-text-icon",{attrs:{size:"17"}})],1),t._v(" "),e("div",{staticClass:"label text-theme"},[t._v("\n                        "+t._s(t.$t("menu.invoices"))+"\n                    ")])])],1)]):t._e()],1),t._v(" "),t.user?e("div",{attrs:{id:"single-page"}},[t.isLoading?t._e():e("div",{staticClass:"medium-width",attrs:{id:"page-content"}},[e("MobileHeader",{attrs:{title:t.$t(t.$router.currentRoute.meta.title)}}),t._v(" "),e("div",{staticClass:"content-page"},[e("div",{staticClass:"page-detail-headline"},[e("div",{staticClass:"user-thumbnail"},[e("div",{staticClass:"avatar"},[e("UserImageInput",{attrs:{avatar:t.user.data.relationships.settings.data.attributes.avatar},model:{value:t.avatar,callback:function(n){t.avatar=n},expression:"avatar"}})],1),t._v(" "),e("div",{staticClass:"info"},[e("b",{staticClass:"name"},[t._v("\n                                "+t._s(t.user.data.relationships.settings.data.attributes.name)+"\n                                "),t.config.isSaaS?e("ColorLabel",{attrs:{color:t.subscriptionColor}},[t._v("\n                                    "+t._s(t.subscriptionStatus)+"\n                                ")]):t._e()],1),t._v(" "),e("span",{staticClass:"email"},[t._v(t._s(t.user.data.attributes.email))])])]),t._v(" "),t.config.storageLimit&&t.config.isSaaS&&t.config.app_payments_active&&!t.canShowIncompletePayment?e("div",{staticClass:"headline-actions"},[e("router-link",{attrs:{to:{name:"UpgradePlan"}}},[e("ButtonBase",{staticClass:"upgrade-button",attrs:{"button-style":"secondary",type:"button"}},[t._v("\n                                "+t._s(t.$t("global.upgrade_plan"))+"\n                            ")])],1)],1):t._e()]),t._v(" "),t.canShowIncompletePayment?e("InfoBox",{staticClass:"message-box",attrs:{type:"error"}},[e("i18n",{attrs:{path:"incomplete_payment.description",tag:"p"}},[e("a",{attrs:{href:t.user.data.attributes.incomplete_payment}},[t._v(t._s(t.$t("incomplete_payment.href")))])])],1):t._e(),t._v(" "),t.canShowUpgradeWarning&&!t.canShowIncompletePayment?e("InfoBox",{staticClass:"message-box",attrs:{type:"error"}},[e("p",[t._v(t._s(t.$t("upgrade_banner.title")))])]):t._e(),t._v(" "),e("router-view",{attrs:{user:t.user}})],1)],1),t._v(" "),t.isLoading?e("div",{attrs:{id:"loader"}},[e("Spinner")],1):t._e()]):t._e()],1)}),[],!1,null,"40837ba3",null);n.default=h.exports},"I7+L":function(t,n,e){var a=e("JBik");"string"==typeof a&&(a=[[t.i,a,""]]);var i={hmr:!0,transform:void 0,insertInto:void 0};e("aET+")(a,i);a.locals&&(t.exports=a.locals)},JBik:function(t,n,e){(t.exports=e("I1BE")(!1)).push([t.i,".content-group[data-v-4118306c] {\n  margin-bottom: 30px;\n  transition: all 300ms;\n}\n.content-group .group-title[data-v-4118306c] {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  margin-bottom: 5px;\n}\n.content-group .group-title .title[data-v-4118306c] {\n  margin-bottom: 0;\n}\n.content-group .group-title .icon[data-v-4118306c] {\n  margin-right: 19px;\n  opacity: 0.25;\n  transition: 0.3s all ease;\n}\n.content-group.collapsable .group-title[data-v-4118306c] {\n  cursor: pointer;\n}\n.content-group.is-collapsed[data-v-4118306c] {\n  margin-bottom: 15px;\n}\n.content-group.is-collapsed .icon[data-v-4118306c] {\n  transform: rotate(180deg);\n}\n.list-enter[data-v-4118306c],\n.list-leave-to[data-v-4118306c] {\n  visibility: hidden;\n  height: 0;\n  margin: 0;\n  padding: 0;\n  opacity: 0;\n}\n.list-enter-active[data-v-4118306c],\n.list-leave-active[data-v-4118306c] {\n  transition: all 300ms;\n}\n",""])},JOXf:function(t,n,e){"use strict";var a=e("nr4+");e.n(a).a},KnjL:function(t,n,e){"use strict";var a={name:"InfoBox",props:["type"]},i=(e("pFam"),e("KHd+")),r=Object(i.a)(a,(function(){var t=this.$createElement;return(this._self._c||t)("div",{staticClass:"info-box",class:this.type},[this._t("default")],2)}),[],!1,null,"8e7c42f6",null);n.a=r.exports},LtV2:function(t,n,e){"use strict";var a={name:"ContentSidebar"},i=(e("p4YY"),e("KHd+")),r=Object(i.a)(a,(function(){var t=this.$createElement;return(this._self._c||t)("section",{staticClass:"content-sidebar",attrs:{id:"content-sidebar"}},[this._t("default")],2)}),[],!1,null,"7f84dd9c",null);n.a=r.exports},MWZw:function(t,n,e){(t.exports=e("I1BE")(!1)).push([t.i,".color-label[data-v-5c508dbf] {\n  text-transform: capitalize;\n  font-size: 0.75em;\n  display: inline-block;\n  border-radius: 6px;\n  font-weight: 700;\n  padding: 4px 6px;\n}\n.color-label.purple[data-v-5c508dbf] {\n  color: #9D66FE;\n  background: rgba(157, 102, 254, 0.1);\n}\n.color-label.yellow[data-v-5c508dbf] {\n  color: #FFBD2D;\n  background: rgba(255, 189, 45, 0.1);\n}\n.color-label.green[data-v-5c508dbf] {\n  color: #00BC7E;\n  background: rgba(0, 188, 126, 0.1);\n}\n.color-label.red[data-v-5c508dbf] {\n  color: #fd397a;\n  background: rgba(253, 57, 122, 0.1);\n}\n",""])},"Qqv+":function(t,n,e){var a=e("biqn");"string"==typeof a&&(a=[[t.i,a,""]]);var i={hmr:!0,transform:void 0,insertInto:void 0};e("aET+")(a,i);a.locals&&(t.exports=a.locals)},Rbea:function(t,n,e){"use strict";var a={props:["label","name","avatar","info","error"],data:function(){return{imagePreview:void 0}},watch:{imagePreview:function(t){this.$store.commit("UPDATE_AVATAR",t)}},methods:{showImagePreview:function(t){var n=this,e=t.target.files[0].name,a=e.substring(e.lastIndexOf(".")+1).toLowerCase();if(["png","jpg","jpeg"].includes(a)){var i=t.target.files[0],r=new FileReader;r.onload=function(){return n.imagePreview=r.result},r.readAsDataURL(i),this.$updateImage("/user/relationships/settings","avatar",t.target.files[0])}else alert(this.$t("validation_errors.wrong_image"))}},created:function(){this.avatar&&(this.imagePreview=this.avatar)}},i=(e("da90"),e("KHd+")),r=Object(i.a)(a,(function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",{staticClass:"dropzone",class:{"is-error":t.error}},[e("input",{ref:"file",staticClass:"dummy",attrs:{type:"file",name:t.name},on:{change:function(n){return t.showImagePreview(n)}}}),t._v(" "),t.imagePreview?e("img",{ref:"image",staticClass:"image-preview",attrs:{src:t.imagePreview}}):t._e(),t._v(" "),t.imagePreview?e("img",{ref:"image",staticClass:"image-preview blurred",attrs:{src:t.imagePreview}}):t._e()])}),[],!1,null,"1b35e671",null);n.a=r.exports},"b+Fu":function(t,n,e){var a=e("w5mO");"string"==typeof a&&(a=[[t.i,a,""]]);var i={hmr:!0,transform:void 0,insertInto:void 0};e("aET+")(a,i);a.locals&&(t.exports=a.locals)},biqn:function(t,n,e){(t.exports=e("I1BE")(!1)).push([t.i,".info-box[data-v-8e7c42f6] {\n  padding: 20px;\n  border-radius: 8px;\n  margin-bottom: 32px;\n  background: #f4f5f6;\n  text-align: left;\n}\n.info-box.error[data-v-8e7c42f6] {\n  background: rgba(253, 57, 122, 0.1);\n}\n.info-box.error p[data-v-8e7c42f6], .info-box.error a[data-v-8e7c42f6] {\n  color: #fd397a;\n}\n.info-box.error a[data-v-8e7c42f6] {\n  text-decoration: underline;\n}\n.info-box p[data-v-8e7c42f6] {\n  font-size: 15px;\n  line-height: 1.6;\n  word-break: break-word;\n  font-weight: 600;\n}\n.info-box p[data-v-8e7c42f6] a {\n  font-size: 15px;\n}\n.info-box p[data-v-8e7c42f6] b {\n  font-size: 15px;\n  font-weight: 700;\n}\n.info-box b[data-v-8e7c42f6] {\n  font-weight: 700;\n}\n.info-box a[data-v-8e7c42f6] {\n  font-weight: 700;\n  font-size: 0.9375em;\n  line-height: 1.6;\n}\n.info-box ul[data-v-8e7c42f6] {\n  margin-top: 15px;\n  display: block;\n}\n.info-box ul li[data-v-8e7c42f6] {\n  display: block;\n}\n.info-box ul li a[data-v-8e7c42f6] {\n  display: block;\n}\n@media only screen and (max-width: 690px) {\n.info-box[data-v-8e7c42f6] {\n    padding: 15px;\n}\n}\n@media (prefers-color-scheme: dark) {\n.info-box[data-v-8e7c42f6] {\n    background: #1e2024;\n}\n.info-box p[data-v-8e7c42f6] {\n    color: #bec6cf;\n}\n.info-box ul li[data-v-8e7c42f6] {\n    color: #bec6cf;\n}\n}\n",""])},dP6t:function(t,n,e){var a=e("0ppm");"string"==typeof a&&(a=[[t.i,a,""]]);var i={hmr:!0,transform:void 0,insertInto:void 0};e("aET+")(a,i);a.locals&&(t.exports=a.locals)},da90:function(t,n,e){"use strict";var a=e("ffqf");e.n(a).a},fC5u:function(t,n,e){var a=e("9JAZ");"string"==typeof a&&(a=[[t.i,a,""]]);var i={hmr:!0,transform:void 0,insertInto:void 0};e("aET+")(a,i);a.locals&&(t.exports=a.locals)},ffqf:function(t,n,e){var a=e("3YzG");"string"==typeof a&&(a=[[t.i,a,""]]);var i={hmr:!0,transform:void 0,insertInto:void 0};e("aET+")(a,i);a.locals&&(t.exports=a.locals)},hXay:function(t,n,e){"use strict";var a={name:"TextLabel"},i=(e("wD4H"),e("KHd+")),r=Object(i.a)(a,(function(){var t=this.$createElement;return(this._self._c||t)("b",{staticClass:"text-label"},[this._t("default")],2)}),[],!1,null,"943e24b4",null).exports,o={name:"ContentGroup",props:["title","canCollapse","slug"],components:{ChevronUpIcon:e("CjXH").i,TextLabel:r},data:function(){return{isVisible:!0,canCollapseWrapper:!1}},methods:{hideGroup:function(){this.canCollapseWrapper&&(this.isVisible=!this.isVisible,localStorage.setItem("panel-group-"+this.slug,this.isVisible))}},created:function(){if(this.canCollapse){var t=localStorage.getItem("panel-group-"+this.slug);this.isVisible=!t||!!JSON.parse(String(t).toLowerCase()),this.canCollapseWrapper=!0}}},s=(e("1pgO"),Object(i.a)(o,(function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",{staticClass:"content-group",class:{"is-collapsed":!t.isVisible,collapsable:t.canCollapse}},[e("div",{staticClass:"group-title",on:{click:t.hideGroup}},[e("TextLabel",{staticClass:"title"},[t._v(t._s(t.title))]),t._v(" "),t.canCollapseWrapper?e("chevron-up-icon",{staticClass:"icon",attrs:{size:"12"}}):t._e()],1),t._v(" "),e("transition",{attrs:{name:"list"}},[e("div",{directives:[{name:"show",rawName:"v-show",value:t.isVisible,expression:"isVisible"}],staticClass:"wrapper"},[t._t("default")],2)])],1)}),[],!1,null,"4118306c",null));n.a=s.exports},kPoH:function(t,n,e){"use strict";var a={name:"ColorLabel",props:["color"]},i=(e("m6y/"),e("KHd+")),r=Object(i.a)(a,(function(){var t=this.$createElement;return(this._self._c||t)("b",{staticClass:"color-label",class:this.color},[this._t("default")],2)}),[],!1,null,"5c508dbf",null);n.a=r.exports},"m6y/":function(t,n,e){"use strict";var a=e("0rhn");e.n(a).a},my7I:function(t,n,e){"use strict";var a=e("b+Fu");e.n(a).a},"nr4+":function(t,n,e){var a=e("3eeM");"string"==typeof a&&(a=[[t.i,a,""]]);var i={hmr:!0,transform:void 0,insertInto:void 0};e("aET+")(a,i);a.locals&&(t.exports=a.locals)},p4YY:function(t,n,e){"use strict";var a=e("dP6t");e.n(a).a},pFam:function(t,n,e){"use strict";var a=e("Qqv+");e.n(a).a},w5mO:function(t,n,e){(t.exports=e("I1BE")(!1)).push([t.i,".page-detail-headline[data-v-40837ba3] {\n  display: flex;\n  justify-content: space-between;\n  margin-bottom: 50px;\n  margin-top: 30px;\n}\n.user-thumbnail[data-v-40837ba3] {\n  display: flex;\n  align-items: center;\n  cursor: pointer;\n}\n.user-thumbnail .avatar[data-v-40837ba3] {\n  margin-right: 20px;\n}\n.user-thumbnail .avatar img[data-v-40837ba3] {\n  line-height: 0;\n  width: 62px;\n  height: 62px;\n  border-radius: 12px;\n  z-index: 1;\n  position: relative;\n}\n.user-thumbnail .info .name[data-v-40837ba3] {\n  display: block;\n  font-size: 1.0625em;\n  line-height: 1;\n}\n.user-thumbnail .info .email[data-v-40837ba3] {\n  color: rgba(27, 37, 57, 0.7);\n  font-size: 0.875em;\n}\n.message-box[data-v-40837ba3] {\n  margin-top: -15px;\n}\n@media (prefers-color-scheme: dark) {\n.user-thumbnail .info .name[data-v-40837ba3] {\n    color: #bec6cf;\n}\n.user-thumbnail .info .email[data-v-40837ba3] {\n    color: #7d858c;\n}\n}\n@media only screen and (max-width: 690px) {\n.page-detail-headline[data-v-40837ba3] {\n    display: block;\n    margin-bottom: 30px;\n    margin-top: 10px;\n}\n.page-detail-headline .headline-actions[data-v-40837ba3] {\n    margin-top: 20px;\n}\n.page-detail-headline .headline-actions .upgrade-button[data-v-40837ba3] {\n    width: 100%;\n}\n}\n",""])},wD4H:function(t,n,e){"use strict";var a=e("fC5u");e.n(a).a}}]);