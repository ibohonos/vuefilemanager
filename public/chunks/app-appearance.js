(window.webpackJsonp=window.webpackJsonp||[]).push([[12],{"+Pqb":function(a,t,e){"use strict";var o={name:"ProgressBar",props:["progress"]},i=(e("NQIx"),e("KHd+")),r=Object(i.a)(o,(function(){var a=this.$createElement,t=this._self._c||a;return t("div",{staticClass:"progress-bar"},[t("span",{staticClass:"bg-theme",style:{width:this.progress+"%"}})])}),[],!1,null,"39123ae4",null);t.a=r.exports},"0a8W":function(a,t,e){(a.exports=e("I1BE")(!1)).push([a.i,".select[data-v-ff7bf0ec]{position:relative;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;width:100%}.select-search[data-v-ff7bf0ec]{background:#fff;position:sticky;top:0;padding:13px}.select-search .search-input[data-v-ff7bf0ec]{border:1px solid transparent;background:#f4f5f6;transition:all .15s ease;font-size:.875em;border-radius:8px;padding:13px 20px;-webkit-appearance:none;-moz-appearance:none;appearance:none;font-weight:700;outline:0;width:100%}.input-options[data-v-ff7bf0ec]{box-shadow:0 5px 15px rgba(0,0,0,.12);background:#fff;border-radius:8px;position:absolute;overflow:hidden;top:65px;left:0;right:0;z-index:9;max-height:295px;overflow-y:auto}.input-options .option-item[data-v-ff7bf0ec]{padding:13px 20px;display:block;cursor:pointer}.input-options .option-item[data-v-ff7bf0ec]:hover{color:#00bc7e;background:#f4f5f6}.input-options .option-item[data-v-ff7bf0ec]:last-child{border-bottom:none}.input-area[data-v-ff7bf0ec]{border:1px solid transparent;justify-content:space-between;box-shadow:0 1px 5px rgba(0,0,0,.12);align-items:center;border-radius:8px;padding:13px 20px;display:flex;outline:0;width:100%;cursor:pointer}.input-area[data-v-ff7bf0ec],.input-area .chevron[data-v-ff7bf0ec]{transition:all .15s ease}.input-area.is-active .chevron[data-v-ff7bf0ec]{transform:rotate(180deg)}.input-area.is-error[data-v-ff7bf0ec]{border-color:#fd397a;box-shadow:0 0 7px rgba(253,57,122,.3)}.option-icon[data-v-ff7bf0ec]{width:20px;display:inline-block;font-size:.625em}.option-icon svg[data-v-ff7bf0ec]{margin-top:-4px;vertical-align:middle}.option-icon svg circle[data-v-ff7bf0ec],.option-icon svg line[data-v-ff7bf0ec],.option-icon svg path[data-v-ff7bf0ec]{color:inherit}.option-value[data-v-ff7bf0ec]{font-size:.875em;font-weight:700;width:100%;vertical-align:middle}.option-value.placehoder[data-v-ff7bf0ec]{color:rgba(27,37,57,.5)}.slide-in-enter-active[data-v-ff7bf0ec]{transition:all .15s ease}.slide-in-enter[data-v-ff7bf0ec]{opacity:0;transform:translateY(-50px)}.dark .select-search[data-v-ff7bf0ec]{background:#1e2024}.dark .select-search .search-input[data-v-ff7bf0ec]{background:#151515}.dark .input-area[data-v-ff7bf0ec]{background:#1e2024;border-color:#1e2024}.dark .popup-wrapper .input-area[data-v-ff7bf0ec]{background:#25272c}.dark .input-options[data-v-ff7bf0ec]{background:#1e2024}.dark .input-options .option-item[data-v-ff7bf0ec]{border-bottom:none}.dark .input-options .option-item[data-v-ff7bf0ec]:hover{background:#2a2c32}.dark .input-options .option-item:hover .option-icon circle[data-v-ff7bf0ec],.dark .input-options .option-item:hover .option-icon path[data-v-ff7bf0ec]{color:inherit}.dark .input-options .option-item[data-v-ff7bf0ec]:last-child{border-bottom:none}.dark .option-value.placehoder[data-v-ff7bf0ec]{color:#7d858c}",""])},"1XC+":function(a,t,e){"use strict";e.r(t);var o=e("A5+z"),i=e("xnZf"),r=e("gahf"),s=e("4TWA"),n=e("D+dh"),d=e("eZ9V"),p=e("Nv84"),c=e("13Td"),l=e("qefO"),v=e("KnjL"),u=e("TJPC"),m=e("vDqi"),f=e.n(m),g={name:"AppAppearance",components:{ValidationObserver:o.ValidationObserver,ValidationProvider:o.ValidationProvider,StorageItemDetail:i.a,PageTabGroup:r.a,SelectInput:s.a,ImageInput:n.a,ButtonBase:p.a,FormLabel:d.a,SetupBox:c.a,required:u.a,PageTab:l.a,InfoBox:v.a},data:function(){return{isLoading:!0,app:void 0}},mounted:function(){var a=this;f.a.get("/api/admin/settings",{params:{column:"app_title|app_description|app_logo|app_favicon|app_logo_horizontal|app_color|app_og_image|app_touch_icon"}}).then((function(t){a.app={logo_horizontal:t.data.app_logo_horizontal,description:t.data.app_description,favicon:t.data.app_favicon,title:t.data.app_title,color:t.data.app_color,logo:t.data.app_logo,og_image:t.data.app_og_image,touch_icon:t.data.app_touch_icon}})).finally((function(){a.isLoading=!1}))}},b=(e("FCY5"),e("KHd+")),h=Object(b.a)(g,(function(){var a=this,t=a.$createElement,e=a._self._c||t;return e("PageTab",{staticClass:"form-fixed-width",attrs:{"is-loading":a.isLoading}},[a.app?e("PageTabGroup",[e("div",{staticClass:"form block-form"},[e("FormLabel",[a._v(a._s(a.$t("admin_settings.appearance.section_general")))]),a._v(" "),e("div",{staticClass:"block-wrapper"},[e("label",[a._v(a._s(a.$t("admin_settings.appearance.title"))+":")]),a._v(" "),e("ValidationProvider",{staticClass:"input-wrapper",attrs:{tag:"div",mode:"passive",name:"App Title",rules:"required"},scopedSlots:a._u([{key:"default",fn:function(t){var o=t.errors;return[e("input",{directives:[{name:"model",rawName:"v-model",value:a.app.title,expression:"app.title"}],staticClass:"focus-border-theme",class:{"is-error":o[0]},attrs:{placeholder:a.$t("admin_settings.appearance.title_plac"),type:"text"},domProps:{value:a.app.title},on:{input:[function(t){t.target.composing||a.$set(a.app,"title",t.target.value)},function(t){return a.$updateText("/admin/settings","app_title",a.app.title)}]}}),a._v(" "),o[0]?e("span",{staticClass:"error-message"},[a._v(a._s(o[0]))]):a._e()]}}],null,!1,1189024011)})],1),a._v(" "),e("div",{staticClass:"block-wrapper"},[e("label",[a._v(a._s(a.$t("admin_settings.appearance.description"))+":")]),a._v(" "),e("ValidationProvider",{staticClass:"input-wrapper",attrs:{tag:"div",mode:"passive",name:"App Description",rules:"required"},scopedSlots:a._u([{key:"default",fn:function(t){var o=t.errors;return[e("input",{directives:[{name:"model",rawName:"v-model",value:a.app.description,expression:"app.description"}],staticClass:"focus-border-theme",class:{"is-error":o[0]},attrs:{placeholder:a.$t("admin_settings.appearance.description_plac"),type:"text"},domProps:{value:a.app.description},on:{input:[function(t){t.target.composing||a.$set(a.app,"description",t.target.value)},function(t){return a.$updateText("/admin/settings","app_description",a.app.description)}]}}),a._v(" "),o[0]?e("span",{staticClass:"error-message"},[a._v(a._s(o[0]))]):a._e()]}}],null,!1,735436589)})],1),a._v(" "),e("FormLabel",{staticClass:"mt-70"},[a._v(a._s(a.$t("admin_settings.appearance.section_appearance")))]),a._v(" "),e("div",{staticClass:"block-wrapper"},[e("ValidationProvider",{staticClass:"input-wrapper",attrs:{tag:"div",mode:"passive",name:"App Title",rules:"required"},scopedSlots:a._u([{key:"default",fn:function(t){var o=t.errors;return[e("div",{staticClass:"inline-wrapper"},[e("div",{staticClass:"switch-label"},[e("label",{staticClass:"input-label"},[a._v(a._s(a.$t("color_theme"))+":")]),a._v(" "),e("small",{staticClass:"input-help"},[a._v(a._s(a.$t("color_theme_description")))]),a._v(" "),o[0]?e("span",{staticClass:"error-message"},[a._v(a._s(o[0]))]):a._e()]),a._v(" "),e("input",{directives:[{name:"model",rawName:"v-model",value:a.app.color,expression:"app.color"}],staticClass:"focus-border-theme",class:{"is-error":o[0]},attrs:{placeholder:a.$t("admin_settings.appearance.title_plac"),type:"color"},domProps:{value:a.app.color},on:{input:[function(t){t.target.composing||a.$set(a.app,"color",t.target.value)},function(t){return a.$updateText("/admin/settings","app_color",a.app.color)}]}})])]}}],null,!1,970686563)})],1),a._v(" "),e("div",{staticClass:"block-wrapper"},[e("label",[a._v(a._s(a.$t("admin_settings.appearance.logo"))+":")]),a._v(" "),e("ValidationProvider",{staticClass:"input-wrapper",attrs:{tag:"div",mode:"passive",name:"App Logo"},scopedSlots:a._u([{key:"default",fn:function(t){var o=t.errors;return[e("ImageInput",{attrs:{image:a.$getImage(a.app.logo),error:o[0]},on:{input:function(t){return a.$updateImage("/admin/settings","app_logo",a.app.logo)}},model:{value:a.app.logo,callback:function(t){a.$set(a.app,"logo",t)},expression:"app.logo"}})]}}],null,!1,1322801077)})],1),a._v(" "),e("div",{staticClass:"block-wrapper"},[e("label",[a._v(a._s(a.$t("admin_settings.appearance.logo_horizontal"))+":")]),a._v(" "),e("ValidationProvider",{staticClass:"input-wrapper",attrs:{tag:"div",mode:"passive",name:"App Logo Horizontal"},scopedSlots:a._u([{key:"default",fn:function(t){var o=t.errors;return[e("ImageInput",{attrs:{image:a.$getImage(a.app.logo_horizontal),error:o[0]},on:{input:function(t){return a.$updateImage("/admin/settings","app_logo_horizontal",a.app.logo_horizontal)}},model:{value:a.app.logo_horizontal,callback:function(t){a.$set(a.app,"logo_horizontal",t)},expression:"app.logo_horizontal"}})]}}],null,!1,1123020821)})],1),a._v(" "),e("div",{staticClass:"block-wrapper"},[e("label",[a._v(a._s(a.$t("admin_settings.appearance.favicon"))+":")]),a._v(" "),e("ValidationProvider",{staticClass:"input-wrapper",attrs:{tag:"div",mode:"passive",name:"App Favicon"},scopedSlots:a._u([{key:"default",fn:function(t){var o=t.errors;return[e("ImageInput",{attrs:{image:a.$getImage(a.app.favicon),error:o[0]},on:{input:function(t){return a.$updateImage("/admin/settings","app_favicon",a.app.favicon)}},model:{value:a.app.favicon,callback:function(t){a.$set(a.app,"favicon",t)},expression:"app.favicon"}})]}}],null,!1,906519509)})],1),a._v(" "),e("div",{staticClass:"block-wrapper"},[e("label",[a._v(a._s(a.$t("og_image"))+":")]),a._v(" "),e("ValidationProvider",{staticClass:"input-wrapper",attrs:{tag:"div",mode:"passive",name:"App Favicon"},scopedSlots:a._u([{key:"default",fn:function(t){var o=t.errors;return[e("ImageInput",{attrs:{image:a.$getImage(a.app.og_image),error:o[0]},on:{input:function(t){return a.$updateImage("/admin/settings","app_og_image",a.app.og_image)}},model:{value:a.app.og_image,callback:function(t){a.$set(a.app,"og_image",t)},expression:"app.og_image"}}),a._v(" "),e("small",{staticClass:"input-help"},[a._v(a._s(a.$t("og_image_description")))])]}}],null,!1,1631227684)})],1),a._v(" "),e("div",{staticClass:"block-wrapper"},[e("label",[a._v(a._s(a.$t("app_touch_icon"))+":")]),a._v(" "),e("ValidationProvider",{staticClass:"input-wrapper",attrs:{tag:"div",mode:"passive",name:"App Favicon"},scopedSlots:a._u([{key:"default",fn:function(t){var o=t.errors;return[e("ImageInput",{attrs:{image:a.$getImage(a.app.touch_icon),error:o[0]},on:{input:function(t){return a.$updateImage("/admin/settings","app_touch_icon",a.app.touch_icon)}},model:{value:a.app.touch_icon,callback:function(t){a.$set(a.app,"touch_icon",t)},expression:"app.touch_icon"}}),a._v(" "),e("small",{staticClass:"input-help"},[a._v(a._s(a.$t("app_touch_icon_description")))])]}}],null,!1,1682563195)})],1)],1)]):a._e()],1)}),[],!1,null,"0d838c33",null);t.default=h.exports},"4TWA":function(a,t,e){"use strict";var o=e("CjXH"),i=e("LvDl"),r={name:"SelectInput",props:["placeholder","options","isError","default"],components:{Edit2Icon:o.u,UserIcon:o.nb,ChevronDownIcon:o.g},watch:{query:Object(i.debounce)((function(a){this.searchedResults=Object(i.omitBy)(this.options,(function(t){return!t.label.toLowerCase().includes(a.toLowerCase())}))}),200)},computed:{isSearching:function(){return this.searchedResults&&""!==this.query},optionList:function(){return this.isSearching?this.searchedResults:this.options}},data:function(){return{searchedResults:void 0,selected:void 0,isOpen:!1,query:""}},methods:{selectOption:function(a){this.$emit("input",a.value),this.selected=a,this.isOpen=!1},openMenu:function(){var a=this;this.isOpen=!this.isOpen,this.isOpen&&this.$nextTick((function(){return a.$refs.search.focus()}))}},created:function(){var a=this;this.default&&(this.selected=this.options.find((function(t){return t.value===a.default})))}},s=(e("zmzx"),e("KHd+")),n=Object(s.a)(r,(function(){var a=this,t=a.$createElement,e=a._self._c||t;return e("div",{staticClass:"select"},[e("div",{staticClass:"input-area",class:{"is-active":a.isOpen,"is-error":a.isError},on:{click:a.openMenu}},[a.selected?e("div",{staticClass:"selected"},[a.selected.icon?e("div",{staticClass:"option-icon"},["user"===a.selected.icon?e("user-icon",{staticClass:"text-theme dark-text-theme",attrs:{size:"14"}}):a._e(),a._v(" "),"user-edit"===a.selected.icon?e("edit2-icon",{staticClass:"text-theme dark-text-theme",attrs:{size:"14"}}):a._e()],1):a._e(),a._v(" "),e("span",{staticClass:"option-value"},[a._v(a._s(a.selected.label))])]):a._e(),a._v(" "),a.selected?a._e():e("div",{staticClass:"not-selected"},[e("span",{staticClass:"option-value placehoder"},[a._v(a._s(a.placeholder))])]),a._v(" "),e("chevron-down-icon",{staticClass:"chevron",attrs:{size:"19"}})],1),a._v(" "),e("transition",{attrs:{name:"slide-in"}},[a.isOpen?e("div",{staticClass:"input-options"},[a.options.length>5?e("div",{staticClass:"select-search"},[e("input",{directives:[{name:"model",rawName:"v-model",value:a.query,expression:"query"}],ref:"search",staticClass:"search-input focus-border-theme",attrs:{type:"text",placeholder:a.$t("select_search_placeholder")},domProps:{value:a.query},on:{input:function(t){t.target.composing||(a.query=t.target.value)}}})]):a._e(),a._v(" "),e("ul",{staticClass:"option-list"},a._l(a.optionList,(function(t,o){return e("li",{key:o,staticClass:"option-item",on:{click:function(e){return a.selectOption(t)}}},[t.icon?e("div",{staticClass:"option-icon"},["user"===t.icon?e("user-icon",{attrs:{size:"14"}}):a._e(),a._v(" "),"user-edit"===t.icon?e("edit2-icon",{attrs:{size:"14"}}):a._e()],1):a._e(),a._v(" "),e("span",{staticClass:"option-value"},[a._v(a._s(t.label))])])})),0)]):a._e()])],1)}),[],!1,null,"ff7bf0ec",null);t.a=n.exports},"5/d3":function(a,t,e){"use strict";e("B+0d")},"B+0d":function(a,t,e){var o=e("FgVS");"string"==typeof o&&(o=[[a.i,o,""]]);var i={hmr:!0,transform:void 0,insertInto:void 0};e("aET+")(o,i);o.locals&&(a.exports=o.locals)},"D+dh":function(a,t,e){"use strict";var o=e("CjXH"),i={name:"ImageInput",props:["image","error"],components:{ImageIcon:o.H,XIcon:o.sb},data:function(){return{imagePreview:void 0}},computed:{isData:function(){return void 0!==this.imagePreview&&""!==this.imagePreview}},methods:{resetImage:function(){this.imagePreview=void 0,this.$emit("input",void 0)},showImagePreview:function(a){var t=this,e=a.target.files[0].name,o=e.substring(e.lastIndexOf(".")+1).toLowerCase();if(["png","jpg","jpeg","svg"].includes(o)){var i=a.target.files[0],r=new FileReader;r.onload=function(){return t.imagePreview=r.result},r.readAsDataURL(i),this.$emit("input",a.target.files[0])}else alert(this.$t("validation_errors.wrong_image"))}},created:function(){this.image&&(this.imagePreview=this.image)}},r=(e("5/d3"),e("KHd+")),s=Object(r.a)(i,(function(){var a=this,t=a.$createElement,e=a._self._c||t;return e("div",{staticClass:"dropzone",class:{"is-error":a.error}},[a.imagePreview?e("div",{staticClass:"reset-image",on:{click:a.resetImage}},[e("x-icon",{staticClass:"close-icon text-theme",attrs:{size:"14"}})],1):a._e(),a._v(" "),e("input",{ref:"file",staticClass:"dummy",attrs:{type:"file"},on:{change:function(t){return a.showImagePreview(t)}}}),a._v(" "),a.imagePreview?e("img",{ref:"image",staticClass:"image-preview",attrs:{src:a.imagePreview}}):a._e(),a._v(" "),e("div",{directives:[{name:"show",rawName:"v-show",value:!a.isData,expression:"! isData"}],staticClass:"dropzone-message"},[e("image-icon",{staticClass:"icon-upload text-theme",attrs:{size:"28"}}),a._v(" "),e("span",{staticClass:"dropzone-title"},[a._v("\n            "+a._s(a.$t("input_image.title"))+"\n        ")]),a._v(" "),e("span",{staticClass:"dropzone-description"},[a._v("\n            "+a._s(a.$t("input_image.supported"))+"\n        ")])],1)])}),[],!1,null,"2449d24c",null);t.a=s.exports},DdVM:function(a,t,e){(a.exports=e("I1BE")(!1)).push([a.i,".form[data-v-0d838c33]{max-width:700px}.form.inline-form[data-v-0d838c33]{display:flex;position:relative;justify-content:center;margin:0 auto}.form.inline-form .input-wrapper[data-v-0d838c33]{position:relative}.form.inline-form .input-wrapper .error-message[data-v-0d838c33]{position:absolute;left:0;bottom:-25px}.form.block-form .switch-wrapper[data-v-0d838c33]{padding-bottom:13px;margin-bottom:13px;border-bottom:1px solid #f4f5f6}.form.block-form .switch-wrapper[data-v-0d838c33]:last-child{padding-bottom:0;margin-bottom:0;border-bottom:none}.form.block-form .wrapper-inline[data-v-0d838c33]{display:flex;margin:0 -15px}.form.block-form .wrapper-inline .block-wrapper[data-v-0d838c33]{width:100%;padding:0 15px}.form.block-form .block-wrapper[data-v-0d838c33]{margin-bottom:32px}.form.block-form .block-wrapper label[data-v-0d838c33]{font-size:.875em;color:rgba(27,37,57,.8);font-weight:700;display:block;margin-bottom:7px;text-align:left}.form.block-form .block-wrapper[data-v-0d838c33]:last-child{margin-bottom:0}.form.block-form .button[data-v-0d838c33]{margin-top:50px}.form .inline-wrapper[data-v-0d838c33]{display:flex;align-items:center;justify-content:space-between}.form .inline-wrapper .switch-label .input-help[data-v-0d838c33]{padding-top:0}.form .inline-wrapper .switch-label .input-label[data-v-0d838c33]{font-weight:700;color:#1b2539;font-size:1em;margin-bottom:5px}.input-help[data-v-0d838c33]{font-size:.75em;color:rgba(27,37,57,.7);line-height:1.35;padding-top:10px;display:block}.single-line-form[data-v-0d838c33]{display:flex}.single-line-form .submit-button[data-v-0d838c33]{margin-left:20px}.error-message[data-v-0d838c33]{font-size:.875em;color:#fd397a;padding-top:5px;display:block;text-align:left}textarea[data-v-0d838c33]{width:100%}input[type=email].is-error[data-v-0d838c33],input[type=number].is-error[data-v-0d838c33],input[type=password].is-error[data-v-0d838c33],input[type=text].is-error[data-v-0d838c33],textarea.is-error[data-v-0d838c33]{border-color:#fd397a}input[type=email][data-v-0d838c33]::-moz-placeholder,input[type=number][data-v-0d838c33]::-moz-placeholder,input[type=password][data-v-0d838c33]::-moz-placeholder,input[type=text][data-v-0d838c33]::-moz-placeholder,textarea[data-v-0d838c33]::-moz-placeholder{color:rgba(27,37,57,.5);font-size:.9375em}input[type=email][data-v-0d838c33]:-ms-input-placeholder,input[type=number][data-v-0d838c33]:-ms-input-placeholder,input[type=password][data-v-0d838c33]:-ms-input-placeholder,input[type=text][data-v-0d838c33]:-ms-input-placeholder,textarea[data-v-0d838c33]:-ms-input-placeholder{color:rgba(27,37,57,.5);font-size:.9375em}input[type=email][data-v-0d838c33]::placeholder,input[type=number][data-v-0d838c33]::placeholder,input[type=password][data-v-0d838c33]::placeholder,input[type=text][data-v-0d838c33]::placeholder,textarea[data-v-0d838c33]::placeholder{color:rgba(27,37,57,.5);font-size:.9375em}input[type=email][disabled][data-v-0d838c33],input[type=number][disabled][data-v-0d838c33],input[type=password][disabled][data-v-0d838c33],input[type=text][disabled][data-v-0d838c33],textarea[disabled][data-v-0d838c33]{background:#fff;color:rgba(27,37,57,.8);-webkit-text-fill-color:rgba(27,37,57,.8);opacity:1;cursor:not-allowed}input[type=color][data-v-0d838c33]{width:38px!important;height:40px;border:none;outline:none;background:none;min-width:0!important}.additional-link[data-v-0d838c33]{font-size:1em;margin-top:50px;display:block}.additional-link a[data-v-0d838c33],.additional-link b[data-v-0d838c33]{cursor:pointer}.additional-link a[data-v-0d838c33]:hover,.additional-link b[data-v-0d838c33]:hover{text-decoration:underline}@media only screen and (max-width:1024px){.form[data-v-0d838c33]{max-width:100%}}@media only screen and (max-width:960px){.form .button[data-v-0d838c33]{margin-top:20px;width:100%;margin-left:0;margin-right:0}.form input[data-v-0d838c33],.form textarea[data-v-0d838c33]{width:100%;min-width:100%}.form.block-form .block-wrapper[data-v-0d838c33]{display:block}.form.block-form .block-wrapper label[data-v-0d838c33]{width:100%;padding-right:0;display:block;margin-bottom:7px;text-align:left!important;font-size:.875em;padding-top:0}.form.block-form .button[data-v-0d838c33]{margin-top:25px;margin-left:0;margin-right:0}.form.inline-form[data-v-0d838c33]{display:block}.form.inline-form .input-wrapper .error-message[data-v-0d838c33]{position:relative;bottom:0}.form .button[data-v-0d838c33]{padding:14px 32px}.single-line-form[data-v-0d838c33]{display:block}.single-line-form .submit-button[data-v-0d838c33]{margin-left:0;margin-top:20px;width:100%}input[type=email][data-v-0d838c33],input[type=number][data-v-0d838c33],input[type=password][data-v-0d838c33],input[type=text][data-v-0d838c33],textarea[data-v-0d838c33]{padding:14px 20px}}@media only screen and (max-width:690px){.form.block-form .wrapper-inline[data-v-0d838c33]{display:block}}.dark .form .input-help[data-v-0d838c33]{color:#7d858c}.dark .form.block-form .block-wrapper label[data-v-0d838c33]{color:#bec6cf}.dark .form.block-form .switch-wrapper[data-v-0d838c33]{border-color:hsla(0,0%,100%,.02)}.dark .form .inline-wrapper .switch-label .input-label[data-v-0d838c33]{color:#bec6cf}.dark input[type=email][data-v-0d838c33],.dark input[type=number][data-v-0d838c33],.dark input[type=password][data-v-0d838c33],.dark input[type=text][data-v-0d838c33],.dark textarea[data-v-0d838c33]{border-color:#1e2024;background:#1e2024;color:#bec6cf}.dark input[type=email][data-v-0d838c33]::-moz-placeholder,.dark input[type=number][data-v-0d838c33]::-moz-placeholder,.dark input[type=password][data-v-0d838c33]::-moz-placeholder,.dark input[type=text][data-v-0d838c33]::-moz-placeholder,.dark textarea[data-v-0d838c33]::-moz-placeholder{color:#7d858c}.dark input[type=email][data-v-0d838c33]:-ms-input-placeholder,.dark input[type=number][data-v-0d838c33]:-ms-input-placeholder,.dark input[type=password][data-v-0d838c33]:-ms-input-placeholder,.dark input[type=text][data-v-0d838c33]:-ms-input-placeholder,.dark textarea[data-v-0d838c33]:-ms-input-placeholder{color:#7d858c}.dark input[type=email][data-v-0d838c33]::placeholder,.dark input[type=number][data-v-0d838c33]::placeholder,.dark input[type=password][data-v-0d838c33]::placeholder,.dark input[type=text][data-v-0d838c33]::placeholder,.dark textarea[data-v-0d838c33]::placeholder{color:#7d858c}.dark input[type=email][disabled][data-v-0d838c33],.dark input[type=number][disabled][data-v-0d838c33],.dark input[type=password][disabled][data-v-0d838c33],.dark input[type=text][disabled][data-v-0d838c33],.dark textarea[disabled][data-v-0d838c33]{background:#1e2024;color:rgba(125,133,140,.8);-webkit-text-fill-color:rgba(125,133,140,.8)}.dark .popup-wrapper input[type=email][data-v-0d838c33],.dark .popup-wrapper input[type=number][data-v-0d838c33],.dark .popup-wrapper input[type=password][data-v-0d838c33],.dark .popup-wrapper input[type=text][data-v-0d838c33],.dark .popup-wrapper textarea[data-v-0d838c33]{background:#25272c}.block-form[data-v-0d838c33]{max-width:100%}",""])},FCY5:function(a,t,e){"use strict";e("O14t")},FgVS:function(a,t,e){(a.exports=e("I1BE")(!1)).push([a.i,".dropzone[data-v-2449d24c]{border:1px dashed #a1abc2;border-radius:8px;position:relative;text-align:center;display:flex;align-items:center;min-height:175px}.dropzone.is-error[data-v-2449d24c]{border:2px dashed rgba(253,57,122,.3)}.dropzone.is-error .dropzone-title[data-v-2449d24c]{color:#fd397a}.dropzone.is-error .icon-upload circle[data-v-2449d24c],.dropzone.is-error .icon-upload polyline[data-v-2449d24c],.dropzone.is-error .icon-upload rect[data-v-2449d24c]{stroke:#fd397a}.dropzone input[type=file][data-v-2449d24c]{opacity:0;position:absolute;top:0;left:0;right:0;bottom:0;z-index:1;width:100%;cursor:pointer}.dropzone .image-preview[data-v-2449d24c]{position:absolute;width:100%;height:100%;-o-object-fit:contain;object-fit:contain;left:0;padding:25px;display:block}.dropzone .image-preview.fit-image[data-v-2449d24c]{-o-object-fit:cover;object-fit:cover;border-radius:12px;overflow:hidden}.dropzone .dropzone-message[data-v-2449d24c]{padding:50px 0;width:100%}.dropzone .dropzone-message .icon-upload circle[data-v-2449d24c],.dropzone .dropzone-message .icon-upload polyline[data-v-2449d24c],.dropzone .dropzone-message .icon-upload rect[data-v-2449d24c]{color:inherit}.dropzone .dropzone-message .dropzone-title[data-v-2449d24c]{font-size:1em;font-weight:700;display:block}.dropzone .dropzone-message .dropzone-description[data-v-2449d24c]{color:rgba(27,37,57,.7);font-size:.75em}.dropzone .reset-image[data-v-2449d24c]{z-index:2;background:#fff;border-radius:50px;display:block;position:absolute;right:0;top:0;cursor:pointer;transform:translateY(-50%) translateX(50%);padding:0 4px;box-shadow:0 1px 5px rgba(0,0,0,.12)}.dropzone .reset-image .close-icon[data-v-2449d24c]{vertical-align:middle}.dropzone .reset-image .close-icon line path[data-v-2449d24c]{fill:#1b2539}.dark .dropzone[data-v-2449d24c]{border-color:hsla(0,0%,100%,.2)}.dark .dropzone .dropzone-message .icon-upload line[data-v-2449d24c],.dark .dropzone .dropzone-message .icon-upload path[data-v-2449d24c],.dark .dropzone .dropzone-message .icon-upload polyline[data-v-2449d24c]{color:inherit}.dark .dropzone .dropzone-message .dropzone-description[data-v-2449d24c]{color:#7d858c}",""])},IZWy:function(a,t,e){var o=e("aQc7");"string"==typeof o&&(o=[[a.i,o,""]]);var i={hmr:!0,transform:void 0,insertInto:void 0};e("aET+")(o,i);o.locals&&(a.exports=o.locals)},NQIx:function(a,t,e){"use strict";e("IZWy")},O14t:function(a,t,e){var o=e("DdVM");"string"==typeof o&&(o=[[a.i,o,""]]);var i={hmr:!0,transform:void 0,insertInto:void 0};e("aET+")(o,i);o.locals&&(a.exports=o.locals)},S7o3:function(a,t,e){"use strict";e("hwI8")},aQc7:function(a,t,e){(a.exports=e("I1BE")(!1)).push([a.i,".progress-bar[data-v-39123ae4]{width:100%;height:5px;background:#f4f5f6;margin-top:6px;border-radius:10px}.progress-bar span[data-v-39123ae4]{display:block;height:100%;border-radius:10px;max-width:100%}.dark .progress-bar[data-v-39123ae4]{background:#1e2024}@media only screen and (min-width:680px){.dark .progress-bar[data-v-39123ae4]{background:#1e2024}}",""])},hwI8:function(a,t,e){var o=e("n1yv");"string"==typeof o&&(o=[[a.i,o,""]]);var i={hmr:!0,transform:void 0,insertInto:void 0};e("aET+")(o,i);o.locals&&(a.exports=o.locals)},n1yv:function(a,t,e){(a.exports=e("I1BE")(!1)).push([a.i,".detail-storage-item[data-v-038f9062]{margin-bottom:35px}.detail-storage-item.disk .icon circle[data-v-038f9062],.detail-storage-item.disk .icon line[data-v-038f9062],.detail-storage-item.disk .icon path[data-v-038f9062],.detail-storage-item.disk .icon polygon[data-v-038f9062],.detail-storage-item.disk .icon polyline[data-v-038f9062],.detail-storage-item.disk .icon rect[data-v-038f9062]{stroke:#1b2539}.detail-storage-item.disk .storage-progress[data-v-038f9062] span{background:#1b2539}.detail-storage-item.images .icon circle[data-v-038f9062],.detail-storage-item.images .icon line[data-v-038f9062],.detail-storage-item.images .icon path[data-v-038f9062],.detail-storage-item.images .icon polygon[data-v-038f9062],.detail-storage-item.images .icon polyline[data-v-038f9062],.detail-storage-item.images .icon rect[data-v-038f9062]{stroke:#9d66fe}.detail-storage-item.images .storage-progress[data-v-038f9062] span{background:#9d66fe}.detail-storage-item.videos .icon circle[data-v-038f9062],.detail-storage-item.videos .icon line[data-v-038f9062],.detail-storage-item.videos .icon path[data-v-038f9062],.detail-storage-item.videos .icon polygon[data-v-038f9062],.detail-storage-item.videos .icon polyline[data-v-038f9062],.detail-storage-item.videos .icon rect[data-v-038f9062]{stroke:#ffbd2d}.detail-storage-item.videos .storage-progress[data-v-038f9062] span{background:#ffbd2d}.detail-storage-item.audios .icon circle[data-v-038f9062],.detail-storage-item.audios .icon line[data-v-038f9062],.detail-storage-item.audios .icon path[data-v-038f9062],.detail-storage-item.audios .icon polygon[data-v-038f9062],.detail-storage-item.audios .icon polyline[data-v-038f9062],.detail-storage-item.audios .icon rect[data-v-038f9062]{stroke:#fe66a1}.detail-storage-item.audios .storage-progress[data-v-038f9062] span{background:#fe66a1}.detail-storage-item.documents .icon circle[data-v-038f9062],.detail-storage-item.documents .icon line[data-v-038f9062],.detail-storage-item.documents .icon path[data-v-038f9062],.detail-storage-item.documents .icon polygon[data-v-038f9062],.detail-storage-item.documents .icon polyline[data-v-038f9062],.detail-storage-item.documents .icon rect[data-v-038f9062]{stroke:#fe6057}.detail-storage-item.documents .storage-progress[data-v-038f9062] span{background:#fe6057}.detail-storage-item.others .icon circle[data-v-038f9062],.detail-storage-item.others .icon line[data-v-038f9062],.detail-storage-item.others .icon path[data-v-038f9062],.detail-storage-item.others .icon polygon[data-v-038f9062],.detail-storage-item.others .icon polyline[data-v-038f9062],.detail-storage-item.others .icon rect[data-v-038f9062]{stroke:#1b2539}.detail-storage-item.others .storage-progress[data-v-038f9062] span{background:#1b2539}.header-storage-item[data-v-038f9062]{display:flex;align-items:flex-start;margin-bottom:10px}.header-storage-item .icon[data-v-038f9062]{width:35px}.header-storage-item .type[data-v-038f9062]{font-size:.9375em;color:#1b2539}.header-storage-item .total-size[data-v-038f9062]{font-size:.625em;display:block;color:rgba(27,37,57,.7)}.dark .header-storage-item .type[data-v-038f9062]{color:#bec6cf}.dark .header-storage-item .total-size[data-v-038f9062]{color:#7d858c}.dark .detail-storage-item.disk .icon circle[data-v-038f9062],.dark .detail-storage-item.disk .icon line[data-v-038f9062],.dark .detail-storage-item.disk .icon path[data-v-038f9062],.dark .detail-storage-item.disk .icon polygon[data-v-038f9062],.dark .detail-storage-item.disk .icon polyline[data-v-038f9062],.dark .detail-storage-item.disk .icon rect[data-v-038f9062],.dark .detail-storage-item.others .icon circle[data-v-038f9062],.dark .detail-storage-item.others .icon line[data-v-038f9062],.dark .detail-storage-item.others .icon path[data-v-038f9062],.dark .detail-storage-item.others .icon polygon[data-v-038f9062],.dark .detail-storage-item.others .icon polyline[data-v-038f9062],.dark .detail-storage-item.others .icon rect[data-v-038f9062]{stroke:#41454e}.dark .detail-storage-item.disk .storage-progress[data-v-038f9062] span,.dark .detail-storage-item.others .storage-progress[data-v-038f9062] span{background:#41454e}",""])},pI4u:function(a,t,e){var o=e("0a8W");"string"==typeof o&&(o=[[a.i,o,""]]);var i={hmr:!0,transform:void 0,insertInto:void 0};e("aET+")(o,i);o.locals&&(a.exports=o.locals)},xnZf:function(a,t,e){"use strict";var o=e("+Pqb"),i=e("CjXH"),r={name:"StorageItemDetail",props:["percentage","title","type","used"],components:{HardDriveIcon:i.F,FileTextIcon:i.z,ProgressBar:o.a,MusicIcon:i.U,VideoIcon:i.rb,ImageIcon:i.H,FileIcon:i.y}},s=(e("S7o3"),e("KHd+")),n=Object(s.a)(r,(function(){var a=this,t=a.$createElement,e=a._self._c||t;return e("article",{staticClass:"detail-storage-item",class:a.type},[e("div",{staticClass:"header-storage-item"},[e("div",{staticClass:"icon"},["images"==a.type?e("image-icon",{attrs:{size:"23"}}):a._e(),a._v(" "),"videos"==a.type?e("video-icon",{attrs:{size:"23"}}):a._e(),a._v(" "),"audios"==a.type?e("music-icon",{attrs:{size:"23"}}):a._e(),a._v(" "),"documents"==a.type?e("file-text-icon",{attrs:{size:"23"}}):a._e(),a._v(" "),"others"==a.type?e("file-icon",{attrs:{size:"23"}}):a._e(),a._v(" "),"disk"==a.type?e("hard-drive-icon",{attrs:{size:"23"}}):a._e()],1),a._v(" "),e("div",{staticClass:"title"},[e("b",{staticClass:"type"},[a._v(a._s(a.title))]),a._v(" "),e("span",{staticClass:"total-size"},[a._v(a._s(a.used))])])]),a._v(" "),e("ProgressBar",{staticClass:"storage-progress",attrs:{progress:a.percentage}})],1)}),[],!1,null,"038f9062",null);t.a=n.exports},zmzx:function(a,t,e){"use strict";e("pI4u")}}]);