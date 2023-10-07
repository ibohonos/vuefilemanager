"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[4554],{6355:(t,e,a)=>{a.d(e,{Z:()=>n});var s=a(3645),r=a.n(s)()((function(t){return t[1]}));r.push([t.id,".info-box[data-v-783003cd]{background:#f4f5f6;border-radius:10px;margin-bottom:32px;padding:20px;text-align:left}.info-box.error[data-v-783003cd]{background:rgba(253,57,122,.1)}.info-box.error a[data-v-783003cd],.info-box.error p[data-v-783003cd]{color:#fd397a}.info-box.error a[data-v-783003cd]{text-decoration:underline}.info-box p[data-v-783003cd]{font-weight:600;line-height:1.6;word-break:break-word}.info-box p[data-v-783003cd],.info-box p>a[data-v-783003cd],.info-box p>b[data-v-783003cd]{font-size:15px}.info-box a[data-v-783003cd],.info-box b[data-v-783003cd],.info-box p>b[data-v-783003cd]{font-weight:700}.info-box a[data-v-783003cd]{font-size:.9375em;line-height:1.6}.info-box ul[data-v-783003cd]{margin-top:15px}.info-box ul[data-v-783003cd],.info-box ul li[data-v-783003cd],.info-box ul li a[data-v-783003cd]{display:block}@media only screen and (max-width:690px){.info-box[data-v-783003cd]{padding:15px}}.dark .info-box[data-v-783003cd]{background:#1e2024}.dark .info-box.error[data-v-783003cd]{background:rgba(253,57,122,.1)}.dark .info-box.error a[data-v-783003cd],.dark .info-box.error p[data-v-783003cd]{color:#fd397a}.dark .info-box.error a[data-v-783003cd]{text-decoration:underline}.dark .info-box p[data-v-783003cd],.dark .info-box ul li[data-v-783003cd]{color:#bec6cf}",""]);const n=r},1157:(t,e,a)=>{a.d(e,{Z:()=>r});const s={name:"AppInputText",props:["description","isLast","title","error"]};const r=(0,a(1900).Z)(s,(function(){var t=this,e=t._self._c;return e("div",{class:{"mb-6 sm:mb-7":!t.isLast}},[t.title?e("label",{staticClass:"mb-1.5 block text-sm font-bold text-gray-700 dark:text-gray-200"},[t._v("\n        "+t._s(t.title)+":\n    ")]):t._e(),t._v(" "),t._t("default"),t._v(" "),t.error?e("span",{staticClass:"pt-2 text-xs dark:text-rose-600 text-rose-600"},[t._v("\n        "+t._s(t.error)+"\n    ")]):t._e(),t._v(" "),t.description?e("small",{staticClass:"block pt-2 text-xs leading-4 dark:text-gray-500 text-gray-500",domProps:{innerHTML:t._s(t.description)}}):t._e()],2)}),[],!1,null,null,null).exports},7322:(t,e,a)=>{a.d(e,{Z:()=>n});var s=a(9101);const r={name:"CopyInput",props:["size","str"],components:{CheckIcon:s.nQG,CopyIcon:s.TIy,SendIcon:s.jE$},data:function(){return{isCopiedLink:!1,id:"link-input-"+Math.floor(1e7*Math.random())}},methods:{copyUrl:function(){var t=this,e=document.getElementById(this.id);e.select(),e.setSelectionRange(0,99999),document.execCommand("copy"),this.isCopiedLink=!0,setTimeout((function(){t.isCopiedLink=!1}),1e3)}}};const n=(0,a(1900).Z)(r,(function(){var t=this,e=t._self._c;return e("div",{staticClass:"relative flex items-center",on:{click:t.copyUrl}},[e("input",{ref:"sel",staticClass:"focus-border-theme input-dark !pr-10",attrs:{id:t.id,type:"text",readonly:""},domProps:{value:t.str}}),t._v(" "),e("div",{staticClass:"absolute right-0 px-4"},[t.isCopiedLink?t._e():e("copy-icon",{staticClass:"hover-text-theme vue-feather cursor-pointer",attrs:{size:"16"}}),t._v(" "),t.isCopiedLink?e("check-icon",{staticClass:"text-theme vue-feather cursor-pointer",attrs:{size:"16"}}):t._e()],1)])}),[],!1,null,null,null).exports},6345:(t,e,a)=>{a.d(e,{Z:()=>r});const s={name:"PageTab",props:["isLoading"],components:{Spinner:a(3592).Z}};const r=(0,a(1900).Z)(s,(function(){var t=this,e=t._self._c;return e("div",{staticClass:"page-tab"},[e("div",{directives:[{name:"show",rawName:"v-show",value:t.isLoading,expression:"isLoading"}],attrs:{id:"loader"}},[e("Spinner")],1),t._v(" "),t._t("default")],2)}),[],!1,null,null,null).exports},9244:(t,e,a)=>{a.d(e,{Z:()=>n});var s=a(9101);const r={name:"FormLabel",props:["icon"],components:{TrendingUpIcon:s.Zab,WifiIcon:s.kVp,ListIcon:s.DE2,MailIcon:s.bV6,InfoIcon:s.szr,DatabaseIcon:s.VHe,UsersIcon:s.oyc,CreditCardIcon:s.ciH,DollarSignIcon:s.bkH,SmartphoneIcon:s.BEV,HardDriveIcon:s.zvn,BarChartIcon:s.eJP,SettingsIcon:s.ewm,FileTextIcon:s.zPP,ShieldIcon:s.b7C,FrownIcon:s.eFi,Edit2Icon:s.me4,BellIcon:s.Dkj,KeyIcon:s._m8}};const n=(0,a(1900).Z)(r,(function(){var t=this,e=t._self._c;return e("div",{staticClass:"mb-8 flex items-center"},[t.icon?t._e():e("edit-2-icon",{staticClass:"vue-feather text-theme dark-text-theme mr-3",attrs:{size:"22"}}),t._v(" "),"frown"===t.icon?e("frown-icon",{staticClass:"vue-feather text-theme dark-text-theme mr-3",attrs:{size:"22"}}):t._e(),t._v(" "),"list"===t.icon?e("list-icon",{staticClass:"vue-feather text-theme dark-text-theme mr-3",attrs:{size:"22"}}):t._e(),t._v(" "),"info"===t.icon?e("info-icon",{staticClass:"vue-feather text-theme dark-text-theme mr-3",attrs:{size:"22"}}):t._e(),t._v(" "),"database"===t.icon?e("database-icon",{staticClass:"vue-feather text-theme dark-text-theme mr-3",attrs:{size:"22"}}):t._e(),t._v(" "),"file-text"===t.icon?e("file-text-icon",{staticClass:"vue-feather text-theme dark-text-theme mr-3",attrs:{size:"22"}}):t._e(),t._v(" "),"dollar"===t.icon?e("dollar-sign-icon",{staticClass:"vue-feather text-theme dark-text-theme mr-3",attrs:{size:"22"}}):t._e(),t._v(" "),"credit-card"===t.icon?e("credit-card-icon",{staticClass:"vue-feather text-theme dark-text-theme mr-3",attrs:{size:"22"}}):t._e(),t._v(" "),"bar-chart"===t.icon?e("bar-chart-icon",{staticClass:"vue-feather text-theme dark-text-theme mr-3",attrs:{size:"22"}}):t._e(),t._v(" "),"settings"===t.icon?e("settings-icon",{staticClass:"vue-feather text-theme dark-text-theme mr-3",attrs:{size:"22"}}):t._e(),t._v(" "),"hard-drive"===t.icon?e("hard-drive-icon",{staticClass:"vue-feather text-theme dark-text-theme mr-3",attrs:{size:"22"}}):t._e(),t._v(" "),"mail"===t.icon?e("mail-icon",{staticClass:"vue-feather text-theme dark-text-theme mr-3",attrs:{size:"22"}}):t._e(),t._v(" "),"smartphone"===t.icon?e("smartphone-icon",{staticClass:"vue-feather text-theme dark-text-theme mr-3",attrs:{size:"22"}}):t._e(),t._v(" "),"shield"===t.icon?e("shield-icon",{staticClass:"vue-feather text-theme dark-text-theme mr-3",attrs:{size:"22"}}):t._e(),t._v(" "),"bell"===t.icon?e("bell-icon",{staticClass:"vue-feather text-theme dark-text-theme mr-3",attrs:{size:"22"}}):t._e(),t._v(" "),"key"===t.icon?e("key-icon",{staticClass:"vue-feather text-theme dark-text-theme mr-3",attrs:{size:"22"}}):t._e(),t._v(" "),"users"===t.icon?e("users-icon",{staticClass:"vue-feather text-theme dark-text-theme mr-3",attrs:{size:"22"}}):t._e(),t._v(" "),"wifi"===t.icon?e("wifi-icon",{staticClass:"vue-feather text-theme dark-text-theme mr-3",attrs:{size:"22"}}):t._e(),t._v(" "),"trending-up"===t.icon?e("trending-up-icon",{staticClass:"vue-feather text-theme dark-text-theme mr-3",attrs:{size:"22"}}):t._e(),t._v(" "),e("b",{staticClass:"text-md font-bold dark:text-gray-200 sm:text-lg"},[t._t("default")],2)],1)}),[],!1,null,null,null).exports},3666:(t,e,a)=>{a.d(e,{Z:()=>c});const s={name:"InfoBox",props:["type"]};var r=a(3379),n=a.n(r),i=a(6355),o={insert:"head",singleton:!1};n()(i.Z,o);i.Z.locals;const c=(0,a(1900).Z)(s,(function(){var t=this;return(0,t._self._c)("div",{staticClass:"info-box",class:t.type},[t._t("default")],2)}),[],!1,null,"783003cd",null).exports},1487:(t,e,a)=>{a.r(e),a.d(e,{default:()=>_});var s=a(1157),r=a(7322),n=a(9101),i=a(9244),o=a(6345),c=a(3666),l=a(629),d=a(9669),v=a.n(d),u=a(4789);function b(t){return b="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},b(t)}function m(t,e){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(t);e&&(s=s.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),a.push.apply(a,s)}return a}function p(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{};e%2?m(Object(a),!0).forEach((function(e){x(t,e,a[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):m(Object(a)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(a,e))}))}return t}function x(t,e,a){return(e=function(t){var e=function(t,e){if("object"!==b(t)||null===t)return t;var a=t[Symbol.toPrimitive];if(void 0!==a){var s=a.call(t,e||"default");if("object"!==b(s))return s;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===e?String:Number)(t)}(t,"string");return"symbol"===b(e)?e:String(e)}(e))in t?Object.defineProperty(t,e,{value:a,enumerable:!0,configurable:!0,writable:!0}):t[e]=a,t}const f={name:"Server",components:{AppInputText:s.Z,CopyInput:r.Z,ButtonBase:u.Z,FormLabel:i.Z,InfoBox:c.Z,PageTab:o.Z,DownloadCloudIcon:n.NDL,CheckIcon:n.nQG,XIcon:n.b0D},computed:p(p({},(0,l.Se)(["config"])),{},{isCheckedAPI:function(){return void 0!==this.apiRunning}}),data:function(){return{isLoading:!0,ini:void 0,cron:void 0,modules:void 0,phpVersion:void 0,apiRunning:void 0,backups:void 0,logs:void 0,writable:void 0}},methods:{testWebsocketConnection:function(){this.$store.dispatch("testConnection")},downloadLog:function(t){var e=document.createElement("a");e.href="/admin/log/".concat(t),e.download=t,document.body.appendChild(e),e.click()}},created:function(){var t=this;v().get("/api/admin/status").then((function(e){t.isLoading=!1,t.ini=e.data.ini,t.cron=e.data.cron,t.modules=e.data.modules,t.phpVersion=e.data.php_version,t.backups=e.data.backups,t.logs=e.data.logs,t.writable=e.data.writable})),v().get("/api/ping").then((function(e){t.apiRunning="pong"===e.data})).catch((function(){t.apiRunning=!1}))}};const _=(0,a(1900).Z)(f,(function(){var t=this,e=t._self._c;return t.isLoading?t._e():e("PageTab",[e("div",{staticClass:"card shadow-card"},[e("FormLabel",{attrs:{icon:"info"}},[t._v("Cron")]),t._v(" "),e("div",{staticClass:"lg:flex lg:space-y-0 space-y-3 items-center justify-between"},[e("div",{staticClass:"text-left"},[e("b",{staticClass:"block text-sm font-bold"},[t._v("Cron Jobs")]),t._v(" "),t.cron.running?t._e():e("small",{staticClass:"text-xs text-gray-600 pt-1 block leading-normal"},[t._v("\n                        We detect, your cron jobs probably doesn't work correctly, please check it.\n                    ")]),t._v(" "),t.cron.running?e("small",{staticClass:"text-xs text-gray-600 pt-1 block leading-normal"},[t._v("\n                        Latest Update: "+t._s(t.cron.lastUpdate)+"\n                    ")]):t._e()]),t._v(" "),e("div",{staticClass:"flex items-center"},[t.cron.running?e("check-icon",{staticClass:"vue-feather text-green-600 dark:text-green-600",attrs:{size:"16"}}):t._e(),t._v(" "),t.cron.running?t._e():e("x-icon",{staticClass:"vue-feather text-red-600 dark:text-red-600",attrs:{size:"16"}}),t._v(" "),e("span",{staticClass:"ml-3 text-sm font-bold",class:t.cron.running?"text-green-600 dark:text-green-600":"text-red-600 dark:text-red-600"},[t._v("\n                        "+t._s(t.cron.running?"Working correctly":"Doesn't work")+"\n                    ")])],1)]),t._v(" "),t.cron.running?t._e():e("div",{staticClass:"mt-8"},[e("AppInputText",{attrs:{title:t.$t("Shared Web Hosting (Cpanel, Plesk, etc...) Command"),description:t.$t("Proposed command for Shared Web Hosting (Cpanel, Plesk, etc...)")}},[e("CopyInput",{attrs:{size:"small",str:t.cron.command.shared}})],1),t._v(" "),e("AppInputText",{attrs:{title:t.$t("Crontab Command"),description:t.$t("Proposed command for crontab. Available only for setup via linux terminal."),"is-last":!0}},[e("CopyInput",{attrs:{size:"small",str:t.cron.command.vps}})],1)],1)],1),t._v(" "),t.config.broadcasting?e("div",{staticClass:"card shadow-card"},[e("FormLabel",{attrs:{icon:"info"}},[t._v("Broadcasting")]),t._v(" "),e("div",{staticClass:"lg:flex lg:space-y-0 space-y-3 items-center justify-between"},[e("div",{staticClass:"text-left"},[e("b",{staticClass:"block text-sm font-bold"},[t._v("Websocket connection")]),t._v(" "),e("small",{staticClass:"text-xs text-gray-600 pt-1 block leading-normal"},[t._v("\n                        Here you can test websocket connection by sending test event.\n                    ")])]),t._v(" "),e("div",{staticClass:"flex items-center"},[e("ButtonBase",{staticClass:"w-full sm:w-auto",attrs:{"button-style":"theme"},nativeOn:{click:function(e){return t.testWebsocketConnection.apply(null,arguments)}}},[t._v("\n                        "+t._s(t.$t("Send Test Event"))+"\n                    ")])],1)])],1):t._e(),t._v(" "),e("div",{staticClass:"card shadow-card"},[e("FormLabel",{attrs:{icon:"list"}},[t._v("Latest Server Logs")]),t._v(" "),t.logs.length?t._e():e("InfoBox",{staticClass:"!mb-0"},[e("p",{domProps:{innerHTML:t._s(t.$t("there_is_not_log"))}})]),t._v(" "),t._l(t.logs,(function(a,s){return t.logs.length?e("div",{key:s,staticClass:"flex items-center justify-between border-b border-dashed border-light py-3 dark:border-opacity-5"},[e("div",{staticClass:"text-left"},[e("b",{staticClass:"block text-sm font-bold"},[t._v("\n\t\t\t\t\t\t"+t._s(a)+"\n\t\t\t\t\t")])]),t._v(" "),e("div",{staticClass:"flex h-8 w-8 items-center justify-center rounded-md bg-light-background transition-colors hover:bg-green-100 dark:bg-2x-dark-foreground cursor-pointer",on:{click:function(e){return t.downloadLog(a)}}},[e("DownloadCloudIcon",{staticClass:"opacity-75",attrs:{size:"15"}})],1)]):t._e()}))],2),t._v(" "),e("div",{staticClass:"card shadow-card"},[e("FormLabel",{attrs:{icon:"database"}},[t._v(" Latest Database Backups ")]),t._v(" "),t.backups.length?t._e():e("InfoBox",{staticClass:"!mb-0"},[e("p",{domProps:{innerHTML:t._s(t.$t("there_is_not_database_backup"))}})]),t._v(" "),t.backups.length?e("InfoBox",{staticClass:"!mb-3"},[e("p",{domProps:{innerHTML:t._s(t.$t("backup_path"))}})]):t._e(),t._v(" "),t._l(t.backups,(function(a,s){return t.backups.length?e("div",{key:s,staticClass:"md:flex md:space-y-0 space-y-3 items-center justify-between border-b border-dashed border-light py-3 dark:border-opacity-5"},[e("div",{staticClass:"text-left"},[e("b",{staticClass:"block text-sm font-bold"},[t._v(t._s(a))])]),t._v(" "),e("div",{staticClass:"flex items-center"},[e("check-icon",{staticClass:"vue-feather text-green-600 dark:text-green-600",attrs:{size:"16"}}),t._v(" "),e("span",{staticClass:"ml-3 text-sm font-bold text-green-600 dark:text-green-600"},[t._v(" Stored Successfully ")])],1)]):t._e()}))],2),t._v(" "),e("div",{staticClass:"card shadow-card"},[e("FormLabel",{attrs:{icon:"database"}},[t._v("Writable Permission")]),t._v(" "),t._l(t.writable,(function(a,s,r){return e("div",{key:r,staticClass:"flex md:space-y-0 space-y-3 items-center justify-between border-b border-dashed border-light py-3 dark:border-opacity-5"},[e("div",{staticClass:"text-left"},[e("b",{staticClass:"block text-sm font-bold"},[t._v("/"+t._s(s))])]),t._v(" "),e("div",{staticClass:"flex items-center"},[a?e("check-icon",{staticClass:"vue-feather text-green-600 dark:text-green-600",attrs:{size:"16"}}):t._e(),t._v(" "),a?t._e():e("x-icon",{staticClass:"vue-feather text-red-600 dark:text-red-600",attrs:{size:"16"}}),t._v(" "),e("span",{staticClass:"ml-3 text-sm font-bold",class:{"text-green-600 dark:text-green-600":a,"text-red-600 dark:text-red-600":!a}},[t._v("\n\t\t\t\t\t\t"+t._s(a?"Writable":"Unwritable")+"\n\t\t\t\t\t")])],1)])}))],2),t._v(" "),e("div",{staticClass:"card shadow-card"},[e("FormLabel",{attrs:{icon:"info"}},[t._v(" PHP Settings ")]),t._v(" "),e("div",{staticClass:"flex items-center justify-between border-b border-dashed border-light py-3 dark:border-opacity-5"},[e("div",{staticClass:"text-left"},[e("b",{staticClass:"block text-sm font-bold"},[t._v("PHP Version")]),t._v(" "),t.phpVersion.acceptable?t._e():e("small",{staticClass:"text-xs text-gray-600 pt-1 block leading-normal"},[t._v("\n                        You need PHP version at least "+t._s(t.phpVersion.minimal)+".\n                    ")])]),t._v(" "),e("div",{staticClass:"flex items-center"},[t.phpVersion.acceptable?e("check-icon",{staticClass:"vue-feather text-green-600 dark:text-green-600",attrs:{size:"16"}}):t._e(),t._v(" "),t.phpVersion.acceptable?t._e():e("x-icon",{staticClass:"vue-feather text-red-600 dark:text-red-600",attrs:{size:"16"}}),t._v(" "),e("span",{staticClass:"ml-3 text-sm font-bold",class:t.phpVersion.acceptable?"text-green-600 dark:text-green-600":"text-red-600 dark:text-red-600"},[t._v("\n                        "+t._s(t.phpVersion.current)+"\n                    ")])],1)]),t._v(" "),t._l(t.ini,(function(a,s,r){return e("div",{key:r,staticClass:"flex items-center justify-between border-b border-dashed border-light py-3 dark:border-opacity-5"},[e("div",{staticClass:"text-left"},[e("b",{staticClass:"block text-sm font-bold"},[t._v(t._s(s))]),t._v(" "),a.status?t._e():e("small",{staticClass:"text-xs text-gray-600 pt-1 block leading-normal"},[t._v("\n                        You must set this value at least "+t._s(a.minimal)+".\n                    ")])]),t._v(" "),e("div",{staticClass:"flex items-center"},[a.status?e("check-icon",{staticClass:"vue-feather text-green-600 dark:text-green-600",attrs:{size:"16"}}):t._e(),t._v(" "),a.status?t._e():e("x-icon",{staticClass:"vue-feather text-red-600 dark:text-red-600",attrs:{size:"16"}}),t._v(" "),e("span",{staticClass:"ml-3 text-sm font-bold",class:a.status?"text-green-600 dark:text-green-600":"text-red-600 dark:text-red-600"},[t._v("\n                        "+t._s(a.current)+t._s("max_execution_time"!==s?"M":"")+"\n                    ")])],1)])}))],2),t._v(" "),e("div",{staticClass:"card shadow-card"},[e("FormLabel",{attrs:{icon:"info"}},[t._v(" PHP Extensions ")]),t._v(" "),t._l(t.modules,(function(a,s,r){return t.modules?e("div",{key:r,staticClass:"flex items-center justify-between border-b border-dashed border-light py-3 dark:border-opacity-5"},[e("b",{staticClass:"text-sm font-bold"},[t._v("\n                    "+t._s(s)+"\n                ")]),t._v(" "),e("div",{staticClass:"flex items-center"},[a?e("check-icon",{staticClass:"vue-feather text-green-600 dark:text-green-600",attrs:{size:"16"}}):t._e(),t._v(" "),a?t._e():e("x-icon",{staticClass:"vue-feather text-red-600 dark:text-red-600",attrs:{size:"16"}}),t._v(" "),e("span",{staticClass:"ml-3 text-sm font-bold",class:a?"text-green-600 dark:text-green-600":"text-red-600 dark:text-red-600"},[t._v("\n                        "+t._s(a?"Module Installed":"You have to install this module")+"\n                    ")])],1)]):t._e()}))],2)])}),[],!1,null,null,null).exports}}]);