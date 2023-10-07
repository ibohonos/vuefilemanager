"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[372],{8520:(t,a,e)=>{e.d(a,{Z:()=>n});var s=e(3645),i=e.n(s)()((function(t){return t[1]}));i.push([t.id,".color-label.purple[data-v-3ff27c4c]{background:rgba(157,102,254,.1);color:#9d66fe}.color-label.yellow[data-v-3ff27c4c]{background:rgba(255,189,45,.1);color:#ffbd2d}.color-label.green[data-v-3ff27c4c]{background:rgba(0,188,126,.1);color:#00bc7e}.color-label.red[data-v-3ff27c4c]{background:rgba(253,57,122,.1);color:#fd397a}",""]);const n=i},3428:(t,a,e)=>{e.d(a,{Z:()=>n});var s=e(3645),i=e.n(s)()((function(t){return t[1]}));i.push([t.id,".table-row[data-v-61827e38]{border-radius:8px}.table-row[data-v-61827e38]:hover{background:#f4f5f6}.table-row .table-cell[data-v-61827e38]{padding-bottom:15px;padding-top:15px}.table-row .table-cell[data-v-61827e38]:first-child{padding-left:15px}.table-row .table-cell[data-v-61827e38]:last-child{padding-right:15px;text-align:right}.table-row .table-cell span[data-v-61827e38]{font-size:1em;font-weight:700}",""]);const n=i},7009:(t,a,e)=>{e.d(a,{Z:()=>o});const s={name:"ColorLabel",props:["color"]};var i=e(3379),n=e.n(i),l=e(8520),r={insert:"head",singleton:!1};n()(l.Z,r);l.Z.locals;const o=(0,e(1900).Z)(s,(function(){var t=this;return(0,t._self._c)("b",{staticClass:"color-label inline-block rounded-lg py-1 px-2 text-xs font-bold capitalize",class:t.color},[t._t("default")],2)}),[],!1,null,"3ff27c4c",null).exports},5508:(t,a,e)=>{e.d(a,{Z:()=>b});var s=e(9101);const i={props:["data"],computed:{normalizedColumns:function(){return this.data.id&&delete this.data.id,Object.values(this.data)}}};var n=e(3379),l=e.n(n),r=e(3428),o={insert:"head",singleton:!1};l()(r.Z,o);r.Z.locals;var c=e(1900);const d=(0,c.Z)(i,(function(){var t=this,a=t._self._c;return a("tr",{staticClass:"table-row"},t._l(t.normalizedColumns,(function(e,s){return a("td",{key:s,staticClass:"table-cell"},[a("span",[t._v(t._s(e))])])})),0)}),[],!1,null,"61827e38",null).exports;var p=e(9669),u=e.n(p);const g={name:"DatatableWrapper",props:["paginator","tableData","columns","scope","api"],components:{ChevronRightIcon:s.XCv,ChevronLeftIcon:s.wyc,DatatableCell:d,ChevronUpIcon:s.g8U},computed:{hasData:function(){return this.data&&this.data.data&&this.data.data.length>0},floatPages:function(){return[this.pageIndex-1,this.pageIndex,this.pageIndex+1]}},data:function(){return{data:void 0,isLoading:!0,pageIndex:1,filter:{sort:"DESC",field:void 0}}},methods:{goToPage:function(t){t>this.data.meta.last_page||0===t||(this.pageIndex=t,this.getPage(t))},sort:function(t,a){a&&(this.filter.field=t,"DESC"===this.filter.sort?this.filter.sort="ASC":"ASC"===this.filter.sort&&(this.filter.sort="DESC"),this.getPage(this.pageIndex))},getPage:function(t){var a=this;this.URI=this.api,this.paginator&&(this.URI=this.URI+"?page="+t),this.filter.field&&(this.URI=this.URI+(this.paginator?"&":"?")+"sort="+this.filter.field+"&direction="+this.filter.sort),this.isLoading=!0,u().get(this.URI).then((function(t){a.data=t.data,a.$emit("data",t.data)})).catch((function(){return a.$isSomethingWrong()})).finally((function(){a.$emit("init",!0),a.isLoading=!1}))}},created:function(){this.api&&this.getPage(this.pageIndex),this.tableData&&(this.data=this.tableData,this.isLoading=!1)}};const b=(0,c.Z)(g,(function(){var t=this,a=t._self._c;return a("div",{staticClass:"w-full"},[t.hasData?a("table",{staticClass:"w-full"},[a("thead",[a("tr",{staticClass:"whitespace-nowrap"},t._l(t.columns,(function(e,s){return e.hidden?t._e():a("th",{key:s,staticClass:"text-left",class:{"sortable cursor-pointer":e.sortable,"text-right":Object.values(t.columns).length-1===s},on:{click:function(a){return t.sort(e.field,e.sortable)}}},[a("span",{staticClass:"text-xs text-gray-400 dark:text-gray-500"},[t._v("\n                            "+t._s(t.$t(e.label))+"\n                        ")]),t._v(" "),e.sortable?a("chevron-up-icon",{staticClass:"vue-feather inline-block text-gray-300 dark:text-gray-500",class:{"arrow-down":"ASC"===t.filter.sort},attrs:{size:"12"}}):t._e()],1)})),0)]),t._v(" "),a("tbody",{staticClass:"table-body"},[t._l(t.data.data,(function(e){return t._t("default",(function(){return[a("DatatableCell",{key:e.id,attrs:{data:e}})]}),{row:e})}))],2)]):t._e(),t._v(" "),t.isLoading||t.hasData?t._e():t._t("empty-page"),t._v(" "),t.paginator&&t.hasData?a("div",{staticClass:"mt-6 sm:flex sm:items-center sm:justify-between"},[t.data.meta.total>15&&t.data.meta.last_page<=6?a("ul",{staticClass:"pagination flex justify-center items-center"},[a("li",{staticClass:"previous inline-block p-1"},[a("a",{staticClass:"page-link",class:{"cursor-default opacity-20":1===t.pageIndex},on:{click:function(a){return t.goToPage(t.pageIndex-1)}}},[a("chevron-left-icon",{staticClass:"inline-block",attrs:{size:"14"}})],1)]),t._v(" "),t._l(t.data.meta.last_page,(function(e,s){return a("li",{key:s,staticClass:"inline-block p-1",on:{click:function(a){return t.goToPage(e)}}},[a("a",{staticClass:"page-link",class:{"bg-light-background dark:bg-4x-dark-foreground dark:text-gray-300":t.pageIndex===e}},[t._v("\n                        "+t._s(e)+"\n                    ")])])})),t._v(" "),a("li",{staticClass:"next inline-block p-1"},[a("a",{staticClass:"page-link",class:{"cursor-default opacity-20":t.pageIndex===t.data.meta.last_page},on:{click:function(a){return t.goToPage(t.pageIndex+1)}}},[a("chevron-right-icon",{staticClass:"inline-block",attrs:{size:"14"}})],1)])],2):t._e(),t._v(" "),t.data.meta.total>15&&t.data.meta.last_page>6?a("ul",{staticClass:"pagination flex justify-center items-center"},[a("li",{staticClass:"previous inline-block p-1"},[a("a",{staticClass:"page-link",class:{"cursor-default opacity-20":1===t.pageIndex},on:{click:function(a){return t.goToPage(t.pageIndex-1)}}},[a("chevron-left-icon",{staticClass:"inline-block",attrs:{size:"14"}})],1)]),t._v(" "),t.pageIndex>=5?a("li",{staticClass:"inline-block p-1",on:{click:function(a){return t.goToPage(1)}}},[a("a",{staticClass:"page-link"},[t._v(" 1 ")])]):t._e(),t._v(" "),t._l(5,(function(e,s){return t.pageIndex<5?a("li",{key:s,staticClass:"inline-block p-1",on:{click:function(a){return t.goToPage(e)}}},[a("a",{staticClass:"page-link",class:{"bg-light-background dark:bg-4x-dark-foreground dark:text-gray-300":t.pageIndex===e}},[t._v("\n                        "+t._s(e)+"\n                    ")])]):t._e()})),t._v(" "),t.pageIndex>=5?a("li",{staticClass:"inline-block p-1"},[a("a",{staticClass:"page-link"},[t._v("...")])]):t._e(),t._v(" "),t._l(t.floatPages,(function(e,s){return t.pageIndex>=5&&t.pageIndex<t.data.meta.last_page-3?a("li",{key:s,staticClass:"inline-block p-1",on:{click:function(a){return t.goToPage(e)}}},[a("a",{staticClass:"page-link",class:{"bg-light-background dark:bg-4x-dark-foreground dark:text-gray-300":t.pageIndex===e}},[t._v("\n                        "+t._s(e)+"\n                    ")])]):t._e()})),t._v(" "),t.pageIndex<t.data.meta.last_page-3?a("li",{staticClass:"inline-block p-1"},[a("a",{staticClass:"page-link"},[t._v("...")])]):t._e(),t._v(" "),t._l(5,(function(e,s){return t.pageIndex>t.data.meta.last_page-4?a("li",{key:s,staticClass:"inline-block p-1",on:{click:function(a){t.goToPage(t.data.meta.last_page-(4-s))}}},[a("a",{staticClass:"page-link",class:{"bg-light-background dark:bg-4x-dark-foreground dark:text-gray-300":t.pageIndex===t.data.meta.last_page-(4-s)}},[t._v("\n                        "+t._s(t.data.meta.last_page-(4-s))+"\n                    ")])]):t._e()})),t._v(" "),t.pageIndex<t.data.meta.last_page-3?a("li",{staticClass:"inline-block p-1",on:{click:function(a){return t.goToPage(t.data.meta.last_page)}}},[a("a",{staticClass:"page-link"},[t._v("\n                        "+t._s(t.data.meta.last_page)+"\n                    ")])]):t._e(),t._v(" "),a("li",{staticClass:"next inline-block p-1"},[a("a",{staticClass:"page-link",class:{"cursor-default opacity-20":t.pageIndex===t.data.meta.last_page},on:{click:function(a){return t.goToPage(t.pageIndex+1)}}},[a("chevron-right-icon",{staticClass:"inline-block",attrs:{size:"14"}})],1)])],2):t._e(),t._v(" "),a("span",{staticClass:"text-xs text-gray-600 dark:text-gray-500 block text-center sm:mt-0 mt-4"},[t._v("\n\t\t\t\t"+t._s(t.$t("paginator",{from:t.data.meta.from,to:t.data.meta.to,total:t.data.meta.total}))+"\n            ")])]):t._e()],2)}),[],!1,null,null,null).exports},3314:(t,a,e)=>{e.r(a),e.d(a,{default:()=>p});var s=e(7009),i=e(4509),n=e(5508),l=e(629);function r(t){return r="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},r(t)}function o(t,a){var e=Object.keys(t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(t);a&&(s=s.filter((function(a){return Object.getOwnPropertyDescriptor(t,a).enumerable}))),e.push.apply(e,s)}return e}function c(t,a,e){return(a=function(t){var a=function(t,a){if("object"!==r(t)||null===t)return t;var e=t[Symbol.toPrimitive];if(void 0!==e){var s=e.call(t,a||"default");if("object"!==r(s))return s;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===a?String:Number)(t)}(t,"string");return"symbol"===r(a)?a:String(a)}(a))in t?Object.defineProperty(t,a,{value:e,enumerable:!0,configurable:!0,writable:!0}):t[a]=e,t}const d={name:"Subscriptions",components:{ColorLabel:s.Z,MemberAvatar:i.Z,DatatableWrapper:n.Z},computed:function(t){for(var a=1;a<arguments.length;a++){var e=null!=arguments[a]?arguments[a]:{};a%2?o(Object(e),!0).forEach((function(a){c(t,a,e[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(e)):o(Object(e)).forEach((function(a){Object.defineProperty(t,a,Object.getOwnPropertyDescriptor(e,a))}))}return t}({},(0,l.Se)(["config"])),data:function(){return{isLoading:!0,columns:[{label:this.$t("user"),field:"user_id",sortable:!0},{label:this.$t("status"),field:"status",sortable:!0},{label:this.$t("note"),field:"plan.name",sortable:!0},{label:this.$t("renews_at"),field:"created_at",sortable:!0},{label:this.$t("ends_at"),field:"created_at",sortable:!0},{label:this.$t("service"),field:"driver.driver",sortable:!0}]}}};const p=(0,e(1900).Z)(d,(function(){var t=this,a=t._self._c;return a("div",[t.config.isEmptySubscriptions?t._e():a("DatatableWrapper",{staticClass:"card overflow-x-auto shadow-card",attrs:{api:"/api/subscriptions/admin",paginator:!0,columns:t.columns},on:{init:function(a){t.isLoading=!1}},scopedSlots:t._u([{key:"default",fn:function(e){var s=e.row;return[a("tr",{staticClass:"whitespace-nowrap border-b border-dashed border-light dark:border-opacity-5"},[a("td",{staticClass:"py-5 pr-3 md:pr-1"},[s.data.relationships.user?a("router-link",{staticClass:"flex items-center",attrs:{to:{name:"UserDetail",params:{id:s.data.relationships.user.data.id}}}},[a("MemberAvatar",{attrs:{"is-border":!1,size:36,member:s.data.relationships.user}}),t._v(" "),a("div",{staticClass:"ml-3 pr-10"},[a("b",{staticClass:"max-w-1 block overflow-hidden text-ellipsis whitespace-nowrap text-sm font-bold",staticStyle:{"max-width":"155px"}},[t._v("\n                                    "+t._s(s.data.relationships.user.data.attributes.name)+"\n                                ")]),t._v(" "),a("span",{staticClass:"block text-xs text-gray-600 dark:text-gray-500"},[t._v("\n                                    "+t._s(s.data.relationships.user.data.attributes.email)+"\n                                ")])])],1):a("span",{staticClass:"text-sm font-bold"},[t._v("\n                            -\n                        ")])],1),t._v(" "),a("td",{staticClass:"px-3 md:px-1"},[a("ColorLabel",{attrs:{color:t.$getSubscriptionStatusColor(s.data.attributes.status)}},[t._v("\n                            "+t._s(t.$t(s.data.attributes.status))+"\n                        ")])],1),t._v(" "),a("td",{staticClass:"px-3 md:px-1"},[a("span",{staticClass:"text-limit text-sm font-bold capitalize",staticStyle:{"max-width":"160px"}},[t._v("\n                            "+t._s(s.data.attributes.name)+"\n                        ")]),t._v(" "),a("span",{staticClass:"block text-xs font-bold text-gray-400"},[t._v("\n                            "+t._s(s.data.relationships.plan.data.attributes.price)+"\n                            /\n                            "+t._s(t.$t("interval.".concat(s.data.relationships.plan.data.attributes.interval)))+"\n                        ")])]),t._v(" "),a("td",{staticClass:"px-3 md:px-1"},[a("span",{staticClass:"text-sm font-bold"},[t._v("\n                            "+t._s(s.data.attributes.renews_at)+"\n                        ")])]),t._v(" "),a("td",{staticClass:"px-3 md:px-1"},[a("span",{staticClass:"text-sm font-bold"},[t._v("\n                            "+t._s(s.data.attributes.ends_at?s.data.attributes.ends_at:"-")+"\n                        ")])]),t._v(" "),a("td",{staticClass:"pl-3 text-right md:pl-1"},[a("img",{staticClass:"inline-block max-h-5",attrs:{src:t.$getPaymentLogo(s.data.attributes.driver),alt:s.data.attributes.driver}})])])]}}],null,!1,117935994)}),t._v(" "),t.config.isEmptySubscriptions?a("div",{staticClass:"flex items-center justify-center fixed top-0 bottom-0 left-0 right-0"},[a("div",{staticClass:"text-center"},[a("img",{staticClass:"mb-6 inline-block w-28",attrs:{src:"https://twemoji.maxcdn.com/v/13.1.0/svg/1f5c3.svg",alt:"transaction"}}),t._v(" "),a("h1",{staticClass:"mb-1 text-2xl font-bold"},[t._v("\n                    "+t._s(t.$t("there_is_nothing"))+"\n                ")]),t._v(" "),a("p",{staticClass:"text-sm text-gray-600"},[t._v("\n                    "+t._s(t.$t("all_visible_subscriptions_here"))+"\n                ")])])]):t._e()],1)}),[],!1,null,null,null).exports}}]);