(window.webpackJsonp=window.webpackJsonp||[]).push([[14],{"+Pqb":function(e,t,n){"use strict";var a={name:"ProgressBar",props:["progress"]},i=(n("8L2t"),n("KHd+")),o=Object(i.a)(a,(function(){var e=this.$createElement,t=this._self._c||e;return t("div",{staticClass:"progress-bar"},[t("span",{staticClass:"bg-theme",style:{width:this.progress+"%"}})])}),[],!1,null,"6ec2be7a",null);t.a=o.exports},"+v8A":function(e,t,n){var a=n("hw5j");"string"==typeof a&&(a=[[e.i,a,""]]);var i={hmr:!0,transform:void 0,insertInto:void 0};n("aET+")(a,i);a.locals&&(e.exports=a.locals)},"2alK":function(e,t,n){var a=n("lvDi");"string"==typeof a&&(a=[[e.i,a,""]]);var i={hmr:!0,transform:void 0,insertInto:void 0};n("aET+")(a,i);a.locals&&(e.exports=a.locals)},"2jUW":function(e,t,n){(e.exports=n("I1BE")(!1)).push([e.i,".dropzone[data-v-5d141a68] {\n  border: 1px dashed #a1abc2;\n  border-radius: 8px;\n  position: relative;\n  text-align: center;\n  display: flex;\n  align-items: center;\n  min-height: 175px;\n}\n.dropzone.is-error[data-v-5d141a68] {\n  border: 2px dashed rgba(253, 57, 122, 0.3);\n}\n.dropzone.is-error .dropzone-title[data-v-5d141a68] {\n  color: #fd397a;\n}\n.dropzone.is-error .icon-upload rect[data-v-5d141a68], .dropzone.is-error .icon-upload circle[data-v-5d141a68], .dropzone.is-error .icon-upload polyline[data-v-5d141a68] {\n  stroke: #fd397a;\n}\n.dropzone input[type='file'][data-v-5d141a68] {\n  opacity: 0;\n  position: absolute;\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  z-index: 1;\n  width: 100%;\n  cursor: pointer;\n}\n.dropzone .image-preview[data-v-5d141a68] {\n  position: absolute;\n  width: 100%;\n  height: 100%;\n  -o-object-fit: contain;\n     object-fit: contain;\n  left: 0;\n  padding: 25px;\n  display: block;\n}\n.dropzone .image-preview.fit-image[data-v-5d141a68] {\n  -o-object-fit: cover;\n     object-fit: cover;\n  border-radius: 12px;\n  overflow: hidden;\n}\n.dropzone .dropzone-message[data-v-5d141a68] {\n  padding: 50px 0;\n  width: 100%;\n}\n.dropzone .dropzone-message .icon-upload rect[data-v-5d141a68], .dropzone .dropzone-message .icon-upload circle[data-v-5d141a68], .dropzone .dropzone-message .icon-upload polyline[data-v-5d141a68] {\n  color: inherit;\n}\n.dropzone .dropzone-message .dropzone-title[data-v-5d141a68] {\n  font-size: 1em;\n  font-weight: 700;\n  display: block;\n}\n.dropzone .dropzone-message .dropzone-description[data-v-5d141a68] {\n  color: rgba(27, 37, 57, 0.7);\n  font-size: 0.75em;\n}\n.dropzone .reset-image[data-v-5d141a68] {\n  z-index: 2;\n  background: white;\n  border-radius: 50px;\n  display: block;\n  position: absolute;\n  right: 0;\n  top: 0;\n  cursor: pointer;\n  transform: translateY(-50%) translateX(50%);\n  padding: 0px 4px;\n  box-shadow: 0 1px 5px rgba(0, 0, 0, 0.12);\n}\n.dropzone .reset-image .close-icon[data-v-5d141a68] {\n  vertical-align: middle;\n}\n.dropzone .reset-image .close-icon line path[data-v-5d141a68] {\n  fill: #1B2539;\n}\n@media (prefers-color-scheme: dark) {\n.dropzone[data-v-5d141a68] {\n    border-color: rgba(255, 255, 255, 0.2);\n}\n.dropzone .dropzone-message .icon-upload path[data-v-5d141a68], .dropzone .dropzone-message .icon-upload polyline[data-v-5d141a68], .dropzone .dropzone-message .icon-upload line[data-v-5d141a68] {\n    color: inherit;\n}\n.dropzone .dropzone-message .dropzone-description[data-v-5d141a68] {\n    color: #7d858c;\n}\n}\n",""])},"4TWA":function(e,t,n){"use strict";var a=n("CjXH"),i=n("LvDl"),o={name:"SelectInput",props:["placeholder","options","isError","default"],components:{Edit2Icon:a.r,UserIcon:a.fb,ChevronDownIcon:a.f},watch:{query:Object(i.debounce)((function(e){this.searchedResults=Object(i.omitBy)(this.options,(function(t){return!t.label.toLowerCase().includes(e.toLowerCase())}))}),200)},computed:{isSearching:function(){return this.searchedResults&&""!==this.query},optionList:function(){return this.isSearching?this.searchedResults:this.options}},data:function(){return{searchedResults:void 0,selected:void 0,isOpen:!1,query:""}},methods:{selectOption:function(e){this.$emit("input",e.value),this.selected=e,this.isOpen=!1},openMenu:function(){var e=this;this.isOpen=!this.isOpen,this.isOpen&&this.$nextTick((function(){return e.$refs.search.focus()}))}},created:function(){var e=this;this.default&&(this.selected=this.options.find((function(t){return t.value===e.default})))}},r=(n("Vav9"),n("KHd+")),s=Object(r.a)(o,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"select"},[n("div",{staticClass:"input-area",class:{"is-active":e.isOpen,"is-error":e.isError},on:{click:e.openMenu}},[e.selected?n("div",{staticClass:"selected"},[e.selected.icon?n("div",{staticClass:"option-icon"},["user"===e.selected.icon?n("user-icon",{attrs:{size:"14"}}):e._e(),e._v(" "),"user-edit"===e.selected.icon?n("edit2-icon",{attrs:{size:"14"}}):e._e()],1):e._e(),e._v(" "),n("span",{staticClass:"option-value"},[e._v(e._s(e.selected.label))])]):e._e(),e._v(" "),e.selected?e._e():n("div",{staticClass:"not-selected"},[n("span",{staticClass:"option-value placehoder"},[e._v(e._s(e.placeholder))])]),e._v(" "),n("chevron-down-icon",{staticClass:"chevron",attrs:{size:"19"}})],1),e._v(" "),n("transition",{attrs:{name:"slide-in"}},[e.isOpen?n("div",{staticClass:"input-options"},[e.options.length>5?n("div",{staticClass:"select-search"},[n("input",{directives:[{name:"model",rawName:"v-model",value:e.query,expression:"query"}],ref:"search",staticClass:"search-input focus-border-theme",attrs:{type:"text",placeholder:e.$t("select_search_placeholder")},domProps:{value:e.query},on:{input:function(t){t.target.composing||(e.query=t.target.value)}}})]):e._e(),e._v(" "),n("ul",{staticClass:"option-list"},e._l(e.optionList,(function(t,a){return n("li",{key:a,staticClass:"option-item",on:{click:function(n){return e.selectOption(t)}}},[t.icon?n("div",{staticClass:"option-icon"},["user"===t.icon?n("user-icon",{attrs:{size:"14"}}):e._e(),e._v(" "),"user-edit"===t.icon?n("edit2-icon",{attrs:{size:"14"}}):e._e()],1):e._e(),e._v(" "),n("span",{staticClass:"option-value"},[e._v(e._s(t.label))])])})),0)]):e._e()])],1)}),[],!1,null,"25de5245",null);t.a=s.exports},"8L2t":function(e,t,n){"use strict";var a=n("YQqd");n.n(a).a},BelR:function(e,t,n){var a=n("2jUW");"string"==typeof a&&(a=[[e.i,a,""]]);var i={hmr:!0,transform:void 0,insertInto:void 0};n("aET+")(a,i);a.locals&&(e.exports=a.locals)},"D+dh":function(e,t,n){"use strict";var a=n("CjXH"),i={name:"ImageInput",props:["image","error"],components:{ImageIcon:a.E,XIcon:a.jb},data:function(){return{imagePreview:void 0}},computed:{isData:function(){return void 0!==this.imagePreview&&""!==this.imagePreview}},methods:{resetImage:function(){this.imagePreview=void 0,this.$emit("input",void 0)},showImagePreview:function(e){var t=this,n=e.target.files[0].name,a=n.substring(n.lastIndexOf(".")+1).toLowerCase();if(["png","jpg","jpeg","svg"].includes(a)){var i=e.target.files[0],o=new FileReader;o.onload=function(){return t.imagePreview=o.result},o.readAsDataURL(i),this.$emit("input",e.target.files[0])}else alert(this.$t("validation_errors.wrong_image"))}},created:function(){this.image&&(this.imagePreview=this.image)}},o=(n("Obrk"),n("KHd+")),r=Object(o.a)(i,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"dropzone",class:{"is-error":e.error}},[e.imagePreview?n("div",{staticClass:"reset-image",on:{click:e.resetImage}},[n("x-icon",{staticClass:"close-icon text-theme",attrs:{size:"14"}})],1):e._e(),e._v(" "),n("input",{ref:"file",staticClass:"dummy",attrs:{type:"file"},on:{change:function(t){return e.showImagePreview(t)}}}),e._v(" "),e.imagePreview?n("img",{ref:"image",staticClass:"image-preview",attrs:{src:e.imagePreview}}):e._e(),e._v(" "),n("div",{directives:[{name:"show",rawName:"v-show",value:!e.isData,expression:"! isData"}],staticClass:"dropzone-message"},[n("image-icon",{staticClass:"icon-upload text-theme",attrs:{size:"28"}}),e._v(" "),n("span",{staticClass:"dropzone-title"},[e._v("\n            "+e._s(e.$t("input_image.title"))+"\n        ")]),e._v(" "),n("span",{staticClass:"dropzone-description"},[e._v("\n            "+e._s(e.$t("input_image.supported"))+"\n        ")])],1)])}),[],!1,null,"5d141a68",null);t.a=r.exports},FiK2:function(e,t,n){"use strict";var a=n("jOVO");n.n(a).a},Obrk:function(e,t,n){"use strict";var a=n("BelR");n.n(a).a},Vav9:function(e,t,n){"use strict";var a=n("2alK");n.n(a).a},YQqd:function(e,t,n){var a=n("gvpH");"string"==typeof a&&(a=[[e.i,a,""]]);var i={hmr:!0,transform:void 0,insertInto:void 0};n("aET+")(a,i);a.locals&&(e.exports=a.locals)},gvpH:function(e,t,n){(e.exports=n("I1BE")(!1)).push([e.i,".progress-bar[data-v-6ec2be7a] {\n  width: 100%;\n  height: 5px;\n  background: #f4f5f6;\n  margin-top: 6px;\n  border-radius: 10px;\n}\n.progress-bar span[data-v-6ec2be7a] {\n  display: block;\n  height: 100%;\n  border-radius: 10px;\n  max-width: 100%;\n}\n@media (prefers-color-scheme: dark) {\n.progress-bar[data-v-6ec2be7a] {\n    background: #1e2024;\n}\n}\n@media only screen and (min-width: 680px) and (prefers-color-scheme: dark) {\n.progress-bar[data-v-6ec2be7a] {\n    background: #1e2024;\n}\n}\n",""])},hw5j:function(e,t,n){(e.exports=n("I1BE")(!1)).push([e.i,".detail-storage-item[data-v-d9e0536e] {\n  margin-bottom: 35px;\n}\n.detail-storage-item.disk .icon path[data-v-d9e0536e], .detail-storage-item.disk .icon line[data-v-d9e0536e], .detail-storage-item.disk .icon polyline[data-v-d9e0536e], .detail-storage-item.disk .icon rect[data-v-d9e0536e], .detail-storage-item.disk .icon circle[data-v-d9e0536e], .detail-storage-item.disk .icon polygon[data-v-d9e0536e] {\n  stroke: #1B2539;\n}\n.detail-storage-item.disk .storage-progress[data-v-d9e0536e] span {\n  background: #1B2539;\n}\n.detail-storage-item.images .icon path[data-v-d9e0536e], .detail-storage-item.images .icon line[data-v-d9e0536e], .detail-storage-item.images .icon polyline[data-v-d9e0536e], .detail-storage-item.images .icon rect[data-v-d9e0536e], .detail-storage-item.images .icon circle[data-v-d9e0536e], .detail-storage-item.images .icon polygon[data-v-d9e0536e] {\n  stroke: #9D66FE;\n}\n.detail-storage-item.images .storage-progress[data-v-d9e0536e] span {\n  background: #9D66FE;\n}\n.detail-storage-item.videos .icon path[data-v-d9e0536e], .detail-storage-item.videos .icon line[data-v-d9e0536e], .detail-storage-item.videos .icon polyline[data-v-d9e0536e], .detail-storage-item.videos .icon rect[data-v-d9e0536e], .detail-storage-item.videos .icon circle[data-v-d9e0536e], .detail-storage-item.videos .icon polygon[data-v-d9e0536e] {\n  stroke: #FFBD2D;\n}\n.detail-storage-item.videos .storage-progress[data-v-d9e0536e] span {\n  background: #FFBD2D;\n}\n.detail-storage-item.audios .icon path[data-v-d9e0536e], .detail-storage-item.audios .icon line[data-v-d9e0536e], .detail-storage-item.audios .icon polyline[data-v-d9e0536e], .detail-storage-item.audios .icon rect[data-v-d9e0536e], .detail-storage-item.audios .icon circle[data-v-d9e0536e], .detail-storage-item.audios .icon polygon[data-v-d9e0536e] {\n  stroke: #FE66A1;\n}\n.detail-storage-item.audios .storage-progress[data-v-d9e0536e] span {\n  background: #FE66A1;\n}\n.detail-storage-item.documents .icon path[data-v-d9e0536e], .detail-storage-item.documents .icon line[data-v-d9e0536e], .detail-storage-item.documents .icon polyline[data-v-d9e0536e], .detail-storage-item.documents .icon rect[data-v-d9e0536e], .detail-storage-item.documents .icon circle[data-v-d9e0536e], .detail-storage-item.documents .icon polygon[data-v-d9e0536e] {\n  stroke: #FE6057;\n}\n.detail-storage-item.documents .storage-progress[data-v-d9e0536e] span {\n  background: #FE6057;\n}\n.detail-storage-item.others .icon path[data-v-d9e0536e], .detail-storage-item.others .icon line[data-v-d9e0536e], .detail-storage-item.others .icon polyline[data-v-d9e0536e], .detail-storage-item.others .icon rect[data-v-d9e0536e], .detail-storage-item.others .icon circle[data-v-d9e0536e], .detail-storage-item.others .icon polygon[data-v-d9e0536e] {\n  stroke: #1B2539;\n}\n.detail-storage-item.others .storage-progress[data-v-d9e0536e] span {\n  background: #1B2539;\n}\n.header-storage-item[data-v-d9e0536e] {\n  display: flex;\n  align-items: flex-start;\n  margin-bottom: 10px;\n}\n.header-storage-item .icon[data-v-d9e0536e] {\n  width: 35px;\n}\n.header-storage-item .type[data-v-d9e0536e] {\n  font-size: 0.9375em;\n  color: #1B2539;\n}\n.header-storage-item .total-size[data-v-d9e0536e] {\n  font-size: 0.625em;\n  display: block;\n  color: rgba(27, 37, 57, 0.7);\n}\n@media (prefers-color-scheme: dark) {\n.header-storage-item .type[data-v-d9e0536e] {\n    color: #bec6cf;\n}\n.header-storage-item .total-size[data-v-d9e0536e] {\n    color: #7d858c;\n}\n.detail-storage-item.others .icon path[data-v-d9e0536e], .detail-storage-item.others .icon line[data-v-d9e0536e], .detail-storage-item.others .icon polyline[data-v-d9e0536e], .detail-storage-item.others .icon rect[data-v-d9e0536e], .detail-storage-item.others .icon circle[data-v-d9e0536e], .detail-storage-item.others .icon polygon[data-v-d9e0536e], .detail-storage-item.disk .icon path[data-v-d9e0536e], .detail-storage-item.disk .icon line[data-v-d9e0536e], .detail-storage-item.disk .icon polyline[data-v-d9e0536e], .detail-storage-item.disk .icon rect[data-v-d9e0536e], .detail-storage-item.disk .icon circle[data-v-d9e0536e], .detail-storage-item.disk .icon polygon[data-v-d9e0536e] {\n    stroke: #41454e;\n}\n.detail-storage-item.others .storage-progress[data-v-d9e0536e] span, .detail-storage-item.disk .storage-progress[data-v-d9e0536e] span {\n    background: #41454e;\n}\n}\n",""])},jCWY:function(e,t,n){"use strict";var a=n("+v8A");n.n(a).a},jOVO:function(e,t,n){var a=n("wthY");"string"==typeof a&&(a=[[e.i,a,""]]);var i={hmr:!0,transform:void 0,insertInto:void 0};n("aET+")(a,i);a.locals&&(e.exports=a.locals)},lvDi:function(e,t,n){(e.exports=n("I1BE")(!1)).push([e.i,".select[data-v-25de5245] {\n  position: relative;\n  -webkit-user-select: none;\n     -moz-user-select: none;\n      -ms-user-select: none;\n          user-select: none;\n  width: 100%;\n}\n.select-search[data-v-25de5245] {\n  background: white;\n  position: -webkit-sticky;\n  position: sticky;\n  top: 0;\n  padding: 13px;\n}\n.select-search .search-input[data-v-25de5245] {\n  border: 1px solid transparent;\n  background: #f4f5f6;\n  transition: 150ms all ease;\n  font-size: 0.875em;\n  border-radius: 8px;\n  padding: 13px 20px;\n  -webkit-appearance: none;\n     -moz-appearance: none;\n          appearance: none;\n  font-weight: 700;\n  outline: 0;\n  width: 100%;\n}\n.input-options[data-v-25de5245] {\n  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.12);\n  background: white;\n  border-radius: 8px;\n  position: absolute;\n  overflow: hidden;\n  top: 65px;\n  left: 0;\n  right: 0;\n  z-index: 9;\n  max-height: 295px;\n  overflow-y: auto;\n}\n.input-options .option-item[data-v-25de5245] {\n  padding: 13px 20px;\n  display: block;\n  cursor: pointer;\n}\n.input-options .option-item[data-v-25de5245]:hover {\n  color: #00BC7E;\n  background: #f4f5f6;\n}\n.input-options .option-item[data-v-25de5245]:last-child {\n  border-bottom: none;\n}\n.input-area[data-v-25de5245] {\n  border-width: 1px;\n  border-style: solid;\n  border-color: transparent;\n  justify-content: space-between;\n  box-shadow: 0 1px 5px rgba(0, 0, 0, 0.12);\n  transition: 150ms all ease;\n  align-items: center;\n  border-radius: 8px;\n  padding: 13px 20px;\n  display: flex;\n  outline: 0;\n  width: 100%;\n  cursor: pointer;\n}\n.input-area .chevron[data-v-25de5245] {\n  transition: 150ms all ease;\n}\n.input-area.is-active .chevron[data-v-25de5245] {\n  transform: rotate(180deg);\n}\n.input-area.is-error[data-v-25de5245] {\n  border-color: #fd397a;\n  box-shadow: 0 0 7px rgba(253, 57, 122, 0.3);\n}\n.option-icon[data-v-25de5245] {\n  width: 20px;\n  display: inline-block;\n  font-size: 0.625em;\n}\n.option-icon svg[data-v-25de5245] {\n  margin-top: -4px;\n  vertical-align: middle;\n}\n.option-value[data-v-25de5245] {\n  font-size: 0.875em;\n  font-weight: 700;\n  width: 100%;\n  vertical-align: middle;\n}\n.option-value.placehoder[data-v-25de5245] {\n  color: rgba(27, 37, 57, 0.5);\n}\n.slide-in-enter-active[data-v-25de5245] {\n  transition: all 150ms ease;\n}\n.slide-in-enter[data-v-25de5245] {\n  opacity: 0;\n  transform: translateY(-50px);\n}\n@media (prefers-color-scheme: dark) {\n.input-area[data-v-25de5245] {\n    background: #1e2024;\n    border-color: #1e2024;\n}\n.popup-wrapper .input-area[data-v-25de5245] {\n    background: #25272c;\n}\n.input-options[data-v-25de5245] {\n    background: #1e2024;\n}\n.input-options .option-item[data-v-25de5245] {\n    border-bottom: none;\n}\n.input-options .option-item[data-v-25de5245]:hover {\n    background: #2a2c32;\n}\n.input-options .option-item:hover .option-icon path[data-v-25de5245], .input-options .option-item:hover .option-icon circle[data-v-25de5245] {\n    color: inherit;\n}\n.input-options .option-item[data-v-25de5245]:last-child {\n    border-bottom: none;\n}\n.option-value.placehoder[data-v-25de5245] {\n    color: #7d858c;\n}\n}\n",""])},mYUh:function(e,t,n){"use strict";n.r(t);var a=n("A5+z"),i=n("xnZf"),o=n("gahf"),r=n("4TWA"),s=n("D+dh"),l=n("eZ9V"),d=n("Nv84"),p=n("13Td"),c=n("qefO"),m=n("KnjL"),u=n("TJPC"),v=n("vDqi"),g=n.n(v),b=n("L2JU");function f(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function h(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var _={name:"AppAppearance",components:{ValidationObserver:a.ValidationObserver,ValidationProvider:a.ValidationProvider,StorageItemDetail:i.a,PageTabGroup:o.a,SelectInput:r.a,ImageInput:s.a,ButtonBase:d.a,FormLabel:l.a,SetupBox:p.a,required:u.a,PageTab:c.a,InfoBox:m.a},computed:function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?f(Object(n),!0).forEach((function(t){h(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):f(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}({},Object(b.b)(["countries"])),data:function(){return{isLoading:!0,billingInformation:void 0}},mounted:function(){var e=this;g.a.get("/api/admin/settings",{params:{column:"billing_phone_number|billing_postal_code|billing_vat_number|billing_address|billing_country|billing_state|billing_city|billing_name"}}).then((function(t){e.isLoading=!1,e.billingInformation={billing_phone_number:t.data.billing_phone_number,billing_postal_code:t.data.billing_postal_code,billing_vat_number:t.data.billing_vat_number,billing_address:t.data.billing_address,billing_country:t.data.billing_country,billing_state:t.data.billing_state,billing_city:t.data.billing_city,billing_name:t.data.billing_name}}))}},y=(n("FiK2"),n("KHd+")),x=Object(y.a)(_,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("PageTab",{staticClass:"form-fixed-width",attrs:{"is-loading":e.isLoading}},[e.billingInformation?n("PageTabGroup",[n("div",{staticClass:"form block-form"},[n("FormLabel",[e._v(e._s(e.$t("admin_settings.billings.section_company")))]),e._v(" "),n("div",{staticClass:"block-wrapper"},[n("label",[e._v(e._s(e.$t("admin_settings.billings.company_name"))+":")]),e._v(" "),n("ValidationProvider",{staticClass:"input-wrapper",attrs:{tag:"div",mode:"passive",name:"Billing Name",rules:"required"},scopedSlots:e._u([{key:"default",fn:function(t){var a=t.errors;return[n("input",{directives:[{name:"model",rawName:"v-model",value:e.billingInformation.billing_name,expression:"billingInformation.billing_name"}],staticClass:"focus-border-theme",class:{"is-error":a[0]},attrs:{placeholder:e.$t("admin_settings.billings.company_name_plac"),type:"text"},domProps:{value:e.billingInformation.billing_name},on:{input:[function(t){t.target.composing||e.$set(e.billingInformation,"billing_name",t.target.value)},function(t){return e.$updateText("/admin/settings","billing_name",e.billingInformation.billing_name)}]}}),e._v(" "),a[0]?n("span",{staticClass:"error-message"},[e._v(e._s(a[0]))]):e._e()]}}],null,!1,2531206058)})],1),e._v(" "),n("div",{staticClass:"block-wrapper"},[n("label",[e._v(e._s(e.$t("admin_settings.billings.vat"))+":")]),e._v(" "),n("ValidationProvider",{staticClass:"input-wrapper",attrs:{tag:"div",mode:"passive",name:"Billing Vat Number",rules:"required"},scopedSlots:e._u([{key:"default",fn:function(t){var a=t.errors;return[n("input",{directives:[{name:"model",rawName:"v-model",value:e.billingInformation.billing_vat_number,expression:"billingInformation.billing_vat_number"}],staticClass:"focus-border-theme",class:{"is-error":a[0]},attrs:{placeholder:e.$t("admin_settings.billings.vat_plac"),type:"text"},domProps:{value:e.billingInformation.billing_vat_number},on:{input:[function(t){t.target.composing||e.$set(e.billingInformation,"billing_vat_number",t.target.value)},function(t){return e.$updateText("/admin/settings","billing_vat_number",e.billingInformation.billing_vat_number)}]}}),e._v(" "),a[0]?n("span",{staticClass:"error-message"},[e._v(e._s(a[0]))]):e._e()]}}],null,!1,3024743990)})],1),e._v(" "),n("FormLabel",{staticClass:"mt-70"},[e._v(e._s(e.$t("admin_settings.billings.section_billing")))]),e._v(" "),n("div",{staticClass:"block-wrapper"},[n("label",[e._v(e._s(e.$t("admin_settings.billings.country"))+":")]),e._v(" "),n("ValidationProvider",{staticClass:"input-wrapper",attrs:{tag:"div",mode:"passive",name:"Billing Country",rules:"required"},scopedSlots:e._u([{key:"default",fn:function(t){var a=t.errors;return[n("SelectInput",{attrs:{default:e.billingInformation.billing_country,options:e.countries,placeholder:e.$t("admin_settings.billings.country_plac"),isError:a[0]},on:{input:function(t){return e.$updateText("/admin/settings","billing_country",e.billingInformation.billing_country)}},model:{value:e.billingInformation.billing_country,callback:function(t){e.$set(e.billingInformation,"billing_country",t)},expression:"billingInformation.billing_country"}}),e._v(" "),a[0]?n("span",{staticClass:"error-message"},[e._v(e._s(a[0]))]):e._e()]}}],null,!1,2795947715)})],1),e._v(" "),n("div",{staticClass:"block-wrapper"},[n("label",[e._v(e._s(e.$t("admin_settings.billings.address"))+":")]),e._v(" "),n("ValidationProvider",{staticClass:"input-wrapper",attrs:{tag:"div",mode:"passive",name:"Billing Address",rules:"required"},scopedSlots:e._u([{key:"default",fn:function(t){var a=t.errors;return[n("input",{directives:[{name:"model",rawName:"v-model",value:e.billingInformation.billing_address,expression:"billingInformation.billing_address"}],staticClass:"focus-border-theme",class:{"is-error":a[0]},attrs:{placeholder:e.$t("admin_settings.billings.address_plac"),type:"text"},domProps:{value:e.billingInformation.billing_address},on:{input:[function(t){t.target.composing||e.$set(e.billingInformation,"billing_address",t.target.value)},function(t){return e.$updateText("/admin/settings","billing_address",e.billingInformation.billing_address)}]}}),e._v(" "),a[0]?n("span",{staticClass:"error-message"},[e._v(e._s(a[0]))]):e._e()]}}],null,!1,77385155)})],1),e._v(" "),n("div",{staticClass:"wrapper-inline"},[n("div",{staticClass:"block-wrapper"},[n("label",[e._v(e._s(e.$t("admin_settings.billings.city"))+":")]),e._v(" "),n("ValidationProvider",{staticClass:"input-wrapper",attrs:{tag:"div",mode:"passive",name:"Billing City",rules:"required"},scopedSlots:e._u([{key:"default",fn:function(t){var a=t.errors;return[n("input",{directives:[{name:"model",rawName:"v-model",value:e.billingInformation.billing_city,expression:"billingInformation.billing_city"}],staticClass:"focus-border-theme",class:{"is-error":a[0]},attrs:{placeholder:e.$t("admin_settings.billings.city_plac"),type:"text"},domProps:{value:e.billingInformation.billing_city},on:{input:[function(t){t.target.composing||e.$set(e.billingInformation,"billing_city",t.target.value)},function(t){return e.$updateText("/admin/settings","billing_city",e.billingInformation.billing_city)}]}}),e._v(" "),a[0]?n("span",{staticClass:"error-message"},[e._v(e._s(a[0]))]):e._e()]}}],null,!1,3262295122)})],1),e._v(" "),n("div",{staticClass:"block-wrapper"},[n("label",[e._v(e._s(e.$t("admin_settings.billings.postal_code"))+":")]),e._v(" "),n("ValidationProvider",{staticClass:"input-wrapper",attrs:{tag:"div",mode:"passive",name:"Billing Postal Code",rules:"required"},scopedSlots:e._u([{key:"default",fn:function(t){var a=t.errors;return[n("input",{directives:[{name:"model",rawName:"v-model",value:e.billingInformation.billing_postal_code,expression:"billingInformation.billing_postal_code"}],staticClass:"focus-border-theme",class:{"is-error":a[0]},attrs:{placeholder:e.$t("admin_settings.billings.postal_code_plac"),type:"text"},domProps:{value:e.billingInformation.billing_postal_code},on:{input:[function(t){t.target.composing||e.$set(e.billingInformation,"billing_postal_code",t.target.value)},function(t){return e.$updateText("/admin/settings","billing_postal_code",e.billingInformation.billing_postal_code)}]}}),e._v(" "),a[0]?n("span",{staticClass:"error-message"},[e._v(e._s(a[0]))]):e._e()]}}],null,!1,567066674)})],1)]),e._v(" "),n("div",{staticClass:"block-wrapper"},[n("label",[e._v(e._s(e.$t("admin_settings.billings.state"))+":")]),e._v(" "),n("ValidationProvider",{staticClass:"input-wrapper",attrs:{tag:"div",mode:"passive",name:"Billing State",rules:"required"},scopedSlots:e._u([{key:"default",fn:function(t){var a=t.errors;return[n("input",{directives:[{name:"model",rawName:"v-model",value:e.billingInformation.billing_state,expression:"billingInformation.billing_state"}],staticClass:"focus-border-theme",class:{"is-error":a[0]},attrs:{placeholder:e.$t("admin_settings.billings.state_plac"),type:"text"},domProps:{value:e.billingInformation.billing_state},on:{input:[function(t){t.target.composing||e.$set(e.billingInformation,"billing_state",t.target.value)},function(t){return e.$updateText("/admin/settings","billing_state",e.billingInformation.billing_state)}]}}),e._v(" "),a[0]?n("span",{staticClass:"error-message"},[e._v(e._s(a[0]))]):e._e()]}}],null,!1,3691854658)})],1),e._v(" "),n("div",{staticClass:"block-wrapper"},[n("label",[e._v(e._s(e.$t("admin_settings.billings.phone_number"))+":")]),e._v(" "),n("ValidationProvider",{staticClass:"input-wrapper",attrs:{tag:"div",mode:"passive",name:"Billing Phone Number"},scopedSlots:e._u([{key:"default",fn:function(t){var a=t.errors;return[n("input",{directives:[{name:"model",rawName:"v-model",value:e.billingInformation.billing_phone_number,expression:"billingInformation.billing_phone_number"}],staticClass:"focus-border-theme",class:{"is-error":a[0]},attrs:{placeholder:e.$t("admin_settings.billings.phone_number_plac"),type:"text"},domProps:{value:e.billingInformation.billing_phone_number},on:{input:[function(t){t.target.composing||e.$set(e.billingInformation,"billing_phone_number",t.target.value)},function(t){return e.$updateText("/admin/settings","billing_phone_number",e.billingInformation.billing_phone_number)}]}}),e._v(" "),a[0]?n("span",{staticClass:"error-message"},[e._v(e._s(a[0]))]):e._e()]}}],null,!1,2691718389)})],1)],1)]):e._e()],1)}),[],!1,null,"466e2626",null);t.default=x.exports},wthY:function(e,t,n){(e.exports=n("I1BE")(!1)).push([e.i,'.form[data-v-466e2626] {\n  max-width: 700px;\n}\n.form.inline-form[data-v-466e2626] {\n  display: flex;\n  position: relative;\n  justify-content: center;\n  margin: 0 auto;\n}\n.form.inline-form .input-wrapper[data-v-466e2626] {\n  position: relative;\n}\n.form.inline-form .input-wrapper .error-message[data-v-466e2626] {\n  position: absolute;\n  left: 0;\n  bottom: -25px;\n}\n.form.block-form .wrapper-inline[data-v-466e2626] {\n  display: flex;\n  margin: 0 -15px;\n}\n.form.block-form .wrapper-inline .block-wrapper[data-v-466e2626] {\n  width: 100%;\n  padding: 0 15px;\n}\n.form.block-form .block-wrapper[data-v-466e2626] {\n  margin-bottom: 32px;\n}\n.form.block-form .block-wrapper label[data-v-466e2626] {\n  font-size: 0.875em;\n  color: rgba(27, 37, 57, 0.8);\n  font-weight: 700;\n  display: block;\n  margin-bottom: 7px;\n  text-align: left;\n}\n.form.block-form .block-wrapper[data-v-466e2626]:last-child {\n  margin-bottom: 0;\n}\n.form.block-form .button[data-v-466e2626] {\n  margin-top: 50px;\n}\n.form .inline-wrapper[data-v-466e2626] {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n}\n.form .inline-wrapper .switch-label .input-help[data-v-466e2626] {\n  padding-top: 0;\n}\n.form .inline-wrapper .switch-label .input-label[data-v-466e2626] {\n  font-weight: 700;\n  color: #1B2539;\n  font-size: 1em;\n  margin-bottom: 5px;\n}\n.form .input-help[data-v-466e2626] {\n  font-size: 0.75em;\n  color: rgba(27, 37, 57, 0.7);\n  line-height: 1.35;\n  padding-top: 10px;\n  display: block;\n}\n.single-line-form[data-v-466e2626] {\n  display: flex;\n}\n.single-line-form .submit-button[data-v-466e2626] {\n  margin-left: 20px;\n}\n.error-message[data-v-466e2626] {\n  font-size: 0.875em;\n  color: #fd397a;\n  padding-top: 5px;\n  display: block;\n  text-align: left;\n}\ntextarea[data-v-466e2626] {\n  width: 100%;\n}\ninput[type="color"][data-v-466e2626] {\n  width: 38px;\n  height: 40px;\n  border: none;\n  outline: none;\n  background: none;\n}\ntextarea[data-v-466e2626],\ninput[type="password"][data-v-466e2626],\ninput[type="text"][data-v-466e2626],\ninput[type="number"][data-v-466e2626],\ninput[type="email"][data-v-466e2626] {\n  border: 1px solid transparent;\n  transition: 150ms all ease;\n  font-size: 1em;\n  border-radius: 8px;\n  padding: 13px 20px;\n  -webkit-appearance: none;\n     -moz-appearance: none;\n          appearance: none;\n  font-weight: 700;\n  outline: 0;\n  width: 100%;\n  box-shadow: 0 1px 5px rgba(0, 0, 0, 0.12);\n}\ntextarea.is-error[data-v-466e2626],\ninput[type="password"].is-error[data-v-466e2626],\ninput[type="text"].is-error[data-v-466e2626],\ninput[type="number"].is-error[data-v-466e2626],\ninput[type="email"].is-error[data-v-466e2626] {\n  border-color: #fd397a;\n}\ntextarea[data-v-466e2626]::-webkit-input-placeholder, input[type="password"][data-v-466e2626]::-webkit-input-placeholder, input[type="text"][data-v-466e2626]::-webkit-input-placeholder, input[type="number"][data-v-466e2626]::-webkit-input-placeholder, input[type="email"][data-v-466e2626]::-webkit-input-placeholder {\n  color: rgba(27, 37, 57, 0.5);\n  font-size: 0.9375em;\n}\ntextarea[data-v-466e2626]::-moz-placeholder, input[type="password"][data-v-466e2626]::-moz-placeholder, input[type="text"][data-v-466e2626]::-moz-placeholder, input[type="number"][data-v-466e2626]::-moz-placeholder, input[type="email"][data-v-466e2626]::-moz-placeholder {\n  color: rgba(27, 37, 57, 0.5);\n  font-size: 0.9375em;\n}\ntextarea[data-v-466e2626]:-ms-input-placeholder, input[type="password"][data-v-466e2626]:-ms-input-placeholder, input[type="text"][data-v-466e2626]:-ms-input-placeholder, input[type="number"][data-v-466e2626]:-ms-input-placeholder, input[type="email"][data-v-466e2626]:-ms-input-placeholder {\n  color: rgba(27, 37, 57, 0.5);\n  font-size: 0.9375em;\n}\ntextarea[data-v-466e2626]::-ms-input-placeholder, input[type="password"][data-v-466e2626]::-ms-input-placeholder, input[type="text"][data-v-466e2626]::-ms-input-placeholder, input[type="number"][data-v-466e2626]::-ms-input-placeholder, input[type="email"][data-v-466e2626]::-ms-input-placeholder {\n  color: rgba(27, 37, 57, 0.5);\n  font-size: 0.9375em;\n}\ntextarea[data-v-466e2626]::placeholder,\ninput[type="password"][data-v-466e2626]::placeholder,\ninput[type="text"][data-v-466e2626]::placeholder,\ninput[type="number"][data-v-466e2626]::placeholder,\ninput[type="email"][data-v-466e2626]::placeholder {\n  color: rgba(27, 37, 57, 0.5);\n  font-size: 0.9375em;\n}\ntextarea[disabled][data-v-466e2626],\ninput[type="password"][disabled][data-v-466e2626],\ninput[type="text"][disabled][data-v-466e2626],\ninput[type="number"][disabled][data-v-466e2626],\ninput[type="email"][disabled][data-v-466e2626] {\n  background: white;\n  color: rgba(27, 37, 57, 0.8);\n  -webkit-text-fill-color: rgba(27, 37, 57, 0.8);\n  opacity: 1;\n  cursor: not-allowed;\n}\n.additional-link[data-v-466e2626] {\n  font-size: 1em;\n  margin-top: 50px;\n  display: block;\n}\n.additional-link b[data-v-466e2626], .additional-link a[data-v-466e2626] {\n  cursor: pointer;\n}\n.additional-link b[data-v-466e2626]:hover, .additional-link a[data-v-466e2626]:hover {\n  text-decoration: underline;\n}\n@media only screen and (max-width: 1024px) {\n.form[data-v-466e2626] {\n    max-width: 100%;\n}\n}\n@media only screen and (max-width: 960px) {\n.form .button[data-v-466e2626] {\n    margin-top: 20px;\n    width: 100%;\n    margin-left: 0;\n    margin-right: 0;\n}\n.form input[data-v-466e2626], .form textarea[data-v-466e2626] {\n    width: 100%;\n    min-width: 100%;\n}\n.form.block-form .block-wrapper[data-v-466e2626] {\n    display: block;\n}\n.form.block-form .block-wrapper label[data-v-466e2626] {\n    width: 100%;\n    padding-right: 0;\n    display: block;\n    margin-bottom: 7px;\n    text-align: left !important;\n    font-size: 0.875em;\n    padding-top: 0;\n}\n.form.block-form .button[data-v-466e2626] {\n    margin-top: 25px;\n    margin-left: 0;\n    margin-right: 0;\n}\n.form.inline-form[data-v-466e2626] {\n    display: block;\n}\n.form.inline-form .input-wrapper .error-message[data-v-466e2626] {\n    position: relative;\n    bottom: 0;\n}\n.form .button[data-v-466e2626] {\n    padding: 14px 32px;\n}\n.single-line-form[data-v-466e2626] {\n    display: block;\n}\n.single-line-form .submit-button[data-v-466e2626] {\n    margin-left: 0;\n    margin-top: 20px;\n    width: 100%;\n}\ntextarea[data-v-466e2626],\n  input[type="password"][data-v-466e2626],\n  input[type="number"][data-v-466e2626],\n  input[type="text"][data-v-466e2626],\n  input[type="email"][data-v-466e2626] {\n    padding: 14px 20px;\n}\n}\n@media only screen and (max-width: 690px) {\n.form.block-form .wrapper-inline[data-v-466e2626] {\n    display: block;\n}\n}\n@media (prefers-color-scheme: dark) {\n.form .input-help[data-v-466e2626] {\n    color: #7d858c;\n}\n.form.block-form .block-wrapper label[data-v-466e2626] {\n    color: #bec6cf;\n}\n.form .inline-wrapper .switch-label .input-label[data-v-466e2626] {\n    color: #bec6cf;\n}\ntextarea[data-v-466e2626],\n  input[type="password"][data-v-466e2626],\n  input[type="text"][data-v-466e2626],\n  input[type="number"][data-v-466e2626],\n  input[type="email"][data-v-466e2626] {\n    border-color: #1e2024;\n    background: #1e2024;\n    color: #bec6cf;\n}\ntextarea[data-v-466e2626]::-webkit-input-placeholder, input[type="password"][data-v-466e2626]::-webkit-input-placeholder, input[type="text"][data-v-466e2626]::-webkit-input-placeholder, input[type="number"][data-v-466e2626]::-webkit-input-placeholder, input[type="email"][data-v-466e2626]::-webkit-input-placeholder {\n    color: #7d858c;\n}\ntextarea[data-v-466e2626]::-moz-placeholder, input[type="password"][data-v-466e2626]::-moz-placeholder, input[type="text"][data-v-466e2626]::-moz-placeholder, input[type="number"][data-v-466e2626]::-moz-placeholder, input[type="email"][data-v-466e2626]::-moz-placeholder {\n    color: #7d858c;\n}\ntextarea[data-v-466e2626]:-ms-input-placeholder, input[type="password"][data-v-466e2626]:-ms-input-placeholder, input[type="text"][data-v-466e2626]:-ms-input-placeholder, input[type="number"][data-v-466e2626]:-ms-input-placeholder, input[type="email"][data-v-466e2626]:-ms-input-placeholder {\n    color: #7d858c;\n}\ntextarea[data-v-466e2626]::-ms-input-placeholder, input[type="password"][data-v-466e2626]::-ms-input-placeholder, input[type="text"][data-v-466e2626]::-ms-input-placeholder, input[type="number"][data-v-466e2626]::-ms-input-placeholder, input[type="email"][data-v-466e2626]::-ms-input-placeholder {\n    color: #7d858c;\n}\ntextarea[data-v-466e2626]::placeholder,\n  input[type="password"][data-v-466e2626]::placeholder,\n  input[type="text"][data-v-466e2626]::placeholder,\n  input[type="number"][data-v-466e2626]::placeholder,\n  input[type="email"][data-v-466e2626]::placeholder {\n    color: #7d858c;\n}\ntextarea[disabled][data-v-466e2626],\n  input[type="password"][disabled][data-v-466e2626],\n  input[type="text"][disabled][data-v-466e2626],\n  input[type="number"][disabled][data-v-466e2626],\n  input[type="email"][disabled][data-v-466e2626] {\n    background: #1e2024;\n    color: rgba(125, 133, 140, 0.8);\n    -webkit-text-fill-color: rgba(125, 133, 140, 0.8);\n}\n.popup-wrapper textarea[data-v-466e2626],\n  .popup-wrapper input[type="password"][data-v-466e2626],\n  .popup-wrapper input[type="text"][data-v-466e2626],\n  .popup-wrapper input[type="number"][data-v-466e2626],\n  .popup-wrapper input[type="email"][data-v-466e2626] {\n    background: #25272c;\n}\n}\n.block-form[data-v-466e2626] {\n  max-width: 100%;\n}\n',""])},xnZf:function(e,t,n){"use strict";var a=n("+Pqb"),i=n("CjXH"),o={name:"StorageItemDetail",props:["percentage","title","type","used"],components:{HardDriveIcon:i.C,FileTextIcon:i.w,ProgressBar:a.a,MusicIcon:i.P,VideoIcon:i.ib,ImageIcon:i.E,FileIcon:i.v}},r=(n("jCWY"),n("KHd+")),s=Object(r.a)(o,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("article",{staticClass:"detail-storage-item",class:e.type},[n("div",{staticClass:"header-storage-item"},[n("div",{staticClass:"icon"},["images"==e.type?n("image-icon",{attrs:{size:"23"}}):e._e(),e._v(" "),"videos"==e.type?n("video-icon",{attrs:{size:"23"}}):e._e(),e._v(" "),"audios"==e.type?n("music-icon",{attrs:{size:"23"}}):e._e(),e._v(" "),"documents"==e.type?n("file-text-icon",{attrs:{size:"23"}}):e._e(),e._v(" "),"others"==e.type?n("file-icon",{attrs:{size:"23"}}):e._e(),e._v(" "),"disk"==e.type?n("hard-drive-icon",{attrs:{size:"23"}}):e._e()],1),e._v(" "),n("div",{staticClass:"title"},[n("b",{staticClass:"type"},[e._v(e._s(e.title))]),e._v(" "),n("span",{staticClass:"total-size"},[e._v(e._s(e.used))])])]),e._v(" "),n("ProgressBar",{staticClass:"storage-progress",attrs:{progress:e.percentage}})],1)}),[],!1,null,"d9e0536e",null);t.a=s.exports}}]);