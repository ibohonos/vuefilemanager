(window.webpackJsonp=window.webpackJsonp||[]).push([[21],{"1L+q":function(a,n,e){"use strict";var t=e("4EzG");e.n(t).a},"3GDE":function(a,n,e){var t=e("UqlB");"string"==typeof t&&(t=[[a.i,t,""]]);var i={hmr:!0,transform:void 0,insertInto:void 0};e("aET+")(t,i);t.locals&&(a.exports=t.locals)},"4EzG":function(a,n,e){var t=e("jexE");"string"==typeof t&&(t=[[a.i,t,""]]);var i={hmr:!0,transform:void 0,insertInto:void 0};e("aET+")(t,i);t.locals&&(a.exports=t.locals)},"4TWA":function(a,n,e){"use strict";var t=e("CjXH"),i={name:"SelectInput",props:["options","isError","default","placeholder"],components:{Edit2Icon:t.r,UserIcon:t.eb,ChevronDownIcon:t.f},data:function(){return{selected:void 0,isOpen:!1}},methods:{selectOption:function(a){this.$emit("input",a.value),this.selected=a,this.isOpen=!1},openMenu:function(){this.isOpen=!this.isOpen}},created:function(){var a=this;this.default&&(this.selected=this.options.find((function(n){return n.value===a.default})))}},o=(e("F+Qg"),e("KHd+")),r=Object(o.a)(i,(function(){var a=this,n=a.$createElement,e=a._self._c||n;return e("div",{staticClass:"select"},[e("div",{staticClass:"input-area",class:{"is-active":a.isOpen,"is-error":a.isError},on:{click:a.openMenu}},[a.selected?e("div",{staticClass:"selected"},[a.selected.icon?e("div",{staticClass:"option-icon"},["user"===a.selected.icon?e("user-icon",{attrs:{size:"14"}}):a._e(),a._v(" "),"user-edit"===a.selected.icon?e("edit2-icon",{attrs:{size:"14"}}):a._e()],1):a._e(),a._v(" "),e("span",{staticClass:"option-value"},[a._v(a._s(a.selected.label))])]):a._e(),a._v(" "),a.selected?a._e():e("div",{staticClass:"not-selected"},[e("span",{staticClass:"option-value placehoder"},[a._v(a._s(a.placeholder))])]),a._v(" "),e("chevron-down-icon",{staticClass:"chevron",attrs:{size:"19"}})],1),a._v(" "),e("transition",{attrs:{name:"slide-in"}},[a.isOpen?e("ul",{staticClass:"input-options"},a._l(a.options,(function(n,t){return e("li",{key:t,staticClass:"option-item",on:{click:function(e){return a.selectOption(n)}}},[n.icon?e("div",{staticClass:"option-icon"},["user"===n.icon?e("user-icon",{attrs:{size:"14"}}):a._e(),a._v(" "),"user-edit"===n.icon?e("edit2-icon",{attrs:{size:"14"}}):a._e()],1):a._e(),a._v(" "),e("span",{staticClass:"option-value"},[a._v(a._s(n.label))])])})),0):a._e()])],1)}),[],!1,null,"14b1d6a3",null);n.a=r.exports},"5b+A":function(a,n,e){"use strict";var t=e("vRyx");e.n(t).a},"9kSd":function(a,n,e){(a.exports=e("I1BE")(!1)).push([a.i,'.form[data-v-7eaabd11] {\n  max-width: 700px;\n}\n.form.inline-form[data-v-7eaabd11] {\n  display: flex;\n  position: relative;\n  justify-content: center;\n  margin: 0 auto;\n}\n.form.inline-form .input-wrapper[data-v-7eaabd11] {\n  position: relative;\n}\n.form.inline-form .input-wrapper .error-message[data-v-7eaabd11] {\n  position: absolute;\n  left: 0;\n  bottom: -25px;\n}\n.form.block-form .wrapper-inline[data-v-7eaabd11] {\n  display: flex;\n  margin: 0 -15px;\n}\n.form.block-form .wrapper-inline .block-wrapper[data-v-7eaabd11] {\n  width: 100%;\n  padding: 0 15px;\n}\n.form.block-form .block-wrapper[data-v-7eaabd11] {\n  margin-bottom: 32px;\n}\n.form.block-form .block-wrapper label[data-v-7eaabd11] {\n  font-size: 0.875em;\n  color: rgba(27, 37, 57, 0.8);\n  font-weight: 700;\n  display: block;\n  margin-bottom: 7px;\n  text-align: left;\n}\n.form.block-form .block-wrapper[data-v-7eaabd11]:last-child {\n  margin-bottom: 0;\n}\n.form.block-form .button[data-v-7eaabd11] {\n  margin-top: 50px;\n}\n.form .inline-wrapper[data-v-7eaabd11] {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n}\n.form .inline-wrapper .switch-label .input-help[data-v-7eaabd11] {\n  padding-top: 0;\n}\n.form .inline-wrapper .switch-label .input-label[data-v-7eaabd11] {\n  font-weight: 700;\n  color: #1B2539;\n  font-size: 1em;\n  margin-bottom: 5px;\n}\n.form .input-help[data-v-7eaabd11] {\n  font-size: 0.75em;\n  color: rgba(27, 37, 57, 0.7);\n  line-height: 1.35;\n  padding-top: 10px;\n  display: block;\n}\n.single-line-form[data-v-7eaabd11] {\n  display: flex;\n}\n.single-line-form .submit-button[data-v-7eaabd11] {\n  margin-left: 20px;\n}\n.error-message[data-v-7eaabd11] {\n  font-size: 0.875em;\n  color: #fd397a;\n  padding-top: 5px;\n  display: block;\n  text-align: left;\n}\ntextarea[data-v-7eaabd11] {\n  width: 100%;\n}\ninput[type="color"][data-v-7eaabd11] {\n  width: 38px;\n  height: 40px;\n  border: none;\n  outline: none;\n  background: none;\n}\ntextarea[data-v-7eaabd11],\ninput[type="password"][data-v-7eaabd11],\ninput[type="text"][data-v-7eaabd11],\ninput[type="number"][data-v-7eaabd11],\ninput[type="email"][data-v-7eaabd11] {\n  border: 1px solid transparent;\n  transition: 150ms all ease;\n  font-size: 1em;\n  border-radius: 8px;\n  padding: 13px 20px;\n  -webkit-appearance: none;\n     -moz-appearance: none;\n          appearance: none;\n  font-weight: 700;\n  outline: 0;\n  width: 100%;\n  box-shadow: 0 1px 5px rgba(0, 0, 0, 0.12);\n}\ntextarea.is-error[data-v-7eaabd11],\ninput[type="password"].is-error[data-v-7eaabd11],\ninput[type="text"].is-error[data-v-7eaabd11],\ninput[type="number"].is-error[data-v-7eaabd11],\ninput[type="email"].is-error[data-v-7eaabd11] {\n  border-color: #fd397a;\n}\ntextarea[data-v-7eaabd11]::-webkit-input-placeholder, input[type="password"][data-v-7eaabd11]::-webkit-input-placeholder, input[type="text"][data-v-7eaabd11]::-webkit-input-placeholder, input[type="number"][data-v-7eaabd11]::-webkit-input-placeholder, input[type="email"][data-v-7eaabd11]::-webkit-input-placeholder {\n  color: rgba(27, 37, 57, 0.5);\n  font-size: 0.9375em;\n}\ntextarea[data-v-7eaabd11]::-moz-placeholder, input[type="password"][data-v-7eaabd11]::-moz-placeholder, input[type="text"][data-v-7eaabd11]::-moz-placeholder, input[type="number"][data-v-7eaabd11]::-moz-placeholder, input[type="email"][data-v-7eaabd11]::-moz-placeholder {\n  color: rgba(27, 37, 57, 0.5);\n  font-size: 0.9375em;\n}\ntextarea[data-v-7eaabd11]:-ms-input-placeholder, input[type="password"][data-v-7eaabd11]:-ms-input-placeholder, input[type="text"][data-v-7eaabd11]:-ms-input-placeholder, input[type="number"][data-v-7eaabd11]:-ms-input-placeholder, input[type="email"][data-v-7eaabd11]:-ms-input-placeholder {\n  color: rgba(27, 37, 57, 0.5);\n  font-size: 0.9375em;\n}\ntextarea[data-v-7eaabd11]::-ms-input-placeholder, input[type="password"][data-v-7eaabd11]::-ms-input-placeholder, input[type="text"][data-v-7eaabd11]::-ms-input-placeholder, input[type="number"][data-v-7eaabd11]::-ms-input-placeholder, input[type="email"][data-v-7eaabd11]::-ms-input-placeholder {\n  color: rgba(27, 37, 57, 0.5);\n  font-size: 0.9375em;\n}\ntextarea[data-v-7eaabd11]::placeholder,\ninput[type="password"][data-v-7eaabd11]::placeholder,\ninput[type="text"][data-v-7eaabd11]::placeholder,\ninput[type="number"][data-v-7eaabd11]::placeholder,\ninput[type="email"][data-v-7eaabd11]::placeholder {\n  color: rgba(27, 37, 57, 0.5);\n  font-size: 0.9375em;\n}\ntextarea[disabled][data-v-7eaabd11],\ninput[type="password"][disabled][data-v-7eaabd11],\ninput[type="text"][disabled][data-v-7eaabd11],\ninput[type="number"][disabled][data-v-7eaabd11],\ninput[type="email"][disabled][data-v-7eaabd11] {\n  background: white;\n  color: rgba(27, 37, 57, 0.8);\n  -webkit-text-fill-color: rgba(27, 37, 57, 0.8);\n  opacity: 1;\n  cursor: not-allowed;\n}\n.additional-link[data-v-7eaabd11] {\n  font-size: 1em;\n  margin-top: 50px;\n  display: block;\n}\n.additional-link b[data-v-7eaabd11], .additional-link a[data-v-7eaabd11] {\n  cursor: pointer;\n}\n.additional-link b[data-v-7eaabd11]:hover, .additional-link a[data-v-7eaabd11]:hover {\n  text-decoration: underline;\n}\n@media only screen and (max-width: 1024px) {\n.form[data-v-7eaabd11] {\n    max-width: 100%;\n}\n}\n@media only screen and (max-width: 960px) {\n.form .button[data-v-7eaabd11] {\n    margin-top: 20px;\n    width: 100%;\n    margin-left: 0;\n    margin-right: 0;\n}\n.form input[data-v-7eaabd11], .form textarea[data-v-7eaabd11] {\n    width: 100%;\n    min-width: 100%;\n}\n.form.block-form .block-wrapper[data-v-7eaabd11] {\n    display: block;\n}\n.form.block-form .block-wrapper label[data-v-7eaabd11] {\n    width: 100%;\n    padding-right: 0;\n    display: block;\n    margin-bottom: 7px;\n    text-align: left !important;\n    font-size: 0.875em;\n    padding-top: 0;\n}\n.form.block-form .button[data-v-7eaabd11] {\n    margin-top: 25px;\n    margin-left: 0;\n    margin-right: 0;\n}\n.form.inline-form[data-v-7eaabd11] {\n    display: block;\n}\n.form.inline-form .input-wrapper .error-message[data-v-7eaabd11] {\n    position: relative;\n    bottom: 0;\n}\n.form .button[data-v-7eaabd11] {\n    padding: 14px 32px;\n}\n.single-line-form[data-v-7eaabd11] {\n    display: block;\n}\n.single-line-form .submit-button[data-v-7eaabd11] {\n    margin-left: 0;\n    margin-top: 20px;\n    width: 100%;\n}\ntextarea[data-v-7eaabd11],\n  input[type="password"][data-v-7eaabd11],\n  input[type="number"][data-v-7eaabd11],\n  input[type="text"][data-v-7eaabd11],\n  input[type="email"][data-v-7eaabd11] {\n    padding: 14px 20px;\n}\n}\n@media only screen and (max-width: 690px) {\n.form.block-form .wrapper-inline[data-v-7eaabd11] {\n    display: block;\n}\n}\n@media (prefers-color-scheme: dark) {\n.form .input-help[data-v-7eaabd11] {\n    color: #7d858c;\n}\n.form.block-form .block-wrapper label[data-v-7eaabd11] {\n    color: #bec6cf;\n}\n.form .inline-wrapper .switch-label .input-label[data-v-7eaabd11] {\n    color: #bec6cf;\n}\ntextarea[data-v-7eaabd11],\n  input[type="password"][data-v-7eaabd11],\n  input[type="text"][data-v-7eaabd11],\n  input[type="number"][data-v-7eaabd11],\n  input[type="email"][data-v-7eaabd11] {\n    border-color: #1e2024;\n    background: #1e2024;\n    color: #bec6cf;\n}\ntextarea[data-v-7eaabd11]::-webkit-input-placeholder, input[type="password"][data-v-7eaabd11]::-webkit-input-placeholder, input[type="text"][data-v-7eaabd11]::-webkit-input-placeholder, input[type="number"][data-v-7eaabd11]::-webkit-input-placeholder, input[type="email"][data-v-7eaabd11]::-webkit-input-placeholder {\n    color: #7d858c;\n}\ntextarea[data-v-7eaabd11]::-moz-placeholder, input[type="password"][data-v-7eaabd11]::-moz-placeholder, input[type="text"][data-v-7eaabd11]::-moz-placeholder, input[type="number"][data-v-7eaabd11]::-moz-placeholder, input[type="email"][data-v-7eaabd11]::-moz-placeholder {\n    color: #7d858c;\n}\ntextarea[data-v-7eaabd11]:-ms-input-placeholder, input[type="password"][data-v-7eaabd11]:-ms-input-placeholder, input[type="text"][data-v-7eaabd11]:-ms-input-placeholder, input[type="number"][data-v-7eaabd11]:-ms-input-placeholder, input[type="email"][data-v-7eaabd11]:-ms-input-placeholder {\n    color: #7d858c;\n}\ntextarea[data-v-7eaabd11]::-ms-input-placeholder, input[type="password"][data-v-7eaabd11]::-ms-input-placeholder, input[type="text"][data-v-7eaabd11]::-ms-input-placeholder, input[type="number"][data-v-7eaabd11]::-ms-input-placeholder, input[type="email"][data-v-7eaabd11]::-ms-input-placeholder {\n    color: #7d858c;\n}\ntextarea[data-v-7eaabd11]::placeholder,\n  input[type="password"][data-v-7eaabd11]::placeholder,\n  input[type="text"][data-v-7eaabd11]::placeholder,\n  input[type="number"][data-v-7eaabd11]::placeholder,\n  input[type="email"][data-v-7eaabd11]::placeholder {\n    color: #7d858c;\n}\ntextarea[disabled][data-v-7eaabd11],\n  input[type="password"][disabled][data-v-7eaabd11],\n  input[type="text"][disabled][data-v-7eaabd11],\n  input[type="number"][disabled][data-v-7eaabd11],\n  input[type="email"][disabled][data-v-7eaabd11] {\n    background: #1e2024;\n    color: rgba(125, 133, 140, 0.8);\n    -webkit-text-fill-color: rgba(125, 133, 140, 0.8);\n}\n.popup-wrapper textarea[data-v-7eaabd11],\n  .popup-wrapper input[type="password"][data-v-7eaabd11],\n  .popup-wrapper input[type="text"][data-v-7eaabd11],\n  .popup-wrapper input[type="number"][data-v-7eaabd11],\n  .popup-wrapper input[type="email"][data-v-7eaabd11] {\n    background: #25272c;\n}\n}\n.auth-logo-text[data-v-7eaabd11] {\n  font-size: 1.375em;\n  font-weight: 800;\n  margin-bottom: 40px;\n  display: block;\n}\n.auth-form[data-v-7eaabd11] {\n  text-align: center;\n  max-width: 600px;\n  padding: 25px 20px;\n  display: table-cell;\n  vertical-align: middle;\n}\n.auth-form input[data-v-7eaabd11] {\n  min-width: 310px;\n}\n.auth-form .additional-link a[data-v-7eaabd11] {\n  font-weight: 700;\n  text-decoration: none;\n}\n.auth-form .user-avatar[data-v-7eaabd11] {\n  width: 100px;\n  height: 100px;\n  -o-object-fit: cover;\n     object-fit: cover;\n  margin-bottom: 20px;\n  border-radius: 8px;\n  box-shadow: 0 10px 30px rgba(25, 54, 60, 0.2);\n}\n.auth-form .logo[data-v-7eaabd11] {\n  width: 120px;\n  margin-bottom: 20px;\n}\n.auth-form h1[data-v-7eaabd11] {\n  font-size: 2.125em;\n  font-weight: 800;\n  line-height: 1.2;\n  margin-bottom: 2px;\n  color: #1B2539;\n}\n.auth-form h2[data-v-7eaabd11] {\n  font-size: 1.4375em;\n  font-weight: 500;\n  margin-bottom: 50px;\n  color: #1B2539;\n}\n.auth-form .block-form[data-v-7eaabd11] {\n  margin-left: auto;\n  margin-right: auto;\n}\n@media only screen and (min-width: 690px) and (max-width: 960px) {\n.auth-form[data-v-7eaabd11] {\n    padding-left: 20%;\n    padding-right: 20%;\n}\n}\n@media only screen and (max-width: 690px) {\n.auth-form[data-v-7eaabd11] {\n    width: 100%;\n}\n.auth-form h1[data-v-7eaabd11] {\n    font-size: 1.875em;\n}\n.auth-form h2[data-v-7eaabd11] {\n    font-size: 1.3125em;\n}\n}\n@media only screen and (max-width: 490px) {\n.auth-form h1[data-v-7eaabd11] {\n    font-size: 1.375em;\n}\n.auth-form h2[data-v-7eaabd11] {\n    font-size: 1.125em;\n}\n.auth-form input[data-v-7eaabd11] {\n    min-width: initial;\n}\n.auth-form .additional-link[data-v-7eaabd11] {\n    font-size: 0.9375em;\n}\n}\n@media (prefers-color-scheme: dark) {\n.auth-form h1[data-v-7eaabd11], .auth-form h2[data-v-7eaabd11], .auth-form .additional-link[data-v-7eaabd11] {\n    color: #bec6cf;\n}\n}\n.content-headline[data-v-7eaabd11] {\n  max-width: 630px;\n  margin-left: auto;\n  margin-right: auto;\n}\n.auth-form input[data-v-7eaabd11] {\n  min-width: initial;\n}\n.duplicator .duplicator-add-button[data-v-7eaabd11] {\n  width: 100%;\n}\n.duplicator .duplicator-item[data-v-7eaabd11] {\n  box-shadow: 0 1px 5px rgba(0, 0, 0, 0.12);\n  border-radius: 8px;\n  background: white;\n  padding: 25px;\n  margin: 0 -25px 32px;\n  position: relative;\n}\n.duplicator .duplicator-item .duplicator-title[data-v-7eaabd11] {\n  font-size: 1.125em;\n  margin-bottom: 20px;\n  display: block;\n  font-weight: 700;\n}\n.duplicator .duplicator-item .delete-item[data-v-7eaabd11] {\n  position: absolute;\n  top: 15px;\n  right: 15px;\n  cursor: pointer;\n}\n.duplicator .duplicator-item .delete-item:hover line[data-v-7eaabd11] {\n  stroke: #00BC7E;\n}\n.duplicator .duplicator-item input[data-v-7eaabd11],\n.duplicator .duplicator-item textarea[data-v-7eaabd11] {\n  box-shadow: none;\n  background: #FAFAFA;\n}\n.form[data-v-7eaabd11] {\n  max-width: 580px;\n  text-align: left;\n}\n.submit-wrapper[data-v-7eaabd11] {\n  text-align: right;\n}\n.submit-wrapper .button[data-v-7eaabd11] {\n  margin: 58px 0 50px 0;\n  width: 100%;\n}\n.title-icon[data-v-7eaabd11] {\n  margin-bottom: 10px;\n  -webkit-animation: spinner-data-v-7eaabd11 5s linear infinite;\n          animation: spinner-data-v-7eaabd11 5s linear infinite;\n}\n.title-icon circle[data-v-7eaabd11], .title-icon path[data-v-7eaabd11] {\n  color: inherit;\n}\n@-webkit-keyframes spinner-data-v-7eaabd11 {\n0% {\n    transform: rotate(0deg);\n}\n100% {\n    transform: rotate(360deg);\n}\n}\n@keyframes spinner-data-v-7eaabd11 {\n0% {\n    transform: rotate(0deg);\n}\n100% {\n    transform: rotate(360deg);\n}\n}\n@media (prefers-color-scheme: dark) {\n.duplicator .duplicator-item[data-v-7eaabd11] {\n    background: #1e2024;\n}\n.duplicator .duplicator-item input[data-v-7eaabd11],\n  .duplicator .duplicator-item textarea[data-v-7eaabd11] {\n    background: #141414;\n}\n}\n',""])},"F+Qg":function(a,n,e){"use strict";var t=e("3GDE");e.n(t).a},G6zf:function(a,n,e){"use strict";e.r(n);var t=e("o0o1"),i=e.n(t),o=e("A5+z"),r=e("bDRN"),l=e("4TWA"),d=e("eZ9V"),p=e("KnjL"),s=e("j8qy"),c=e("ASoH"),b=e("CjXH"),u=e("TJPC"),m=e("L2JU"),v=e("vDqi"),f=e.n(v);function g(a,n,e,t,i,o,r){try{var l=a[o](r),d=l.value}catch(a){return void e(a)}l.done?n(d):Promise.resolve(d).then(t,i)}function h(a,n){var e=Object.keys(a);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(a);n&&(t=t.filter((function(n){return Object.getOwnPropertyDescriptor(a,n).enumerable}))),e.push.apply(e,t)}return e}function x(a,n,e){return n in a?Object.defineProperty(a,n,{value:e,enumerable:!0,configurable:!0,writable:!0}):a[n]=e,a}var y={name:"BillingsDetail",components:{AuthContentWrapper:r.a,ValidationProvider:o.ValidationProvider,ValidationObserver:o.ValidationObserver,SettingsIcon:b.W,SelectInput:l.a,AuthContent:s.a,AuthButton:c.a,FormLabel:d.a,required:u.a,InfoBox:p.a},computed:function(a){for(var n=1;n<arguments.length;n++){var e=null!=arguments[n]?arguments[n]:{};n%2?h(Object(e),!0).forEach((function(n){x(a,n,e[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(a,Object.getOwnPropertyDescriptors(e)):h(Object(e)).forEach((function(n){Object.defineProperty(a,n,Object.getOwnPropertyDescriptor(e,n))}))}return a}({},Object(m.b)(["countries"])),data:function(){return{isLoading:!1,billingInformation:{billing_phone_number:"",billing_postal_code:"",billing_vat_number:"",billing_address:"",billing_country:"",billing_state:"",billing_city:"",billing_name:""}}},methods:{billingInformationSubmit:function(){var a,n=this;return(a=i.a.mark((function a(){return i.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return a.next=2,n.$refs.billingInformation.validate();case 2:if(a.sent){a.next=5;break}return a.abrupt("return");case 5:n.isLoading=!0,f.a.post("/api/setup/stripe-billings",n.billingInformation).then((function(){n.$router.push({name:"SubscriptionPlans"})})).catch((function(a){})).finally((function(){n.isLoading=!1}));case 7:case"end":return a.stop()}}),a)})),function(){var n=this,e=arguments;return new Promise((function(t,i){var o=a.apply(n,e);function r(a){g(o,t,i,r,l,"next",a)}function l(a){g(o,t,i,r,l,"throw",a)}r(void 0)}))})()}},created:function(){this.$scrollTop()}},w=(e("5b+A"),e("KHd+")),_=Object(w.a)(y,(function(){var a=this,n=a.$createElement,e=a._self._c||n;return e("AuthContentWrapper",{ref:"auth"},[e("AuthContent",{attrs:{name:"database-credentials",visible:!0}},[e("div",{staticClass:"content-headline"},[e("settings-icon",{staticClass:"title-icon",attrs:{size:"40"}}),a._v(" "),e("h1",[a._v("Setup Wizard")]),a._v(" "),e("h2",[a._v("Set up your billing information.")])],1),a._v(" "),e("ValidationObserver",{ref:"billingInformation",staticClass:"form block-form",attrs:{tag:"form"},on:{submit:function(n){return n.preventDefault(),a.billingInformationSubmit(n)}},scopedSlots:a._u([{key:"default",fn:function(n){n.invalid;return[e("FormLabel",[a._v("Company Information")]),a._v(" "),e("div",{staticClass:"block-wrapper"},[e("label",[a._v("Company Name:")]),a._v(" "),e("ValidationProvider",{staticClass:"input-wrapper",attrs:{tag:"div",mode:"passive",name:"Billing Name",rules:"required"},scopedSlots:a._u([{key:"default",fn:function(n){var t=n.errors;return[e("input",{directives:[{name:"model",rawName:"v-model",value:a.billingInformation.billing_name,expression:"billingInformation.billing_name"}],class:{"is-error":t[0]},attrs:{placeholder:"Type your company name",type:"text"},domProps:{value:a.billingInformation.billing_name},on:{input:function(n){n.target.composing||a.$set(a.billingInformation,"billing_name",n.target.value)}}}),a._v(" "),t[0]?e("span",{staticClass:"error-message"},[a._v(a._s(t[0]))]):a._e()]}}],null,!0)})],1),a._v(" "),e("div",{staticClass:"block-wrapper"},[e("label",[a._v("VAT Number:")]),a._v(" "),e("ValidationProvider",{staticClass:"input-wrapper",attrs:{tag:"div",mode:"passive",name:"Billing Vat Number",rules:"required"},scopedSlots:a._u([{key:"default",fn:function(n){var t=n.errors;return[e("input",{directives:[{name:"model",rawName:"v-model",value:a.billingInformation.billing_vat_number,expression:"billingInformation.billing_vat_number"}],class:{"is-error":t[0]},attrs:{placeholder:"Type your VAT number",type:"text"},domProps:{value:a.billingInformation.billing_vat_number},on:{input:function(n){n.target.composing||a.$set(a.billingInformation,"billing_vat_number",n.target.value)}}}),a._v(" "),t[0]?e("span",{staticClass:"error-message"},[a._v(a._s(t[0]))]):a._e()]}}],null,!0)})],1),a._v(" "),e("FormLabel",{staticClass:"mt-70"},[a._v("Billing Information")]),a._v(" "),e("div",{staticClass:"block-wrapper"},[e("label",[a._v("Billing Country:")]),a._v(" "),e("ValidationProvider",{staticClass:"input-wrapper",attrs:{tag:"div",mode:"passive",name:"Billing Country",rules:"required"},scopedSlots:a._u([{key:"default",fn:function(n){var t=n.errors;return[e("SelectInput",{attrs:{options:a.countries,placeholder:"Select your billing country",isError:t[0]},model:{value:a.billingInformation.billing_country,callback:function(n){a.$set(a.billingInformation,"billing_country",n)},expression:"billingInformation.billing_country"}}),a._v(" "),t[0]?e("span",{staticClass:"error-message"},[a._v(a._s(t[0]))]):a._e()]}}],null,!0)})],1),a._v(" "),e("div",{staticClass:"block-wrapper"},[e("label",[a._v("Billing Address:")]),a._v(" "),e("ValidationProvider",{staticClass:"input-wrapper",attrs:{tag:"div",mode:"passive",name:"Billing Address",rules:"required"},scopedSlots:a._u([{key:"default",fn:function(n){var t=n.errors;return[e("input",{directives:[{name:"model",rawName:"v-model",value:a.billingInformation.billing_address,expression:"billingInformation.billing_address"}],class:{"is-error":t[0]},attrs:{placeholder:"Type your billing address",type:"text"},domProps:{value:a.billingInformation.billing_address},on:{input:function(n){n.target.composing||a.$set(a.billingInformation,"billing_address",n.target.value)}}}),a._v(" "),t[0]?e("span",{staticClass:"error-message"},[a._v(a._s(t[0]))]):a._e()]}}],null,!0)})],1),a._v(" "),e("div",{staticClass:"wrapper-inline"},[e("div",{staticClass:"block-wrapper"},[e("label",[a._v("Billing City:")]),a._v(" "),e("ValidationProvider",{staticClass:"input-wrapper",attrs:{tag:"div",mode:"passive",name:"Billing City",rules:"required"},scopedSlots:a._u([{key:"default",fn:function(n){var t=n.errors;return[e("input",{directives:[{name:"model",rawName:"v-model",value:a.billingInformation.billing_city,expression:"billingInformation.billing_city"}],class:{"is-error":t[0]},attrs:{placeholder:"Type your billing city",type:"text"},domProps:{value:a.billingInformation.billing_city},on:{input:function(n){n.target.composing||a.$set(a.billingInformation,"billing_city",n.target.value)}}}),a._v(" "),t[0]?e("span",{staticClass:"error-message"},[a._v(a._s(t[0]))]):a._e()]}}],null,!0)})],1),a._v(" "),e("div",{staticClass:"block-wrapper"},[e("label",[a._v("Billing Postal Code:")]),a._v(" "),e("ValidationProvider",{staticClass:"input-wrapper",attrs:{tag:"div",mode:"passive",name:"Billing Postal Code",rules:"required"},scopedSlots:a._u([{key:"default",fn:function(n){var t=n.errors;return[e("input",{directives:[{name:"model",rawName:"v-model",value:a.billingInformation.billing_postal_code,expression:"billingInformation.billing_postal_code"}],class:{"is-error":t[0]},attrs:{placeholder:"Type your billing postal code",type:"text"},domProps:{value:a.billingInformation.billing_postal_code},on:{input:function(n){n.target.composing||a.$set(a.billingInformation,"billing_postal_code",n.target.value)}}}),a._v(" "),t[0]?e("span",{staticClass:"error-message"},[a._v(a._s(t[0]))]):a._e()]}}],null,!0)})],1)]),a._v(" "),e("div",{staticClass:"block-wrapper"},[e("label",[a._v("Billing State:")]),a._v(" "),e("ValidationProvider",{staticClass:"input-wrapper",attrs:{tag:"div",mode:"passive",name:"Billing State",rules:"required"},scopedSlots:a._u([{key:"default",fn:function(n){var t=n.errors;return[e("input",{directives:[{name:"model",rawName:"v-model",value:a.billingInformation.billing_state,expression:"billingInformation.billing_state"}],class:{"is-error":t[0]},attrs:{placeholder:"Type your billing state",type:"text"},domProps:{value:a.billingInformation.billing_state},on:{input:function(n){n.target.composing||a.$set(a.billingInformation,"billing_state",n.target.value)}}}),a._v(" "),t[0]?e("span",{staticClass:"error-message"},[a._v(a._s(t[0]))]):a._e()]}}],null,!0)})],1),a._v(" "),e("div",{staticClass:"block-wrapper"},[e("label",[a._v("Billing Phone Number (optional):")]),a._v(" "),e("ValidationProvider",{staticClass:"input-wrapper",attrs:{tag:"div",mode:"passive",name:"Billing Phone Number"},scopedSlots:a._u([{key:"default",fn:function(n){var t=n.errors;return[e("input",{directives:[{name:"model",rawName:"v-model",value:a.billingInformation.billing_phone_number,expression:"billingInformation.billing_phone_number"}],class:{"is-error":t[0]},attrs:{placeholder:"Type your billing phone number",type:"text"},domProps:{value:a.billingInformation.billing_phone_number},on:{input:function(n){n.target.composing||a.$set(a.billingInformation,"billing_phone_number",n.target.value)}}}),a._v(" "),t[0]?e("span",{staticClass:"error-message"},[a._v(a._s(t[0]))]):a._e()]}}],null,!0)})],1),a._v(" "),e("div",{staticClass:"submit-wrapper"},[e("AuthButton",{attrs:{icon:"chevron-right",text:"Save and Create Plans",loading:a.isLoading,disabled:a.isLoading}})],1)]}}])})],1)],1)}),[],!1,null,"7eaabd11",null);n.default=_.exports},KnjL:function(a,n,e){"use strict";var t={name:"InfoBox",props:["type"]},i=(e("pFam"),e("KHd+")),o=Object(i.a)(t,(function(){var a=this.$createElement;return(this._self._c||a)("div",{staticClass:"info-box",class:this.type},[this._t("default")],2)}),[],!1,null,"8e7c42f6",null);n.a=o.exports},"Qqv+":function(a,n,e){var t=e("biqn");"string"==typeof t&&(t=[[a.i,t,""]]);var i={hmr:!0,transform:void 0,insertInto:void 0};e("aET+")(t,i);t.locals&&(a.exports=t.locals)},UqlB:function(a,n,e){(a.exports=e("I1BE")(!1)).push([a.i,".select[data-v-14b1d6a3] {\n  position: relative;\n  -webkit-user-select: none;\n     -moz-user-select: none;\n      -ms-user-select: none;\n          user-select: none;\n  width: 100%;\n}\n.input-options[data-v-14b1d6a3] {\n  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.12);\n  background: white;\n  border-radius: 8px;\n  position: absolute;\n  overflow: hidden;\n  top: 65px;\n  left: 0;\n  right: 0;\n  z-index: 9;\n  max-height: 295px;\n  overflow-y: auto;\n}\n.input-options .option-item[data-v-14b1d6a3] {\n  padding: 13px 20px;\n  display: block;\n  cursor: pointer;\n}\n.input-options .option-item[data-v-14b1d6a3]:hover {\n  color: #00BC7E;\n  background: #f4f5f6;\n}\n.input-options .option-item[data-v-14b1d6a3]:last-child {\n  border-bottom: none;\n}\n.input-area[data-v-14b1d6a3] {\n  border-width: 1px;\n  border-style: solid;\n  border-color: transparent;\n  justify-content: space-between;\n  box-shadow: 0 1px 5px rgba(0, 0, 0, 0.12);\n  transition: 150ms all ease;\n  align-items: center;\n  border-radius: 8px;\n  padding: 13px 20px;\n  display: flex;\n  outline: 0;\n  width: 100%;\n  cursor: pointer;\n}\n.input-area .chevron[data-v-14b1d6a3] {\n  transition: 150ms all ease;\n}\n.input-area.is-active .chevron[data-v-14b1d6a3] {\n  transform: rotate(180deg);\n}\n.input-area.is-error[data-v-14b1d6a3] {\n  border-color: #fd397a;\n  box-shadow: 0 0 7px rgba(253, 57, 122, 0.3);\n}\n.option-icon[data-v-14b1d6a3] {\n  width: 20px;\n  display: inline-block;\n  font-size: 0.625em;\n}\n.option-icon svg[data-v-14b1d6a3] {\n  margin-top: -4px;\n  vertical-align: middle;\n}\n.option-value[data-v-14b1d6a3] {\n  font-size: 0.875em;\n  font-weight: 700;\n  width: 100%;\n  vertical-align: middle;\n}\n.option-value.placehoder[data-v-14b1d6a3] {\n  color: rgba(27, 37, 57, 0.5);\n}\n.slide-in-enter-active[data-v-14b1d6a3] {\n  transition: all 150ms ease;\n}\n.slide-in-enter[data-v-14b1d6a3] {\n  opacity: 0;\n  transform: translateY(-50px);\n}\n@media (prefers-color-scheme: dark) {\n.input-area[data-v-14b1d6a3] {\n    background: #1e2024;\n    border-color: #1e2024;\n}\n.popup-wrapper .input-area[data-v-14b1d6a3] {\n    background: #25272c;\n}\n.input-options[data-v-14b1d6a3] {\n    background: #1e2024;\n}\n.input-options .option-item[data-v-14b1d6a3] {\n    border-bottom: none;\n}\n.input-options .option-item[data-v-14b1d6a3]:hover {\n    background: #2a2c32;\n}\n.input-options .option-item:hover .option-icon path[data-v-14b1d6a3], .input-options .option-item:hover .option-icon circle[data-v-14b1d6a3] {\n    color: inherit;\n}\n.input-options .option-item[data-v-14b1d6a3]:last-child {\n    border-bottom: none;\n}\n.option-value.placehoder[data-v-14b1d6a3] {\n    color: #7d858c;\n}\n}\n",""])},biqn:function(a,n,e){(a.exports=e("I1BE")(!1)).push([a.i,".info-box[data-v-8e7c42f6] {\n  padding: 20px;\n  border-radius: 8px;\n  margin-bottom: 32px;\n  background: #f4f5f6;\n  text-align: left;\n}\n.info-box.error[data-v-8e7c42f6] {\n  background: rgba(253, 57, 122, 0.1);\n}\n.info-box.error p[data-v-8e7c42f6], .info-box.error a[data-v-8e7c42f6] {\n  color: #fd397a;\n}\n.info-box.error a[data-v-8e7c42f6] {\n  text-decoration: underline;\n}\n.info-box p[data-v-8e7c42f6] {\n  font-size: 15px;\n  line-height: 1.6;\n  word-break: break-word;\n  font-weight: 600;\n}\n.info-box p[data-v-8e7c42f6] a {\n  font-size: 15px;\n}\n.info-box p[data-v-8e7c42f6] b {\n  font-size: 15px;\n  font-weight: 700;\n}\n.info-box b[data-v-8e7c42f6] {\n  font-weight: 700;\n}\n.info-box a[data-v-8e7c42f6] {\n  font-weight: 700;\n  font-size: 0.9375em;\n  line-height: 1.6;\n}\n.info-box ul[data-v-8e7c42f6] {\n  margin-top: 15px;\n  display: block;\n}\n.info-box ul li[data-v-8e7c42f6] {\n  display: block;\n}\n.info-box ul li a[data-v-8e7c42f6] {\n  display: block;\n}\n@media only screen and (max-width: 690px) {\n.info-box[data-v-8e7c42f6] {\n    padding: 15px;\n}\n}\n@media (prefers-color-scheme: dark) {\n.info-box[data-v-8e7c42f6] {\n    background: #1e2024;\n}\n.info-box p[data-v-8e7c42f6] {\n    color: #bec6cf;\n}\n.info-box ul li[data-v-8e7c42f6] {\n    color: #bec6cf;\n}\n}\n",""])},eZ9V:function(a,n,e){"use strict";var t=e("CjXH"),i={name:"FormLabel",props:["icon"],components:{Edit2Icon:t.r,SettingsIcon:t.W}},o=(e("1L+q"),e("KHd+")),r=Object(o.a)(i,(function(){var a=this.$createElement,n=this._self._c||a;return n("div",{staticClass:"form-label"},[this.icon?this._e():n("edit-2-icon",{staticClass:"icon text-theme",attrs:{size:"22"}}),this._v(" "),"settings"===this.icon?n("settings-icon",{staticClass:"icon text-theme",attrs:{size:"22"}}):this._e(),this._v(" "),n("b",{staticClass:"label"},[this._t("default")],2)],1)}),[],!1,null,"10bcab7e",null);n.a=r.exports},jexE:function(a,n,e){(a.exports=e("I1BE")(!1)).push([a.i,".form-label[data-v-10bcab7e] {\n  display: flex;\n  align-items: center;\n  margin-bottom: 30px;\n}\n.form-label .icon[data-v-10bcab7e] {\n  margin-right: 10px;\n}\n.form-label .icon path[data-v-10bcab7e], .form-label .icon circle[data-v-10bcab7e] {\n  color: inherit;\n}\n.form-label .label[data-v-10bcab7e] {\n  font-size: 1.125em;\n  font-weight: 700;\n}\n@media (prefers-color-scheme: dark) {\n.form-label .label[data-v-10bcab7e] {\n    color: #bec6cf;\n}\n}\n",""])},pFam:function(a,n,e){"use strict";var t=e("Qqv+");e.n(t).a},vRyx:function(a,n,e){var t=e("9kSd");"string"==typeof t&&(t=[[a.i,t,""]]);var i={hmr:!0,transform:void 0,insertInto:void 0};e("aET+")(t,i);t.locals&&(a.exports=t.locals)}}]);