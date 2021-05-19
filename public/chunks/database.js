(window.webpackJsonp=window.webpackJsonp||[]).push([[26],{"4TWA":function(t,e,a){"use strict";var o=a("CjXH"),i=a("LvDl"),r={name:"SelectInput",props:["placeholder","options","isError","default"],components:{Edit2Icon:o.t,UserIcon:o.kb,ChevronDownIcon:o.g},watch:{query:Object(i.debounce)((function(t){this.searchedResults=Object(i.omitBy)(this.options,(function(e){return!e.label.toLowerCase().includes(t.toLowerCase())}))}),200)},computed:{isSearching:function(){return this.searchedResults&&""!==this.query},optionList:function(){return this.isSearching?this.searchedResults:this.options}},data:function(){return{searchedResults:void 0,selected:void 0,isOpen:!1,query:""}},methods:{selectOption:function(t){this.$emit("input",t.value),this.selected=t,this.isOpen=!1},openMenu:function(){var t=this;this.isOpen=!this.isOpen,this.isOpen&&this.$nextTick((function(){return t.$refs.search.focus()}))}},created:function(){var t=this;this.default&&(this.selected=this.options.find((function(e){return e.value===t.default})))}},n=(a("MRmA"),a("KHd+")),s=Object(n.a)(r,(function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"select"},[a("div",{staticClass:"input-area",class:{"is-active":t.isOpen,"is-error":t.isError},on:{click:t.openMenu}},[t.selected?a("div",{staticClass:"selected"},[t.selected.icon?a("div",{staticClass:"option-icon"},["user"===t.selected.icon?a("user-icon",{attrs:{size:"14"}}):t._e(),t._v(" "),"user-edit"===t.selected.icon?a("edit2-icon",{attrs:{size:"14"}}):t._e()],1):t._e(),t._v(" "),a("span",{staticClass:"option-value"},[t._v(t._s(t.selected.label))])]):t._e(),t._v(" "),t.selected?t._e():a("div",{staticClass:"not-selected"},[a("span",{staticClass:"option-value placehoder"},[t._v(t._s(t.placeholder))])]),t._v(" "),a("chevron-down-icon",{staticClass:"chevron",attrs:{size:"19"}})],1),t._v(" "),a("transition",{attrs:{name:"slide-in"}},[t.isOpen?a("div",{staticClass:"input-options"},[t.options.length>5?a("div",{staticClass:"select-search"},[a("input",{directives:[{name:"model",rawName:"v-model",value:t.query,expression:"query"}],ref:"search",staticClass:"search-input focus-border-theme",attrs:{type:"text",placeholder:t.$t("select_search_placeholder")},domProps:{value:t.query},on:{input:function(e){e.target.composing||(t.query=e.target.value)}}})]):t._e(),t._v(" "),a("ul",{staticClass:"option-list"},t._l(t.optionList,(function(e,o){return a("li",{key:o,staticClass:"option-item",on:{click:function(a){return t.selectOption(e)}}},[e.icon?a("div",{staticClass:"option-icon"},["user"===e.icon?a("user-icon",{attrs:{size:"14"}}):t._e(),t._v(" "),"user-edit"===e.icon?a("edit2-icon",{attrs:{size:"14"}}):t._e()],1):t._e(),t._v(" "),a("span",{staticClass:"option-value"},[t._v(t._s(e.label))])])})),0)]):t._e()])],1)}),[],!1,null,"6c344ee4",null);e.a=s.exports},"8aG9":function(t,e,a){"use strict";a("W0ou")},"9xkz":function(t,e,a){"use strict";a.r(e);var o=a("o0o1"),i=a.n(o),r=a("A5+z"),n=a("bDRN"),s=a("4TWA"),d=a("eZ9V"),c=a("KnjL"),l=a("j8qy"),f=a("ASoH"),p=a("CjXH"),u=a("TJPC"),v=a("vDqi"),m=a.n(v);function b(t,e,a,o,i,r,n){try{var s=t[r](n),d=s.value}catch(t){return void a(t)}s.done?e(d):Promise.resolve(d).then(o,i)}var h={name:"Database",components:{AuthContentWrapper:n.a,ValidationProvider:r.ValidationProvider,ValidationObserver:r.ValidationObserver,SettingsIcon:p.bb,SelectInput:s.a,AuthContent:l.a,AuthButton:f.a,FormLabel:d.a,required:u.a,InfoBox:c.a},computed:{submitButtonText:function(){return this.isLoading?"Testing and Installing Database":"Test Connection and Install Database"}},data:function(){return{isLoading:!1,isError:!1,errorMessage:"",connectionList:[{label:"MySQL",value:"mysql"}],databaseCredentials:{connection:"mysql",host:"",port:"",name:"",username:"",password:""}}},methods:{databaseCredentialsSubmit:function(){var t,e=this;return(t=i.a.mark((function t(){return i.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,e.$refs.verifyPurchaseCode.validate();case 2:if(t.sent){t.next=5;break}return t.abrupt("return");case 5:e.isLoading=!0,e.isError=!1,m.a.post("/api/setup/database",e.databaseCredentials).then((function(t){e.isLoading=!1,e.$router.push({name:"InstallationDisclaimer"})})).catch((function(t){(t.response.status=500)&&(e.isError=!0,e.errorMessage=t.response.data.message),e.isLoading=!1}));case 8:case"end":return t.stop()}}),t)})),function(){var e=this,a=arguments;return new Promise((function(o,i){var r=t.apply(e,a);function n(t){b(r,o,i,n,s,"next",t)}function s(t){b(r,o,i,n,s,"throw",t)}n(void 0)}))})()}},created:function(){this.$scrollTop()}},x=(a("l5sw"),a("KHd+")),g=Object(x.a)(h,(function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("AuthContentWrapper",{ref:"auth"},[a("AuthContent",{attrs:{name:"database-credentials",visible:!0}},[a("div",{staticClass:"content-headline"},[a("settings-icon",{staticClass:"title-icon",attrs:{size:"40"}}),t._v(" "),a("h1",[t._v("Setup Wizard")]),t._v(" "),a("h2",[t._v("Set up your database connection to install application database.")])],1),t._v(" "),a("ValidationObserver",{ref:"verifyPurchaseCode",staticClass:"form block-form",attrs:{tag:"form"},on:{submit:function(e){return e.preventDefault(),t.databaseCredentialsSubmit(e)}},scopedSlots:t._u([{key:"default",fn:function(e){e.invalid;return[a("FormLabel",[t._v("Database Credentials")]),t._v(" "),a("InfoBox",[a("p",[t._v("We strongly recommend use MySQL or MariaDB database. Create new database, set all privileges and get credentials. For those who use cPanel or Plesk, here is useful resources:")]),t._v(" "),a("ul",[a("li",[a("a",{attrs:{href:"https://www.inmotionhosting.com/support/edu/cpanel/create-database-2/",target:"_blank"}},[t._v("1. cPanel - MySQL Database Wizard")]),t._v(" "),a("a",{attrs:{href:"https://docs.plesk.com/en-US/obsidian/customer-guide/65157/",target:"_blank"}},[t._v("2. Plesk - Website databases")])])])]),t._v(" "),a("div",{staticClass:"block-wrapper"},[a("label",[t._v("Connection:")]),t._v(" "),a("ValidationProvider",{staticClass:"input-wrapper",attrs:{tag:"div",mode:"passive",name:"Connection",rules:"required"},scopedSlots:t._u([{key:"default",fn:function(e){var o=e.errors;return[a("SelectInput",{attrs:{options:t.connectionList,default:"mysql",placeholder:"Select your database connection",isError:o[0]},model:{value:t.databaseCredentials.connection,callback:function(e){t.$set(t.databaseCredentials,"connection",e)},expression:"databaseCredentials.connection"}}),t._v(" "),o[0]?a("span",{staticClass:"error-message"},[t._v(t._s(o[0]))]):t._e()]}}],null,!0)})],1),t._v(" "),a("div",{staticClass:"block-wrapper"},[a("label",[t._v("Host:")]),t._v(" "),a("ValidationProvider",{staticClass:"input-wrapper",attrs:{tag:"div",mode:"passive",name:"Host",rules:"required"},scopedSlots:t._u([{key:"default",fn:function(e){var o=e.errors;return[a("input",{directives:[{name:"model",rawName:"v-model",value:t.databaseCredentials.host,expression:"databaseCredentials.host"}],class:{"is-error":o[0]},attrs:{placeholder:"Type your database host",type:"text"},domProps:{value:t.databaseCredentials.host},on:{input:function(e){e.target.composing||t.$set(t.databaseCredentials,"host",e.target.value)}}}),t._v(" "),o[0]?a("span",{staticClass:"error-message"},[t._v(t._s(o[0]))]):t._e()]}}],null,!0)})],1),t._v(" "),a("div",{staticClass:"block-wrapper"},[a("label",[t._v("Port:")]),t._v(" "),a("ValidationProvider",{staticClass:"input-wrapper",attrs:{tag:"div",mode:"passive",name:"Port",rules:"required"},scopedSlots:t._u([{key:"default",fn:function(e){var o=e.errors;return[a("input",{directives:[{name:"model",rawName:"v-model",value:t.databaseCredentials.port,expression:"databaseCredentials.port"}],class:{"is-error":o[0]},attrs:{placeholder:"Type your database port",type:"text"},domProps:{value:t.databaseCredentials.port},on:{input:function(e){e.target.composing||t.$set(t.databaseCredentials,"port",e.target.value)}}}),t._v(" "),o[0]?a("span",{staticClass:"error-message"},[t._v(t._s(o[0]))]):t._e()]}}],null,!0)})],1),t._v(" "),a("div",{staticClass:"block-wrapper"},[a("label",[t._v("Database Name:")]),t._v(" "),a("ValidationProvider",{staticClass:"input-wrapper",attrs:{tag:"div",mode:"passive",name:"Database Name",rules:"required"},scopedSlots:t._u([{key:"default",fn:function(e){var o=e.errors;return[a("input",{directives:[{name:"model",rawName:"v-model",value:t.databaseCredentials.name,expression:"databaseCredentials.name"}],class:{"is-error":o[0]},attrs:{placeholder:"Select your database name",type:"text"},domProps:{value:t.databaseCredentials.name},on:{input:function(e){e.target.composing||t.$set(t.databaseCredentials,"name",e.target.value)}}}),t._v(" "),o[0]?a("span",{staticClass:"error-message"},[t._v(t._s(o[0]))]):t._e()]}}],null,!0)})],1),t._v(" "),a("div",{staticClass:"block-wrapper"},[a("label",[t._v("Database Username:")]),t._v(" "),a("ValidationProvider",{staticClass:"input-wrapper",attrs:{tag:"div",mode:"passive",name:"Database Username",rules:"required"},scopedSlots:t._u([{key:"default",fn:function(e){var o=e.errors;return[a("input",{directives:[{name:"model",rawName:"v-model",value:t.databaseCredentials.username,expression:"databaseCredentials.username"}],class:{"is-error":o[0]},attrs:{placeholder:"Select your database name",type:"text"},domProps:{value:t.databaseCredentials.username},on:{input:function(e){e.target.composing||t.$set(t.databaseCredentials,"username",e.target.value)}}}),t._v(" "),o[0]?a("span",{staticClass:"error-message"},[t._v(t._s(o[0]))]):t._e()]}}],null,!0)})],1),t._v(" "),a("div",{staticClass:"block-wrapper"},[a("label",[t._v("Database Password:")]),t._v(" "),a("ValidationProvider",{staticClass:"input-wrapper",attrs:{tag:"div",mode:"passive",name:"Database Password",rules:"required"},scopedSlots:t._u([{key:"default",fn:function(e){var o=e.errors;return[a("input",{directives:[{name:"model",rawName:"v-model",value:t.databaseCredentials.password,expression:"databaseCredentials.password"}],class:{"is-error":o[0]},attrs:{placeholder:"Select your database password",type:"text"},domProps:{value:t.databaseCredentials.password},on:{input:function(e){e.target.composing||t.$set(t.databaseCredentials,"password",e.target.value)}}}),t._v(" "),o[0]?a("span",{staticClass:"error-message"},[t._v(t._s(o[0]))]):t._e()]}}],null,!0)})],1),t._v(" "),t.isError?a("InfoBox",{staticStyle:{"margin-bottom":"10px"},attrs:{type:"error"}},[a("p",[t._v("We couldn't establish database connection. Please double check your database credentials.")]),t._v(" "),a("br"),t._v(" "),a("p",[t._v("Detailed error: "+t._s(t.errorMessage))])]):t._e(),t._v(" "),a("div",{staticClass:"submit-wrapper"},[a("AuthButton",{attrs:{icon:"chevron-right",text:t.submitButtonText,loading:t.isLoading,disabled:t.isLoading}})],1)]}}])})],1)],1)}),[],!1,null,"6f0f87fc",null);e.default=g.exports},ASoH:function(t,e,a){"use strict";var o={name:"AuthContent",props:["loading","icon","text"],data:function(){return{isVisible:!1}},created:function(){this.isVisible=this.visible}},i=(a("RLEU"),a("KHd+")),r=Object(i.a)(o,(function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("button",{staticClass:"button outline hover-text-theme hover-border-theme"},[a("span",{staticClass:"text-label"},[t._v(t._s(t.text))]),t._v(" "),t.loading?a("span",{staticClass:"icon"},[a("FontAwesomeIcon",{staticClass:"sync-alt svg-color-theme",attrs:{icon:"sync-alt"}})],1):t._e(),t._v(" "),!t.loading&&t.icon?a("span",{staticClass:"icon"},[a("FontAwesomeIcon",{staticClass:"svg-color-theme",attrs:{icon:t.icon}})],1):t._e()])}),[],!1,null,"16e9ad58",null);e.a=r.exports},JHC5:function(t,e,a){var o=a("YUi1");"string"==typeof o&&(o=[[t.i,o,""]]);var i={hmr:!0,transform:void 0,insertInto:void 0};a("aET+")(o,i);o.locals&&(t.exports=o.locals)},Jx8r:function(t,e,a){(t.exports=a("I1BE")(!1)).push([t.i,"#auth[data-v-31af8372]{height:100%;width:100%;display:table}",""])},KnjL:function(t,e,a){"use strict";var o={name:"InfoBox",props:["type"]},i=(a("pFam"),a("KHd+")),r=Object(i.a)(o,(function(){var t=this.$createElement;return(this._self._c||t)("div",{staticClass:"info-box",class:this.type},[this._t("default")],2)}),[],!1,null,"8e7c42f6",null);e.a=r.exports},MRmA:function(t,e,a){"use strict";a("ccqs")},OFhh:function(t,e,a){(t.exports=a("I1BE")(!1)).push([t.i,".form[data-v-6f0f87fc]{max-width:700px}.form.inline-form[data-v-6f0f87fc]{display:flex;position:relative;justify-content:center;margin:0 auto}.form.inline-form .input-wrapper[data-v-6f0f87fc]{position:relative}.form.inline-form .input-wrapper .error-message[data-v-6f0f87fc]{position:absolute;left:0;bottom:-25px}.form.block-form .wrapper-inline[data-v-6f0f87fc]{display:flex;margin:0 -15px}.form.block-form .wrapper-inline .block-wrapper[data-v-6f0f87fc]{width:100%;padding:0 15px}.form.block-form .block-wrapper[data-v-6f0f87fc]{margin-bottom:22px}.form.block-form .block-wrapper label[data-v-6f0f87fc]{font-size:.875em;color:rgba(27,37,57,.8);font-weight:700;display:block;margin-bottom:7px;text-align:left}.form.block-form .block-wrapper[data-v-6f0f87fc]:last-child{margin-bottom:0}.form.block-form .button[data-v-6f0f87fc]{margin-top:50px}.form .inline-wrapper[data-v-6f0f87fc]{display:flex;align-items:center;justify-content:space-between}.form .inline-wrapper .switch-label .input-help[data-v-6f0f87fc]{padding-top:0}.form .inline-wrapper .switch-label .input-label[data-v-6f0f87fc]{font-weight:700;color:#1b2539;font-size:1em;margin-bottom:5px}.form .input-help[data-v-6f0f87fc]{font-size:.75em;color:rgba(27,37,57,.7);line-height:1.35;padding-top:10px;display:block}.single-line-form[data-v-6f0f87fc]{display:flex}.single-line-form .submit-button[data-v-6f0f87fc]{margin-left:20px}.error-message[data-v-6f0f87fc]{font-size:.875em;color:#fd397a;padding-top:5px;display:block;text-align:left}textarea[data-v-6f0f87fc]{width:100%}input[type=date][data-v-6f0f87fc],input[type=email][data-v-6f0f87fc],input[type=number][data-v-6f0f87fc],input[type=password][data-v-6f0f87fc],input[type=text][data-v-6f0f87fc],textarea[data-v-6f0f87fc]{border:1px solid transparent;transition:all .15s ease;font-size:1em;border-radius:8px;padding:13px 20px;-webkit-appearance:none;-moz-appearance:none;appearance:none;font-weight:700;outline:0;width:100%;box-shadow:0 1px 5px rgba(0,0,0,.12);background:#fff}input[type=date].is-error[data-v-6f0f87fc],input[type=email].is-error[data-v-6f0f87fc],input[type=number].is-error[data-v-6f0f87fc],input[type=password].is-error[data-v-6f0f87fc],input[type=text].is-error[data-v-6f0f87fc],textarea.is-error[data-v-6f0f87fc]{border-color:#fd397a}input[type=date][data-v-6f0f87fc]::-moz-placeholder,input[type=email][data-v-6f0f87fc]::-moz-placeholder,input[type=number][data-v-6f0f87fc]::-moz-placeholder,input[type=password][data-v-6f0f87fc]::-moz-placeholder,input[type=text][data-v-6f0f87fc]::-moz-placeholder,textarea[data-v-6f0f87fc]::-moz-placeholder{color:rgba(27,37,57,.5);font-size:.9375em}input[type=date][data-v-6f0f87fc]:-ms-input-placeholder,input[type=email][data-v-6f0f87fc]:-ms-input-placeholder,input[type=number][data-v-6f0f87fc]:-ms-input-placeholder,input[type=password][data-v-6f0f87fc]:-ms-input-placeholder,input[type=text][data-v-6f0f87fc]:-ms-input-placeholder,textarea[data-v-6f0f87fc]:-ms-input-placeholder{color:rgba(27,37,57,.5);font-size:.9375em}input[type=date][data-v-6f0f87fc]::placeholder,input[type=email][data-v-6f0f87fc]::placeholder,input[type=number][data-v-6f0f87fc]::placeholder,input[type=password][data-v-6f0f87fc]::placeholder,input[type=text][data-v-6f0f87fc]::placeholder,textarea[data-v-6f0f87fc]::placeholder{color:rgba(27,37,57,.5);font-size:.9375em}input[type=date][disabled][data-v-6f0f87fc],input[type=email][disabled][data-v-6f0f87fc],input[type=number][disabled][data-v-6f0f87fc],input[type=password][disabled][data-v-6f0f87fc],input[type=text][disabled][data-v-6f0f87fc],textarea[disabled][data-v-6f0f87fc]{background:#fff;color:rgba(27,37,57,.8);-webkit-text-fill-color:rgba(27,37,57,.8);opacity:1;cursor:not-allowed}input[type=color][data-v-6f0f87fc]{width:38px!important;height:40px;border:none;outline:none;background:none;min-width:0!important}.additional-link[data-v-6f0f87fc]{font-size:1em;margin-top:50px;display:block}.additional-link a[data-v-6f0f87fc],.additional-link b[data-v-6f0f87fc]{cursor:pointer}.additional-link a[data-v-6f0f87fc]:hover,.additional-link b[data-v-6f0f87fc]:hover{text-decoration:underline}@media only screen and (max-width:1024px){.form[data-v-6f0f87fc]{max-width:100%}}@media only screen and (max-width:960px){.form .button[data-v-6f0f87fc]{margin-top:20px;width:100%;margin-left:0;margin-right:0}.form input[data-v-6f0f87fc],.form textarea[data-v-6f0f87fc]{width:100%;min-width:100%}.form.block-form .block-wrapper[data-v-6f0f87fc]{display:block}.form.block-form .block-wrapper label[data-v-6f0f87fc]{width:100%;padding-right:0;display:block;margin-bottom:7px;text-align:left!important;font-size:.875em;padding-top:0}.form.block-form .button[data-v-6f0f87fc]{margin-top:25px;margin-left:0;margin-right:0}.form.inline-form[data-v-6f0f87fc]{display:block}.form.inline-form .input-wrapper .error-message[data-v-6f0f87fc]{position:relative;bottom:0}.form .button[data-v-6f0f87fc]{padding:14px 32px}.single-line-form[data-v-6f0f87fc]{display:block}.single-line-form .submit-button[data-v-6f0f87fc]{margin-left:0;margin-top:20px;width:100%}input[type=date][data-v-6f0f87fc],input[type=email][data-v-6f0f87fc],input[type=number][data-v-6f0f87fc],input[type=password][data-v-6f0f87fc],input[type=text][data-v-6f0f87fc],textarea[data-v-6f0f87fc]{padding:14px 20px}}@media only screen and (max-width:690px){.form.block-form .wrapper-inline[data-v-6f0f87fc]{display:block;margin-bottom:32px}}@media (prefers-color-scheme:dark){.form .input-help[data-v-6f0f87fc]{color:#7d858c}.form.block-form .block-wrapper label[data-v-6f0f87fc],.form .inline-wrapper .switch-label .input-label[data-v-6f0f87fc]{color:#bec6cf}input[type=date][data-v-6f0f87fc],input[type=email][data-v-6f0f87fc],input[type=number][data-v-6f0f87fc],input[type=password][data-v-6f0f87fc],input[type=text][data-v-6f0f87fc],textarea[data-v-6f0f87fc]{border-color:#1e2024;background:#1e2024;color:#bec6cf}input[type=date][data-v-6f0f87fc]::-moz-placeholder,input[type=email][data-v-6f0f87fc]::-moz-placeholder,input[type=number][data-v-6f0f87fc]::-moz-placeholder,input[type=password][data-v-6f0f87fc]::-moz-placeholder,input[type=text][data-v-6f0f87fc]::-moz-placeholder,textarea[data-v-6f0f87fc]::-moz-placeholder{color:#7d858c}input[type=date][data-v-6f0f87fc]:-ms-input-placeholder,input[type=email][data-v-6f0f87fc]:-ms-input-placeholder,input[type=number][data-v-6f0f87fc]:-ms-input-placeholder,input[type=password][data-v-6f0f87fc]:-ms-input-placeholder,input[type=text][data-v-6f0f87fc]:-ms-input-placeholder,textarea[data-v-6f0f87fc]:-ms-input-placeholder{color:#7d858c}input[type=date][data-v-6f0f87fc]::placeholder,input[type=email][data-v-6f0f87fc]::placeholder,input[type=number][data-v-6f0f87fc]::placeholder,input[type=password][data-v-6f0f87fc]::placeholder,input[type=text][data-v-6f0f87fc]::placeholder,textarea[data-v-6f0f87fc]::placeholder{color:#7d858c}input[type=date][disabled][data-v-6f0f87fc],input[type=email][disabled][data-v-6f0f87fc],input[type=number][disabled][data-v-6f0f87fc],input[type=password][disabled][data-v-6f0f87fc],input[type=text][disabled][data-v-6f0f87fc],textarea[disabled][data-v-6f0f87fc]{background:#1e2024;color:rgba(125,133,140,.8);-webkit-text-fill-color:rgba(125,133,140,.8)}.popup-wrapper input[type=date][data-v-6f0f87fc],.popup-wrapper input[type=email][data-v-6f0f87fc],.popup-wrapper input[type=number][data-v-6f0f87fc],.popup-wrapper input[type=password][data-v-6f0f87fc],.popup-wrapper input[type=text][data-v-6f0f87fc],.popup-wrapper textarea[data-v-6f0f87fc]{background:#25272c}}.auth-logo-text[data-v-6f0f87fc]{font-size:1.375em;font-weight:800;margin-bottom:40px;display:block}.auth-form[data-v-6f0f87fc]{text-align:center;max-width:600px;padding:25px 20px;display:table-cell;vertical-align:middle}.auth-form input[data-v-6f0f87fc]{min-width:310px}.auth-form .additional-link a[data-v-6f0f87fc]{font-weight:700;text-decoration:none}.auth-form .user-avatar[data-v-6f0f87fc]{width:100px;height:100px;-o-object-fit:cover;object-fit:cover;margin-bottom:20px;border-radius:8px;box-shadow:0 10px 30px rgba(25,54,60,.2)}.auth-form .logo[data-v-6f0f87fc]{width:120px;margin-bottom:20px}.auth-form h1[data-v-6f0f87fc]{font-size:2.125em;font-weight:800;line-height:1.2;margin-bottom:2px;color:#1b2539}.auth-form h2[data-v-6f0f87fc]{font-size:1.4375em;font-weight:500;margin-bottom:50px;color:#1b2539}.auth-form .block-form[data-v-6f0f87fc]{margin-left:auto;margin-right:auto}@media only screen and (min-width:690px) and (max-width:960px){.auth-form[data-v-6f0f87fc]{padding-left:20%;padding-right:20%}}@media only screen and (max-width:690px){.auth-form[data-v-6f0f87fc]{width:100%}.auth-form h1[data-v-6f0f87fc]{font-size:1.875em}.auth-form h2[data-v-6f0f87fc]{font-size:1.3125em}}@media only screen and (max-width:490px){.auth-form h1[data-v-6f0f87fc]{font-size:1.375em}.auth-form h2[data-v-6f0f87fc]{font-size:1.125em}.auth-form input[data-v-6f0f87fc]{min-width:0}.auth-form .additional-link[data-v-6f0f87fc]{font-size:.9375em}}@media (prefers-color-scheme:dark){.auth-form .additional-link[data-v-6f0f87fc],.auth-form h1[data-v-6f0f87fc],.auth-form h2[data-v-6f0f87fc]{color:#bec6cf}}.content-headline[data-v-6f0f87fc]{max-width:630px;margin-left:auto;margin-right:auto}.auth-form input[data-v-6f0f87fc]{min-width:0}.form[data-v-6f0f87fc]{max-width:580px;text-align:left}.submit-wrapper[data-v-6f0f87fc]{text-align:right}.submit-wrapper .button[data-v-6f0f87fc]{margin:58px 0 50px;width:100%}.title-icon[data-v-6f0f87fc]{margin-bottom:10px;-webkit-animation:spinner-data-v-6f0f87fc 5s linear infinite;animation:spinner-data-v-6f0f87fc 5s linear infinite}.title-icon circle[data-v-6f0f87fc],.title-icon path[data-v-6f0f87fc]{color:inherit}@-webkit-keyframes spinner-data-v-6f0f87fc{0%{transform:rotate(0deg)}to{transform:rotate(1turn)}}@keyframes spinner-data-v-6f0f87fc{0%{transform:rotate(0deg)}to{transform:rotate(1turn)}}@media (prefers-color-scheme:dark){.duplicator .duplicator-item[data-v-6f0f87fc]{background:#1e2024}.duplicator .duplicator-item input[data-v-6f0f87fc],.duplicator .duplicator-item textarea[data-v-6f0f87fc]{background:#141414}}",""])},"Qqv+":function(t,e,a){var o=a("biqn");"string"==typeof o&&(o=[[t.i,o,""]]);var i={hmr:!0,transform:void 0,insertInto:void 0};a("aET+")(o,i);o.locals&&(t.exports=o.locals)},RLEU:function(t,e,a){"use strict";a("JHC5")},TJPC:function(t,e,a){"use strict";a.d(e,"a",(function(){return r}));function o(t){return null==t}function i(t){return Array.isArray(t)&&0===t.length}var r={validate:function(t,e){var a=(void 0===e?{allowFalse:!0}:e).allowFalse,r={valid:!1,required:!0};return o(t)||i(t)?r:!1!==t||a?(r.valid=!!String(t).trim().length,r):r},params:[{name:"allowFalse",default:!0}],computesRequired:!0}},VrAE:function(t,e,a){(t.exports=a("I1BE")(!1)).push([t.i,".form-label[data-v-4e7c7547]{display:flex;align-items:center;margin-bottom:30px}.form-label .icon[data-v-4e7c7547]{margin-right:10px}.form-label .icon circle[data-v-4e7c7547],.form-label .icon line[data-v-4e7c7547],.form-label .icon path[data-v-4e7c7547],.form-label .icon rect[data-v-4e7c7547]{color:inherit}.form-label .label[data-v-4e7c7547]{font-size:1.125em;font-weight:700}@media (prefers-color-scheme:dark){.form-label .label[data-v-4e7c7547]{color:#bec6cf}}",""])},W0ou:function(t,e,a){var o=a("VrAE");"string"==typeof o&&(o=[[t.i,o,""]]);var i={hmr:!0,transform:void 0,insertInto:void 0};a("aET+")(o,i);o.locals&&(t.exports=o.locals)},YUi1:function(t,e,a){(t.exports=a("I1BE")(!1)).push([t.i,".button[data-v-16e9ad58]{cursor:pointer;border-radius:8px;text-decoration:none;padding:12px 32px;display:inline-block;margin-left:15px;margin-right:15px;white-space:nowrap;transition:all .15s ease;background:transparent}.button .text-label[data-v-16e9ad58]{transition:all .15s ease;font-size:1.0625em;font-weight:800;line-height:0}.button .icon[data-v-16e9ad58]{margin-left:12px;font-size:1em}.button.solid[data-v-16e9ad58]{background:#00bc7e;border:2px solid #00bc7e}.button.solid .text-label[data-v-16e9ad58]{color:#fff}.button.outline[data-v-16e9ad58]{border:2px solid #1b2539}.button.outline .text-label[data-v-16e9ad58]{color:#1b2539}.button.outline .icon path[data-v-16e9ad58]{fill:inherit}.button.outline[data-v-16e9ad58]:hover{border-color:inherit}.button.outline:hover .text-label[data-v-16e9ad58]{color:inherit}@media (prefers-color-scheme:dark){.button.outline[data-v-16e9ad58]{background:#141414;border-color:#bec6cf}.button.outline .text-label[data-v-16e9ad58]{color:#bec6cf}}.sync-alt[data-v-16e9ad58]{-webkit-animation:spin-data-v-16e9ad58 1s linear infinite;animation:spin-data-v-16e9ad58 1s linear infinite}@-webkit-keyframes spin-data-v-16e9ad58{0%{transform:rotate(0)}to{transform:rotate(1turn)}}@keyframes spin-data-v-16e9ad58{0%{transform:rotate(0)}to{transform:rotate(1turn)}}",""])},bDRN:function(t,e,a){"use strict";var o={name:"AuthContentWrapper"},i=(a("iYAH"),a("KHd+")),r=Object(i.a)(o,(function(){var t=this.$createElement;return(this._self._c||t)("div",{attrs:{id:"auth"}},[this._t("default")],2)}),[],!1,null,"31af8372",null);e.a=r.exports},biqn:function(t,e,a){(t.exports=a("I1BE")(!1)).push([t.i,".info-box[data-v-8e7c42f6]{padding:20px;border-radius:8px;margin-bottom:32px;background:#f4f5f6;text-align:left}.info-box.error[data-v-8e7c42f6]{background:rgba(253,57,122,.1)}.info-box.error a[data-v-8e7c42f6],.info-box.error p[data-v-8e7c42f6]{color:#fd397a}.info-box.error a[data-v-8e7c42f6]{text-decoration:underline}.info-box p[data-v-8e7c42f6]{line-height:1.6;word-break:break-word;font-weight:600}.info-box p[data-v-8e7c42f6],.info-box p[data-v-8e7c42f6] a{font-size:15px}.info-box p[data-v-8e7c42f6] b{font-size:15px;font-weight:700}.info-box a[data-v-8e7c42f6],.info-box b[data-v-8e7c42f6]{font-weight:700}.info-box a[data-v-8e7c42f6]{font-size:.9375em;line-height:1.6}.info-box ul[data-v-8e7c42f6]{margin-top:15px}.info-box ul[data-v-8e7c42f6],.info-box ul li[data-v-8e7c42f6],.info-box ul li a[data-v-8e7c42f6]{display:block}@media only screen and (max-width:690px){.info-box[data-v-8e7c42f6]{padding:15px}}@media (prefers-color-scheme:dark){.info-box[data-v-8e7c42f6]{background:#1e2024}.info-box p[data-v-8e7c42f6],.info-box ul li[data-v-8e7c42f6]{color:#bec6cf}}",""])},c0Cp:function(t,e,a){(t.exports=a("I1BE")(!1)).push([t.i,".select[data-v-6c344ee4]{position:relative;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;width:100%}.select-search[data-v-6c344ee4]{background:#fff;position:sticky;top:0;padding:13px}.select-search .search-input[data-v-6c344ee4]{border:1px solid transparent;background:#f4f5f6;transition:all .15s ease;font-size:.875em;border-radius:8px;padding:13px 20px;-webkit-appearance:none;-moz-appearance:none;appearance:none;font-weight:700;outline:0;width:100%}.input-options[data-v-6c344ee4]{box-shadow:0 5px 15px rgba(0,0,0,.12);background:#fff;border-radius:8px;position:absolute;overflow:hidden;top:65px;left:0;right:0;z-index:9;max-height:295px;overflow-y:auto}.input-options .option-item[data-v-6c344ee4]{padding:13px 20px;display:block;cursor:pointer}.input-options .option-item[data-v-6c344ee4]:hover{color:#00bc7e;background:#f4f5f6}.input-options .option-item[data-v-6c344ee4]:last-child{border-bottom:none}.input-area[data-v-6c344ee4]{border:1px solid transparent;justify-content:space-between;box-shadow:0 1px 5px rgba(0,0,0,.12);align-items:center;border-radius:8px;padding:13px 20px;display:flex;outline:0;width:100%;cursor:pointer}.input-area[data-v-6c344ee4],.input-area .chevron[data-v-6c344ee4]{transition:all .15s ease}.input-area.is-active .chevron[data-v-6c344ee4]{transform:rotate(180deg)}.input-area.is-error[data-v-6c344ee4]{border-color:#fd397a;box-shadow:0 0 7px rgba(253,57,122,.3)}.option-icon[data-v-6c344ee4]{width:20px;display:inline-block;font-size:.625em}.option-icon svg[data-v-6c344ee4]{margin-top:-4px;vertical-align:middle}.option-value[data-v-6c344ee4]{font-size:1em;font-weight:700;width:100%;vertical-align:middle}.option-value.placehoder[data-v-6c344ee4]{color:rgba(27,37,57,.5)}.slide-in-enter-active[data-v-6c344ee4]{transition:all .15s ease}.slide-in-enter[data-v-6c344ee4]{opacity:0;transform:translateY(-50px)}@media (prefers-color-scheme:dark){.select-search[data-v-6c344ee4]{background:#1e2024}.select-search .search-input[data-v-6c344ee4]{background:#141414}.input-area[data-v-6c344ee4]{background:#1e2024;border-color:#1e2024}.popup-wrapper .input-area[data-v-6c344ee4]{background:#25272c}.input-options[data-v-6c344ee4]{background:#1e2024}.input-options .option-item[data-v-6c344ee4]{border-bottom:none}.input-options .option-item[data-v-6c344ee4]:hover{background:#2a2c32}.input-options .option-item:hover .option-icon circle[data-v-6c344ee4],.input-options .option-item:hover .option-icon path[data-v-6c344ee4]{color:inherit}.input-options .option-item[data-v-6c344ee4]:last-child{border-bottom:none}.option-value.placehoder[data-v-6c344ee4]{color:#7d858c}}",""])},ccqs:function(t,e,a){var o=a("c0Cp");"string"==typeof o&&(o=[[t.i,o,""]]);var i={hmr:!0,transform:void 0,insertInto:void 0};a("aET+")(o,i);o.locals&&(t.exports=o.locals)},eZ9V:function(t,e,a){"use strict";var o=a("CjXH"),i={name:"FormLabel",props:["icon"],components:{CreditCardIcon:o.p,SettingsIcon:o.bb,Edit2Icon:o.t,EditIcon:o.u,UserIcon:o.kb,ToolIcon:o.fb}},r=(a("8aG9"),a("KHd+")),n=Object(r.a)(i,(function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"form-label"},[t.icon?t._e():a("edit2-icon",{staticClass:"icon text-theme",attrs:{size:"22"}}),t._v(" "),"credit-card"===t.icon?a("credit-card-icon",{staticClass:"icon text-theme",attrs:{size:"22"}}):t._e(),t._v(" "),"tool"===t.icon?a("tool-icon",{staticClass:"icon text-theme",attrs:{size:"22"}}):t._e(),t._v(" "),"edit"===t.icon?a("edit-icon",{staticClass:"icon text-theme",attrs:{size:"22"}}):t._e(),t._v(" "),"user"===t.icon?a("user-icon",{staticClass:"icon text-theme",attrs:{size:"22"}}):t._e(),t._v(" "),"settings"===t.icon?a("settings-icon",{staticClass:"icon text-theme",attrs:{size:"22"}}):t._e(),t._v(" "),a("b",{staticClass:"label"},[t._t("default")],2)],1)}),[],!1,null,"4e7c7547",null);e.a=n.exports},iYAH:function(t,e,a){"use strict";a("lh0Q")},j8qy:function(t,e,a){"use strict";var o={name:"AuthContent",props:["visible","name"],data:function(){return{isVisible:!1}},created:function(){this.isVisible=this.visible}},i=a("KHd+"),r=Object(i.a)(o,(function(){var t=this.$createElement,e=this._self._c||t;return this.isVisible?e("div",{staticClass:"auth-form"},[this._t("default")],2):this._e()}),[],!1,null,null,null);e.a=r.exports},l5sw:function(t,e,a){"use strict";a("xZGj")},lh0Q:function(t,e,a){var o=a("Jx8r");"string"==typeof o&&(o=[[t.i,o,""]]);var i={hmr:!0,transform:void 0,insertInto:void 0};a("aET+")(o,i);o.locals&&(t.exports=o.locals)},pFam:function(t,e,a){"use strict";a("Qqv+")},xZGj:function(t,e,a){var o=a("OFhh");"string"==typeof o&&(o=[[t.i,o,""]]);var i={hmr:!0,transform:void 0,insertInto:void 0};a("aET+")(o,i);o.locals&&(t.exports=o.locals)}}]);