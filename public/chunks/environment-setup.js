(window.webpackJsonp=window.webpackJsonp||[]).push([[27],{"1L+q":function(e,a,t){"use strict";var n=t("4EzG");t.n(n).a},"3GDE":function(e,a,t){var n=t("UqlB");"string"==typeof n&&(n=[[e.i,n,""]]);var r={hmr:!0,transform:void 0,insertInto:void 0};t("aET+")(n,r);n.locals&&(e.exports=n.locals)},"4EzG":function(e,a,t){var n=t("jexE");"string"==typeof n&&(n=[[e.i,n,""]]);var r={hmr:!0,transform:void 0,insertInto:void 0};t("aET+")(n,r);n.locals&&(e.exports=n.locals)},"4TWA":function(e,a,t){"use strict";var n=t("CjXH"),r={name:"SelectInput",props:["options","isError","default","placeholder"],components:{Edit2Icon:n.r,UserIcon:n.eb,ChevronDownIcon:n.f},data:function(){return{selected:void 0,isOpen:!1}},methods:{selectOption:function(e){this.$emit("input",e.value),this.selected=e,this.isOpen=!1},openMenu:function(){this.isOpen=!this.isOpen}},created:function(){var e=this;this.default&&(this.selected=this.options.find((function(a){return a.value===e.default})))}},i=(t("F+Qg"),t("KHd+")),o=Object(i.a)(r,(function(){var e=this,a=e.$createElement,t=e._self._c||a;return t("div",{staticClass:"select"},[t("div",{staticClass:"input-area",class:{"is-active":e.isOpen,"is-error":e.isError},on:{click:e.openMenu}},[e.selected?t("div",{staticClass:"selected"},[e.selected.icon?t("div",{staticClass:"option-icon"},["user"===e.selected.icon?t("user-icon",{attrs:{size:"14"}}):e._e(),e._v(" "),"user-edit"===e.selected.icon?t("edit2-icon",{attrs:{size:"14"}}):e._e()],1):e._e(),e._v(" "),t("span",{staticClass:"option-value"},[e._v(e._s(e.selected.label))])]):e._e(),e._v(" "),e.selected?e._e():t("div",{staticClass:"not-selected"},[t("span",{staticClass:"option-value placehoder"},[e._v(e._s(e.placeholder))])]),e._v(" "),t("chevron-down-icon",{staticClass:"chevron",attrs:{size:"19"}})],1),e._v(" "),t("transition",{attrs:{name:"slide-in"}},[e.isOpen?t("ul",{staticClass:"input-options"},e._l(e.options,(function(a,n){return t("li",{key:n,staticClass:"option-item",on:{click:function(t){return e.selectOption(a)}}},[a.icon?t("div",{staticClass:"option-icon"},["user"===a.icon?t("user-icon",{attrs:{size:"14"}}):e._e(),e._v(" "),"user-edit"===a.icon?t("edit2-icon",{attrs:{size:"14"}}):e._e()],1):e._e(),e._v(" "),t("span",{staticClass:"option-value"},[e._v(e._s(a.label))])])})),0):e._e()])],1)}),[],!1,null,"14b1d6a3",null);a.a=o.exports},CKmr:function(e,a,t){var n=t("PthV");"string"==typeof n&&(n=[[e.i,n,""]]);var r={hmr:!0,transform:void 0,insertInto:void 0};t("aET+")(n,r);n.locals&&(e.exports=n.locals)},Dcbv:function(e,a,t){"use strict";t.r(a);var n=t("o0o1"),r=t.n(n),i=t("A5+z"),o=t("bDRN"),s=t("4TWA"),l=t("eZ9V"),d=t("KnjL"),p=t("j8qy"),u=t("ASoH"),c=t("CjXH"),v=t("TJPC"),f=t("vDqi"),m=t.n(f);function b(e,a,t,n,r,i,o){try{var s=e[i](o),l=s.value}catch(e){return void t(e)}s.done?a(l):Promise.resolve(l).then(n,r)}var h={name:"EnvironmentSetup",components:{AuthContentWrapper:o.a,ValidationProvider:i.ValidationProvider,ValidationObserver:i.ValidationObserver,SettingsIcon:c.W,SelectInput:s.a,AuthContent:p.a,AuthButton:u.a,FormLabel:l.a,required:v.a,InfoBox:d.a},watch:{"storage.driver":function(){this.storage.region=""},"storage.region":function(e){"spaces"===this.storage.driver&&(this.storage.endpoint="https://"+e+".digitaloceanspaces.com"),"wasabi"===this.storage.driver&&(this.storage.endpoint="https://s3."+e+".wasabisys.com"),"backblaze"===this.storage.driver&&(this.storage.endpoint="https://s3."+e+".backblazeb2.com")}},computed:{regionList:function(){switch(this.storage.driver){case"s3":return this.s3Regions;case"spaces":return this.digitalOceanRegions;case"wasabi":return this.wasabiRegions;case"backblaze":return this.backblazeRegions}}},data:function(){return{isLoading:!1,wasabiRegions:[{label:"US East 1 (N. Virginia)",value:"us-east-1"},{label:"US East 2 (N. Virginia)",value:"us-east-2"},{label:"US West 1 (Oregon)",value:"us-west-1"},{label:"EU Central 1 (Amsterdam)",value:"eu-central-1"}],backblazeRegions:[{label:"us-west-001",value:"us-west-001"},{label:"us-west-002",value:"us-west-002"},{label:"eu-central-003",value:"eu-central-003"}],digitalOceanRegions:[{label:"New York",value:"nyc3"},{label:"San Francisco",value:"sfo2"},{label:"Amsterdam",value:"ams3"},{label:"Singapore",value:"sgp1"},{label:"Frankfurt",value:"fra1"}],s3Regions:[{label:"us-east-1",value:"us-east-1"},{label:"us-east-2",value:"us-east-2"},{label:"us-west-1",value:"us-west-1"},{label:"us-west-2",value:"us-west-2"},{label:"af-south-1",value:"af-south-1"},{label:"ap-east-1",value:"ap-east-1"},{label:"ap-south-1",value:"ap-south-1"},{label:"ap-northeast-2",value:"ap-northeast-2"},{label:"ap-southeast-1",value:"ap-southeast-1"},{label:"ap-southeast-2",value:"ap-southeast-2"},{label:"ap-northeast-1",value:"ap-northeast-1"},{label:"ca-central-1",value:"ca-central-1"},{label:"eu-central-1",value:"eu-central-1"},{label:"eu-west-1",value:"eu-west-1"},{label:"eu-west-2",value:"eu-west-2"},{label:"eu-south-1",value:"eu-south-1"},{label:"eu-west-3",value:"eu-west-3"},{label:"eu-north-1",value:"eu-north-1"},{label:"me-south-1",value:"me-south-1"},{label:"sa-east-1",value:"sa-east-1"}],storageServiceList:[{label:"Local Driver",value:"local"},{label:"Amazon Web Services S3",value:"s3"},{label:"Digital Ocean Spaces",value:"spaces"},{label:"Object Cloud Storage by Wasabi",value:"wasabi"},{label:"Backblaze B2 Cloud Storage",value:"backblaze"}],encryptionList:[{label:"TLS",value:"tls"},{label:"SSL",value:"ssl"}],mailDriverList:[{label:"smtp",value:"smtp"},{label:"sendmail",value:"sendmail"},{label:"mailgun",value:"mailgun"},{label:"ses",value:"ses"},{label:"postmark",value:"postmark"},{label:"log",value:"log"},{label:"array",value:"array"}],storage:{driver:"local",key:"",secret:"",endpoint:"",region:"",bucket:""},mail:{driver:"smtp",host:"",port:"",username:"",password:"",encryption:""}}},methods:{EnvironmentSetupSubmit:function(){var e,a=this;return(e=r.a.mark((function e(){return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,a.$refs.environmentSetup.validate();case 2:if(e.sent){e.next=5;break}return e.abrupt("return");case 5:a.isLoading=!0,m.a.post("/api/setup/environment-setup",{storage:a.storage,mail:a.mail}).then((function(e){a.isLoading=!1,a.$router.push({name:"AppSetup"})})).catch((function(e){a.isLoading=!1}));case 7:case"end":return e.stop()}}),e)})),function(){var a=this,t=arguments;return new Promise((function(n,r){var i=e.apply(a,t);function o(e){b(i,n,r,o,s,"next",e)}function s(e){b(i,n,r,o,s,"throw",e)}o(void 0)}))})()}},created:function(){this.$scrollTop()}},g=(t("FakX"),t("KHd+")),x=Object(g.a)(h,(function(){var e=this,a=e.$createElement,t=e._self._c||a;return t("AuthContentWrapper",{ref:"auth"},[t("AuthContent",{attrs:{name:"database-credentials",visible:!0}},[t("div",{staticClass:"content-headline"},[t("settings-icon",{staticClass:"title-icon",attrs:{size:"40"}}),e._v(" "),t("h1",[e._v("Setup Wizard")]),e._v(" "),t("h2",[e._v("Set up your storage driver and email client.")])],1),e._v(" "),t("ValidationObserver",{ref:"environmentSetup",staticClass:"form block-form",attrs:{tag:"form"},on:{submit:function(a){return a.preventDefault(),e.EnvironmentSetupSubmit(a)}},scopedSlots:e._u([{key:"default",fn:function(a){a.invalid;return[t("InfoBox",[t("p",[e._v("If you don’t know which storage driver set, keep selected "),t("b",[e._v("'Local Driver'")]),e._v(". For more info, where\n                    you can host your files "),t("a",{attrs:{href:"https://vuefilemanager.com/docs/guide/storage.html#introduction",target:"_blank"}},[e._v("visit our guide")]),e._v(".")])]),e._v(" "),t("FormLabel",[e._v("Storage Setup")]),e._v(" "),t("div",{staticClass:"block-wrapper"},[t("label",[e._v("Storage Service:")]),e._v(" "),t("ValidationProvider",{staticClass:"input-wrapper",attrs:{tag:"div",mode:"passive",name:"Storage Service",rules:"required"},scopedSlots:e._u([{key:"default",fn:function(a){var n=a.errors;return[t("SelectInput",{attrs:{options:e.storageServiceList,default:"local",placeholder:"Select your storage service",isError:n[0]},model:{value:e.storage.driver,callback:function(a){e.$set(e.storage,"driver",a)},expression:"storage.driver"}}),e._v(" "),n[0]?t("span",{staticClass:"error-message"},[e._v(e._s(n[0]))]):e._e()]}}],null,!0)})],1),e._v(" "),"local"!==e.storage.driver?t("div",{staticClass:"storage-additionals"},[t("div",{staticClass:"block-wrapper"},[t("label",[e._v("Key:")]),e._v(" "),t("ValidationProvider",{staticClass:"input-wrapper",attrs:{tag:"div",mode:"passive",name:"Key",rules:"required"},scopedSlots:e._u([{key:"default",fn:function(a){var n=a.errors;return[t("input",{directives:[{name:"model",rawName:"v-model",value:e.storage.key,expression:"storage.key"}],class:{"is-error":n[0]},attrs:{placeholder:"Paste your key",type:"text"},domProps:{value:e.storage.key},on:{input:function(a){a.target.composing||e.$set(e.storage,"key",a.target.value)}}}),e._v(" "),n[0]?t("span",{staticClass:"error-message"},[e._v(e._s(n[0]))]):e._e()]}}],null,!0)})],1),e._v(" "),t("div",{staticClass:"block-wrapper"},[t("label",[e._v("Secret:")]),e._v(" "),t("ValidationProvider",{staticClass:"input-wrapper",attrs:{tag:"div",mode:"passive",name:"Secret",rules:"required"},scopedSlots:e._u([{key:"default",fn:function(a){var n=a.errors;return[t("input",{directives:[{name:"model",rawName:"v-model",value:e.storage.secret,expression:"storage.secret"}],class:{"is-error":n[0]},attrs:{placeholder:"Paste your secret",type:"text"},domProps:{value:e.storage.secret},on:{input:function(a){a.target.composing||e.$set(e.storage,"secret",a.target.value)}}}),e._v(" "),n[0]?t("span",{staticClass:"error-message"},[e._v(e._s(n[0]))]):e._e()]}}],null,!0)})],1),e._v(" "),t("div",{staticClass:"block-wrapper"},[t("label",[e._v("Region:")]),e._v(" "),t("ValidationProvider",{staticClass:"input-wrapper",attrs:{tag:"div",mode:"passive",name:"Region",rules:"required"},scopedSlots:e._u([{key:"default",fn:function(a){var n=a.errors;return[t("SelectInput",{key:e.storage.driver,attrs:{options:e.regionList,placeholder:"Select your region",isError:n[0]},model:{value:e.storage.region,callback:function(a){e.$set(e.storage,"region",a)},expression:"storage.region"}}),e._v(" "),n[0]?t("span",{staticClass:"error-message"},[e._v(e._s(n[0]))]):e._e(),e._v(" "),t("small",{staticClass:"input-help"},[e._v("\n                            Select your region where is your bucket/space created.\n                        ")])]}}],null,!0)})],1),e._v(" "),"s3"!==e.storage.driver?t("div",{staticClass:"block-wrapper"},[t("label",[e._v("Endpoint URL:")]),e._v(" "),t("ValidationProvider",{staticClass:"input-wrapper",attrs:{tag:"div",mode:"passive",name:"Endpoint",rules:"required"},scopedSlots:e._u([{key:"default",fn:function(a){var n=a.errors;return[t("input",{directives:[{name:"model",rawName:"v-model",value:e.storage.endpoint,expression:"storage.endpoint"}],class:{"is-error":n[0]},attrs:{placeholder:"Type your endpoint",type:"text",readonly:""},domProps:{value:e.storage.endpoint},on:{input:function(a){a.target.composing||e.$set(e.storage,"endpoint",a.target.value)}}}),e._v(" "),n[0]?t("span",{staticClass:"error-message"},[e._v(e._s(n[0]))]):e._e()]}}],null,!0)})],1):e._e(),e._v(" "),t("div",{staticClass:"block-wrapper"},[t("label",[e._v("Bucket:")]),e._v(" "),t("ValidationProvider",{staticClass:"input-wrapper",attrs:{tag:"div",mode:"passive",name:"Bucket",rules:"required"},scopedSlots:e._u([{key:"default",fn:function(a){var n=a.errors;return[t("input",{directives:[{name:"model",rawName:"v-model",value:e.storage.bucket,expression:"storage.bucket"}],class:{"is-error":n[0]},attrs:{placeholder:"Type your bucket name",type:"text"},domProps:{value:e.storage.bucket},on:{input:function(a){a.target.composing||e.$set(e.storage,"bucket",a.target.value)}}}),e._v(" "),n[0]?t("span",{staticClass:"error-message"},[e._v(e._s(n[0]))]):e._e(),e._v(" "),t("small",{staticClass:"input-help"},[e._v("\n                            Provide your created unique bucket name\n                        ")])]}}],null,!0)})],1),e._v(" "),t("InfoBox",[t("p",[e._v("Later, you can edit these data in your "),t("b",[e._v(".env")]),e._v(" file which is located in app root folder.")])])],1):e._e(),e._v(" "),t("FormLabel",{staticClass:"mt-70"},[e._v("Email Setup")]),e._v(" "),t("div",{staticClass:"block-wrapper"},[t("label",[e._v("Mail Driver:")]),e._v(" "),t("ValidationProvider",{staticClass:"input-wrapper",attrs:{tag:"div",mode:"passive",name:"Mail Driver",rules:"required"},scopedSlots:e._u([{key:"default",fn:function(a){var n=a.errors;return[t("SelectInput",{attrs:{options:e.mailDriverList,default:"smtp",placeholder:"Select your mail driver",isError:n[0]},model:{value:e.mail.driver,callback:function(a){e.$set(e.mail,"driver",a)},expression:"mail.driver"}}),e._v(" "),n[0]?t("span",{staticClass:"error-message"},[e._v(e._s(n[0]))]):e._e()]}}],null,!0)})],1),e._v(" "),t("div",{staticClass:"block-wrapper"},[t("label",[e._v("Mail Host:")]),e._v(" "),t("ValidationProvider",{staticClass:"input-wrapper",attrs:{tag:"div",mode:"passive",name:"Mail Host",rules:"required"},scopedSlots:e._u([{key:"default",fn:function(a){var n=a.errors;return[t("input",{directives:[{name:"model",rawName:"v-model",value:e.mail.host,expression:"mail.host"}],class:{"is-error":n[0]},attrs:{placeholder:"Type your mail host",type:"text"},domProps:{value:e.mail.host},on:{input:function(a){a.target.composing||e.$set(e.mail,"host",a.target.value)}}}),e._v(" "),n[0]?t("span",{staticClass:"error-message"},[e._v(e._s(n[0]))]):e._e()]}}],null,!0)})],1),e._v(" "),t("div",{staticClass:"block-wrapper"},[t("label",[e._v("Mail Port:")]),e._v(" "),t("ValidationProvider",{staticClass:"input-wrapper",attrs:{tag:"div",mode:"passive",name:"Mail Port",rules:"required"},scopedSlots:e._u([{key:"default",fn:function(a){var n=a.errors;return[t("input",{directives:[{name:"model",rawName:"v-model",value:e.mail.port,expression:"mail.port"}],class:{"is-error":n[0]},attrs:{placeholder:"Type your mail port",type:"text"},domProps:{value:e.mail.port},on:{input:function(a){a.target.composing||e.$set(e.mail,"port",a.target.value)}}}),e._v(" "),n[0]?t("span",{staticClass:"error-message"},[e._v(e._s(n[0]))]):e._e()]}}],null,!0)})],1),e._v(" "),t("div",{staticClass:"block-wrapper"},[t("label",[e._v("Mail Username:")]),e._v(" "),t("ValidationProvider",{staticClass:"input-wrapper",attrs:{tag:"div",mode:"passive",name:"Mail Username",rules:"required"},scopedSlots:e._u([{key:"default",fn:function(a){var n=a.errors;return[t("input",{directives:[{name:"model",rawName:"v-model",value:e.mail.username,expression:"mail.username"}],class:{"is-error":n[0]},attrs:{placeholder:"Type your mail username",type:"text"},domProps:{value:e.mail.username},on:{input:function(a){a.target.composing||e.$set(e.mail,"username",a.target.value)}}}),e._v(" "),n[0]?t("span",{staticClass:"error-message"},[e._v(e._s(n[0]))]):e._e()]}}],null,!0)})],1),e._v(" "),t("div",{staticClass:"block-wrapper"},[t("label",[e._v("Mail Password:")]),e._v(" "),t("ValidationProvider",{staticClass:"input-wrapper",attrs:{tag:"div",mode:"passive",name:"Mail Password",rules:"required"},scopedSlots:e._u([{key:"default",fn:function(a){var n=a.errors;return[t("input",{directives:[{name:"model",rawName:"v-model",value:e.mail.password,expression:"mail.password"}],class:{"is-error":n[0]},attrs:{placeholder:"Type your mail password",type:"text"},domProps:{value:e.mail.password},on:{input:function(a){a.target.composing||e.$set(e.mail,"password",a.target.value)}}}),e._v(" "),n[0]?t("span",{staticClass:"error-message"},[e._v(e._s(n[0]))]):e._e()]}}],null,!0)})],1),e._v(" "),t("div",{staticClass:"block-wrapper"},[t("label",[e._v("Mail Encryption:")]),e._v(" "),t("ValidationProvider",{staticClass:"input-wrapper",attrs:{tag:"div",mode:"passive",name:"Mail Encryption",rules:"required"},scopedSlots:e._u([{key:"default",fn:function(a){var n=a.errors;return[t("SelectInput",{attrs:{options:e.encryptionList,placeholder:"Select your mail encryption",isError:n[0]},model:{value:e.mail.encryption,callback:function(a){e.$set(e.mail,"encryption",a)},expression:"mail.encryption"}}),e._v(" "),n[0]?t("span",{staticClass:"error-message"},[e._v(e._s(n[0]))]):e._e()]}}],null,!0)})],1),e._v(" "),t("div",{staticClass:"submit-wrapper"},[t("AuthButton",{attrs:{icon:"chevron-right",text:"Save and Set General Settings",loading:e.isLoading,disabled:e.isLoading}})],1)]}}])})],1)],1)}),[],!1,null,"66fd240e",null);a.default=x.exports},"F+Qg":function(e,a,t){"use strict";var n=t("3GDE");t.n(n).a},FakX:function(e,a,t){"use strict";var n=t("CKmr");t.n(n).a},KnjL:function(e,a,t){"use strict";var n={name:"InfoBox",props:["type"]},r=(t("pFam"),t("KHd+")),i=Object(r.a)(n,(function(){var e=this.$createElement;return(this._self._c||e)("div",{staticClass:"info-box",class:this.type},[this._t("default")],2)}),[],!1,null,"8e7c42f6",null);a.a=i.exports},PthV:function(e,a,t){(e.exports=t("I1BE")(!1)).push([e.i,'.form[data-v-66fd240e] {\n  max-width: 700px;\n}\n.form.inline-form[data-v-66fd240e] {\n  display: flex;\n  position: relative;\n  justify-content: center;\n  margin: 0 auto;\n}\n.form.inline-form .input-wrapper[data-v-66fd240e] {\n  position: relative;\n}\n.form.inline-form .input-wrapper .error-message[data-v-66fd240e] {\n  position: absolute;\n  left: 0;\n  bottom: -25px;\n}\n.form.block-form .wrapper-inline[data-v-66fd240e] {\n  display: flex;\n  margin: 0 -15px;\n}\n.form.block-form .wrapper-inline .block-wrapper[data-v-66fd240e] {\n  width: 100%;\n  padding: 0 15px;\n}\n.form.block-form .block-wrapper[data-v-66fd240e] {\n  margin-bottom: 32px;\n}\n.form.block-form .block-wrapper label[data-v-66fd240e] {\n  font-size: 0.875em;\n  color: rgba(27, 37, 57, 0.8);\n  font-weight: 700;\n  display: block;\n  margin-bottom: 7px;\n  text-align: left;\n}\n.form.block-form .block-wrapper[data-v-66fd240e]:last-child {\n  margin-bottom: 0;\n}\n.form.block-form .button[data-v-66fd240e] {\n  margin-top: 50px;\n}\n.form .inline-wrapper[data-v-66fd240e] {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n}\n.form .inline-wrapper .switch-label .input-help[data-v-66fd240e] {\n  padding-top: 0;\n}\n.form .inline-wrapper .switch-label .input-label[data-v-66fd240e] {\n  font-weight: 700;\n  color: #1B2539;\n  font-size: 1em;\n  margin-bottom: 5px;\n}\n.form .input-help[data-v-66fd240e] {\n  font-size: 0.75em;\n  color: rgba(27, 37, 57, 0.7);\n  line-height: 1.35;\n  padding-top: 10px;\n  display: block;\n}\n.single-line-form[data-v-66fd240e] {\n  display: flex;\n}\n.single-line-form .submit-button[data-v-66fd240e] {\n  margin-left: 20px;\n}\n.error-message[data-v-66fd240e] {\n  font-size: 0.875em;\n  color: #fd397a;\n  padding-top: 5px;\n  display: block;\n  text-align: left;\n}\ntextarea[data-v-66fd240e] {\n  width: 100%;\n}\ninput[type="color"][data-v-66fd240e] {\n  width: 38px;\n  height: 40px;\n  border: none;\n  outline: none;\n  background: none;\n}\ntextarea[data-v-66fd240e],\ninput[type="password"][data-v-66fd240e],\ninput[type="text"][data-v-66fd240e],\ninput[type="number"][data-v-66fd240e],\ninput[type="email"][data-v-66fd240e] {\n  border: 1px solid transparent;\n  transition: 150ms all ease;\n  font-size: 1em;\n  border-radius: 8px;\n  padding: 13px 20px;\n  -webkit-appearance: none;\n     -moz-appearance: none;\n          appearance: none;\n  font-weight: 700;\n  outline: 0;\n  width: 100%;\n  box-shadow: 0 1px 5px rgba(0, 0, 0, 0.12);\n}\ntextarea.is-error[data-v-66fd240e],\ninput[type="password"].is-error[data-v-66fd240e],\ninput[type="text"].is-error[data-v-66fd240e],\ninput[type="number"].is-error[data-v-66fd240e],\ninput[type="email"].is-error[data-v-66fd240e] {\n  border-color: #fd397a;\n}\ntextarea[data-v-66fd240e]::-webkit-input-placeholder, input[type="password"][data-v-66fd240e]::-webkit-input-placeholder, input[type="text"][data-v-66fd240e]::-webkit-input-placeholder, input[type="number"][data-v-66fd240e]::-webkit-input-placeholder, input[type="email"][data-v-66fd240e]::-webkit-input-placeholder {\n  color: rgba(27, 37, 57, 0.5);\n  font-size: 0.9375em;\n}\ntextarea[data-v-66fd240e]::-moz-placeholder, input[type="password"][data-v-66fd240e]::-moz-placeholder, input[type="text"][data-v-66fd240e]::-moz-placeholder, input[type="number"][data-v-66fd240e]::-moz-placeholder, input[type="email"][data-v-66fd240e]::-moz-placeholder {\n  color: rgba(27, 37, 57, 0.5);\n  font-size: 0.9375em;\n}\ntextarea[data-v-66fd240e]:-ms-input-placeholder, input[type="password"][data-v-66fd240e]:-ms-input-placeholder, input[type="text"][data-v-66fd240e]:-ms-input-placeholder, input[type="number"][data-v-66fd240e]:-ms-input-placeholder, input[type="email"][data-v-66fd240e]:-ms-input-placeholder {\n  color: rgba(27, 37, 57, 0.5);\n  font-size: 0.9375em;\n}\ntextarea[data-v-66fd240e]::-ms-input-placeholder, input[type="password"][data-v-66fd240e]::-ms-input-placeholder, input[type="text"][data-v-66fd240e]::-ms-input-placeholder, input[type="number"][data-v-66fd240e]::-ms-input-placeholder, input[type="email"][data-v-66fd240e]::-ms-input-placeholder {\n  color: rgba(27, 37, 57, 0.5);\n  font-size: 0.9375em;\n}\ntextarea[data-v-66fd240e]::placeholder,\ninput[type="password"][data-v-66fd240e]::placeholder,\ninput[type="text"][data-v-66fd240e]::placeholder,\ninput[type="number"][data-v-66fd240e]::placeholder,\ninput[type="email"][data-v-66fd240e]::placeholder {\n  color: rgba(27, 37, 57, 0.5);\n  font-size: 0.9375em;\n}\ntextarea[disabled][data-v-66fd240e],\ninput[type="password"][disabled][data-v-66fd240e],\ninput[type="text"][disabled][data-v-66fd240e],\ninput[type="number"][disabled][data-v-66fd240e],\ninput[type="email"][disabled][data-v-66fd240e] {\n  background: white;\n  color: rgba(27, 37, 57, 0.8);\n  -webkit-text-fill-color: rgba(27, 37, 57, 0.8);\n  opacity: 1;\n  cursor: not-allowed;\n}\n.additional-link[data-v-66fd240e] {\n  font-size: 1em;\n  margin-top: 50px;\n  display: block;\n}\n.additional-link b[data-v-66fd240e], .additional-link a[data-v-66fd240e] {\n  cursor: pointer;\n}\n.additional-link b[data-v-66fd240e]:hover, .additional-link a[data-v-66fd240e]:hover {\n  text-decoration: underline;\n}\n@media only screen and (max-width: 1024px) {\n.form[data-v-66fd240e] {\n    max-width: 100%;\n}\n}\n@media only screen and (max-width: 960px) {\n.form .button[data-v-66fd240e] {\n    margin-top: 20px;\n    width: 100%;\n    margin-left: 0;\n    margin-right: 0;\n}\n.form input[data-v-66fd240e], .form textarea[data-v-66fd240e] {\n    width: 100%;\n    min-width: 100%;\n}\n.form.block-form .block-wrapper[data-v-66fd240e] {\n    display: block;\n}\n.form.block-form .block-wrapper label[data-v-66fd240e] {\n    width: 100%;\n    padding-right: 0;\n    display: block;\n    margin-bottom: 7px;\n    text-align: left !important;\n    font-size: 0.875em;\n    padding-top: 0;\n}\n.form.block-form .button[data-v-66fd240e] {\n    margin-top: 25px;\n    margin-left: 0;\n    margin-right: 0;\n}\n.form.inline-form[data-v-66fd240e] {\n    display: block;\n}\n.form.inline-form .input-wrapper .error-message[data-v-66fd240e] {\n    position: relative;\n    bottom: 0;\n}\n.form .button[data-v-66fd240e] {\n    padding: 14px 32px;\n}\n.single-line-form[data-v-66fd240e] {\n    display: block;\n}\n.single-line-form .submit-button[data-v-66fd240e] {\n    margin-left: 0;\n    margin-top: 20px;\n    width: 100%;\n}\ntextarea[data-v-66fd240e],\n  input[type="password"][data-v-66fd240e],\n  input[type="number"][data-v-66fd240e],\n  input[type="text"][data-v-66fd240e],\n  input[type="email"][data-v-66fd240e] {\n    padding: 14px 20px;\n}\n}\n@media only screen and (max-width: 690px) {\n.form.block-form .wrapper-inline[data-v-66fd240e] {\n    display: block;\n}\n}\n@media (prefers-color-scheme: dark) {\n.form .input-help[data-v-66fd240e] {\n    color: #7d858c;\n}\n.form.block-form .block-wrapper label[data-v-66fd240e] {\n    color: #bec6cf;\n}\n.form .inline-wrapper .switch-label .input-label[data-v-66fd240e] {\n    color: #bec6cf;\n}\ntextarea[data-v-66fd240e],\n  input[type="password"][data-v-66fd240e],\n  input[type="text"][data-v-66fd240e],\n  input[type="number"][data-v-66fd240e],\n  input[type="email"][data-v-66fd240e] {\n    border-color: #1e2024;\n    background: #1e2024;\n    color: #bec6cf;\n}\ntextarea[data-v-66fd240e]::-webkit-input-placeholder, input[type="password"][data-v-66fd240e]::-webkit-input-placeholder, input[type="text"][data-v-66fd240e]::-webkit-input-placeholder, input[type="number"][data-v-66fd240e]::-webkit-input-placeholder, input[type="email"][data-v-66fd240e]::-webkit-input-placeholder {\n    color: #7d858c;\n}\ntextarea[data-v-66fd240e]::-moz-placeholder, input[type="password"][data-v-66fd240e]::-moz-placeholder, input[type="text"][data-v-66fd240e]::-moz-placeholder, input[type="number"][data-v-66fd240e]::-moz-placeholder, input[type="email"][data-v-66fd240e]::-moz-placeholder {\n    color: #7d858c;\n}\ntextarea[data-v-66fd240e]:-ms-input-placeholder, input[type="password"][data-v-66fd240e]:-ms-input-placeholder, input[type="text"][data-v-66fd240e]:-ms-input-placeholder, input[type="number"][data-v-66fd240e]:-ms-input-placeholder, input[type="email"][data-v-66fd240e]:-ms-input-placeholder {\n    color: #7d858c;\n}\ntextarea[data-v-66fd240e]::-ms-input-placeholder, input[type="password"][data-v-66fd240e]::-ms-input-placeholder, input[type="text"][data-v-66fd240e]::-ms-input-placeholder, input[type="number"][data-v-66fd240e]::-ms-input-placeholder, input[type="email"][data-v-66fd240e]::-ms-input-placeholder {\n    color: #7d858c;\n}\ntextarea[data-v-66fd240e]::placeholder,\n  input[type="password"][data-v-66fd240e]::placeholder,\n  input[type="text"][data-v-66fd240e]::placeholder,\n  input[type="number"][data-v-66fd240e]::placeholder,\n  input[type="email"][data-v-66fd240e]::placeholder {\n    color: #7d858c;\n}\ntextarea[disabled][data-v-66fd240e],\n  input[type="password"][disabled][data-v-66fd240e],\n  input[type="text"][disabled][data-v-66fd240e],\n  input[type="number"][disabled][data-v-66fd240e],\n  input[type="email"][disabled][data-v-66fd240e] {\n    background: #1e2024;\n    color: rgba(125, 133, 140, 0.8);\n    -webkit-text-fill-color: rgba(125, 133, 140, 0.8);\n}\n.popup-wrapper textarea[data-v-66fd240e],\n  .popup-wrapper input[type="password"][data-v-66fd240e],\n  .popup-wrapper input[type="text"][data-v-66fd240e],\n  .popup-wrapper input[type="number"][data-v-66fd240e],\n  .popup-wrapper input[type="email"][data-v-66fd240e] {\n    background: #25272c;\n}\n}\n.auth-logo-text[data-v-66fd240e] {\n  font-size: 1.375em;\n  font-weight: 800;\n  margin-bottom: 40px;\n  display: block;\n}\n.auth-form[data-v-66fd240e] {\n  text-align: center;\n  max-width: 600px;\n  padding: 25px 20px;\n  display: table-cell;\n  vertical-align: middle;\n}\n.auth-form input[data-v-66fd240e] {\n  min-width: 310px;\n}\n.auth-form .additional-link a[data-v-66fd240e] {\n  font-weight: 700;\n  text-decoration: none;\n}\n.auth-form .user-avatar[data-v-66fd240e] {\n  width: 100px;\n  height: 100px;\n  -o-object-fit: cover;\n     object-fit: cover;\n  margin-bottom: 20px;\n  border-radius: 8px;\n  box-shadow: 0 10px 30px rgba(25, 54, 60, 0.2);\n}\n.auth-form .logo[data-v-66fd240e] {\n  width: 120px;\n  margin-bottom: 20px;\n}\n.auth-form h1[data-v-66fd240e] {\n  font-size: 2.125em;\n  font-weight: 800;\n  line-height: 1.2;\n  margin-bottom: 2px;\n  color: #1B2539;\n}\n.auth-form h2[data-v-66fd240e] {\n  font-size: 1.4375em;\n  font-weight: 500;\n  margin-bottom: 50px;\n  color: #1B2539;\n}\n.auth-form .block-form[data-v-66fd240e] {\n  margin-left: auto;\n  margin-right: auto;\n}\n@media only screen and (min-width: 690px) and (max-width: 960px) {\n.auth-form[data-v-66fd240e] {\n    padding-left: 20%;\n    padding-right: 20%;\n}\n}\n@media only screen and (max-width: 690px) {\n.auth-form[data-v-66fd240e] {\n    width: 100%;\n}\n.auth-form h1[data-v-66fd240e] {\n    font-size: 1.875em;\n}\n.auth-form h2[data-v-66fd240e] {\n    font-size: 1.3125em;\n}\n}\n@media only screen and (max-width: 490px) {\n.auth-form h1[data-v-66fd240e] {\n    font-size: 1.375em;\n}\n.auth-form h2[data-v-66fd240e] {\n    font-size: 1.125em;\n}\n.auth-form input[data-v-66fd240e] {\n    min-width: initial;\n}\n.auth-form .additional-link[data-v-66fd240e] {\n    font-size: 0.9375em;\n}\n}\n@media (prefers-color-scheme: dark) {\n.auth-form h1[data-v-66fd240e], .auth-form h2[data-v-66fd240e], .auth-form .additional-link[data-v-66fd240e] {\n    color: #bec6cf;\n}\n}\n.content-headline[data-v-66fd240e] {\n  max-width: 630px;\n  margin-left: auto;\n  margin-right: auto;\n}\n.auth-form input[data-v-66fd240e] {\n  min-width: initial;\n}\n.duplicator .duplicator-add-button[data-v-66fd240e] {\n  width: 100%;\n}\n.duplicator .duplicator-item[data-v-66fd240e] {\n  box-shadow: 0 1px 5px rgba(0, 0, 0, 0.12);\n  border-radius: 8px;\n  background: white;\n  padding: 25px;\n  margin: 0 -25px 32px;\n  position: relative;\n}\n.duplicator .duplicator-item .duplicator-title[data-v-66fd240e] {\n  font-size: 1.125em;\n  margin-bottom: 20px;\n  display: block;\n  font-weight: 700;\n}\n.duplicator .duplicator-item .delete-item[data-v-66fd240e] {\n  position: absolute;\n  top: 15px;\n  right: 15px;\n  cursor: pointer;\n}\n.duplicator .duplicator-item .delete-item:hover line[data-v-66fd240e] {\n  stroke: #00BC7E;\n}\n.duplicator .duplicator-item input[data-v-66fd240e],\n.duplicator .duplicator-item textarea[data-v-66fd240e] {\n  box-shadow: none;\n  background: #FAFAFA;\n}\n.form[data-v-66fd240e] {\n  max-width: 580px;\n  text-align: left;\n}\n.submit-wrapper[data-v-66fd240e] {\n  text-align: right;\n}\n.submit-wrapper .button[data-v-66fd240e] {\n  margin: 58px 0 50px 0;\n  width: 100%;\n}\n.title-icon[data-v-66fd240e] {\n  margin-bottom: 10px;\n  -webkit-animation: spinner-data-v-66fd240e 5s linear infinite;\n          animation: spinner-data-v-66fd240e 5s linear infinite;\n}\n.title-icon circle[data-v-66fd240e], .title-icon path[data-v-66fd240e] {\n  color: inherit;\n}\n@-webkit-keyframes spinner-data-v-66fd240e {\n0% {\n    transform: rotate(0deg);\n}\n100% {\n    transform: rotate(360deg);\n}\n}\n@keyframes spinner-data-v-66fd240e {\n0% {\n    transform: rotate(0deg);\n}\n100% {\n    transform: rotate(360deg);\n}\n}\n@media (prefers-color-scheme: dark) {\n.duplicator .duplicator-item[data-v-66fd240e] {\n    background: #1e2024;\n}\n.duplicator .duplicator-item input[data-v-66fd240e],\n  .duplicator .duplicator-item textarea[data-v-66fd240e] {\n    background: #141414;\n}\n}\n',""])},"Qqv+":function(e,a,t){var n=t("biqn");"string"==typeof n&&(n=[[e.i,n,""]]);var r={hmr:!0,transform:void 0,insertInto:void 0};t("aET+")(n,r);n.locals&&(e.exports=n.locals)},UqlB:function(e,a,t){(e.exports=t("I1BE")(!1)).push([e.i,".select[data-v-14b1d6a3] {\n  position: relative;\n  -webkit-user-select: none;\n     -moz-user-select: none;\n      -ms-user-select: none;\n          user-select: none;\n  width: 100%;\n}\n.input-options[data-v-14b1d6a3] {\n  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.12);\n  background: white;\n  border-radius: 8px;\n  position: absolute;\n  overflow: hidden;\n  top: 65px;\n  left: 0;\n  right: 0;\n  z-index: 9;\n  max-height: 295px;\n  overflow-y: auto;\n}\n.input-options .option-item[data-v-14b1d6a3] {\n  padding: 13px 20px;\n  display: block;\n  cursor: pointer;\n}\n.input-options .option-item[data-v-14b1d6a3]:hover {\n  color: #00BC7E;\n  background: #f4f5f6;\n}\n.input-options .option-item[data-v-14b1d6a3]:last-child {\n  border-bottom: none;\n}\n.input-area[data-v-14b1d6a3] {\n  border-width: 1px;\n  border-style: solid;\n  border-color: transparent;\n  justify-content: space-between;\n  box-shadow: 0 1px 5px rgba(0, 0, 0, 0.12);\n  transition: 150ms all ease;\n  align-items: center;\n  border-radius: 8px;\n  padding: 13px 20px;\n  display: flex;\n  outline: 0;\n  width: 100%;\n  cursor: pointer;\n}\n.input-area .chevron[data-v-14b1d6a3] {\n  transition: 150ms all ease;\n}\n.input-area.is-active .chevron[data-v-14b1d6a3] {\n  transform: rotate(180deg);\n}\n.input-area.is-error[data-v-14b1d6a3] {\n  border-color: #fd397a;\n  box-shadow: 0 0 7px rgba(253, 57, 122, 0.3);\n}\n.option-icon[data-v-14b1d6a3] {\n  width: 20px;\n  display: inline-block;\n  font-size: 0.625em;\n}\n.option-icon svg[data-v-14b1d6a3] {\n  margin-top: -4px;\n  vertical-align: middle;\n}\n.option-value[data-v-14b1d6a3] {\n  font-size: 0.875em;\n  font-weight: 700;\n  width: 100%;\n  vertical-align: middle;\n}\n.option-value.placehoder[data-v-14b1d6a3] {\n  color: rgba(27, 37, 57, 0.5);\n}\n.slide-in-enter-active[data-v-14b1d6a3] {\n  transition: all 150ms ease;\n}\n.slide-in-enter[data-v-14b1d6a3] {\n  opacity: 0;\n  transform: translateY(-50px);\n}\n@media (prefers-color-scheme: dark) {\n.input-area[data-v-14b1d6a3] {\n    background: #1e2024;\n    border-color: #1e2024;\n}\n.popup-wrapper .input-area[data-v-14b1d6a3] {\n    background: #25272c;\n}\n.input-options[data-v-14b1d6a3] {\n    background: #1e2024;\n}\n.input-options .option-item[data-v-14b1d6a3] {\n    border-bottom: none;\n}\n.input-options .option-item[data-v-14b1d6a3]:hover {\n    background: #2a2c32;\n}\n.input-options .option-item:hover .option-icon path[data-v-14b1d6a3], .input-options .option-item:hover .option-icon circle[data-v-14b1d6a3] {\n    color: inherit;\n}\n.input-options .option-item[data-v-14b1d6a3]:last-child {\n    border-bottom: none;\n}\n.option-value.placehoder[data-v-14b1d6a3] {\n    color: #7d858c;\n}\n}\n",""])},biqn:function(e,a,t){(e.exports=t("I1BE")(!1)).push([e.i,".info-box[data-v-8e7c42f6] {\n  padding: 20px;\n  border-radius: 8px;\n  margin-bottom: 32px;\n  background: #f4f5f6;\n  text-align: left;\n}\n.info-box.error[data-v-8e7c42f6] {\n  background: rgba(253, 57, 122, 0.1);\n}\n.info-box.error p[data-v-8e7c42f6], .info-box.error a[data-v-8e7c42f6] {\n  color: #fd397a;\n}\n.info-box.error a[data-v-8e7c42f6] {\n  text-decoration: underline;\n}\n.info-box p[data-v-8e7c42f6] {\n  font-size: 15px;\n  line-height: 1.6;\n  word-break: break-word;\n  font-weight: 600;\n}\n.info-box p[data-v-8e7c42f6] a {\n  font-size: 15px;\n}\n.info-box p[data-v-8e7c42f6] b {\n  font-size: 15px;\n  font-weight: 700;\n}\n.info-box b[data-v-8e7c42f6] {\n  font-weight: 700;\n}\n.info-box a[data-v-8e7c42f6] {\n  font-weight: 700;\n  font-size: 0.9375em;\n  line-height: 1.6;\n}\n.info-box ul[data-v-8e7c42f6] {\n  margin-top: 15px;\n  display: block;\n}\n.info-box ul li[data-v-8e7c42f6] {\n  display: block;\n}\n.info-box ul li a[data-v-8e7c42f6] {\n  display: block;\n}\n@media only screen and (max-width: 690px) {\n.info-box[data-v-8e7c42f6] {\n    padding: 15px;\n}\n}\n@media (prefers-color-scheme: dark) {\n.info-box[data-v-8e7c42f6] {\n    background: #1e2024;\n}\n.info-box p[data-v-8e7c42f6] {\n    color: #bec6cf;\n}\n.info-box ul li[data-v-8e7c42f6] {\n    color: #bec6cf;\n}\n}\n",""])},eZ9V:function(e,a,t){"use strict";var n=t("CjXH"),r={name:"FormLabel",props:["icon"],components:{Edit2Icon:n.r,SettingsIcon:n.W}},i=(t("1L+q"),t("KHd+")),o=Object(i.a)(r,(function(){var e=this.$createElement,a=this._self._c||e;return a("div",{staticClass:"form-label"},[this.icon?this._e():a("edit-2-icon",{staticClass:"icon text-theme",attrs:{size:"22"}}),this._v(" "),"settings"===this.icon?a("settings-icon",{staticClass:"icon text-theme",attrs:{size:"22"}}):this._e(),this._v(" "),a("b",{staticClass:"label"},[this._t("default")],2)],1)}),[],!1,null,"10bcab7e",null);a.a=o.exports},jexE:function(e,a,t){(e.exports=t("I1BE")(!1)).push([e.i,".form-label[data-v-10bcab7e] {\n  display: flex;\n  align-items: center;\n  margin-bottom: 30px;\n}\n.form-label .icon[data-v-10bcab7e] {\n  margin-right: 10px;\n}\n.form-label .icon path[data-v-10bcab7e], .form-label .icon circle[data-v-10bcab7e] {\n  color: inherit;\n}\n.form-label .label[data-v-10bcab7e] {\n  font-size: 1.125em;\n  font-weight: 700;\n}\n@media (prefers-color-scheme: dark) {\n.form-label .label[data-v-10bcab7e] {\n    color: #bec6cf;\n}\n}\n",""])},pFam:function(e,a,t){"use strict";var n=t("Qqv+");t.n(n).a}}]);