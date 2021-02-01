(window.webpackJsonp=window.webpackJsonp||[]).push([[9],{"+Pqb":function(e,t,a){"use strict";var n={name:"ProgressBar",props:["progress"]},i=(a("woIv"),a("KHd+")),o=Object(i.a)(n,(function(){var e=this.$createElement,t=this._self._c||e;return t("div",{staticClass:"progress-bar"},[t("span",{style:{width:this.progress+"%"}})])}),[],!1,null,"f372b280",null);t.a=o.exports},"+fJw":function(e,t,a){var n=a("R+OL");"string"==typeof n&&(n=[[e.i,n,""]]);var i={hmr:!0,transform:void 0,insertInto:void 0};a("aET+")(n,i);n.locals&&(e.exports=n.locals)},"+t0u":function(e,t,a){var n=a("QO4y");"string"==typeof n&&(n=[[e.i,n,""]]);var i={hmr:!0,transform:void 0,insertInto:void 0};a("aET+")(n,i);n.locals&&(e.exports=n.locals)},"13Td":function(e,t,a){"use strict";var n={name:"SetupBox",props:["title","description","theme"]},i=(a("jS71"),a("KHd+")),o=Object(i.a)(n,(function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"setup-box",class:e.theme},[a("b",{staticClass:"title"},[e._v(e._s(e.title))]),e._v(" "),a("p",{staticClass:"description"},[e._v(e._s(e.description))]),e._v(" "),e._t("default")],2)}),[],!1,null,"664a78dc",null);t.a=o.exports},"5pbA":function(e,t,a){"use strict";var n=a("+t0u");a.n(n).a},"6gqG":function(e,t,a){var n=a("ydEr");"string"==typeof n&&(n=[[e.i,n,""]]);var i={hmr:!0,transform:void 0,insertInto:void 0};a("aET+")(n,i);n.locals&&(e.exports=n.locals)},"7OGm":function(e,t,a){"use strict";var n=a("6gqG");a.n(n).a},"D+dh":function(e,t,a){"use strict";var n=a("CjXH"),i={name:"ImageInput",props:["image","error"],components:{ImageIcon:n.B,XIcon:n.db},data:function(){return{imagePreview:void 0}},computed:{isData:function(){return void 0!==this.imagePreview&&""!==this.imagePreview}},methods:{resetImage:function(){this.imagePreview=void 0,this.$emit("input",void 0)},showImagePreview:function(e){var t=this,a=e.target.files[0].name,n=a.substring(a.lastIndexOf(".")+1).toLowerCase();if(["png","jpg","jpeg","svg"].includes(n)){var i=e.target.files[0],o=new FileReader;o.onload=function(){return t.imagePreview=o.result},o.readAsDataURL(i),this.$emit("input",e.target.files[0])}else alert(this.$t("validation_errors.wrong_image"))}},created:function(){this.image&&(this.imagePreview=this.image)}},o=(a("w9z4"),a("KHd+")),r=Object(o.a)(i,(function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"dropzone",class:{"is-error":e.error}},[e.imagePreview?a("div",{staticClass:"reset-image",on:{click:e.resetImage}},[a("x-icon",{staticClass:"close-icon",attrs:{size:"14"}})],1):e._e(),e._v(" "),a("input",{ref:"file",staticClass:"dummy",attrs:{type:"file"},on:{change:function(t){return e.showImagePreview(t)}}}),e._v(" "),e.imagePreview?a("img",{ref:"image",staticClass:"image-preview",attrs:{src:e.imagePreview}}):e._e(),e._v(" "),a("div",{directives:[{name:"show",rawName:"v-show",value:!e.isData,expression:"! isData"}],staticClass:"dropzone-message"},[a("image-icon",{staticClass:"icon-upload",attrs:{size:"28"}}),e._v(" "),a("span",{staticClass:"dropzone-title"},[e._v("\n            "+e._s(e.$t("input_image.title"))+"\n        ")]),e._v(" "),a("span",{staticClass:"dropzone-description"},[e._v("\n            "+e._s(e.$t("input_image.supported"))+"\n        ")])],1)])}),[],!1,null,"eb0cae00",null);t.a=r.exports},"F12+":function(e,t,a){(e.exports=a("I1BE")(!1)).push([e.i,".progress-bar[data-v-f372b280] {\n  width: 100%;\n  height: 5px;\n  background: #f4f5f6;\n  margin-top: 6px;\n  border-radius: 10px;\n}\n.progress-bar span[data-v-f372b280] {\n  background: #00BC7E;\n  display: block;\n  height: 100%;\n  border-radius: 10px;\n  max-width: 100%;\n}\n@media (prefers-color-scheme: dark) {\n.progress-bar[data-v-f372b280] {\n    background: #1e2024;\n}\n}\n@media only screen and (min-width: 680px) and (prefers-color-scheme: dark) {\n.progress-bar[data-v-f372b280] {\n    background: #1e2024;\n}\n}\n",""])},FEcZ:function(e,t,a){(e.exports=a("I1BE")(!1)).push([e.i,".setup-box[data-v-664a78dc] {\n  padding: 20px;\n  border-radius: 8px;\n  margin-bottom: 30px;\n}\n.setup-box .title[data-v-664a78dc] {\n  font-size: 1.3125em;\n  margin-bottom: 5px;\n  display: block;\n  font-weight: 700;\n}\n.setup-box .description[data-v-664a78dc] {\n  font-size: 0.9375em;\n  line-height: 1.5;\n  margin-bottom: 20px;\n}\n.setup-box.base[data-v-664a78dc] {\n  background: #f4f5f6;\n}\n.setup-box.danger[data-v-664a78dc] {\n  background: #f4f5f6;\n}\n.setup-box.danger .title[data-v-664a78dc] {\n  color: #fd397a;\n}\n.setup-box[data-v-664a78dc] input[type='text'], .setup-box[data-v-664a78dc] input[type='number'],\n.setup-box[data-v-664a78dc] input .input-area {\n  background: white;\n}\n.setup-box[data-v-664a78dc] .input-area {\n  background: white;\n}\n.setup-box[data-v-664a78dc] .form {\n  margin-top: 20px;\n}\n.setup-box[data-v-664a78dc] .form.block-form {\n  max-width: 450px;\n}\n.setup-box[data-v-664a78dc] .form.block-form .single-line-form {\n  display: flex;\n}\n.setup-box[data-v-664a78dc] .form.block-form .single-line-form .submit-button {\n  margin-left: 20px;\n}\n@media only screen and (max-width: 960px) {\n.setup-box[data-v-664a78dc] .form.block-form {\n    max-width: 100%;\n}\n.setup-box[data-v-664a78dc] .form input {\n    min-width: initial;\n}\n}\n@media only screen and (max-width: 690px) {\n.setup-box[data-v-664a78dc] {\n    padding: 15px;\n}\n.setup-box .title[data-v-664a78dc] {\n    font-size: 1.0625em;\n    margin-bottom: 10px;\n}\n.setup-box .description[data-v-664a78dc] {\n    font-size: 0.875em;\n}\n.setup-box[data-v-664a78dc] .form.block-form .single-line-form {\n    display: block;\n}\n.setup-box[data-v-664a78dc] .form.block-form .single-line-form .submit-button {\n    margin-left: 0;\n    margin-top: 10px;\n}\n}\n@media (prefers-color-scheme: dark) {\n.setup-box.base[data-v-664a78dc] {\n    background: #1e2024;\n}\n.setup-box.danger[data-v-664a78dc] {\n    background: #1e2024;\n}\n.setup-box[data-v-664a78dc] input[type='text'], .setup-box[data-v-664a78dc] input[type='number'],\n  .setup-box[data-v-664a78dc] input .input-area {\n    background: #131414;\n}\n.setup-box[data-v-664a78dc] .input-area {\n    background: #131414;\n}\n}\n",""])},IS7u:function(e,t,a){(e.exports=a("I1BE")(!1)).push([e.i,".dropzone[data-v-eb0cae00] {\n  border: 1px dashed #a1abc2;\n  border-radius: 8px;\n  position: relative;\n  text-align: center;\n  display: flex;\n  align-items: center;\n  min-height: 175px;\n}\n.dropzone.is-error[data-v-eb0cae00] {\n  border: 2px dashed rgba(253, 57, 122, 0.3);\n}\n.dropzone.is-error .dropzone-title[data-v-eb0cae00] {\n  color: #fd397a;\n}\n.dropzone.is-error .icon-upload rect[data-v-eb0cae00], .dropzone.is-error .icon-upload circle[data-v-eb0cae00], .dropzone.is-error .icon-upload polyline[data-v-eb0cae00] {\n  stroke: #fd397a;\n}\n.dropzone input[type='file'][data-v-eb0cae00] {\n  opacity: 0;\n  position: absolute;\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  z-index: 1;\n  width: 100%;\n  cursor: pointer;\n}\n.dropzone .image-preview[data-v-eb0cae00] {\n  position: absolute;\n  width: 100%;\n  height: 100%;\n  -o-object-fit: contain;\n     object-fit: contain;\n  left: 0;\n  padding: 25px;\n  display: block;\n}\n.dropzone .image-preview.fit-image[data-v-eb0cae00] {\n  -o-object-fit: cover;\n     object-fit: cover;\n  border-radius: 12px;\n  overflow: hidden;\n}\n.dropzone .dropzone-message[data-v-eb0cae00] {\n  padding: 50px 0;\n  width: 100%;\n}\n.dropzone .dropzone-message .icon-upload rect[data-v-eb0cae00], .dropzone .dropzone-message .icon-upload circle[data-v-eb0cae00], .dropzone .dropzone-message .icon-upload polyline[data-v-eb0cae00] {\n  stroke: #00BC7E;\n}\n.dropzone .dropzone-message .dropzone-title[data-v-eb0cae00] {\n  font-size: 1em;\n  font-weight: 700;\n  display: block;\n}\n.dropzone .dropzone-message .dropzone-description[data-v-eb0cae00] {\n  color: rgba(27, 37, 57, 0.7);\n  font-size: 0.75em;\n}\n.dropzone .reset-image[data-v-eb0cae00] {\n  z-index: 2;\n  background: white;\n  border-radius: 50px;\n  display: block;\n  position: absolute;\n  right: 0;\n  top: 0;\n  cursor: pointer;\n  transform: translateY(-50%) translateX(50%);\n  padding: 0px 4px;\n  box-shadow: 0 1px 5px rgba(0, 0, 0, 0.12);\n}\n.dropzone .reset-image .close-icon[data-v-eb0cae00] {\n  vertical-align: middle;\n}\n.dropzone .reset-image .close-icon line path[data-v-eb0cae00] {\n  fill: #1B2539;\n}\n@media (prefers-color-scheme: dark) {\n.dropzone[data-v-eb0cae00] {\n    border-color: rgba(255, 255, 255, 0.2);\n}\n.dropzone .dropzone-message .icon-upload path[data-v-eb0cae00], .dropzone .dropzone-message .icon-upload polyline[data-v-eb0cae00], .dropzone .dropzone-message .icon-upload line[data-v-eb0cae00] {\n    stroke: #00BC7E;\n}\n.dropzone .dropzone-message .dropzone-description[data-v-eb0cae00] {\n    color: #7d858c;\n}\n}\n",""])},Idvm:function(e,t,a){var n=a("lig4");"string"==typeof n&&(n=[[e.i,n,""]]);var i={hmr:!0,transform:void 0,insertInto:void 0};a("aET+")(n,i);n.locals&&(e.exports=n.locals)},KnjL:function(e,t,a){"use strict";var n={name:"InfoBox",props:["type"]},i=(a("7OGm"),a("KHd+")),o=Object(i.a)(n,(function(){var e=this.$createElement;return(this._self._c||e)("div",{staticClass:"info-box",class:this.type},[this._t("default")],2)}),[],!1,null,"bf43be5e",null);t.a=o.exports},LE5O:function(e,t,a){(e.exports=a("I1BE")(!1)).push([e.i,".detail-storage-item[data-v-56af1b6e] {\n  margin-bottom: 35px;\n}\n.detail-storage-item.disk .icon path[data-v-56af1b6e], .detail-storage-item.disk .icon line[data-v-56af1b6e], .detail-storage-item.disk .icon polyline[data-v-56af1b6e], .detail-storage-item.disk .icon rect[data-v-56af1b6e], .detail-storage-item.disk .icon circle[data-v-56af1b6e], .detail-storage-item.disk .icon polygon[data-v-56af1b6e] {\n  stroke: #1B2539;\n}\n.detail-storage-item.disk .storage-progress[data-v-56af1b6e] span {\n  background: #1B2539;\n}\n.detail-storage-item.images .icon path[data-v-56af1b6e], .detail-storage-item.images .icon line[data-v-56af1b6e], .detail-storage-item.images .icon polyline[data-v-56af1b6e], .detail-storage-item.images .icon rect[data-v-56af1b6e], .detail-storage-item.images .icon circle[data-v-56af1b6e], .detail-storage-item.images .icon polygon[data-v-56af1b6e] {\n  stroke: #9D66FE;\n}\n.detail-storage-item.images .storage-progress[data-v-56af1b6e] span {\n  background: #9D66FE;\n}\n.detail-storage-item.videos .icon path[data-v-56af1b6e], .detail-storage-item.videos .icon line[data-v-56af1b6e], .detail-storage-item.videos .icon polyline[data-v-56af1b6e], .detail-storage-item.videos .icon rect[data-v-56af1b6e], .detail-storage-item.videos .icon circle[data-v-56af1b6e], .detail-storage-item.videos .icon polygon[data-v-56af1b6e] {\n  stroke: #FFBD2D;\n}\n.detail-storage-item.videos .storage-progress[data-v-56af1b6e] span {\n  background: #FFBD2D;\n}\n.detail-storage-item.audios .icon path[data-v-56af1b6e], .detail-storage-item.audios .icon line[data-v-56af1b6e], .detail-storage-item.audios .icon polyline[data-v-56af1b6e], .detail-storage-item.audios .icon rect[data-v-56af1b6e], .detail-storage-item.audios .icon circle[data-v-56af1b6e], .detail-storage-item.audios .icon polygon[data-v-56af1b6e] {\n  stroke: #FE66A1;\n}\n.detail-storage-item.audios .storage-progress[data-v-56af1b6e] span {\n  background: #FE66A1;\n}\n.detail-storage-item.documents .icon path[data-v-56af1b6e], .detail-storage-item.documents .icon line[data-v-56af1b6e], .detail-storage-item.documents .icon polyline[data-v-56af1b6e], .detail-storage-item.documents .icon rect[data-v-56af1b6e], .detail-storage-item.documents .icon circle[data-v-56af1b6e], .detail-storage-item.documents .icon polygon[data-v-56af1b6e] {\n  stroke: #FE6057;\n}\n.detail-storage-item.documents .storage-progress[data-v-56af1b6e] span {\n  background: #FE6057;\n}\n.detail-storage-item.others .icon path[data-v-56af1b6e], .detail-storage-item.others .icon line[data-v-56af1b6e], .detail-storage-item.others .icon polyline[data-v-56af1b6e], .detail-storage-item.others .icon rect[data-v-56af1b6e], .detail-storage-item.others .icon circle[data-v-56af1b6e], .detail-storage-item.others .icon polygon[data-v-56af1b6e] {\n  stroke: #1B2539;\n}\n.detail-storage-item.others .storage-progress[data-v-56af1b6e] span {\n  background: #1B2539;\n}\n.header-storage-item[data-v-56af1b6e] {\n  display: flex;\n  align-items: flex-start;\n  margin-bottom: 10px;\n}\n.header-storage-item .icon[data-v-56af1b6e] {\n  width: 35px;\n}\n.header-storage-item .type[data-v-56af1b6e] {\n  font-size: 0.9375em;\n  color: #1B2539;\n}\n.header-storage-item .total-size[data-v-56af1b6e] {\n  font-size: 0.625em;\n  display: block;\n  color: rgba(27, 37, 57, 0.7);\n}\n@media (prefers-color-scheme: dark) {\n.header-storage-item .type[data-v-56af1b6e] {\n    color: #bec6cf;\n}\n.header-storage-item .total-size[data-v-56af1b6e] {\n    color: #7d858c;\n}\n.detail-storage-item.others .icon path[data-v-56af1b6e], .detail-storage-item.others .icon line[data-v-56af1b6e], .detail-storage-item.others .icon polyline[data-v-56af1b6e], .detail-storage-item.others .icon rect[data-v-56af1b6e], .detail-storage-item.others .icon circle[data-v-56af1b6e], .detail-storage-item.others .icon polygon[data-v-56af1b6e], .detail-storage-item.disk .icon path[data-v-56af1b6e], .detail-storage-item.disk .icon line[data-v-56af1b6e], .detail-storage-item.disk .icon polyline[data-v-56af1b6e], .detail-storage-item.disk .icon rect[data-v-56af1b6e], .detail-storage-item.disk .icon circle[data-v-56af1b6e], .detail-storage-item.disk .icon polygon[data-v-56af1b6e] {\n    stroke: #41454e;\n}\n.detail-storage-item.others .storage-progress[data-v-56af1b6e] span, .detail-storage-item.disk .storage-progress[data-v-56af1b6e] span {\n    background: #41454e;\n}\n}\n",""])},QO4y:function(e,t,a){(e.exports=a("I1BE")(!1)).push([e.i,"",""])},"R+OL":function(e,t,a){(e.exports=a("I1BE")(!1)).push([e.i,'.form[data-v-5317e942] {\n  max-width: 700px;\n}\n.form.inline-form[data-v-5317e942] {\n  display: flex;\n  position: relative;\n  justify-content: center;\n  margin: 0 auto;\n}\n.form.inline-form .input-wrapper[data-v-5317e942] {\n  position: relative;\n}\n.form.inline-form .input-wrapper .error-message[data-v-5317e942] {\n  position: absolute;\n  left: 0;\n  bottom: -25px;\n}\n.form.block-form .wrapper-inline[data-v-5317e942] {\n  display: flex;\n  margin: 0 -15px;\n}\n.form.block-form .wrapper-inline .block-wrapper[data-v-5317e942] {\n  width: 100%;\n  padding: 0 15px;\n}\n.form.block-form .block-wrapper[data-v-5317e942] {\n  margin-bottom: 32px;\n}\n.form.block-form .block-wrapper label[data-v-5317e942] {\n  font-size: 0.875em;\n  color: rgba(27, 37, 57, 0.8);\n  font-weight: 700;\n  display: block;\n  margin-bottom: 7px;\n  text-align: left;\n}\n.form.block-form .block-wrapper[data-v-5317e942]:last-child {\n  margin-bottom: 0;\n}\n.form.block-form .button[data-v-5317e942] {\n  margin-top: 50px;\n}\n.form .inline-wrapper[data-v-5317e942] {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n}\n.form .inline-wrapper .switch-label .input-help[data-v-5317e942] {\n  padding-top: 0;\n}\n.form .inline-wrapper .switch-label .input-label[data-v-5317e942] {\n  font-weight: 700;\n  color: #1B2539;\n  font-size: 1em;\n  margin-bottom: 5px;\n}\n.form .input-help[data-v-5317e942] {\n  font-size: 0.75em;\n  color: rgba(27, 37, 57, 0.7);\n  line-height: 1.35;\n  padding-top: 10px;\n  display: block;\n}\n.single-line-form[data-v-5317e942] {\n  display: flex;\n}\n.single-line-form .submit-button[data-v-5317e942] {\n  margin-left: 20px;\n}\n.error-message[data-v-5317e942] {\n  font-size: 0.875em;\n  color: #fd397a;\n  padding-top: 5px;\n  display: block;\n  text-align: left;\n}\ntextarea[data-v-5317e942] {\n  width: 100%;\n}\ntextarea[data-v-5317e942],\ninput[type="password"][data-v-5317e942],\ninput[type="text"][data-v-5317e942],\ninput[type="number"][data-v-5317e942],\ninput[type="email"][data-v-5317e942] {\n  border: 1px solid transparent;\n  transition: 150ms all ease;\n  font-size: 1em;\n  border-radius: 8px;\n  padding: 13px 20px;\n  -webkit-appearance: none;\n     -moz-appearance: none;\n          appearance: none;\n  font-weight: 700;\n  outline: 0;\n  width: 100%;\n  box-shadow: 0 1px 5px rgba(0, 0, 0, 0.12);\n}\ntextarea.is-error[data-v-5317e942],\ninput[type="password"].is-error[data-v-5317e942],\ninput[type="text"].is-error[data-v-5317e942],\ninput[type="number"].is-error[data-v-5317e942],\ninput[type="email"].is-error[data-v-5317e942] {\n  border-color: #fd397a;\n  box-shadow: 0 1px 5px rgba(253, 57, 122, 0.3);\n}\ntextarea[data-v-5317e942]::-webkit-input-placeholder, input[type="password"][data-v-5317e942]::-webkit-input-placeholder, input[type="text"][data-v-5317e942]::-webkit-input-placeholder, input[type="number"][data-v-5317e942]::-webkit-input-placeholder, input[type="email"][data-v-5317e942]::-webkit-input-placeholder {\n  color: rgba(27, 37, 57, 0.5);\n  font-size: 0.9375em;\n}\ntextarea[data-v-5317e942]::-moz-placeholder, input[type="password"][data-v-5317e942]::-moz-placeholder, input[type="text"][data-v-5317e942]::-moz-placeholder, input[type="number"][data-v-5317e942]::-moz-placeholder, input[type="email"][data-v-5317e942]::-moz-placeholder {\n  color: rgba(27, 37, 57, 0.5);\n  font-size: 0.9375em;\n}\ntextarea[data-v-5317e942]:-ms-input-placeholder, input[type="password"][data-v-5317e942]:-ms-input-placeholder, input[type="text"][data-v-5317e942]:-ms-input-placeholder, input[type="number"][data-v-5317e942]:-ms-input-placeholder, input[type="email"][data-v-5317e942]:-ms-input-placeholder {\n  color: rgba(27, 37, 57, 0.5);\n  font-size: 0.9375em;\n}\ntextarea[data-v-5317e942]::-ms-input-placeholder, input[type="password"][data-v-5317e942]::-ms-input-placeholder, input[type="text"][data-v-5317e942]::-ms-input-placeholder, input[type="number"][data-v-5317e942]::-ms-input-placeholder, input[type="email"][data-v-5317e942]::-ms-input-placeholder {\n  color: rgba(27, 37, 57, 0.5);\n  font-size: 0.9375em;\n}\ntextarea[data-v-5317e942]::placeholder,\ninput[type="password"][data-v-5317e942]::placeholder,\ninput[type="text"][data-v-5317e942]::placeholder,\ninput[type="number"][data-v-5317e942]::placeholder,\ninput[type="email"][data-v-5317e942]::placeholder {\n  color: rgba(27, 37, 57, 0.5);\n  font-size: 0.9375em;\n}\ntextarea[data-v-5317e942]:focus,\ninput[type="password"][data-v-5317e942]:focus,\ninput[type="text"][data-v-5317e942]:focus,\ninput[type="number"][data-v-5317e942]:focus,\ninput[type="email"][data-v-5317e942]:focus {\n  border-color: #00BC7E;\n  box-shadow: 0 1px 5px rgba(0, 188, 126, 0.3);\n}\ntextarea[disabled][data-v-5317e942],\ninput[type="password"][disabled][data-v-5317e942],\ninput[type="text"][disabled][data-v-5317e942],\ninput[type="number"][disabled][data-v-5317e942],\ninput[type="email"][disabled][data-v-5317e942] {\n  background: white;\n  color: rgba(27, 37, 57, 0.8);\n  -webkit-text-fill-color: rgba(27, 37, 57, 0.8);\n  opacity: 1;\n  cursor: not-allowed;\n}\n.additional-link[data-v-5317e942] {\n  font-size: 1em;\n  margin-top: 50px;\n  display: block;\n  color: #1B2539;\n}\n.additional-link b[data-v-5317e942], .additional-link a[data-v-5317e942] {\n  color: #00BC7E;\n  cursor: pointer;\n}\n.additional-link b[data-v-5317e942]:hover, .additional-link a[data-v-5317e942]:hover {\n  text-decoration: underline;\n}\n@media only screen and (max-width: 1024px) {\n.form[data-v-5317e942] {\n    max-width: 100%;\n}\n}\n@media only screen and (max-width: 960px) {\n.form .button[data-v-5317e942] {\n    margin-top: 20px;\n    width: 100%;\n    margin-left: 0;\n    margin-right: 0;\n}\n.form input[data-v-5317e942], .form textarea[data-v-5317e942] {\n    width: 100%;\n    min-width: 100%;\n}\n.form.block-form .block-wrapper[data-v-5317e942] {\n    display: block;\n}\n.form.block-form .block-wrapper label[data-v-5317e942] {\n    width: 100%;\n    padding-right: 0;\n    display: block;\n    margin-bottom: 7px;\n    text-align: left !important;\n    font-size: 0.875em;\n    padding-top: 0;\n}\n.form.block-form .button[data-v-5317e942] {\n    margin-top: 25px;\n    margin-left: 0;\n    margin-right: 0;\n}\n.form.inline-form[data-v-5317e942] {\n    display: block;\n}\n.form.inline-form .input-wrapper .error-message[data-v-5317e942] {\n    position: relative;\n    bottom: 0;\n}\n.form .button[data-v-5317e942] {\n    padding: 14px 32px;\n}\n.single-line-form[data-v-5317e942] {\n    display: block;\n}\n.single-line-form .submit-button[data-v-5317e942] {\n    margin-left: 0;\n    margin-top: 20px;\n    width: 100%;\n}\ntextarea[data-v-5317e942],\n  input[type="password"][data-v-5317e942],\n  input[type="number"][data-v-5317e942],\n  input[type="text"][data-v-5317e942],\n  input[type="email"][data-v-5317e942] {\n    padding: 14px 20px;\n}\n}\n@media only screen and (max-width: 690px) {\n.form.block-form .wrapper-inline[data-v-5317e942] {\n    display: block;\n}\n}\n@media (prefers-color-scheme: dark) {\n.form .input-help[data-v-5317e942] {\n    color: #7d858c;\n}\n.form.block-form .block-wrapper label[data-v-5317e942] {\n    color: #bec6cf;\n}\n.form .inline-wrapper .switch-label .input-label[data-v-5317e942] {\n    color: #bec6cf;\n}\ntextarea[data-v-5317e942],\n  input[type="password"][data-v-5317e942],\n  input[type="text"][data-v-5317e942],\n  input[type="number"][data-v-5317e942],\n  input[type="email"][data-v-5317e942] {\n    border-color: #1e2024;\n    background: #1e2024;\n    color: #bec6cf;\n}\ntextarea[data-v-5317e942]::-webkit-input-placeholder, input[type="password"][data-v-5317e942]::-webkit-input-placeholder, input[type="text"][data-v-5317e942]::-webkit-input-placeholder, input[type="number"][data-v-5317e942]::-webkit-input-placeholder, input[type="email"][data-v-5317e942]::-webkit-input-placeholder {\n    color: #7d858c;\n}\ntextarea[data-v-5317e942]::-moz-placeholder, input[type="password"][data-v-5317e942]::-moz-placeholder, input[type="text"][data-v-5317e942]::-moz-placeholder, input[type="number"][data-v-5317e942]::-moz-placeholder, input[type="email"][data-v-5317e942]::-moz-placeholder {\n    color: #7d858c;\n}\ntextarea[data-v-5317e942]:-ms-input-placeholder, input[type="password"][data-v-5317e942]:-ms-input-placeholder, input[type="text"][data-v-5317e942]:-ms-input-placeholder, input[type="number"][data-v-5317e942]:-ms-input-placeholder, input[type="email"][data-v-5317e942]:-ms-input-placeholder {\n    color: #7d858c;\n}\ntextarea[data-v-5317e942]::-ms-input-placeholder, input[type="password"][data-v-5317e942]::-ms-input-placeholder, input[type="text"][data-v-5317e942]::-ms-input-placeholder, input[type="number"][data-v-5317e942]::-ms-input-placeholder, input[type="email"][data-v-5317e942]::-ms-input-placeholder {\n    color: #7d858c;\n}\ntextarea[data-v-5317e942]::placeholder,\n  input[type="password"][data-v-5317e942]::placeholder,\n  input[type="text"][data-v-5317e942]::placeholder,\n  input[type="number"][data-v-5317e942]::placeholder,\n  input[type="email"][data-v-5317e942]::placeholder {\n    color: #7d858c;\n}\ntextarea[disabled][data-v-5317e942],\n  input[type="password"][disabled][data-v-5317e942],\n  input[type="text"][disabled][data-v-5317e942],\n  input[type="number"][disabled][data-v-5317e942],\n  input[type="email"][disabled][data-v-5317e942] {\n    background: #1e2024;\n    color: rgba(125, 133, 140, 0.8);\n    -webkit-text-fill-color: rgba(125, 133, 140, 0.8);\n}\n}\n.block-form[data-v-5317e942] {\n  max-width: 100%;\n}\n',""])},RNzz:function(e,t,a){"use strict";a.r(t);var n=a("o0o1"),i=a.n(n),o=a("A5+z"),r=a("xnZf"),s=a("gahf"),d=a("4TWA"),p=a("xxrA"),l=a("D+dh"),c=a("eZ9V"),u=a("Nv84"),m=a("13Td"),v=a("qefO"),b=a("KnjL"),f=a("TJPC"),g=a("L2JU"),h=a("xCqy"),x=a("vDqi"),y=a.n(x);function _(e,t,a,n,i,o,r){try{var s=e[o](r),d=s.value}catch(e){return void a(e)}s.done?t(d):Promise.resolve(d).then(n,i)}function w(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function k(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}var z={name:"AppPayments",components:{ValidationObserver:o.ValidationObserver,ValidationProvider:o.ValidationProvider,StorageItemDetail:r.a,PageTabGroup:s.a,SwitchInput:p.a,SelectInput:d.a,ImageInput:l.a,ButtonBase:u.a,FormLabel:c.a,SetupBox:m.a,required:f.a,PageTab:v.a,InfoBox:b.a},computed:function(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?w(Object(a),!0).forEach((function(t){k(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):w(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}({},Object(g.b)(["config","currencyList"]),{stripeWebhookEndpoint:function(){return this.config.host+"/stripe/webhook"},submitButtonText:function(){return this.isLoading?this.$t("admin_settings.payments.button_testing"):this.$t("admin_settings.payments.button_submit")}}),data:function(){return{isLoading:!0,isError:!1,errorMessage:"",payments:void 0,stripeCredentials:{key:"",secret:"",webhookSecret:"",currency:""}}},methods:{stripeCredentialsSubmit:function(){var e,t=this;return(e=i.a.mark((function e(){return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t.$refs.stripeCredentials.validate();case 2:if(e.sent){e.next=5;break}return e.abrupt("return");case 5:t.isLoading=!0,y.a.post("/api/settings/stripe",t.stripeCredentials).then((function(){t.$store.commit("SET_STRIPE_PUBLIC_KEY",t.stripeCredentials.key),h.a.$emit("toaster",{type:"success",message:t.$t("toaster.stripe_set")})})).catch((function(e){(e.response.status=401)&&(t.isError=!0,t.errorMessage=e.response.data.message)})).finally((function(){t.isLoading=!1}));case 7:case"end":return e.stop()}}),e)})),function(){var t=this,a=arguments;return new Promise((function(n,i){var o=e.apply(t,a);function r(e){_(o,n,i,r,s,"next",e)}function s(e){_(o,n,i,r,s,"throw",e)}r(void 0)}))})()}},mounted:function(){var e=this;y.a.get("/api/settings",{params:{column:"payments_active|payments_configured"}}).then((function(t){e.isLoading=!1,e.payments={configured:parseInt(t.data.payments_configured),status:parseInt(t.data.payments_active)}}))}},C=(a("jjMQ"),a("KHd+")),I=Object(C.a)(z,(function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("PageTab",{staticClass:"form-fixed-width",attrs:{"is-loading":e.isLoading}},[e.config.stripe_public_key&&e.payments?a("PageTabGroup",[a("div",{staticClass:"form block-form"},[a("FormLabel",[e._v(e._s(e.$t("admin_settings.payments.section_payments")))]),e._v(" "),a("InfoBox",[a("p",{domProps:{innerHTML:e._s(e.$t("admin_settings.payments.credentials_disclaimer"))}})]),e._v(" "),a("div",{staticClass:"block-wrapper"},[a("div",{staticClass:"input-wrapper"},[a("div",{staticClass:"inline-wrapper"},[a("div",{staticClass:"switch-label"},[a("label",{staticClass:"input-label"},[e._v(e._s(e.$t("admin_settings.payments.allow_payments"))+":")])]),e._v(" "),a("SwitchInput",{staticClass:"switch",attrs:{state:e.payments.status},on:{input:function(t){return e.$updateText("/settings","payments_active",e.payments.status)}},model:{value:e.payments.status,callback:function(t){e.$set(e.payments,"status",t)},expression:"payments.status"}})],1)])]),e._v(" "),a("div",{staticClass:"block-wrapper"},[a("label",[e._v(e._s(e.$t("admin_settings.payments.webhook_url"))+":")]),e._v(" "),a("ValidationProvider",{staticClass:"input-wrapper",attrs:{tag:"div",mode:"passive",name:"Webhook URL",rules:"required"},scopedSlots:e._u([{key:"default",fn:function(t){var n=t.errors;return[a("input",{attrs:{type:"text",disabled:""},domProps:{value:e.stripeWebhookEndpoint}}),e._v(" "),n[0]?a("span",{staticClass:"error-message"},[e._v(e._s(n[0]))]):e._e()]}}],null,!1,2791309690)})],1)],1)]):e._e(),e._v(" "),e.config.stripe_public_key?e._e():a("PageTabGroup",[a("ValidationObserver",{ref:"stripeCredentials",staticClass:"form block-form",attrs:{tag:"form"},on:{submit:function(t){return t.preventDefault(),e.stripeCredentialsSubmit(t)}},scopedSlots:e._u([{key:"default",fn:function(t){t.invalid;return[a("FormLabel",[e._v(e._s(e.$t("admin_settings.payments.stripe_setup")))]),e._v(" "),a("InfoBox",[a("p",{domProps:{innerHTML:e._s(e.$t("admin_settings.payments.stripe_create_acc"))}})]),e._v(" "),a("div",{staticClass:"block-wrapper"},[a("label",[e._v(e._s(e.$t("admin_settings.payments.stripe_currency"))+":")]),e._v(" "),a("ValidationProvider",{staticClass:"input-wrapper",attrs:{tag:"div",mode:"passive",name:"Currency",rules:"required"},scopedSlots:e._u([{key:"default",fn:function(t){var n=t.errors;return[a("SelectInput",{attrs:{options:e.currencyList,placeholder:e.$t("admin_settings.payments.stripe_currency_plac"),isError:n[0]},model:{value:e.stripeCredentials.currency,callback:function(t){e.$set(e.stripeCredentials,"currency",t)},expression:"stripeCredentials.currency"}}),e._v(" "),n[0]?a("span",{staticClass:"error-message"},[e._v(e._s(n[0]))]):e._e()]}}],null,!0)})],1),e._v(" "),a("div",{staticClass:"block-wrapper"},[a("label",[e._v(e._s(e.$t("admin_settings.payments.stripe_pub_key"))+":")]),e._v(" "),a("ValidationProvider",{staticClass:"input-wrapper",attrs:{tag:"div",mode:"passive",name:"Publishable Key",rules:"required"},scopedSlots:e._u([{key:"default",fn:function(t){var n=t.errors;return[a("input",{directives:[{name:"model",rawName:"v-model",value:e.stripeCredentials.key,expression:"stripeCredentials.key"}],class:{"is-error":n[0]},attrs:{placeholder:e.$t("admin_settings.payments.stripe_pub_key_plac"),type:"text"},domProps:{value:e.stripeCredentials.key},on:{input:function(t){t.target.composing||e.$set(e.stripeCredentials,"key",t.target.value)}}}),e._v(" "),n[0]?a("span",{staticClass:"error-message"},[e._v(e._s(n[0]))]):e._e()]}}],null,!0)})],1),e._v(" "),a("div",{staticClass:"block-wrapper"},[a("label",[e._v(e._s(e.$t("admin_settings.payments.stripe_sec_key"))+":")]),e._v(" "),a("ValidationProvider",{staticClass:"input-wrapper",attrs:{tag:"div",mode:"passive",name:"Secret Key",rules:"required"},scopedSlots:e._u([{key:"default",fn:function(t){var n=t.errors;return[a("input",{directives:[{name:"model",rawName:"v-model",value:e.stripeCredentials.secret,expression:"stripeCredentials.secret"}],class:{"is-error":n[0]},attrs:{placeholder:e.$t("admin_settings.payments.stripe_sec_key_plac"),type:"text"},domProps:{value:e.stripeCredentials.secret},on:{input:function(t){t.target.composing||e.$set(e.stripeCredentials,"secret",t.target.value)}}}),e._v(" "),n[0]?a("span",{staticClass:"error-message"},[e._v(e._s(n[0]))]):e._e()]}}],null,!0)})],1),e._v(" "),a("div",{staticClass:"block-wrapper"},[a("label",[e._v("Webhook URL:")]),e._v(" "),a("InfoBox",[a("p",{domProps:{innerHTML:e._s(e.$t("admin_settings.payments.stripe_create_webhook"))}})]),e._v(" "),a("ValidationProvider",{staticClass:"input-wrapper",attrs:{tag:"div",mode:"passive",name:"Webhook URL",rules:"required"},scopedSlots:e._u([{key:"default",fn:function(t){var n=t.errors;return[a("input",{attrs:{type:"text",disabled:""},domProps:{value:e.stripeWebhookEndpoint}}),e._v(" "),n[0]?a("span",{staticClass:"error-message"},[e._v(e._s(n[0]))]):e._e()]}}],null,!0)})],1),e._v(" "),a("div",{staticClass:"block-wrapper"},[a("label",[e._v("Webhook Secret:")]),e._v(" "),a("ValidationProvider",{staticClass:"input-wrapper",attrs:{tag:"div",mode:"passive",name:"Webhook Secret",rules:"required"},scopedSlots:e._u([{key:"default",fn:function(t){var n=t.errors;return[a("input",{directives:[{name:"model",rawName:"v-model",value:e.stripeCredentials.webhookSecret,expression:"stripeCredentials.webhookSecret"}],class:{"is-error":n[0]},attrs:{placeholder:e.$t("admin_settings.payments.stripe_webhook_key_plac"),type:"text"},domProps:{value:e.stripeCredentials.webhookSecret},on:{input:function(t){t.target.composing||e.$set(e.stripeCredentials,"webhookSecret",t.target.value)}}}),e._v(" "),n[0]?a("span",{staticClass:"error-message"},[e._v(e._s(n[0]))]):e._e()]}}],null,!0)})],1),e._v(" "),e.isError?a("InfoBox",{attrs:{type:"error"}},[a("p",[e._v(e._s(e.errorMessage))])]):e._e(),e._v(" "),a("ButtonBase",{staticClass:"submit-button",attrs:{loading:e.isLoading,disabled:e.isLoading,type:"submit","button-style":"theme"}},[e._v("\n                "+e._s(e.submitButtonText)+"\n            ")])]}}],null,!1,2483202031)})],1)],1)}),[],!1,null,"5317e942",null);t.default=I.exports},VA79:function(e,t,a){var n=a("F12+");"string"==typeof n&&(n=[[e.i,n,""]]);var i={hmr:!0,transform:void 0,insertInto:void 0};a("aET+")(n,i);n.locals&&(e.exports=n.locals)},Xk6H:function(e,t,a){"use strict";var n=a("Idvm");a.n(n).a},b0xl:function(e,t,a){"use strict";var n=a("oyp5");a.n(n).a},"bN/l":function(e,t,a){var n=a("IS7u");"string"==typeof n&&(n=[[e.i,n,""]]);var i={hmr:!0,transform:void 0,insertInto:void 0};a("aET+")(n,i);n.locals&&(e.exports=n.locals)},eZ9V:function(e,t,a){"use strict";var n={name:"FormLabel",components:{Edit2Icon:a("CjXH").q}},i=(a("Xk6H"),a("KHd+")),o=Object(i.a)(n,(function(){var e=this.$createElement,t=this._self._c||e;return t("div",{staticClass:"form-label"},[t("edit-2-icon",{staticClass:"icon",attrs:{size:"22"}}),this._v(" "),t("b",{staticClass:"label"},[this._t("default")],2)],1)}),[],!1,null,"c1157a8e",null);t.a=o.exports},gahf:function(e,t,a){"use strict";var n={name:"PageTabGroup"},i=(a("yI2c"),a("KHd+")),o=Object(i.a)(n,(function(){var e=this.$createElement;return(this._self._c||e)("div",{staticClass:"page-tab-group"},[this._t("default")],2)}),[],!1,null,"1bb470e4",null);t.a=o.exports},jS71:function(e,t,a){"use strict";var n=a("wsaA");a.n(n).a},jjMQ:function(e,t,a){"use strict";var n=a("+fJw");a.n(n).a},lig4:function(e,t,a){(e.exports=a("I1BE")(!1)).push([e.i,".form-label[data-v-c1157a8e] {\n  display: flex;\n  align-items: center;\n  margin-bottom: 30px;\n}\n.form-label .icon[data-v-c1157a8e] {\n  margin-right: 10px;\n}\n.form-label .icon path[data-v-c1157a8e] {\n  stroke: #00BC7E;\n}\n.form-label .label[data-v-c1157a8e] {\n  font-size: 1.125em;\n  font-weight: 700;\n}\n@media (prefers-color-scheme: dark) {\n.form-label .label[data-v-c1157a8e] {\n    color: #bec6cf;\n}\n}\n",""])},oDxr:function(e,t,a){(e.exports=a("I1BE")(!1)).push([e.i,".page-tab-group[data-v-1bb470e4] {\n  margin-bottom: 65px;\n}\n",""])},oyp5:function(e,t,a){var n=a("LE5O");"string"==typeof n&&(n=[[e.i,n,""]]);var i={hmr:!0,transform:void 0,insertInto:void 0};a("aET+")(n,i);n.locals&&(e.exports=n.locals)},qefO:function(e,t,a){"use strict";var n={name:"PageTab",props:["isLoading"],components:{Spinner:a("zTYo").a}},i=(a("5pbA"),a("KHd+")),o=Object(i.a)(n,(function(){var e=this.$createElement,t=this._self._c||e;return t("div",{staticClass:"page-tab"},[t("div",{directives:[{name:"show",rawName:"v-show",value:this.isLoading,expression:"isLoading"}],attrs:{id:"loader"}},[t("Spinner")],1),this._v(" "),this._t("default")],2)}),[],!1,null,"4339da66",null);t.a=o.exports},w9z4:function(e,t,a){"use strict";var n=a("bN/l");a.n(n).a},woIv:function(e,t,a){"use strict";var n=a("VA79");a.n(n).a},wsaA:function(e,t,a){var n=a("FEcZ");"string"==typeof n&&(n=[[e.i,n,""]]);var i={hmr:!0,transform:void 0,insertInto:void 0};a("aET+")(n,i);n.locals&&(e.exports=n.locals)},xnZf:function(e,t,a){"use strict";var n=a("+Pqb"),i=a("CjXH"),o={name:"StorageItemDetail",props:["percentage","title","type","used"],components:{HardDriveIcon:i.z,FileTextIcon:i.v,ProgressBar:n.a,MusicIcon:i.L,VideoIcon:i.cb,ImageIcon:i.B,FileIcon:i.u}},r=(a("b0xl"),a("KHd+")),s=Object(r.a)(o,(function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("article",{staticClass:"detail-storage-item",class:e.type},[a("div",{staticClass:"header-storage-item"},[a("div",{staticClass:"icon"},["images"==e.type?a("image-icon",{attrs:{size:"23"}}):e._e(),e._v(" "),"videos"==e.type?a("video-icon",{attrs:{size:"23"}}):e._e(),e._v(" "),"audios"==e.type?a("music-icon",{attrs:{size:"23"}}):e._e(),e._v(" "),"documents"==e.type?a("file-text-icon",{attrs:{size:"23"}}):e._e(),e._v(" "),"others"==e.type?a("file-icon",{attrs:{size:"23"}}):e._e(),e._v(" "),"disk"==e.type?a("hard-drive-icon",{attrs:{size:"23"}}):e._e()],1),e._v(" "),a("div",{staticClass:"title"},[a("b",{staticClass:"type"},[e._v(e._s(e.title))]),e._v(" "),a("span",{staticClass:"total-size"},[e._v(e._s(e.used))])])]),e._v(" "),a("ProgressBar",{staticClass:"storage-progress",attrs:{progress:e.percentage}})],1)}),[],!1,null,"56af1b6e",null);t.a=s.exports},yI2c:function(e,t,a){"use strict";var n=a("zlQ3");a.n(n).a},ydEr:function(e,t,a){(e.exports=a("I1BE")(!1)).push([e.i,".info-box[data-v-bf43be5e] {\n  padding: 20px;\n  border-radius: 8px;\n  margin-bottom: 32px;\n  background: #f4f5f6;\n  text-align: left;\n}\n.info-box.error[data-v-bf43be5e] {\n  background: rgba(253, 57, 122, 0.1);\n}\n.info-box.error p[data-v-bf43be5e], .info-box.error a[data-v-bf43be5e] {\n  color: #fd397a;\n}\n.info-box.error a[data-v-bf43be5e] {\n  text-decoration: underline;\n}\n.info-box p[data-v-bf43be5e] {\n  font-size: 0.9375em;\n  line-height: 1.6;\n  word-break: break-word;\n  font-weight: 600;\n}\n.info-box p[data-v-bf43be5e] a {\n  color: #00BC7E;\n}\n.info-box b[data-v-bf43be5e] {\n  font-weight: 700;\n  color: #00BC7E;\n}\n.info-box a[data-v-bf43be5e] {\n  color: #00BC7E;\n  font-weight: 700;\n  font-size: 0.9375em;\n  line-height: 1.6;\n}\n.info-box ul[data-v-bf43be5e] {\n  margin-top: 15px;\n  display: block;\n}\n.info-box ul li[data-v-bf43be5e] {\n  display: block;\n}\n.info-box ul li a[data-v-bf43be5e] {\n  display: block;\n}\n@media only screen and (max-width: 690px) {\n.info-box[data-v-bf43be5e] {\n    padding: 15px;\n}\n}\n@media (prefers-color-scheme: dark) {\n.info-box[data-v-bf43be5e] {\n    background: #1e2024;\n}\n.info-box p[data-v-bf43be5e] {\n    color: #bec6cf;\n}\n.info-box ul li[data-v-bf43be5e] {\n    color: #bec6cf;\n}\n}\n",""])},zlQ3:function(e,t,a){var n=a("oDxr");"string"==typeof n&&(n=[[e.i,n,""]]);var i={hmr:!0,transform:void 0,insertInto:void 0};a("aET+")(n,i);n.locals&&(e.exports=n.locals)}}]);