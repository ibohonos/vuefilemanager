(window.webpackJsonp=window.webpackJsonp||[]).push([[89],{"0rhn":function(t,a,e){var n=e("MWZw");"string"==typeof n&&(n=[[t.i,n,""]]);var i={hmr:!0,transform:void 0,insertInto:void 0};e("aET+")(n,i);n.locals&&(t.exports=n.locals)},"2Sb1":function(t,a,e){"use strict";var n={name:"PageHeader",props:["title","canBack"],components:{ChevronLeftIcon:e("CjXH").h}},i=(e("JOXf"),e("KHd+")),o=Object(i.a)(n,(function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"page-header"},[t.canBack?e("div",{staticClass:"go-back",on:{click:function(a){return t.$router.back()}}},[e("chevron-left-icon",{attrs:{size:"17"}})],1):t._e(),t._v(" "),e("div",{staticClass:"content"},[e("h1",{staticClass:"title"},[t._v(t._s(t.title))])])])}),[],!1,null,"9fd0a424",null);a.a=o.exports},"3eeM":function(t,a,e){(t.exports=e("I1BE")(!1)).push([t.i,".page-header[data-v-9fd0a424] {\n  display: flex;\n  align-items: center;\n  background: white;\n  z-index: 9;\n  width: 100%;\n  position: -webkit-sticky;\n  position: sticky;\n  top: 0;\n  padding-top: 20px;\n  padding-bottom: 20px;\n}\n.page-header .title[data-v-9fd0a424] {\n  font-size: 1.125em;\n  font-weight: 700;\n  color: #1B2539;\n}\n.page-header .go-back[data-v-9fd0a424] {\n  margin-right: 10px;\n  cursor: pointer;\n}\n.page-header .go-back svg[data-v-9fd0a424] {\n  vertical-align: middle;\n  margin-top: -4px;\n}\n@media only screen and (max-width: 960px) {\n.page-header .title[data-v-9fd0a424] {\n    font-size: 1.125em;\n}\n}\n@media only screen and (max-width: 690px) {\n.page-header[data-v-9fd0a424] {\n    display: none;\n}\n}\n@media (prefers-color-scheme: dark) {\n.page-header[data-v-9fd0a424] {\n    background: #141414;\n}\n.page-header .title[data-v-9fd0a424] {\n    color: #bec6cf;\n}\n.page-header .icon path[data-v-9fd0a424] {\n    fill: #00BC7E;\n}\n}\n",""])},"6TPS":function(t,a,e){"use strict";var n=e("CjXH"),i={props:["data"],computed:{normalizedColumns:function(){return this.data.id&&delete this.data.id,Object.values(this.data)}}},o=(e("YLwN"),e("KHd+")),s=Object(o.a)(i,(function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("tr",{staticClass:"table-row"},t._l(t.normalizedColumns,(function(a,n){return e("td",{key:n,staticClass:"table-cell"},[e("span",[t._v(t._s(a))])])})),0)}),[],!1,null,"b0f3a8d0",null).exports,l=e("vDqi"),r=e.n(l),d={name:"DatatableWrapper",props:["columns","scope","paginator","api","tableData"],components:{ChevronRightIcon:n.i,ChevronLeftIcon:n.h,DatatableCell:s,ChevronUpIcon:n.j},computed:{hasData:function(){return this.data&&this.data.data&&this.data.data.length>0},floatPages:function(){return[this.pageIndex-1,this.pageIndex,this.pageIndex+1]}},data:function(){return{data:void 0,isLoading:!0,pageIndex:1,filter:{sort:"DESC",field:void 0}}},methods:{goToPage:function(t){t>this.data.meta.last_page||0===t||(this.pageIndex=t,this.getPage(t))},sort:function(t,a){a&&(this.filter.field=t,"DESC"===this.filter.sort?this.filter.sort="ASC":"ASC"===this.filter.sort&&(this.filter.sort="DESC"),this.getPage(this.pageIndex))},getPage:function(t){var a=this;this.URI=this.api,this.paginator&&(this.URI=this.URI+"?page="+t),this.filter.field&&(this.URI=this.URI+(this.paginator?"&":"?")+"sort="+this.filter.field+"&direction="+this.filter.sort),this.isLoading=!0,r.a.get(this.URI).then((function(t){a.data=t.data,a.$emit("data",t.data)})).catch((function(){return a.$isSomethingWrong()})).finally((function(){a.$emit("init",!0),a.isLoading=!1}))}},created:function(){this.api&&this.getPage(this.pageIndex),this.tableData&&(this.data=this.tableData,this.isLoading=!1)}},c=(e("BL2S"),Object(o.a)(d,(function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"datatable"},[t.hasData?e("table",{staticClass:"table"},[e("thead",{staticClass:"table-header"},[e("tr",t._l(t.columns,(function(a,n){return a.hidden?t._e():e("th",{key:n,class:{sortable:a.sortable},on:{click:function(e){return t.sort(a.field,a.sortable)}}},[e("span",{staticClass:"text-theme"},[t._v(t._s(a.label))]),t._v(" "),a.sortable?e("chevron-up-icon",{staticClass:"filter-arrow",class:{"arrow-down":"ASC"===t.filter.sort},attrs:{size:"14"}}):t._e()],1)})),0)]),t._v(" "),e("tbody",{staticClass:"table-body"},[t._l(t.data.data,(function(a){return t._t("default",[e("DatatableCell",{key:a.id,attrs:{data:a}})],{row:a})}))],2)]):t._e(),t._v(" "),t.isLoading||t.hasData?t._e():t._t("empty-page"),t._v(" "),t.paginator&&t.hasData?e("div",{staticClass:"paginator-wrapper"},[t.data.meta.total>20&&t.data.meta.last_page<=6?e("ul",{staticClass:"pagination"},[e("li",{staticClass:"page-item previous"},[e("a",{staticClass:"page-link",class:{disabled:0==t.pageIndex},on:{click:function(a){return t.goToPage(t.pageIndex-1)}}},[e("chevron-left-icon",{staticClass:"icon",attrs:{size:"14"}})],1)]),t._v(" "),t._l(6,(function(a,n){return e("li",{key:n,staticClass:"page-item",on:{click:function(e){return t.goToPage(a)}}},[e("a",{staticClass:"page-link",class:{active:t.pageIndex===a}},[t._v("\n                    "+t._s(a)+"\n                ")])])})),t._v(" "),e("li",{staticClass:"page-item next"},[e("a",{staticClass:"page-link",class:{disabled:t.pageIndex+1==t.data.meta.last_page},on:{click:function(a){return t.goToPage(t.pageIndex+1)}}},[e("chevron-right-icon",{staticClass:"icon",attrs:{size:"14"}})],1)])],2):t._e(),t._v(" "),t.data.meta.total>20&&t.data.meta.last_page>6?e("ul",{staticClass:"pagination"},[e("li",{staticClass:"page-item previous"},[e("a",{staticClass:"page-link",class:{disabled:0==t.pageIndex},on:{click:function(a){return t.goToPage(t.pageIndex-1)}}},[e("chevron-left-icon",{staticClass:"icon",attrs:{size:"14"}})],1)]),t._v(" "),t.pageIndex>=5?e("li",{staticClass:"page-item",on:{click:function(a){return t.goToPage(1)}}},[e("a",{staticClass:"page-link"},[t._v("\n                    1\n                ")])]):t._e(),t._v(" "),t._l(5,(function(a,n){return t.pageIndex<5?e("li",{key:n,staticClass:"page-item",on:{click:function(e){return t.goToPage(a)}}},[e("a",{staticClass:"page-link",class:{active:t.pageIndex===a}},[t._v("\n                    "+t._s(a)+"\n                ")])]):t._e()})),t._v(" "),t.pageIndex>=5?e("li",{staticClass:"page-item"},[e("a",{staticClass:"page-link"},[t._v("...")])]):t._e(),t._v(" "),t._l(t.floatPages,(function(a,n){return t.pageIndex>=5&&t.pageIndex<t.data.meta.last_page-3?e("li",{key:n,staticClass:"page-item",on:{click:function(e){return t.goToPage(a)}}},[e("a",{staticClass:"page-link",class:{active:t.pageIndex===a}},[t._v("\n                    "+t._s(a)+"\n                ")])]):t._e()})),t._v(" "),t.pageIndex<t.data.meta.last_page-3?e("li",{staticClass:"page-item"},[e("a",{staticClass:"page-link"},[t._v("...")])]):t._e(),t._v(" "),t._l(5,(function(a,n){return t.pageIndex>t.data.meta.last_page-4?e("li",{key:n,staticClass:"page-item",on:{click:function(a){t.goToPage(t.data.meta.last_page-(4-n))}}},[e("a",{staticClass:"page-link",class:{active:t.pageIndex===t.data.meta.last_page-(4-n)}},[t._v("\n                    "+t._s(t.data.meta.last_page-(4-n))+"\n                ")])]):t._e()})),t._v(" "),t.pageIndex<t.data.meta.last_page-3?e("li",{staticClass:"page-item",on:{click:function(a){return t.goToPage(t.data.meta.last_page)}}},[e("a",{staticClass:"page-link"},[t._v("\n                    "+t._s(t.data.meta.last_page)+"\n                ")])]):t._e(),t._v(" "),e("li",{staticClass:"page-item next"},[e("a",{staticClass:"page-link",class:{disabled:t.pageIndex+1==t.data.meta.last_page},on:{click:function(a){return t.goToPage(t.pageIndex+1)}}},[e("chevron-right-icon",{staticClass:"icon",attrs:{size:"14"}})],1)])],2):t._e(),t._v(" "),e("span",{staticClass:"paginator-info"},[t._v(t._s(t.$t("datatable.paginate_info",{visible:t.data.meta.per_page,total:t.data.meta.total})))])]):t._e()],2)}),[],!1,null,"bee2ed74",null));a.a=c.exports},"7h7L":function(t,a,e){"use strict";var n=e("vAU0");e.n(n).a},BL2S:function(t,a,e){"use strict";var n=e("XG7Q");e.n(n).a},CK9m:function(t,a,e){var n=e("Wx07");"string"==typeof n&&(n=[[t.i,n,""]]);var i={hmr:!0,transform:void 0,insertInto:void 0};e("aET+")(n,i);n.locals&&(t.exports=n.locals)},CLdG:function(t,a,e){(t.exports=e("I1BE")(!1)).push([t.i,".preview-list-icon rect, .preview-list-icon line {\n  color: inherit;\n}\n",""])},D62o:function(t,a,e){"use strict";var n=e("xCqy"),i=e("CjXH"),o={name:"MobileHeader",props:["title"],components:{ChevronLeftIcon:i.h,MenuIcon:i.P},methods:{showMobileNavigation:function(){n.a.$emit("mobile-menu:show","user-navigation")},goBack:function(){this.$router.back()}}},s=(e("R6Y3"),e("KHd+")),l=Object(s.a)(o,(function(){var t=this.$createElement,a=this._self._c||t;return a("header",{staticClass:"mobile-header"},[a("div",{staticClass:"go-back",on:{click:this.goBack}},[a("chevron-left-icon",{staticClass:"icon",attrs:{size:"17"}})],1),this._v(" "),a("div",{staticClass:"location-name"},[this._v(this._s(this.title))]),this._v(" "),a("div",{staticClass:"mobile-menu",on:{click:this.showMobileNavigation}},[a("menu-icon",{staticClass:"icon",attrs:{size:"17"}})],1)])}),[],!1,null,"699fe34a",null);a.a=l.exports},GELx:function(t,a,e){"use strict";var n={name:"DatatableCellImage",props:["image","title","description","image-size"]},i=(e("Tm5p"),e("KHd+")),o=Object(i.a)(n,(function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"cell-image-thumbnail"},[t.image?e("div",{staticClass:"image",class:t.imageSize},[e("img",{attrs:{src:t.image,alt:t.title}}),t._v(" "),e("img",{staticClass:"blurred",attrs:{src:t.image,alt:t.title}})]):t._e(),t._v(" "),e("div",{staticClass:"info"},[t.title?e("b",{staticClass:"name"},[t._v(t._s(t.title))]):t._e(),t._v(" "),t.description?e("span",{staticClass:"description"},[t._v(t._s(t.description))]):t._e()])])}),[],!1,null,"2cd07f63",null);a.a=o.exports},Gc5Z:function(t,a,e){var n=e("dtPa");"string"==typeof n&&(n=[[t.i,n,""]]);var i={hmr:!0,transform:void 0,insertInto:void 0};e("aET+")(n,i);n.locals&&(t.exports=n.locals)},JOXf:function(t,a,e){"use strict";var n=e("nr4+");e.n(n).a},JsZR:function(t,a,e){"use strict";var n=e("mGdo");e.n(n).a},MWZw:function(t,a,e){(t.exports=e("I1BE")(!1)).push([t.i,".color-label[data-v-5c508dbf] {\n  text-transform: capitalize;\n  font-size: 0.75em;\n  display: inline-block;\n  border-radius: 6px;\n  font-weight: 700;\n  padding: 4px 6px;\n}\n.color-label.purple[data-v-5c508dbf] {\n  color: #9D66FE;\n  background: rgba(157, 102, 254, 0.1);\n}\n.color-label.yellow[data-v-5c508dbf] {\n  color: #FFBD2D;\n  background: rgba(255, 189, 45, 0.1);\n}\n.color-label.green[data-v-5c508dbf] {\n  color: #00BC7E;\n  background: rgba(0, 188, 126, 0.1);\n}\n.color-label.red[data-v-5c508dbf] {\n  color: #fd397a;\n  background: rgba(253, 57, 122, 0.1);\n}\n",""])},R6Y3:function(t,a,e){"use strict";var n=e("Xm12");e.n(n).a},SdtT:function(t,a,e){(t.exports=e("I1BE")(!1)).push([t.i,".datatable[data-v-bee2ed74] {\n  height: 100%;\n}\n.table-row[data-v-bee2ed74] {\n  transition: 0.3s all ease;\n}\n.table-row-enter[data-v-bee2ed74],\n.table-row-leave-to[data-v-bee2ed74] {\n  opacity: 0;\n  transform: translateY(-100%);\n}\n.table-row-leave-active[data-v-bee2ed74] {\n  position: absolute;\n}\n.table[data-v-bee2ed74] {\n  width: 100%;\n  border-collapse: collapse;\n  overflow-x: auto;\n}\n.table tr[data-v-bee2ed74] {\n  width: 100%;\n}\n.table tr td[data-v-bee2ed74]:first-child, .table tr th[data-v-bee2ed74]:first-child {\n  padding-left: 15px;\n}\n.table tr td[data-v-bee2ed74]:last-child, .table tr th[data-v-bee2ed74]:last-child {\n  padding-right: 15px;\n  text-align: right;\n}\n.table .table-header[data-v-bee2ed74] {\n  margin-bottom: 10px;\n}\n.table .table-header tr td[data-v-bee2ed74], .table .table-header tr th[data-v-bee2ed74] {\n  padding: 12px;\n  text-align: left;\n}\n.table .table-header tr td span[data-v-bee2ed74], .table .table-header tr th span[data-v-bee2ed74] {\n  font-weight: 700;\n  font-size: 0.75em;\n  white-space: nowrap;\n}\n.table .table-header tr td.sortable[data-v-bee2ed74], .table .table-header tr th.sortable[data-v-bee2ed74] {\n  cursor: pointer;\n}\n.table .table-header tr td.sortable:hover .filter-arrow[data-v-bee2ed74], .table .table-header tr th.sortable:hover .filter-arrow[data-v-bee2ed74] {\n  opacity: 1;\n}\n.table .table-header tr td[data-v-bee2ed74]:last-child, .table .table-header tr th[data-v-bee2ed74]:last-child {\n  text-align: right;\n}\n.table .table-header .filter-arrow[data-v-bee2ed74] {\n  vertical-align: middle;\n  margin-left: 8px;\n  transition: 0.3s all ease;\n  opacity: 0;\n}\n.table .table-header .filter-arrow path[data-v-bee2ed74] {\n  fill: rgba(27, 37, 57, 0.7);\n}\n.table .table-header .filter-arrow.arrow-down[data-v-bee2ed74] {\n  transform: rotate(180deg);\n}\n.table .table-header span[data-v-bee2ed74] {\n  font-size: 13px;\n  font-weight: bold;\n}\n.table .table-body tr[data-v-bee2ed74] {\n  border-radius: 8px;\n}\n.table .table-body tr[data-v-bee2ed74]:hover {\n  background: #f4f5f6;\n}\n.table .table-body tr td[data-v-bee2ed74], .table .table-body tr th[data-v-bee2ed74] {\n  padding: 12px;\n}\n.table .table-body tr td:last-child button[data-v-bee2ed74], .table .table-body tr th:last-child button[data-v-bee2ed74] {\n  margin-right: 0;\n}\n.table .table-body span[data-v-bee2ed74], .table .table-body a.page-link[data-v-bee2ed74] {\n  font-size: 0.9375em;\n  font-weight: 700;\n  padding: 10px 35px 10px 0;\n  display: block;\n  white-space: nowrap;\n}\n.pagination .page-item[data-v-bee2ed74] {\n  padding: 3px;\n  display: inline-block;\n}\n.pagination .page-link[data-v-bee2ed74] {\n  width: 30px;\n  height: 30px;\n  display: block;\n  color: #1B2539;\n  border-radius: 6px;\n  text-align: center;\n  line-height: 2.4;\n  font-weight: bold;\n  font-size: 13px;\n  cursor: pointer;\n  transition: 0.15s all ease;\n}\n.pagination .page-link .icon[data-v-bee2ed74] {\n  vertical-align: middle;\n  margin-top: -2px;\n}\n.pagination .page-link[data-v-bee2ed74]:hover:not(.disabled) {\n  background: #f4f5f6;\n  color: #1B2539;\n}\n.pagination .page-link.active[data-v-bee2ed74] {\n  color: #1B2539;\n  background: #f4f5f6;\n}\n.pagination .page-link.disabled[data-v-bee2ed74] {\n  background: transparent;\n  cursor: default;\n}\n.pagination .page-link.disabled svg path[data-v-bee2ed74] {\n  fill: rgba(27, 37, 57, 0.7);\n}\n.paginator-wrapper[data-v-bee2ed74] {\n  margin-top: 30px;\n  margin-bottom: 40px;\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n}\n.paginator-wrapper .paginator-info[data-v-bee2ed74] {\n  font-size: 13px;\n  color: rgba(27, 37, 57, 0.7);\n}\n.user-preview[data-v-bee2ed74] {\n  display: flex;\n  align-items: center;\n  cursor: pointer;\n}\n.user-preview img[data-v-bee2ed74] {\n  width: 45px;\n  margin-right: 22px;\n}\n@media only screen and (max-width: 690px) {\n.paginator-wrapper[data-v-bee2ed74] {\n    display: block;\n    text-align: center;\n}\n.paginator-wrapper .paginator-info[data-v-bee2ed74] {\n    margin-top: 10px;\n    display: block;\n}\n}\n@media (prefers-color-scheme: dark) {\n.table .table-body tr[data-v-bee2ed74]:hover, .table .table-body th[data-v-bee2ed74]:hover {\n    background: #1e2024;\n}\n.paginator-wrapper .paginator-info[data-v-bee2ed74] {\n    color: #7d858c;\n}\n.pagination .page-link[data-v-bee2ed74] {\n    color: #7d858c;\n}\n.pagination .page-link svg polyline[data-v-bee2ed74] {\n    stroke: #bec6cf;\n}\n.pagination .page-link[data-v-bee2ed74]:hover:not(.disabled) {\n    color: #00BC7E;\n    background: rgba(0, 188, 126, 0.1);\n}\n.pagination .page-link.active[data-v-bee2ed74] {\n    color: #00BC7E;\n    background: rgba(0, 188, 126, 0.1);\n}\n.pagination .page-link.disabled[data-v-bee2ed74] {\n    background: transparent;\n    cursor: default;\n}\n.pagination .page-link.disabled svg polyline[data-v-bee2ed74] {\n    stroke: #7d858c;\n}\n}\n",""])},THmQ:function(t,a,e){"use strict";var n={name:"SectionTitle"},i=(e("UHE7"),e("KHd+")),o=Object(i.a)(n,(function(){var t=this.$createElement;return(this._self._c||t)("b",{staticClass:"text-label"},[this._t("default")],2)}),[],!1,null,"6d799cf2",null);a.a=o.exports},Tm5p:function(t,a,e){"use strict";var n=e("XGzT");e.n(n).a},UHE7:function(t,a,e){"use strict";var n=e("UmJ6");e.n(n).a},UmJ6:function(t,a,e){var n=e("vFyo");"string"==typeof n&&(n=[[t.i,n,""]]);var i={hmr:!0,transform:void 0,insertInto:void 0};e("aET+")(n,i);n.locals&&(t.exports=n.locals)},WFjI:function(t,a,e){"use strict";e("JsZR");var n=e("KHd+"),i=Object(n.a)({},(function(){var t=this.$createElement,a=this._self._c||t;return a("svg",{staticClass:"preview-list-icon",attrs:{fill:"none",stroke:"currentColor","stroke-width":"1.5","fill-rule":"evenodd","stroke-linecap":"round","stroke-linejoin":"round",width:"15px",height:"15px",viewBox:"0 0 20 16",version:"1.1",xmlns:"http://www.w3.org/2000/svg","xmlns:xlink":"http://www.w3.org/1999/xlink"}},[a("rect",{attrs:{x:"9.77777778",y:"0",width:"6.22222222",height:"6.22222222"}}),this._v(" "),a("rect",{attrs:{x:"9.77777778",y:"9.77777778",width:"6.22222222",height:"6.22222222"}}),this._v(" "),a("line",{attrs:{x1:"0",y1:"2",x2:"6",y2:"2"}}),this._v(" "),a("line",{attrs:{x1:"0",y1:"8",x2:"6",y2:"8"}}),this._v(" "),a("line",{attrs:{x1:"0",y1:"14",x2:"6",y2:"14"}})])}),[],!1,null,null,null);a.a=i.exports},Wx07:function(t,a,e){(t.exports=e("I1BE")(!1)).push([t.i,".table-row[data-v-b0f3a8d0] {\n  border-radius: 8px;\n}\n.table-row[data-v-b0f3a8d0]:hover {\n  background: #f4f5f6;\n}\n.table-row .table-cell[data-v-b0f3a8d0] {\n  padding-top: 15px;\n  padding-bottom: 15px;\n}\n.table-row .table-cell[data-v-b0f3a8d0]:first-child {\n  padding-left: 15px;\n}\n.table-row .table-cell[data-v-b0f3a8d0]:last-child {\n  padding-right: 15px;\n  text-align: right;\n}\n.table-row .table-cell span[data-v-b0f3a8d0] {\n  font-size: 1em;\n  font-weight: bold;\n}\n",""])},XG7Q:function(t,a,e){var n=e("SdtT");"string"==typeof n&&(n=[[t.i,n,""]]);var i={hmr:!0,transform:void 0,insertInto:void 0};e("aET+")(n,i);n.locals&&(t.exports=n.locals)},XGzT:function(t,a,e){var n=e("eE9K");"string"==typeof n&&(n=[[t.i,n,""]]);var i={hmr:!0,transform:void 0,insertInto:void 0};e("aET+")(n,i);n.locals&&(t.exports=n.locals)},Xm12:function(t,a,e){var n=e("q8nf");"string"==typeof n&&(n=[[t.i,n,""]]);var i={hmr:!0,transform:void 0,insertInto:void 0};e("aET+")(n,i);n.locals&&(t.exports=n.locals)},YLwN:function(t,a,e){"use strict";var n=e("CK9m");e.n(n).a},ZIRg:function(t,a,e){"use strict";e.r(a);var n=e("GELx"),i=e("6TPS"),o=e("t5U/"),s=e("D62o"),l=e("THmQ"),r=e("Nv84"),d=e("CjXH"),c=e("2Sb1"),p=e("kPoH"),b=e("zTYo"),g=e("L2JU");e("vDqi");function u(t,a){var e=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);a&&(n=n.filter((function(a){return Object.getOwnPropertyDescriptor(t,a).enumerable}))),e.push.apply(e,n)}return e}function v(t,a,e){return a in t?Object.defineProperty(t,a,{value:e,enumerable:!0,configurable:!0,writable:!0}):t[a]=e,t}var f={name:"Profile",components:{DatatableCellImage:n.a,MobileActionButton:o.a,DatatableWrapper:i.a,SectionTitle:l.a,MobileHeader:s.a,Trash2Icon:d.gb,PageHeader:c.a,ButtonBase:r.a,ColorLabel:p.a,Edit2Icon:d.t,Spinner:b.a},computed:function(t){for(var a=1;a<arguments.length;a++){var e=null!=arguments[a]?arguments[a]:{};a%2?u(Object(e),!0).forEach((function(a){v(t,a,e[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(e)):u(Object(e)).forEach((function(a){Object.defineProperty(t,a,Object.getOwnPropertyDescriptor(e,a))}))}return t}({},Object(g.b)(["config"])),data:function(){return{isLoading:!0,columns:void 0}},methods:{getRoleColor:function(t){switch(t){case"admin":return"purple";case"user":return"yellow"}}},created:function(){this.columns=[{label:this.$t("admin_page_user.table.name"),field:"email",sortable:!0},{label:this.$t("admin_page_user.table.role"),field:"role",sortable:!0},{label:this.$t("admin_page_user.table.plan"),field:"subscription",sortable:!1,hidden:!this.config.isSaaS},{label:this.$t("admin_page_user.table.storage_used"),field:"used",sortable:!0},{label:this.$t("admin_page_user.table.storage_capacity"),field:"settings.storage_capacity",sortable:!0,hidden:!this.config.storageLimit},{label:this.$t("admin_page_user.table.created_at"),field:"created_at",sortable:!0},{label:this.$t("admin_page_user.table.action"),field:"data.action",sortable:!1}]}},h=(e("7h7L"),e("KHd+")),m=Object(h.a)(f,(function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{attrs:{id:"single-page"}},[e("div",{attrs:{id:"page-content"}},[e("MobileHeader",{attrs:{title:t.$t(t.$router.currentRoute.meta.title)}}),t._v(" "),e("PageHeader",{attrs:{title:t.$t(t.$router.currentRoute.meta.title)}}),t._v(" "),e("div",{staticClass:"content-page"},[e("div",{staticClass:"table-tools"},[e("div",{staticClass:"buttons"},[e("router-link",{attrs:{to:{name:"UserCreate"}}},[e("MobileActionButton",{attrs:{icon:"user-plus"}},[t._v("\n                            "+t._s(t.$t("admin_page_user.create_user.submit"))+"\n                        ")])],1)],1)]),t._v(" "),e("DatatableWrapper",{staticClass:"table table-users",attrs:{api:"/api/admin/users",paginator:!0,columns:t.columns},on:{init:function(a){t.isLoading=!1}},scopedSlots:t._u([{key:"default",fn:function(a){var n=a.row;return[e("tr",[e("td",{staticStyle:{"min-width":"320px"}},[e("router-link",{attrs:{to:{name:"UserDetail",params:{id:n.data.id}}}},[e("DatatableCellImage",{attrs:{image:n.data.relationships.settings.data.attributes.avatar,title:n.data.relationships.settings.data.attributes.name,description:n.data.attributes.email}})],1)],1),t._v(" "),e("td",[e("ColorLabel",{attrs:{color:t.getRoleColor(n.data.attributes.role)}},[t._v("\n                                "+t._s(n.data.attributes.role)+"\n                            ")])],1),t._v(" "),t.config.isSaaS?e("td",[n.data.attributes.subscription?e("span",{staticClass:"cell-item"},[t._v("\n                                "+t._s(t.$t("global.premium"))+"\n                            ")]):e("span",{staticClass:"cell-item"},[t._v("\n                                "+t._s(t.$t("global.free"))+"\n                            ")])]):t._e(),t._v(" "),e("td",[0!==n.data.attributes.storage.capacity?e("span",{staticClass:"cell-item"},[t._v("\n                                "+t._s(n.data.attributes.storage.used_formatted)+"\n                            ")]):t._e(),t._v(" "),0==n.data.attributes.storage.capacity?e("span",{staticClass:"cell-item"},[t._v("\n                                -\n                            ")]):t._e()]),t._v(" "),t.config.storageLimit?e("td",[0!==n.data.attributes.storage.capacity?e("span",{staticClass:"cell-item"},[t._v("\n                                "+t._s(n.data.attributes.storage.capacity_formatted)+"\n                            ")]):t._e(),t._v(" "),0==n.data.attributes.storage.capacity?e("span",{staticClass:"cell-item"},[t._v("\n                                -\n                            ")]):t._e()]):t._e(),t._v(" "),e("td",[e("span",{staticClass:"cell-item"},[t._v("\n                                "+t._s(n.data.attributes.created_at_formatted)+"\n                            ")])]),t._v(" "),e("td",[e("div",{staticClass:"action-icons"},[e("router-link",{attrs:{to:{name:"UserDetail",params:{id:n.data.id}}}},[e("Edit2Icon",{staticClass:"icon icon-edit",attrs:{size:"15"}})],1),t._v(" "),e("router-link",{attrs:{to:{name:"UserDelete",params:{id:n.data.id}}}},[e("Trash2Icon",{staticClass:"icon icon-trash",attrs:{size:"15"}})],1)],1)])])]}}])})],1)],1),t._v(" "),t.isLoading?e("div",{attrs:{id:"loader"}},[e("Spinner")],1):t._e()])}),[],!1,null,"12c5b85a",null);a.default=m.exports},c9pc:function(t,a,e){(t.exports=e("I1BE")(!1)).push([t.i,".table-tools[data-v-12c5b85a] {\n  background: white;\n  display: flex;\n  justify-content: space-between;\n  padding: 15px 0 10px;\n  position: -webkit-sticky;\n  position: sticky;\n  top: 40px;\n  z-index: 9;\n}\n.table .cell-item[data-v-12c5b85a] {\n  font-size: 0.9375em;\n  white-space: nowrap;\n}\n@media only screen and (max-width: 690px) {\n.table-tools[data-v-12c5b85a] {\n    padding: 0 0 5px;\n}\n}\n@media (prefers-color-scheme: dark) {\n.table-tools[data-v-12c5b85a] {\n    background: #141414;\n}\n}\n",""])},dtPa:function(t,a,e){(t.exports=e("I1BE")(!1)).push([t.i,".mobile-action-button[data-v-7b8372d6] {\n  background: #f4f5f6;\n  margin-right: 8px;\n  border-radius: 8px;\n  padding: 7px 14px;\n  cursor: pointer;\n  border: none;\n  transition: 150ms all ease;\n}\n.mobile-action-button .flex[data-v-7b8372d6] {\n  display: flex;\n  align-items: center;\n}\n.mobile-action-button .icon[data-v-7b8372d6] {\n  margin-right: 10px;\n  font-size: 0.875em;\n}\n.mobile-action-button .icon path[data-v-7b8372d6], .mobile-action-button .icon line[data-v-7b8372d6], .mobile-action-button .icon polyline[data-v-7b8372d6], .mobile-action-button .icon rect[data-v-7b8372d6], .mobile-action-button .icon circle[data-v-7b8372d6], .mobile-action-button .icon polygon[data-v-7b8372d6] {\n  transition: 150ms all ease;\n}\n.mobile-action-button .label[data-v-7b8372d6] {\n  transition: 150ms all ease;\n  font-size: 0.875em;\n  font-weight: 700;\n  color: #1B2539;\n}\n.mobile-action-button[data-v-7b8372d6]:active {\n  transform: scale(0.95);\n}\n@media (prefers-color-scheme: dark) {\n.mobile-action-button[data-v-7b8372d6] {\n    background: #1e2024;\n}\n.mobile-action-button path[data-v-7b8372d6], .mobile-action-button line[data-v-7b8372d6], .mobile-action-button polyline[data-v-7b8372d6], .mobile-action-button rect[data-v-7b8372d6], .mobile-action-button circle[data-v-7b8372d6], .mobile-action-button polygon[data-v-7b8372d6] {\n    color: inherit;\n}\n.mobile-action-button .label[data-v-7b8372d6] {\n    color: #bec6cf;\n}\n}\n",""])},eE9K:function(t,a,e){(t.exports=e("I1BE")(!1)).push([t.i,".cell-image-thumbnail[data-v-2cd07f63] {\n  display: flex;\n  align-items: center;\n  cursor: pointer;\n}\n.cell-image-thumbnail .image[data-v-2cd07f63] {\n  margin-right: 20px;\n  line-height: 0;\n  position: relative;\n}\n.cell-image-thumbnail .image img[data-v-2cd07f63] {\n  line-height: 0;\n  width: 48px;\n  height: 48px;\n  border-radius: 8px;\n  z-index: 1;\n  position: relative;\n}\n.cell-image-thumbnail .image img.blurred[data-v-2cd07f63] {\n  position: absolute;\n  left: 0;\n  top: 2px;\n  z-index: 0;\n  -webkit-filter: blur(8px);\n          filter: blur(8px);\n  opacity: 0.5;\n}\n.cell-image-thumbnail .image.small img[data-v-2cd07f63] {\n  width: 32px;\n  height: 32px;\n}\n.cell-image-thumbnail .info .name[data-v-2cd07f63], .cell-image-thumbnail .info .description[data-v-2cd07f63] {\n  max-width: 150px;\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  display: block;\n}\n.cell-image-thumbnail .info .name[data-v-2cd07f63] {\n  font-size: 0.9375em;\n  line-height: 1;\n  color: #1B2539;\n}\n.cell-image-thumbnail .info .description[data-v-2cd07f63] {\n  color: rgba(27, 37, 57, 0.7);\n  font-size: 0.75em;\n}\n@media (prefers-color-scheme: dark) {\n.cell-image-thumbnail .image img.blurred[data-v-2cd07f63] {\n    display: none;\n}\n.cell-image-thumbnail .info .name[data-v-2cd07f63] {\n    color: #bec6cf;\n}\n.cell-image-thumbnail .info .description[data-v-2cd07f63] {\n    color: #7d858c;\n}\n}\n",""])},kPoH:function(t,a,e){"use strict";var n={name:"ColorLabel",props:["color"]},i=(e("m6y/"),e("KHd+")),o=Object(i.a)(n,(function(){var t=this.$createElement;return(this._self._c||t)("b",{staticClass:"color-label",class:this.color},[this._t("default")],2)}),[],!1,null,"5c508dbf",null);a.a=o.exports},"m6y/":function(t,a,e){"use strict";var n=e("0rhn");e.n(n).a},mGdo:function(t,a,e){var n=e("CLdG");"string"==typeof n&&(n=[[t.i,n,""]]);var i={hmr:!0,transform:void 0,insertInto:void 0};e("aET+")(n,i);n.locals&&(t.exports=n.locals)},"nr4+":function(t,a,e){var n=e("3eeM");"string"==typeof n&&(n=[[t.i,n,""]]);var i={hmr:!0,transform:void 0,insertInto:void 0};e("aET+")(n,i);n.locals&&(t.exports=n.locals)},q8nf:function(t,a,e){(t.exports=e("I1BE")(!1)).push([t.i,".mobile-header[data-v-699fe34a] {\n  padding: 10px 0;\n  text-align: center;\n  background: white;\n  position: -webkit-sticky;\n  position: sticky;\n  display: none;\n  z-index: 6;\n  top: 0;\n}\n.mobile-header > div[data-v-699fe34a] {\n  flex-grow: 1;\n  align-self: center;\n  white-space: nowrap;\n}\n.mobile-header .go-back[data-v-699fe34a] {\n  text-align: left;\n}\n.mobile-header .location-name[data-v-699fe34a] {\n  line-height: 1;\n  text-align: center;\n  width: 100%;\n  vertical-align: middle;\n  font-size: 0.9375em;\n  color: #1B2539;\n  font-weight: 700;\n  max-width: 220px;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  display: inline-block;\n}\n.mobile-header .mobile-menu[data-v-699fe34a] {\n  text-align: right;\n}\n.mobile-header .icon[data-v-699fe34a] {\n  vertical-align: middle;\n  margin-top: -4px;\n}\n@media only screen and (max-width: 690px) {\n.mobile-header[data-v-699fe34a] {\n    display: flex;\n    margin-bottom: 15px;\n}\n}\n@media (prefers-color-scheme: dark) {\n.mobile-header[data-v-699fe34a] {\n    background: #141414;\n}\n.mobile-header .location-name[data-v-699fe34a] {\n    color: #bec6cf;\n}\n}\n",""])},"t5U/":function(t,a,e){"use strict";var n=e("CjXH"),i=e("WFjI"),o={name:"MobileActionButton",props:["icon"],components:{FilePlusIcon:n.z,SortingIcon:i.a,CheckSquareIcon:n.f,DollarSignIcon:n.r,CreditCardIcon:n.p,FolderPlusIcon:n.D,UserPlusIcon:n.lb,XSquareIcon:n.pb,FilterIcon:n.B,CheckIcon:n.e,TrashIcon:n.hb,PlusIcon:n.V,ListIcon:n.M,GridIcon:n.F}},s=(e("zKuA"),e("KHd+")),l=Object(s.a)(o,(function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("button",{staticClass:"mobile-action-button"},[e("div",{staticClass:"flex"},["file-plus"===t.icon?e("file-plus-icon",{staticClass:"icon dark-text-theme",attrs:{size:"15"}}):t._e(),t._v(" "),"filter"===t.icon?e("filter-icon",{staticClass:"icon dark-text-theme",attrs:{size:"15"}}):t._e(),t._v(" "),"credit-card"===t.icon?e("credit-card-icon",{staticClass:"icon dark-text-theme",attrs:{size:"15"}}):t._e(),t._v(" "),"folder-plus"===t.icon?e("folder-plus-icon",{staticClass:"icon dark-text-theme",attrs:{size:"15"}}):t._e(),t._v(" "),"th-list"===t.icon?e("list-icon",{staticClass:"icon dark-text-theme",attrs:{size:"15"}}):t._e(),t._v(" "),"trash"===t.icon?e("trash-icon",{staticClass:"icon dark-text-theme",attrs:{size:"15"}}):t._e(),t._v(" "),"th"===t.icon?e("grid-icon",{staticClass:"icon dark-text-theme",attrs:{size:"15"}}):t._e(),t._v(" "),"user-plus"===t.icon?e("user-plus-icon",{staticClass:"icon dark-text-theme",attrs:{size:"15"}}):t._e(),t._v(" "),"plus"===t.icon?e("plus-icon",{staticClass:"icon dark-text-theme",attrs:{size:"15"}}):t._e(),t._v(" "),"check-square"===t.icon?e("check-square-icon",{staticClass:"icon dark-text-theme",attrs:{size:"15"}}):t._e(),t._v(" "),"x-square"===t.icon?e("x-square-icon",{staticClass:"icon dark-text-theme",attrs:{size:"15"}}):t._e(),t._v(" "),"check"===t.icon?e("check-icon",{staticClass:"icon dark-text-theme",attrs:{size:"15"}}):t._e(),t._v(" "),"dollar-sign"===t.icon?e("dollar-sign-icon",{staticClass:"icon dark-text-theme",attrs:{size:"15"}}):t._e(),t._v(" "),"preview-sorting"===t.icon?e("sorting-icon",{staticClass:"icon dark-text-theme preview-sorting"}):t._e(),t._v(" "),e("span",{staticClass:"label"},[t._t("default")],2)],1)])}),[],!1,null,"7b8372d6",null);a.a=l.exports},vAU0:function(t,a,e){var n=e("c9pc");"string"==typeof n&&(n=[[t.i,n,""]]);var i={hmr:!0,transform:void 0,insertInto:void 0};e("aET+")(n,i);n.locals&&(t.exports=n.locals)},vFyo:function(t,a,e){(t.exports=e("I1BE")(!1)).push([t.i,".text-label[data-v-6d799cf2] {\n  font-size: 0.75em;\n  color: #AFAFAF;\n  font-weight: 700;\n  display: block;\n  margin-bottom: 20px;\n}\n@media (prefers-color-scheme: dark) {\n.text-label[data-v-6d799cf2] {\n    color: #00BC7E;\n}\n}\n",""])},zKuA:function(t,a,e){"use strict";var n=e("Gc5Z");e.n(n).a}}]);