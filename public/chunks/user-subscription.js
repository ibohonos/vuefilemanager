(window.webpackJsonp=window.webpackJsonp||[]).push([[60],{"+t0u":function(t,a,n){var e=n("QO4y");"string"==typeof e&&(e=[[t.i,e,""]]);var i={hmr:!0,transform:void 0,insertInto:void 0};n("aET+")(e,i);e.locals&&(t.exports=e.locals)},"1cvj":function(t,a,n){var e=n("ynfA");"string"==typeof e&&(e=[[t.i,e,""]]);var i={hmr:!0,transform:void 0,insertInto:void 0};n("aET+")(e,i);e.locals&&(t.exports=e.locals)},"3S7p":function(t,a,n){var e=n("6XSv");"string"==typeof e&&(e=[[t.i,e,""]]);var i={hmr:!0,transform:void 0,insertInto:void 0};n("aET+")(e,i);e.locals&&(t.exports=e.locals)},"5XA5":function(t,a,n){var e=n("aUEw");"string"==typeof e&&(e=[[t.i,e,""]]);var i={hmr:!0,transform:void 0,insertInto:void 0};n("aET+")(e,i);e.locals&&(t.exports=e.locals)},"5pbA":function(t,a,n){"use strict";var e=n("+t0u");n.n(e).a},"6TPS":function(t,a,n){"use strict";var e=n("CjXH"),i={props:["data"],computed:{normalizedColumns:function(){return this.data.id&&delete this.data.id,Object.values(this.data)}}},s=(n("FNZF"),n("KHd+")),o=Object(s.a)(i,(function(){var t=this,a=t.$createElement,n=t._self._c||a;return n("tr",{staticClass:"table-row"},t._l(t.normalizedColumns,(function(a,e){return n("td",{key:e,staticClass:"table-cell"},[n("span",[t._v(t._s(a))])])})),0)}),[],!1,null,"15a1e318",null).exports,r=(n("LvDl"),n("vDqi")),l=n.n(r),c={name:"DatatableWrapper",props:["columns","scope","paginator","api","tableData"],components:{ChevronRightIcon:e.h,ChevronLeftIcon:e.g,DatatableCell:o,ChevronUpIcon:e.i},computed:{hasData:function(){return this.data&&this.data.data&&this.data.data.length>0},floatPages:function(){return[this.pageIndex-1,this.pageIndex,this.pageIndex+1]}},data:function(){return{data:void 0,isLoading:!0,pageIndex:1,filter:{sort:"DESC",field:void 0}}},methods:{goToPage:function(t){t>this.data.meta.last_page||0===t||(this.pageIndex=t,this.getPage(t))},sort:function(t,a){a&&(this.filter.field=t,"DESC"===this.filter.sort?this.filter.sort="ASC":"ASC"===this.filter.sort&&(this.filter.sort="DESC"),this.getPage(this.pageIndex))},getPage:function(t){var a=this;this.URI=this.api,this.paginator&&(this.URI=this.URI+"?page="+t),this.filter.field&&(this.URI=this.URI+(this.paginator?"&":"?")+"sort="+this.filter.field+"&direction="+this.filter.sort),this.isLoading=!0,l.a.get(this.URI).then((function(t){a.data=t.data,a.$emit("data",t.data)})).catch((function(){return a.$isSomethingWrong()})).finally((function(){a.$emit("init",!0),a.isLoading=!1}))}},created:function(){this.api&&this.getPage(this.pageIndex),this.tableData&&(this.data=this.tableData,this.isLoading=!1)}},d=(n("HMoj"),Object(s.a)(c,(function(){var t=this,a=t.$createElement,n=t._self._c||a;return n("div",{staticClass:"datatable"},[t.hasData?n("table",{staticClass:"table"},[n("thead",{staticClass:"table-header"},[n("tr",t._l(t.columns,(function(a,e){return a.hidden?t._e():n("th",{key:e,class:{sortable:a.sortable},on:{click:function(n){return t.sort(a.field,a.sortable)}}},[n("span",[t._v(t._s(a.label))]),t._v(" "),a.sortable?n("chevron-up-icon",{staticClass:"filter-arrow",class:{"arrow-down":"ASC"===t.filter.sort},attrs:{size:"14"}}):t._e()],1)})),0)]),t._v(" "),n("tbody",{staticClass:"table-body"},[t._l(t.data.data,(function(a){return t._t("default",[n("DatatableCell",{key:a.id,attrs:{data:a}})],{row:a})}))],2)]):t._e(),t._v(" "),t.isLoading||t.hasData?t._e():t._t("empty-page"),t._v(" "),t.paginator&&t.hasData?n("div",{staticClass:"paginator-wrapper"},[t.data.meta.total>20&&t.data.meta.last_page<=6?n("ul",{staticClass:"pagination"},[n("li",{staticClass:"page-item previous"},[n("a",{staticClass:"page-link",class:{disabled:0==t.pageIndex},on:{click:function(a){return t.goToPage(t.pageIndex-1)}}},[n("chevron-left-icon",{staticClass:"icon",attrs:{size:"14"}})],1)]),t._v(" "),t._l(6,(function(a,e){return n("li",{key:e,staticClass:"page-item",on:{click:function(n){return t.goToPage(a)}}},[n("a",{staticClass:"page-link",class:{active:t.pageIndex===a}},[t._v("\n                    "+t._s(a)+"\n                ")])])})),t._v(" "),n("li",{staticClass:"page-item next"},[n("a",{staticClass:"page-link",class:{disabled:t.pageIndex+1==t.data.meta.last_page},on:{click:function(a){return t.goToPage(t.pageIndex+1)}}},[n("chevron-right-icon",{staticClass:"icon",attrs:{size:"14"}})],1)])],2):t._e(),t._v(" "),t.data.meta.total>20&&t.data.meta.last_page>6?n("ul",{staticClass:"pagination"},[n("li",{staticClass:"page-item previous"},[n("a",{staticClass:"page-link",class:{disabled:0==t.pageIndex},on:{click:function(a){return t.goToPage(t.pageIndex-1)}}},[n("chevron-left-icon",{staticClass:"icon",attrs:{size:"14"}})],1)]),t._v(" "),t.pageIndex>=5?n("li",{staticClass:"page-item",on:{click:function(a){return t.goToPage(1)}}},[n("a",{staticClass:"page-link"},[t._v("\n                    1\n                ")])]):t._e(),t._v(" "),t._l(5,(function(a,e){return t.pageIndex<5?n("li",{key:e,staticClass:"page-item",on:{click:function(n){return t.goToPage(a)}}},[n("a",{staticClass:"page-link",class:{active:t.pageIndex===a}},[t._v("\n                    "+t._s(a)+"\n                ")])]):t._e()})),t._v(" "),t.pageIndex>=5?n("li",{staticClass:"page-item"},[n("a",{staticClass:"page-link"},[t._v("...")])]):t._e(),t._v(" "),t._l(t.floatPages,(function(a,e){return t.pageIndex>=5&&t.pageIndex<t.data.meta.last_page-3?n("li",{key:e,staticClass:"page-item",on:{click:function(n){return t.goToPage(a)}}},[n("a",{staticClass:"page-link",class:{active:t.pageIndex===a}},[t._v("\n                    "+t._s(a)+"\n                ")])]):t._e()})),t._v(" "),t.pageIndex<t.data.meta.last_page-3?n("li",{staticClass:"page-item"},[n("a",{staticClass:"page-link"},[t._v("...")])]):t._e(),t._v(" "),t._l(5,(function(a,e){return t.pageIndex>t.data.meta.last_page-4?n("li",{key:e,staticClass:"page-item",on:{click:function(a){t.goToPage(t.data.meta.last_page-(4-e))}}},[n("a",{staticClass:"page-link",class:{active:t.pageIndex===t.data.meta.last_page-(4-e)}},[t._v("\n                    "+t._s(t.data.meta.last_page-(4-e))+"\n                ")])]):t._e()})),t._v(" "),t.pageIndex<t.data.meta.last_page-3?n("li",{staticClass:"page-item",on:{click:function(a){return t.goToPage(t.data.meta.last_page)}}},[n("a",{staticClass:"page-link"},[t._v("\n                    "+t._s(t.data.meta.last_page)+"\n                ")])]):t._e(),t._v(" "),n("li",{staticClass:"page-item next"},[n("a",{staticClass:"page-link",class:{disabled:t.pageIndex+1==t.data.meta.last_page},on:{click:function(a){return t.goToPage(t.pageIndex+1)}}},[n("chevron-right-icon",{staticClass:"icon",attrs:{size:"14"}})],1)])],2):t._e(),t._v(" "),n("span",{staticClass:"paginator-info"},[t._v(t._s(t.$t("datatable.paginate_info",{visible:t.data.meta.per_page,total:t.data.meta.total})))])]):t._e()],2)}),[],!1,null,"56f3a787",null));a.a=d.exports},"6XSv":function(t,a,n){(t.exports=n("I1BE")(!1)).push([t.i,".list-info-item[data-v-2a52a312] {\n  display: block;\n  padding-bottom: 20px;\n}\n.list-info-item .action-button[data-v-2a52a312] {\n  cursor: pointer;\n}\n.list-info-item .action-button .edit-icon[data-v-2a52a312] {\n  display: inline-block;\n  margin-left: 3px;\n}\n.list-info-item b[data-v-2a52a312] {\n  display: block;\n  font-size: 0.8125em;\n  color: #00BC7E;\n  margin-bottom: 2px;\n}\n.list-info-item span[data-v-2a52a312] {\n  display: inline-block;\n  font-size: 0.875em;\n  font-weight: bold;\n  color: #1B2539;\n}\n@media (prefers-color-scheme: dark) {\n.list-info-item span[data-v-2a52a312] {\n    color: #bec6cf;\n}\n.list-info-item .action-button .icon[data-v-2a52a312] {\n    color: #bec6cf;\n}\n}\n",""])},"6gqG":function(t,a,n){var e=n("ydEr");"string"==typeof e&&(e=[[t.i,e,""]]);var i={hmr:!0,transform:void 0,insertInto:void 0};n("aET+")(e,i);e.locals&&(t.exports=e.locals)},"7OGm":function(t,a,n){"use strict";var e=n("6gqG");n.n(e).a},CtGM:function(t,a,n){"use strict";n.r(a);var e=n("6TPS"),i=n("gahf"),s=n("gy3V"),o=n("eZ9V"),r=n("Nv84"),l=n("qefO"),c=n("KnjL"),d=n("VPMc"),p=n("CjXH"),f=(n("xCqy"),n("vDqi")),b=n.n(f),g={name:"UserSubscription",components:{ExternalLinkIcon:p.r,DatatableWrapper:e.a,ListInfoItem:s.a,PageTabGroup:i.a,ButtonBase:r.a,FormLabel:o.a,ListInfo:d.a,InfoBox:c.a,PageTab:l.a},computed:{status:function(){return this.subscription.attributes.incomplete?this.$t("global.incomplete"):this.subscription.attributes.canceled?this.$t("global.canceled"):this.subscription.attributes.active?this.$t("global.active"):void 0}},data:function(){return{subscription:void 0,isLoading:!0}},created:function(){var t=this;b.a.get("/api/users/"+this.$route.params.id+"/subscription").then((function(a){t.subscription=a.data.data,t.isLoading=!1})).catch((function(a){404==a.response.status&&(t.isLoading=!1)}))}},u=(n("FMOK"),n("KHd+")),v=Object(u.a)(g,(function(){var t=this,a=t.$createElement,n=t._self._c||a;return n("PageTab",{staticClass:"form-fixed-width",attrs:{"is-loading":t.isLoading}},[t.subscription&&!t.isLoading?n("PageTabGroup",[n("FormLabel",[t._v("\n            "+t._s(t.$t("user_subscription.title"))+"\n        ")]),t._v(" "),t.subscription.attributes.canceled?t._e():n("div",{staticClass:"state active"},[n("ListInfo",{staticClass:"list-info"},[n("ListInfoItem",{staticClass:"list-item",attrs:{title:t.$t("user_subscription.plan"),content:t.subscription.attributes.name+" - "+t.subscription.attributes.capacity_formatted}}),t._v(" "),n("ListInfoItem",{staticClass:"list-item",attrs:{title:t.$t("user_subscription.billed"),content:t.$t("admin_page_user.subscription.interval_mo")}}),t._v(" "),n("ListInfoItem",{staticClass:"list-item",attrs:{title:t.$t("user_subscription.status"),content:t.status}}),t._v(" "),n("ListInfoItem",{staticClass:"list-item capitalize",attrs:{title:t.$t("user_subscription.created_at"),content:t.subscription.attributes.created_at}}),t._v(" "),n("ListInfoItem",{staticClass:"list-item capitalize",attrs:{title:t.$t("user_subscription.renews_at"),content:t.subscription.attributes.ends_at}})],1)],1),t._v(" "),t.subscription.attributes.canceled?n("div",{staticClass:"state canceled"},[n("ListInfo",{staticClass:"list-info"},[n("ListInfoItem",{staticClass:"list-item",attrs:{title:t.$t("user_subscription.plan"),content:t.subscription.attributes.name+" - "+t.subscription.attributes.capacity_formatted}}),t._v(" "),n("ListInfoItem",{staticClass:"list-item",attrs:{title:t.$t("user_subscription.status"),content:t.status}}),t._v(" "),n("ListInfoItem",{staticClass:"list-item capitalize",attrs:{title:t.$t("user_subscription.canceled_at"),content:t.subscription.attributes.canceled_at}}),t._v(" "),n("ListInfoItem",{staticClass:"list-item capitalize",attrs:{title:t.$t("user_subscription.ends_at"),content:t.subscription.attributes.ends_at}})],1)],1):t._e()],1):t._e(),t._v(" "),t.subscription||t.isLoading?t._e():n("PageTabGroup",[n("InfoBox",[n("p",[t._v(t._s(t.$t("admin_page_user.subscription.empty")))])])],1)],1)}),[],!1,null,"b3c21da8",null);a.default=v.exports},F74I:function(t,a,n){"use strict";var e=n("3S7p");n.n(e).a},FMOK:function(t,a,n){"use strict";var e=n("wsCn");n.n(e).a},FNZF:function(t,a,n){"use strict";var e=n("Mrvf");n.n(e).a},H1Ir:function(t,a,n){"use strict";var e=n("1cvj");n.n(e).a},HMoj:function(t,a,n){"use strict";var e=n("5XA5");n.n(e).a},Idvm:function(t,a,n){var e=n("lig4");"string"==typeof e&&(e=[[t.i,e,""]]);var i={hmr:!0,transform:void 0,insertInto:void 0};n("aET+")(e,i);e.locals&&(t.exports=e.locals)},KbUq:function(t,a,n){(t.exports=n("I1BE")(!1)).push([t.i,".table-row[data-v-15a1e318] {\n  border-radius: 8px;\n}\n.table-row[data-v-15a1e318]:hover {\n  background: #f4f5f6;\n}\n.table-row .table-cell[data-v-15a1e318] {\n  padding-top: 15px;\n  padding-bottom: 15px;\n}\n.table-row .table-cell[data-v-15a1e318]:first-child {\n  padding-left: 15px;\n}\n.table-row .table-cell[data-v-15a1e318]:last-child {\n  padding-right: 15px;\n  text-align: right;\n}\n.table-row .table-cell span[data-v-15a1e318] {\n  font-size: 1em;\n  font-weight: bold;\n}\n",""])},KnjL:function(t,a,n){"use strict";var e={name:"InfoBox",props:["type"]},i=(n("7OGm"),n("KHd+")),s=Object(i.a)(e,(function(){var t=this.$createElement;return(this._self._c||t)("div",{staticClass:"info-box",class:this.type},[this._t("default")],2)}),[],!1,null,"bf43be5e",null);a.a=s.exports},Mrvf:function(t,a,n){var e=n("KbUq");"string"==typeof e&&(e=[[t.i,e,""]]);var i={hmr:!0,transform:void 0,insertInto:void 0};n("aET+")(e,i);e.locals&&(t.exports=e.locals)},Mtgw:function(t,a,n){(t.exports=n("I1BE")(!1)).push([t.i,".cancel-plan[data-v-b3c21da8] {\n  margin-top: 10px;\n}\n.list-info[data-v-b3c21da8] {\n  display: flex;\n  flex-wrap: wrap;\n}\n.list-info .list-item[data-v-b3c21da8] {\n  flex: 0 0 50%;\n}\n",""])},QO4y:function(t,a,n){(t.exports=n("I1BE")(!1)).push([t.i,"",""])},VPMc:function(t,a,n){"use strict";var e={name:"ListInfo"},i=(n("H1Ir"),n("KHd+")),s=Object(i.a)(e,(function(){var t=this.$createElement;return(this._self._c||t)("ul",{staticClass:"list-info"},[this._t("default")],2)}),[],!1,null,"1ec7c494",null);a.a=s.exports},Xk6H:function(t,a,n){"use strict";var e=n("Idvm");n.n(e).a},aUEw:function(t,a,n){(t.exports=n("I1BE")(!1)).push([t.i,".datatable[data-v-56f3a787] {\n  height: 100%;\n}\n.table-row[data-v-56f3a787] {\n  transition: 0.3s all ease;\n}\n.table-row-enter[data-v-56f3a787],\n.table-row-leave-to[data-v-56f3a787] {\n  opacity: 0;\n  transform: translateY(-100%);\n}\n.table-row-leave-active[data-v-56f3a787] {\n  position: absolute;\n}\n.table[data-v-56f3a787] {\n  width: 100%;\n  border-collapse: collapse;\n  overflow-x: auto;\n}\n.table tr[data-v-56f3a787] {\n  width: 100%;\n}\n.table tr td[data-v-56f3a787]:first-child, .table tr th[data-v-56f3a787]:first-child {\n  padding-left: 15px;\n}\n.table tr td[data-v-56f3a787]:last-child, .table tr th[data-v-56f3a787]:last-child {\n  padding-right: 15px;\n  text-align: right;\n}\n.table .table-header[data-v-56f3a787] {\n  margin-bottom: 10px;\n}\n.table .table-header tr td[data-v-56f3a787], .table .table-header tr th[data-v-56f3a787] {\n  padding: 12px;\n  text-align: left;\n}\n.table .table-header tr td span[data-v-56f3a787], .table .table-header tr th span[data-v-56f3a787] {\n  color: #00BC7E;\n  font-weight: 700;\n  font-size: 0.75em;\n  white-space: nowrap;\n}\n.table .table-header tr td.sortable[data-v-56f3a787], .table .table-header tr th.sortable[data-v-56f3a787] {\n  cursor: pointer;\n}\n.table .table-header tr td.sortable:hover .filter-arrow[data-v-56f3a787], .table .table-header tr th.sortable:hover .filter-arrow[data-v-56f3a787] {\n  opacity: 1;\n}\n.table .table-header tr td[data-v-56f3a787]:last-child, .table .table-header tr th[data-v-56f3a787]:last-child {\n  text-align: right;\n}\n.table .table-header .filter-arrow[data-v-56f3a787] {\n  vertical-align: middle;\n  margin-left: 8px;\n  transition: 0.3s all ease;\n  opacity: 0;\n}\n.table .table-header .filter-arrow path[data-v-56f3a787] {\n  fill: rgba(27, 37, 57, 0.7);\n}\n.table .table-header .filter-arrow.arrow-down[data-v-56f3a787] {\n  transform: rotate(180deg);\n}\n.table .table-header span[data-v-56f3a787] {\n  font-size: 13px;\n  color: rgba(27, 37, 57, 0.7);\n  font-weight: bold;\n}\n.table .table-body tr[data-v-56f3a787] {\n  border-radius: 8px;\n}\n.table .table-body tr[data-v-56f3a787]:hover {\n  background: #f4f5f6;\n}\n.table .table-body tr td[data-v-56f3a787], .table .table-body tr th[data-v-56f3a787] {\n  padding: 12px;\n}\n.table .table-body tr td:last-child button[data-v-56f3a787], .table .table-body tr th:last-child button[data-v-56f3a787] {\n  margin-right: 0;\n}\n.table .table-body span[data-v-56f3a787], .table .table-body a.page-link[data-v-56f3a787] {\n  font-size: 0.9375em;\n  font-weight: 700;\n  padding: 10px 35px 10px 0;\n  display: block;\n  white-space: nowrap;\n}\n.pagination .page-item[data-v-56f3a787] {\n  padding: 3px;\n  display: inline-block;\n}\n.pagination .page-link[data-v-56f3a787] {\n  width: 30px;\n  height: 30px;\n  display: block;\n  color: #1B2539;\n  border-radius: 6px;\n  text-align: center;\n  line-height: 2.4;\n  font-weight: bold;\n  font-size: 13px;\n  cursor: pointer;\n  transition: 0.15s all ease;\n}\n.pagination .page-link .icon[data-v-56f3a787] {\n  vertical-align: middle;\n  margin-top: -2px;\n}\n.pagination .page-link[data-v-56f3a787]:hover:not(.disabled) {\n  background: #f4f5f6;\n  color: #1B2539;\n}\n.pagination .page-link.active[data-v-56f3a787] {\n  color: #1B2539;\n  background: #f4f5f6;\n}\n.pagination .page-link.disabled[data-v-56f3a787] {\n  background: transparent;\n  cursor: default;\n}\n.pagination .page-link.disabled svg path[data-v-56f3a787] {\n  fill: rgba(27, 37, 57, 0.7);\n}\n.paginator-wrapper[data-v-56f3a787] {\n  margin-top: 30px;\n  margin-bottom: 40px;\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n}\n.paginator-wrapper .paginator-info[data-v-56f3a787] {\n  font-size: 13px;\n  color: rgba(27, 37, 57, 0.7);\n}\n.user-preview[data-v-56f3a787] {\n  display: flex;\n  align-items: center;\n  cursor: pointer;\n}\n.user-preview img[data-v-56f3a787] {\n  width: 45px;\n  margin-right: 22px;\n}\n@media only screen and (max-width: 690px) {\n.paginator-wrapper[data-v-56f3a787] {\n    display: block;\n    text-align: center;\n}\n.paginator-wrapper .paginator-info[data-v-56f3a787] {\n    margin-top: 10px;\n    display: block;\n}\n}\n@media (prefers-color-scheme: dark) {\n.table .table-header tr td span[data-v-56f3a787], .table .table-header tr th span[data-v-56f3a787] {\n    color: #00BC7E;\n}\n.table .table-body tr[data-v-56f3a787]:hover, .table .table-body th[data-v-56f3a787]:hover {\n    background: #1e2024;\n}\n.paginator-wrapper .paginator-info[data-v-56f3a787] {\n    color: #7d858c;\n}\n.pagination .page-link[data-v-56f3a787] {\n    color: #7d858c;\n}\n.pagination .page-link svg polyline[data-v-56f3a787] {\n    stroke: #bec6cf;\n}\n.pagination .page-link[data-v-56f3a787]:hover:not(.disabled) {\n    color: #00BC7E;\n    background: rgba(0, 188, 126, 0.1);\n}\n.pagination .page-link.active[data-v-56f3a787] {\n    color: #00BC7E;\n    background: rgba(0, 188, 126, 0.1);\n}\n.pagination .page-link.disabled[data-v-56f3a787] {\n    background: transparent;\n    cursor: default;\n}\n.pagination .page-link.disabled svg polyline[data-v-56f3a787] {\n    stroke: #7d858c;\n}\n}\n",""])},eZ9V:function(t,a,n){"use strict";var e={name:"FormLabel",components:{Edit2Icon:n("CjXH").q}},i=(n("Xk6H"),n("KHd+")),s=Object(i.a)(e,(function(){var t=this.$createElement,a=this._self._c||t;return a("div",{staticClass:"form-label"},[a("edit-2-icon",{staticClass:"icon",attrs:{size:"22"}}),this._v(" "),a("b",{staticClass:"label"},[this._t("default")],2)],1)}),[],!1,null,"c1157a8e",null);a.a=s.exports},gahf:function(t,a,n){"use strict";var e={name:"PageTabGroup"},i=(n("yI2c"),n("KHd+")),s=Object(i.a)(e,(function(){var t=this.$createElement;return(this._self._c||t)("div",{staticClass:"page-tab-group"},[this._t("default")],2)}),[],!1,null,"1bb470e4",null);a.a=s.exports},gy3V:function(t,a,n){"use strict";var e={name:"ListInfoItem",props:["title","content"]},i=(n("F74I"),n("KHd+")),s=Object(i.a)(e,(function(){var t=this,a=t.$createElement,n=t._self._c||a;return n("li",{staticClass:"list-info-item"},[n("b",[t._v(t._s(t.title))]),t._v(" "),t.content?n("span",[t._v(t._s(t.content))]):t._e(),t._v(" "),t._t("default")],2)}),[],!1,null,"2a52a312",null);a.a=s.exports},lig4:function(t,a,n){(t.exports=n("I1BE")(!1)).push([t.i,".form-label[data-v-c1157a8e] {\n  display: flex;\n  align-items: center;\n  margin-bottom: 30px;\n}\n.form-label .icon[data-v-c1157a8e] {\n  margin-right: 10px;\n}\n.form-label .icon path[data-v-c1157a8e] {\n  stroke: #00BC7E;\n}\n.form-label .label[data-v-c1157a8e] {\n  font-size: 1.125em;\n  font-weight: 700;\n}\n@media (prefers-color-scheme: dark) {\n.form-label .label[data-v-c1157a8e] {\n    color: #bec6cf;\n}\n}\n",""])},oDxr:function(t,a,n){(t.exports=n("I1BE")(!1)).push([t.i,".page-tab-group[data-v-1bb470e4] {\n  margin-bottom: 65px;\n}\n",""])},qefO:function(t,a,n){"use strict";var e={name:"PageTab",props:["isLoading"],components:{Spinner:n("zTYo").a}},i=(n("5pbA"),n("KHd+")),s=Object(i.a)(e,(function(){var t=this.$createElement,a=this._self._c||t;return a("div",{staticClass:"page-tab"},[a("div",{directives:[{name:"show",rawName:"v-show",value:this.isLoading,expression:"isLoading"}],attrs:{id:"loader"}},[a("Spinner")],1),this._v(" "),this._t("default")],2)}),[],!1,null,"4339da66",null);a.a=s.exports},wsCn:function(t,a,n){var e=n("Mtgw");"string"==typeof e&&(e=[[t.i,e,""]]);var i={hmr:!0,transform:void 0,insertInto:void 0};n("aET+")(e,i);e.locals&&(t.exports=e.locals)},yI2c:function(t,a,n){"use strict";var e=n("zlQ3");n.n(e).a},ydEr:function(t,a,n){(t.exports=n("I1BE")(!1)).push([t.i,".info-box[data-v-bf43be5e] {\n  padding: 20px;\n  border-radius: 8px;\n  margin-bottom: 32px;\n  background: #f4f5f6;\n  text-align: left;\n}\n.info-box.error[data-v-bf43be5e] {\n  background: rgba(253, 57, 122, 0.1);\n}\n.info-box.error p[data-v-bf43be5e], .info-box.error a[data-v-bf43be5e] {\n  color: #fd397a;\n}\n.info-box.error a[data-v-bf43be5e] {\n  text-decoration: underline;\n}\n.info-box p[data-v-bf43be5e] {\n  font-size: 0.9375em;\n  line-height: 1.6;\n  word-break: break-word;\n  font-weight: 600;\n}\n.info-box p[data-v-bf43be5e] a {\n  color: #00BC7E;\n}\n.info-box b[data-v-bf43be5e] {\n  font-weight: 700;\n  color: #00BC7E;\n}\n.info-box a[data-v-bf43be5e] {\n  color: #00BC7E;\n  font-weight: 700;\n  font-size: 0.9375em;\n  line-height: 1.6;\n}\n.info-box ul[data-v-bf43be5e] {\n  margin-top: 15px;\n  display: block;\n}\n.info-box ul li[data-v-bf43be5e] {\n  display: block;\n}\n.info-box ul li a[data-v-bf43be5e] {\n  display: block;\n}\n@media only screen and (max-width: 690px) {\n.info-box[data-v-bf43be5e] {\n    padding: 15px;\n}\n}\n@media (prefers-color-scheme: dark) {\n.info-box[data-v-bf43be5e] {\n    background: #1e2024;\n}\n.info-box p[data-v-bf43be5e] {\n    color: #bec6cf;\n}\n.info-box ul li[data-v-bf43be5e] {\n    color: #bec6cf;\n}\n}\n",""])},ynfA:function(t,a,n){(t.exports=n("I1BE")(!1)).push([t.i,"",""])},zlQ3:function(t,a,n){var e=n("oDxr");"string"==typeof e&&(e=[[t.i,e,""]]);var i={hmr:!0,transform:void 0,insertInto:void 0};n("aET+")(e,i);e.locals&&(t.exports=e.locals)}}]);