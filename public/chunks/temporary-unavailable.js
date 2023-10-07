"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[6707],{309:(t,e,n)=>{n.d(e,{Z:()=>o});const r={name:"AuthContent",props:["visible","name"],data:function(){return{isVisible:!1}},created:function(){this.isVisible=this.visible}};const o=(0,n(1900).Z)(r,(function(){var t=this,e=t._self._c;return t.isVisible?e("div",{staticClass:"w-full max-w-xl text-center m-auto py-6"},[t._t("default")],2):t._e()}),[],!1,null,null,null).exports},8901:(t,e,n)=>{n.d(e,{Z:()=>o});const r={name:"AuthContentWrapper"};const o=(0,n(1900).Z)(r,(function(){return(0,this._self._c)("div",{staticClass:"flex px-2.5 md:px-6"},[this._t("default")],2)}),[],!1,null,null,null).exports},1191:(t,e,n)=>{n.d(e,{Z:()=>a});function r(t){return r="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},r(t)}function o(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function i(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?o(Object(n),!0).forEach((function(e){l(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function l(t,e,n){return(e=function(t){var e=function(t,e){if("object"!==r(t)||null===t)return t;var n=t[Symbol.toPrimitive];if(void 0!==n){var o=n.call(t,e||"default");if("object"!==r(o))return o;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===e?String:Number)(t)}(t,"string");return"symbol"===r(e)?e:String(e)}(e))in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}const s={name:"Headline",props:["description","title"],computed:i(i({},(0,n(629).Se)(["config","isDarkMode"])),{},{logoSrc:function(){return this.isDarkMode&&this.config.app_logo?this.config.app_logo_dark:this.config.app_logo}})};const a=(0,n(1900).Z)(s,(function(){var t=this,e=t._self._c;return e("div",{staticClass:"mb-14"},[t._t("default"),t._v(" "),t.$slots.default?t._e():e("div",[t.config.app_logo?e("img",{staticClass:"mx-auto mb-6 h-16 md:h-20 mb-10",attrs:{src:t.$getImage(t.logoSrc),alt:t.config.app_name}}):t._e(),t._v(" "),t.config.app_logo?t._e():e("b",{staticClass:"mb-10 block text-xl font-bold"},[t._v("\n            "+t._s(t.config.app_name)+"\n        ")])]),t._v(" "),e("h1",{staticClass:"mb-0.5 text-3xl font-extrabold md:text-4xl"},[t._v("\n        "+t._s(t.title)+"\n    ")]),t._v(" "),e("h2",{staticClass:"text-xl font-normal md:text-2xl"},[t._v("\n        "+t._s(t.description)+"\n    ")])],2)}),[],!1,null,null,null).exports},1359:(t,e,n)=>{n.r(e),n.d(e,{default:()=>s});var r=n(8901),o=n(309),i=n(1191);const l={name:"TemporaryUnavailable",components:{AuthContentWrapper:r.Z,AuthContent:o.Z,Headline:i.Z}};const s=(0,n(1900).Z)(l,(function(){var t=this,e=t._self._c;return e("AuthContentWrapper",{ref:"auth",staticClass:"h-screen"},[e("AuthContent",{attrs:{visible:!0}},[e("Headline",{attrs:{title:t.$t("temporary_unavailable"),description:t.$t("shared_link_temporary_unavailable")}}),t._v(" "),e("span",{staticClass:"additional-link"},[t._v(t._s(t.$t("page_registration.have_an_account"))+"\n            "),e("router-link",{staticClass:"text-theme font-bold",attrs:{to:{name:"SignIn"}}},[t._v("\n                "+t._s(t.$t("log_in"))+"\n            ")])],1)],1)],1)}),[],!1,null,null,null).exports}}]);