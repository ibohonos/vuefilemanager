(window.webpackJsonp=window.webpackJsonp||[]).push([[17],{"+Pqb":function(e,t,a){"use strict";var n={name:"ProgressBar",props:["progress"]},i=(a("8L2t"),a("KHd+")),o=Object(i.a)(n,(function(){var e=this.$createElement,t=this._self._c||e;return t("div",{staticClass:"progress-bar"},[t("span",{staticClass:"bg-theme",style:{width:this.progress+"%"}})])}),[],!1,null,"6ec2be7a",null);t.a=o.exports},"+v8A":function(e,t,a){var n=a("hw5j");"string"==typeof n&&(n=[[e.i,n,""]]);var i={hmr:!0,transform:void 0,insertInto:void 0};a("aET+")(n,i);n.locals&&(e.exports=n.locals)},"2jUW":function(e,t,a){(e.exports=a("I1BE")(!1)).push([e.i,".dropzone[data-v-5d141a68] {\n  border: 1px dashed #a1abc2;\n  border-radius: 8px;\n  position: relative;\n  text-align: center;\n  display: flex;\n  align-items: center;\n  min-height: 175px;\n}\n.dropzone.is-error[data-v-5d141a68] {\n  border: 2px dashed rgba(253, 57, 122, 0.3);\n}\n.dropzone.is-error .dropzone-title[data-v-5d141a68] {\n  color: #fd397a;\n}\n.dropzone.is-error .icon-upload rect[data-v-5d141a68], .dropzone.is-error .icon-upload circle[data-v-5d141a68], .dropzone.is-error .icon-upload polyline[data-v-5d141a68] {\n  stroke: #fd397a;\n}\n.dropzone input[type='file'][data-v-5d141a68] {\n  opacity: 0;\n  position: absolute;\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  z-index: 1;\n  width: 100%;\n  cursor: pointer;\n}\n.dropzone .image-preview[data-v-5d141a68] {\n  position: absolute;\n  width: 100%;\n  height: 100%;\n  -o-object-fit: contain;\n     object-fit: contain;\n  left: 0;\n  padding: 25px;\n  display: block;\n}\n.dropzone .image-preview.fit-image[data-v-5d141a68] {\n  -o-object-fit: cover;\n     object-fit: cover;\n  border-radius: 12px;\n  overflow: hidden;\n}\n.dropzone .dropzone-message[data-v-5d141a68] {\n  padding: 50px 0;\n  width: 100%;\n}\n.dropzone .dropzone-message .icon-upload rect[data-v-5d141a68], .dropzone .dropzone-message .icon-upload circle[data-v-5d141a68], .dropzone .dropzone-message .icon-upload polyline[data-v-5d141a68] {\n  color: inherit;\n}\n.dropzone .dropzone-message .dropzone-title[data-v-5d141a68] {\n  font-size: 1em;\n  font-weight: 700;\n  display: block;\n}\n.dropzone .dropzone-message .dropzone-description[data-v-5d141a68] {\n  color: rgba(27, 37, 57, 0.7);\n  font-size: 0.75em;\n}\n.dropzone .reset-image[data-v-5d141a68] {\n  z-index: 2;\n  background: white;\n  border-radius: 50px;\n  display: block;\n  position: absolute;\n  right: 0;\n  top: 0;\n  cursor: pointer;\n  transform: translateY(-50%) translateX(50%);\n  padding: 0px 4px;\n  box-shadow: 0 1px 5px rgba(0, 0, 0, 0.12);\n}\n.dropzone .reset-image .close-icon[data-v-5d141a68] {\n  vertical-align: middle;\n}\n.dropzone .reset-image .close-icon line path[data-v-5d141a68] {\n  fill: #1B2539;\n}\n@media (prefers-color-scheme: dark) {\n.dropzone[data-v-5d141a68] {\n    border-color: rgba(255, 255, 255, 0.2);\n}\n.dropzone .dropzone-message .icon-upload path[data-v-5d141a68], .dropzone .dropzone-message .icon-upload polyline[data-v-5d141a68], .dropzone .dropzone-message .icon-upload line[data-v-5d141a68] {\n    color: inherit;\n}\n.dropzone .dropzone-message .dropzone-description[data-v-5d141a68] {\n    color: #7d858c;\n}\n}\n",""])},"3GDE":function(e,t,a){var n=a("UqlB");"string"==typeof n&&(n=[[e.i,n,""]]);var i={hmr:!0,transform:void 0,insertInto:void 0};a("aET+")(n,i);n.locals&&(e.exports=n.locals)},"4TWA":function(e,t,a){"use strict";var n=a("CjXH"),i={name:"SelectInput",props:["options","isError","default","placeholder"],components:{Edit2Icon:n.r,UserIcon:n.eb,ChevronDownIcon:n.f},data:function(){return{selected:void 0,isOpen:!1}},methods:{selectOption:function(e){this.$emit("input",e.value),this.selected=e,this.isOpen=!1},openMenu:function(){this.isOpen=!this.isOpen}},created:function(){var e=this;this.default&&(this.selected=this.options.find((function(t){return t.value===e.default})))}},o=(a("F+Qg"),a("KHd+")),s=Object(o.a)(i,(function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"select"},[a("div",{staticClass:"input-area",class:{"is-active":e.isOpen,"is-error":e.isError},on:{click:e.openMenu}},[e.selected?a("div",{staticClass:"selected"},[e.selected.icon?a("div",{staticClass:"option-icon"},["user"===e.selected.icon?a("user-icon",{attrs:{size:"14"}}):e._e(),e._v(" "),"user-edit"===e.selected.icon?a("edit2-icon",{attrs:{size:"14"}}):e._e()],1):e._e(),e._v(" "),a("span",{staticClass:"option-value"},[e._v(e._s(e.selected.label))])]):e._e(),e._v(" "),e.selected?e._e():a("div",{staticClass:"not-selected"},[a("span",{staticClass:"option-value placehoder"},[e._v(e._s(e.placeholder))])]),e._v(" "),a("chevron-down-icon",{staticClass:"chevron",attrs:{size:"19"}})],1),e._v(" "),a("transition",{attrs:{name:"slide-in"}},[e.isOpen?a("ul",{staticClass:"input-options"},e._l(e.options,(function(t,n){return a("li",{key:n,staticClass:"option-item",on:{click:function(a){return e.selectOption(t)}}},[t.icon?a("div",{staticClass:"option-icon"},["user"===t.icon?a("user-icon",{attrs:{size:"14"}}):e._e(),e._v(" "),"user-edit"===t.icon?a("edit2-icon",{attrs:{size:"14"}}):e._e()],1):e._e(),e._v(" "),a("span",{staticClass:"option-value"},[e._v(e._s(t.label))])])})),0):e._e()])],1)}),[],!1,null,"14b1d6a3",null);t.a=s.exports},"8L2t":function(e,t,a){"use strict";var n=a("YQqd");a.n(n).a},BcdI:function(e,t,a){var n=a("suPu");"string"==typeof n&&(n=[[e.i,n,""]]);var i={hmr:!0,transform:void 0,insertInto:void 0};a("aET+")(n,i);n.locals&&(e.exports=n.locals)},BelR:function(e,t,a){var n=a("2jUW");"string"==typeof n&&(n=[[e.i,n,""]]);var i={hmr:!0,transform:void 0,insertInto:void 0};a("aET+")(n,i);n.locals&&(e.exports=n.locals)},"D+dh":function(e,t,a){"use strict";var n=a("CjXH"),i={name:"ImageInput",props:["image","error"],components:{ImageIcon:n.D,XIcon:n.ib},data:function(){return{imagePreview:void 0}},computed:{isData:function(){return void 0!==this.imagePreview&&""!==this.imagePreview}},methods:{resetImage:function(){this.imagePreview=void 0,this.$emit("input",void 0)},showImagePreview:function(e){var t=this,a=e.target.files[0].name,n=a.substring(a.lastIndexOf(".")+1).toLowerCase();if(["png","jpg","jpeg","svg"].includes(n)){var i=e.target.files[0],o=new FileReader;o.onload=function(){return t.imagePreview=o.result},o.readAsDataURL(i),this.$emit("input",e.target.files[0])}else alert(this.$t("validation_errors.wrong_image"))}},created:function(){this.image&&(this.imagePreview=this.image)}},o=(a("Obrk"),a("KHd+")),s=Object(o.a)(i,(function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"dropzone",class:{"is-error":e.error}},[e.imagePreview?a("div",{staticClass:"reset-image",on:{click:e.resetImage}},[a("x-icon",{staticClass:"close-icon text-theme",attrs:{size:"14"}})],1):e._e(),e._v(" "),a("input",{ref:"file",staticClass:"dummy",attrs:{type:"file"},on:{change:function(t){return e.showImagePreview(t)}}}),e._v(" "),e.imagePreview?a("img",{ref:"image",staticClass:"image-preview",attrs:{src:e.imagePreview}}):e._e(),e._v(" "),a("div",{directives:[{name:"show",rawName:"v-show",value:!e.isData,expression:"! isData"}],staticClass:"dropzone-message"},[a("image-icon",{staticClass:"icon-upload text-theme",attrs:{size:"28"}}),e._v(" "),a("span",{staticClass:"dropzone-title"},[e._v("\n            "+e._s(e.$t("input_image.title"))+"\n        ")]),e._v(" "),a("span",{staticClass:"dropzone-description"},[e._v("\n            "+e._s(e.$t("input_image.supported"))+"\n        ")])],1)])}),[],!1,null,"5d141a68",null);t.a=s.exports},"F+Qg":function(e,t,a){"use strict";var n=a("3GDE");a.n(n).a},LedX:function(e,t,a){"use strict";var n=a("WEWl");a.n(n).a},Obrk:function(e,t,a){"use strict";var n=a("BelR");a.n(n).a},UqlB:function(e,t,a){(e.exports=a("I1BE")(!1)).push([e.i,".select[data-v-14b1d6a3] {\n  position: relative;\n  -webkit-user-select: none;\n     -moz-user-select: none;\n      -ms-user-select: none;\n          user-select: none;\n  width: 100%;\n}\n.input-options[data-v-14b1d6a3] {\n  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.12);\n  background: white;\n  border-radius: 8px;\n  position: absolute;\n  overflow: hidden;\n  top: 65px;\n  left: 0;\n  right: 0;\n  z-index: 9;\n  max-height: 295px;\n  overflow-y: auto;\n}\n.input-options .option-item[data-v-14b1d6a3] {\n  padding: 13px 20px;\n  display: block;\n  cursor: pointer;\n}\n.input-options .option-item[data-v-14b1d6a3]:hover {\n  color: #00BC7E;\n  background: #f4f5f6;\n}\n.input-options .option-item[data-v-14b1d6a3]:last-child {\n  border-bottom: none;\n}\n.input-area[data-v-14b1d6a3] {\n  border-width: 1px;\n  border-style: solid;\n  border-color: transparent;\n  justify-content: space-between;\n  box-shadow: 0 1px 5px rgba(0, 0, 0, 0.12);\n  transition: 150ms all ease;\n  align-items: center;\n  border-radius: 8px;\n  padding: 13px 20px;\n  display: flex;\n  outline: 0;\n  width: 100%;\n  cursor: pointer;\n}\n.input-area .chevron[data-v-14b1d6a3] {\n  transition: 150ms all ease;\n}\n.input-area.is-active .chevron[data-v-14b1d6a3] {\n  transform: rotate(180deg);\n}\n.input-area.is-error[data-v-14b1d6a3] {\n  border-color: #fd397a;\n  box-shadow: 0 0 7px rgba(253, 57, 122, 0.3);\n}\n.option-icon[data-v-14b1d6a3] {\n  width: 20px;\n  display: inline-block;\n  font-size: 0.625em;\n}\n.option-icon svg[data-v-14b1d6a3] {\n  margin-top: -4px;\n  vertical-align: middle;\n}\n.option-value[data-v-14b1d6a3] {\n  font-size: 0.875em;\n  font-weight: 700;\n  width: 100%;\n  vertical-align: middle;\n}\n.option-value.placehoder[data-v-14b1d6a3] {\n  color: rgba(27, 37, 57, 0.5);\n}\n.slide-in-enter-active[data-v-14b1d6a3] {\n  transition: all 150ms ease;\n}\n.slide-in-enter[data-v-14b1d6a3] {\n  opacity: 0;\n  transform: translateY(-50px);\n}\n@media (prefers-color-scheme: dark) {\n.input-area[data-v-14b1d6a3] {\n    background: #1e2024;\n    border-color: #1e2024;\n}\n.popup-wrapper .input-area[data-v-14b1d6a3] {\n    background: #25272c;\n}\n.input-options[data-v-14b1d6a3] {\n    background: #1e2024;\n}\n.input-options .option-item[data-v-14b1d6a3] {\n    border-bottom: none;\n}\n.input-options .option-item[data-v-14b1d6a3]:hover {\n    background: #2a2c32;\n}\n.input-options .option-item:hover .option-icon path[data-v-14b1d6a3], .input-options .option-item:hover .option-icon circle[data-v-14b1d6a3] {\n    color: inherit;\n}\n.input-options .option-item[data-v-14b1d6a3]:last-child {\n    border-bottom: none;\n}\n.option-value.placehoder[data-v-14b1d6a3] {\n    color: #7d858c;\n}\n}\n",""])},WEWl:function(e,t,a){var n=a("sGz8");"string"==typeof n&&(n=[[e.i,n,""]]);var i={hmr:!0,transform:void 0,insertInto:void 0};a("aET+")(n,i);n.locals&&(e.exports=n.locals)},YQqd:function(e,t,a){var n=a("gvpH");"string"==typeof n&&(n=[[e.i,n,""]]);var i={hmr:!0,transform:void 0,insertInto:void 0};a("aET+")(n,i);n.locals&&(e.exports=n.locals)},gvpH:function(e,t,a){(e.exports=a("I1BE")(!1)).push([e.i,".progress-bar[data-v-6ec2be7a] {\n  width: 100%;\n  height: 5px;\n  background: #f4f5f6;\n  margin-top: 6px;\n  border-radius: 10px;\n}\n.progress-bar span[data-v-6ec2be7a] {\n  display: block;\n  height: 100%;\n  border-radius: 10px;\n  max-width: 100%;\n}\n@media (prefers-color-scheme: dark) {\n.progress-bar[data-v-6ec2be7a] {\n    background: #1e2024;\n}\n}\n@media only screen and (min-width: 680px) and (prefers-color-scheme: dark) {\n.progress-bar[data-v-6ec2be7a] {\n    background: #1e2024;\n}\n}\n",""])},hw5j:function(e,t,a){(e.exports=a("I1BE")(!1)).push([e.i,".detail-storage-item[data-v-d9e0536e] {\n  margin-bottom: 35px;\n}\n.detail-storage-item.disk .icon path[data-v-d9e0536e], .detail-storage-item.disk .icon line[data-v-d9e0536e], .detail-storage-item.disk .icon polyline[data-v-d9e0536e], .detail-storage-item.disk .icon rect[data-v-d9e0536e], .detail-storage-item.disk .icon circle[data-v-d9e0536e], .detail-storage-item.disk .icon polygon[data-v-d9e0536e] {\n  stroke: #1B2539;\n}\n.detail-storage-item.disk .storage-progress[data-v-d9e0536e] span {\n  background: #1B2539;\n}\n.detail-storage-item.images .icon path[data-v-d9e0536e], .detail-storage-item.images .icon line[data-v-d9e0536e], .detail-storage-item.images .icon polyline[data-v-d9e0536e], .detail-storage-item.images .icon rect[data-v-d9e0536e], .detail-storage-item.images .icon circle[data-v-d9e0536e], .detail-storage-item.images .icon polygon[data-v-d9e0536e] {\n  stroke: #9D66FE;\n}\n.detail-storage-item.images .storage-progress[data-v-d9e0536e] span {\n  background: #9D66FE;\n}\n.detail-storage-item.videos .icon path[data-v-d9e0536e], .detail-storage-item.videos .icon line[data-v-d9e0536e], .detail-storage-item.videos .icon polyline[data-v-d9e0536e], .detail-storage-item.videos .icon rect[data-v-d9e0536e], .detail-storage-item.videos .icon circle[data-v-d9e0536e], .detail-storage-item.videos .icon polygon[data-v-d9e0536e] {\n  stroke: #FFBD2D;\n}\n.detail-storage-item.videos .storage-progress[data-v-d9e0536e] span {\n  background: #FFBD2D;\n}\n.detail-storage-item.audios .icon path[data-v-d9e0536e], .detail-storage-item.audios .icon line[data-v-d9e0536e], .detail-storage-item.audios .icon polyline[data-v-d9e0536e], .detail-storage-item.audios .icon rect[data-v-d9e0536e], .detail-storage-item.audios .icon circle[data-v-d9e0536e], .detail-storage-item.audios .icon polygon[data-v-d9e0536e] {\n  stroke: #FE66A1;\n}\n.detail-storage-item.audios .storage-progress[data-v-d9e0536e] span {\n  background: #FE66A1;\n}\n.detail-storage-item.documents .icon path[data-v-d9e0536e], .detail-storage-item.documents .icon line[data-v-d9e0536e], .detail-storage-item.documents .icon polyline[data-v-d9e0536e], .detail-storage-item.documents .icon rect[data-v-d9e0536e], .detail-storage-item.documents .icon circle[data-v-d9e0536e], .detail-storage-item.documents .icon polygon[data-v-d9e0536e] {\n  stroke: #FE6057;\n}\n.detail-storage-item.documents .storage-progress[data-v-d9e0536e] span {\n  background: #FE6057;\n}\n.detail-storage-item.others .icon path[data-v-d9e0536e], .detail-storage-item.others .icon line[data-v-d9e0536e], .detail-storage-item.others .icon polyline[data-v-d9e0536e], .detail-storage-item.others .icon rect[data-v-d9e0536e], .detail-storage-item.others .icon circle[data-v-d9e0536e], .detail-storage-item.others .icon polygon[data-v-d9e0536e] {\n  stroke: #1B2539;\n}\n.detail-storage-item.others .storage-progress[data-v-d9e0536e] span {\n  background: #1B2539;\n}\n.header-storage-item[data-v-d9e0536e] {\n  display: flex;\n  align-items: flex-start;\n  margin-bottom: 10px;\n}\n.header-storage-item .icon[data-v-d9e0536e] {\n  width: 35px;\n}\n.header-storage-item .type[data-v-d9e0536e] {\n  font-size: 0.9375em;\n  color: #1B2539;\n}\n.header-storage-item .total-size[data-v-d9e0536e] {\n  font-size: 0.625em;\n  display: block;\n  color: rgba(27, 37, 57, 0.7);\n}\n@media (prefers-color-scheme: dark) {\n.header-storage-item .type[data-v-d9e0536e] {\n    color: #bec6cf;\n}\n.header-storage-item .total-size[data-v-d9e0536e] {\n    color: #7d858c;\n}\n.detail-storage-item.others .icon path[data-v-d9e0536e], .detail-storage-item.others .icon line[data-v-d9e0536e], .detail-storage-item.others .icon polyline[data-v-d9e0536e], .detail-storage-item.others .icon rect[data-v-d9e0536e], .detail-storage-item.others .icon circle[data-v-d9e0536e], .detail-storage-item.others .icon polygon[data-v-d9e0536e], .detail-storage-item.disk .icon path[data-v-d9e0536e], .detail-storage-item.disk .icon line[data-v-d9e0536e], .detail-storage-item.disk .icon polyline[data-v-d9e0536e], .detail-storage-item.disk .icon rect[data-v-d9e0536e], .detail-storage-item.disk .icon circle[data-v-d9e0536e], .detail-storage-item.disk .icon polygon[data-v-d9e0536e] {\n    stroke: #41454e;\n}\n.detail-storage-item.others .storage-progress[data-v-d9e0536e] span, .detail-storage-item.disk .storage-progress[data-v-d9e0536e] span {\n    background: #41454e;\n}\n}\n",""])},ijzm:function(e,t,a){"use strict";a.r(t);var n=a("A5+z"),i=a("xnZf"),o=a("gahf"),s=a("4TWA"),r=a("xxrA"),d=a("D+dh"),p=a("eZ9V"),l=a("Nv84"),c=a("13Td"),m=a("qefO"),b=a("KnjL"),u=a("TJPC"),v=a("xCqy"),g=a("vDqi"),h=a.n(g),f={name:"AppOthers",components:{ValidationObserver:n.ValidationObserver,ValidationProvider:n.ValidationProvider,StorageItemDetail:i.a,PageTabGroup:o.a,SwitchInput:r.a,SelectInput:s.a,ImageInput:d.a,ButtonBase:l.a,FormLabel:p.a,SetupBox:c.a,required:u.a,PageTab:m.a,InfoBox:b.a},data:function(){return{isLoading:!0,isFlushingCache:!1,app:void 0}},methods:{flushCache:function(){var e=this;this.isFlushingCache=!0,h.a.get("/api/admin/settings/flush-cache").then((function(){v.a.$emit("toaster",{type:"success",message:"Your cache was successfully deleted."})})).finally((function(){e.isFlushingCache=!1}))}},mounted:function(){var e=this;h.a.get("/api/admin/settings",{params:{column:"contact_email|google_analytics|storage_default|registration|storage_limitation|mimetypes_blacklist|upload_limit"}}).then((function(t){e.isLoading=!1,e.app={contactMail:t.data.contact_email,googleAnalytics:t.data.google_analytics,defaultStorage:t.data.storage_default,userRegistration:parseInt(t.data.registration),storageLimitation:parseInt(t.data.storage_limitation),mimetypesBlacklist:t.data.mimetypes_blacklist,uploadLimit:t.data.upload_limit}}))}},_=(a("pCtl"),a("KHd+")),x=Object(_.a)(f,(function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("PageTab",{staticClass:"form-fixed-width",attrs:{"is-loading":e.isLoading}},[e.app?a("PageTabGroup",[a("div",{staticClass:"form block-form"},[a("FormLabel",[e._v("\n                "+e._s(e.$t("admin_settings.others.section_user"))+"\n            ")]),e._v(" "),a("div",{staticClass:"block-wrapper"},[a("div",{staticClass:"input-wrapper"},[a("div",{staticClass:"inline-wrapper"},[a("div",{staticClass:"switch-label"},[a("label",{staticClass:"input-label"},[e._v("\n                                "+e._s(e.$t("admin_settings.others.storage_limit"))+":\n                            ")]),e._v(" "),a("small",{staticClass:"input-help",domProps:{innerHTML:e._s(e.$t("admin_settings.others.storage_limit_help"))}})]),e._v(" "),a("SwitchInput",{staticClass:"switch",attrs:{state:e.app.storageLimitation},on:{input:function(t){return e.$updateText("/admin/settings","storage_limitation",e.app.storageLimitation)}},model:{value:e.app.storageLimitation,callback:function(t){e.$set(e.app,"storageLimitation",t)},expression:"app.storageLimitation"}})],1)])]),e._v(" "),e.app.storageLimitation?a("div",{staticClass:"block-wrapper"},[a("label",[e._v(e._s(e.$t("admin_settings.others.default_storage"))+":")]),e._v(" "),a("ValidationProvider",{staticClass:"input-wrapper",attrs:{tag:"div",mode:"passive",name:"Default Storage Space",rules:"required"},scopedSlots:e._u([{key:"default",fn:function(t){var n=t.errors;return[a("input",{directives:[{name:"model",rawName:"v-model",value:e.app.defaultStorage,expression:"app.defaultStorage"}],staticClass:"focus-border-theme",class:{"is-error":n[0]},attrs:{min:"1",max:"999999999",placeholder:e.$t("admin_settings.others.default_storage_plac"),type:"number"},domProps:{value:e.app.defaultStorage},on:{input:[function(t){t.target.composing||e.$set(e.app,"defaultStorage",t.target.value)},function(t){return e.$updateText("/admin/settings","storage_default",e.app.defaultStorage)}]}}),e._v(" "),n[0]?a("span",{staticClass:"error-message"},[e._v(e._s(n[0]))]):e._e()]}}],null,!1,1818761158)})],1):e._e(),e._v(" "),a("div",{staticClass:"block-wrapper"},[a("div",{staticClass:"input-wrapper"},[a("div",{staticClass:"inline-wrapper"},[a("div",{staticClass:"switch-label"},[a("label",{staticClass:"input-label"},[e._v("\n                                "+e._s(e.$t("admin_settings.others.allow_registration"))+":\n                            ")]),e._v(" "),a("small",{staticClass:"input-help",domProps:{innerHTML:e._s(e.$t("admin_settings.others.allow_registration_help"))}})]),e._v(" "),a("SwitchInput",{staticClass:"switch",attrs:{state:e.app.userRegistration},on:{input:function(t){return e.$updateText("/admin/settings","registration",e.app.userRegistration)}},model:{value:e.app.userRegistration,callback:function(t){e.$set(e.app,"userRegistration",t)},expression:"app.userRegistration"}})],1)])]),e._v(" "),a("FormLabel",{staticClass:"mt-70"},[e._v("\n                "+e._s(e.$t("admin_settings.others.section_others"))+"\n            ")]),e._v(" "),a("div",{staticClass:"block-wrapper"},[a("label",[e._v(e._s(e.$t("admin_settings.others.contact_email"))+":")]),e._v(" "),a("ValidationProvider",{staticClass:"input-wrapper",attrs:{tag:"div",mode:"passive",name:"Contact Email",rules:"required"},scopedSlots:e._u([{key:"default",fn:function(t){var n=t.errors;return[a("input",{directives:[{name:"model",rawName:"v-model",value:e.app.contactMail,expression:"app.contactMail"}],staticClass:"focus-border-theme",class:{"is-error":n[0]},attrs:{placeholder:e.$t("admin_settings.others.contact_email_plac"),type:"email"},domProps:{value:e.app.contactMail},on:{input:[function(t){t.target.composing||e.$set(e.app,"contactMail",t.target.value)},function(t){return e.$updateText("/admin/settings","contact_email",e.app.contactMail)}]}}),e._v(" "),n[0]?a("span",{staticClass:"error-message"},[e._v(e._s(n[0]))]):e._e()]}}],null,!1,572758052)})],1),e._v(" "),a("div",{staticClass:"block-wrapper"},[a("label",[e._v(e._s(e.$t("admin_settings.others.google_analytics"))+":")]),e._v(" "),a("ValidationProvider",{staticClass:"input-wrapper",attrs:{tag:"div",mode:"passive",name:"Google Analytics Code"},scopedSlots:e._u([{key:"default",fn:function(t){var n=t.errors;return[a("input",{directives:[{name:"model",rawName:"v-model",value:e.app.googleAnalytics,expression:"app.googleAnalytics"}],staticClass:"focus-border-theme",class:{"is-error":n[0]},attrs:{placeholder:e.$t("admin_settings.others.google_analytics_plac"),type:"text"},domProps:{value:e.app.googleAnalytics},on:{input:[function(t){t.target.composing||e.$set(e.app,"googleAnalytics",t.target.value)},function(t){return e.$updateText("/admin/settings","google_analytics",e.app.googleAnalytics)}]}}),e._v(" "),n[0]?a("span",{staticClass:"error-message"},[e._v(e._s(n[0]))]):e._e()]}}],null,!1,1711986531)})],1),e._v(" "),a("div",{staticClass:"block-wrapper"},[a("label",[e._v(e._s(e.$t("admin_settings.others.mimetypes_blacklist"))+":")]),e._v(" "),a("ValidationProvider",{staticClass:"input-wrapper",attrs:{tag:"div",mode:"passive",name:"Mimetypes Blacklist"},scopedSlots:e._u([{key:"default",fn:function(t){var n=t.errors;return[a("textarea",{directives:[{name:"model",rawName:"v-model",value:e.app.mimetypesBlacklist,expression:"app.mimetypesBlacklist"}],staticClass:"focus-border-theme",class:{"is-error":n[0]},attrs:{rows:"2",placeholder:e.$t("admin_settings.others.mimetypes_blacklist_plac"),type:"text"},domProps:{value:e.app.mimetypesBlacklist},on:{input:[function(t){t.target.composing||e.$set(e.app,"mimetypesBlacklist",t.target.value)},function(t){return e.$updateText("/admin/settings","mimetypes_blacklist",e.app.mimetypesBlacklist)}]}}),e._v(" "),n[0]?a("span",{staticClass:"error-message"},[e._v(e._s(n[0]))]):e._e()]}}],null,!1,2010029887)}),e._v(" "),a("small",{staticClass:"input-help",domProps:{innerHTML:e._s(e.$t("admin_settings.others.mimetypes_blacklist_help"))}})],1),e._v(" "),a("div",{staticClass:"block-wrapper"},[a("label",[e._v(e._s(e.$t("admin_settings.others.upload_limit"))+":")]),e._v(" "),a("ValidationProvider",{staticClass:"input-wrapper",attrs:{tag:"div",mode:"passive",name:"Upload Limit"},scopedSlots:e._u([{key:"default",fn:function(t){var n=t.errors;return[a("input",{directives:[{name:"model",rawName:"v-model",value:e.app.uploadLimit,expression:"app.uploadLimit"}],staticClass:"focus-border-theme",class:{"is-error":n[0]},attrs:{placeholder:e.$t("admin_settings.others.upload_limit_plac"),type:"number",min:"0",step:"1"},domProps:{value:e.app.uploadLimit},on:{input:[function(t){t.target.composing||e.$set(e.app,"uploadLimit",t.target.value)},function(t){return e.$updateText("/admin/settings","upload_limit",e.app.uploadLimit)}]}}),e._v(" "),n[0]?a("span",{staticClass:"error-message"},[e._v(e._s(n[0]))]):e._e()]}}],null,!1,4066454637)}),e._v(" "),a("small",{staticClass:"input-help",domProps:{innerHTML:e._s(e.$t("admin_settings.others.upload_limit_help"))}})],1),e._v(" "),a("FormLabel",{staticClass:"mt-70"},[e._v("\n                "+e._s(e.$t("admin_settings.others.section_cache"))+"\n            ")]),e._v(" "),a("InfoBox",[e._v("\n                "+e._s(e.$t("admin_settings.others.cache_disclaimer"))+"\n            ")]),e._v(" "),a("ButtonBase",{staticClass:"submit-button",attrs:{loading:e.isFlushingCache,disabled:e.isFlushingCache,type:"submit","button-style":"theme"},nativeOn:{click:function(t){return e.flushCache(t)}}},[e._v("\n                "+e._s(e.$t("admin_settings.others.cache_clear"))+"\n            ")])],1)]):e._e()],1)}),[],!1,null,"e1dbc2b0",null);t.default=x.exports},jCWY:function(e,t,a){"use strict";var n=a("+v8A");a.n(n).a},pCtl:function(e,t,a){"use strict";var n=a("BcdI");a.n(n).a},sGz8:function(e,t,a){(e.exports=a("I1BE")(!1)).push([e.i,".input-wrapper[data-v-421ca226] {\n  display: flex;\n  width: 100%;\n}\n.input-wrapper .input-label[data-v-421ca226] {\n  color: #1B2539;\n}\n.input-wrapper .switch-content[data-v-421ca226] {\n  width: 100%;\n}\n.input-wrapper .switch-content[data-v-421ca226]:last-child {\n  width: 80px;\n}\n.switch[data-v-421ca226] {\n  width: 50px;\n  height: 28px;\n  border-radius: 50px;\n  display: block;\n  background: #f1f1f5;\n  position: relative;\n  transition: 0.3s all ease;\n}\n.switch .switch-button[data-v-421ca226] {\n  transition: 0.3s all ease;\n  width: 22px;\n  height: 22px;\n  border-radius: 50px;\n  display: block;\n  background: white;\n  position: absolute;\n  top: 3px;\n  left: 3px;\n  box-shadow: 0 2px 4px rgba(37, 38, 94, 0.1);\n  cursor: pointer;\n}\n.switch.active .switch-button[data-v-421ca226] {\n  left: 25px;\n}\n@media (prefers-color-scheme: dark) {\n.switch[data-v-421ca226] {\n    background: #1e2024;\n}\n.popup-wrapper .switch[data-v-421ca226] {\n    background: #25272c;\n}\n}\n",""])},suPu:function(e,t,a){(e.exports=a("I1BE")(!1)).push([e.i,'.form[data-v-e1dbc2b0] {\n  max-width: 700px;\n}\n.form.inline-form[data-v-e1dbc2b0] {\n  display: flex;\n  position: relative;\n  justify-content: center;\n  margin: 0 auto;\n}\n.form.inline-form .input-wrapper[data-v-e1dbc2b0] {\n  position: relative;\n}\n.form.inline-form .input-wrapper .error-message[data-v-e1dbc2b0] {\n  position: absolute;\n  left: 0;\n  bottom: -25px;\n}\n.form.block-form .wrapper-inline[data-v-e1dbc2b0] {\n  display: flex;\n  margin: 0 -15px;\n}\n.form.block-form .wrapper-inline .block-wrapper[data-v-e1dbc2b0] {\n  width: 100%;\n  padding: 0 15px;\n}\n.form.block-form .block-wrapper[data-v-e1dbc2b0] {\n  margin-bottom: 32px;\n}\n.form.block-form .block-wrapper label[data-v-e1dbc2b0] {\n  font-size: 0.875em;\n  color: rgba(27, 37, 57, 0.8);\n  font-weight: 700;\n  display: block;\n  margin-bottom: 7px;\n  text-align: left;\n}\n.form.block-form .block-wrapper[data-v-e1dbc2b0]:last-child {\n  margin-bottom: 0;\n}\n.form.block-form .button[data-v-e1dbc2b0] {\n  margin-top: 50px;\n}\n.form .inline-wrapper[data-v-e1dbc2b0] {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n}\n.form .inline-wrapper .switch-label .input-help[data-v-e1dbc2b0] {\n  padding-top: 0;\n}\n.form .inline-wrapper .switch-label .input-label[data-v-e1dbc2b0] {\n  font-weight: 700;\n  color: #1B2539;\n  font-size: 1em;\n  margin-bottom: 5px;\n}\n.form .input-help[data-v-e1dbc2b0] {\n  font-size: 0.75em;\n  color: rgba(27, 37, 57, 0.7);\n  line-height: 1.35;\n  padding-top: 10px;\n  display: block;\n}\n.single-line-form[data-v-e1dbc2b0] {\n  display: flex;\n}\n.single-line-form .submit-button[data-v-e1dbc2b0] {\n  margin-left: 20px;\n}\n.error-message[data-v-e1dbc2b0] {\n  font-size: 0.875em;\n  color: #fd397a;\n  padding-top: 5px;\n  display: block;\n  text-align: left;\n}\ntextarea[data-v-e1dbc2b0] {\n  width: 100%;\n}\ninput[type="color"][data-v-e1dbc2b0] {\n  width: 38px;\n  height: 40px;\n  border: none;\n  outline: none;\n  background: none;\n}\ntextarea[data-v-e1dbc2b0],\ninput[type="password"][data-v-e1dbc2b0],\ninput[type="text"][data-v-e1dbc2b0],\ninput[type="number"][data-v-e1dbc2b0],\ninput[type="email"][data-v-e1dbc2b0] {\n  border: 1px solid transparent;\n  transition: 150ms all ease;\n  font-size: 1em;\n  border-radius: 8px;\n  padding: 13px 20px;\n  -webkit-appearance: none;\n     -moz-appearance: none;\n          appearance: none;\n  font-weight: 700;\n  outline: 0;\n  width: 100%;\n  box-shadow: 0 1px 5px rgba(0, 0, 0, 0.12);\n}\ntextarea.is-error[data-v-e1dbc2b0],\ninput[type="password"].is-error[data-v-e1dbc2b0],\ninput[type="text"].is-error[data-v-e1dbc2b0],\ninput[type="number"].is-error[data-v-e1dbc2b0],\ninput[type="email"].is-error[data-v-e1dbc2b0] {\n  border-color: #fd397a;\n}\ntextarea[data-v-e1dbc2b0]::-webkit-input-placeholder, input[type="password"][data-v-e1dbc2b0]::-webkit-input-placeholder, input[type="text"][data-v-e1dbc2b0]::-webkit-input-placeholder, input[type="number"][data-v-e1dbc2b0]::-webkit-input-placeholder, input[type="email"][data-v-e1dbc2b0]::-webkit-input-placeholder {\n  color: rgba(27, 37, 57, 0.5);\n  font-size: 0.9375em;\n}\ntextarea[data-v-e1dbc2b0]::-moz-placeholder, input[type="password"][data-v-e1dbc2b0]::-moz-placeholder, input[type="text"][data-v-e1dbc2b0]::-moz-placeholder, input[type="number"][data-v-e1dbc2b0]::-moz-placeholder, input[type="email"][data-v-e1dbc2b0]::-moz-placeholder {\n  color: rgba(27, 37, 57, 0.5);\n  font-size: 0.9375em;\n}\ntextarea[data-v-e1dbc2b0]:-ms-input-placeholder, input[type="password"][data-v-e1dbc2b0]:-ms-input-placeholder, input[type="text"][data-v-e1dbc2b0]:-ms-input-placeholder, input[type="number"][data-v-e1dbc2b0]:-ms-input-placeholder, input[type="email"][data-v-e1dbc2b0]:-ms-input-placeholder {\n  color: rgba(27, 37, 57, 0.5);\n  font-size: 0.9375em;\n}\ntextarea[data-v-e1dbc2b0]::-ms-input-placeholder, input[type="password"][data-v-e1dbc2b0]::-ms-input-placeholder, input[type="text"][data-v-e1dbc2b0]::-ms-input-placeholder, input[type="number"][data-v-e1dbc2b0]::-ms-input-placeholder, input[type="email"][data-v-e1dbc2b0]::-ms-input-placeholder {\n  color: rgba(27, 37, 57, 0.5);\n  font-size: 0.9375em;\n}\ntextarea[data-v-e1dbc2b0]::placeholder,\ninput[type="password"][data-v-e1dbc2b0]::placeholder,\ninput[type="text"][data-v-e1dbc2b0]::placeholder,\ninput[type="number"][data-v-e1dbc2b0]::placeholder,\ninput[type="email"][data-v-e1dbc2b0]::placeholder {\n  color: rgba(27, 37, 57, 0.5);\n  font-size: 0.9375em;\n}\ntextarea[disabled][data-v-e1dbc2b0],\ninput[type="password"][disabled][data-v-e1dbc2b0],\ninput[type="text"][disabled][data-v-e1dbc2b0],\ninput[type="number"][disabled][data-v-e1dbc2b0],\ninput[type="email"][disabled][data-v-e1dbc2b0] {\n  background: white;\n  color: rgba(27, 37, 57, 0.8);\n  -webkit-text-fill-color: rgba(27, 37, 57, 0.8);\n  opacity: 1;\n  cursor: not-allowed;\n}\n.additional-link[data-v-e1dbc2b0] {\n  font-size: 1em;\n  margin-top: 50px;\n  display: block;\n}\n.additional-link b[data-v-e1dbc2b0], .additional-link a[data-v-e1dbc2b0] {\n  cursor: pointer;\n}\n.additional-link b[data-v-e1dbc2b0]:hover, .additional-link a[data-v-e1dbc2b0]:hover {\n  text-decoration: underline;\n}\n@media only screen and (max-width: 1024px) {\n.form[data-v-e1dbc2b0] {\n    max-width: 100%;\n}\n}\n@media only screen and (max-width: 960px) {\n.form .button[data-v-e1dbc2b0] {\n    margin-top: 20px;\n    width: 100%;\n    margin-left: 0;\n    margin-right: 0;\n}\n.form input[data-v-e1dbc2b0], .form textarea[data-v-e1dbc2b0] {\n    width: 100%;\n    min-width: 100%;\n}\n.form.block-form .block-wrapper[data-v-e1dbc2b0] {\n    display: block;\n}\n.form.block-form .block-wrapper label[data-v-e1dbc2b0] {\n    width: 100%;\n    padding-right: 0;\n    display: block;\n    margin-bottom: 7px;\n    text-align: left !important;\n    font-size: 0.875em;\n    padding-top: 0;\n}\n.form.block-form .button[data-v-e1dbc2b0] {\n    margin-top: 25px;\n    margin-left: 0;\n    margin-right: 0;\n}\n.form.inline-form[data-v-e1dbc2b0] {\n    display: block;\n}\n.form.inline-form .input-wrapper .error-message[data-v-e1dbc2b0] {\n    position: relative;\n    bottom: 0;\n}\n.form .button[data-v-e1dbc2b0] {\n    padding: 14px 32px;\n}\n.single-line-form[data-v-e1dbc2b0] {\n    display: block;\n}\n.single-line-form .submit-button[data-v-e1dbc2b0] {\n    margin-left: 0;\n    margin-top: 20px;\n    width: 100%;\n}\ntextarea[data-v-e1dbc2b0],\n  input[type="password"][data-v-e1dbc2b0],\n  input[type="number"][data-v-e1dbc2b0],\n  input[type="text"][data-v-e1dbc2b0],\n  input[type="email"][data-v-e1dbc2b0] {\n    padding: 14px 20px;\n}\n}\n@media only screen and (max-width: 690px) {\n.form.block-form .wrapper-inline[data-v-e1dbc2b0] {\n    display: block;\n}\n}\n@media (prefers-color-scheme: dark) {\n.form .input-help[data-v-e1dbc2b0] {\n    color: #7d858c;\n}\n.form.block-form .block-wrapper label[data-v-e1dbc2b0] {\n    color: #bec6cf;\n}\n.form .inline-wrapper .switch-label .input-label[data-v-e1dbc2b0] {\n    color: #bec6cf;\n}\ntextarea[data-v-e1dbc2b0],\n  input[type="password"][data-v-e1dbc2b0],\n  input[type="text"][data-v-e1dbc2b0],\n  input[type="number"][data-v-e1dbc2b0],\n  input[type="email"][data-v-e1dbc2b0] {\n    border-color: #1e2024;\n    background: #1e2024;\n    color: #bec6cf;\n}\ntextarea[data-v-e1dbc2b0]::-webkit-input-placeholder, input[type="password"][data-v-e1dbc2b0]::-webkit-input-placeholder, input[type="text"][data-v-e1dbc2b0]::-webkit-input-placeholder, input[type="number"][data-v-e1dbc2b0]::-webkit-input-placeholder, input[type="email"][data-v-e1dbc2b0]::-webkit-input-placeholder {\n    color: #7d858c;\n}\ntextarea[data-v-e1dbc2b0]::-moz-placeholder, input[type="password"][data-v-e1dbc2b0]::-moz-placeholder, input[type="text"][data-v-e1dbc2b0]::-moz-placeholder, input[type="number"][data-v-e1dbc2b0]::-moz-placeholder, input[type="email"][data-v-e1dbc2b0]::-moz-placeholder {\n    color: #7d858c;\n}\ntextarea[data-v-e1dbc2b0]:-ms-input-placeholder, input[type="password"][data-v-e1dbc2b0]:-ms-input-placeholder, input[type="text"][data-v-e1dbc2b0]:-ms-input-placeholder, input[type="number"][data-v-e1dbc2b0]:-ms-input-placeholder, input[type="email"][data-v-e1dbc2b0]:-ms-input-placeholder {\n    color: #7d858c;\n}\ntextarea[data-v-e1dbc2b0]::-ms-input-placeholder, input[type="password"][data-v-e1dbc2b0]::-ms-input-placeholder, input[type="text"][data-v-e1dbc2b0]::-ms-input-placeholder, input[type="number"][data-v-e1dbc2b0]::-ms-input-placeholder, input[type="email"][data-v-e1dbc2b0]::-ms-input-placeholder {\n    color: #7d858c;\n}\ntextarea[data-v-e1dbc2b0]::placeholder,\n  input[type="password"][data-v-e1dbc2b0]::placeholder,\n  input[type="text"][data-v-e1dbc2b0]::placeholder,\n  input[type="number"][data-v-e1dbc2b0]::placeholder,\n  input[type="email"][data-v-e1dbc2b0]::placeholder {\n    color: #7d858c;\n}\ntextarea[disabled][data-v-e1dbc2b0],\n  input[type="password"][disabled][data-v-e1dbc2b0],\n  input[type="text"][disabled][data-v-e1dbc2b0],\n  input[type="number"][disabled][data-v-e1dbc2b0],\n  input[type="email"][disabled][data-v-e1dbc2b0] {\n    background: #1e2024;\n    color: rgba(125, 133, 140, 0.8);\n    -webkit-text-fill-color: rgba(125, 133, 140, 0.8);\n}\n.popup-wrapper textarea[data-v-e1dbc2b0],\n  .popup-wrapper input[type="password"][data-v-e1dbc2b0],\n  .popup-wrapper input[type="text"][data-v-e1dbc2b0],\n  .popup-wrapper input[type="number"][data-v-e1dbc2b0],\n  .popup-wrapper input[type="email"][data-v-e1dbc2b0] {\n    background: #25272c;\n}\n}\n.block-form[data-v-e1dbc2b0] {\n  max-width: 100%;\n}\n',""])},xnZf:function(e,t,a){"use strict";var n=a("+Pqb"),i=a("CjXH"),o={name:"StorageItemDetail",props:["percentage","title","type","used"],components:{HardDriveIcon:i.B,FileTextIcon:i.w,ProgressBar:n.a,MusicIcon:i.O,VideoIcon:i.hb,ImageIcon:i.D,FileIcon:i.v}},s=(a("jCWY"),a("KHd+")),r=Object(s.a)(o,(function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("article",{staticClass:"detail-storage-item",class:e.type},[a("div",{staticClass:"header-storage-item"},[a("div",{staticClass:"icon"},["images"==e.type?a("image-icon",{attrs:{size:"23"}}):e._e(),e._v(" "),"videos"==e.type?a("video-icon",{attrs:{size:"23"}}):e._e(),e._v(" "),"audios"==e.type?a("music-icon",{attrs:{size:"23"}}):e._e(),e._v(" "),"documents"==e.type?a("file-text-icon",{attrs:{size:"23"}}):e._e(),e._v(" "),"others"==e.type?a("file-icon",{attrs:{size:"23"}}):e._e(),e._v(" "),"disk"==e.type?a("hard-drive-icon",{attrs:{size:"23"}}):e._e()],1),e._v(" "),a("div",{staticClass:"title"},[a("b",{staticClass:"type"},[e._v(e._s(e.title))]),e._v(" "),a("span",{staticClass:"total-size"},[e._v(e._s(e.used))])])]),e._v(" "),a("ProgressBar",{staticClass:"storage-progress",attrs:{progress:e.percentage}})],1)}),[],!1,null,"d9e0536e",null);t.a=r.exports},xxrA:function(e,t,a){"use strict";var n={name:"SwitchInput",props:["label","name","state","info"],data:function(){return{isSwitched:void 0}},methods:{changeState:function(){this.isSwitched=!this.isSwitched,this.$emit("input",this.isSwitched)}},mounted:function(){this.isSwitched=this.state}},i=(a("LedX"),a("KHd+")),o=Object(i.a)(n,(function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"input-wrapper"},[a("div",{staticClass:"switch-content"},[e.label?a("label",{staticClass:"input-label"},[e._v(e._s(e.label)+":")]):e._e(),e._v(" "),e.info?a("small",{staticClass:"input-info"},[e._v(e._s(e.info))]):e._e()]),e._v(" "),a("div",{staticClass:"switch-content text-right"},[a("div",{staticClass:"switch",class:{active:e.isSwitched},on:{click:e.changeState}},[a("div",{staticClass:"switch-button"})])])])}),[],!1,null,"421ca226",null);t.a=o.exports}}]);