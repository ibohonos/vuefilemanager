(window.webpackJsonp=window.webpackJsonp||[]).push([[70],{"0g3J":function(a,e,t){"use strict";t("Jzyp")},"2Sb1":function(a,e,t){"use strict";var r={name:"PageHeader",props:["title","canBack"],components:{ChevronLeftIcon:t("CjXH").h}},i=(t("xdXa"),t("KHd+")),n=Object(i.a)(r,(function(){var a=this,e=a.$createElement,t=a._self._c||e;return t("div",{staticClass:"page-header"},[a.canBack?t("div",{staticClass:"go-back",on:{click:function(e){return a.$router.back()}}},[t("chevron-left-icon",{attrs:{size:"17"}})],1):a._e(),a._v(" "),t("div",{staticClass:"content"},[t("h1",{staticClass:"title"},[a._v(a._s(a.title))])])])}),[],!1,null,"52888952",null);e.a=n.exports},"4zU4":function(a,e,t){"use strict";t.r(e);var r=t("wz3J"),i=t("D62o"),n=t("2Sb1"),o=t("zTYo"),d=t("CjXH"),l=(t("vDqi"),{name:"UpgradePlan",components:{PlanPricingTables:r.a,MobileHeader:i.a,PageHeader:n.a,CloudIcon:d.k,Spinner:o.a},data:function(){return{isLoading:!0}},methods:{onLoadPricingTables:function(a){this.isLoading=a},onSelectTable:function(a){this.$store.commit("STORE_REQUESTED_PLAN",a)}},beforeMount:function(){var a=document.createElement("script");a.setAttribute("src","https://js.stripe.com/v3/"),document.head.appendChild(a)},mounted:function(){this.$store.dispatch("getAppData")}}),p=(t("0g3J"),t("KHd+")),b=Object(p.a)(l,(function(){var a=this,e=a.$createElement,t=a._self._c||e;return t("div",{attrs:{id:"single-page"}},[t("div",{directives:[{name:"show",rawName:"v-show",value:!a.isLoading,expression:"! isLoading"}],staticClass:"large-width center-page",attrs:{id:"page-content"}},[t("MobileHeader",{attrs:{title:a.$t(a.$router.currentRoute.meta.title)}}),a._v(" "),t("div",{staticClass:"content-page"},[t("div",{staticClass:"plan-title"},[t("cloud-icon",{staticClass:"title-icon text-theme",attrs:{size:"42"}}),a._v(" "),t("h1",[a._v(a._s(a.$t("page_pricing_tables.title")))]),a._v(" "),t("h2",[a._v(a._s(a.$t("page_pricing_tables.description")))])],1),a._v(" "),t("PlanPricingTables",{on:{load:a.onLoadPricingTables,"selected-plan":a.onSelectTable}})],1)],1),a._v(" "),a.isLoading?t("div",{attrs:{id:"loader"}},[t("Spinner")],1):a._e()])}),[],!1,null,"217ab3be",null);e.default=b.exports},D62o:function(a,e,t){"use strict";t("xCqy");var r=t("CjXH"),i={name:"MobileHeader",props:["title"],components:{ChevronLeftIcon:r.h,MenuIcon:r.P},methods:{goBack:function(){this.$router.back()}}},n=(t("lpU+"),t("KHd+")),o=Object(n.a)(i,(function(){var a=this,e=a.$createElement,t=a._self._c||e;return t("header",{staticClass:"mobile-header"},[t("div",{staticClass:"go-back",on:{click:a.goBack}},[t("chevron-left-icon",{staticClass:"icon",attrs:{size:"17"}})],1),a._v(" "),t("div",{staticClass:"location-name"},[a._v(a._s(a.title))]),a._v(" "),t("div",{staticClass:"mobile-menu",on:{click:function(e){return a.$showMobileMenu("user-navigation")}}},[t("menu-icon",{staticClass:"icon",attrs:{size:"17"}})],1)])}),[],!1,null,"0da6bf54",null);e.a=o.exports},EeBR:function(a,e,t){(a.exports=t("I1BE")(!1)).push([a.i,".page-header[data-v-52888952]{display:flex;align-items:center;background:#fff;z-index:9;width:100%;position:sticky;top:0;padding-top:20px;padding-bottom:20px}.page-header .title[data-v-52888952]{font-size:1.125em;font-weight:700;color:#1b2539}.page-header .go-back[data-v-52888952]{margin-right:10px;cursor:pointer}.page-header .go-back svg[data-v-52888952]{vertical-align:middle;margin-top:-4px}@media only screen and (max-width:960px){.page-header .title[data-v-52888952]{font-size:1.125em}}@media only screen and (max-width:690px){.page-header[data-v-52888952]{display:none}}.dark .page-header[data-v-52888952]{background:#151515}.dark .page-header .title[data-v-52888952]{color:#bec6cf}.dark .page-header .icon path[data-v-52888952]{fill:#00bc7e}",""])},Jzyp:function(a,e,t){var r=t("tUC/");"string"==typeof r&&(r=[[a.i,r,""]]);var i={hmr:!0,transform:void 0,insertInto:void 0};t("aET+")(r,i);r.locals&&(a.exports=r.locals)},KutZ:function(a,e,t){var r=t("EeBR");"string"==typeof r&&(r=[[a.i,r,""]]);var i={hmr:!0,transform:void 0,insertInto:void 0};t("aET+")(r,i);r.locals&&(a.exports=r.locals)},Qak4:function(a,e,t){var r=t("qESJ");"string"==typeof r&&(r=[[a.i,r,""]]);var i={hmr:!0,transform:void 0,insertInto:void 0};t("aET+")(r,i);r.locals&&(a.exports=r.locals)},kAYf:function(a,e,t){"use strict";t("r/a3")},"lpU+":function(a,e,t){"use strict";t("Qak4")},qESJ:function(a,e,t){(a.exports=t("I1BE")(!1)).push([a.i,".mobile-header[data-v-0da6bf54]{padding:10px 0;text-align:center;background:#fff;position:sticky;display:none;z-index:6;top:0}.mobile-header>div[data-v-0da6bf54]{flex-grow:1;align-self:center;white-space:nowrap}.mobile-header .go-back[data-v-0da6bf54]{text-align:left}.mobile-header .location-name[data-v-0da6bf54]{line-height:1;text-align:center;width:100%;vertical-align:middle;font-size:.9375em;color:#1b2539;font-weight:700;max-width:220px;overflow:hidden;text-overflow:ellipsis;display:inline-block}.mobile-header .mobile-menu[data-v-0da6bf54]{text-align:right}.mobile-header .icon[data-v-0da6bf54]{vertical-align:middle;margin-top:-4px}@media only screen and (max-width:690px){.mobile-header[data-v-0da6bf54]{display:flex;margin-bottom:15px}}.dark .mobile-header[data-v-0da6bf54]{background:#151515}.dark .mobile-header .location-name[data-v-0da6bf54]{color:#bec6cf}",""])},"r/a3":function(a,e,t){var r=t("r2dL");"string"==typeof r&&(r=[[a.i,r,""]]);var i={hmr:!0,transform:void 0,insertInto:void 0};t("aET+")(r,i);r.locals&&(a.exports=r.locals)},r2dL:function(a,e,t){(a.exports=t("I1BE")(!1)).push([a.i,".plan[data-v-7d924cde]{text-align:center;flex:0 0 33%;padding:0 25px;margin-bottom:45px}.plan .plan-wrapper[data-v-7d924cde]{box-shadow:0 7px 20px 5px rgba(26,36,55,.03);padding:25px;border-radius:8px;transition:all .3s ease}.plan .plan-wrapper[data-v-7d924cde]:hover{transform:translateY(-20px) scale(1.05);box-shadow:0 15px 25px 5px rgba(26,36,55,.08)}.plan .plan-header .icon circle[data-v-7d924cde],.plan .plan-header .icon line[data-v-7d924cde],.plan .plan-header .icon path[data-v-7d924cde],.plan .plan-header .icon polyline[data-v-7d924cde],.plan .plan-header .icon rect[data-v-7d924cde]{color:inherit}.plan .plan-header .title[data-v-7d924cde]{font-size:1.375em;font-weight:800}.plan .plan-header .description[data-v-7d924cde]{font-size:.875em;font-weight:600}.plan .plan-features[data-v-7d924cde]{margin:65px 0}.plan .plan-features .storage-size[data-v-7d924cde]{font-size:3em;font-weight:900;line-height:1.1}.plan .plan-features .storage-description[data-v-7d924cde]{display:block;font-size:.9375em;font-weight:800}.plan .plan-footer .sign-in-button[data-v-7d924cde]{width:100%;text-align:center}.plan .plan-footer .price[data-v-7d924cde]{font-size:1.125em;display:block;margin-bottom:20px}.plan .plan-footer .price .vat-disclaimer[data-v-7d924cde]{font-size:.6875em;color:#1b2539;display:block;font-weight:300;opacity:.45;margin-top:5px}.plans-wrapper[data-v-7d924cde]{display:flex;flex-wrap:wrap;margin:0 -25px;justify-content:center}@media only screen and (max-width:960px){.plans-wrapper[data-v-7d924cde]{display:block;margin:0}}.dark .plan .plan-wrapper[data-v-7d924cde]{background:#1e2024}.dark .plan .plan-header .title[data-v-7d924cde]{color:#bec6cf}.dark .plan .plan-header .description[data-v-7d924cde]{color:#7d858c}.dark .plan .plan-features .storage-description[data-v-7d924cde],.dark .plan .plan-features .storage-size[data-v-7d924cde]{color:#bec6cf}.dark .plan .plan-footer .sign-in-button[data-v-7d924cde]{background:rgba(0,188,126,.1)}.dark .plan .plan-footer .sign-in-button[data-v-7d924cde] .content{color:#00bc7e}.dark .plan .plan-footer .price .vat-disclaimer[data-v-7d924cde]{color:#bec6cf}",""])},"tUC/":function(a,e,t){(a.exports=t("I1BE")(!1)).push([a.i,".form[data-v-217ab3be]{max-width:700px}.form.inline-form[data-v-217ab3be]{display:flex;position:relative;justify-content:center;margin:0 auto}.form.inline-form .input-wrapper[data-v-217ab3be]{position:relative}.form.inline-form .input-wrapper .error-message[data-v-217ab3be]{position:absolute;left:0;bottom:-25px}.form.block-form .switch-wrapper[data-v-217ab3be]{padding-bottom:13px;margin-bottom:13px;border-bottom:1px solid #f4f5f6}.form.block-form .switch-wrapper[data-v-217ab3be]:last-child{padding-bottom:0;margin-bottom:0;border-bottom:none}.form.block-form .wrapper-inline[data-v-217ab3be]{display:flex;margin:0 -15px}.form.block-form .wrapper-inline .block-wrapper[data-v-217ab3be]{width:100%;padding:0 15px}.form.block-form .block-wrapper[data-v-217ab3be]{margin-bottom:32px}.form.block-form .block-wrapper label[data-v-217ab3be]{font-size:.875em;color:rgba(27,37,57,.8);font-weight:700;display:block;margin-bottom:7px;text-align:left}.form.block-form .block-wrapper[data-v-217ab3be]:last-child{margin-bottom:0}.form.block-form .button[data-v-217ab3be]{margin-top:50px}.form .inline-wrapper[data-v-217ab3be]{display:flex;align-items:center;justify-content:space-between}.form .inline-wrapper .switch-label .input-help[data-v-217ab3be]{padding-top:0}.form .inline-wrapper .switch-label .input-label[data-v-217ab3be]{font-weight:700;color:#1b2539;font-size:1em;margin-bottom:5px}.input-help[data-v-217ab3be]{font-size:.75em;color:rgba(27,37,57,.7);line-height:1.35;padding-top:10px;display:block}.single-line-form[data-v-217ab3be]{display:flex}.single-line-form .submit-button[data-v-217ab3be]{margin-left:20px}.error-message[data-v-217ab3be]{font-size:.875em;color:#fd397a;padding-top:5px;display:block;text-align:left}textarea[data-v-217ab3be]{width:100%}input[type=email].is-error[data-v-217ab3be],input[type=number].is-error[data-v-217ab3be],input[type=password].is-error[data-v-217ab3be],input[type=text].is-error[data-v-217ab3be],textarea.is-error[data-v-217ab3be]{border-color:#fd397a}input[type=email][data-v-217ab3be]::-moz-placeholder,input[type=number][data-v-217ab3be]::-moz-placeholder,input[type=password][data-v-217ab3be]::-moz-placeholder,input[type=text][data-v-217ab3be]::-moz-placeholder,textarea[data-v-217ab3be]::-moz-placeholder{color:rgba(27,37,57,.5);font-size:.9375em}input[type=email][data-v-217ab3be]:-ms-input-placeholder,input[type=number][data-v-217ab3be]:-ms-input-placeholder,input[type=password][data-v-217ab3be]:-ms-input-placeholder,input[type=text][data-v-217ab3be]:-ms-input-placeholder,textarea[data-v-217ab3be]:-ms-input-placeholder{color:rgba(27,37,57,.5);font-size:.9375em}input[type=email][data-v-217ab3be]::placeholder,input[type=number][data-v-217ab3be]::placeholder,input[type=password][data-v-217ab3be]::placeholder,input[type=text][data-v-217ab3be]::placeholder,textarea[data-v-217ab3be]::placeholder{color:rgba(27,37,57,.5);font-size:.9375em}input[type=email][disabled][data-v-217ab3be],input[type=number][disabled][data-v-217ab3be],input[type=password][disabled][data-v-217ab3be],input[type=text][disabled][data-v-217ab3be],textarea[disabled][data-v-217ab3be]{background:#fff;color:rgba(27,37,57,.8);-webkit-text-fill-color:rgba(27,37,57,.8);opacity:1;cursor:not-allowed}input[type=color][data-v-217ab3be]{width:38px!important;height:40px;border:none;outline:none;background:none;min-width:0!important}.additional-link[data-v-217ab3be]{font-size:1em;margin-top:50px;display:block}.additional-link a[data-v-217ab3be],.additional-link b[data-v-217ab3be]{cursor:pointer}.additional-link a[data-v-217ab3be]:hover,.additional-link b[data-v-217ab3be]:hover{text-decoration:underline}@media only screen and (max-width:1024px){.form[data-v-217ab3be]{max-width:100%}}@media only screen and (max-width:960px){.form .button[data-v-217ab3be]{margin-top:20px;width:100%;margin-left:0;margin-right:0}.form input[data-v-217ab3be],.form textarea[data-v-217ab3be]{width:100%;min-width:100%}.form.block-form .block-wrapper[data-v-217ab3be]{display:block}.form.block-form .block-wrapper label[data-v-217ab3be]{width:100%;padding-right:0;display:block;margin-bottom:7px;text-align:left!important;font-size:.875em;padding-top:0}.form.block-form .button[data-v-217ab3be]{margin-top:25px;margin-left:0;margin-right:0}.form.inline-form[data-v-217ab3be]{display:block}.form.inline-form .input-wrapper .error-message[data-v-217ab3be]{position:relative;bottom:0}.form .button[data-v-217ab3be]{padding:14px 32px}.single-line-form[data-v-217ab3be]{display:block}.single-line-form .submit-button[data-v-217ab3be]{margin-left:0;margin-top:20px;width:100%}input[type=email][data-v-217ab3be],input[type=number][data-v-217ab3be],input[type=password][data-v-217ab3be],input[type=text][data-v-217ab3be],textarea[data-v-217ab3be]{padding:14px 20px}}@media only screen and (max-width:690px){.form.block-form .wrapper-inline[data-v-217ab3be]{display:block}}.dark .form .input-help[data-v-217ab3be]{color:#7d858c}.dark .form.block-form .block-wrapper label[data-v-217ab3be]{color:#bec6cf}.dark .form.block-form .switch-wrapper[data-v-217ab3be]{border-color:hsla(0,0%,100%,.02)}.dark .form .inline-wrapper .switch-label .input-label[data-v-217ab3be]{color:#bec6cf}.dark input[type=email][data-v-217ab3be],.dark input[type=number][data-v-217ab3be],.dark input[type=password][data-v-217ab3be],.dark input[type=text][data-v-217ab3be],.dark textarea[data-v-217ab3be]{border-color:#1e2024;background:#1e2024;color:#bec6cf}.dark input[type=email][data-v-217ab3be]::-moz-placeholder,.dark input[type=number][data-v-217ab3be]::-moz-placeholder,.dark input[type=password][data-v-217ab3be]::-moz-placeholder,.dark input[type=text][data-v-217ab3be]::-moz-placeholder,.dark textarea[data-v-217ab3be]::-moz-placeholder{color:#7d858c}.dark input[type=email][data-v-217ab3be]:-ms-input-placeholder,.dark input[type=number][data-v-217ab3be]:-ms-input-placeholder,.dark input[type=password][data-v-217ab3be]:-ms-input-placeholder,.dark input[type=text][data-v-217ab3be]:-ms-input-placeholder,.dark textarea[data-v-217ab3be]:-ms-input-placeholder{color:#7d858c}.dark input[type=email][data-v-217ab3be]::placeholder,.dark input[type=number][data-v-217ab3be]::placeholder,.dark input[type=password][data-v-217ab3be]::placeholder,.dark input[type=text][data-v-217ab3be]::placeholder,.dark textarea[data-v-217ab3be]::placeholder{color:#7d858c}.dark input[type=email][disabled][data-v-217ab3be],.dark input[type=number][disabled][data-v-217ab3be],.dark input[type=password][disabled][data-v-217ab3be],.dark input[type=text][disabled][data-v-217ab3be],.dark textarea[disabled][data-v-217ab3be]{background:#1e2024;color:rgba(125,133,140,.8);-webkit-text-fill-color:rgba(125,133,140,.8)}.dark .popup-wrapper input[type=email][data-v-217ab3be],.dark .popup-wrapper input[type=number][data-v-217ab3be],.dark .popup-wrapper input[type=password][data-v-217ab3be],.dark .popup-wrapper input[type=text][data-v-217ab3be],.dark .popup-wrapper textarea[data-v-217ab3be]{background:#25272c}.plan-title[data-v-217ab3be]{text-align:center;max-width:600px;margin:0 auto 80px}.plan-title circle[data-v-217ab3be],.plan-title line[data-v-217ab3be],.plan-title path[data-v-217ab3be],.plan-title polyline[data-v-217ab3be],.plan-title rect[data-v-217ab3be]{color:inherit}.plan-title h1[data-v-217ab3be]{font-size:2.375em;font-weight:800;margin-bottom:5px}.plan-title h2[data-v-217ab3be]{font-size:1.25em;font-weight:500}.dark .plan-title h1[data-v-217ab3be]{color:#bec6cf}.dark .plan-title h2[data-v-217ab3be]{color:#7d858c}",""])},wz3J:function(a,e,t){"use strict";var r=t("Nv84"),i=t("CjXH"),n=t("L2JU"),o=t("vDqi"),d=t.n(o);function l(a,e){var t=Object.keys(a);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(a);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(a,e).enumerable}))),t.push.apply(t,r)}return t}function p(a,e,t){return e in a?Object.defineProperty(a,e,{value:t,enumerable:!0,configurable:!0,writable:!0}):a[e]=t,a}var b={name:"PlanPricingTables",components:{HardDriveIcon:i.F,ButtonBase:r.a},props:["customRoute"],data:function(){return{plans:void 0}},computed:function(a){for(var e=1;e<arguments.length;e++){var t=null!=arguments[e]?arguments[e]:{};e%2?l(Object(t),!0).forEach((function(e){p(a,e,t[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(a,Object.getOwnPropertyDescriptors(t)):l(Object(t)).forEach((function(e){Object.defineProperty(a,e,Object.getOwnPropertyDescriptor(t,e))}))}return a}({},Object(n.b)(["user"])),methods:{selectPlan:function(a){this.$emit("selected-plan",a);var e=this.customRoute?this.customRoute:"UpgradeBilling";this.$router.push({name:e})}},created:function(){var a=this;d.a.get("/api/pricing").then((function(e){a.plans=e.data.filter((function(e){return e.data.attributes.capacity>a.user.data.attributes.max_storage_amount})),a.$emit("load",!1)}))}},s=(t("kAYf"),t("KHd+")),c=Object(s.a)(b,(function(){var a=this,e=a.$createElement,t=a._self._c||e;return a.plans?t("div",{staticClass:"plans-wrapper"},a._l(a.plans,(function(e,r){return t("article",{key:r,staticClass:"plan"},[t("div",{staticClass:"plan-wrapper"},[t("header",{staticClass:"plan-header"},[t("div",{staticClass:"icon"},[t("hard-drive-icon",{staticClass:"text-theme",attrs:{size:"26"}})],1),a._v(" "),t("h1",{staticClass:"title"},[a._v(a._s(e.data.attributes.name))]),a._v(" "),t("h2",{staticClass:"description"},[a._v(a._s(e.data.attributes.description))])]),a._v(" "),t("section",{staticClass:"plan-features"},[t("b",{staticClass:"storage-size"},[a._v(a._s(e.data.attributes.capacity_formatted))]),a._v(" "),t("span",{staticClass:"storage-description"},[a._v(a._s(a.$t("page_pricing_tables.storage_capacity")))])]),a._v(" "),t("footer",{staticClass:"plan-footer"},[t("b",{staticClass:"price text-theme"},[a._v("\n                    "+a._s(e.data.attributes.price)+"/"+a._s(a.$t("global.monthly_ac"))+"\n                    "),e.data.attributes.tax_rates.length>0?t("small",{staticClass:"vat-disclaimer"},[a._v(a._s(a.$t("page_pricing_tables.vat_excluded")))]):a._e()]),a._v(" "),t("ButtonBase",{staticClass:"sign-in-button",attrs:{type:"submit","button-style":"secondary"},nativeOn:{click:function(t){return a.selectPlan(e)}}},[a._v("\n                    "+a._s(a.$t("global.get_it"))+"\n                ")])],1)])])})),0):a._e()}),[],!1,null,"7d924cde",null);e.a=c.exports},xdXa:function(a,e,t){"use strict";t("KutZ")}}]);