(window.webpackJsonp=window.webpackJsonp||[]).push([[29],{106:function(a,n,t){var e=t(332);"string"==typeof e&&(e=[[a.i,e,""]]);var o={hmr:!0,transform:void 0,insertInto:void 0};t(6)(e,o);e.locals&&(a.exports=e.locals)},12:function(a,n,t){"use strict";var e={name:"InfoBox",props:["type"]},o=(t(227),t(0)),i=Object(o.a)(e,(function(){var a=this.$createElement;return(this._self._c||a)("div",{staticClass:"info-box",class:this.type},[this._t("default")],2)}),[],!1,null,"bf43be5e",null);n.a=i.exports},13:function(a,n,t){"use strict";var e={name:"FormLabel",components:{Edit2Icon:t(1).m}},o=(t(229),t(0)),i=Object(o.a)(e,(function(){var a=this.$createElement,n=this._self._c||a;return n("div",{staticClass:"form-label"},[n("edit-2-icon",{staticClass:"icon",attrs:{size:"22"}}),this._v(" "),n("b",{staticClass:"label"},[this._t("default")],2)],1)}),[],!1,null,"c1157a8e",null);n.a=i.exports},15:function(a,n,t){"use strict";var e={name:"PageTab",props:["isLoading"],components:{Spinner:t(19).a}},o=(t(233),t(0)),i=Object(o.a)(e,(function(){var a=this.$createElement,n=this._self._c||a;return n("div",{staticClass:"page-tab"},[this.isLoading?n("div",{attrs:{id:"loader"}},[n("Spinner")],1):this._e(),this._v(" "),this.isLoading?this._e():this._t("default")],2)}),[],!1,null,"cb8ef734",null);n.a=i.exports},16:function(a,n,t){"use strict";var e={name:"PageTabGroup"},o=(t(231),t(0)),i=Object(o.a)(e,(function(){var a=this.$createElement;return(this._self._c||a)("div",{staticClass:"page-tab-group"},[this._t("default")],2)}),[],!1,null,"1bb470e4",null);n.a=i.exports},227:function(a,n,t){"use strict";var e=t(53);t.n(e).a},228:function(a,n,t){(a.exports=t(5)(!1)).push([a.i,".info-box[data-v-bf43be5e] {\n  padding: 20px;\n  border-radius: 8px;\n  margin-bottom: 32px;\n  background: #f4f5f6;\n  text-align: left;\n}\n.info-box.error[data-v-bf43be5e] {\n  background: rgba(253, 57, 122, 0.1);\n}\n.info-box.error p[data-v-bf43be5e], .info-box.error a[data-v-bf43be5e] {\n  color: #fd397a;\n}\n.info-box.error a[data-v-bf43be5e] {\n  text-decoration: underline;\n}\n.info-box p[data-v-bf43be5e] {\n  font-size: 0.9375em;\n  line-height: 1.6;\n  word-break: break-word;\n  font-weight: 600;\n}\n.info-box p[data-v-bf43be5e] a {\n  color: #00BC7E;\n}\n.info-box b[data-v-bf43be5e] {\n  font-weight: 700;\n  color: #00BC7E;\n}\n.info-box a[data-v-bf43be5e] {\n  color: #00BC7E;\n  font-weight: 700;\n  font-size: 0.9375em;\n  line-height: 1.6;\n}\n.info-box ul[data-v-bf43be5e] {\n  margin-top: 15px;\n  display: block;\n}\n.info-box ul li[data-v-bf43be5e] {\n  display: block;\n}\n.info-box ul li a[data-v-bf43be5e] {\n  display: block;\n}\n@media only screen and (max-width: 690px) {\n.info-box[data-v-bf43be5e] {\n    padding: 15px;\n}\n}\n@media (prefers-color-scheme: dark) {\n.info-box[data-v-bf43be5e] {\n    background: #1e2024;\n}\n.info-box p[data-v-bf43be5e] {\n    color: #bec6cf;\n}\n.info-box ul li[data-v-bf43be5e] {\n    color: #bec6cf;\n}\n}\n",""])},229:function(a,n,t){"use strict";var e=t(54);t.n(e).a},230:function(a,n,t){(a.exports=t(5)(!1)).push([a.i,".form-label[data-v-c1157a8e] {\n  display: flex;\n  align-items: center;\n  margin-bottom: 30px;\n}\n.form-label .icon[data-v-c1157a8e] {\n  margin-right: 10px;\n}\n.form-label .icon path[data-v-c1157a8e] {\n  stroke: #00BC7E;\n}\n.form-label .label[data-v-c1157a8e] {\n  font-size: 1.125em;\n  font-weight: 700;\n}\n@media (prefers-color-scheme: dark) {\n.form-label .label[data-v-c1157a8e] {\n    color: #bec6cf;\n}\n}\n",""])},231:function(a,n,t){"use strict";var e=t(55);t.n(e).a},232:function(a,n,t){(a.exports=t(5)(!1)).push([a.i,".page-tab-group[data-v-1bb470e4] {\n  margin-bottom: 65px;\n}\n",""])},233:function(a,n,t){"use strict";var e=t(56);t.n(e).a},234:function(a,n,t){(a.exports=t(5)(!1)).push([a.i,"",""])},245:function(a,n,t){"use strict";var e=t(62);t.n(e).a},246:function(a,n,t){(a.exports=t(5)(!1)).push([a.i,".setup-box[data-v-664a78dc] {\n  padding: 20px;\n  border-radius: 8px;\n  margin-bottom: 30px;\n}\n.setup-box .title[data-v-664a78dc] {\n  font-size: 1.3125em;\n  margin-bottom: 5px;\n  display: block;\n  font-weight: 700;\n}\n.setup-box .description[data-v-664a78dc] {\n  font-size: 0.9375em;\n  line-height: 1.5;\n  margin-bottom: 20px;\n}\n.setup-box.base[data-v-664a78dc] {\n  background: #f4f5f6;\n}\n.setup-box.danger[data-v-664a78dc] {\n  background: #f4f5f6;\n}\n.setup-box.danger .title[data-v-664a78dc] {\n  color: #fd397a;\n}\n.setup-box[data-v-664a78dc] input[type='text'], .setup-box[data-v-664a78dc] input[type='number'],\n.setup-box[data-v-664a78dc] input .input-area {\n  background: white;\n}\n.setup-box[data-v-664a78dc] .input-area {\n  background: white;\n}\n.setup-box[data-v-664a78dc] .form {\n  margin-top: 20px;\n}\n.setup-box[data-v-664a78dc] .form.block-form {\n  max-width: 450px;\n}\n.setup-box[data-v-664a78dc] .form.block-form .single-line-form {\n  display: flex;\n}\n.setup-box[data-v-664a78dc] .form.block-form .single-line-form .submit-button {\n  margin-left: 20px;\n}\n@media only screen and (max-width: 960px) {\n.setup-box[data-v-664a78dc] .form.block-form {\n    max-width: 100%;\n}\n.setup-box[data-v-664a78dc] .form input {\n    min-width: initial;\n}\n}\n@media only screen and (max-width: 690px) {\n.setup-box[data-v-664a78dc] {\n    padding: 15px;\n}\n.setup-box .title[data-v-664a78dc] {\n    font-size: 1.0625em;\n    margin-bottom: 10px;\n}\n.setup-box .description[data-v-664a78dc] {\n    font-size: 0.875em;\n}\n.setup-box[data-v-664a78dc] .form.block-form .single-line-form {\n    display: block;\n}\n.setup-box[data-v-664a78dc] .form.block-form .single-line-form .submit-button {\n    margin-left: 0;\n    margin-top: 10px;\n}\n}\n@media (prefers-color-scheme: dark) {\n.setup-box.base[data-v-664a78dc] {\n    background: #1e2024;\n}\n.setup-box.danger[data-v-664a78dc] {\n    background: #1e2024;\n}\n.setup-box[data-v-664a78dc] input[type='text'], .setup-box[data-v-664a78dc] input[type='number'],\n  .setup-box[data-v-664a78dc] input .input-area {\n    background: #111314;\n}\n.setup-box[data-v-664a78dc] .input-area {\n    background: #111314;\n}\n}\n",""])},25:function(a,n,t){"use strict";var e={name:"SetupBox",props:["title","description","theme"]},o=(t(245),t(0)),i=Object(o.a)(e,(function(){var a=this,n=a.$createElement,t=a._self._c||n;return t("div",{staticClass:"setup-box",class:a.theme},[t("b",{staticClass:"title"},[a._v(a._s(a.title))]),a._v(" "),t("p",{staticClass:"description"},[a._v(a._s(a.description))]),a._v(" "),a._t("default")],2)}),[],!1,null,"664a78dc",null);n.a=i.exports},331:function(a,n,t){"use strict";var e=t(106);t.n(e).a},332:function(a,n,t){(a.exports=t(5)(!1)).push([a.i,'.form[data-v-3f9382aa] {\n  max-width: 700px;\n}\n.form.inline-form[data-v-3f9382aa] {\n  display: flex;\n  position: relative;\n  justify-content: center;\n  margin: 0 auto;\n}\n.form.inline-form .input-wrapper[data-v-3f9382aa] {\n  position: relative;\n}\n.form.inline-form .input-wrapper .error-message[data-v-3f9382aa] {\n  position: absolute;\n  left: 0;\n  bottom: -25px;\n}\n.form.block-form .wrapper-inline[data-v-3f9382aa] {\n  display: flex;\n  margin: 0 -15px;\n}\n.form.block-form .wrapper-inline .block-wrapper[data-v-3f9382aa] {\n  width: 100%;\n  padding: 0 15px;\n}\n.form.block-form .block-wrapper[data-v-3f9382aa] {\n  margin-bottom: 32px;\n}\n.form.block-form .block-wrapper label[data-v-3f9382aa] {\n  font-size: 0.875em;\n  color: rgba(27, 37, 57, 0.8);\n  font-weight: 700;\n  display: block;\n  margin-bottom: 7px;\n  text-align: left;\n}\n.form.block-form .block-wrapper[data-v-3f9382aa]:last-child {\n  margin-bottom: 0;\n}\n.form.block-form .button[data-v-3f9382aa] {\n  margin-top: 50px;\n}\n.form .inline-wrapper[data-v-3f9382aa] {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n}\n.form .inline-wrapper .switch-label .input-help[data-v-3f9382aa] {\n  padding-top: 0;\n}\n.form .inline-wrapper .switch-label .input-label[data-v-3f9382aa] {\n  font-weight: 700;\n  color: #1B2539;\n  font-size: 1em;\n  margin-bottom: 5px;\n}\n.form .input-help[data-v-3f9382aa] {\n  font-size: 0.75em;\n  color: rgba(27, 37, 57, 0.7);\n  line-height: 1.35;\n  padding-top: 10px;\n  display: block;\n}\n.single-line-form[data-v-3f9382aa] {\n  display: flex;\n}\n.single-line-form .submit-button[data-v-3f9382aa] {\n  margin-left: 20px;\n}\n.error-message[data-v-3f9382aa] {\n  font-size: 0.875em;\n  color: #fd397a;\n  padding-top: 5px;\n  display: block;\n  text-align: left;\n}\ntextarea[data-v-3f9382aa] {\n  width: 100%;\n}\ntextarea[data-v-3f9382aa],\ninput[type="password"][data-v-3f9382aa],\ninput[type="text"][data-v-3f9382aa],\ninput[type="number"][data-v-3f9382aa],\ninput[type="email"][data-v-3f9382aa] {\n  border: 1px solid transparent;\n  transition: 150ms all ease;\n  font-size: 1em;\n  border-radius: 8px;\n  padding: 13px 20px;\n  -webkit-appearance: none;\n     -moz-appearance: none;\n          appearance: none;\n  font-weight: 700;\n  outline: 0;\n  width: 100%;\n  box-shadow: 0 1px 5px rgba(0, 0, 0, 0.12);\n}\ntextarea.is-error[data-v-3f9382aa],\ninput[type="password"].is-error[data-v-3f9382aa],\ninput[type="text"].is-error[data-v-3f9382aa],\ninput[type="number"].is-error[data-v-3f9382aa],\ninput[type="email"].is-error[data-v-3f9382aa] {\n  border-color: #fd397a;\n  box-shadow: 0 1px 5px rgba(253, 57, 122, 0.3);\n}\ntextarea[data-v-3f9382aa]::-webkit-input-placeholder, input[type="password"][data-v-3f9382aa]::-webkit-input-placeholder, input[type="text"][data-v-3f9382aa]::-webkit-input-placeholder, input[type="number"][data-v-3f9382aa]::-webkit-input-placeholder, input[type="email"][data-v-3f9382aa]::-webkit-input-placeholder {\n  color: rgba(27, 37, 57, 0.5);\n  font-size: 0.9375em;\n}\ntextarea[data-v-3f9382aa]::-moz-placeholder, input[type="password"][data-v-3f9382aa]::-moz-placeholder, input[type="text"][data-v-3f9382aa]::-moz-placeholder, input[type="number"][data-v-3f9382aa]::-moz-placeholder, input[type="email"][data-v-3f9382aa]::-moz-placeholder {\n  color: rgba(27, 37, 57, 0.5);\n  font-size: 0.9375em;\n}\ntextarea[data-v-3f9382aa]:-ms-input-placeholder, input[type="password"][data-v-3f9382aa]:-ms-input-placeholder, input[type="text"][data-v-3f9382aa]:-ms-input-placeholder, input[type="number"][data-v-3f9382aa]:-ms-input-placeholder, input[type="email"][data-v-3f9382aa]:-ms-input-placeholder {\n  color: rgba(27, 37, 57, 0.5);\n  font-size: 0.9375em;\n}\ntextarea[data-v-3f9382aa]::-ms-input-placeholder, input[type="password"][data-v-3f9382aa]::-ms-input-placeholder, input[type="text"][data-v-3f9382aa]::-ms-input-placeholder, input[type="number"][data-v-3f9382aa]::-ms-input-placeholder, input[type="email"][data-v-3f9382aa]::-ms-input-placeholder {\n  color: rgba(27, 37, 57, 0.5);\n  font-size: 0.9375em;\n}\ntextarea[data-v-3f9382aa]::placeholder,\ninput[type="password"][data-v-3f9382aa]::placeholder,\ninput[type="text"][data-v-3f9382aa]::placeholder,\ninput[type="number"][data-v-3f9382aa]::placeholder,\ninput[type="email"][data-v-3f9382aa]::placeholder {\n  color: rgba(27, 37, 57, 0.5);\n  font-size: 0.9375em;\n}\ntextarea[data-v-3f9382aa]:focus,\ninput[type="password"][data-v-3f9382aa]:focus,\ninput[type="text"][data-v-3f9382aa]:focus,\ninput[type="number"][data-v-3f9382aa]:focus,\ninput[type="email"][data-v-3f9382aa]:focus {\n  border-color: #00BC7E;\n  box-shadow: 0 1px 5px rgba(0, 188, 126, 0.3);\n}\ntextarea[disabled][data-v-3f9382aa],\ninput[type="password"][disabled][data-v-3f9382aa],\ninput[type="text"][disabled][data-v-3f9382aa],\ninput[type="number"][disabled][data-v-3f9382aa],\ninput[type="email"][disabled][data-v-3f9382aa] {\n  background: white;\n  color: rgba(27, 37, 57, 0.8);\n  -webkit-text-fill-color: rgba(27, 37, 57, 0.8);\n  opacity: 1;\n  cursor: not-allowed;\n}\n.additional-link[data-v-3f9382aa] {\n  font-size: 1em;\n  margin-top: 50px;\n  display: block;\n  color: #1B2539;\n}\n.additional-link b[data-v-3f9382aa], .additional-link a[data-v-3f9382aa] {\n  color: #00BC7E;\n  cursor: pointer;\n}\n.additional-link b[data-v-3f9382aa]:hover, .additional-link a[data-v-3f9382aa]:hover {\n  text-decoration: underline;\n}\n@media only screen and (max-width: 1024px) {\n.form[data-v-3f9382aa] {\n    max-width: 100%;\n}\n}\n@media only screen and (max-width: 960px) {\n.form .button[data-v-3f9382aa] {\n    margin-top: 20px;\n    width: 100%;\n    margin-left: 0;\n    margin-right: 0;\n}\n.form input[data-v-3f9382aa], .form textarea[data-v-3f9382aa] {\n    width: 100%;\n    min-width: 100%;\n}\n.form.block-form .block-wrapper[data-v-3f9382aa] {\n    display: block;\n}\n.form.block-form .block-wrapper label[data-v-3f9382aa] {\n    width: 100%;\n    padding-right: 0;\n    display: block;\n    margin-bottom: 7px;\n    text-align: left !important;\n    font-size: 0.875em;\n    padding-top: 0;\n}\n.form.block-form .button[data-v-3f9382aa] {\n    margin-top: 25px;\n    margin-left: 0;\n    margin-right: 0;\n}\n.form.inline-form[data-v-3f9382aa] {\n    display: block;\n}\n.form.inline-form .input-wrapper .error-message[data-v-3f9382aa] {\n    position: relative;\n    bottom: 0;\n}\n.form .button[data-v-3f9382aa] {\n    padding: 14px 32px;\n}\n.single-line-form[data-v-3f9382aa] {\n    display: block;\n}\n.single-line-form .submit-button[data-v-3f9382aa] {\n    margin-left: 0;\n    margin-top: 20px;\n    width: 100%;\n}\ntextarea[data-v-3f9382aa],\n  input[type="password"][data-v-3f9382aa],\n  input[type="number"][data-v-3f9382aa],\n  input[type="text"][data-v-3f9382aa],\n  input[type="email"][data-v-3f9382aa] {\n    padding: 14px 20px;\n}\n}\n@media only screen and (max-width: 690px) {\n.form.block-form .wrapper-inline[data-v-3f9382aa] {\n    display: block;\n}\n}\n@media (prefers-color-scheme: dark) {\n.form .input-help[data-v-3f9382aa] {\n    color: #7d858c;\n}\n.form.block-form .block-wrapper label[data-v-3f9382aa] {\n    color: #bec6cf;\n}\n.form .inline-wrapper .switch-label .input-label[data-v-3f9382aa] {\n    color: #bec6cf;\n}\ntextarea[data-v-3f9382aa],\n  input[type="password"][data-v-3f9382aa],\n  input[type="text"][data-v-3f9382aa],\n  input[type="number"][data-v-3f9382aa],\n  input[type="email"][data-v-3f9382aa] {\n    border-color: #1e2024;\n    background: #1e2024;\n    color: #bec6cf;\n}\ntextarea[data-v-3f9382aa]::-webkit-input-placeholder, input[type="password"][data-v-3f9382aa]::-webkit-input-placeholder, input[type="text"][data-v-3f9382aa]::-webkit-input-placeholder, input[type="number"][data-v-3f9382aa]::-webkit-input-placeholder, input[type="email"][data-v-3f9382aa]::-webkit-input-placeholder {\n    color: #7d858c;\n}\ntextarea[data-v-3f9382aa]::-moz-placeholder, input[type="password"][data-v-3f9382aa]::-moz-placeholder, input[type="text"][data-v-3f9382aa]::-moz-placeholder, input[type="number"][data-v-3f9382aa]::-moz-placeholder, input[type="email"][data-v-3f9382aa]::-moz-placeholder {\n    color: #7d858c;\n}\ntextarea[data-v-3f9382aa]:-ms-input-placeholder, input[type="password"][data-v-3f9382aa]:-ms-input-placeholder, input[type="text"][data-v-3f9382aa]:-ms-input-placeholder, input[type="number"][data-v-3f9382aa]:-ms-input-placeholder, input[type="email"][data-v-3f9382aa]:-ms-input-placeholder {\n    color: #7d858c;\n}\ntextarea[data-v-3f9382aa]::-ms-input-placeholder, input[type="password"][data-v-3f9382aa]::-ms-input-placeholder, input[type="text"][data-v-3f9382aa]::-ms-input-placeholder, input[type="number"][data-v-3f9382aa]::-ms-input-placeholder, input[type="email"][data-v-3f9382aa]::-ms-input-placeholder {\n    color: #7d858c;\n}\ntextarea[data-v-3f9382aa]::placeholder,\n  input[type="password"][data-v-3f9382aa]::placeholder,\n  input[type="text"][data-v-3f9382aa]::placeholder,\n  input[type="number"][data-v-3f9382aa]::placeholder,\n  input[type="email"][data-v-3f9382aa]::placeholder {\n    color: #7d858c;\n}\ntextarea[disabled][data-v-3f9382aa],\n  input[type="password"][disabled][data-v-3f9382aa],\n  input[type="text"][disabled][data-v-3f9382aa],\n  input[type="number"][disabled][data-v-3f9382aa],\n  input[type="email"][disabled][data-v-3f9382aa] {\n    background: #1e2024;\n    color: rgba(125, 133, 140, 0.8);\n    -webkit-text-fill-color: rgba(125, 133, 140, 0.8);\n}\n}\n.block-form[data-v-3f9382aa] {\n  max-width: 100%;\n}\n',""])},53:function(a,n,t){var e=t(228);"string"==typeof e&&(e=[[a.i,e,""]]);var o={hmr:!0,transform:void 0,insertInto:void 0};t(6)(e,o);e.locals&&(a.exports=e.locals)},54:function(a,n,t){var e=t(230);"string"==typeof e&&(e=[[a.i,e,""]]);var o={hmr:!0,transform:void 0,insertInto:void 0};t(6)(e,o);e.locals&&(a.exports=e.locals)},55:function(a,n,t){var e=t(232);"string"==typeof e&&(e=[[a.i,e,""]]);var o={hmr:!0,transform:void 0,insertInto:void 0};t(6)(e,o);e.locals&&(a.exports=e.locals)},556:function(a,n,t){"use strict";t.r(n);var e=t(9),o=t.n(e),i=t(13),r=t(12),p=t(16),d=t(15),l=t(8),s=t(11),f=t(25),c=t(10),u=t(3),m=t(4),b=t.n(m);function v(a,n,t,e,o,i,r){try{var p=a[i](r),d=p.value}catch(a){return void t(a)}p.done?n(d):Promise.resolve(d).then(e,o)}var x={name:"PlanDelete",props:["plan"],components:{ValidationProvider:l.ValidationProvider,ValidationObserver:l.ValidationObserver,PageTabGroup:p.a,ButtonBase:s.a,FormLabel:i.a,SetupBox:f.a,required:c.a,InfoBox:r.a,PageTab:d.a},data:function(){return{isSendingRequest:!1,isLoading:!1,planName:""}},methods:{deletePlan:function(){var a,n=this;return(a=o.a.mark((function a(){return o.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return a.next=2,n.$refs.deletePlan.validate();case 2:if(a.sent){a.next=5;break}return a.abrupt("return");case 5:n.isSendingRequest=!0,b.a.delete(n.$store.getters.api+"/plans/"+n.$route.params.id,{data:{name:n.planName}}).then((function(){n.isSendingRequest=!1,u.a.$emit("success:open",{emoji:"👍",title:n.$t("popup_deleted_plan.title"),message:n.$t("popup_deleted_plan.message")}),n.$router.push({name:"Plans"})})).catch((function(){n.isSendingRequest=!1,u.a.$emit("alert:open",{title:n.$t("popup_error.title"),message:n.$t("popup_error.message")})}));case 7:case"end":return a.stop()}}),a)})),function(){var n=this,t=arguments;return new Promise((function(e,o){var i=a.apply(n,t);function r(a){v(i,e,o,r,p,"next",a)}function p(a){v(i,e,o,r,p,"throw",a)}r(void 0)}))})()}}},h=(t(331),t(0)),g=Object(h.a)(x,(function(){var a=this,n=a.$createElement,t=a._self._c||n;return t("PageTab",{staticClass:"form-fixed-width"},[t("PageTabGroup",[t("FormLabel",[a._v("\n            "+a._s(a.$t("admin_page_plans.form.title_delete"))+"\n        ")]),a._v(" "),t("InfoBox",[t("p",[a._v(a._s(a.$t("admin_page_plans.disclaimer_delete_plan")))])]),a._v(" "),t("ValidationObserver",{ref:"deletePlan",staticClass:"form block-form",attrs:{tag:"form"},on:{submit:function(n){return n.preventDefault(),a.deletePlan(n)}},scopedSlots:a._u([{key:"default",fn:function(n){n.invalid;return[t("ValidationProvider",{staticClass:"block-wrapper",attrs:{tag:"div",mode:"passive",name:"Plan name",rules:"required|is:"+a.plan.attributes.name},scopedSlots:a._u([{key:"default",fn:function(n){var e=n.errors;return[t("label",[a._v(a._s(a.$t("admin_page_user.label_delete_user",{user:a.plan.attributes.name}))+":")]),a._v(" "),t("div",{staticClass:"single-line-form"},[t("input",{directives:[{name:"model",rawName:"v-model",value:a.planName,expression:"planName"}],class:{"is-error":e[0]},attrs:{placeholder:a.$t("admin_page_plans.form.name_delete_plac"),type:"text"},domProps:{value:a.planName},on:{input:function(n){n.target.composing||(a.planName=n.target.value)}}}),a._v(" "),t("ButtonBase",{staticClass:"submit-button",attrs:{loading:a.isSendingRequest,disabled:a.isSendingRequest,type:"submit","button-style":"danger"}},[a._v("\n                        "+a._s(a.$t("admin_page_plans.delete_plan_button"))+"\n                    ")])],1),a._v(" "),e[0]?t("span",{staticClass:"error-message"},[a._v(a._s(e[0]))]):a._e()]}}],null,!0)})]}}])})],1)],1)}),[],!1,null,"3f9382aa",null);n.default=g.exports},56:function(a,n,t){var e=t(234);"string"==typeof e&&(e=[[a.i,e,""]]);var o={hmr:!0,transform:void 0,insertInto:void 0};t(6)(e,o);e.locals&&(a.exports=e.locals)},62:function(a,n,t){var e=t(246);"string"==typeof e&&(e=[[a.i,e,""]]);var o={hmr:!0,transform:void 0,insertInto:void 0};t(6)(e,o);e.locals&&(a.exports=e.locals)}}]);