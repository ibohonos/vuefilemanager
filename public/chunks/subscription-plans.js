(window.webpackJsonp=window.webpackJsonp||[]).push([[68],{"1L+q":function(n,t,a){"use strict";var e=a("4EzG");a.n(e).a},"26E0":function(n,t,a){"use strict";a.r(t);var e=a("o0o1"),i=a.n(e),o=a("A5+z"),r=a("bDRN"),p=a("4TWA"),s=a("eZ9V"),d=a("Nv84"),l=a("KnjL"),c=a("j8qy"),u=a("ASoH"),b=a("CjXH"),m=a("TJPC"),v=a("vDqi"),f=a.n(v);function h(n,t,a,e,i,o,r){try{var p=n[o](r),s=p.value}catch(n){return void a(n)}p.done?t(s):Promise.resolve(s).then(e,i)}var x={name:"subscriptionPlans",components:{AuthContentWrapper:r.a,ValidationProvider:o.ValidationProvider,ValidationObserver:o.ValidationObserver,SettingsIcon:b.W,SelectInput:p.a,AuthContent:c.a,ButtonBase:d.a,AuthButton:u.a,FormLabel:s.a,required:m.a,InfoBox:l.a,XIcon:b.ib},computed:{submitButtonText:function(){return this.isLoading?"Creating Subscription Stripe Plans":"Save and Go Next"}},data:function(){return{isLoading:!1,isError:!1,errorMessage:"",subscriptionPlans:[{id:1,type:"plan",attributes:{name:"",description:"",price:"",capacity:""}}]}},methods:{subscriptionPlansSubmit:function(){var n,t=this;return(n=i.a.mark((function n(){return i.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,t.$refs.subscriptionPlans.validate();case 2:if(n.sent){n.next=5;break}return n.abrupt("return");case 5:t.isLoading=!0,t.isError=!1,f.a.post("/api/setup/stripe-plans",{plans:t.subscriptionPlans}).then((function(){t.$router.push({name:"EnvironmentSetup"})})).catch((function(n){(n.response.status=500)&&(t.isError=!0,t.errorMessage=n.response.data.message)})).finally((function(){t.isLoading=!1}));case 8:case"end":return n.stop()}}),n)})),function(){var t=this,a=arguments;return new Promise((function(e,i){var o=n.apply(t,a);function r(n){h(o,e,i,r,p,"next",n)}function p(n){h(o,e,i,r,p,"throw",n)}r(void 0)}))})()},addRow:function(){this.subscriptionPlans.push({id:Math.floor(1e7*Math.random()),type:"plans",attributes:{name:"",description:"",price:"",capacity:""}})},removeRow:function(n){this.subscriptionPlans=this.subscriptionPlans.filter((function(t){return t.id!==n.id}))}},created:function(){this.$scrollTop()}},g=(a("SXs+"),a("KHd+")),w=Object(g.a)(x,(function(){var n=this,t=n.$createElement,a=n._self._c||t;return a("AuthContentWrapper",{ref:"auth"},[a("AuthContent",{attrs:{name:"database-credentials",visible:!0}},[a("div",{staticClass:"content-headline"},[a("settings-icon",{staticClass:"title-icon",attrs:{size:"40"}}),n._v(" "),a("h1",[n._v("Setup Wizard")]),n._v(" "),a("h2",[n._v("Set up plans for your customers.")])],1),n._v(" "),a("ValidationObserver",{ref:"subscriptionPlans",staticClass:"form block-form",attrs:{tag:"form"},on:{submit:function(t){return t.preventDefault(),n.subscriptionPlansSubmit(t)}},scopedSlots:n._u([{key:"default",fn:function(t){t.invalid;return[a("FormLabel",[n._v("Create your plans")]),n._v(" "),a("InfoBox",[a("p",[n._v("Your plans will be "),a("b",[n._v("sorted automatically")]),n._v(" in ascent order by plan price. All plans is automatically created as monthly plans.")])]),n._v(" "),a("div",{staticClass:"duplicator"},[n._l(n.subscriptionPlans,(function(t,e){return a("div",{key:e++,staticClass:"plan-item duplicator-item"},[1!==e?a("x-icon",{staticClass:"delete-item",attrs:{size:"22"},on:{click:function(a){return n.removeRow(t)}}}):n._e(),n._v(" "),a("b",{staticClass:"duplicator-title"},[n._v(n._s(e)+". Plan")]),n._v(" "),a("div",{staticClass:"block-wrapper"},[a("label",[n._v("Name:")]),n._v(" "),a("ValidationProvider",{staticClass:"input-wrapper",attrs:{tag:"div",mode:"passive",name:"Name",rules:"required"},scopedSlots:n._u([{key:"default",fn:function(e){var i=e.errors;return[a("input",{directives:[{name:"model",rawName:"v-model",value:t.attributes.name,expression:"plan.attributes.name"}],class:{"is-error":i[0]},attrs:{placeholder:"Type your plan name",type:"text"},domProps:{value:t.attributes.name},on:{input:function(a){a.target.composing||n.$set(t.attributes,"name",a.target.value)}}}),n._v(" "),i[0]?a("span",{staticClass:"error-message"},[n._v(n._s(i[0]))]):n._e()]}}],null,!0)})],1),n._v(" "),a("div",{staticClass:"block-wrapper"},[a("label",[n._v("Description (optional):")]),n._v(" "),a("ValidationProvider",{staticClass:"input-wrapper",attrs:{tag:"div",mode:"passive",name:"Description"},scopedSlots:n._u([{key:"default",fn:function(e){var i=e.errors;return[a("textarea",{directives:[{name:"model",rawName:"v-model",value:t.attributes.description,expression:"plan.attributes.description"}],class:{"is-error":i[0]},attrs:{placeholder:"Type your plan description"},domProps:{value:t.attributes.description},on:{input:function(a){a.target.composing||n.$set(t.attributes,"description",a.target.value)}}}),n._v(" "),i[0]?a("span",{staticClass:"error-message"},[n._v(n._s(i[0]))]):n._e()]}}],null,!0)})],1),n._v(" "),a("div",{staticClass:"block-wrapper"},[a("label",[n._v("Price:")]),n._v(" "),a("ValidationProvider",{staticClass:"input-wrapper",attrs:{tag:"div",mode:"passive",name:"Price",rules:"required"},scopedSlots:n._u([{key:"default",fn:function(e){var i=e.errors;return[a("input",{directives:[{name:"model",rawName:"v-model",value:t.attributes.price,expression:"plan.attributes.price"}],class:{"is-error":i[0]},attrs:{placeholder:"Type your plan price",type:"number",step:"0.01",min:"1",max:"999999999999"},domProps:{value:t.attributes.price},on:{input:function(a){a.target.composing||n.$set(t.attributes,"price",a.target.value)}}}),n._v(" "),i[0]?a("span",{staticClass:"error-message"},[n._v(n._s(i[0]))]):n._e()]}}],null,!0)})],1),n._v(" "),a("div",{staticClass:"block-wrapper"},[a("label",[n._v("Storage Capacity:")]),n._v(" "),a("ValidationProvider",{staticClass:"input-wrapper",attrs:{tag:"div",mode:"passive",name:"Storage Capacity",rules:"required"},scopedSlots:n._u([{key:"default",fn:function(e){var i=e.errors;return[a("input",{directives:[{name:"model",rawName:"v-model",value:t.attributes.capacity,expression:"plan.attributes.capacity"}],class:{"is-error":i[0]},attrs:{min:"1",max:"999999999",placeholder:"Type storage capacity in GB",type:"number"},domProps:{value:t.attributes.capacity},on:{input:function(a){a.target.composing||n.$set(t.attributes,"capacity",a.target.value)}}}),n._v(" "),i[0]?a("span",{staticClass:"error-message"},[n._v(n._s(i[0]))]):n._e()]}}],null,!0)})],1)],1)})),n._v(" "),a("ButtonBase",{staticClass:"duplicator-add-button",attrs:{"button-style":"theme-solid"},nativeOn:{click:function(t){return n.addRow(t)}}},[n._v("Add New Plan\n                ")])],2),n._v(" "),n.isError?a("InfoBox",{staticStyle:{"margin-top":"40px"},attrs:{type:"error"}},[a("p",[n._v(n._s(n.errorMessage))])]):n._e(),n._v(" "),a("div",{staticClass:"submit-wrapper"},[a("AuthButton",{attrs:{icon:"chevron-right",text:n.submitButtonText,loading:n.isLoading,disabled:n.isLoading}})],1)]}}])})],1)],1)}),[],!1,null,"137182b2",null);t.default=w.exports},"3GDE":function(n,t,a){var e=a("UqlB");"string"==typeof e&&(e=[[n.i,e,""]]);var i={hmr:!0,transform:void 0,insertInto:void 0};a("aET+")(e,i);e.locals&&(n.exports=e.locals)},"4EzG":function(n,t,a){var e=a("jexE");"string"==typeof e&&(e=[[n.i,e,""]]);var i={hmr:!0,transform:void 0,insertInto:void 0};a("aET+")(e,i);e.locals&&(n.exports=e.locals)},"4TWA":function(n,t,a){"use strict";var e=a("CjXH"),i={name:"SelectInput",props:["options","isError","default","placeholder"],components:{Edit2Icon:e.r,UserIcon:e.eb,ChevronDownIcon:e.f},data:function(){return{selected:void 0,isOpen:!1}},methods:{selectOption:function(n){this.$emit("input",n.value),this.selected=n,this.isOpen=!1},openMenu:function(){this.isOpen=!this.isOpen}},created:function(){var n=this;this.default&&(this.selected=this.options.find((function(t){return t.value===n.default})))}},o=(a("F+Qg"),a("KHd+")),r=Object(o.a)(i,(function(){var n=this,t=n.$createElement,a=n._self._c||t;return a("div",{staticClass:"select"},[a("div",{staticClass:"input-area",class:{"is-active":n.isOpen,"is-error":n.isError},on:{click:n.openMenu}},[n.selected?a("div",{staticClass:"selected"},[n.selected.icon?a("div",{staticClass:"option-icon"},["user"===n.selected.icon?a("user-icon",{attrs:{size:"14"}}):n._e(),n._v(" "),"user-edit"===n.selected.icon?a("edit2-icon",{attrs:{size:"14"}}):n._e()],1):n._e(),n._v(" "),a("span",{staticClass:"option-value"},[n._v(n._s(n.selected.label))])]):n._e(),n._v(" "),n.selected?n._e():a("div",{staticClass:"not-selected"},[a("span",{staticClass:"option-value placehoder"},[n._v(n._s(n.placeholder))])]),n._v(" "),a("chevron-down-icon",{staticClass:"chevron",attrs:{size:"19"}})],1),n._v(" "),a("transition",{attrs:{name:"slide-in"}},[n.isOpen?a("ul",{staticClass:"input-options"},n._l(n.options,(function(t,e){return a("li",{key:e,staticClass:"option-item",on:{click:function(a){return n.selectOption(t)}}},[t.icon?a("div",{staticClass:"option-icon"},["user"===t.icon?a("user-icon",{attrs:{size:"14"}}):n._e(),n._v(" "),"user-edit"===t.icon?a("edit2-icon",{attrs:{size:"14"}}):n._e()],1):n._e(),n._v(" "),a("span",{staticClass:"option-value"},[n._v(n._s(t.label))])])})),0):n._e()])],1)}),[],!1,null,"14b1d6a3",null);t.a=r.exports},"F+Qg":function(n,t,a){"use strict";var e=a("3GDE");a.n(e).a},HIlT:function(n,t,a){(n.exports=a("I1BE")(!1)).push([n.i,'.form[data-v-137182b2] {\n  max-width: 700px;\n}\n.form.inline-form[data-v-137182b2] {\n  display: flex;\n  position: relative;\n  justify-content: center;\n  margin: 0 auto;\n}\n.form.inline-form .input-wrapper[data-v-137182b2] {\n  position: relative;\n}\n.form.inline-form .input-wrapper .error-message[data-v-137182b2] {\n  position: absolute;\n  left: 0;\n  bottom: -25px;\n}\n.form.block-form .wrapper-inline[data-v-137182b2] {\n  display: flex;\n  margin: 0 -15px;\n}\n.form.block-form .wrapper-inline .block-wrapper[data-v-137182b2] {\n  width: 100%;\n  padding: 0 15px;\n}\n.form.block-form .block-wrapper[data-v-137182b2] {\n  margin-bottom: 32px;\n}\n.form.block-form .block-wrapper label[data-v-137182b2] {\n  font-size: 0.875em;\n  color: rgba(27, 37, 57, 0.8);\n  font-weight: 700;\n  display: block;\n  margin-bottom: 7px;\n  text-align: left;\n}\n.form.block-form .block-wrapper[data-v-137182b2]:last-child {\n  margin-bottom: 0;\n}\n.form.block-form .button[data-v-137182b2] {\n  margin-top: 50px;\n}\n.form .inline-wrapper[data-v-137182b2] {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n}\n.form .inline-wrapper .switch-label .input-help[data-v-137182b2] {\n  padding-top: 0;\n}\n.form .inline-wrapper .switch-label .input-label[data-v-137182b2] {\n  font-weight: 700;\n  color: #1B2539;\n  font-size: 1em;\n  margin-bottom: 5px;\n}\n.form .input-help[data-v-137182b2] {\n  font-size: 0.75em;\n  color: rgba(27, 37, 57, 0.7);\n  line-height: 1.35;\n  padding-top: 10px;\n  display: block;\n}\n.single-line-form[data-v-137182b2] {\n  display: flex;\n}\n.single-line-form .submit-button[data-v-137182b2] {\n  margin-left: 20px;\n}\n.error-message[data-v-137182b2] {\n  font-size: 0.875em;\n  color: #fd397a;\n  padding-top: 5px;\n  display: block;\n  text-align: left;\n}\ntextarea[data-v-137182b2] {\n  width: 100%;\n}\ninput[type="color"][data-v-137182b2] {\n  width: 38px;\n  height: 40px;\n  border: none;\n  outline: none;\n  background: none;\n}\ntextarea[data-v-137182b2],\ninput[type="password"][data-v-137182b2],\ninput[type="text"][data-v-137182b2],\ninput[type="number"][data-v-137182b2],\ninput[type="email"][data-v-137182b2] {\n  border: 1px solid transparent;\n  transition: 150ms all ease;\n  font-size: 1em;\n  border-radius: 8px;\n  padding: 13px 20px;\n  -webkit-appearance: none;\n     -moz-appearance: none;\n          appearance: none;\n  font-weight: 700;\n  outline: 0;\n  width: 100%;\n  box-shadow: 0 1px 5px rgba(0, 0, 0, 0.12);\n}\ntextarea.is-error[data-v-137182b2],\ninput[type="password"].is-error[data-v-137182b2],\ninput[type="text"].is-error[data-v-137182b2],\ninput[type="number"].is-error[data-v-137182b2],\ninput[type="email"].is-error[data-v-137182b2] {\n  border-color: #fd397a;\n}\ntextarea[data-v-137182b2]::-webkit-input-placeholder, input[type="password"][data-v-137182b2]::-webkit-input-placeholder, input[type="text"][data-v-137182b2]::-webkit-input-placeholder, input[type="number"][data-v-137182b2]::-webkit-input-placeholder, input[type="email"][data-v-137182b2]::-webkit-input-placeholder {\n  color: rgba(27, 37, 57, 0.5);\n  font-size: 0.9375em;\n}\ntextarea[data-v-137182b2]::-moz-placeholder, input[type="password"][data-v-137182b2]::-moz-placeholder, input[type="text"][data-v-137182b2]::-moz-placeholder, input[type="number"][data-v-137182b2]::-moz-placeholder, input[type="email"][data-v-137182b2]::-moz-placeholder {\n  color: rgba(27, 37, 57, 0.5);\n  font-size: 0.9375em;\n}\ntextarea[data-v-137182b2]:-ms-input-placeholder, input[type="password"][data-v-137182b2]:-ms-input-placeholder, input[type="text"][data-v-137182b2]:-ms-input-placeholder, input[type="number"][data-v-137182b2]:-ms-input-placeholder, input[type="email"][data-v-137182b2]:-ms-input-placeholder {\n  color: rgba(27, 37, 57, 0.5);\n  font-size: 0.9375em;\n}\ntextarea[data-v-137182b2]::-ms-input-placeholder, input[type="password"][data-v-137182b2]::-ms-input-placeholder, input[type="text"][data-v-137182b2]::-ms-input-placeholder, input[type="number"][data-v-137182b2]::-ms-input-placeholder, input[type="email"][data-v-137182b2]::-ms-input-placeholder {\n  color: rgba(27, 37, 57, 0.5);\n  font-size: 0.9375em;\n}\ntextarea[data-v-137182b2]::placeholder,\ninput[type="password"][data-v-137182b2]::placeholder,\ninput[type="text"][data-v-137182b2]::placeholder,\ninput[type="number"][data-v-137182b2]::placeholder,\ninput[type="email"][data-v-137182b2]::placeholder {\n  color: rgba(27, 37, 57, 0.5);\n  font-size: 0.9375em;\n}\ntextarea[disabled][data-v-137182b2],\ninput[type="password"][disabled][data-v-137182b2],\ninput[type="text"][disabled][data-v-137182b2],\ninput[type="number"][disabled][data-v-137182b2],\ninput[type="email"][disabled][data-v-137182b2] {\n  background: white;\n  color: rgba(27, 37, 57, 0.8);\n  -webkit-text-fill-color: rgba(27, 37, 57, 0.8);\n  opacity: 1;\n  cursor: not-allowed;\n}\n.additional-link[data-v-137182b2] {\n  font-size: 1em;\n  margin-top: 50px;\n  display: block;\n}\n.additional-link b[data-v-137182b2], .additional-link a[data-v-137182b2] {\n  cursor: pointer;\n}\n.additional-link b[data-v-137182b2]:hover, .additional-link a[data-v-137182b2]:hover {\n  text-decoration: underline;\n}\n@media only screen and (max-width: 1024px) {\n.form[data-v-137182b2] {\n    max-width: 100%;\n}\n}\n@media only screen and (max-width: 960px) {\n.form .button[data-v-137182b2] {\n    margin-top: 20px;\n    width: 100%;\n    margin-left: 0;\n    margin-right: 0;\n}\n.form input[data-v-137182b2], .form textarea[data-v-137182b2] {\n    width: 100%;\n    min-width: 100%;\n}\n.form.block-form .block-wrapper[data-v-137182b2] {\n    display: block;\n}\n.form.block-form .block-wrapper label[data-v-137182b2] {\n    width: 100%;\n    padding-right: 0;\n    display: block;\n    margin-bottom: 7px;\n    text-align: left !important;\n    font-size: 0.875em;\n    padding-top: 0;\n}\n.form.block-form .button[data-v-137182b2] {\n    margin-top: 25px;\n    margin-left: 0;\n    margin-right: 0;\n}\n.form.inline-form[data-v-137182b2] {\n    display: block;\n}\n.form.inline-form .input-wrapper .error-message[data-v-137182b2] {\n    position: relative;\n    bottom: 0;\n}\n.form .button[data-v-137182b2] {\n    padding: 14px 32px;\n}\n.single-line-form[data-v-137182b2] {\n    display: block;\n}\n.single-line-form .submit-button[data-v-137182b2] {\n    margin-left: 0;\n    margin-top: 20px;\n    width: 100%;\n}\ntextarea[data-v-137182b2],\n  input[type="password"][data-v-137182b2],\n  input[type="number"][data-v-137182b2],\n  input[type="text"][data-v-137182b2],\n  input[type="email"][data-v-137182b2] {\n    padding: 14px 20px;\n}\n}\n@media only screen and (max-width: 690px) {\n.form.block-form .wrapper-inline[data-v-137182b2] {\n    display: block;\n}\n}\n@media (prefers-color-scheme: dark) {\n.form .input-help[data-v-137182b2] {\n    color: #7d858c;\n}\n.form.block-form .block-wrapper label[data-v-137182b2] {\n    color: #bec6cf;\n}\n.form .inline-wrapper .switch-label .input-label[data-v-137182b2] {\n    color: #bec6cf;\n}\ntextarea[data-v-137182b2],\n  input[type="password"][data-v-137182b2],\n  input[type="text"][data-v-137182b2],\n  input[type="number"][data-v-137182b2],\n  input[type="email"][data-v-137182b2] {\n    border-color: #1e2024;\n    background: #1e2024;\n    color: #bec6cf;\n}\ntextarea[data-v-137182b2]::-webkit-input-placeholder, input[type="password"][data-v-137182b2]::-webkit-input-placeholder, input[type="text"][data-v-137182b2]::-webkit-input-placeholder, input[type="number"][data-v-137182b2]::-webkit-input-placeholder, input[type="email"][data-v-137182b2]::-webkit-input-placeholder {\n    color: #7d858c;\n}\ntextarea[data-v-137182b2]::-moz-placeholder, input[type="password"][data-v-137182b2]::-moz-placeholder, input[type="text"][data-v-137182b2]::-moz-placeholder, input[type="number"][data-v-137182b2]::-moz-placeholder, input[type="email"][data-v-137182b2]::-moz-placeholder {\n    color: #7d858c;\n}\ntextarea[data-v-137182b2]:-ms-input-placeholder, input[type="password"][data-v-137182b2]:-ms-input-placeholder, input[type="text"][data-v-137182b2]:-ms-input-placeholder, input[type="number"][data-v-137182b2]:-ms-input-placeholder, input[type="email"][data-v-137182b2]:-ms-input-placeholder {\n    color: #7d858c;\n}\ntextarea[data-v-137182b2]::-ms-input-placeholder, input[type="password"][data-v-137182b2]::-ms-input-placeholder, input[type="text"][data-v-137182b2]::-ms-input-placeholder, input[type="number"][data-v-137182b2]::-ms-input-placeholder, input[type="email"][data-v-137182b2]::-ms-input-placeholder {\n    color: #7d858c;\n}\ntextarea[data-v-137182b2]::placeholder,\n  input[type="password"][data-v-137182b2]::placeholder,\n  input[type="text"][data-v-137182b2]::placeholder,\n  input[type="number"][data-v-137182b2]::placeholder,\n  input[type="email"][data-v-137182b2]::placeholder {\n    color: #7d858c;\n}\ntextarea[disabled][data-v-137182b2],\n  input[type="password"][disabled][data-v-137182b2],\n  input[type="text"][disabled][data-v-137182b2],\n  input[type="number"][disabled][data-v-137182b2],\n  input[type="email"][disabled][data-v-137182b2] {\n    background: #1e2024;\n    color: rgba(125, 133, 140, 0.8);\n    -webkit-text-fill-color: rgba(125, 133, 140, 0.8);\n}\n.popup-wrapper textarea[data-v-137182b2],\n  .popup-wrapper input[type="password"][data-v-137182b2],\n  .popup-wrapper input[type="text"][data-v-137182b2],\n  .popup-wrapper input[type="number"][data-v-137182b2],\n  .popup-wrapper input[type="email"][data-v-137182b2] {\n    background: #25272c;\n}\n}\n.auth-logo-text[data-v-137182b2] {\n  font-size: 1.375em;\n  font-weight: 800;\n  margin-bottom: 40px;\n  display: block;\n}\n.auth-form[data-v-137182b2] {\n  text-align: center;\n  max-width: 600px;\n  padding: 25px 20px;\n  display: table-cell;\n  vertical-align: middle;\n}\n.auth-form input[data-v-137182b2] {\n  min-width: 310px;\n}\n.auth-form .additional-link a[data-v-137182b2] {\n  font-weight: 700;\n  text-decoration: none;\n}\n.auth-form .user-avatar[data-v-137182b2] {\n  width: 100px;\n  height: 100px;\n  -o-object-fit: cover;\n     object-fit: cover;\n  margin-bottom: 20px;\n  border-radius: 8px;\n  box-shadow: 0 10px 30px rgba(25, 54, 60, 0.2);\n}\n.auth-form .logo[data-v-137182b2] {\n  width: 120px;\n  margin-bottom: 20px;\n}\n.auth-form h1[data-v-137182b2] {\n  font-size: 2.125em;\n  font-weight: 800;\n  line-height: 1.2;\n  margin-bottom: 2px;\n  color: #1B2539;\n}\n.auth-form h2[data-v-137182b2] {\n  font-size: 1.4375em;\n  font-weight: 500;\n  margin-bottom: 50px;\n  color: #1B2539;\n}\n.auth-form .block-form[data-v-137182b2] {\n  margin-left: auto;\n  margin-right: auto;\n}\n@media only screen and (min-width: 690px) and (max-width: 960px) {\n.auth-form[data-v-137182b2] {\n    padding-left: 20%;\n    padding-right: 20%;\n}\n}\n@media only screen and (max-width: 690px) {\n.auth-form[data-v-137182b2] {\n    width: 100%;\n}\n.auth-form h1[data-v-137182b2] {\n    font-size: 1.875em;\n}\n.auth-form h2[data-v-137182b2] {\n    font-size: 1.3125em;\n}\n}\n@media only screen and (max-width: 490px) {\n.auth-form h1[data-v-137182b2] {\n    font-size: 1.375em;\n}\n.auth-form h2[data-v-137182b2] {\n    font-size: 1.125em;\n}\n.auth-form input[data-v-137182b2] {\n    min-width: initial;\n}\n.auth-form .additional-link[data-v-137182b2] {\n    font-size: 0.9375em;\n}\n}\n@media (prefers-color-scheme: dark) {\n.auth-form h1[data-v-137182b2], .auth-form h2[data-v-137182b2], .auth-form .additional-link[data-v-137182b2] {\n    color: #bec6cf;\n}\n}\n.content-headline[data-v-137182b2] {\n  max-width: 630px;\n  margin-left: auto;\n  margin-right: auto;\n}\n.auth-form input[data-v-137182b2] {\n  min-width: initial;\n}\n.duplicator .duplicator-add-button[data-v-137182b2] {\n  width: 100%;\n}\n.duplicator .duplicator-item[data-v-137182b2] {\n  box-shadow: 0 1px 5px rgba(0, 0, 0, 0.12);\n  border-radius: 8px;\n  background: white;\n  padding: 25px;\n  margin: 0 -25px 32px;\n  position: relative;\n}\n.duplicator .duplicator-item .duplicator-title[data-v-137182b2] {\n  font-size: 1.125em;\n  margin-bottom: 20px;\n  display: block;\n  font-weight: 700;\n}\n.duplicator .duplicator-item .delete-item[data-v-137182b2] {\n  position: absolute;\n  top: 15px;\n  right: 15px;\n  cursor: pointer;\n}\n.duplicator .duplicator-item .delete-item:hover line[data-v-137182b2] {\n  stroke: #00BC7E;\n}\n.duplicator .duplicator-item input[data-v-137182b2],\n.duplicator .duplicator-item textarea[data-v-137182b2] {\n  box-shadow: none;\n  background: #FAFAFA;\n}\n.form[data-v-137182b2] {\n  max-width: 580px;\n  text-align: left;\n}\n.submit-wrapper[data-v-137182b2] {\n  text-align: right;\n}\n.submit-wrapper .button[data-v-137182b2] {\n  margin: 58px 0 50px 0;\n  width: 100%;\n}\n.title-icon[data-v-137182b2] {\n  margin-bottom: 10px;\n  -webkit-animation: spinner-data-v-137182b2 5s linear infinite;\n          animation: spinner-data-v-137182b2 5s linear infinite;\n}\n.title-icon circle[data-v-137182b2], .title-icon path[data-v-137182b2] {\n  color: inherit;\n}\n@-webkit-keyframes spinner-data-v-137182b2 {\n0% {\n    transform: rotate(0deg);\n}\n100% {\n    transform: rotate(360deg);\n}\n}\n@keyframes spinner-data-v-137182b2 {\n0% {\n    transform: rotate(0deg);\n}\n100% {\n    transform: rotate(360deg);\n}\n}\n@media (prefers-color-scheme: dark) {\n.duplicator .duplicator-item[data-v-137182b2] {\n    background: #1e2024;\n}\n.duplicator .duplicator-item input[data-v-137182b2],\n  .duplicator .duplicator-item textarea[data-v-137182b2] {\n    background: #141414;\n}\n}\n',""])},KnjL:function(n,t,a){"use strict";var e={name:"InfoBox",props:["type"]},i=(a("pFam"),a("KHd+")),o=Object(i.a)(e,(function(){var n=this.$createElement;return(this._self._c||n)("div",{staticClass:"info-box",class:this.type},[this._t("default")],2)}),[],!1,null,"8e7c42f6",null);t.a=o.exports},"Qqv+":function(n,t,a){var e=a("biqn");"string"==typeof e&&(e=[[n.i,e,""]]);var i={hmr:!0,transform:void 0,insertInto:void 0};a("aET+")(e,i);e.locals&&(n.exports=e.locals)},"SXs+":function(n,t,a){"use strict";var e=a("YlWo");a.n(e).a},UqlB:function(n,t,a){(n.exports=a("I1BE")(!1)).push([n.i,".select[data-v-14b1d6a3] {\n  position: relative;\n  -webkit-user-select: none;\n     -moz-user-select: none;\n      -ms-user-select: none;\n          user-select: none;\n  width: 100%;\n}\n.input-options[data-v-14b1d6a3] {\n  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.12);\n  background: white;\n  border-radius: 8px;\n  position: absolute;\n  overflow: hidden;\n  top: 65px;\n  left: 0;\n  right: 0;\n  z-index: 9;\n  max-height: 295px;\n  overflow-y: auto;\n}\n.input-options .option-item[data-v-14b1d6a3] {\n  padding: 13px 20px;\n  display: block;\n  cursor: pointer;\n}\n.input-options .option-item[data-v-14b1d6a3]:hover {\n  color: #00BC7E;\n  background: #f4f5f6;\n}\n.input-options .option-item[data-v-14b1d6a3]:last-child {\n  border-bottom: none;\n}\n.input-area[data-v-14b1d6a3] {\n  border-width: 1px;\n  border-style: solid;\n  border-color: transparent;\n  justify-content: space-between;\n  box-shadow: 0 1px 5px rgba(0, 0, 0, 0.12);\n  transition: 150ms all ease;\n  align-items: center;\n  border-radius: 8px;\n  padding: 13px 20px;\n  display: flex;\n  outline: 0;\n  width: 100%;\n  cursor: pointer;\n}\n.input-area .chevron[data-v-14b1d6a3] {\n  transition: 150ms all ease;\n}\n.input-area.is-active .chevron[data-v-14b1d6a3] {\n  transform: rotate(180deg);\n}\n.input-area.is-error[data-v-14b1d6a3] {\n  border-color: #fd397a;\n  box-shadow: 0 0 7px rgba(253, 57, 122, 0.3);\n}\n.option-icon[data-v-14b1d6a3] {\n  width: 20px;\n  display: inline-block;\n  font-size: 0.625em;\n}\n.option-icon svg[data-v-14b1d6a3] {\n  margin-top: -4px;\n  vertical-align: middle;\n}\n.option-value[data-v-14b1d6a3] {\n  font-size: 0.875em;\n  font-weight: 700;\n  width: 100%;\n  vertical-align: middle;\n}\n.option-value.placehoder[data-v-14b1d6a3] {\n  color: rgba(27, 37, 57, 0.5);\n}\n.slide-in-enter-active[data-v-14b1d6a3] {\n  transition: all 150ms ease;\n}\n.slide-in-enter[data-v-14b1d6a3] {\n  opacity: 0;\n  transform: translateY(-50px);\n}\n@media (prefers-color-scheme: dark) {\n.input-area[data-v-14b1d6a3] {\n    background: #1e2024;\n    border-color: #1e2024;\n}\n.popup-wrapper .input-area[data-v-14b1d6a3] {\n    background: #25272c;\n}\n.input-options[data-v-14b1d6a3] {\n    background: #1e2024;\n}\n.input-options .option-item[data-v-14b1d6a3] {\n    border-bottom: none;\n}\n.input-options .option-item[data-v-14b1d6a3]:hover {\n    background: #2a2c32;\n}\n.input-options .option-item:hover .option-icon path[data-v-14b1d6a3], .input-options .option-item:hover .option-icon circle[data-v-14b1d6a3] {\n    color: inherit;\n}\n.input-options .option-item[data-v-14b1d6a3]:last-child {\n    border-bottom: none;\n}\n.option-value.placehoder[data-v-14b1d6a3] {\n    color: #7d858c;\n}\n}\n",""])},YlWo:function(n,t,a){var e=a("HIlT");"string"==typeof e&&(e=[[n.i,e,""]]);var i={hmr:!0,transform:void 0,insertInto:void 0};a("aET+")(e,i);e.locals&&(n.exports=e.locals)},biqn:function(n,t,a){(n.exports=a("I1BE")(!1)).push([n.i,".info-box[data-v-8e7c42f6] {\n  padding: 20px;\n  border-radius: 8px;\n  margin-bottom: 32px;\n  background: #f4f5f6;\n  text-align: left;\n}\n.info-box.error[data-v-8e7c42f6] {\n  background: rgba(253, 57, 122, 0.1);\n}\n.info-box.error p[data-v-8e7c42f6], .info-box.error a[data-v-8e7c42f6] {\n  color: #fd397a;\n}\n.info-box.error a[data-v-8e7c42f6] {\n  text-decoration: underline;\n}\n.info-box p[data-v-8e7c42f6] {\n  font-size: 15px;\n  line-height: 1.6;\n  word-break: break-word;\n  font-weight: 600;\n}\n.info-box p[data-v-8e7c42f6] a {\n  font-size: 15px;\n}\n.info-box p[data-v-8e7c42f6] b {\n  font-size: 15px;\n  font-weight: 700;\n}\n.info-box b[data-v-8e7c42f6] {\n  font-weight: 700;\n}\n.info-box a[data-v-8e7c42f6] {\n  font-weight: 700;\n  font-size: 0.9375em;\n  line-height: 1.6;\n}\n.info-box ul[data-v-8e7c42f6] {\n  margin-top: 15px;\n  display: block;\n}\n.info-box ul li[data-v-8e7c42f6] {\n  display: block;\n}\n.info-box ul li a[data-v-8e7c42f6] {\n  display: block;\n}\n@media only screen and (max-width: 690px) {\n.info-box[data-v-8e7c42f6] {\n    padding: 15px;\n}\n}\n@media (prefers-color-scheme: dark) {\n.info-box[data-v-8e7c42f6] {\n    background: #1e2024;\n}\n.info-box p[data-v-8e7c42f6] {\n    color: #bec6cf;\n}\n.info-box ul li[data-v-8e7c42f6] {\n    color: #bec6cf;\n}\n}\n",""])},eZ9V:function(n,t,a){"use strict";var e=a("CjXH"),i={name:"FormLabel",props:["icon"],components:{Edit2Icon:e.r,SettingsIcon:e.W}},o=(a("1L+q"),a("KHd+")),r=Object(o.a)(i,(function(){var n=this.$createElement,t=this._self._c||n;return t("div",{staticClass:"form-label"},[this.icon?this._e():t("edit-2-icon",{staticClass:"icon text-theme",attrs:{size:"22"}}),this._v(" "),"settings"===this.icon?t("settings-icon",{staticClass:"icon text-theme",attrs:{size:"22"}}):this._e(),this._v(" "),t("b",{staticClass:"label"},[this._t("default")],2)],1)}),[],!1,null,"10bcab7e",null);t.a=r.exports},jexE:function(n,t,a){(n.exports=a("I1BE")(!1)).push([n.i,".form-label[data-v-10bcab7e] {\n  display: flex;\n  align-items: center;\n  margin-bottom: 30px;\n}\n.form-label .icon[data-v-10bcab7e] {\n  margin-right: 10px;\n}\n.form-label .icon path[data-v-10bcab7e], .form-label .icon circle[data-v-10bcab7e] {\n  color: inherit;\n}\n.form-label .label[data-v-10bcab7e] {\n  font-size: 1.125em;\n  font-weight: 700;\n}\n@media (prefers-color-scheme: dark) {\n.form-label .label[data-v-10bcab7e] {\n    color: #bec6cf;\n}\n}\n",""])},pFam:function(n,t,a){"use strict";var e=a("Qqv+");a.n(e).a}}]);