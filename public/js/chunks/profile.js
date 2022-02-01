"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[1516],{7118:(t,e,s)=>{s.d(e,{Z:()=>r});var a=s(3645),i=s.n(a)()((function(t){return t[1]}));i.push([t.id,".select[data-v-3c8aef3b]{position:relative;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;width:100%}.select-search[data-v-3c8aef3b]{background:#fff;padding:13px;position:-webkit-sticky;position:sticky;top:0}.select-search .search-input[data-v-3c8aef3b]{-webkit-appearance:none;-moz-appearance:none;appearance:none;background:#f4f5f6;border:1px solid transparent;font-size:.875em;font-weight:700;outline:0;padding:13px 20px;transition:all .15s ease;width:100%}.input-options[data-v-3c8aef3b]{background:#fff;box-shadow:0 5px 15px rgba(0,0,0,.12);left:0;max-height:295px;overflow:hidden;overflow-y:auto;position:absolute;right:0;top:65px;z-index:9}.input-options .option-item[data-v-3c8aef3b]{cursor:pointer;display:block;padding:13px 20px}.input-options .option-item[data-v-3c8aef3b]:hover{background:#f4f5f6;color:#00bc7e}.input-options .option-item[data-v-3c8aef3b]:last-child{border-bottom:none}.input-area[data-v-3c8aef3b]{align-items:center;border:1px solid transparent;cursor:pointer;display:flex;justify-content:space-between;outline:0;padding:13px 20px;width:100%}.input-area[data-v-3c8aef3b],.input-area .chevron[data-v-3c8aef3b]{transition:all .15s ease}.input-area.is-active .chevron[data-v-3c8aef3b]{transform:rotate(180deg)}.input-area.is-error[data-v-3c8aef3b]{border-color:#fd397a;box-shadow:0 0 7px rgba(253,57,122,.3)}.option-icon[data-v-3c8aef3b]{display:inline-block;font-size:.625em;width:20px}.option-value[data-v-3c8aef3b]{font-size:.875em;font-weight:700;vertical-align:middle}.option-value.placehoder[data-v-3c8aef3b]{color:rgba(27,37,57,.5)}.slide-in-enter-active[data-v-3c8aef3b]{transition:all .15s ease}.slide-in-enter[data-v-3c8aef3b]{opacity:0;transform:translateY(-50px)}.dark .select-search[data-v-3c8aef3b]{background:#1e2024}.dark .select-search .search-input[data-v-3c8aef3b]{background:#151515}.dark .input-area[data-v-3c8aef3b]{background:#1e2024;border-color:#1e2024}.dark .popup-wrapper .input-area[data-v-3c8aef3b]{background:#25272c}.dark .input-options[data-v-3c8aef3b]{background:#1e2024}.dark .input-options .option-item[data-v-3c8aef3b]{border-bottom:none}.dark .input-options .option-item[data-v-3c8aef3b]:hover{background:#2a2c32}.dark .input-options .option-item:hover .option-icon circle[data-v-3c8aef3b],.dark .input-options .option-item:hover .option-icon path[data-v-3c8aef3b]{color:inherit}.dark .input-options .option-item[data-v-3c8aef3b]:last-child{border-bottom:none}.dark .option-value.placehoder[data-v-3c8aef3b]{color:#7d858c}",""]);const r=i},4479:(t,e,s)=>{s.d(e,{C1:()=>r});function a(t){return null==t}function i(t){return Array.isArray(t)&&0===t.length}var r={validate:function(t,e){var s=(void 0===e?{allowFalse:!0}:e).allowFalse,r={valid:!1,required:!0};return a(t)||i(t)?r:!1!==t||s?(r.valid=!!String(t).trim().length,r):r},params:[{name:"allowFalse",default:!0}],computesRequired:!0}},1480:(t,e,s)=>{s.d(e,{Z:()=>i});const a={name:"AppInputText",props:["description","isLast","title","error"]};const i=(0,s(1900).Z)(a,(function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{class:{"mb-7":!t.isLast}},[t.title?s("label",{staticClass:"text-sm font-bold dark:text-gray-200 text-gray-700 mb-1.5 block"},[t._v("\n\t\t"+t._s(t.title)+":\n\t")]):t._e(),t._v(" "),t._t("default"),t._v(" "),t.error?s("span",{staticClass:"text-red-800 pt-2 text-xs"},[t._v("\n\t\t"+t._s(t.error)+"\n\t")]):t._e(),t._v(" "),t.description?s("small",{staticClass:"text-xs text-gray-500 pt-2 leading-4 block",domProps:{innerHTML:t._s(t.description)}}):t._e()],2)}),[],!1,null,null,null).exports},6589:(t,e,s)=>{s.d(e,{Z:()=>r});var a=s(9101);const i={name:"FormLabel",props:["icon"],components:{UsersIcon:a.oyc,CreditCardIcon:a.ciH,DollarSignIcon:a.bkH,SmartphoneIcon:a.BEV,HardDriveIcon:a.zvn,BarChartIcon:a.eJP,SettingsIcon:a.ewm,FileTextIcon:a.zPP,ShieldIcon:a.b7C,FrownIcon:a.eFi,Edit2Icon:a.me4,BellIcon:a.Dkj,KeyIcon:a._m8}};const r=(0,s(1900).Z)(i,(function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"flex items-center mb-8"},[t.icon?t._e():s("edit-2-icon",{staticClass:"mr-3 vue-feather text-theme dark-text-theme",attrs:{size:"22"}}),t._v(" "),"frown"===t.icon?s("frown-icon",{staticClass:"mr-3 vue-feather text-theme dark-text-theme",attrs:{size:"22"}}):t._e(),t._v(" "),"file-text"===t.icon?s("file-text-icon",{staticClass:"mr-3 vue-feather text-theme dark-text-theme",attrs:{size:"22"}}):t._e(),t._v(" "),"dollar"===t.icon?s("dollar-sign-icon",{staticClass:"mr-3 vue-feather text-theme dark-text-theme",attrs:{size:"22"}}):t._e(),t._v(" "),"credit-card"===t.icon?s("credit-card-icon",{staticClass:"mr-3 vue-feather text-theme dark-text-theme",attrs:{size:"22"}}):t._e(),t._v(" "),"bar-chart"===t.icon?s("bar-chart-icon",{staticClass:"mr-3 vue-feather text-theme dark-text-theme",attrs:{size:"22"}}):t._e(),t._v(" "),"settings"===t.icon?s("settings-icon",{staticClass:"mr-3 vue-feather text-theme dark-text-theme",attrs:{size:"22"}}):t._e(),t._v(" "),"hard-drive"===t.icon?s("hard-drive-icon",{staticClass:"mr-3 vue-feather text-theme dark-text-theme",attrs:{size:"22"}}):t._e(),t._v(" "),"smartphone"===t.icon?s("smartphone-icon",{staticClass:"mr-3 vue-feather text-theme dark-text-theme",attrs:{size:"22"}}):t._e(),t._v(" "),"shield"===t.icon?s("shield-icon",{staticClass:"mr-3 vue-feather text-theme dark-text-theme",attrs:{size:"22"}}):t._e(),t._v(" "),"bell"===t.icon?s("bell-icon",{staticClass:"mr-3 vue-feather text-theme dark-text-theme",attrs:{size:"22"}}):t._e(),t._v(" "),"key"===t.icon?s("key-icon",{staticClass:"mr-3 vue-feather text-theme dark-text-theme",attrs:{size:"22"}}):t._e(),t._v(" "),"users"===t.icon?s("users-icon",{staticClass:"mr-3 vue-feather text-theme dark-text-theme",attrs:{size:"22"}}):t._e(),t._v(" "),s("b",{staticClass:"font-bold dark:text-gray-200 sm:text-lg text-md"},[t._t("default")],2)],1)}),[],!1,null,null,null).exports},6554:(t,e,s)=>{s.d(e,{Z:()=>c});var a=s(9101),i=s(6486);const r={name:"SelectInput",props:["placeholder","options","isError","default"],components:{Edit2Icon:a.me4,UserIcon:a.tBG,ChevronDownIcon:a.v4q},watch:{query:(0,i.debounce)((function(t){this.searchedResults=(0,i.omitBy)(this.options,(function(e){return!e.label.toLowerCase().includes(t.toLowerCase())}))}),200)},computed:{isSearching:function(){return this.searchedResults&&""!==this.query},optionList:function(){return this.isSearching?this.searchedResults:this.options}},data:function(){return{searchedResults:void 0,selected:void 0,isOpen:!1,query:""}},methods:{selectOption:function(t){this.$emit("input",t.value),this.$emit("change",t.value),this.selected=t,this.isOpen=!1},openMenu:function(){var t=this;this.isOpen=!this.isOpen,this.isOpen&&this.$nextTick((function(){return t.$refs.search.focus()}))}},created:function(){var t=this;this.default&&(this.selected=this.options.find((function(e){return e.value===t.default})))}};var n=s(3379),o=s.n(n),l=s(7118),u={insert:"head",singleton:!1};o()(l.Z,u);l.Z.locals;const c=(0,s(1900).Z)(r,(function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"select"},[s("div",{staticClass:"input-area bg-light-background rounded-lg",class:{"is-active":t.isOpen,"is-error":t.isError},on:{click:t.openMenu}},[t.selected?s("div",{staticClass:"selected w-full flex items-center"},[t.selected.icon?s("div",{staticClass:"option-icon"},["user"===t.selected.icon?s("user-icon",{staticClass:"vue-feather text-theme",attrs:{size:"14"}}):t._e(),t._v(" "),"user-edit"===t.selected.icon?s("edit2-icon",{staticClass:"vue-feather text-theme",attrs:{size:"14"}}):t._e()],1):t._e(),t._v(" "),s("span",{staticClass:"whitespace-nowrap w-full inline-block overflow-hidden text-ellipsis option-value pl-2"},[t._v("\n\t\t\t\t\t"+t._s(t.selected.label)+"\n\t\t\t\t")])]):t._e(),t._v(" "),t.selected?t._e():s("div",{staticClass:"not-selected"},[s("span",{staticClass:"option-value placehoder"},[t._v(t._s(t.placeholder))])]),t._v(" "),s("chevron-down-icon",{staticClass:"chevron",attrs:{size:"19"}})],1),t._v(" "),s("transition",{attrs:{name:"slide-in"}},[t.isOpen?s("div",{staticClass:"input-options rounded-lg"},[t.options.length>5?s("div",{staticClass:"select-search"},[s("input",{directives:[{name:"model",rawName:"v-model",value:t.query,expression:"query"}],ref:"search",staticClass:"search-input focus-border-theme rounded-lg",attrs:{type:"text",placeholder:t.$t("select_search_placeholder")},domProps:{value:t.query},on:{input:function(e){e.target.composing||(t.query=e.target.value)}}})]):t._e(),t._v(" "),s("ul",{staticClass:"option-list"},t._l(t.optionList,(function(e,a){return s("li",{key:a,staticClass:"option-item",on:{click:function(s){return t.selectOption(e)}}},[e.icon?s("div",{staticClass:"option-icon"},["user"===e.icon?s("user-icon",{attrs:{size:"14"}}):t._e(),t._v(" "),"user-edit"===e.icon?s("edit2-icon",{attrs:{size:"14"}}):t._e()],1):t._e(),t._v(" "),s("span",{staticClass:"option-value"},[t._v(t._s(e.label))])])})),0)]):t._e()])],1)}),[],!1,null,"3c8aef3b",null).exports},9197:(t,e,s)=>{s.r(e),s.d(e,{default:()=>p});var a=s(1480),i=s(6554),r=s(6589),n=s(4479),o=s(629);function l(t,e){var s=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);e&&(a=a.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),s.push.apply(s,a)}return s}function u(t){for(var e=1;e<arguments.length;e++){var s=null!=arguments[e]?arguments[e]:{};e%2?l(Object(s),!0).forEach((function(e){c(t,e,s[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(s)):l(Object(s)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(s,e))}))}return t}function c(t,e,s){return e in t?Object.defineProperty(t,e,{value:s,enumerable:!0,configurable:!0,writable:!0}):t[e]=s,t}const d={name:"Settings",components:{AppInputText:a.Z,SelectInput:i.Z,FormLabel:r.Z,required:n.C1},computed:u(u({},(0,o.Se)(["isDarkMode","countries","timezones","config"])),{},{currentEmojis:function(){return this.config.defaultEmoji}}),data:function(){return{user:this.$store.getters.user,isLoading:!1,themeSetup:[{title:this.$t("Light mode"),type:"light",image:"/assets/setup/light-mode.jpg"},{title:this.$t("Dark mode"),type:"dark",image:"/assets/setup/dark-mode.jpg"},{title:this.$t("Based on system settings"),type:"system",image:"/assets/setup/system-mode.jpg"}],emojiSetup:[{title:"Twemoji",type:"twemoji",image:{dark:"/assets/setup/twemoji-preview-dark.jpg",light:"/assets/setup/twemoji-preview.jpg"}},{title:"Applemoji",type:"applemoji",image:{dark:"/assets/setup/applemoji-preview-dark.jpg",light:"/assets/setup/applemoji-preview.jpg"}}]}},methods:{updateFirstName:function(){this.$store.commit("UPDATE_FIRST_NAME",this.user.data.relationships.settings.data.attributes.first_name),this.$updateText("/user/settings","first_name",this.user.data.relationships.settings.data.attributes.first_name)},updateLastName:function(){this.$store.commit("UPDATE_LAST_NAME",this.user.data.relationships.settings.data.attributes.last_name),this.$updateText("/user/settings","last_name",this.user.data.relationships.settings.data.attributes.last_name)}}};const p=(0,s(1900).Z)(d,(function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",[s("div",{staticClass:"card shadow-card"},[s("FormLabel",[t._v("\n\t\t\t\t"+t._s(t.$t("Account Settings"))+"\n\t\t\t")]),t._v(" "),s("div",{staticClass:"md:flex justify-items md:space-x-4"},[s("AppInputText",{staticClass:"w-full",attrs:{title:t.$t("First Name")}},[s("input",{directives:[{name:"model",rawName:"v-model",value:t.user.data.relationships.settings.data.attributes.first_name,expression:"user.data.relationships.settings.data.attributes.first_name"}],staticClass:"focus-border-theme input-dark",attrs:{placeholder:t.$t("page_registration.placeholder_name"),type:"text"},domProps:{value:t.user.data.relationships.settings.data.attributes.first_name},on:{keyup:t.updateFirstName,input:function(e){e.target.composing||t.$set(t.user.data.relationships.settings.data.attributes,"first_name",e.target.value)}}})]),t._v(" "),s("AppInputText",{staticClass:"w-full",attrs:{title:t.$t("Last Name")}},[s("input",{directives:[{name:"model",rawName:"v-model",value:t.user.data.relationships.settings.data.attributes.last_name,expression:"user.data.relationships.settings.data.attributes.last_name"}],staticClass:"focus-border-theme input-dark",attrs:{placeholder:t.$t("page_registration.placeholder_name"),type:"text"},domProps:{value:t.user.data.relationships.settings.data.attributes.last_name},on:{keyup:t.updateLastName,input:function(e){e.target.composing||t.$set(t.user.data.relationships.settings.data.attributes,"last_name",e.target.value)}}})])],1),t._v(" "),s("AppInputText",{attrs:{title:t.$t("GMT"),"is-last":!0}},[s("SelectInput",{attrs:{default:t.user.data.relationships.settings.data.attributes.timezone,options:t.timezones,placeholder:t.$t("user_settings.timezone_plac")},on:{input:function(e){return t.$updateText("/user/settings","timezone",t.user.data.relationships.settings.data.attributes.timezone)}},model:{value:t.user.data.relationships.settings.data.attributes.timezone,callback:function(e){t.$set(t.user.data.relationships.settings.data.attributes,"timezone",e)},expression:"user.data.relationships.settings.data.attributes.timezone"}})],1)],1),t._v(" "),s("div",{staticClass:"card shadow-card"},[s("FormLabel",[t._v("\n\t\t\t\t"+t._s(t.$t("Appearance"))+"\n\t\t\t")]),t._v(" "),s("AppInputText",{attrs:{title:t.$t("Theme Mode"),description:t.$t("Set your theme mode on dark, light or based on your system settings."),"is-last":!t.$isApple()}},[s("div",{staticClass:"md:flex items-center md:space-x-6 md:space-x-4 md:space-y-0 space-y-4"},t._l(t.themeSetup,(function(e,a){return s("div",{key:a,staticClass:"w-full rounded-xl shadow-lg overflow-hidden cursor-pointer border-3",class:{"border-theme":t.config.defaultThemeMode===e.type,"border-transparent":t.config.defaultThemeMode!==e.type},attrs:{title:e.title},on:{click:function(s){return t.$store.dispatch("toggleThemeMode",e.type)}}},[s("img",{attrs:{src:e.image,alt:e.type}})])})),0)]),t._v(" "),t.$isApple()?s("AppInputText",{attrs:{title:t.$t("Default Emojis"),description:t.$t("Set your default emojis for your folder custom icons. You can set Twemoji or default Apple emojis."),"is-last":!0}},[s("div",{staticClass:"md:flex items-center md:space-x-6 md:space-x-4 md:space-y-0 space-y-4"},t._l(t.emojiSetup,(function(e,a){return s("div",{key:a,staticClass:"w-full rounded-xl shadow-lg overflow-hidden cursor-pointer border-3",class:{"border-theme":t.currentEmojis===e.type,"border-transparent":t.currentEmojis!==e.type},attrs:{title:e.title},on:{click:function(s){return t.$store.dispatch("toggleEmojiType",e.type)}}},[s("img",{attrs:{src:t.isDarkMode?e.image.dark:e.image.light,alt:e.type}})])})),0)]):t._e()],1),t._v(" "),s("div",{staticClass:"card shadow-card"},[s("FormLabel",[t._v("\n                "+t._s(t.$t("user_settings.title_billing"))+"\n            ")]),t._v(" "),s("AppInputText",{attrs:{title:t.$t("user_settings.address")}},[s("input",{directives:[{name:"model",rawName:"v-model",value:t.user.data.relationships.settings.data.attributes.address,expression:"user.data.relationships.settings.data.attributes.address"}],staticClass:"focus-border-theme input-dark",attrs:{placeholder:t.$t("user_settings.address_plac"),type:"text"},domProps:{value:t.user.data.relationships.settings.data.attributes.address},on:{keyup:function(e){return t.$updateText("/user/settings","address",t.user.data.relationships.settings.data.attributes.address)},input:function(e){e.target.composing||t.$set(t.user.data.relationships.settings.data.attributes,"address",e.target.value)}}})]),t._v(" "),s("div",{staticClass:"flex space-x-4"},[s("AppInputText",{staticClass:"w-full",attrs:{title:t.$t("user_settings.city")}},[s("input",{directives:[{name:"model",rawName:"v-model",value:t.user.data.relationships.settings.data.attributes.city,expression:"user.data.relationships.settings.data.attributes.city"}],staticClass:"focus-border-theme input-dark",attrs:{placeholder:t.$t("user_settings.city_plac"),type:"text"},domProps:{value:t.user.data.relationships.settings.data.attributes.city},on:{keyup:function(e){return t.$updateText("/user/settings","city",t.user.data.relationships.settings.data.attributes.city)},input:function(e){e.target.composing||t.$set(t.user.data.relationships.settings.data.attributes,"city",e.target.value)}}})]),t._v(" "),s("AppInputText",{staticClass:"w-full",attrs:{title:t.$t("user_settings.postal_code")}},[s("input",{directives:[{name:"model",rawName:"v-model",value:t.user.data.relationships.settings.data.attributes.postal_code,expression:"user.data.relationships.settings.data.attributes.postal_code"}],staticClass:"focus-border-theme input-dark",attrs:{placeholder:t.$t("user_settings.postal_code_plac"),type:"text"},domProps:{value:t.user.data.relationships.settings.data.attributes.postal_code},on:{keyup:function(e){return t.$updateText("/user/settings","postal_code",t.user.data.relationships.settings.data.attributes.postal_code)},input:function(e){e.target.composing||t.$set(t.user.data.relationships.settings.data.attributes,"postal_code",e.target.value)}}})])],1),t._v(" "),s("AppInputText",{attrs:{title:t.$t("user_settings.country")}},[s("SelectInput",{attrs:{default:t.user.data.relationships.settings.data.attributes.country,options:t.countries,placeholder:t.$t("user_settings.country_plac")},on:{input:function(e){return t.$updateText("/user/settings","country",t.user.data.relationships.settings.data.attributes.country)}},model:{value:t.user.data.relationships.settings.data.attributes.country,callback:function(e){t.$set(t.user.data.relationships.settings.data.attributes,"country",e)},expression:"user.data.relationships.settings.data.attributes.country"}})],1),t._v(" "),s("AppInputText",{attrs:{title:t.$t("user_settings.state"),description:t.$t("State, county, province, or region.")}},[s("input",{directives:[{name:"model",rawName:"v-model",value:t.user.data.relationships.settings.data.attributes.state,expression:"user.data.relationships.settings.data.attributes.state"}],staticClass:"focus-border-theme input-dark",attrs:{placeholder:t.$t("user_settings.state_plac"),type:"text"},domProps:{value:t.user.data.relationships.settings.data.attributes.state},on:{keyup:function(e){return t.$updateText("/user/settings","state",t.user.data.relationships.settings.data.attributes.state)},input:function(e){e.target.composing||t.$set(t.user.data.relationships.settings.data.attributes,"state",e.target.value)}}})]),t._v(" "),s("AppInputText",{attrs:{title:t.$t("user_settings.phone_number"),"is-last":!0}},[s("input",{directives:[{name:"model",rawName:"v-model",value:t.user.data.relationships.settings.data.attributes.phone_number,expression:"user.data.relationships.settings.data.attributes.phone_number"}],staticClass:"focus-border-theme input-dark",attrs:{placeholder:t.$t("user_settings.phone_number_plac"),type:"text"},domProps:{value:t.user.data.relationships.settings.data.attributes.phone_number},on:{keyup:function(e){return t.$updateText("/user/settings","phone_number",t.user.data.relationships.settings.data.attributes.phone_number)},input:function(e){e.target.composing||t.$set(t.user.data.relationships.settings.data.attributes,"phone_number",e.target.value)}}})])],1)])}),[],!1,null,null,null).exports}}]);