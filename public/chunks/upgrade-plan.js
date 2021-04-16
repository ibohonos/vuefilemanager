(window.webpackJsonp=window.webpackJsonp||[]).push([[64],{"2Sb1":function(n,e,t){"use strict";var a={name:"PageHeader",props:["title","canBack"],components:{ChevronLeftIcon:t("CjXH").g}},i=(t("JOXf"),t("KHd+")),d=Object(i.a)(a,(function(){var n=this,e=n.$createElement,t=n._self._c||e;return t("div",{staticClass:"page-header"},[n.canBack?t("div",{staticClass:"go-back",on:{click:function(e){return n.$router.back()}}},[t("chevron-left-icon",{attrs:{size:"17"}})],1):n._e(),n._v(" "),t("div",{staticClass:"content"},[t("h1",{staticClass:"title"},[n._v(n._s(n.title))])])])}),[],!1,null,"9fd0a424",null);e.a=d.exports},"3eeM":function(n,e,t){(n.exports=t("I1BE")(!1)).push([n.i,".page-header[data-v-9fd0a424] {\n  display: flex;\n  align-items: center;\n  background: white;\n  z-index: 9;\n  width: 100%;\n  position: -webkit-sticky;\n  position: sticky;\n  top: 0;\n  padding-top: 20px;\n  padding-bottom: 20px;\n}\n.page-header .title[data-v-9fd0a424] {\n  font-size: 1.125em;\n  font-weight: 700;\n  color: #1B2539;\n}\n.page-header .go-back[data-v-9fd0a424] {\n  margin-right: 10px;\n  cursor: pointer;\n}\n.page-header .go-back svg[data-v-9fd0a424] {\n  vertical-align: middle;\n  margin-top: -4px;\n}\n@media only screen and (max-width: 960px) {\n.page-header .title[data-v-9fd0a424] {\n    font-size: 1.125em;\n}\n}\n@media only screen and (max-width: 690px) {\n.page-header[data-v-9fd0a424] {\n    display: none;\n}\n}\n@media (prefers-color-scheme: dark) {\n.page-header[data-v-9fd0a424] {\n    background: #131414;\n}\n.page-header .title[data-v-9fd0a424] {\n    color: #bec6cf;\n}\n.page-header .icon path[data-v-9fd0a424] {\n    fill: #00BC7E;\n}\n}\n",""])},"4zU4":function(n,e,t){"use strict";t.r(e);var a=t("wz3J"),i=t("D62o"),d=t("2Sb1"),r=t("zTYo"),o=t("CjXH"),p=(t("vDqi"),{name:"UpgradePlan",components:{PlanPricingTables:a.a,MobileHeader:i.a,PageHeader:d.a,CloudIcon:o.j,Spinner:r.a},data:function(){return{isLoading:!0}},methods:{onLoadPricingTables:function(n){this.isLoading=n},onSelectTable:function(n){this.$store.commit("STORE_REQUESTED_PLAN",n)}},beforeMount:function(){var n=document.createElement("script");n.setAttribute("src","https://js.stripe.com/v3/"),document.head.appendChild(n)},mounted:function(){this.$store.dispatch("getAppData")}}),l=(t("O/KT"),t("KHd+")),s=Object(l.a)(p,(function(){var n=this,e=n.$createElement,t=n._self._c||e;return t("div",{attrs:{id:"single-page"}},[t("div",{directives:[{name:"show",rawName:"v-show",value:!n.isLoading,expression:"! isLoading"}],staticClass:"large-width center-page",attrs:{id:"page-content"}},[t("MobileHeader",{attrs:{title:n.$t(n.$router.currentRoute.meta.title)}}),n._v(" "),t("div",{staticClass:"content-page"},[t("div",{staticClass:"plan-title"},[t("cloud-icon",{staticClass:"title-icon text-theme",attrs:{size:"42"}}),n._v(" "),t("h1",[n._v(n._s(n.$t("page_pricing_tables.title")))]),n._v(" "),t("h2",[n._v(n._s(n.$t("page_pricing_tables.description")))])],1),n._v(" "),t("PlanPricingTables",{on:{load:n.onLoadPricingTables,"selected-plan":n.onSelectTable}})],1)],1),n._v(" "),n.isLoading?t("div",{attrs:{id:"loader"}},[t("Spinner")],1):n._e()])}),[],!1,null,"0e0d73f9",null);e.default=s.exports},"6KZ8":function(n,e,t){var a=t("ElKT");"string"==typeof a&&(a=[[n.i,a,""]]);var i={hmr:!0,transform:void 0,insertInto:void 0};t("aET+")(a,i);a.locals&&(n.exports=a.locals)},D62o:function(n,e,t){"use strict";var a=t("xCqy"),i=t("CjXH"),d={name:"MobileHeader",props:["title"],components:{ChevronLeftIcon:i.g,MenuIcon:i.L},methods:{showMobileNavigation:function(){a.a.$emit("mobile-menu:show","user-navigation")},goBack:function(){this.$router.back()}}},r=(t("R6Y3"),t("KHd+")),o=Object(r.a)(d,(function(){var n=this.$createElement,e=this._self._c||n;return e("header",{staticClass:"mobile-header"},[e("div",{staticClass:"go-back",on:{click:this.goBack}},[e("chevron-left-icon",{staticClass:"icon",attrs:{size:"17"}})],1),this._v(" "),e("div",{staticClass:"location-name"},[this._v(this._s(this.title))]),this._v(" "),e("div",{staticClass:"mobile-menu",on:{click:this.showMobileNavigation}},[e("menu-icon",{staticClass:"icon",attrs:{size:"17"}})],1)])}),[],!1,null,"699fe34a",null);e.a=o.exports},ElKT:function(n,e,t){(n.exports=t("I1BE")(!1)).push([n.i,".plan[data-v-1057f6d0] {\n  text-align: center;\n  flex: 0 0 33%;\n  padding: 0 25px;\n  margin-bottom: 45px;\n}\n.plan .plan-wrapper[data-v-1057f6d0] {\n  box-shadow: 0 7px 20px 5px rgba(26, 36, 55, 0.03);\n  padding: 25px;\n  border-radius: 8px;\n  transition: 0.3s all ease;\n}\n.plan .plan-wrapper[data-v-1057f6d0]:hover {\n  transform: translateY(-20px) scale(1.05);\n  box-shadow: 0 15px 25px 5px rgba(26, 36, 55, 0.08);\n}\n.plan .plan-header .icon path[data-v-1057f6d0], .plan .plan-header .icon line[data-v-1057f6d0], .plan .plan-header .icon polyline[data-v-1057f6d0], .plan .plan-header .icon rect[data-v-1057f6d0], .plan .plan-header .icon circle[data-v-1057f6d0] {\n  color: inherit;\n}\n.plan .plan-header .title[data-v-1057f6d0] {\n  font-size: 1.375em;\n  font-weight: 800;\n}\n.plan .plan-header .description[data-v-1057f6d0] {\n  font-size: 0.875em;\n  font-weight: 600;\n}\n.plan .plan-features[data-v-1057f6d0] {\n  margin: 65px 0;\n}\n.plan .plan-features .storage-size[data-v-1057f6d0] {\n  font-size: 3em;\n  font-weight: 900;\n  line-height: 1.1;\n}\n.plan .plan-features .storage-description[data-v-1057f6d0] {\n  display: block;\n  font-size: 0.9375em;\n  font-weight: 800;\n}\n.plan .plan-footer .sign-in-button[data-v-1057f6d0] {\n  width: 100%;\n  text-align: center;\n}\n.plan .plan-footer .price[data-v-1057f6d0] {\n  font-size: 1.125em;\n  display: block;\n  margin-bottom: 20px;\n}\n.plan .plan-footer .price .vat-disclaimer[data-v-1057f6d0] {\n  font-size: 0.6875em;\n  color: #1B2539;\n  display: block;\n  font-weight: 300;\n  opacity: 0.45;\n  margin-top: 5px;\n}\n.plans-wrapper[data-v-1057f6d0] {\n  display: flex;\n  flex-wrap: wrap;\n  margin: 0 -25px;\n  justify-content: center;\n}\n@media only screen and (max-width: 960px) {\n.plans-wrapper[data-v-1057f6d0] {\n    display: block;\n    margin: 0;\n}\n}\n@media (prefers-color-scheme: dark) {\n.plan .plan-wrapper[data-v-1057f6d0] {\n    background: #1e2024;\n}\n.plan .plan-header .title[data-v-1057f6d0] {\n    color: #bec6cf;\n}\n.plan .plan-header .description[data-v-1057f6d0] {\n    color: #7d858c;\n}\n.plan .plan-features .storage-size[data-v-1057f6d0] {\n    color: #bec6cf;\n}\n.plan .plan-features .storage-description[data-v-1057f6d0] {\n    color: #bec6cf;\n}\n.plan .plan-footer .sign-in-button[data-v-1057f6d0] {\n    background: rgba(0, 188, 126, 0.1);\n}\n.plan .plan-footer .sign-in-button[data-v-1057f6d0] .content {\n    color: #00BC7E;\n}\n.plan .plan-footer .price .vat-disclaimer[data-v-1057f6d0] {\n    color: #bec6cf;\n}\n}\n",""])},"Hu+x":function(n,e,t){(n.exports=t("I1BE")(!1)).push([n.i,'.form[data-v-0e0d73f9] {\n  max-width: 700px;\n}\n.form.inline-form[data-v-0e0d73f9] {\n  display: flex;\n  position: relative;\n  justify-content: center;\n  margin: 0 auto;\n}\n.form.inline-form .input-wrapper[data-v-0e0d73f9] {\n  position: relative;\n}\n.form.inline-form .input-wrapper .error-message[data-v-0e0d73f9] {\n  position: absolute;\n  left: 0;\n  bottom: -25px;\n}\n.form.block-form .wrapper-inline[data-v-0e0d73f9] {\n  display: flex;\n  margin: 0 -15px;\n}\n.form.block-form .wrapper-inline .block-wrapper[data-v-0e0d73f9] {\n  width: 100%;\n  padding: 0 15px;\n}\n.form.block-form .block-wrapper[data-v-0e0d73f9] {\n  margin-bottom: 32px;\n}\n.form.block-form .block-wrapper label[data-v-0e0d73f9] {\n  font-size: 0.875em;\n  color: rgba(27, 37, 57, 0.8);\n  font-weight: 700;\n  display: block;\n  margin-bottom: 7px;\n  text-align: left;\n}\n.form.block-form .block-wrapper[data-v-0e0d73f9]:last-child {\n  margin-bottom: 0;\n}\n.form.block-form .button[data-v-0e0d73f9] {\n  margin-top: 50px;\n}\n.form .inline-wrapper[data-v-0e0d73f9] {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n}\n.form .inline-wrapper .switch-label .input-help[data-v-0e0d73f9] {\n  padding-top: 0;\n}\n.form .inline-wrapper .switch-label .input-label[data-v-0e0d73f9] {\n  font-weight: 700;\n  color: #1B2539;\n  font-size: 1em;\n  margin-bottom: 5px;\n}\n.form .input-help[data-v-0e0d73f9] {\n  font-size: 0.75em;\n  color: rgba(27, 37, 57, 0.7);\n  line-height: 1.35;\n  padding-top: 10px;\n  display: block;\n}\n.single-line-form[data-v-0e0d73f9] {\n  display: flex;\n}\n.single-line-form .submit-button[data-v-0e0d73f9] {\n  margin-left: 20px;\n}\n.error-message[data-v-0e0d73f9] {\n  font-size: 0.875em;\n  color: #fd397a;\n  padding-top: 5px;\n  display: block;\n  text-align: left;\n}\ntextarea[data-v-0e0d73f9] {\n  width: 100%;\n}\ninput[type="color"][data-v-0e0d73f9] {\n  width: 38px;\n  height: 40px;\n  border: none;\n  outline: none;\n  background: none;\n}\ntextarea[data-v-0e0d73f9],\ninput[type="password"][data-v-0e0d73f9],\ninput[type="text"][data-v-0e0d73f9],\ninput[type="number"][data-v-0e0d73f9],\ninput[type="email"][data-v-0e0d73f9] {\n  border: 1px solid transparent;\n  transition: 150ms all ease;\n  font-size: 1em;\n  border-radius: 8px;\n  padding: 13px 20px;\n  -webkit-appearance: none;\n     -moz-appearance: none;\n          appearance: none;\n  font-weight: 700;\n  outline: 0;\n  width: 100%;\n  box-shadow: 0 1px 5px rgba(0, 0, 0, 0.12);\n}\ntextarea.is-error[data-v-0e0d73f9],\ninput[type="password"].is-error[data-v-0e0d73f9],\ninput[type="text"].is-error[data-v-0e0d73f9],\ninput[type="number"].is-error[data-v-0e0d73f9],\ninput[type="email"].is-error[data-v-0e0d73f9] {\n  border-color: #fd397a;\n}\ntextarea[data-v-0e0d73f9]::-webkit-input-placeholder, input[type="password"][data-v-0e0d73f9]::-webkit-input-placeholder, input[type="text"][data-v-0e0d73f9]::-webkit-input-placeholder, input[type="number"][data-v-0e0d73f9]::-webkit-input-placeholder, input[type="email"][data-v-0e0d73f9]::-webkit-input-placeholder {\n  color: rgba(27, 37, 57, 0.5);\n  font-size: 0.9375em;\n}\ntextarea[data-v-0e0d73f9]::-moz-placeholder, input[type="password"][data-v-0e0d73f9]::-moz-placeholder, input[type="text"][data-v-0e0d73f9]::-moz-placeholder, input[type="number"][data-v-0e0d73f9]::-moz-placeholder, input[type="email"][data-v-0e0d73f9]::-moz-placeholder {\n  color: rgba(27, 37, 57, 0.5);\n  font-size: 0.9375em;\n}\ntextarea[data-v-0e0d73f9]:-ms-input-placeholder, input[type="password"][data-v-0e0d73f9]:-ms-input-placeholder, input[type="text"][data-v-0e0d73f9]:-ms-input-placeholder, input[type="number"][data-v-0e0d73f9]:-ms-input-placeholder, input[type="email"][data-v-0e0d73f9]:-ms-input-placeholder {\n  color: rgba(27, 37, 57, 0.5);\n  font-size: 0.9375em;\n}\ntextarea[data-v-0e0d73f9]::-ms-input-placeholder, input[type="password"][data-v-0e0d73f9]::-ms-input-placeholder, input[type="text"][data-v-0e0d73f9]::-ms-input-placeholder, input[type="number"][data-v-0e0d73f9]::-ms-input-placeholder, input[type="email"][data-v-0e0d73f9]::-ms-input-placeholder {\n  color: rgba(27, 37, 57, 0.5);\n  font-size: 0.9375em;\n}\ntextarea[data-v-0e0d73f9]::placeholder,\ninput[type="password"][data-v-0e0d73f9]::placeholder,\ninput[type="text"][data-v-0e0d73f9]::placeholder,\ninput[type="number"][data-v-0e0d73f9]::placeholder,\ninput[type="email"][data-v-0e0d73f9]::placeholder {\n  color: rgba(27, 37, 57, 0.5);\n  font-size: 0.9375em;\n}\ntextarea[disabled][data-v-0e0d73f9],\ninput[type="password"][disabled][data-v-0e0d73f9],\ninput[type="text"][disabled][data-v-0e0d73f9],\ninput[type="number"][disabled][data-v-0e0d73f9],\ninput[type="email"][disabled][data-v-0e0d73f9] {\n  background: white;\n  color: rgba(27, 37, 57, 0.8);\n  -webkit-text-fill-color: rgba(27, 37, 57, 0.8);\n  opacity: 1;\n  cursor: not-allowed;\n}\n.additional-link[data-v-0e0d73f9] {\n  font-size: 1em;\n  margin-top: 50px;\n  display: block;\n}\n.additional-link b[data-v-0e0d73f9], .additional-link a[data-v-0e0d73f9] {\n  cursor: pointer;\n}\n.additional-link b[data-v-0e0d73f9]:hover, .additional-link a[data-v-0e0d73f9]:hover {\n  text-decoration: underline;\n}\n@media only screen and (max-width: 1024px) {\n.form[data-v-0e0d73f9] {\n    max-width: 100%;\n}\n}\n@media only screen and (max-width: 960px) {\n.form .button[data-v-0e0d73f9] {\n    margin-top: 20px;\n    width: 100%;\n    margin-left: 0;\n    margin-right: 0;\n}\n.form input[data-v-0e0d73f9], .form textarea[data-v-0e0d73f9] {\n    width: 100%;\n    min-width: 100%;\n}\n.form.block-form .block-wrapper[data-v-0e0d73f9] {\n    display: block;\n}\n.form.block-form .block-wrapper label[data-v-0e0d73f9] {\n    width: 100%;\n    padding-right: 0;\n    display: block;\n    margin-bottom: 7px;\n    text-align: left !important;\n    font-size: 0.875em;\n    padding-top: 0;\n}\n.form.block-form .button[data-v-0e0d73f9] {\n    margin-top: 25px;\n    margin-left: 0;\n    margin-right: 0;\n}\n.form.inline-form[data-v-0e0d73f9] {\n    display: block;\n}\n.form.inline-form .input-wrapper .error-message[data-v-0e0d73f9] {\n    position: relative;\n    bottom: 0;\n}\n.form .button[data-v-0e0d73f9] {\n    padding: 14px 32px;\n}\n.single-line-form[data-v-0e0d73f9] {\n    display: block;\n}\n.single-line-form .submit-button[data-v-0e0d73f9] {\n    margin-left: 0;\n    margin-top: 20px;\n    width: 100%;\n}\ntextarea[data-v-0e0d73f9],\n  input[type="password"][data-v-0e0d73f9],\n  input[type="number"][data-v-0e0d73f9],\n  input[type="text"][data-v-0e0d73f9],\n  input[type="email"][data-v-0e0d73f9] {\n    padding: 14px 20px;\n}\n}\n@media only screen and (max-width: 690px) {\n.form.block-form .wrapper-inline[data-v-0e0d73f9] {\n    display: block;\n}\n}\n@media (prefers-color-scheme: dark) {\n.form .input-help[data-v-0e0d73f9] {\n    color: #7d858c;\n}\n.form.block-form .block-wrapper label[data-v-0e0d73f9] {\n    color: #bec6cf;\n}\n.form .inline-wrapper .switch-label .input-label[data-v-0e0d73f9] {\n    color: #bec6cf;\n}\ntextarea[data-v-0e0d73f9],\n  input[type="password"][data-v-0e0d73f9],\n  input[type="text"][data-v-0e0d73f9],\n  input[type="number"][data-v-0e0d73f9],\n  input[type="email"][data-v-0e0d73f9] {\n    border-color: #1e2024;\n    background: #1e2024;\n    color: #bec6cf;\n}\ntextarea[data-v-0e0d73f9]::-webkit-input-placeholder, input[type="password"][data-v-0e0d73f9]::-webkit-input-placeholder, input[type="text"][data-v-0e0d73f9]::-webkit-input-placeholder, input[type="number"][data-v-0e0d73f9]::-webkit-input-placeholder, input[type="email"][data-v-0e0d73f9]::-webkit-input-placeholder {\n    color: #7d858c;\n}\ntextarea[data-v-0e0d73f9]::-moz-placeholder, input[type="password"][data-v-0e0d73f9]::-moz-placeholder, input[type="text"][data-v-0e0d73f9]::-moz-placeholder, input[type="number"][data-v-0e0d73f9]::-moz-placeholder, input[type="email"][data-v-0e0d73f9]::-moz-placeholder {\n    color: #7d858c;\n}\ntextarea[data-v-0e0d73f9]:-ms-input-placeholder, input[type="password"][data-v-0e0d73f9]:-ms-input-placeholder, input[type="text"][data-v-0e0d73f9]:-ms-input-placeholder, input[type="number"][data-v-0e0d73f9]:-ms-input-placeholder, input[type="email"][data-v-0e0d73f9]:-ms-input-placeholder {\n    color: #7d858c;\n}\ntextarea[data-v-0e0d73f9]::-ms-input-placeholder, input[type="password"][data-v-0e0d73f9]::-ms-input-placeholder, input[type="text"][data-v-0e0d73f9]::-ms-input-placeholder, input[type="number"][data-v-0e0d73f9]::-ms-input-placeholder, input[type="email"][data-v-0e0d73f9]::-ms-input-placeholder {\n    color: #7d858c;\n}\ntextarea[data-v-0e0d73f9]::placeholder,\n  input[type="password"][data-v-0e0d73f9]::placeholder,\n  input[type="text"][data-v-0e0d73f9]::placeholder,\n  input[type="number"][data-v-0e0d73f9]::placeholder,\n  input[type="email"][data-v-0e0d73f9]::placeholder {\n    color: #7d858c;\n}\ntextarea[disabled][data-v-0e0d73f9],\n  input[type="password"][disabled][data-v-0e0d73f9],\n  input[type="text"][disabled][data-v-0e0d73f9],\n  input[type="number"][disabled][data-v-0e0d73f9],\n  input[type="email"][disabled][data-v-0e0d73f9] {\n    background: #1e2024;\n    color: rgba(125, 133, 140, 0.8);\n    -webkit-text-fill-color: rgba(125, 133, 140, 0.8);\n}\n.popup-wrapper textarea[data-v-0e0d73f9],\n  .popup-wrapper input[type="password"][data-v-0e0d73f9],\n  .popup-wrapper input[type="text"][data-v-0e0d73f9],\n  .popup-wrapper input[type="number"][data-v-0e0d73f9],\n  .popup-wrapper input[type="email"][data-v-0e0d73f9] {\n    background: #25272c;\n}\n}\n.plan-title[data-v-0e0d73f9] {\n  text-align: center;\n  max-width: 600px;\n  margin: 0 auto 80px;\n}\n.plan-title path[data-v-0e0d73f9], .plan-title line[data-v-0e0d73f9], .plan-title polyline[data-v-0e0d73f9], .plan-title rect[data-v-0e0d73f9], .plan-title circle[data-v-0e0d73f9] {\n  color: inherit;\n}\n.plan-title h1[data-v-0e0d73f9] {\n  font-size: 2.375em;\n  font-weight: 800;\n  margin-bottom: 5px;\n}\n.plan-title h2[data-v-0e0d73f9] {\n  font-size: 1.25em;\n  font-weight: 500;\n}\n@media (prefers-color-scheme: dark) {\n.plan-title h1[data-v-0e0d73f9] {\n    color: #bec6cf;\n}\n.plan-title h2[data-v-0e0d73f9] {\n    color: #7d858c;\n}\n}\n',""])},JOXf:function(n,e,t){"use strict";var a=t("nr4+");t.n(a).a},NDil:function(n,e,t){var a=t("Hu+x");"string"==typeof a&&(a=[[n.i,a,""]]);var i={hmr:!0,transform:void 0,insertInto:void 0};t("aET+")(a,i);a.locals&&(n.exports=a.locals)},"O/KT":function(n,e,t){"use strict";var a=t("NDil");t.n(a).a},R6Y3:function(n,e,t){"use strict";var a=t("Xm12");t.n(a).a},Xm12:function(n,e,t){var a=t("q8nf");"string"==typeof a&&(a=[[n.i,a,""]]);var i={hmr:!0,transform:void 0,insertInto:void 0};t("aET+")(a,i);a.locals&&(n.exports=a.locals)},mUdl:function(n,e,t){"use strict";var a=t("6KZ8");t.n(a).a},"nr4+":function(n,e,t){var a=t("3eeM");"string"==typeof a&&(a=[[n.i,a,""]]);var i={hmr:!0,transform:void 0,insertInto:void 0};t("aET+")(a,i);a.locals&&(n.exports=a.locals)},q8nf:function(n,e,t){(n.exports=t("I1BE")(!1)).push([n.i,".mobile-header[data-v-699fe34a] {\n  padding: 10px 0;\n  text-align: center;\n  background: white;\n  position: -webkit-sticky;\n  position: sticky;\n  display: none;\n  z-index: 6;\n  top: 0;\n}\n.mobile-header > div[data-v-699fe34a] {\n  flex-grow: 1;\n  align-self: center;\n  white-space: nowrap;\n}\n.mobile-header .go-back[data-v-699fe34a] {\n  text-align: left;\n}\n.mobile-header .location-name[data-v-699fe34a] {\n  line-height: 1;\n  text-align: center;\n  width: 100%;\n  vertical-align: middle;\n  font-size: 0.9375em;\n  color: #1B2539;\n  font-weight: 700;\n  max-width: 220px;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  display: inline-block;\n}\n.mobile-header .mobile-menu[data-v-699fe34a] {\n  text-align: right;\n}\n.mobile-header .icon[data-v-699fe34a] {\n  vertical-align: middle;\n  margin-top: -4px;\n}\n@media only screen and (max-width: 690px) {\n.mobile-header[data-v-699fe34a] {\n    display: flex;\n    margin-bottom: 15px;\n}\n}\n@media (prefers-color-scheme: dark) {\n.mobile-header[data-v-699fe34a] {\n    background: #131414;\n}\n.mobile-header .location-name[data-v-699fe34a] {\n    color: #bec6cf;\n}\n}\n",""])},wz3J:function(n,e,t){"use strict";var a=t("Nv84"),i=t("CjXH"),d=t("L2JU"),r=t("vDqi"),o=t.n(r);function p(n,e){var t=Object.keys(n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(n);e&&(a=a.filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable}))),t.push.apply(t,a)}return t}function l(n,e,t){return e in n?Object.defineProperty(n,e,{value:t,enumerable:!0,configurable:!0,writable:!0}):n[e]=t,n}var s={name:"PlanPricingTables",components:{HardDriveIcon:i.C,ButtonBase:a.a},props:["customRoute"],data:function(){return{plans:void 0}},computed:function(n){for(var e=1;e<arguments.length;e++){var t=null!=arguments[e]?arguments[e]:{};e%2?p(Object(t),!0).forEach((function(e){l(n,e,t[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(n,Object.getOwnPropertyDescriptors(t)):p(Object(t)).forEach((function(e){Object.defineProperty(n,e,Object.getOwnPropertyDescriptor(t,e))}))}return n}({},Object(d.b)(["user"])),methods:{selectPlan:function(n){this.$emit("selected-plan",n);var e=this.customRoute?this.customRoute:"UpgradeBilling";this.$router.push({name:e})}},created:function(){var n=this;o.a.get("/api/pricing").then((function(e){n.plans=e.data.filter((function(e){return e.data.attributes.capacity>n.user.data.attributes.storage_capacity})),n.$emit("load",!1)}))}},c=(t("mUdl"),t("KHd+")),f=Object(c.a)(s,(function(){var n=this,e=n.$createElement,t=n._self._c||e;return n.plans?t("div",{staticClass:"plans-wrapper"},n._l(n.plans,(function(e,a){return t("article",{key:a,staticClass:"plan"},[t("div",{staticClass:"plan-wrapper"},[t("header",{staticClass:"plan-header"},[t("div",{staticClass:"icon"},[t("hard-drive-icon",{staticClass:"text-theme",attrs:{size:"26"}})],1),n._v(" "),t("h1",{staticClass:"title"},[n._v(n._s(e.data.attributes.name))]),n._v(" "),t("h2",{staticClass:"description"},[n._v(n._s(e.data.attributes.description))])]),n._v(" "),t("section",{staticClass:"plan-features"},[t("b",{staticClass:"storage-size"},[n._v(n._s(e.data.attributes.capacity_formatted))]),n._v(" "),t("span",{staticClass:"storage-description"},[n._v(n._s(n.$t("page_pricing_tables.storage_capacity")))])]),n._v(" "),t("footer",{staticClass:"plan-footer"},[t("b",{staticClass:"price text-theme"},[n._v("\n                    "+n._s(e.data.attributes.price)+"/"+n._s(n.$t("global.monthly_ac"))+"\n                    "),e.data.attributes.tax_rates.length>0?t("small",{staticClass:"vat-disclaimer"},[n._v(n._s(n.$t("page_pricing_tables.vat_excluded")))]):n._e()]),n._v(" "),t("ButtonBase",{staticClass:"sign-in-button",attrs:{type:"submit","button-style":"secondary"},nativeOn:{click:function(t){return n.selectPlan(e)}}},[n._v("\n                    "+n._s(n.$t("global.get_it"))+"\n                ")])],1)])])})),0):n._e()}),[],!1,null,"1057f6d0",null);e.a=f.exports}}]);