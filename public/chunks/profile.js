(window.webpackJsonp=window.webpackJsonp||[]).push([[51],{"3GDE":function(e,t,n){var a=n("UqlB");"string"==typeof a&&(a=[[e.i,a,""]]);var i={hmr:!0,transform:void 0,insertInto:void 0};n("aET+")(a,i);a.locals&&(e.exports=a.locals)},"4TWA":function(e,t,n){"use strict";var a=n("CjXH"),i={name:"SelectInput",props:["options","isError","default","placeholder"],components:{Edit2Icon:a.r,UserIcon:a.eb,ChevronDownIcon:a.f},data:function(){return{selected:void 0,isOpen:!1}},methods:{selectOption:function(e){this.$emit("input",e.value),this.selected=e,this.isOpen=!1},openMenu:function(){this.isOpen=!this.isOpen}},created:function(){var e=this;this.default&&(this.selected=this.options.find((function(t){return t.value===e.default})))}},o=(n("F+Qg"),n("KHd+")),r=Object(o.a)(i,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"select"},[n("div",{staticClass:"input-area",class:{"is-active":e.isOpen,"is-error":e.isError},on:{click:e.openMenu}},[e.selected?n("div",{staticClass:"selected"},[e.selected.icon?n("div",{staticClass:"option-icon"},["user"===e.selected.icon?n("user-icon",{attrs:{size:"14"}}):e._e(),e._v(" "),"user-edit"===e.selected.icon?n("edit2-icon",{attrs:{size:"14"}}):e._e()],1):e._e(),e._v(" "),n("span",{staticClass:"option-value"},[e._v(e._s(e.selected.label))])]):e._e(),e._v(" "),e.selected?e._e():n("div",{staticClass:"not-selected"},[n("span",{staticClass:"option-value placehoder"},[e._v(e._s(e.placeholder))])]),e._v(" "),n("chevron-down-icon",{staticClass:"chevron",attrs:{size:"19"}})],1),e._v(" "),n("transition",{attrs:{name:"slide-in"}},[e.isOpen?n("ul",{staticClass:"input-options"},e._l(e.options,(function(t,a){return n("li",{key:a,staticClass:"option-item",on:{click:function(n){return e.selectOption(t)}}},[t.icon?n("div",{staticClass:"option-icon"},["user"===t.icon?n("user-icon",{attrs:{size:"14"}}):e._e(),e._v(" "),"user-edit"===t.icon?n("edit2-icon",{attrs:{size:"14"}}):e._e()],1):e._e(),e._v(" "),n("span",{staticClass:"option-value"},[e._v(e._s(t.label))])])})),0):e._e()])],1)}),[],!1,null,"14b1d6a3",null);t.a=r.exports},"5Xka":function(e,t,n){"use strict";n.r(t);var a=n("A5+z"),i=n("gahf"),o=n("4TWA"),r=n("eZ9V"),s=n("D62o"),p=n("Nv84"),l=n("qefO"),d=n("2Sb1"),u=n("owoR"),c=n("TJPC"),m=n("L2JU");n("LvDl");function v(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function b(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var f={name:"Settings",props:["user"],components:{ValidationProvider:a.ValidationProvider,ValidationObserver:a.ValidationObserver,PageTabGroup:i.a,MobileHeader:s.a,SelectInput:o.a,PageHeader:d.a,ButtonBase:p.a,ThemeLabel:u.a,FormLabel:r.a,required:c.a,PageTab:l.a},computed:function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?v(Object(n),!0).forEach((function(t){b(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):v(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}({},Object(m.b)(["config","countries","timezones"])),data:function(){return{userInfo:void 0,billingInfo:void 0,isLoading:!1}},methods:{changeUserName:function(){this.$store.commit("UPDATE_NAME",this.userInfo.name),this.$updateText("/user/profile","name",this.userInfo.name)}},created:function(){this.userInfo={timezone:this.user.data.relationships.settings.data.attributes.timezone,name:this.user.data.relationships.settings.data.attributes.name,email:this.user.data.attributes.email},this.billingInfo={name:this.user.data.relationships.settings.data.attributes.name,address:this.user.data.relationships.settings.data.attributes.address,state:this.user.data.relationships.settings.data.attributes.state,city:this.user.data.relationships.settings.data.attributes.city,postal_code:this.user.data.relationships.settings.data.attributes.postal_code,country:this.user.data.relationships.settings.data.attributes.country,phone_number:this.user.data.relationships.settings.data.attributes.phone_number}}},g=(n("PgG+"),n("KHd+")),h=Object(g.a)(f,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("PageTab",[e.userInfo?n("PageTabGroup",[n("div",{staticClass:"form block-form"},[n("FormLabel",[e._v(e._s(e.$t("user_settings.title_account")))]),e._v(" "),n("div",{staticClass:"block-wrapper"},[n("label",[e._v(e._s(e.$t("page_registration.label_email"))+":")]),e._v(" "),n("div",{staticClass:"input-wrapper"},[n("input",{attrs:{placeholder:e.$t("page_registration.placeholder_email"),type:"email",disabled:""},domProps:{value:e.userInfo.email}})])]),e._v(" "),n("div",{staticClass:"block-wrapper"},[n("label",[e._v(e._s(e.$t("page_registration.label_name"))+":")]),e._v(" "),n("div",{staticClass:"input-wrapper"},[n("input",{directives:[{name:"model",rawName:"v-model",value:e.userInfo.name,expression:"userInfo.name"}],staticClass:"focus-border-theme",attrs:{placeholder:e.$t("page_registration.placeholder_name"),type:"text"},domProps:{value:e.userInfo.name},on:{keyup:e.changeUserName,input:function(t){t.target.composing||e.$set(e.userInfo,"name",t.target.value)}}})])])],1)]):e._e(),e._v(" "),e.userInfo?n("PageTabGroup",[n("div",{staticClass:"form block-form"},[n("FormLabel",[e._v(e._s(e.$t("user_settings.timezone")))]),e._v(" "),n("div",{staticClass:"block-wrapper"},[n("label",[e._v("GMT:")]),e._v(" "),n("div",{staticClass:"input-wrapper"},[n("SelectInput",{attrs:{default:e.userInfo.timezone,options:e.timezones,placeholder:e.$t("user_settings.timezone_plac")},on:{input:function(t){return e.$updateText("/user/relationships/settings","timezone",e.userInfo.timezone)}},model:{value:e.userInfo.timezone,callback:function(t){e.$set(e.userInfo,"timezone",t)},expression:"userInfo.timezone"}})],1)])],1)]):e._e(),e._v(" "),e.config.isSaaS&&e.billingInfo?n("PageTabGroup",[n("div",{staticClass:"form block-form"},[n("FormLabel",[e._v(e._s(e.$t("user_settings.title_billing")))]),e._v(" "),n("div",{staticClass:"block-wrapper"},[n("label",[e._v(e._s(e.$t("user_settings.name"))+":")]),e._v(" "),n("div",{staticClass:"input-wrapper"},[n("input",{directives:[{name:"model",rawName:"v-model",value:e.billingInfo.name,expression:"billingInfo.name"}],staticClass:"focus-border-theme",attrs:{placeholder:e.$t("user_settings.name_plac"),type:"text"},domProps:{value:e.billingInfo.name},on:{keyup:function(t){return e.$updateText("/user/relationships/settings","name",e.billingInfo.name)},input:function(t){t.target.composing||e.$set(e.billingInfo,"name",t.target.value)}}})])]),e._v(" "),n("div",{staticClass:"block-wrapper"},[n("label",[e._v(e._s(e.$t("user_settings.address"))+":")]),e._v(" "),n("div",{staticClass:"input-wrapper"},[n("input",{directives:[{name:"model",rawName:"v-model",value:e.billingInfo.address,expression:"billingInfo.address"}],staticClass:"focus-border-theme",attrs:{placeholder:e.$t("user_settings.address_plac"),type:"text"},domProps:{value:e.billingInfo.address},on:{keyup:function(t){return e.$updateText("/user/relationships/settings","address",e.billingInfo.address)},input:function(t){t.target.composing||e.$set(e.billingInfo,"address",t.target.value)}}})])]),e._v(" "),n("div",{staticClass:"wrapper-inline"},[n("div",{staticClass:"block-wrapper"},[n("label",[e._v(e._s(e.$t("user_settings.city"))+":")]),e._v(" "),n("div",{staticClass:"input-wrapper"},[n("input",{directives:[{name:"model",rawName:"v-model",value:e.billingInfo.city,expression:"billingInfo.city"}],staticClass:"focus-border-theme",attrs:{placeholder:e.$t("user_settings.city_plac"),type:"text"},domProps:{value:e.billingInfo.city},on:{keyup:function(t){return e.$updateText("/user/relationships/settings","city",e.billingInfo.city)},input:function(t){t.target.composing||e.$set(e.billingInfo,"city",t.target.value)}}})])]),e._v(" "),n("div",{staticClass:"block-wrapper"},[n("label",[e._v(e._s(e.$t("user_settings.postal_code"))+":")]),e._v(" "),n("div",{staticClass:"input-wrapper"},[n("input",{directives:[{name:"model",rawName:"v-model",value:e.billingInfo.postal_code,expression:"billingInfo.postal_code"}],staticClass:"focus-border-theme",attrs:{placeholder:e.$t("user_settings.postal_code_plac"),type:"text"},domProps:{value:e.billingInfo.postal_code},on:{keyup:function(t){return e.$updateText("/user/relationships/settings","postal_code",e.billingInfo.postal_code)},input:function(t){t.target.composing||e.$set(e.billingInfo,"postal_code",t.target.value)}}})])])]),e._v(" "),n("div",{staticClass:"block-wrapper"},[n("label",[e._v(e._s(e.$t("user_settings.country"))+":")]),e._v(" "),n("div",{staticClass:"input-wrapper"},[n("SelectInput",{attrs:{default:e.billingInfo.country,options:e.countries,placeholder:e.$t("user_settings.country_plac")},on:{input:function(t){return e.$updateText("/user/relationships/settings","country",e.billingInfo.country)}},model:{value:e.billingInfo.country,callback:function(t){e.$set(e.billingInfo,"country",t)},expression:"billingInfo.country"}})],1)]),e._v(" "),n("div",{staticClass:"block-wrapper"},[n("label",[e._v(e._s(e.$t("user_settings.state"))+":")]),e._v(" "),n("div",{staticClass:"input-wrapper"},[n("input",{directives:[{name:"model",rawName:"v-model",value:e.billingInfo.state,expression:"billingInfo.state"}],staticClass:"focus-border-theme",attrs:{placeholder:e.$t("user_settings.state_plac"),type:"text"},domProps:{value:e.billingInfo.state},on:{keyup:function(t){return e.$updateText("/user/relationships/settings","state",e.billingInfo.state)},input:function(t){t.target.composing||e.$set(e.billingInfo,"state",t.target.value)}}}),e._v(" "),n("small",{staticClass:"input-help"},[e._v("\n                        State, county, province, or region.\n                    ")])])]),e._v(" "),n("div",{staticClass:"block-wrapper"},[n("label",[e._v(e._s(e.$t("user_settings.phone_number"))+":")]),e._v(" "),n("div",{staticClass:"input-wrapper"},[n("input",{directives:[{name:"model",rawName:"v-model",value:e.billingInfo.phone_number,expression:"billingInfo.phone_number"}],staticClass:"focus-border-theme",attrs:{placeholder:e.$t("user_settings.phone_number_plac"),type:"text"},domProps:{value:e.billingInfo.phone_number},on:{keyup:function(t){return e.$updateText("/user/relationships/settings","phone_number",e.billingInfo.phone_number)},input:function(t){t.target.composing||e.$set(e.billingInfo,"phone_number",t.target.value)}}})])])],1)]):e._e()],1)}),[],!1,null,"722ee838",null);t.default=h.exports},"F+Qg":function(e,t,n){"use strict";var a=n("3GDE");n.n(a).a},"F0K/":function(e,t,n){(e.exports=n("I1BE")(!1)).push([e.i,'.form[data-v-722ee838] {\n  max-width: 700px;\n}\n.form.inline-form[data-v-722ee838] {\n  display: flex;\n  position: relative;\n  justify-content: center;\n  margin: 0 auto;\n}\n.form.inline-form .input-wrapper[data-v-722ee838] {\n  position: relative;\n}\n.form.inline-form .input-wrapper .error-message[data-v-722ee838] {\n  position: absolute;\n  left: 0;\n  bottom: -25px;\n}\n.form.block-form .wrapper-inline[data-v-722ee838] {\n  display: flex;\n  margin: 0 -15px;\n}\n.form.block-form .wrapper-inline .block-wrapper[data-v-722ee838] {\n  width: 100%;\n  padding: 0 15px;\n}\n.form.block-form .block-wrapper[data-v-722ee838] {\n  margin-bottom: 32px;\n}\n.form.block-form .block-wrapper label[data-v-722ee838] {\n  font-size: 0.875em;\n  color: rgba(27, 37, 57, 0.8);\n  font-weight: 700;\n  display: block;\n  margin-bottom: 7px;\n  text-align: left;\n}\n.form.block-form .block-wrapper[data-v-722ee838]:last-child {\n  margin-bottom: 0;\n}\n.form.block-form .button[data-v-722ee838] {\n  margin-top: 50px;\n}\n.form .inline-wrapper[data-v-722ee838] {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n}\n.form .inline-wrapper .switch-label .input-help[data-v-722ee838] {\n  padding-top: 0;\n}\n.form .inline-wrapper .switch-label .input-label[data-v-722ee838] {\n  font-weight: 700;\n  color: #1B2539;\n  font-size: 1em;\n  margin-bottom: 5px;\n}\n.form .input-help[data-v-722ee838] {\n  font-size: 0.75em;\n  color: rgba(27, 37, 57, 0.7);\n  line-height: 1.35;\n  padding-top: 10px;\n  display: block;\n}\n.single-line-form[data-v-722ee838] {\n  display: flex;\n}\n.single-line-form .submit-button[data-v-722ee838] {\n  margin-left: 20px;\n}\n.error-message[data-v-722ee838] {\n  font-size: 0.875em;\n  color: #fd397a;\n  padding-top: 5px;\n  display: block;\n  text-align: left;\n}\ntextarea[data-v-722ee838] {\n  width: 100%;\n}\ninput[type="color"][data-v-722ee838] {\n  width: 38px;\n  height: 40px;\n  border: none;\n  outline: none;\n  background: none;\n}\ntextarea[data-v-722ee838],\ninput[type="password"][data-v-722ee838],\ninput[type="text"][data-v-722ee838],\ninput[type="number"][data-v-722ee838],\ninput[type="email"][data-v-722ee838] {\n  border: 1px solid transparent;\n  transition: 150ms all ease;\n  font-size: 1em;\n  border-radius: 8px;\n  padding: 13px 20px;\n  -webkit-appearance: none;\n     -moz-appearance: none;\n          appearance: none;\n  font-weight: 700;\n  outline: 0;\n  width: 100%;\n  box-shadow: 0 1px 5px rgba(0, 0, 0, 0.12);\n}\ntextarea.is-error[data-v-722ee838],\ninput[type="password"].is-error[data-v-722ee838],\ninput[type="text"].is-error[data-v-722ee838],\ninput[type="number"].is-error[data-v-722ee838],\ninput[type="email"].is-error[data-v-722ee838] {\n  border-color: #fd397a;\n}\ntextarea[data-v-722ee838]::-webkit-input-placeholder, input[type="password"][data-v-722ee838]::-webkit-input-placeholder, input[type="text"][data-v-722ee838]::-webkit-input-placeholder, input[type="number"][data-v-722ee838]::-webkit-input-placeholder, input[type="email"][data-v-722ee838]::-webkit-input-placeholder {\n  color: rgba(27, 37, 57, 0.5);\n  font-size: 0.9375em;\n}\ntextarea[data-v-722ee838]::-moz-placeholder, input[type="password"][data-v-722ee838]::-moz-placeholder, input[type="text"][data-v-722ee838]::-moz-placeholder, input[type="number"][data-v-722ee838]::-moz-placeholder, input[type="email"][data-v-722ee838]::-moz-placeholder {\n  color: rgba(27, 37, 57, 0.5);\n  font-size: 0.9375em;\n}\ntextarea[data-v-722ee838]:-ms-input-placeholder, input[type="password"][data-v-722ee838]:-ms-input-placeholder, input[type="text"][data-v-722ee838]:-ms-input-placeholder, input[type="number"][data-v-722ee838]:-ms-input-placeholder, input[type="email"][data-v-722ee838]:-ms-input-placeholder {\n  color: rgba(27, 37, 57, 0.5);\n  font-size: 0.9375em;\n}\ntextarea[data-v-722ee838]::-ms-input-placeholder, input[type="password"][data-v-722ee838]::-ms-input-placeholder, input[type="text"][data-v-722ee838]::-ms-input-placeholder, input[type="number"][data-v-722ee838]::-ms-input-placeholder, input[type="email"][data-v-722ee838]::-ms-input-placeholder {\n  color: rgba(27, 37, 57, 0.5);\n  font-size: 0.9375em;\n}\ntextarea[data-v-722ee838]::placeholder,\ninput[type="password"][data-v-722ee838]::placeholder,\ninput[type="text"][data-v-722ee838]::placeholder,\ninput[type="number"][data-v-722ee838]::placeholder,\ninput[type="email"][data-v-722ee838]::placeholder {\n  color: rgba(27, 37, 57, 0.5);\n  font-size: 0.9375em;\n}\ntextarea[disabled][data-v-722ee838],\ninput[type="password"][disabled][data-v-722ee838],\ninput[type="text"][disabled][data-v-722ee838],\ninput[type="number"][disabled][data-v-722ee838],\ninput[type="email"][disabled][data-v-722ee838] {\n  background: white;\n  color: rgba(27, 37, 57, 0.8);\n  -webkit-text-fill-color: rgba(27, 37, 57, 0.8);\n  opacity: 1;\n  cursor: not-allowed;\n}\n.additional-link[data-v-722ee838] {\n  font-size: 1em;\n  margin-top: 50px;\n  display: block;\n}\n.additional-link b[data-v-722ee838], .additional-link a[data-v-722ee838] {\n  cursor: pointer;\n}\n.additional-link b[data-v-722ee838]:hover, .additional-link a[data-v-722ee838]:hover {\n  text-decoration: underline;\n}\n@media only screen and (max-width: 1024px) {\n.form[data-v-722ee838] {\n    max-width: 100%;\n}\n}\n@media only screen and (max-width: 960px) {\n.form .button[data-v-722ee838] {\n    margin-top: 20px;\n    width: 100%;\n    margin-left: 0;\n    margin-right: 0;\n}\n.form input[data-v-722ee838], .form textarea[data-v-722ee838] {\n    width: 100%;\n    min-width: 100%;\n}\n.form.block-form .block-wrapper[data-v-722ee838] {\n    display: block;\n}\n.form.block-form .block-wrapper label[data-v-722ee838] {\n    width: 100%;\n    padding-right: 0;\n    display: block;\n    margin-bottom: 7px;\n    text-align: left !important;\n    font-size: 0.875em;\n    padding-top: 0;\n}\n.form.block-form .button[data-v-722ee838] {\n    margin-top: 25px;\n    margin-left: 0;\n    margin-right: 0;\n}\n.form.inline-form[data-v-722ee838] {\n    display: block;\n}\n.form.inline-form .input-wrapper .error-message[data-v-722ee838] {\n    position: relative;\n    bottom: 0;\n}\n.form .button[data-v-722ee838] {\n    padding: 14px 32px;\n}\n.single-line-form[data-v-722ee838] {\n    display: block;\n}\n.single-line-form .submit-button[data-v-722ee838] {\n    margin-left: 0;\n    margin-top: 20px;\n    width: 100%;\n}\ntextarea[data-v-722ee838],\n  input[type="password"][data-v-722ee838],\n  input[type="number"][data-v-722ee838],\n  input[type="text"][data-v-722ee838],\n  input[type="email"][data-v-722ee838] {\n    padding: 14px 20px;\n}\n}\n@media only screen and (max-width: 690px) {\n.form.block-form .wrapper-inline[data-v-722ee838] {\n    display: block;\n}\n}\n@media (prefers-color-scheme: dark) {\n.form .input-help[data-v-722ee838] {\n    color: #7d858c;\n}\n.form.block-form .block-wrapper label[data-v-722ee838] {\n    color: #bec6cf;\n}\n.form .inline-wrapper .switch-label .input-label[data-v-722ee838] {\n    color: #bec6cf;\n}\ntextarea[data-v-722ee838],\n  input[type="password"][data-v-722ee838],\n  input[type="text"][data-v-722ee838],\n  input[type="number"][data-v-722ee838],\n  input[type="email"][data-v-722ee838] {\n    border-color: #1e2024;\n    background: #1e2024;\n    color: #bec6cf;\n}\ntextarea[data-v-722ee838]::-webkit-input-placeholder, input[type="password"][data-v-722ee838]::-webkit-input-placeholder, input[type="text"][data-v-722ee838]::-webkit-input-placeholder, input[type="number"][data-v-722ee838]::-webkit-input-placeholder, input[type="email"][data-v-722ee838]::-webkit-input-placeholder {\n    color: #7d858c;\n}\ntextarea[data-v-722ee838]::-moz-placeholder, input[type="password"][data-v-722ee838]::-moz-placeholder, input[type="text"][data-v-722ee838]::-moz-placeholder, input[type="number"][data-v-722ee838]::-moz-placeholder, input[type="email"][data-v-722ee838]::-moz-placeholder {\n    color: #7d858c;\n}\ntextarea[data-v-722ee838]:-ms-input-placeholder, input[type="password"][data-v-722ee838]:-ms-input-placeholder, input[type="text"][data-v-722ee838]:-ms-input-placeholder, input[type="number"][data-v-722ee838]:-ms-input-placeholder, input[type="email"][data-v-722ee838]:-ms-input-placeholder {\n    color: #7d858c;\n}\ntextarea[data-v-722ee838]::-ms-input-placeholder, input[type="password"][data-v-722ee838]::-ms-input-placeholder, input[type="text"][data-v-722ee838]::-ms-input-placeholder, input[type="number"][data-v-722ee838]::-ms-input-placeholder, input[type="email"][data-v-722ee838]::-ms-input-placeholder {\n    color: #7d858c;\n}\ntextarea[data-v-722ee838]::placeholder,\n  input[type="password"][data-v-722ee838]::placeholder,\n  input[type="text"][data-v-722ee838]::placeholder,\n  input[type="number"][data-v-722ee838]::placeholder,\n  input[type="email"][data-v-722ee838]::placeholder {\n    color: #7d858c;\n}\ntextarea[disabled][data-v-722ee838],\n  input[type="password"][disabled][data-v-722ee838],\n  input[type="text"][disabled][data-v-722ee838],\n  input[type="number"][disabled][data-v-722ee838],\n  input[type="email"][disabled][data-v-722ee838] {\n    background: #1e2024;\n    color: rgba(125, 133, 140, 0.8);\n    -webkit-text-fill-color: rgba(125, 133, 140, 0.8);\n}\n.popup-wrapper textarea[data-v-722ee838],\n  .popup-wrapper input[type="password"][data-v-722ee838],\n  .popup-wrapper input[type="text"][data-v-722ee838],\n  .popup-wrapper input[type="number"][data-v-722ee838],\n  .popup-wrapper input[type="email"][data-v-722ee838] {\n    background: #25272c;\n}\n}\n.block-form[data-v-722ee838] {\n  max-width: 100%;\n}\n',""])},"PgG+":function(e,t,n){"use strict";var a=n("jS79");n.n(a).a},UqlB:function(e,t,n){(e.exports=n("I1BE")(!1)).push([e.i,".select[data-v-14b1d6a3] {\n  position: relative;\n  -webkit-user-select: none;\n     -moz-user-select: none;\n      -ms-user-select: none;\n          user-select: none;\n  width: 100%;\n}\n.input-options[data-v-14b1d6a3] {\n  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.12);\n  background: white;\n  border-radius: 8px;\n  position: absolute;\n  overflow: hidden;\n  top: 65px;\n  left: 0;\n  right: 0;\n  z-index: 9;\n  max-height: 295px;\n  overflow-y: auto;\n}\n.input-options .option-item[data-v-14b1d6a3] {\n  padding: 13px 20px;\n  display: block;\n  cursor: pointer;\n}\n.input-options .option-item[data-v-14b1d6a3]:hover {\n  color: #00BC7E;\n  background: #f4f5f6;\n}\n.input-options .option-item[data-v-14b1d6a3]:last-child {\n  border-bottom: none;\n}\n.input-area[data-v-14b1d6a3] {\n  border-width: 1px;\n  border-style: solid;\n  border-color: transparent;\n  justify-content: space-between;\n  box-shadow: 0 1px 5px rgba(0, 0, 0, 0.12);\n  transition: 150ms all ease;\n  align-items: center;\n  border-radius: 8px;\n  padding: 13px 20px;\n  display: flex;\n  outline: 0;\n  width: 100%;\n  cursor: pointer;\n}\n.input-area .chevron[data-v-14b1d6a3] {\n  transition: 150ms all ease;\n}\n.input-area.is-active .chevron[data-v-14b1d6a3] {\n  transform: rotate(180deg);\n}\n.input-area.is-error[data-v-14b1d6a3] {\n  border-color: #fd397a;\n  box-shadow: 0 0 7px rgba(253, 57, 122, 0.3);\n}\n.option-icon[data-v-14b1d6a3] {\n  width: 20px;\n  display: inline-block;\n  font-size: 0.625em;\n}\n.option-icon svg[data-v-14b1d6a3] {\n  margin-top: -4px;\n  vertical-align: middle;\n}\n.option-value[data-v-14b1d6a3] {\n  font-size: 0.875em;\n  font-weight: 700;\n  width: 100%;\n  vertical-align: middle;\n}\n.option-value.placehoder[data-v-14b1d6a3] {\n  color: rgba(27, 37, 57, 0.5);\n}\n.slide-in-enter-active[data-v-14b1d6a3] {\n  transition: all 150ms ease;\n}\n.slide-in-enter[data-v-14b1d6a3] {\n  opacity: 0;\n  transform: translateY(-50px);\n}\n@media (prefers-color-scheme: dark) {\n.input-area[data-v-14b1d6a3] {\n    background: #1e2024;\n    border-color: #1e2024;\n}\n.popup-wrapper .input-area[data-v-14b1d6a3] {\n    background: #25272c;\n}\n.input-options[data-v-14b1d6a3] {\n    background: #1e2024;\n}\n.input-options .option-item[data-v-14b1d6a3] {\n    border-bottom: none;\n}\n.input-options .option-item[data-v-14b1d6a3]:hover {\n    background: #2a2c32;\n}\n.input-options .option-item:hover .option-icon path[data-v-14b1d6a3], .input-options .option-item:hover .option-icon circle[data-v-14b1d6a3] {\n    color: inherit;\n}\n.input-options .option-item[data-v-14b1d6a3]:last-child {\n    border-bottom: none;\n}\n.option-value.placehoder[data-v-14b1d6a3] {\n    color: #7d858c;\n}\n}\n",""])},jS79:function(e,t,n){var a=n("F0K/");"string"==typeof a&&(a=[[e.i,a,""]]);var i={hmr:!0,transform:void 0,insertInto:void 0};n("aET+")(a,i);a.locals&&(e.exports=a.locals)}}]);