(window.webpackJsonp=window.webpackJsonp||[]).push([[32],{"0OA4":function(n,a,t){var e=t("8K6n");"string"==typeof e&&(e=[[n.i,e,""]]);var i={hmr:!0,transform:void 0,insertInto:void 0};t("aET+")(e,i);e.locals&&(n.exports=e.locals)},"1L+q":function(n,a,t){"use strict";var e=t("4EzG");t.n(e).a},"4EzG":function(n,a,t){var e=t("jexE");"string"==typeof e&&(e=[[n.i,e,""]]);var i={hmr:!0,transform:void 0,insertInto:void 0};t("aET+")(e,i);e.locals&&(n.exports=e.locals)},"4TWA":function(n,a,t){"use strict";var e=t("CjXH"),i=t("LvDl"),o={name:"SelectInput",props:["placeholder","options","isError","default"],components:{Edit2Icon:e.r,UserIcon:e.fb,ChevronDownIcon:e.f},watch:{query:Object(i.debounce)((function(n){this.searchedResults=Object(i.omitBy)(this.options,(function(a){return!a.label.toLowerCase().includes(n.toLowerCase())}))}),200)},computed:{isSearching:function(){return this.searchedResults&&""!==this.query},optionList:function(){return this.isSearching?this.searchedResults:this.options}},data:function(){return{searchedResults:void 0,selected:void 0,isOpen:!1,query:""}},methods:{selectOption:function(n){this.$emit("input",n.value),this.selected=n,this.isOpen=!1},openMenu:function(){var n=this;this.isOpen=!this.isOpen,this.isOpen&&this.$nextTick((function(){return n.$refs.search.focus()}))}},created:function(){var n=this;this.default&&(this.selected=this.options.find((function(a){return a.value===n.default})))}},d=(t("7y9c"),t("KHd+")),r=Object(d.a)(o,(function(){var n=this,a=n.$createElement,t=n._self._c||a;return t("div",{staticClass:"select"},[t("div",{staticClass:"input-area",class:{"is-active":n.isOpen,"is-error":n.isError},on:{click:n.openMenu}},[n.selected?t("div",{staticClass:"selected"},[n.selected.icon?t("div",{staticClass:"option-icon"},["user"===n.selected.icon?t("user-icon",{attrs:{size:"14"}}):n._e(),n._v(" "),"user-edit"===n.selected.icon?t("edit2-icon",{attrs:{size:"14"}}):n._e()],1):n._e(),n._v(" "),t("span",{staticClass:"option-value"},[n._v(n._s(n.selected.label))])]):n._e(),n._v(" "),n.selected?n._e():t("div",{staticClass:"not-selected"},[t("span",{staticClass:"option-value placehoder"},[n._v(n._s(n.placeholder))])]),n._v(" "),t("chevron-down-icon",{staticClass:"chevron",attrs:{size:"19"}})],1),n._v(" "),t("transition",{attrs:{name:"slide-in"}},[n.isOpen?t("div",{staticClass:"input-options"},[n.options.length>5?t("div",{staticClass:"select-search"},[t("input",{directives:[{name:"model",rawName:"v-model",value:n.query,expression:"query"}],ref:"search",staticClass:"search-input focus-border-theme",attrs:{type:"text",placeholder:n.$t("select_search_placeholder")},domProps:{value:n.query},on:{input:function(a){a.target.composing||(n.query=a.target.value)}}})]):n._e(),n._v(" "),t("ul",{staticClass:"option-list"},n._l(n.optionList,(function(a,e){return t("li",{key:e,staticClass:"option-item",on:{click:function(t){return n.selectOption(a)}}},[a.icon?t("div",{staticClass:"option-icon"},["user"===a.icon?t("user-icon",{attrs:{size:"14"}}):n._e(),n._v(" "),"user-edit"===a.icon?t("edit2-icon",{attrs:{size:"14"}}):n._e()],1):n._e(),n._v(" "),t("span",{staticClass:"option-value"},[n._v(n._s(a.label))])])})),0)]):n._e()])],1)}),[],!1,null,"5fb2ed60",null);a.a=r.exports},"7y9c":function(n,a,t){"use strict";var e=t("0OA4");t.n(e).a},"8K6n":function(n,a,t){(n.exports=t("I1BE")(!1)).push([n.i,".select[data-v-5fb2ed60] {\n  position: relative;\n  -webkit-user-select: none;\n     -moz-user-select: none;\n      -ms-user-select: none;\n          user-select: none;\n  width: 100%;\n}\n.select-search[data-v-5fb2ed60] {\n  background: white;\n  position: -webkit-sticky;\n  position: sticky;\n  top: 0;\n  padding: 13px;\n}\n.select-search .search-input[data-v-5fb2ed60] {\n  border: 1px solid transparent;\n  background: #f4f5f6;\n  transition: 150ms all ease;\n  font-size: 0.875em;\n  border-radius: 8px;\n  padding: 13px 20px;\n  -webkit-appearance: none;\n     -moz-appearance: none;\n          appearance: none;\n  font-weight: 700;\n  outline: 0;\n  width: 100%;\n}\n.input-options[data-v-5fb2ed60] {\n  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.12);\n  background: white;\n  border-radius: 8px;\n  position: absolute;\n  overflow: hidden;\n  top: 65px;\n  left: 0;\n  right: 0;\n  z-index: 9;\n  max-height: 295px;\n  overflow-y: auto;\n}\n.input-options .option-item[data-v-5fb2ed60] {\n  padding: 13px 20px;\n  display: block;\n  cursor: pointer;\n}\n.input-options .option-item[data-v-5fb2ed60]:hover {\n  color: #00BC7E;\n  background: #f4f5f6;\n}\n.input-options .option-item[data-v-5fb2ed60]:last-child {\n  border-bottom: none;\n}\n.input-area[data-v-5fb2ed60] {\n  border-width: 1px;\n  border-style: solid;\n  border-color: transparent;\n  justify-content: space-between;\n  box-shadow: 0 1px 5px rgba(0, 0, 0, 0.12);\n  transition: 150ms all ease;\n  align-items: center;\n  border-radius: 8px;\n  padding: 13px 20px;\n  display: flex;\n  outline: 0;\n  width: 100%;\n  cursor: pointer;\n}\n.input-area .chevron[data-v-5fb2ed60] {\n  transition: 150ms all ease;\n}\n.input-area.is-active .chevron[data-v-5fb2ed60] {\n  transform: rotate(180deg);\n}\n.input-area.is-error[data-v-5fb2ed60] {\n  border-color: #fd397a;\n  box-shadow: 0 0 7px rgba(253, 57, 122, 0.3);\n}\n.option-icon[data-v-5fb2ed60] {\n  width: 20px;\n  display: inline-block;\n  font-size: 0.625em;\n}\n.option-icon svg[data-v-5fb2ed60] {\n  margin-top: -4px;\n  vertical-align: middle;\n}\n.option-value[data-v-5fb2ed60] {\n  font-size: 0.875em;\n  font-weight: 700;\n  width: 100%;\n  vertical-align: middle;\n}\n.option-value.placehoder[data-v-5fb2ed60] {\n  color: rgba(27, 37, 57, 0.5);\n}\n.slide-in-enter-active[data-v-5fb2ed60] {\n  transition: all 150ms ease;\n}\n.slide-in-enter[data-v-5fb2ed60] {\n  opacity: 0;\n  transform: translateY(-50px);\n}\n@media (prefers-color-scheme: dark) {\n.select-search[data-v-5fb2ed60] {\n    background: #1e2024;\n}\n.select-search .search-input[data-v-5fb2ed60] {\n    background: #131414;\n}\n.input-area[data-v-5fb2ed60] {\n    background: #1e2024;\n    border-color: #1e2024;\n}\n.popup-wrapper .input-area[data-v-5fb2ed60] {\n    background: #25272c;\n}\n.input-options[data-v-5fb2ed60] {\n    background: #1e2024;\n}\n.input-options .option-item[data-v-5fb2ed60] {\n    border-bottom: none;\n}\n.input-options .option-item[data-v-5fb2ed60]:hover {\n    background: #2a2c32;\n}\n.input-options .option-item:hover .option-icon path[data-v-5fb2ed60], .input-options .option-item:hover .option-icon circle[data-v-5fb2ed60] {\n    color: inherit;\n}\n.input-options .option-item[data-v-5fb2ed60]:last-child {\n    border-bottom: none;\n}\n.option-value.placehoder[data-v-5fb2ed60] {\n    color: #7d858c;\n}\n}\n",""])},KnjL:function(n,a,t){"use strict";var e={name:"InfoBox",props:["type"]},i=(t("pFam"),t("KHd+")),o=Object(i.a)(e,(function(){var n=this.$createElement;return(this._self._c||n)("div",{staticClass:"info-box",class:this.type},[this._t("default")],2)}),[],!1,null,"8e7c42f6",null);a.a=o.exports},"Qqv+":function(n,a,t){var e=t("biqn");"string"==typeof e&&(e=[[n.i,e,""]]);var i={hmr:!0,transform:void 0,insertInto:void 0};t("aET+")(e,i);e.locals&&(n.exports=e.locals)},RUCB:function(n,a,t){"use strict";var e=t("S70Z");t.n(e).a},S70Z:function(n,a,t){var e=t("kOYY");"string"==typeof e&&(e=[[n.i,e,""]]);var i={hmr:!0,transform:void 0,insertInto:void 0};t("aET+")(e,i);e.locals&&(n.exports=e.locals)},"aEI+":function(n,a,t){"use strict";t.r(a);var e=t("A5+z"),i=t("bDRN"),o=t("4TWA"),d=t("eZ9V"),r=t("KnjL"),p=t("j8qy"),l=t("ASoH"),s=t("zTYo"),c=t("CjXH"),u=t("TJPC"),m=t("vDqi"),v=t.n(m),f={name:"InstallationDisclaimer",components:{AuthContentWrapper:i.a,ValidationProvider:e.ValidationProvider,ValidationObserver:e.ValidationObserver,SettingsIcon:c.X,SelectInput:o.a,AuthContent:p.a,AuthButton:l.a,FormLabel:d.a,required:u.a,Spinner:s.a,InfoBox:r.a},data:function(){return{isLoading:!0,isError:!1,isExtended:void 0}},created:function(){var n=this;v.a.post("/api/setup/purchase-code",{purchaseCode:localStorage.getItem("purchase_code")}).then((function(a){n.$scrollTop(),n.isLoading=!1,"b6896a44017217c36f4a6fdc56699728"===a.data?(n.isExtended=!0,localStorage.setItem("license","Extended")):(n.isExtended=!1,localStorage.setItem("license","Regular"))})).catch((function(a){n.isLoading=!1,400==a.response.status&&n.$router.push({name:"PurchaseCode"})}))}},b=(t("RUCB"),t("KHd+")),h=Object(b.a)(f,(function(){var n=this,a=n.$createElement,t=n._self._c||a;return t("AuthContentWrapper",{ref:"auth"},[t("AuthContent",{attrs:{name:"database-credentials",visible:!0}},[t("div",{staticClass:"content-headline"},[t("settings-icon",{staticClass:"title-icon",attrs:{size:"40"}}),n._v(" "),t("h1",[n._v("Setup Wizard")]),n._v(" "),t("h2",[n._v("Database was installed successfully. Let's set up application, Make sure you have these informations before continue:")])],1),n._v(" "),n.isLoading?t("div",{attrs:{id:"loader"}},[t("Spinner")],1):n._e(),n._v(" "),n.isLoading?n._e():t("div",{staticClass:"form block-form"},[t("InfoBox",[n.isExtended?t("ul",{staticClass:"information-list",staticStyle:{"margin-top":"0"}},[t("li",[n._v("\n                        1. Stripe API Credentials\n                    ")]),n._v(" "),t("li",[n._v("\n                        2. Billing details for Stripe Subscription Service\n                    ")]),n._v(" "),t("li",[n._v("\n                        3. You will create your subscription plans\n                    ")]),n._v(" "),t("li",[n._v("\n                        4. Email Account Credentials for sending emails to your users\n                    ")]),n._v(" "),t("li",[n._v("\n                        5. If you use external storage service, then you will need set your API credentials\n                    ")]),n._v(" "),t("li",[n._v("\n                        6. Some general settings for VueFileManager like Google Analytics, logo, favicon and application name\n                    ")]),n._v(" "),t("li",[n._v("\n                        7. You will create admin account\n                    ")])]):t("ul",{staticClass:"information-list",staticStyle:{"margin-top":"0"}},[t("li",[n._v("\n                        1. Email Account Credentials for sending emails to your users\n                    ")]),n._v(" "),t("li",[n._v("\n                        2. If you use external storage service, then you will need set your API credentials\n                    ")]),n._v(" "),t("li",[n._v("\n                        3. Some general settings for VueFileManager like Google Analytics, logo, favicon and application name\n                    ")]),n._v(" "),t("li",[n._v("\n                        4. You will create admin account\n                    ")])])]),n._v(" "),n.isExtended?t("router-link",{staticClass:"submit-wrapper",attrs:{to:{name:"SubscriptionService"},tag:"div"}},[t("AuthButton",{attrs:{icon:"chevron-right",text:"I Get It! Let's Set Up Application",loading:n.isLoading,disabled:n.isLoading}})],1):n._e(),n._v(" "),n.isExtended?n._e():t("router-link",{staticClass:"submit-wrapper",attrs:{to:{name:"EnvironmentSetup"},tag:"div"}},[t("AuthButton",{attrs:{icon:"chevron-right",text:"I Get It! Let's Set Up Application",loading:n.isLoading,disabled:n.isLoading}})],1)],1)])],1)}),[],!1,null,"2da27582",null);a.default=h.exports},biqn:function(n,a,t){(n.exports=t("I1BE")(!1)).push([n.i,".info-box[data-v-8e7c42f6] {\n  padding: 20px;\n  border-radius: 8px;\n  margin-bottom: 32px;\n  background: #f4f5f6;\n  text-align: left;\n}\n.info-box.error[data-v-8e7c42f6] {\n  background: rgba(253, 57, 122, 0.1);\n}\n.info-box.error p[data-v-8e7c42f6], .info-box.error a[data-v-8e7c42f6] {\n  color: #fd397a;\n}\n.info-box.error a[data-v-8e7c42f6] {\n  text-decoration: underline;\n}\n.info-box p[data-v-8e7c42f6] {\n  font-size: 15px;\n  line-height: 1.6;\n  word-break: break-word;\n  font-weight: 600;\n}\n.info-box p[data-v-8e7c42f6] a {\n  font-size: 15px;\n}\n.info-box p[data-v-8e7c42f6] b {\n  font-size: 15px;\n  font-weight: 700;\n}\n.info-box b[data-v-8e7c42f6] {\n  font-weight: 700;\n}\n.info-box a[data-v-8e7c42f6] {\n  font-weight: 700;\n  font-size: 0.9375em;\n  line-height: 1.6;\n}\n.info-box ul[data-v-8e7c42f6] {\n  margin-top: 15px;\n  display: block;\n}\n.info-box ul li[data-v-8e7c42f6] {\n  display: block;\n}\n.info-box ul li a[data-v-8e7c42f6] {\n  display: block;\n}\n@media only screen and (max-width: 690px) {\n.info-box[data-v-8e7c42f6] {\n    padding: 15px;\n}\n}\n@media (prefers-color-scheme: dark) {\n.info-box[data-v-8e7c42f6] {\n    background: #1e2024;\n}\n.info-box p[data-v-8e7c42f6] {\n    color: #bec6cf;\n}\n.info-box ul li[data-v-8e7c42f6] {\n    color: #bec6cf;\n}\n}\n",""])},eZ9V:function(n,a,t){"use strict";var e=t("CjXH"),i={name:"FormLabel",props:["icon"],components:{Edit2Icon:e.r,SettingsIcon:e.X}},o=(t("1L+q"),t("KHd+")),d=Object(o.a)(i,(function(){var n=this.$createElement,a=this._self._c||n;return a("div",{staticClass:"form-label"},[this.icon?this._e():a("edit-2-icon",{staticClass:"icon text-theme",attrs:{size:"22"}}),this._v(" "),"settings"===this.icon?a("settings-icon",{staticClass:"icon text-theme",attrs:{size:"22"}}):this._e(),this._v(" "),a("b",{staticClass:"label"},[this._t("default")],2)],1)}),[],!1,null,"10bcab7e",null);a.a=d.exports},jexE:function(n,a,t){(n.exports=t("I1BE")(!1)).push([n.i,".form-label[data-v-10bcab7e] {\n  display: flex;\n  align-items: center;\n  margin-bottom: 30px;\n}\n.form-label .icon[data-v-10bcab7e] {\n  margin-right: 10px;\n}\n.form-label .icon path[data-v-10bcab7e], .form-label .icon circle[data-v-10bcab7e] {\n  color: inherit;\n}\n.form-label .label[data-v-10bcab7e] {\n  font-size: 1.125em;\n  font-weight: 700;\n}\n@media (prefers-color-scheme: dark) {\n.form-label .label[data-v-10bcab7e] {\n    color: #bec6cf;\n}\n}\n",""])},kOYY:function(n,a,t){(n.exports=t("I1BE")(!1)).push([n.i,'.form[data-v-2da27582] {\n  max-width: 700px;\n}\n.form.inline-form[data-v-2da27582] {\n  display: flex;\n  position: relative;\n  justify-content: center;\n  margin: 0 auto;\n}\n.form.inline-form .input-wrapper[data-v-2da27582] {\n  position: relative;\n}\n.form.inline-form .input-wrapper .error-message[data-v-2da27582] {\n  position: absolute;\n  left: 0;\n  bottom: -25px;\n}\n.form.block-form .wrapper-inline[data-v-2da27582] {\n  display: flex;\n  margin: 0 -15px;\n}\n.form.block-form .wrapper-inline .block-wrapper[data-v-2da27582] {\n  width: 100%;\n  padding: 0 15px;\n}\n.form.block-form .block-wrapper[data-v-2da27582] {\n  margin-bottom: 32px;\n}\n.form.block-form .block-wrapper label[data-v-2da27582] {\n  font-size: 0.875em;\n  color: rgba(27, 37, 57, 0.8);\n  font-weight: 700;\n  display: block;\n  margin-bottom: 7px;\n  text-align: left;\n}\n.form.block-form .block-wrapper[data-v-2da27582]:last-child {\n  margin-bottom: 0;\n}\n.form.block-form .button[data-v-2da27582] {\n  margin-top: 50px;\n}\n.form .inline-wrapper[data-v-2da27582] {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n}\n.form .inline-wrapper .switch-label .input-help[data-v-2da27582] {\n  padding-top: 0;\n}\n.form .inline-wrapper .switch-label .input-label[data-v-2da27582] {\n  font-weight: 700;\n  color: #1B2539;\n  font-size: 1em;\n  margin-bottom: 5px;\n}\n.form .input-help[data-v-2da27582] {\n  font-size: 0.75em;\n  color: rgba(27, 37, 57, 0.7);\n  line-height: 1.35;\n  padding-top: 10px;\n  display: block;\n}\n.single-line-form[data-v-2da27582] {\n  display: flex;\n}\n.single-line-form .submit-button[data-v-2da27582] {\n  margin-left: 20px;\n}\n.error-message[data-v-2da27582] {\n  font-size: 0.875em;\n  color: #fd397a;\n  padding-top: 5px;\n  display: block;\n  text-align: left;\n}\ntextarea[data-v-2da27582] {\n  width: 100%;\n}\ntextarea[data-v-2da27582],\ninput[type="password"][data-v-2da27582],\ninput[type="text"][data-v-2da27582],\ninput[type="number"][data-v-2da27582],\ninput[type="email"][data-v-2da27582] {\n  border: 1px solid transparent;\n  transition: 150ms all ease;\n  font-size: 1em;\n  border-radius: 8px;\n  padding: 13px 20px;\n  -webkit-appearance: none;\n     -moz-appearance: none;\n          appearance: none;\n  font-weight: 700;\n  outline: 0;\n  width: 100%;\n  box-shadow: 0 1px 5px rgba(0, 0, 0, 0.12);\n}\ntextarea.is-error[data-v-2da27582],\ninput[type="password"].is-error[data-v-2da27582],\ninput[type="text"].is-error[data-v-2da27582],\ninput[type="number"].is-error[data-v-2da27582],\ninput[type="email"].is-error[data-v-2da27582] {\n  border-color: #fd397a;\n}\ntextarea[data-v-2da27582]::-webkit-input-placeholder, input[type="password"][data-v-2da27582]::-webkit-input-placeholder, input[type="text"][data-v-2da27582]::-webkit-input-placeholder, input[type="number"][data-v-2da27582]::-webkit-input-placeholder, input[type="email"][data-v-2da27582]::-webkit-input-placeholder {\n  color: rgba(27, 37, 57, 0.5);\n  font-size: 0.9375em;\n}\ntextarea[data-v-2da27582]::-moz-placeholder, input[type="password"][data-v-2da27582]::-moz-placeholder, input[type="text"][data-v-2da27582]::-moz-placeholder, input[type="number"][data-v-2da27582]::-moz-placeholder, input[type="email"][data-v-2da27582]::-moz-placeholder {\n  color: rgba(27, 37, 57, 0.5);\n  font-size: 0.9375em;\n}\ntextarea[data-v-2da27582]:-ms-input-placeholder, input[type="password"][data-v-2da27582]:-ms-input-placeholder, input[type="text"][data-v-2da27582]:-ms-input-placeholder, input[type="number"][data-v-2da27582]:-ms-input-placeholder, input[type="email"][data-v-2da27582]:-ms-input-placeholder {\n  color: rgba(27, 37, 57, 0.5);\n  font-size: 0.9375em;\n}\ntextarea[data-v-2da27582]::-ms-input-placeholder, input[type="password"][data-v-2da27582]::-ms-input-placeholder, input[type="text"][data-v-2da27582]::-ms-input-placeholder, input[type="number"][data-v-2da27582]::-ms-input-placeholder, input[type="email"][data-v-2da27582]::-ms-input-placeholder {\n  color: rgba(27, 37, 57, 0.5);\n  font-size: 0.9375em;\n}\ntextarea[data-v-2da27582]::placeholder,\ninput[type="password"][data-v-2da27582]::placeholder,\ninput[type="text"][data-v-2da27582]::placeholder,\ninput[type="number"][data-v-2da27582]::placeholder,\ninput[type="email"][data-v-2da27582]::placeholder {\n  color: rgba(27, 37, 57, 0.5);\n  font-size: 0.9375em;\n}\ntextarea[disabled][data-v-2da27582],\ninput[type="password"][disabled][data-v-2da27582],\ninput[type="text"][disabled][data-v-2da27582],\ninput[type="number"][disabled][data-v-2da27582],\ninput[type="email"][disabled][data-v-2da27582] {\n  background: white;\n  color: rgba(27, 37, 57, 0.8);\n  -webkit-text-fill-color: rgba(27, 37, 57, 0.8);\n  opacity: 1;\n  cursor: not-allowed;\n}\ninput[type="color"][data-v-2da27582] {\n  width: 38px !important;\n  height: 40px;\n  border: none;\n  outline: none;\n  background: none;\n  min-width: initial !important;\n}\n.additional-link[data-v-2da27582] {\n  font-size: 1em;\n  margin-top: 50px;\n  display: block;\n}\n.additional-link b[data-v-2da27582], .additional-link a[data-v-2da27582] {\n  cursor: pointer;\n}\n.additional-link b[data-v-2da27582]:hover, .additional-link a[data-v-2da27582]:hover {\n  text-decoration: underline;\n}\n@media only screen and (max-width: 1024px) {\n.form[data-v-2da27582] {\n    max-width: 100%;\n}\n}\n@media only screen and (max-width: 960px) {\n.form .button[data-v-2da27582] {\n    margin-top: 20px;\n    width: 100%;\n    margin-left: 0;\n    margin-right: 0;\n}\n.form input[data-v-2da27582], .form textarea[data-v-2da27582] {\n    width: 100%;\n    min-width: 100%;\n}\n.form.block-form .block-wrapper[data-v-2da27582] {\n    display: block;\n}\n.form.block-form .block-wrapper label[data-v-2da27582] {\n    width: 100%;\n    padding-right: 0;\n    display: block;\n    margin-bottom: 7px;\n    text-align: left !important;\n    font-size: 0.875em;\n    padding-top: 0;\n}\n.form.block-form .button[data-v-2da27582] {\n    margin-top: 25px;\n    margin-left: 0;\n    margin-right: 0;\n}\n.form.inline-form[data-v-2da27582] {\n    display: block;\n}\n.form.inline-form .input-wrapper .error-message[data-v-2da27582] {\n    position: relative;\n    bottom: 0;\n}\n.form .button[data-v-2da27582] {\n    padding: 14px 32px;\n}\n.single-line-form[data-v-2da27582] {\n    display: block;\n}\n.single-line-form .submit-button[data-v-2da27582] {\n    margin-left: 0;\n    margin-top: 20px;\n    width: 100%;\n}\ntextarea[data-v-2da27582],\n  input[type="password"][data-v-2da27582],\n  input[type="number"][data-v-2da27582],\n  input[type="text"][data-v-2da27582],\n  input[type="email"][data-v-2da27582] {\n    padding: 14px 20px;\n}\n}\n@media only screen and (max-width: 690px) {\n.form.block-form .wrapper-inline[data-v-2da27582] {\n    display: block;\n}\n}\n@media (prefers-color-scheme: dark) {\n.form .input-help[data-v-2da27582] {\n    color: #7d858c;\n}\n.form.block-form .block-wrapper label[data-v-2da27582] {\n    color: #bec6cf;\n}\n.form .inline-wrapper .switch-label .input-label[data-v-2da27582] {\n    color: #bec6cf;\n}\ntextarea[data-v-2da27582],\n  input[type="password"][data-v-2da27582],\n  input[type="text"][data-v-2da27582],\n  input[type="number"][data-v-2da27582],\n  input[type="email"][data-v-2da27582] {\n    border-color: #1e2024;\n    background: #1e2024;\n    color: #bec6cf;\n}\ntextarea[data-v-2da27582]::-webkit-input-placeholder, input[type="password"][data-v-2da27582]::-webkit-input-placeholder, input[type="text"][data-v-2da27582]::-webkit-input-placeholder, input[type="number"][data-v-2da27582]::-webkit-input-placeholder, input[type="email"][data-v-2da27582]::-webkit-input-placeholder {\n    color: #7d858c;\n}\ntextarea[data-v-2da27582]::-moz-placeholder, input[type="password"][data-v-2da27582]::-moz-placeholder, input[type="text"][data-v-2da27582]::-moz-placeholder, input[type="number"][data-v-2da27582]::-moz-placeholder, input[type="email"][data-v-2da27582]::-moz-placeholder {\n    color: #7d858c;\n}\ntextarea[data-v-2da27582]:-ms-input-placeholder, input[type="password"][data-v-2da27582]:-ms-input-placeholder, input[type="text"][data-v-2da27582]:-ms-input-placeholder, input[type="number"][data-v-2da27582]:-ms-input-placeholder, input[type="email"][data-v-2da27582]:-ms-input-placeholder {\n    color: #7d858c;\n}\ntextarea[data-v-2da27582]::-ms-input-placeholder, input[type="password"][data-v-2da27582]::-ms-input-placeholder, input[type="text"][data-v-2da27582]::-ms-input-placeholder, input[type="number"][data-v-2da27582]::-ms-input-placeholder, input[type="email"][data-v-2da27582]::-ms-input-placeholder {\n    color: #7d858c;\n}\ntextarea[data-v-2da27582]::placeholder,\n  input[type="password"][data-v-2da27582]::placeholder,\n  input[type="text"][data-v-2da27582]::placeholder,\n  input[type="number"][data-v-2da27582]::placeholder,\n  input[type="email"][data-v-2da27582]::placeholder {\n    color: #7d858c;\n}\ntextarea[disabled][data-v-2da27582],\n  input[type="password"][disabled][data-v-2da27582],\n  input[type="text"][disabled][data-v-2da27582],\n  input[type="number"][disabled][data-v-2da27582],\n  input[type="email"][disabled][data-v-2da27582] {\n    background: #1e2024;\n    color: rgba(125, 133, 140, 0.8);\n    -webkit-text-fill-color: rgba(125, 133, 140, 0.8);\n}\n.popup-wrapper textarea[data-v-2da27582],\n  .popup-wrapper input[type="password"][data-v-2da27582],\n  .popup-wrapper input[type="text"][data-v-2da27582],\n  .popup-wrapper input[type="number"][data-v-2da27582],\n  .popup-wrapper input[type="email"][data-v-2da27582] {\n    background: #25272c;\n}\n}\n.auth-logo-text[data-v-2da27582] {\n  font-size: 1.375em;\n  font-weight: 800;\n  margin-bottom: 40px;\n  display: block;\n}\n.auth-form[data-v-2da27582] {\n  text-align: center;\n  max-width: 600px;\n  padding: 25px 20px;\n  display: table-cell;\n  vertical-align: middle;\n}\n.auth-form input[data-v-2da27582] {\n  min-width: 310px;\n}\n.auth-form .additional-link a[data-v-2da27582] {\n  font-weight: 700;\n  text-decoration: none;\n}\n.auth-form .user-avatar[data-v-2da27582] {\n  width: 100px;\n  height: 100px;\n  -o-object-fit: cover;\n     object-fit: cover;\n  margin-bottom: 20px;\n  border-radius: 8px;\n  box-shadow: 0 10px 30px rgba(25, 54, 60, 0.2);\n}\n.auth-form .logo[data-v-2da27582] {\n  width: 120px;\n  margin-bottom: 20px;\n}\n.auth-form h1[data-v-2da27582] {\n  font-size: 2.125em;\n  font-weight: 800;\n  line-height: 1.2;\n  margin-bottom: 2px;\n  color: #1B2539;\n}\n.auth-form h2[data-v-2da27582] {\n  font-size: 1.4375em;\n  font-weight: 500;\n  margin-bottom: 50px;\n  color: #1B2539;\n}\n.auth-form .block-form[data-v-2da27582] {\n  margin-left: auto;\n  margin-right: auto;\n}\n@media only screen and (min-width: 690px) and (max-width: 960px) {\n.auth-form[data-v-2da27582] {\n    padding-left: 20%;\n    padding-right: 20%;\n}\n}\n@media only screen and (max-width: 690px) {\n.auth-form[data-v-2da27582] {\n    width: 100%;\n}\n.auth-form h1[data-v-2da27582] {\n    font-size: 1.875em;\n}\n.auth-form h2[data-v-2da27582] {\n    font-size: 1.3125em;\n}\n}\n@media only screen and (max-width: 490px) {\n.auth-form h1[data-v-2da27582] {\n    font-size: 1.375em;\n}\n.auth-form h2[data-v-2da27582] {\n    font-size: 1.125em;\n}\n.auth-form input[data-v-2da27582] {\n    min-width: initial;\n}\n.auth-form .additional-link[data-v-2da27582] {\n    font-size: 0.9375em;\n}\n}\n@media (prefers-color-scheme: dark) {\n.auth-form h1[data-v-2da27582], .auth-form h2[data-v-2da27582], .auth-form .additional-link[data-v-2da27582] {\n    color: #bec6cf;\n}\n}\n.content-headline[data-v-2da27582] {\n  max-width: 630px;\n  margin-left: auto;\n  margin-right: auto;\n}\n.auth-form input[data-v-2da27582] {\n  min-width: initial;\n}\n.duplicator .duplicator-add-button[data-v-2da27582] {\n  width: 100%;\n}\n.duplicator .duplicator-item[data-v-2da27582] {\n  box-shadow: 0 1px 5px rgba(0, 0, 0, 0.12);\n  border-radius: 8px;\n  background: white;\n  padding: 25px;\n  margin: 0 -25px 32px;\n  position: relative;\n}\n.duplicator .duplicator-item .duplicator-title[data-v-2da27582] {\n  font-size: 1.125em;\n  margin-bottom: 20px;\n  display: block;\n  font-weight: 700;\n}\n.duplicator .duplicator-item .delete-item[data-v-2da27582] {\n  position: absolute;\n  top: 15px;\n  right: 15px;\n  cursor: pointer;\n}\n.duplicator .duplicator-item .delete-item:hover line[data-v-2da27582] {\n  stroke: #00BC7E;\n}\n.duplicator .duplicator-item input[data-v-2da27582],\n.duplicator .duplicator-item textarea[data-v-2da27582] {\n  box-shadow: none;\n  background: #FAFAFA;\n}\n.form[data-v-2da27582] {\n  max-width: 580px;\n  text-align: left;\n}\n.submit-wrapper[data-v-2da27582] {\n  text-align: right;\n}\n.submit-wrapper .button[data-v-2da27582] {\n  margin: 58px 0 50px 0;\n  width: 100%;\n}\n.title-icon[data-v-2da27582] {\n  margin-bottom: 10px;\n  -webkit-animation: spinner-data-v-2da27582 5s linear infinite;\n          animation: spinner-data-v-2da27582 5s linear infinite;\n}\n.title-icon circle[data-v-2da27582], .title-icon path[data-v-2da27582] {\n  color: inherit;\n}\n@-webkit-keyframes spinner-data-v-2da27582 {\n0% {\n    transform: rotate(0deg);\n}\n100% {\n    transform: rotate(360deg);\n}\n}\n@keyframes spinner-data-v-2da27582 {\n0% {\n    transform: rotate(0deg);\n}\n100% {\n    transform: rotate(360deg);\n}\n}\n@media (prefers-color-scheme: dark) {\n.duplicator .duplicator-item[data-v-2da27582] {\n    background: #1e2024;\n}\n.duplicator .duplicator-item input[data-v-2da27582],\n  .duplicator .duplicator-item textarea[data-v-2da27582] {\n    background: #131414;\n}\n}\n#loader[data-v-2da27582] {\n  position: relative;\n  margin-top: 80px;\n}\n.information-list li[data-v-2da27582] {\n  padding: 8px 0;\n  font-size: 1.0625em;\n  font-weight: 600;\n}\n.information-list li[data-v-2da27582]:first-child {\n  padding-top: 0;\n}\n.information-list li[data-v-2da27582]:last-child {\n  padding-bottom: 0;\n}\n',""])},pFam:function(n,a,t){"use strict";var e=t("Qqv+");t.n(e).a}}]);