(window.webpackJsonp=window.webpackJsonp||[]).push([[30],{105:function(a,t,e){var n=e(330);"string"==typeof n&&(n=[[a.i,n,""]]);var i={hmr:!0,transform:void 0,insertInto:void 0};e(6)(n,i);n.locals&&(a.exports=n.locals)},12:function(a,t,e){"use strict";var n={name:"InfoBox",props:["type"]},i=(e(227),e(0)),o=Object(i.a)(n,(function(){var a=this.$createElement;return(this._self._c||a)("div",{staticClass:"info-box",class:this.type},[this._t("default")],2)}),[],!1,null,"bf43be5e",null);t.a=o.exports},13:function(a,t,e){"use strict";var n={name:"FormLabel",components:{Edit2Icon:e(1).m}},i=(e(229),e(0)),o=Object(i.a)(n,(function(){var a=this.$createElement,t=this._self._c||a;return t("div",{staticClass:"form-label"},[t("edit-2-icon",{staticClass:"icon",attrs:{size:"22"}}),this._v(" "),t("b",{staticClass:"label"},[this._t("default")],2)],1)}),[],!1,null,"c1157a8e",null);t.a=o.exports},15:function(a,t,e){"use strict";var n={name:"PageTab",props:["isLoading"],components:{Spinner:e(19).a}},i=(e(233),e(0)),o=Object(i.a)(n,(function(){var a=this.$createElement,t=this._self._c||a;return t("div",{staticClass:"page-tab"},[this.isLoading?t("div",{attrs:{id:"loader"}},[t("Spinner")],1):this._e(),this._v(" "),this.isLoading?this._e():this._t("default")],2)}),[],!1,null,"cb8ef734",null);t.a=o.exports},16:function(a,t,e){"use strict";var n={name:"PageTabGroup"},i=(e(231),e(0)),o=Object(i.a)(n,(function(){var a=this.$createElement;return(this._self._c||a)("div",{staticClass:"page-tab-group"},[this._t("default")],2)}),[],!1,null,"1bb470e4",null);t.a=o.exports},227:function(a,t,e){"use strict";var n=e(53);e.n(n).a},228:function(a,t,e){(a.exports=e(5)(!1)).push([a.i,".info-box[data-v-bf43be5e] {\n  padding: 20px;\n  border-radius: 8px;\n  margin-bottom: 32px;\n  background: #f4f5f6;\n  text-align: left;\n}\n.info-box.error[data-v-bf43be5e] {\n  background: rgba(253, 57, 122, 0.1);\n}\n.info-box.error p[data-v-bf43be5e], .info-box.error a[data-v-bf43be5e] {\n  color: #fd397a;\n}\n.info-box.error a[data-v-bf43be5e] {\n  text-decoration: underline;\n}\n.info-box p[data-v-bf43be5e] {\n  font-size: 0.9375em;\n  line-height: 1.6;\n  word-break: break-word;\n  font-weight: 600;\n}\n.info-box p[data-v-bf43be5e] a {\n  color: #00BC7E;\n}\n.info-box b[data-v-bf43be5e] {\n  font-weight: 700;\n  color: #00BC7E;\n}\n.info-box a[data-v-bf43be5e] {\n  color: #00BC7E;\n  font-weight: 700;\n  font-size: 0.9375em;\n  line-height: 1.6;\n}\n.info-box ul[data-v-bf43be5e] {\n  margin-top: 15px;\n  display: block;\n}\n.info-box ul li[data-v-bf43be5e] {\n  display: block;\n}\n.info-box ul li a[data-v-bf43be5e] {\n  display: block;\n}\n@media only screen and (max-width: 690px) {\n.info-box[data-v-bf43be5e] {\n    padding: 15px;\n}\n}\n@media (prefers-color-scheme: dark) {\n.info-box[data-v-bf43be5e] {\n    background: #1e2024;\n}\n.info-box p[data-v-bf43be5e] {\n    color: #bec6cf;\n}\n.info-box ul li[data-v-bf43be5e] {\n    color: #bec6cf;\n}\n}\n",""])},229:function(a,t,e){"use strict";var n=e(54);e.n(n).a},230:function(a,t,e){(a.exports=e(5)(!1)).push([a.i,".form-label[data-v-c1157a8e] {\n  display: flex;\n  align-items: center;\n  margin-bottom: 30px;\n}\n.form-label .icon[data-v-c1157a8e] {\n  margin-right: 10px;\n}\n.form-label .icon path[data-v-c1157a8e] {\n  stroke: #00BC7E;\n}\n.form-label .label[data-v-c1157a8e] {\n  font-size: 1.125em;\n  font-weight: 700;\n}\n@media (prefers-color-scheme: dark) {\n.form-label .label[data-v-c1157a8e] {\n    color: #bec6cf;\n}\n}\n",""])},231:function(a,t,e){"use strict";var n=e(55);e.n(n).a},232:function(a,t,e){(a.exports=e(5)(!1)).push([a.i,".page-tab-group[data-v-1bb470e4] {\n  margin-bottom: 65px;\n}\n",""])},233:function(a,t,e){"use strict";var n=e(56);e.n(n).a},234:function(a,t,e){(a.exports=e(5)(!1)).push([a.i,"",""])},243:function(a,t,e){"use strict";var n=e(61);e.n(n).a},244:function(a,t,e){(a.exports=e(5)(!1)).push([a.i,".progress-bar[data-v-9f98bf3e] {\n  width: 100%;\n  height: 5px;\n  background: #f4f5f6;\n  margin-top: 5px;\n  border-radius: 10px;\n}\n.progress-bar span[data-v-9f98bf3e] {\n  background: #00BC7E;\n  display: block;\n  height: 100%;\n  border-radius: 10px;\n  max-width: 100%;\n}\n@media (prefers-color-scheme: dark) {\n.progress-bar[data-v-9f98bf3e] {\n    background: #1e2024;\n}\n}\n@media only screen and (min-width: 680px) and (prefers-color-scheme: dark) {\n.progress-bar[data-v-9f98bf3e] {\n    background: #1e2024;\n}\n}\n",""])},245:function(a,t,e){"use strict";var n=e(62);e.n(n).a},246:function(a,t,e){(a.exports=e(5)(!1)).push([a.i,".setup-box[data-v-664a78dc] {\n  padding: 20px;\n  border-radius: 8px;\n  margin-bottom: 30px;\n}\n.setup-box .title[data-v-664a78dc] {\n  font-size: 1.3125em;\n  margin-bottom: 5px;\n  display: block;\n  font-weight: 700;\n}\n.setup-box .description[data-v-664a78dc] {\n  font-size: 0.9375em;\n  line-height: 1.5;\n  margin-bottom: 20px;\n}\n.setup-box.base[data-v-664a78dc] {\n  background: #f4f5f6;\n}\n.setup-box.danger[data-v-664a78dc] {\n  background: #f4f5f6;\n}\n.setup-box.danger .title[data-v-664a78dc] {\n  color: #fd397a;\n}\n.setup-box[data-v-664a78dc] input[type='text'], .setup-box[data-v-664a78dc] input[type='number'],\n.setup-box[data-v-664a78dc] input .input-area {\n  background: white;\n}\n.setup-box[data-v-664a78dc] .input-area {\n  background: white;\n}\n.setup-box[data-v-664a78dc] .form {\n  margin-top: 20px;\n}\n.setup-box[data-v-664a78dc] .form.block-form {\n  max-width: 450px;\n}\n.setup-box[data-v-664a78dc] .form.block-form .single-line-form {\n  display: flex;\n}\n.setup-box[data-v-664a78dc] .form.block-form .single-line-form .submit-button {\n  margin-left: 20px;\n}\n@media only screen and (max-width: 960px) {\n.setup-box[data-v-664a78dc] .form.block-form {\n    max-width: 100%;\n}\n.setup-box[data-v-664a78dc] .form input {\n    min-width: initial;\n}\n}\n@media only screen and (max-width: 690px) {\n.setup-box[data-v-664a78dc] {\n    padding: 15px;\n}\n.setup-box .title[data-v-664a78dc] {\n    font-size: 1.0625em;\n    margin-bottom: 10px;\n}\n.setup-box .description[data-v-664a78dc] {\n    font-size: 0.875em;\n}\n.setup-box[data-v-664a78dc] .form.block-form .single-line-form {\n    display: block;\n}\n.setup-box[data-v-664a78dc] .form.block-form .single-line-form .submit-button {\n    margin-left: 0;\n    margin-top: 10px;\n}\n}\n@media (prefers-color-scheme: dark) {\n.setup-box.base[data-v-664a78dc] {\n    background: #1e2024;\n}\n.setup-box.danger[data-v-664a78dc] {\n    background: #1e2024;\n}\n.setup-box[data-v-664a78dc] input[type='text'], .setup-box[data-v-664a78dc] input[type='number'],\n  .setup-box[data-v-664a78dc] input .input-area {\n    background: #111314;\n}\n.setup-box[data-v-664a78dc] .input-area {\n    background: #111314;\n}\n}\n",""])},25:function(a,t,e){"use strict";var n={name:"SetupBox",props:["title","description","theme"]},i=(e(245),e(0)),o=Object(i.a)(n,(function(){var a=this,t=a.$createElement,e=a._self._c||t;return e("div",{staticClass:"setup-box",class:a.theme},[e("b",{staticClass:"title"},[a._v(a._s(a.title))]),a._v(" "),e("p",{staticClass:"description"},[a._v(a._s(a.description))]),a._v(" "),a._t("default")],2)}),[],!1,null,"664a78dc",null);t.a=o.exports},253:function(a,t,e){"use strict";var n=e(66);e.n(n).a},254:function(a,t,e){(a.exports=e(5)(!1)).push([a.i,".detail-storage-item[data-v-56af1b6e] {\n  margin-bottom: 35px;\n}\n.detail-storage-item.disk .icon path[data-v-56af1b6e], .detail-storage-item.disk .icon line[data-v-56af1b6e], .detail-storage-item.disk .icon polyline[data-v-56af1b6e], .detail-storage-item.disk .icon rect[data-v-56af1b6e], .detail-storage-item.disk .icon circle[data-v-56af1b6e], .detail-storage-item.disk .icon polygon[data-v-56af1b6e] {\n  stroke: #1B2539;\n}\n.detail-storage-item.disk .storage-progress[data-v-56af1b6e] span {\n  background: #1B2539;\n}\n.detail-storage-item.images .icon path[data-v-56af1b6e], .detail-storage-item.images .icon line[data-v-56af1b6e], .detail-storage-item.images .icon polyline[data-v-56af1b6e], .detail-storage-item.images .icon rect[data-v-56af1b6e], .detail-storage-item.images .icon circle[data-v-56af1b6e], .detail-storage-item.images .icon polygon[data-v-56af1b6e] {\n  stroke: #9D66FE;\n}\n.detail-storage-item.images .storage-progress[data-v-56af1b6e] span {\n  background: #9D66FE;\n}\n.detail-storage-item.videos .icon path[data-v-56af1b6e], .detail-storage-item.videos .icon line[data-v-56af1b6e], .detail-storage-item.videos .icon polyline[data-v-56af1b6e], .detail-storage-item.videos .icon rect[data-v-56af1b6e], .detail-storage-item.videos .icon circle[data-v-56af1b6e], .detail-storage-item.videos .icon polygon[data-v-56af1b6e] {\n  stroke: #FFBD2D;\n}\n.detail-storage-item.videos .storage-progress[data-v-56af1b6e] span {\n  background: #FFBD2D;\n}\n.detail-storage-item.audios .icon path[data-v-56af1b6e], .detail-storage-item.audios .icon line[data-v-56af1b6e], .detail-storage-item.audios .icon polyline[data-v-56af1b6e], .detail-storage-item.audios .icon rect[data-v-56af1b6e], .detail-storage-item.audios .icon circle[data-v-56af1b6e], .detail-storage-item.audios .icon polygon[data-v-56af1b6e] {\n  stroke: #FE66A1;\n}\n.detail-storage-item.audios .storage-progress[data-v-56af1b6e] span {\n  background: #FE66A1;\n}\n.detail-storage-item.documents .icon path[data-v-56af1b6e], .detail-storage-item.documents .icon line[data-v-56af1b6e], .detail-storage-item.documents .icon polyline[data-v-56af1b6e], .detail-storage-item.documents .icon rect[data-v-56af1b6e], .detail-storage-item.documents .icon circle[data-v-56af1b6e], .detail-storage-item.documents .icon polygon[data-v-56af1b6e] {\n  stroke: #FE6057;\n}\n.detail-storage-item.documents .storage-progress[data-v-56af1b6e] span {\n  background: #FE6057;\n}\n.detail-storage-item.others .icon path[data-v-56af1b6e], .detail-storage-item.others .icon line[data-v-56af1b6e], .detail-storage-item.others .icon polyline[data-v-56af1b6e], .detail-storage-item.others .icon rect[data-v-56af1b6e], .detail-storage-item.others .icon circle[data-v-56af1b6e], .detail-storage-item.others .icon polygon[data-v-56af1b6e] {\n  stroke: #1B2539;\n}\n.detail-storage-item.others .storage-progress[data-v-56af1b6e] span {\n  background: #1B2539;\n}\n.header-storage-item[data-v-56af1b6e] {\n  display: flex;\n  align-items: flex-start;\n  margin-bottom: 10px;\n}\n.header-storage-item .icon[data-v-56af1b6e] {\n  width: 35px;\n}\n.header-storage-item .type[data-v-56af1b6e] {\n  font-size: 0.9375em;\n  color: #1B2539;\n}\n.header-storage-item .total-size[data-v-56af1b6e] {\n  font-size: 0.625em;\n  display: block;\n  color: rgba(27, 37, 57, 0.7);\n}\n@media (prefers-color-scheme: dark) {\n.header-storage-item .type[data-v-56af1b6e] {\n    color: #bec6cf;\n}\n.header-storage-item .total-size[data-v-56af1b6e] {\n    color: #7d858c;\n}\n.detail-storage-item.others .icon path[data-v-56af1b6e], .detail-storage-item.others .icon line[data-v-56af1b6e], .detail-storage-item.others .icon polyline[data-v-56af1b6e], .detail-storage-item.others .icon rect[data-v-56af1b6e], .detail-storage-item.others .icon circle[data-v-56af1b6e], .detail-storage-item.others .icon polygon[data-v-56af1b6e], .detail-storage-item.disk .icon path[data-v-56af1b6e], .detail-storage-item.disk .icon line[data-v-56af1b6e], .detail-storage-item.disk .icon polyline[data-v-56af1b6e], .detail-storage-item.disk .icon rect[data-v-56af1b6e], .detail-storage-item.disk .icon circle[data-v-56af1b6e], .detail-storage-item.disk .icon polygon[data-v-56af1b6e] {\n    stroke: #41454e;\n}\n.detail-storage-item.others .storage-progress[data-v-56af1b6e] span, .detail-storage-item.disk .storage-progress[data-v-56af1b6e] span {\n    background: #41454e;\n}\n}\n",""])},29:function(a,t,e){"use strict";var n=e(69),i=e(1),o={name:"StorageItemDetail",props:["percentage","title","type","used"],components:{HardDriveIcon:i.v,FileTextIcon:i.r,ProgressBar:n.a,MusicIcon:i.H,VideoIcon:i.W,ImageIcon:i.x,FileIcon:i.q}},r=(e(253),e(0)),d=Object(r.a)(o,(function(){var a=this,t=a.$createElement,e=a._self._c||t;return e("article",{staticClass:"detail-storage-item",class:a.type},[e("div",{staticClass:"header-storage-item"},[e("div",{staticClass:"icon"},["images"==a.type?e("image-icon",{attrs:{size:"23"}}):a._e(),a._v(" "),"videos"==a.type?e("video-icon",{attrs:{size:"23"}}):a._e(),a._v(" "),"audios"==a.type?e("music-icon",{attrs:{size:"23"}}):a._e(),a._v(" "),"documents"==a.type?e("file-text-icon",{attrs:{size:"23"}}):a._e(),a._v(" "),"others"==a.type?e("file-icon",{attrs:{size:"23"}}):a._e(),a._v(" "),"disk"==a.type?e("hard-drive-icon",{attrs:{size:"23"}}):a._e()],1),a._v(" "),e("div",{staticClass:"title"},[e("b",{staticClass:"type"},[a._v(a._s(a.title))]),a._v(" "),e("span",{staticClass:"total-size"},[a._v(a._s(a.used))])])]),a._v(" "),e("ProgressBar",{staticClass:"storage-progress",attrs:{progress:a.percentage}})],1)}),[],!1,null,"56af1b6e",null);t.a=d.exports},329:function(a,t,e){"use strict";var n=e(105);e.n(n).a},330:function(a,t,e){(a.exports=e(5)(!1)).push([a.i,'.form[data-v-3614d452] {\n  max-width: 700px;\n}\n.form.inline-form[data-v-3614d452] {\n  display: flex;\n  position: relative;\n  justify-content: center;\n  margin: 0 auto;\n}\n.form.inline-form .input-wrapper[data-v-3614d452] {\n  position: relative;\n}\n.form.inline-form .input-wrapper .error-message[data-v-3614d452] {\n  position: absolute;\n  left: 0;\n  bottom: -25px;\n}\n.form.block-form .wrapper-inline[data-v-3614d452] {\n  display: flex;\n  margin: 0 -15px;\n}\n.form.block-form .wrapper-inline .block-wrapper[data-v-3614d452] {\n  width: 100%;\n  padding: 0 15px;\n}\n.form.block-form .block-wrapper[data-v-3614d452] {\n  margin-bottom: 32px;\n}\n.form.block-form .block-wrapper label[data-v-3614d452] {\n  font-size: 0.875em;\n  color: rgba(27, 37, 57, 0.8);\n  font-weight: 700;\n  display: block;\n  margin-bottom: 7px;\n  text-align: left;\n}\n.form.block-form .block-wrapper[data-v-3614d452]:last-child {\n  margin-bottom: 0;\n}\n.form.block-form .button[data-v-3614d452] {\n  margin-top: 50px;\n}\n.form .inline-wrapper[data-v-3614d452] {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n}\n.form .inline-wrapper .switch-label .input-help[data-v-3614d452] {\n  padding-top: 0;\n}\n.form .inline-wrapper .switch-label .input-label[data-v-3614d452] {\n  font-weight: 700;\n  color: #1B2539;\n  font-size: 1em;\n  margin-bottom: 5px;\n}\n.form .input-help[data-v-3614d452] {\n  font-size: 0.75em;\n  color: rgba(27, 37, 57, 0.7);\n  line-height: 1.35;\n  padding-top: 10px;\n  display: block;\n}\n.single-line-form[data-v-3614d452] {\n  display: flex;\n}\n.single-line-form .submit-button[data-v-3614d452] {\n  margin-left: 20px;\n}\n.error-message[data-v-3614d452] {\n  font-size: 0.875em;\n  color: #fd397a;\n  padding-top: 5px;\n  display: block;\n  text-align: left;\n}\ntextarea[data-v-3614d452] {\n  width: 100%;\n}\ntextarea[data-v-3614d452],\ninput[type="password"][data-v-3614d452],\ninput[type="text"][data-v-3614d452],\ninput[type="number"][data-v-3614d452],\ninput[type="email"][data-v-3614d452] {\n  border: 1px solid transparent;\n  transition: 150ms all ease;\n  font-size: 1em;\n  border-radius: 8px;\n  padding: 13px 20px;\n  -webkit-appearance: none;\n     -moz-appearance: none;\n          appearance: none;\n  font-weight: 700;\n  outline: 0;\n  width: 100%;\n  box-shadow: 0 1px 5px rgba(0, 0, 0, 0.12);\n}\ntextarea.is-error[data-v-3614d452],\ninput[type="password"].is-error[data-v-3614d452],\ninput[type="text"].is-error[data-v-3614d452],\ninput[type="number"].is-error[data-v-3614d452],\ninput[type="email"].is-error[data-v-3614d452] {\n  border-color: #fd397a;\n  box-shadow: 0 1px 5px rgba(253, 57, 122, 0.3);\n}\ntextarea[data-v-3614d452]::-webkit-input-placeholder, input[type="password"][data-v-3614d452]::-webkit-input-placeholder, input[type="text"][data-v-3614d452]::-webkit-input-placeholder, input[type="number"][data-v-3614d452]::-webkit-input-placeholder, input[type="email"][data-v-3614d452]::-webkit-input-placeholder {\n  color: rgba(27, 37, 57, 0.5);\n  font-size: 0.9375em;\n}\ntextarea[data-v-3614d452]::-moz-placeholder, input[type="password"][data-v-3614d452]::-moz-placeholder, input[type="text"][data-v-3614d452]::-moz-placeholder, input[type="number"][data-v-3614d452]::-moz-placeholder, input[type="email"][data-v-3614d452]::-moz-placeholder {\n  color: rgba(27, 37, 57, 0.5);\n  font-size: 0.9375em;\n}\ntextarea[data-v-3614d452]:-ms-input-placeholder, input[type="password"][data-v-3614d452]:-ms-input-placeholder, input[type="text"][data-v-3614d452]:-ms-input-placeholder, input[type="number"][data-v-3614d452]:-ms-input-placeholder, input[type="email"][data-v-3614d452]:-ms-input-placeholder {\n  color: rgba(27, 37, 57, 0.5);\n  font-size: 0.9375em;\n}\ntextarea[data-v-3614d452]::-ms-input-placeholder, input[type="password"][data-v-3614d452]::-ms-input-placeholder, input[type="text"][data-v-3614d452]::-ms-input-placeholder, input[type="number"][data-v-3614d452]::-ms-input-placeholder, input[type="email"][data-v-3614d452]::-ms-input-placeholder {\n  color: rgba(27, 37, 57, 0.5);\n  font-size: 0.9375em;\n}\ntextarea[data-v-3614d452]::placeholder,\ninput[type="password"][data-v-3614d452]::placeholder,\ninput[type="text"][data-v-3614d452]::placeholder,\ninput[type="number"][data-v-3614d452]::placeholder,\ninput[type="email"][data-v-3614d452]::placeholder {\n  color: rgba(27, 37, 57, 0.5);\n  font-size: 0.9375em;\n}\ntextarea[data-v-3614d452]:focus,\ninput[type="password"][data-v-3614d452]:focus,\ninput[type="text"][data-v-3614d452]:focus,\ninput[type="number"][data-v-3614d452]:focus,\ninput[type="email"][data-v-3614d452]:focus {\n  border-color: #00BC7E;\n  box-shadow: 0 1px 5px rgba(0, 188, 126, 0.3);\n}\ntextarea[disabled][data-v-3614d452],\ninput[type="password"][disabled][data-v-3614d452],\ninput[type="text"][disabled][data-v-3614d452],\ninput[type="number"][disabled][data-v-3614d452],\ninput[type="email"][disabled][data-v-3614d452] {\n  background: white;\n  color: rgba(27, 37, 57, 0.8);\n  -webkit-text-fill-color: rgba(27, 37, 57, 0.8);\n  opacity: 1;\n  cursor: not-allowed;\n}\n.additional-link[data-v-3614d452] {\n  font-size: 1em;\n  margin-top: 50px;\n  display: block;\n  color: #1B2539;\n}\n.additional-link b[data-v-3614d452], .additional-link a[data-v-3614d452] {\n  color: #00BC7E;\n  cursor: pointer;\n}\n.additional-link b[data-v-3614d452]:hover, .additional-link a[data-v-3614d452]:hover {\n  text-decoration: underline;\n}\n@media only screen and (max-width: 1024px) {\n.form[data-v-3614d452] {\n    max-width: 100%;\n}\n}\n@media only screen and (max-width: 960px) {\n.form .button[data-v-3614d452] {\n    margin-top: 20px;\n    width: 100%;\n    margin-left: 0;\n    margin-right: 0;\n}\n.form input[data-v-3614d452], .form textarea[data-v-3614d452] {\n    width: 100%;\n    min-width: 100%;\n}\n.form.block-form .block-wrapper[data-v-3614d452] {\n    display: block;\n}\n.form.block-form .block-wrapper label[data-v-3614d452] {\n    width: 100%;\n    padding-right: 0;\n    display: block;\n    margin-bottom: 7px;\n    text-align: left !important;\n    font-size: 0.875em;\n    padding-top: 0;\n}\n.form.block-form .button[data-v-3614d452] {\n    margin-top: 25px;\n    margin-left: 0;\n    margin-right: 0;\n}\n.form.inline-form[data-v-3614d452] {\n    display: block;\n}\n.form.inline-form .input-wrapper .error-message[data-v-3614d452] {\n    position: relative;\n    bottom: 0;\n}\n.form .button[data-v-3614d452] {\n    padding: 14px 32px;\n}\n.single-line-form[data-v-3614d452] {\n    display: block;\n}\n.single-line-form .submit-button[data-v-3614d452] {\n    margin-left: 0;\n    margin-top: 20px;\n    width: 100%;\n}\ntextarea[data-v-3614d452],\n  input[type="password"][data-v-3614d452],\n  input[type="number"][data-v-3614d452],\n  input[type="text"][data-v-3614d452],\n  input[type="email"][data-v-3614d452] {\n    padding: 14px 20px;\n}\n}\n@media only screen and (max-width: 690px) {\n.form.block-form .wrapper-inline[data-v-3614d452] {\n    display: block;\n}\n}\n@media (prefers-color-scheme: dark) {\n.form .input-help[data-v-3614d452] {\n    color: #7d858c;\n}\n.form.block-form .block-wrapper label[data-v-3614d452] {\n    color: #bec6cf;\n}\n.form .inline-wrapper .switch-label .input-label[data-v-3614d452] {\n    color: #bec6cf;\n}\ntextarea[data-v-3614d452],\n  input[type="password"][data-v-3614d452],\n  input[type="text"][data-v-3614d452],\n  input[type="number"][data-v-3614d452],\n  input[type="email"][data-v-3614d452] {\n    border-color: #1e2024;\n    background: #1e2024;\n    color: #bec6cf;\n}\ntextarea[data-v-3614d452]::-webkit-input-placeholder, input[type="password"][data-v-3614d452]::-webkit-input-placeholder, input[type="text"][data-v-3614d452]::-webkit-input-placeholder, input[type="number"][data-v-3614d452]::-webkit-input-placeholder, input[type="email"][data-v-3614d452]::-webkit-input-placeholder {\n    color: #7d858c;\n}\ntextarea[data-v-3614d452]::-moz-placeholder, input[type="password"][data-v-3614d452]::-moz-placeholder, input[type="text"][data-v-3614d452]::-moz-placeholder, input[type="number"][data-v-3614d452]::-moz-placeholder, input[type="email"][data-v-3614d452]::-moz-placeholder {\n    color: #7d858c;\n}\ntextarea[data-v-3614d452]:-ms-input-placeholder, input[type="password"][data-v-3614d452]:-ms-input-placeholder, input[type="text"][data-v-3614d452]:-ms-input-placeholder, input[type="number"][data-v-3614d452]:-ms-input-placeholder, input[type="email"][data-v-3614d452]:-ms-input-placeholder {\n    color: #7d858c;\n}\ntextarea[data-v-3614d452]::-ms-input-placeholder, input[type="password"][data-v-3614d452]::-ms-input-placeholder, input[type="text"][data-v-3614d452]::-ms-input-placeholder, input[type="number"][data-v-3614d452]::-ms-input-placeholder, input[type="email"][data-v-3614d452]::-ms-input-placeholder {\n    color: #7d858c;\n}\ntextarea[data-v-3614d452]::placeholder,\n  input[type="password"][data-v-3614d452]::placeholder,\n  input[type="text"][data-v-3614d452]::placeholder,\n  input[type="number"][data-v-3614d452]::placeholder,\n  input[type="email"][data-v-3614d452]::placeholder {\n    color: #7d858c;\n}\ntextarea[disabled][data-v-3614d452],\n  input[type="password"][disabled][data-v-3614d452],\n  input[type="text"][disabled][data-v-3614d452],\n  input[type="number"][disabled][data-v-3614d452],\n  input[type="email"][disabled][data-v-3614d452] {\n    background: #1e2024;\n    color: rgba(125, 133, 140, 0.8);\n    -webkit-text-fill-color: rgba(125, 133, 140, 0.8);\n}\n}\n.block-form[data-v-3614d452] {\n  max-width: 100%;\n}\n',""])},53:function(a,t,e){var n=e(228);"string"==typeof n&&(n=[[a.i,n,""]]);var i={hmr:!0,transform:void 0,insertInto:void 0};e(6)(n,i);n.locals&&(a.exports=n.locals)},54:function(a,t,e){var n=e(230);"string"==typeof n&&(n=[[a.i,n,""]]);var i={hmr:!0,transform:void 0,insertInto:void 0};e(6)(n,i);n.locals&&(a.exports=n.locals)},55:function(a,t,e){var n=e(232);"string"==typeof n&&(n=[[a.i,n,""]]);var i={hmr:!0,transform:void 0,insertInto:void 0};e(6)(n,i);n.locals&&(a.exports=n.locals)},551:function(a,t,e){"use strict";e.r(t);var n=e(8),i=e(29),o=e(16),r=e(24),d=e(14),s=e(13),p=e(11),l=e(25),c=e(15),m=e(12),u=e(10),b={name:"PlanSettings",props:["plan"],components:{ValidationProvider:n.ValidationProvider,ValidationObserver:n.ValidationObserver,StorageItemDetail:i.a,PageTabGroup:o.a,SwitchInput:r.a,SelectInput:d.a,ButtonBase:p.a,FormLabel:s.a,SetupBox:l.a,required:u.a,InfoBox:m.a,PageTab:c.a},data:function(){return{isLoading:!1,isSendingRequest:!1}},methods:{changeStatus:function(a){this.$updateText("/plans/"+this.$route.params.id+"/update","is_active",a)}}},v=(e(329),e(0)),f=Object(v.a)(b,(function(){var a=this,t=a.$createElement,e=a._self._c||t;return e("PageTab",[e("ValidationObserver",{ref:"personalInformation",staticClass:"form block-form form-fixed-width",attrs:{tag:"form"},scopedSlots:a._u([{key:"default",fn:function(t){t.invalid;return[e("PageTabGroup",[e("FormLabel",[a._v("\n                "+a._s(a.$t("admin_page_plans.form.title_details"))+"\n            ")]),a._v(" "),e("div",{staticClass:"block-wrapper"},[e("div",{staticClass:"input-wrapper"},[e("div",{staticClass:"inline-wrapper"},[e("div",{staticClass:"switch-label"},[e("label",{staticClass:"input-label"},[a._v(a._s(a.$t("admin_page_plans.form.status"))+":")]),a._v(" "),e("small",{staticClass:"input-help"},[a._v(a._s(a.$t("admin_page_plans.form.status_help")))])]),a._v(" "),e("SwitchInput",{staticClass:"switch",attrs:{state:a.plan.attributes.status},on:{input:a.changeStatus}})],1)])]),a._v(" "),e("div",{staticClass:"block-wrapper"},[e("label",[a._v(a._s(a.$t("admin_page_plans.form.name"))+":")]),a._v(" "),e("ValidationProvider",{staticClass:"input-wrapper",attrs:{tag:"div",mode:"passive",name:"Name",rules:"required"},scopedSlots:a._u([{key:"default",fn:function(t){var n=t.errors;return[e("input",{directives:[{name:"model",rawName:"v-model",value:a.plan.attributes.name,expression:"plan.attributes.name"}],class:{"is-error":n[0]},attrs:{placeholder:a.$t("admin_page_plans.form.name_plac"),type:"text"},domProps:{value:a.plan.attributes.name},on:{input:[function(t){t.target.composing||a.$set(a.plan.attributes,"name",t.target.value)},function(t){return a.$updateText("/plans/"+a.$route.params.id+"/update","name",a.plan.attributes.name)}]}}),a._v(" "),n[0]?e("span",{staticClass:"error-message"},[a._v(a._s(n[0]))]):a._e()]}}],null,!0)})],1),a._v(" "),e("div",{staticClass:"block-wrapper"},[e("label",[a._v(a._s(a.$t("admin_page_plans.form.description"))+":")]),a._v(" "),e("ValidationProvider",{staticClass:"input-wrapper",attrs:{tag:"div",mode:"passive",name:"Description"},scopedSlots:a._u([{key:"default",fn:function(t){var n=t.errors;return[e("textarea",{directives:[{name:"model",rawName:"v-model",value:a.plan.attributes.description,expression:"plan.attributes.description"}],class:{"is-error":n[0]},attrs:{placeholder:a.$t("admin_page_plans.form.description_plac")},domProps:{value:a.plan.attributes.description},on:{input:[function(t){t.target.composing||a.$set(a.plan.attributes,"description",t.target.value)},function(t){return a.$updateText("/plans/"+a.$route.params.id+"/update","description",a.plan.attributes.description)}]}}),a._v(" "),n[0]?e("span",{staticClass:"error-message"},[a._v(a._s(n[0]))]):a._e()]}}],null,!0)})],1),a._v(" "),e("div",{staticClass:"block-wrapper"},[e("label",[a._v(a._s(a.$t("admin_page_plans.form.storage"))+":")]),a._v(" "),e("ValidationProvider",{staticClass:"input-wrapper",attrs:{tag:"div",mode:"passive",name:"Storage capacity",rules:"required"},scopedSlots:a._u([{key:"default",fn:function(t){var n=t.errors;return[e("input",{directives:[{name:"model",rawName:"v-model",value:a.plan.attributes.capacity,expression:"plan.attributes.capacity"}],class:{"is-error":n[0]},attrs:{placeholder:a.$t("admin_page_plans.form.storage_plac"),type:"number",min:"1",max:"999999999"},domProps:{value:a.plan.attributes.capacity},on:{input:[function(t){t.target.composing||a.$set(a.plan.attributes,"capacity",t.target.value)},function(t){return a.$updateText("/plans/"+a.$route.params.id+"/update","capacity",a.plan.attributes.capacity)}]}}),a._v(" "),n[0]?e("span",{staticClass:"error-message"},[a._v(a._s(n[0]))]):a._e()]}}],null,!0)}),a._v(" "),e("small",{staticClass:"input-help"},[a._v("\n                    "+a._s(a.$t("admin_page_plans.form.storage_helper"))+"\n                ")])],1),a._v(" "),e("InfoBox",[e("p",[a._v(a._s(a.$t("admin_page_plans.disclaimer_edit_price")))])])],1)]}}])})],1)}),[],!1,null,"3614d452",null);t.default=f.exports},56:function(a,t,e){var n=e(234);"string"==typeof n&&(n=[[a.i,n,""]]);var i={hmr:!0,transform:void 0,insertInto:void 0};e(6)(n,i);n.locals&&(a.exports=n.locals)},61:function(a,t,e){var n=e(244);"string"==typeof n&&(n=[[a.i,n,""]]);var i={hmr:!0,transform:void 0,insertInto:void 0};e(6)(n,i);n.locals&&(a.exports=n.locals)},62:function(a,t,e){var n=e(246);"string"==typeof n&&(n=[[a.i,n,""]]);var i={hmr:!0,transform:void 0,insertInto:void 0};e(6)(n,i);n.locals&&(a.exports=n.locals)},66:function(a,t,e){var n=e(254);"string"==typeof n&&(n=[[a.i,n,""]]);var i={hmr:!0,transform:void 0,insertInto:void 0};e(6)(n,i);n.locals&&(a.exports=n.locals)},69:function(a,t,e){"use strict";var n={name:"ProgressBar",props:["progress"]},i=(e(243),e(0)),o=Object(i.a)(n,(function(){var a=this.$createElement,t=this._self._c||a;return t("div",{staticClass:"progress-bar"},[t("span",{style:{width:this.progress+"%"}})])}),[],!1,null,"9f98bf3e",null);t.a=o.exports}}]);