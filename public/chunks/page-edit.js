(window.webpackJsonp=window.webpackJsonp||[]).push([[41],{"1L+q":function(t,a,n){"use strict";var e=n("4EzG");n.n(e).a},"2Sb1":function(t,a,n){"use strict";var e={name:"PageHeader",props:["title","canBack"],components:{ChevronLeftIcon:n("CjXH").g}},i=(n("JOXf"),n("KHd+")),r=Object(i.a)(e,(function(){var t=this,a=t.$createElement,n=t._self._c||a;return n("div",{staticClass:"page-header"},[t.canBack?n("div",{staticClass:"go-back",on:{click:function(a){return t.$router.back()}}},[n("chevron-left-icon",{attrs:{size:"17"}})],1):t._e(),t._v(" "),n("div",{staticClass:"content"},[n("h1",{staticClass:"title"},[t._v(t._s(t.title))])])])}),[],!1,null,"9fd0a424",null);a.a=r.exports},"3eeM":function(t,a,n){(t.exports=n("I1BE")(!1)).push([t.i,".page-header[data-v-9fd0a424] {\n  display: flex;\n  align-items: center;\n  background: white;\n  z-index: 9;\n  width: 100%;\n  position: -webkit-sticky;\n  position: sticky;\n  top: 0;\n  padding-top: 20px;\n  padding-bottom: 20px;\n}\n.page-header .title[data-v-9fd0a424] {\n  font-size: 1.125em;\n  font-weight: 700;\n  color: #1B2539;\n}\n.page-header .go-back[data-v-9fd0a424] {\n  margin-right: 10px;\n  cursor: pointer;\n}\n.page-header .go-back svg[data-v-9fd0a424] {\n  vertical-align: middle;\n  margin-top: -4px;\n}\n@media only screen and (max-width: 960px) {\n.page-header .title[data-v-9fd0a424] {\n    font-size: 1.125em;\n}\n}\n@media only screen and (max-width: 690px) {\n.page-header[data-v-9fd0a424] {\n    display: none;\n}\n}\n@media (prefers-color-scheme: dark) {\n.page-header[data-v-9fd0a424] {\n    background: #141414;\n}\n.page-header .title[data-v-9fd0a424] {\n    color: #bec6cf;\n}\n.page-header .icon path[data-v-9fd0a424] {\n    fill: #00BC7E;\n}\n}\n",""])},"4EzG":function(t,a,n){var e=n("jexE");"string"==typeof e&&(e=[[t.i,e,""]]);var i={hmr:!0,transform:void 0,insertInto:void 0};n("aET+")(e,i);e.locals&&(t.exports=e.locals)},JOXf:function(t,a,n){"use strict";var e=n("nr4+");n.n(e).a},LedX:function(t,a,n){"use strict";var e=n("WEWl");n.n(e).a},Px9p:function(t,a,n){"use strict";var e=n("g8AA");n.n(e).a},THmQ:function(t,a,n){"use strict";var e={name:"SectionTitle"},i=(n("UHE7"),n("KHd+")),r=Object(i.a)(e,(function(){var t=this.$createElement;return(this._self._c||t)("b",{staticClass:"text-label"},[this._t("default")],2)}),[],!1,null,"6d799cf2",null);a.a=r.exports},TJPC:function(t,a,n){"use strict";n.d(a,"a",(function(){return r}));function e(t){return null==t}function i(t){return Array.isArray(t)&&0===t.length}var r={validate:function(t,a){var n=(void 0===a?{allowFalse:!0}:a).allowFalse,r={valid:!1,required:!0};return e(t)||i(t)?r:!1!==t||n?(r.valid=!!String(t).trim().length,r):r},params:[{name:"allowFalse",default:!0}],computesRequired:!0}},UHE7:function(t,a,n){"use strict";var e=n("UmJ6");n.n(e).a},UmJ6:function(t,a,n){var e=n("vFyo");"string"==typeof e&&(e=[[t.i,e,""]]);var i={hmr:!0,transform:void 0,insertInto:void 0};n("aET+")(e,i);e.locals&&(t.exports=e.locals)},WEWl:function(t,a,n){var e=n("sGz8");"string"==typeof e&&(e=[[t.i,e,""]]);var i={hmr:!0,transform:void 0,insertInto:void 0};n("aET+")(e,i);e.locals&&(t.exports=e.locals)},btva:function(t,a,n){"use strict";n.r(a);var e=n("A5+z"),i=n("eZ9V"),r=n("TJPC"),c=n("xxrA"),o=n("D62o"),p=n("THmQ"),l=n("Nv84"),s=n("2Sb1"),d=n("zTYo"),b=n("vDqi"),u=n.n(b),m={name:"PageEdit",components:{ValidationProvider:e.ValidationProvider,ValidationObserver:e.ValidationObserver,FormLabel:i.a,SectionTitle:p.a,MobileHeader:o.a,SwitchInput:c.a,PageHeader:s.a,ButtonBase:l.a,required:r.a,Spinner:d.a},data:function(){return{isLoading:!0,page:void 0}},methods:{changeStatus:function(t){this.$updateText("/admin/pages/"+this.$route.params.slug,"visibility",t)}},created:function(){var t=this;u.a.get("/api/admin/pages/"+this.$route.params.slug).then((function(a){t.page=a.data,t.isLoading=!1}))}},v=(n("Px9p"),n("KHd+")),f=Object(v.a)(m,(function(){var t=this,a=t.$createElement,n=t._self._c||a;return n("div",{attrs:{id:"single-page"}},[!t.isLoading&&t.page?n("div",{attrs:{id:"page-content"}},[n("MobileHeader",{attrs:{title:t.$t(t.$router.currentRoute.meta.title)}}),t._v(" "),n("PageHeader",{attrs:{title:t.$t(t.$router.currentRoute.meta.title)}}),t._v(" "),n("div",{staticClass:"content-page"},[n("ValidationObserver",{ref:"personalInformation",staticClass:"form block-form form-fixed-width",attrs:{tag:"form"},scopedSlots:t._u([{key:"default",fn:function(a){a.invalid;return[n("FormLabel",[t._v("\n                    "+t._s(t.page.data.attributes.title)+"\n                ")]),t._v(" "),n("div",{staticClass:"block-wrapper"},[n("div",{staticClass:"input-wrapper"},[n("div",{staticClass:"inline-wrapper"},[n("div",{staticClass:"switch-label"},[n("label",{staticClass:"input-label"},[t._v(t._s(t.$t("admin_pages.form.visibility"))+":")]),t._v(" "),n("small",{staticClass:"input-help"},[t._v(t._s(t.$t("admin_pages.form.visibility_help")))])]),t._v(" "),n("SwitchInput",{staticClass:"switch",attrs:{state:t.page.data.attributes.visibility},on:{input:t.changeStatus}})],1)])]),t._v(" "),n("div",{staticClass:"block-wrapper"},[n("label",[t._v(t._s(t.$t("admin_pages.form.title"))+":")]),t._v(" "),n("ValidationProvider",{staticClass:"input-wrapper",attrs:{tag:"div",mode:"passive",name:"Name",rules:"required"},scopedSlots:t._u([{key:"default",fn:function(a){var e=a.errors;return[n("input",{directives:[{name:"model",rawName:"v-model",value:t.page.data.attributes.title,expression:"page.data.attributes.title"}],staticClass:"focus-border-theme",class:{"is-error":e[0]},attrs:{placeholder:t.$t("admin_pages.form.title_plac"),type:"text"},domProps:{value:t.page.data.attributes.title},on:{input:[function(a){a.target.composing||t.$set(t.page.data.attributes,"title",a.target.value)},function(a){return t.$updateText("/admin/pages/"+t.$route.params.slug,"title",t.page.data.attributes.title)}]}}),t._v(" "),e[0]?n("span",{staticClass:"error-message"},[t._v(t._s(e[0]))]):t._e()]}}],null,!0)})],1),t._v(" "),n("div",{staticClass:"block-wrapper"},[n("label",[t._v(t._s(t.$t("admin_pages.form.slug"))+":")]),t._v(" "),n("div",{staticClass:"input-wrapper"},[n("input",{directives:[{name:"model",rawName:"v-model",value:t.page.data.attributes.slug,expression:"page.data.attributes.slug"}],attrs:{type:"text",disabled:""},domProps:{value:t.page.data.attributes.slug},on:{input:function(a){a.target.composing||t.$set(t.page.data.attributes,"slug",a.target.value)}}})])]),t._v(" "),n("div",{staticClass:"block-wrapper"},[n("label",[t._v(t._s(t.$t("admin_pages.form.content"))+":")]),t._v(" "),n("ValidationProvider",{staticClass:"input-wrapper",attrs:{tag:"div",mode:"passive",name:"Name",rules:"required"},scopedSlots:t._u([{key:"default",fn:function(a){var e=a.errors;return[n("textarea",{directives:[{name:"model",rawName:"v-model",value:t.page.data.attributes.content,expression:"page.data.attributes.content"}],staticClass:"focus-border-theme",class:{"is-error":e[0]},attrs:{placeholder:t.$t("admin_pages.form.content_plac"),rows:"18"},domProps:{value:t.page.data.attributes.content},on:{input:[function(a){a.target.composing||t.$set(t.page.data.attributes,"content",a.target.value)},function(a){return t.$updateText("/admin/pages/"+t.$route.params.slug,"content",t.page.data.attributes.content)}]}}),t._v(" "),e[0]?n("span",{staticClass:"error-message"},[t._v(t._s(e[0]))]):t._e()]}}],null,!0)})],1)]}}],null,!1,3166204151)})],1)],1):t._e(),t._v(" "),t.isLoading?n("div",{attrs:{id:"loader"}},[n("Spinner")],1):t._e()])}),[],!1,null,"0c61bc49",null);a.default=f.exports},eZ9V:function(t,a,n){"use strict";var e=n("CjXH"),i={name:"FormLabel",props:["icon"],components:{Edit2Icon:e.r,SettingsIcon:e.W}},r=(n("1L+q"),n("KHd+")),c=Object(r.a)(i,(function(){var t=this.$createElement,a=this._self._c||t;return a("div",{staticClass:"form-label"},[this.icon?this._e():a("edit-2-icon",{staticClass:"icon text-theme",attrs:{size:"22"}}),this._v(" "),"settings"===this.icon?a("settings-icon",{staticClass:"icon text-theme",attrs:{size:"22"}}):this._e(),this._v(" "),a("b",{staticClass:"label"},[this._t("default")],2)],1)}),[],!1,null,"10bcab7e",null);a.a=c.exports},g8AA:function(t,a,n){var e=n("pJm7");"string"==typeof e&&(e=[[t.i,e,""]]);var i={hmr:!0,transform:void 0,insertInto:void 0};n("aET+")(e,i);e.locals&&(t.exports=e.locals)},jexE:function(t,a,n){(t.exports=n("I1BE")(!1)).push([t.i,".form-label[data-v-10bcab7e] {\n  display: flex;\n  align-items: center;\n  margin-bottom: 30px;\n}\n.form-label .icon[data-v-10bcab7e] {\n  margin-right: 10px;\n}\n.form-label .icon path[data-v-10bcab7e], .form-label .icon circle[data-v-10bcab7e] {\n  color: inherit;\n}\n.form-label .label[data-v-10bcab7e] {\n  font-size: 1.125em;\n  font-weight: 700;\n}\n@media (prefers-color-scheme: dark) {\n.form-label .label[data-v-10bcab7e] {\n    color: #bec6cf;\n}\n}\n",""])},"nr4+":function(t,a,n){var e=n("3eeM");"string"==typeof e&&(e=[[t.i,e,""]]);var i={hmr:!0,transform:void 0,insertInto:void 0};n("aET+")(e,i);e.locals&&(t.exports=e.locals)},pJm7:function(t,a,n){(t.exports=n("I1BE")(!1)).push([t.i,'.form[data-v-0c61bc49] {\n  max-width: 700px;\n}\n.form.inline-form[data-v-0c61bc49] {\n  display: flex;\n  position: relative;\n  justify-content: center;\n  margin: 0 auto;\n}\n.form.inline-form .input-wrapper[data-v-0c61bc49] {\n  position: relative;\n}\n.form.inline-form .input-wrapper .error-message[data-v-0c61bc49] {\n  position: absolute;\n  left: 0;\n  bottom: -25px;\n}\n.form.block-form .wrapper-inline[data-v-0c61bc49] {\n  display: flex;\n  margin: 0 -15px;\n}\n.form.block-form .wrapper-inline .block-wrapper[data-v-0c61bc49] {\n  width: 100%;\n  padding: 0 15px;\n}\n.form.block-form .block-wrapper[data-v-0c61bc49] {\n  margin-bottom: 32px;\n}\n.form.block-form .block-wrapper label[data-v-0c61bc49] {\n  font-size: 0.875em;\n  color: rgba(27, 37, 57, 0.8);\n  font-weight: 700;\n  display: block;\n  margin-bottom: 7px;\n  text-align: left;\n}\n.form.block-form .block-wrapper[data-v-0c61bc49]:last-child {\n  margin-bottom: 0;\n}\n.form.block-form .button[data-v-0c61bc49] {\n  margin-top: 50px;\n}\n.form .inline-wrapper[data-v-0c61bc49] {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n}\n.form .inline-wrapper .switch-label .input-help[data-v-0c61bc49] {\n  padding-top: 0;\n}\n.form .inline-wrapper .switch-label .input-label[data-v-0c61bc49] {\n  font-weight: 700;\n  color: #1B2539;\n  font-size: 1em;\n  margin-bottom: 5px;\n}\n.form .input-help[data-v-0c61bc49] {\n  font-size: 0.75em;\n  color: rgba(27, 37, 57, 0.7);\n  line-height: 1.35;\n  padding-top: 10px;\n  display: block;\n}\n.single-line-form[data-v-0c61bc49] {\n  display: flex;\n}\n.single-line-form .submit-button[data-v-0c61bc49] {\n  margin-left: 20px;\n}\n.error-message[data-v-0c61bc49] {\n  font-size: 0.875em;\n  color: #fd397a;\n  padding-top: 5px;\n  display: block;\n  text-align: left;\n}\ntextarea[data-v-0c61bc49] {\n  width: 100%;\n}\ninput[type="color"][data-v-0c61bc49] {\n  width: 38px;\n  height: 40px;\n  border: none;\n  outline: none;\n  background: none;\n}\ntextarea[data-v-0c61bc49],\ninput[type="password"][data-v-0c61bc49],\ninput[type="text"][data-v-0c61bc49],\ninput[type="number"][data-v-0c61bc49],\ninput[type="email"][data-v-0c61bc49] {\n  border: 1px solid transparent;\n  transition: 150ms all ease;\n  font-size: 1em;\n  border-radius: 8px;\n  padding: 13px 20px;\n  -webkit-appearance: none;\n     -moz-appearance: none;\n          appearance: none;\n  font-weight: 700;\n  outline: 0;\n  width: 100%;\n  box-shadow: 0 1px 5px rgba(0, 0, 0, 0.12);\n}\ntextarea.is-error[data-v-0c61bc49],\ninput[type="password"].is-error[data-v-0c61bc49],\ninput[type="text"].is-error[data-v-0c61bc49],\ninput[type="number"].is-error[data-v-0c61bc49],\ninput[type="email"].is-error[data-v-0c61bc49] {\n  border-color: #fd397a;\n}\ntextarea[data-v-0c61bc49]::-webkit-input-placeholder, input[type="password"][data-v-0c61bc49]::-webkit-input-placeholder, input[type="text"][data-v-0c61bc49]::-webkit-input-placeholder, input[type="number"][data-v-0c61bc49]::-webkit-input-placeholder, input[type="email"][data-v-0c61bc49]::-webkit-input-placeholder {\n  color: rgba(27, 37, 57, 0.5);\n  font-size: 0.9375em;\n}\ntextarea[data-v-0c61bc49]::-moz-placeholder, input[type="password"][data-v-0c61bc49]::-moz-placeholder, input[type="text"][data-v-0c61bc49]::-moz-placeholder, input[type="number"][data-v-0c61bc49]::-moz-placeholder, input[type="email"][data-v-0c61bc49]::-moz-placeholder {\n  color: rgba(27, 37, 57, 0.5);\n  font-size: 0.9375em;\n}\ntextarea[data-v-0c61bc49]:-ms-input-placeholder, input[type="password"][data-v-0c61bc49]:-ms-input-placeholder, input[type="text"][data-v-0c61bc49]:-ms-input-placeholder, input[type="number"][data-v-0c61bc49]:-ms-input-placeholder, input[type="email"][data-v-0c61bc49]:-ms-input-placeholder {\n  color: rgba(27, 37, 57, 0.5);\n  font-size: 0.9375em;\n}\ntextarea[data-v-0c61bc49]::-ms-input-placeholder, input[type="password"][data-v-0c61bc49]::-ms-input-placeholder, input[type="text"][data-v-0c61bc49]::-ms-input-placeholder, input[type="number"][data-v-0c61bc49]::-ms-input-placeholder, input[type="email"][data-v-0c61bc49]::-ms-input-placeholder {\n  color: rgba(27, 37, 57, 0.5);\n  font-size: 0.9375em;\n}\ntextarea[data-v-0c61bc49]::placeholder,\ninput[type="password"][data-v-0c61bc49]::placeholder,\ninput[type="text"][data-v-0c61bc49]::placeholder,\ninput[type="number"][data-v-0c61bc49]::placeholder,\ninput[type="email"][data-v-0c61bc49]::placeholder {\n  color: rgba(27, 37, 57, 0.5);\n  font-size: 0.9375em;\n}\ntextarea[disabled][data-v-0c61bc49],\ninput[type="password"][disabled][data-v-0c61bc49],\ninput[type="text"][disabled][data-v-0c61bc49],\ninput[type="number"][disabled][data-v-0c61bc49],\ninput[type="email"][disabled][data-v-0c61bc49] {\n  background: white;\n  color: rgba(27, 37, 57, 0.8);\n  -webkit-text-fill-color: rgba(27, 37, 57, 0.8);\n  opacity: 1;\n  cursor: not-allowed;\n}\n.additional-link[data-v-0c61bc49] {\n  font-size: 1em;\n  margin-top: 50px;\n  display: block;\n}\n.additional-link b[data-v-0c61bc49], .additional-link a[data-v-0c61bc49] {\n  cursor: pointer;\n}\n.additional-link b[data-v-0c61bc49]:hover, .additional-link a[data-v-0c61bc49]:hover {\n  text-decoration: underline;\n}\n@media only screen and (max-width: 1024px) {\n.form[data-v-0c61bc49] {\n    max-width: 100%;\n}\n}\n@media only screen and (max-width: 960px) {\n.form .button[data-v-0c61bc49] {\n    margin-top: 20px;\n    width: 100%;\n    margin-left: 0;\n    margin-right: 0;\n}\n.form input[data-v-0c61bc49], .form textarea[data-v-0c61bc49] {\n    width: 100%;\n    min-width: 100%;\n}\n.form.block-form .block-wrapper[data-v-0c61bc49] {\n    display: block;\n}\n.form.block-form .block-wrapper label[data-v-0c61bc49] {\n    width: 100%;\n    padding-right: 0;\n    display: block;\n    margin-bottom: 7px;\n    text-align: left !important;\n    font-size: 0.875em;\n    padding-top: 0;\n}\n.form.block-form .button[data-v-0c61bc49] {\n    margin-top: 25px;\n    margin-left: 0;\n    margin-right: 0;\n}\n.form.inline-form[data-v-0c61bc49] {\n    display: block;\n}\n.form.inline-form .input-wrapper .error-message[data-v-0c61bc49] {\n    position: relative;\n    bottom: 0;\n}\n.form .button[data-v-0c61bc49] {\n    padding: 14px 32px;\n}\n.single-line-form[data-v-0c61bc49] {\n    display: block;\n}\n.single-line-form .submit-button[data-v-0c61bc49] {\n    margin-left: 0;\n    margin-top: 20px;\n    width: 100%;\n}\ntextarea[data-v-0c61bc49],\n  input[type="password"][data-v-0c61bc49],\n  input[type="number"][data-v-0c61bc49],\n  input[type="text"][data-v-0c61bc49],\n  input[type="email"][data-v-0c61bc49] {\n    padding: 14px 20px;\n}\n}\n@media only screen and (max-width: 690px) {\n.form.block-form .wrapper-inline[data-v-0c61bc49] {\n    display: block;\n}\n}\n@media (prefers-color-scheme: dark) {\n.form .input-help[data-v-0c61bc49] {\n    color: #7d858c;\n}\n.form.block-form .block-wrapper label[data-v-0c61bc49] {\n    color: #bec6cf;\n}\n.form .inline-wrapper .switch-label .input-label[data-v-0c61bc49] {\n    color: #bec6cf;\n}\ntextarea[data-v-0c61bc49],\n  input[type="password"][data-v-0c61bc49],\n  input[type="text"][data-v-0c61bc49],\n  input[type="number"][data-v-0c61bc49],\n  input[type="email"][data-v-0c61bc49] {\n    border-color: #1e2024;\n    background: #1e2024;\n    color: #bec6cf;\n}\ntextarea[data-v-0c61bc49]::-webkit-input-placeholder, input[type="password"][data-v-0c61bc49]::-webkit-input-placeholder, input[type="text"][data-v-0c61bc49]::-webkit-input-placeholder, input[type="number"][data-v-0c61bc49]::-webkit-input-placeholder, input[type="email"][data-v-0c61bc49]::-webkit-input-placeholder {\n    color: #7d858c;\n}\ntextarea[data-v-0c61bc49]::-moz-placeholder, input[type="password"][data-v-0c61bc49]::-moz-placeholder, input[type="text"][data-v-0c61bc49]::-moz-placeholder, input[type="number"][data-v-0c61bc49]::-moz-placeholder, input[type="email"][data-v-0c61bc49]::-moz-placeholder {\n    color: #7d858c;\n}\ntextarea[data-v-0c61bc49]:-ms-input-placeholder, input[type="password"][data-v-0c61bc49]:-ms-input-placeholder, input[type="text"][data-v-0c61bc49]:-ms-input-placeholder, input[type="number"][data-v-0c61bc49]:-ms-input-placeholder, input[type="email"][data-v-0c61bc49]:-ms-input-placeholder {\n    color: #7d858c;\n}\ntextarea[data-v-0c61bc49]::-ms-input-placeholder, input[type="password"][data-v-0c61bc49]::-ms-input-placeholder, input[type="text"][data-v-0c61bc49]::-ms-input-placeholder, input[type="number"][data-v-0c61bc49]::-ms-input-placeholder, input[type="email"][data-v-0c61bc49]::-ms-input-placeholder {\n    color: #7d858c;\n}\ntextarea[data-v-0c61bc49]::placeholder,\n  input[type="password"][data-v-0c61bc49]::placeholder,\n  input[type="text"][data-v-0c61bc49]::placeholder,\n  input[type="number"][data-v-0c61bc49]::placeholder,\n  input[type="email"][data-v-0c61bc49]::placeholder {\n    color: #7d858c;\n}\ntextarea[disabled][data-v-0c61bc49],\n  input[type="password"][disabled][data-v-0c61bc49],\n  input[type="text"][disabled][data-v-0c61bc49],\n  input[type="number"][disabled][data-v-0c61bc49],\n  input[type="email"][disabled][data-v-0c61bc49] {\n    background: #1e2024;\n    color: rgba(125, 133, 140, 0.8);\n    -webkit-text-fill-color: rgba(125, 133, 140, 0.8);\n}\n.popup-wrapper textarea[data-v-0c61bc49],\n  .popup-wrapper input[type="password"][data-v-0c61bc49],\n  .popup-wrapper input[type="text"][data-v-0c61bc49],\n  .popup-wrapper input[type="number"][data-v-0c61bc49],\n  .popup-wrapper input[type="email"][data-v-0c61bc49] {\n    background: #25272c;\n}\n}\n',""])},sGz8:function(t,a,n){(t.exports=n("I1BE")(!1)).push([t.i,".input-wrapper[data-v-421ca226] {\n  display: flex;\n  width: 100%;\n}\n.input-wrapper .input-label[data-v-421ca226] {\n  color: #1B2539;\n}\n.input-wrapper .switch-content[data-v-421ca226] {\n  width: 100%;\n}\n.input-wrapper .switch-content[data-v-421ca226]:last-child {\n  width: 80px;\n}\n.switch[data-v-421ca226] {\n  width: 50px;\n  height: 28px;\n  border-radius: 50px;\n  display: block;\n  background: #f1f1f5;\n  position: relative;\n  transition: 0.3s all ease;\n}\n.switch .switch-button[data-v-421ca226] {\n  transition: 0.3s all ease;\n  width: 22px;\n  height: 22px;\n  border-radius: 50px;\n  display: block;\n  background: white;\n  position: absolute;\n  top: 3px;\n  left: 3px;\n  box-shadow: 0 2px 4px rgba(37, 38, 94, 0.1);\n  cursor: pointer;\n}\n.switch.active .switch-button[data-v-421ca226] {\n  left: 25px;\n}\n@media (prefers-color-scheme: dark) {\n.switch[data-v-421ca226] {\n    background: #1e2024;\n}\n.popup-wrapper .switch[data-v-421ca226] {\n    background: #25272c;\n}\n}\n",""])},vFyo:function(t,a,n){(t.exports=n("I1BE")(!1)).push([t.i,".text-label[data-v-6d799cf2] {\n  font-size: 0.75em;\n  color: #AFAFAF;\n  font-weight: 700;\n  display: block;\n  margin-bottom: 20px;\n}\n@media (prefers-color-scheme: dark) {\n.text-label[data-v-6d799cf2] {\n    color: #00BC7E;\n}\n}\n",""])},xxrA:function(t,a,n){"use strict";var e={name:"SwitchInput",props:["label","name","state","info"],data:function(){return{isSwitched:void 0}},methods:{changeState:function(){this.isSwitched=!this.isSwitched,this.$emit("input",this.isSwitched)}},mounted:function(){this.isSwitched=this.state}},i=(n("LedX"),n("KHd+")),r=Object(i.a)(e,(function(){var t=this,a=t.$createElement,n=t._self._c||a;return n("div",{staticClass:"input-wrapper"},[n("div",{staticClass:"switch-content"},[t.label?n("label",{staticClass:"input-label"},[t._v(t._s(t.label)+":")]):t._e(),t._v(" "),t.info?n("small",{staticClass:"input-info"},[t._v(t._s(t.info))]):t._e()]),t._v(" "),n("div",{staticClass:"switch-content text-right"},[n("div",{staticClass:"switch",class:{active:t.isSwitched},on:{click:t.changeState}},[n("div",{staticClass:"switch-button"})])])])}),[],!1,null,"421ca226",null);a.a=r.exports}}]);