(window.webpackJsonp=window.webpackJsonp||[]).push([[49],{154:function(a,n,t){var e=t(428);"string"==typeof e&&(e=[[a.i,e,""]]);var i={hmr:!0,transform:void 0,insertInto:void 0};t(6)(e,i);e.locals&&(a.exports=e.locals)},17:function(a,n,t){"use strict";var e={name:"AuthContent",props:["loading","icon","text"],data:function(){return{isVisible:!1}},created:function(){this.isVisible=this.visible}},i=(t(235),t(0)),o=Object(i.a)(e,(function(){var a=this,n=a.$createElement,t=a._self._c||n;return t("button",{staticClass:"button outline"},[t("span",{staticClass:"text-label"},[a._v(a._s(a.text))]),a._v(" "),a.loading?t("span",{staticClass:"icon"},[t("FontAwesomeIcon",{staticClass:"sync-alt",attrs:{icon:"sync-alt"}})],1):a._e(),a._v(" "),!a.loading&&a.icon?t("span",{staticClass:"icon"},[t("FontAwesomeIcon",{attrs:{icon:a.icon}})],1):a._e()])}),[],!1,null,"59e2dfc0",null);n.a=o.exports},21:function(a,n,t){"use strict";var e={name:"AuthContent",props:["visible","name"],data:function(){return{isVisible:!1}},created:function(){this.isVisible=this.visible}},i=t(0),o=Object(i.a)(e,(function(){var a=this.$createElement,n=this._self._c||a;return this.isVisible?n("div",{staticClass:"auth-form"},[this._t("default")],2):this._e()}),[],!1,null,null,null);n.a=o.exports},22:function(a,n,t){"use strict";var e={name:"AuthContentWrapper"},i=(t(239),t(0)),o=Object(i.a)(e,(function(){var a=this.$createElement;return(this._self._c||a)("div",{attrs:{id:"auth"}},[this._t("default")],2)}),[],!1,null,"31af8372",null);n.a=o.exports},235:function(a,n,t){"use strict";var e=t(57);t.n(e).a},236:function(a,n,t){(a.exports=t(5)(!1)).push([a.i,".button[data-v-59e2dfc0] {\n  cursor: pointer;\n  border-radius: 8px;\n  text-decoration: none;\n  padding: 12px 32px;\n  display: inline-block;\n  margin-left: 15px;\n  margin-right: 15px;\n  white-space: nowrap;\n  transition: 150ms all ease;\n  background: transparent;\n}\n.button .text-label[data-v-59e2dfc0] {\n  transition: 150ms all ease;\n  font-size: 1.0625em;\n  font-weight: 800;\n  line-height: 0;\n}\n.button .icon[data-v-59e2dfc0] {\n  margin-left: 12px;\n  font-size: 1em;\n}\n.button.solid[data-v-59e2dfc0] {\n  background: #00BC7E;\n  border: 2px solid #00BC7E;\n}\n.button.solid .text-label[data-v-59e2dfc0] {\n  color: white;\n}\n.button.outline[data-v-59e2dfc0] {\n  border: 2px solid #1B2539;\n}\n.button.outline .text-label[data-v-59e2dfc0] {\n  color: #1B2539;\n}\n.button.outline .icon path[data-v-59e2dfc0] {\n  fill: #00BC7E;\n}\n.button.outline[data-v-59e2dfc0]:hover {\n  border-color: #00BC7E;\n}\n.button.outline:hover .text-label[data-v-59e2dfc0] {\n  color: #00BC7E;\n}\n@media (prefers-color-scheme: dark) {\n.button.outline[data-v-59e2dfc0] {\n    background: #111314;\n    border-color: #bec6cf;\n}\n.button.outline .text-label[data-v-59e2dfc0] {\n    color: #bec6cf;\n}\n}\n.sync-alt[data-v-59e2dfc0] {\n  -webkit-animation: spin-data-v-59e2dfc0 1s linear infinite;\n          animation: spin-data-v-59e2dfc0 1s linear infinite;\n}\n@-webkit-keyframes spin-data-v-59e2dfc0 {\n0% {\n    transform: rotate(0);\n}\n100% {\n    transform: rotate(360deg);\n}\n}\n@keyframes spin-data-v-59e2dfc0 {\n0% {\n    transform: rotate(0);\n}\n100% {\n    transform: rotate(360deg);\n}\n}\n",""])},239:function(a,n,t){"use strict";var e=t(59);t.n(e).a},240:function(a,n,t){(a.exports=t(5)(!1)).push([a.i,"#auth[data-v-31af8372] {\n  height: 100%;\n  width: 100%;\n  display: table;\n}\n",""])},427:function(a,n,t){"use strict";var e=t(154);t.n(e).a},428:function(a,n,t){(a.exports=t(5)(!1)).push([a.i,'.form.inline-form[data-v-2c28719a] {\n  display: flex;\n  position: relative;\n  justify-content: center;\n  margin: 0 auto;\n}\n.form.inline-form .input-wrapper[data-v-2c28719a] {\n  position: relative;\n}\n.form.inline-form .input-wrapper .error-message[data-v-2c28719a] {\n  position: absolute;\n  left: 0;\n  top: 50px;\n}\n.form.block-form.create-new-password .block-wrapper label[data-v-2c28719a] {\n  width: 280px;\n}\n.form.block-form .block-wrapper[data-v-2c28719a] {\n  display: flex;\n  align-items: center;\n  margin-top: 25px;\n  justify-content: center;\n}\n.form.block-form .block-wrapper[data-v-2c28719a]:first-child {\n  margin-top: 0;\n}\n.form.block-form .block-wrapper label[data-v-2c28719a] {\n  white-space: nowrap;\n  font-size: 1.125em;\n  font-weight: 700;\n  padding-right: 20px;\n  width: 200px;\n  text-align: right !important;\n  color: #1B2539;\n  text-align: right;\n}\n.form.block-form .button[data-v-2c28719a] {\n  margin-top: 50px;\n}\n.input-wrapper .error-message[data-v-2c28719a] {\n  font-size: 0.875em;\n  color: #fd397a;\n  padding-top: 5px;\n  display: block;\n  text-align: left;\n}\ntextarea[data-v-2c28719a] {\n  width: 100%;\n}\ntextarea[data-v-2c28719a],\ninput[type="password"][data-v-2c28719a],\ninput[type="text"][data-v-2c28719a],\ninput[type="email"][data-v-2c28719a] {\n  background: #f4f5f6;\n  border: 1px solid transparent;\n  transition: 0.15s all ease;\n  font-size: 1em;\n  border-radius: 8px;\n  padding: 13px 20px;\n  -webkit-appearance: none;\n     -moz-appearance: none;\n          appearance: none;\n  font-weight: 700;\n  outline: 0;\n  width: 100%;\n}\ntextarea.is-error[data-v-2c28719a],\ninput[type="password"].is-error[data-v-2c28719a],\ninput[type="text"].is-error[data-v-2c28719a],\ninput[type="email"].is-error[data-v-2c28719a] {\n  border-color: #fd397a;\n  box-shadow: 0 0 7px rgba(253, 57, 122, 0.3);\n}\ntextarea[data-v-2c28719a]::-webkit-input-placeholder, input[type="password"][data-v-2c28719a]::-webkit-input-placeholder, input[type="text"][data-v-2c28719a]::-webkit-input-placeholder, input[type="email"][data-v-2c28719a]::-webkit-input-placeholder {\n  color: #A4ADB6;\n  font-size: 1em;\n}\ntextarea[data-v-2c28719a]::-moz-placeholder, input[type="password"][data-v-2c28719a]::-moz-placeholder, input[type="text"][data-v-2c28719a]::-moz-placeholder, input[type="email"][data-v-2c28719a]::-moz-placeholder {\n  color: #A4ADB6;\n  font-size: 1em;\n}\ntextarea[data-v-2c28719a]:-ms-input-placeholder, input[type="password"][data-v-2c28719a]:-ms-input-placeholder, input[type="text"][data-v-2c28719a]:-ms-input-placeholder, input[type="email"][data-v-2c28719a]:-ms-input-placeholder {\n  color: #A4ADB6;\n  font-size: 1em;\n}\ntextarea[data-v-2c28719a]::-ms-input-placeholder, input[type="password"][data-v-2c28719a]::-ms-input-placeholder, input[type="text"][data-v-2c28719a]::-ms-input-placeholder, input[type="email"][data-v-2c28719a]::-ms-input-placeholder {\n  color: #A4ADB6;\n  font-size: 1em;\n}\ntextarea[data-v-2c28719a]::placeholder,\ninput[type="password"][data-v-2c28719a]::placeholder,\ninput[type="text"][data-v-2c28719a]::placeholder,\ninput[type="email"][data-v-2c28719a]::placeholder {\n  color: #A4ADB6;\n  font-size: 1em;\n}\ntextarea[data-v-2c28719a]:focus,\ninput[type="password"][data-v-2c28719a]:focus,\ninput[type="text"][data-v-2c28719a]:focus,\ninput[type="email"][data-v-2c28719a]:focus {\n  border-color: #00BC7E;\n  box-shadow: 0 0 7px rgba(0, 188, 126, 0.3);\n}\ntextarea[disabled][data-v-2c28719a],\ninput[type="password"][disabled][data-v-2c28719a],\ninput[type="text"][disabled][data-v-2c28719a],\ninput[type="email"][disabled][data-v-2c28719a] {\n  color: #A4ADB6;\n  cursor: not-allowed;\n}\n.additional-link[data-v-2c28719a] {\n  font-size: 1em;\n  margin-top: 50px;\n  display: block;\n  color: #1B2539;\n}\n.additional-link b[data-v-2c28719a], .additional-link a[data-v-2c28719a] {\n  color: #00BC7E;\n  cursor: pointer;\n}\n.additional-link b[data-v-2c28719a]:hover, .additional-link a[data-v-2c28719a]:hover {\n  text-decoration: underline;\n}\n@media only screen and (max-width: 960px) {\n.form .button[data-v-2c28719a] {\n    margin-top: 20px;\n    width: 100%;\n    margin-left: 0;\n    margin-right: 0;\n}\n.form input[data-v-2c28719a], .form textarea[data-v-2c28719a] {\n    width: 100%;\n    min-width: 100%;\n}\n.form.block-form .block-wrapper[data-v-2c28719a] {\n    display: block;\n}\n.form.block-form .block-wrapper label[data-v-2c28719a] {\n    width: 100%;\n    padding-right: 0;\n    display: block;\n    margin-bottom: 7px;\n    text-align: left !important;\n    font-size: 0.875em;\n    padding-top: 0;\n}\n.form.block-form .button[data-v-2c28719a] {\n    margin-top: 25px;\n    margin-left: 0;\n    margin-right: 0;\n}\n.form.inline-form[data-v-2c28719a] {\n    display: block;\n}\n.form.inline-form .input-wrapper .error-message[data-v-2c28719a] {\n    position: relative;\n    bottom: 0;\n}\n.form .button[data-v-2c28719a] {\n    padding: 14px 32px;\n}\ntextarea[data-v-2c28719a],\n  input[type="password"][data-v-2c28719a],\n  input[type="text"][data-v-2c28719a],\n  input[type="email"][data-v-2c28719a] {\n    padding: 14px 20px;\n}\n}\n@media (prefers-color-scheme: dark) {\n.form.block-form .block-wrapper label[data-v-2c28719a] {\n    color: #bec6cf;\n}\ntextarea[data-v-2c28719a],\n  input[type="password"][data-v-2c28719a],\n  input[type="text"][data-v-2c28719a],\n  input[type="email"][data-v-2c28719a] {\n    background: #1e2024;\n    color: #bec6cf;\n}\ntextarea[data-v-2c28719a]::-webkit-input-placeholder, input[type="password"][data-v-2c28719a]::-webkit-input-placeholder, input[type="text"][data-v-2c28719a]::-webkit-input-placeholder, input[type="email"][data-v-2c28719a]::-webkit-input-placeholder {\n    color: #7d858c;\n}\ntextarea[data-v-2c28719a]::-moz-placeholder, input[type="password"][data-v-2c28719a]::-moz-placeholder, input[type="text"][data-v-2c28719a]::-moz-placeholder, input[type="email"][data-v-2c28719a]::-moz-placeholder {\n    color: #7d858c;\n}\ntextarea[data-v-2c28719a]:-ms-input-placeholder, input[type="password"][data-v-2c28719a]:-ms-input-placeholder, input[type="text"][data-v-2c28719a]:-ms-input-placeholder, input[type="email"][data-v-2c28719a]:-ms-input-placeholder {\n    color: #7d858c;\n}\ntextarea[data-v-2c28719a]::-ms-input-placeholder, input[type="password"][data-v-2c28719a]::-ms-input-placeholder, input[type="text"][data-v-2c28719a]::-ms-input-placeholder, input[type="email"][data-v-2c28719a]::-ms-input-placeholder {\n    color: #7d858c;\n}\ntextarea[data-v-2c28719a]::placeholder,\n  input[type="password"][data-v-2c28719a]::placeholder,\n  input[type="text"][data-v-2c28719a]::placeholder,\n  input[type="email"][data-v-2c28719a]::placeholder {\n    color: #7d858c;\n}\ntextarea[disabled][data-v-2c28719a],\n  input[type="password"][disabled][data-v-2c28719a],\n  input[type="text"][disabled][data-v-2c28719a],\n  input[type="email"][disabled][data-v-2c28719a] {\n    color: #7d858c;\n}\n}\n.auth-logo-text[data-v-2c28719a] {\n  font-size: 1.375em;\n  font-weight: 800;\n  margin-bottom: 40px;\n  display: block;\n}\n.auth-form[data-v-2c28719a] {\n  text-align: center;\n  max-width: 600px;\n  padding: 25px 20px;\n  display: table-cell;\n  vertical-align: middle;\n}\n.auth-form input[data-v-2c28719a] {\n  min-width: 310px;\n}\n.auth-form .additional-link a[data-v-2c28719a] {\n  font-weight: 700;\n  text-decoration: none;\n}\n.auth-form .user-avatar[data-v-2c28719a] {\n  width: 100px;\n  height: 100px;\n  -o-object-fit: cover;\n     object-fit: cover;\n  margin-bottom: 20px;\n  border-radius: 8px;\n  box-shadow: 0 10px 30px rgba(25, 54, 60, 0.2);\n}\n.auth-form .logo[data-v-2c28719a] {\n  width: 120px;\n  margin-bottom: 20px;\n}\n.auth-form h1[data-v-2c28719a] {\n  font-size: 2.125em;\n  font-weight: 800;\n  line-height: 1.2;\n  margin-bottom: 2px;\n  color: #1B2539;\n}\n.auth-form h2[data-v-2c28719a] {\n  font-size: 1.4375em;\n  font-weight: 500;\n  margin-bottom: 50px;\n  color: #1B2539;\n}\n.auth-form .block-form[data-v-2c28719a] {\n  margin-left: auto;\n  margin-right: auto;\n}\n@media only screen and (min-width: 690px) and (max-width: 960px) {\n.auth-form[data-v-2c28719a] {\n    padding-left: 20%;\n    padding-right: 20%;\n}\n}\n@media only screen and (max-width: 690px) {\n.auth-form[data-v-2c28719a] {\n    width: 100%;\n}\n.auth-form h1[data-v-2c28719a] {\n    font-size: 1.875em;\n}\n.auth-form h2[data-v-2c28719a] {\n    font-size: 1.3125em;\n}\n}\n@media only screen and (max-width: 490px) {\n.auth-form h1[data-v-2c28719a] {\n    font-size: 1.375em;\n}\n.auth-form h2[data-v-2c28719a] {\n    font-size: 1.125em;\n}\n.auth-form input[data-v-2c28719a] {\n    min-width: initial;\n}\n.auth-form .additional-link[data-v-2c28719a] {\n    font-size: 0.9375em;\n}\n}\n@media (prefers-color-scheme: dark) {\n.auth-form h1[data-v-2c28719a], .auth-form h2[data-v-2c28719a], .auth-form .additional-link[data-v-2c28719a] {\n    color: #bec6cf;\n}\n}\n.content-headline[data-v-2c28719a] {\n  max-width: 630px;\n  margin-left: auto;\n  margin-right: auto;\n}\n.auth-form input[data-v-2c28719a] {\n  min-width: initial;\n}\n.duplicator .duplicator-add-button[data-v-2c28719a] {\n  width: 100%;\n}\n.duplicator .duplicator-item[data-v-2c28719a] {\n  box-shadow: 0 1px 5px rgba(0, 0, 0, 0.12);\n  border-radius: 8px;\n  background: white;\n  padding: 25px;\n  margin: 0 -25px 32px;\n  position: relative;\n}\n.duplicator .duplicator-item .duplicator-title[data-v-2c28719a] {\n  font-size: 1.125em;\n  margin-bottom: 20px;\n  display: block;\n  font-weight: 700;\n}\n.duplicator .duplicator-item .delete-item[data-v-2c28719a] {\n  position: absolute;\n  top: 15px;\n  right: 15px;\n  cursor: pointer;\n}\n.duplicator .duplicator-item .delete-item:hover line[data-v-2c28719a] {\n  stroke: #00BC7E;\n}\n.duplicator .duplicator-item input[data-v-2c28719a],\n.duplicator .duplicator-item textarea[data-v-2c28719a] {\n  box-shadow: none;\n  background: #FAFAFA;\n}\n.form[data-v-2c28719a] {\n  max-width: 580px;\n  text-align: left;\n}\n.submit-wrapper[data-v-2c28719a] {\n  text-align: right;\n}\n.submit-wrapper .button[data-v-2c28719a] {\n  margin: 58px 0 50px 0;\n  width: 100%;\n}\n.title-icon[data-v-2c28719a] {\n  margin-bottom: 10px;\n  -webkit-animation: spinner-data-v-2c28719a 5s linear infinite;\n          animation: spinner-data-v-2c28719a 5s linear infinite;\n}\n.title-icon circle[data-v-2c28719a], .title-icon path[data-v-2c28719a] {\n  stroke: #00BC7E;\n}\n@-webkit-keyframes spinner-data-v-2c28719a {\n0% {\n    transform: rotate(0deg);\n}\n100% {\n    transform: rotate(360deg);\n}\n}\n@keyframes spinner-data-v-2c28719a {\n0% {\n    transform: rotate(0deg);\n}\n100% {\n    transform: rotate(360deg);\n}\n}\n@media (prefers-color-scheme: dark) {\n.duplicator .duplicator-item[data-v-2c28719a] {\n    background: #1e2024;\n}\n.duplicator .duplicator-item input[data-v-2c28719a],\n  .duplicator .duplicator-item textarea[data-v-2c28719a] {\n    background: #111314;\n}\n}\n.services[data-v-2c28719a] {\n  margin: 0 auto;\n}\n.service-card[data-v-2c28719a] {\n  text-align: left;\n  box-shadow: 0 5px 30px 5px rgba(61, 78, 253, 0.25);\n  border-radius: 20px;\n  max-width: 415px;\n  display: inline-block;\n  padding: 30px;\n  background: #3a4bff;\n  background: linear-gradient(135deg, #3a4bff 0%, #6772e5 100%);\n  transition: 200ms all ease;\n}\n.service-card[data-v-2c28719a]:hover {\n  cursor: pointer;\n  box-shadow: 0 8px 35px 5px rgba(61, 78, 253, 0.4);\n  transform: scale(1.02);\n}\n.service-card .service-logo[data-v-2c28719a] {\n  margin-bottom: 30px;\n  display: block;\n}\n.service-card .service-content[data-v-2c28719a] {\n  margin-bottom: 65px;\n}\n.service-card .service-content .service-title[data-v-2c28719a] {\n  font-size: 1.125em;\n  font-weight: 700;\n  color: white;\n  margin-bottom: 5px;\n  display: block;\n}\n.service-card .service-content .service-description[data-v-2c28719a] {\n  font-size: 1em;\n  font-weight: 600;\n  color: white;\n  opacity: 0.8;\n}\n.service-card .service-link[data-v-2c28719a] {\n  display: flex;\n  align-items: center;\n}\n.service-card .service-link .icon[data-v-2c28719a] {\n  margin-left: 5px;\n}\n.service-card .service-link .icon polyline[data-v-2c28719a] {\n  stroke: white;\n}\n.service-card .service-link span[data-v-2c28719a] {\n  font-size: 1em;\n  font-weight: 700;\n  color: white;\n}\n.skip-subscription-setup[data-v-2c28719a] {\n  border: none !important;\n}\n.auth-form input[data-v-2c28719a] {\n  min-width: 380px;\n}\n',""])},57:function(a,n,t){var e=t(236);"string"==typeof e&&(e=[[a.i,e,""]]);var i={hmr:!0,transform:void 0,insertInto:void 0};t(6)(e,i);e.locals&&(a.exports=e.locals)},572:function(a,n,t){"use strict";t.r(n);var e=t(22),i=t(8),o=t(21),r=t(17),c=t(1),d=t(10),p=(t(4),{name:"SubscriptionService",components:{AuthContentWrapper:e.a,ValidationProvider:i.ValidationProvider,ValidationObserver:i.ValidationObserver,ChevronRightIcon:c.e,SettingsIcon:c.M,AuthContent:o.a,AuthButton:r.a,required:d.a},data:function(){return{isLoading:!1}},created:function(){this.$scrollTop()}}),l=(t(427),t(0)),s=Object(l.a)(p,(function(){var a=this,n=a.$createElement,t=a._self._c||n;return t("AuthContentWrapper",{ref:"auth"},[t("AuthContent",{attrs:{name:"subscription-service",visible:!0}},[t("div",{staticClass:"content-headline"},[t("settings-icon",{staticClass:"title-icon",attrs:{size:"40"}}),a._v(" "),t("h1",[a._v("Setup Wizard")]),a._v(" "),t("h2",[a._v("You can charge users for storage space by monthly billing plans. Please, select your charging service or skip this step if you don't want charge users:")])],1),a._v(" "),t("div",{staticClass:"services"},[t("router-link",{staticClass:"service-card",attrs:{to:{name:"StripeCredentials"},tag:"div"}},[t("img",{staticClass:"service-logo",attrs:{src:"/assets/icons/stripe-service.svg",alt:"Stripe"}}),a._v(" "),t("div",{staticClass:"service-content"},[t("b",{staticClass:"service-title"},[a._v("Charging with Stripe")]),a._v(" "),t("p",{staticClass:"service-description"},[a._v("You can create custom storage plans and charge your users with monthly subscription.")])]),a._v(" "),t("router-link",{staticClass:"service-link",attrs:{to:{name:"StripeCredentials"}}},[t("span",[a._v("Set Up Billing and Plans With Stripe")]),a._v(" "),t("chevron-right-icon",{staticClass:"icon",attrs:{size:"22"}})],1)],1)],1),a._v(" "),t("p",{staticClass:"additional-link"},[t("router-link",{attrs:{to:{name:"EnvironmentSetup"}}},[t("AuthButton",{staticClass:"skip-subscription-setup",attrs:{icon:"chevron-right",text:"I will set up Stripe later"}})],1)],1)])],1)}),[],!1,null,"2c28719a",null);n.default=s.exports},59:function(a,n,t){var e=t(240);"string"==typeof e&&(e=[[a.i,e,""]]);var i={hmr:!0,transform:void 0,insertInto:void 0};t(6)(e,i);e.locals&&(a.exports=e.locals)}}]);