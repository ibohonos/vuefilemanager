(window.webpackJsonp=window.webpackJsonp||[]).push([[47],{"3sV/":function(a,t,n){(a.exports=n("I1BE")(!1)).push([a.i,".page-tab-group[data-v-445d3e0e] {\n  margin-bottom: 65px;\n}\n",""])},"5hN9":function(a,t,n){(a.exports=n("I1BE")(!1)).push([a.i,"",""])},"6TPS":function(a,t,n){"use strict";var e=n("CjXH"),i={props:["data"],computed:{normalizedColumns:function(){return this.data.id&&delete this.data.id,Object.values(this.data)}}},o=(n("YLwN"),n("KHd+")),r=Object(o.a)(i,(function(){var a=this,t=a.$createElement,n=a._self._c||t;return n("tr",{staticClass:"table-row"},a._l(a.normalizedColumns,(function(t,e){return n("td",{key:e,staticClass:"table-cell"},[n("span",[a._v(a._s(t))])])})),0)}),[],!1,null,"b0f3a8d0",null).exports,d=(n("LvDl"),n("vDqi")),l=n.n(d),s={name:"DatatableWrapper",props:["columns","scope","paginator","api","tableData"],components:{ChevronRightIcon:e.h,ChevronLeftIcon:e.g,DatatableCell:r,ChevronUpIcon:e.i},computed:{hasData:function(){return this.data&&this.data.data&&this.data.data.length>0},floatPages:function(){return[this.pageIndex-1,this.pageIndex,this.pageIndex+1]}},data:function(){return{data:void 0,isLoading:!0,pageIndex:1,filter:{sort:"DESC",field:void 0}}},methods:{goToPage:function(a){a>this.data.meta.last_page||0===a||(this.pageIndex=a,this.getPage(a))},sort:function(a,t){t&&(this.filter.field=a,"DESC"===this.filter.sort?this.filter.sort="ASC":"ASC"===this.filter.sort&&(this.filter.sort="DESC"),this.getPage(this.pageIndex))},getPage:function(a){var t=this;this.URI=this.api,this.paginator&&(this.URI=this.URI+"?page="+a),this.filter.field&&(this.URI=this.URI+(this.paginator?"&":"?")+"sort="+this.filter.field+"&direction="+this.filter.sort),this.isLoading=!0,l.a.get(this.URI).then((function(a){t.data=a.data,t.$emit("data",a.data)})).catch((function(){return t.$isSomethingWrong()})).finally((function(){t.$emit("init",!0),t.isLoading=!1}))}},created:function(){this.api&&this.getPage(this.pageIndex),this.tableData&&(this.data=this.tableData,this.isLoading=!1)}},p=(n("pAxR"),Object(o.a)(s,(function(){var a=this,t=a.$createElement,n=a._self._c||t;return n("div",{staticClass:"datatable"},[a.hasData?n("table",{staticClass:"table"},[n("thead",{staticClass:"table-header"},[n("tr",a._l(a.columns,(function(t,e){return t.hidden?a._e():n("th",{key:e,class:{sortable:t.sortable},on:{click:function(n){return a.sort(t.field,t.sortable)}}},[n("span",{staticClass:"text-theme"},[a._v(a._s(t.label))]),a._v(" "),t.sortable?n("chevron-up-icon",{staticClass:"filter-arrow",class:{"arrow-down":"ASC"===a.filter.sort},attrs:{size:"14"}}):a._e()],1)})),0)]),a._v(" "),n("tbody",{staticClass:"table-body"},[a._l(a.data.data,(function(t){return a._t("default",[n("DatatableCell",{key:t.id,attrs:{data:t}})],{row:t})}))],2)]):a._e(),a._v(" "),a.isLoading||a.hasData?a._e():a._t("empty-page"),a._v(" "),a.paginator&&a.hasData?n("div",{staticClass:"paginator-wrapper"},[a.data.meta.total>20&&a.data.meta.last_page<=6?n("ul",{staticClass:"pagination"},[n("li",{staticClass:"page-item previous"},[n("a",{staticClass:"page-link",class:{disabled:0==a.pageIndex},on:{click:function(t){return a.goToPage(a.pageIndex-1)}}},[n("chevron-left-icon",{staticClass:"icon",attrs:{size:"14"}})],1)]),a._v(" "),a._l(6,(function(t,e){return n("li",{key:e,staticClass:"page-item",on:{click:function(n){return a.goToPage(t)}}},[n("a",{staticClass:"page-link",class:{active:a.pageIndex===t}},[a._v("\n                    "+a._s(t)+"\n                ")])])})),a._v(" "),n("li",{staticClass:"page-item next"},[n("a",{staticClass:"page-link",class:{disabled:a.pageIndex+1==a.data.meta.last_page},on:{click:function(t){return a.goToPage(a.pageIndex+1)}}},[n("chevron-right-icon",{staticClass:"icon",attrs:{size:"14"}})],1)])],2):a._e(),a._v(" "),a.data.meta.total>20&&a.data.meta.last_page>6?n("ul",{staticClass:"pagination"},[n("li",{staticClass:"page-item previous"},[n("a",{staticClass:"page-link",class:{disabled:0==a.pageIndex},on:{click:function(t){return a.goToPage(a.pageIndex-1)}}},[n("chevron-left-icon",{staticClass:"icon",attrs:{size:"14"}})],1)]),a._v(" "),a.pageIndex>=5?n("li",{staticClass:"page-item",on:{click:function(t){return a.goToPage(1)}}},[n("a",{staticClass:"page-link"},[a._v("\n                    1\n                ")])]):a._e(),a._v(" "),a._l(5,(function(t,e){return a.pageIndex<5?n("li",{key:e,staticClass:"page-item",on:{click:function(n){return a.goToPage(t)}}},[n("a",{staticClass:"page-link",class:{active:a.pageIndex===t}},[a._v("\n                    "+a._s(t)+"\n                ")])]):a._e()})),a._v(" "),a.pageIndex>=5?n("li",{staticClass:"page-item"},[n("a",{staticClass:"page-link"},[a._v("...")])]):a._e(),a._v(" "),a._l(a.floatPages,(function(t,e){return a.pageIndex>=5&&a.pageIndex<a.data.meta.last_page-3?n("li",{key:e,staticClass:"page-item",on:{click:function(n){return a.goToPage(t)}}},[n("a",{staticClass:"page-link",class:{active:a.pageIndex===t}},[a._v("\n                    "+a._s(t)+"\n                ")])]):a._e()})),a._v(" "),a.pageIndex<a.data.meta.last_page-3?n("li",{staticClass:"page-item"},[n("a",{staticClass:"page-link"},[a._v("...")])]):a._e(),a._v(" "),a._l(5,(function(t,e){return a.pageIndex>a.data.meta.last_page-4?n("li",{key:e,staticClass:"page-item",on:{click:function(t){a.goToPage(a.data.meta.last_page-(4-e))}}},[n("a",{staticClass:"page-link",class:{active:a.pageIndex===a.data.meta.last_page-(4-e)}},[a._v("\n                    "+a._s(a.data.meta.last_page-(4-e))+"\n                ")])]):a._e()})),a._v(" "),a.pageIndex<a.data.meta.last_page-3?n("li",{staticClass:"page-item",on:{click:function(t){return a.goToPage(a.data.meta.last_page)}}},[n("a",{staticClass:"page-link"},[a._v("\n                    "+a._s(a.data.meta.last_page)+"\n                ")])]):a._e(),a._v(" "),n("li",{staticClass:"page-item next"},[n("a",{staticClass:"page-link",class:{disabled:a.pageIndex+1==a.data.meta.last_page},on:{click:function(t){return a.goToPage(a.pageIndex+1)}}},[n("chevron-right-icon",{staticClass:"icon",attrs:{size:"14"}})],1)])],2):a._e(),a._v(" "),n("span",{staticClass:"paginator-info"},[a._v(a._s(a.$t("datatable.paginate_info",{visible:a.data.meta.per_page,total:a.data.meta.total})))])]):a._e()],2)}),[],!1,null,"6d4d441a",null));t.a=p.exports},"8N1S":function(a,t,n){var e=n("3sV/");"string"==typeof e&&(e=[[a.i,e,""]]);var i={hmr:!0,transform:void 0,insertInto:void 0};n("aET+")(e,i);e.locals&&(a.exports=e.locals)},"9sCX":function(a,t,n){"use strict";var e=n("8N1S");n.n(e).a},BfOa:function(a,t,n){var e=n("5hN9");"string"==typeof e&&(e=[[a.i,e,""]]);var i={hmr:!0,transform:void 0,insertInto:void 0};n("aET+")(e,i);e.locals&&(a.exports=e.locals)},CK9m:function(a,t,n){var e=n("Wx07");"string"==typeof e&&(e=[[a.i,e,""]]);var i={hmr:!0,transform:void 0,insertInto:void 0};n("aET+")(e,i);e.locals&&(a.exports=e.locals)},DiwD:function(a,t,n){"use strict";var e=n("HJVJ");n.n(e).a},GELx:function(a,t,n){"use strict";var e={name:"DatatableCellImage",props:["image","title","description","image-size"]},i=(n("Tm5p"),n("KHd+")),o=Object(i.a)(e,(function(){var a=this,t=a.$createElement,n=a._self._c||t;return n("div",{staticClass:"cell-image-thumbnail"},[a.image?n("div",{staticClass:"image",class:a.imageSize},[n("img",{attrs:{src:a.image,alt:a.title}}),a._v(" "),n("img",{staticClass:"blurred",attrs:{src:a.image,alt:a.title}})]):a._e(),a._v(" "),n("div",{staticClass:"info"},[a.title?n("b",{staticClass:"name"},[a._v(a._s(a.title))]):a._e(),a._v(" "),a.description?n("span",{staticClass:"description"},[a._v(a._s(a.description))]):a._e()])])}),[],!1,null,"2cd07f63",null);t.a=o.exports},HJVJ:function(a,t,n){var e=n("gd9/");"string"==typeof e&&(e=[[a.i,e,""]]);var i={hmr:!0,transform:void 0,insertInto:void 0};n("aET+")(e,i);e.locals&&(a.exports=e.locals)},IMud:function(a,t,n){var e=n("Kivv");"string"==typeof e&&(e=[[a.i,e,""]]);var i={hmr:!0,transform:void 0,insertInto:void 0};n("aET+")(e,i);e.locals&&(a.exports=e.locals)},Kivv:function(a,t,n){(a.exports=n("I1BE")(!1)).push([a.i,".datatable[data-v-6d4d441a] {\n  height: 100%;\n}\n.table-row[data-v-6d4d441a] {\n  transition: 0.3s all ease;\n}\n.table-row-enter[data-v-6d4d441a],\n.table-row-leave-to[data-v-6d4d441a] {\n  opacity: 0;\n  transform: translateY(-100%);\n}\n.table-row-leave-active[data-v-6d4d441a] {\n  position: absolute;\n}\n.table[data-v-6d4d441a] {\n  width: 100%;\n  border-collapse: collapse;\n  overflow-x: auto;\n}\n.table tr[data-v-6d4d441a] {\n  width: 100%;\n}\n.table tr td[data-v-6d4d441a]:first-child, .table tr th[data-v-6d4d441a]:first-child {\n  padding-left: 15px;\n}\n.table tr td[data-v-6d4d441a]:last-child, .table tr th[data-v-6d4d441a]:last-child {\n  padding-right: 15px;\n  text-align: right;\n}\n.table .table-header[data-v-6d4d441a] {\n  margin-bottom: 10px;\n}\n.table .table-header tr td[data-v-6d4d441a], .table .table-header tr th[data-v-6d4d441a] {\n  padding: 12px;\n  text-align: left;\n}\n.table .table-header tr td span[data-v-6d4d441a], .table .table-header tr th span[data-v-6d4d441a] {\n  font-weight: 700;\n  font-size: 0.75em;\n  white-space: nowrap;\n}\n.table .table-header tr td.sortable[data-v-6d4d441a], .table .table-header tr th.sortable[data-v-6d4d441a] {\n  cursor: pointer;\n}\n.table .table-header tr td.sortable:hover .filter-arrow[data-v-6d4d441a], .table .table-header tr th.sortable:hover .filter-arrow[data-v-6d4d441a] {\n  opacity: 1;\n}\n.table .table-header tr td[data-v-6d4d441a]:last-child, .table .table-header tr th[data-v-6d4d441a]:last-child {\n  text-align: right;\n}\n.table .table-header .filter-arrow[data-v-6d4d441a] {\n  vertical-align: middle;\n  margin-left: 8px;\n  transition: 0.3s all ease;\n  opacity: 0;\n}\n.table .table-header .filter-arrow path[data-v-6d4d441a] {\n  fill: rgba(27, 37, 57, 0.7);\n}\n.table .table-header .filter-arrow.arrow-down[data-v-6d4d441a] {\n  transform: rotate(180deg);\n}\n.table .table-header span[data-v-6d4d441a] {\n  font-size: 13px;\n  font-weight: bold;\n}\n.table .table-body tr[data-v-6d4d441a] {\n  border-radius: 8px;\n}\n.table .table-body tr[data-v-6d4d441a]:hover {\n  background: #f4f5f6;\n}\n.table .table-body tr td[data-v-6d4d441a], .table .table-body tr th[data-v-6d4d441a] {\n  padding: 12px;\n}\n.table .table-body tr td:last-child button[data-v-6d4d441a], .table .table-body tr th:last-child button[data-v-6d4d441a] {\n  margin-right: 0;\n}\n.table .table-body span[data-v-6d4d441a], .table .table-body a.page-link[data-v-6d4d441a] {\n  font-size: 0.9375em;\n  font-weight: 700;\n  padding: 10px 35px 10px 0;\n  display: block;\n  white-space: nowrap;\n}\n.pagination .page-item[data-v-6d4d441a] {\n  padding: 3px;\n  display: inline-block;\n}\n.pagination .page-link[data-v-6d4d441a] {\n  width: 30px;\n  height: 30px;\n  display: block;\n  color: #1B2539;\n  border-radius: 6px;\n  text-align: center;\n  line-height: 2.4;\n  font-weight: bold;\n  font-size: 13px;\n  cursor: pointer;\n  transition: 0.15s all ease;\n}\n.pagination .page-link .icon[data-v-6d4d441a] {\n  vertical-align: middle;\n  margin-top: -2px;\n}\n.pagination .page-link[data-v-6d4d441a]:hover:not(.disabled) {\n  background: #f4f5f6;\n  color: #1B2539;\n}\n.pagination .page-link.active[data-v-6d4d441a] {\n  color: #1B2539;\n  background: #f4f5f6;\n}\n.pagination .page-link.disabled[data-v-6d4d441a] {\n  background: transparent;\n  cursor: default;\n}\n.pagination .page-link.disabled svg path[data-v-6d4d441a] {\n  fill: rgba(27, 37, 57, 0.7);\n}\n.paginator-wrapper[data-v-6d4d441a] {\n  margin-top: 30px;\n  margin-bottom: 40px;\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n}\n.paginator-wrapper .paginator-info[data-v-6d4d441a] {\n  font-size: 13px;\n  color: rgba(27, 37, 57, 0.7);\n}\n.user-preview[data-v-6d4d441a] {\n  display: flex;\n  align-items: center;\n  cursor: pointer;\n}\n.user-preview img[data-v-6d4d441a] {\n  width: 45px;\n  margin-right: 22px;\n}\n@media only screen and (max-width: 690px) {\n.paginator-wrapper[data-v-6d4d441a] {\n    display: block;\n    text-align: center;\n}\n.paginator-wrapper .paginator-info[data-v-6d4d441a] {\n    margin-top: 10px;\n    display: block;\n}\n}\n@media (prefers-color-scheme: dark) {\n.table .table-body tr[data-v-6d4d441a]:hover, .table .table-body th[data-v-6d4d441a]:hover {\n    background: #1e2024;\n}\n.paginator-wrapper .paginator-info[data-v-6d4d441a] {\n    color: #7d858c;\n}\n.pagination .page-link[data-v-6d4d441a] {\n    color: #7d858c;\n}\n.pagination .page-link svg polyline[data-v-6d4d441a] {\n    stroke: #bec6cf;\n}\n.pagination .page-link[data-v-6d4d441a]:hover:not(.disabled) {\n    color: #00BC7E;\n    background: rgba(0, 188, 126, 0.1);\n}\n.pagination .page-link.active[data-v-6d4d441a] {\n    color: #00BC7E;\n    background: rgba(0, 188, 126, 0.1);\n}\n.pagination .page-link.disabled[data-v-6d4d441a] {\n    background: transparent;\n    cursor: default;\n}\n.pagination .page-link.disabled svg polyline[data-v-6d4d441a] {\n    stroke: #7d858c;\n}\n}\n",""])},KnjL:function(a,t,n){"use strict";var e={name:"InfoBox",props:["type"]},i=(n("pFam"),n("KHd+")),o=Object(i.a)(e,(function(){var a=this.$createElement;return(this._self._c||a)("div",{staticClass:"info-box",class:this.type},[this._t("default")],2)}),[],!1,null,"8e7c42f6",null);t.a=o.exports},"Qqv+":function(a,t,n){var e=n("biqn");"string"==typeof e&&(e=[[a.i,e,""]]);var i={hmr:!0,transform:void 0,insertInto:void 0};n("aET+")(e,i);e.locals&&(a.exports=e.locals)},Tm5p:function(a,t,n){"use strict";var e=n("XGzT");n.n(e).a},Wx07:function(a,t,n){(a.exports=n("I1BE")(!1)).push([a.i,".table-row[data-v-b0f3a8d0] {\n  border-radius: 8px;\n}\n.table-row[data-v-b0f3a8d0]:hover {\n  background: #f4f5f6;\n}\n.table-row .table-cell[data-v-b0f3a8d0] {\n  padding-top: 15px;\n  padding-bottom: 15px;\n}\n.table-row .table-cell[data-v-b0f3a8d0]:first-child {\n  padding-left: 15px;\n}\n.table-row .table-cell[data-v-b0f3a8d0]:last-child {\n  padding-right: 15px;\n  text-align: right;\n}\n.table-row .table-cell span[data-v-b0f3a8d0] {\n  font-size: 1em;\n  font-weight: bold;\n}\n",""])},XGzT:function(a,t,n){var e=n("eE9K");"string"==typeof e&&(e=[[a.i,e,""]]);var i={hmr:!0,transform:void 0,insertInto:void 0};n("aET+")(e,i);e.locals&&(a.exports=e.locals)},YLwN:function(a,t,n){"use strict";var e=n("CK9m");n.n(e).a},biqn:function(a,t,n){(a.exports=n("I1BE")(!1)).push([a.i,".info-box[data-v-8e7c42f6] {\n  padding: 20px;\n  border-radius: 8px;\n  margin-bottom: 32px;\n  background: #f4f5f6;\n  text-align: left;\n}\n.info-box.error[data-v-8e7c42f6] {\n  background: rgba(253, 57, 122, 0.1);\n}\n.info-box.error p[data-v-8e7c42f6], .info-box.error a[data-v-8e7c42f6] {\n  color: #fd397a;\n}\n.info-box.error a[data-v-8e7c42f6] {\n  text-decoration: underline;\n}\n.info-box p[data-v-8e7c42f6] {\n  font-size: 15px;\n  line-height: 1.6;\n  word-break: break-word;\n  font-weight: 600;\n}\n.info-box p[data-v-8e7c42f6] a {\n  font-size: 15px;\n}\n.info-box p[data-v-8e7c42f6] b {\n  font-size: 15px;\n  font-weight: 700;\n}\n.info-box b[data-v-8e7c42f6] {\n  font-weight: 700;\n}\n.info-box a[data-v-8e7c42f6] {\n  font-weight: 700;\n  font-size: 0.9375em;\n  line-height: 1.6;\n}\n.info-box ul[data-v-8e7c42f6] {\n  margin-top: 15px;\n  display: block;\n}\n.info-box ul li[data-v-8e7c42f6] {\n  display: block;\n}\n.info-box ul li a[data-v-8e7c42f6] {\n  display: block;\n}\n@media only screen and (max-width: 690px) {\n.info-box[data-v-8e7c42f6] {\n    padding: 15px;\n}\n}\n@media (prefers-color-scheme: dark) {\n.info-box[data-v-8e7c42f6] {\n    background: #1e2024;\n}\n.info-box p[data-v-8e7c42f6] {\n    color: #bec6cf;\n}\n.info-box ul li[data-v-8e7c42f6] {\n    color: #bec6cf;\n}\n}\n",""])},eE9K:function(a,t,n){(a.exports=n("I1BE")(!1)).push([a.i,".cell-image-thumbnail[data-v-2cd07f63] {\n  display: flex;\n  align-items: center;\n  cursor: pointer;\n}\n.cell-image-thumbnail .image[data-v-2cd07f63] {\n  margin-right: 20px;\n  line-height: 0;\n  position: relative;\n}\n.cell-image-thumbnail .image img[data-v-2cd07f63] {\n  line-height: 0;\n  width: 48px;\n  height: 48px;\n  border-radius: 8px;\n  z-index: 1;\n  position: relative;\n}\n.cell-image-thumbnail .image img.blurred[data-v-2cd07f63] {\n  position: absolute;\n  left: 0;\n  top: 2px;\n  z-index: 0;\n  -webkit-filter: blur(8px);\n          filter: blur(8px);\n  opacity: 0.5;\n}\n.cell-image-thumbnail .image.small img[data-v-2cd07f63] {\n  width: 32px;\n  height: 32px;\n}\n.cell-image-thumbnail .info .name[data-v-2cd07f63], .cell-image-thumbnail .info .description[data-v-2cd07f63] {\n  max-width: 150px;\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  display: block;\n}\n.cell-image-thumbnail .info .name[data-v-2cd07f63] {\n  font-size: 0.9375em;\n  line-height: 1;\n  color: #1B2539;\n}\n.cell-image-thumbnail .info .description[data-v-2cd07f63] {\n  color: rgba(27, 37, 57, 0.7);\n  font-size: 0.75em;\n}\n@media (prefers-color-scheme: dark) {\n.cell-image-thumbnail .image img.blurred[data-v-2cd07f63] {\n    display: none;\n}\n.cell-image-thumbnail .info .name[data-v-2cd07f63] {\n    color: #bec6cf;\n}\n.cell-image-thumbnail .info .description[data-v-2cd07f63] {\n    color: #7d858c;\n}\n}\n",""])},gahf:function(a,t,n){"use strict";var e={name:"PageTabGroup"},i=(n("9sCX"),n("KHd+")),o=Object(i.a)(e,(function(){var a=this.$createElement;return(this._self._c||a)("div",{staticClass:"page-tab-group"},[this._t("default")],2)}),[],!1,null,"445d3e0e",null);t.a=o.exports},"gd9/":function(a,t,n){(a.exports=n("I1BE")(!1)).push([a.i,'.form[data-v-2785bc65] {\n  max-width: 700px;\n}\n.form.inline-form[data-v-2785bc65] {\n  display: flex;\n  position: relative;\n  justify-content: center;\n  margin: 0 auto;\n}\n.form.inline-form .input-wrapper[data-v-2785bc65] {\n  position: relative;\n}\n.form.inline-form .input-wrapper .error-message[data-v-2785bc65] {\n  position: absolute;\n  left: 0;\n  bottom: -25px;\n}\n.form.block-form .wrapper-inline[data-v-2785bc65] {\n  display: flex;\n  margin: 0 -15px;\n}\n.form.block-form .wrapper-inline .block-wrapper[data-v-2785bc65] {\n  width: 100%;\n  padding: 0 15px;\n}\n.form.block-form .block-wrapper[data-v-2785bc65] {\n  margin-bottom: 32px;\n}\n.form.block-form .block-wrapper label[data-v-2785bc65] {\n  font-size: 0.875em;\n  color: rgba(27, 37, 57, 0.8);\n  font-weight: 700;\n  display: block;\n  margin-bottom: 7px;\n  text-align: left;\n}\n.form.block-form .block-wrapper[data-v-2785bc65]:last-child {\n  margin-bottom: 0;\n}\n.form.block-form .button[data-v-2785bc65] {\n  margin-top: 50px;\n}\n.form .inline-wrapper[data-v-2785bc65] {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n}\n.form .inline-wrapper .switch-label .input-help[data-v-2785bc65] {\n  padding-top: 0;\n}\n.form .inline-wrapper .switch-label .input-label[data-v-2785bc65] {\n  font-weight: 700;\n  color: #1B2539;\n  font-size: 1em;\n  margin-bottom: 5px;\n}\n.form .input-help[data-v-2785bc65] {\n  font-size: 0.75em;\n  color: rgba(27, 37, 57, 0.7);\n  line-height: 1.35;\n  padding-top: 10px;\n  display: block;\n}\n.single-line-form[data-v-2785bc65] {\n  display: flex;\n}\n.single-line-form .submit-button[data-v-2785bc65] {\n  margin-left: 20px;\n}\n.error-message[data-v-2785bc65] {\n  font-size: 0.875em;\n  color: #fd397a;\n  padding-top: 5px;\n  display: block;\n  text-align: left;\n}\ntextarea[data-v-2785bc65] {\n  width: 100%;\n}\ninput[type="color"][data-v-2785bc65] {\n  width: 38px;\n  height: 40px;\n  border: none;\n  outline: none;\n  background: none;\n}\ntextarea[data-v-2785bc65],\ninput[type="password"][data-v-2785bc65],\ninput[type="text"][data-v-2785bc65],\ninput[type="number"][data-v-2785bc65],\ninput[type="email"][data-v-2785bc65] {\n  border: 1px solid transparent;\n  transition: 150ms all ease;\n  font-size: 1em;\n  border-radius: 8px;\n  padding: 13px 20px;\n  -webkit-appearance: none;\n     -moz-appearance: none;\n          appearance: none;\n  font-weight: 700;\n  outline: 0;\n  width: 100%;\n  box-shadow: 0 1px 5px rgba(0, 0, 0, 0.12);\n}\ntextarea.is-error[data-v-2785bc65],\ninput[type="password"].is-error[data-v-2785bc65],\ninput[type="text"].is-error[data-v-2785bc65],\ninput[type="number"].is-error[data-v-2785bc65],\ninput[type="email"].is-error[data-v-2785bc65] {\n  border-color: #fd397a;\n}\ntextarea[data-v-2785bc65]::-webkit-input-placeholder, input[type="password"][data-v-2785bc65]::-webkit-input-placeholder, input[type="text"][data-v-2785bc65]::-webkit-input-placeholder, input[type="number"][data-v-2785bc65]::-webkit-input-placeholder, input[type="email"][data-v-2785bc65]::-webkit-input-placeholder {\n  color: rgba(27, 37, 57, 0.5);\n  font-size: 0.9375em;\n}\ntextarea[data-v-2785bc65]::-moz-placeholder, input[type="password"][data-v-2785bc65]::-moz-placeholder, input[type="text"][data-v-2785bc65]::-moz-placeholder, input[type="number"][data-v-2785bc65]::-moz-placeholder, input[type="email"][data-v-2785bc65]::-moz-placeholder {\n  color: rgba(27, 37, 57, 0.5);\n  font-size: 0.9375em;\n}\ntextarea[data-v-2785bc65]:-ms-input-placeholder, input[type="password"][data-v-2785bc65]:-ms-input-placeholder, input[type="text"][data-v-2785bc65]:-ms-input-placeholder, input[type="number"][data-v-2785bc65]:-ms-input-placeholder, input[type="email"][data-v-2785bc65]:-ms-input-placeholder {\n  color: rgba(27, 37, 57, 0.5);\n  font-size: 0.9375em;\n}\ntextarea[data-v-2785bc65]::-ms-input-placeholder, input[type="password"][data-v-2785bc65]::-ms-input-placeholder, input[type="text"][data-v-2785bc65]::-ms-input-placeholder, input[type="number"][data-v-2785bc65]::-ms-input-placeholder, input[type="email"][data-v-2785bc65]::-ms-input-placeholder {\n  color: rgba(27, 37, 57, 0.5);\n  font-size: 0.9375em;\n}\ntextarea[data-v-2785bc65]::placeholder,\ninput[type="password"][data-v-2785bc65]::placeholder,\ninput[type="text"][data-v-2785bc65]::placeholder,\ninput[type="number"][data-v-2785bc65]::placeholder,\ninput[type="email"][data-v-2785bc65]::placeholder {\n  color: rgba(27, 37, 57, 0.5);\n  font-size: 0.9375em;\n}\ntextarea[disabled][data-v-2785bc65],\ninput[type="password"][disabled][data-v-2785bc65],\ninput[type="text"][disabled][data-v-2785bc65],\ninput[type="number"][disabled][data-v-2785bc65],\ninput[type="email"][disabled][data-v-2785bc65] {\n  background: white;\n  color: rgba(27, 37, 57, 0.8);\n  -webkit-text-fill-color: rgba(27, 37, 57, 0.8);\n  opacity: 1;\n  cursor: not-allowed;\n}\n.additional-link[data-v-2785bc65] {\n  font-size: 1em;\n  margin-top: 50px;\n  display: block;\n}\n.additional-link b[data-v-2785bc65], .additional-link a[data-v-2785bc65] {\n  cursor: pointer;\n}\n.additional-link b[data-v-2785bc65]:hover, .additional-link a[data-v-2785bc65]:hover {\n  text-decoration: underline;\n}\n@media only screen and (max-width: 1024px) {\n.form[data-v-2785bc65] {\n    max-width: 100%;\n}\n}\n@media only screen and (max-width: 960px) {\n.form .button[data-v-2785bc65] {\n    margin-top: 20px;\n    width: 100%;\n    margin-left: 0;\n    margin-right: 0;\n}\n.form input[data-v-2785bc65], .form textarea[data-v-2785bc65] {\n    width: 100%;\n    min-width: 100%;\n}\n.form.block-form .block-wrapper[data-v-2785bc65] {\n    display: block;\n}\n.form.block-form .block-wrapper label[data-v-2785bc65] {\n    width: 100%;\n    padding-right: 0;\n    display: block;\n    margin-bottom: 7px;\n    text-align: left !important;\n    font-size: 0.875em;\n    padding-top: 0;\n}\n.form.block-form .button[data-v-2785bc65] {\n    margin-top: 25px;\n    margin-left: 0;\n    margin-right: 0;\n}\n.form.inline-form[data-v-2785bc65] {\n    display: block;\n}\n.form.inline-form .input-wrapper .error-message[data-v-2785bc65] {\n    position: relative;\n    bottom: 0;\n}\n.form .button[data-v-2785bc65] {\n    padding: 14px 32px;\n}\n.single-line-form[data-v-2785bc65] {\n    display: block;\n}\n.single-line-form .submit-button[data-v-2785bc65] {\n    margin-left: 0;\n    margin-top: 20px;\n    width: 100%;\n}\ntextarea[data-v-2785bc65],\n  input[type="password"][data-v-2785bc65],\n  input[type="number"][data-v-2785bc65],\n  input[type="text"][data-v-2785bc65],\n  input[type="email"][data-v-2785bc65] {\n    padding: 14px 20px;\n}\n}\n@media only screen and (max-width: 690px) {\n.form.block-form .wrapper-inline[data-v-2785bc65] {\n    display: block;\n}\n}\n@media (prefers-color-scheme: dark) {\n.form .input-help[data-v-2785bc65] {\n    color: #7d858c;\n}\n.form.block-form .block-wrapper label[data-v-2785bc65] {\n    color: #bec6cf;\n}\n.form .inline-wrapper .switch-label .input-label[data-v-2785bc65] {\n    color: #bec6cf;\n}\ntextarea[data-v-2785bc65],\n  input[type="password"][data-v-2785bc65],\n  input[type="text"][data-v-2785bc65],\n  input[type="number"][data-v-2785bc65],\n  input[type="email"][data-v-2785bc65] {\n    border-color: #1e2024;\n    background: #1e2024;\n    color: #bec6cf;\n}\ntextarea[data-v-2785bc65]::-webkit-input-placeholder, input[type="password"][data-v-2785bc65]::-webkit-input-placeholder, input[type="text"][data-v-2785bc65]::-webkit-input-placeholder, input[type="number"][data-v-2785bc65]::-webkit-input-placeholder, input[type="email"][data-v-2785bc65]::-webkit-input-placeholder {\n    color: #7d858c;\n}\ntextarea[data-v-2785bc65]::-moz-placeholder, input[type="password"][data-v-2785bc65]::-moz-placeholder, input[type="text"][data-v-2785bc65]::-moz-placeholder, input[type="number"][data-v-2785bc65]::-moz-placeholder, input[type="email"][data-v-2785bc65]::-moz-placeholder {\n    color: #7d858c;\n}\ntextarea[data-v-2785bc65]:-ms-input-placeholder, input[type="password"][data-v-2785bc65]:-ms-input-placeholder, input[type="text"][data-v-2785bc65]:-ms-input-placeholder, input[type="number"][data-v-2785bc65]:-ms-input-placeholder, input[type="email"][data-v-2785bc65]:-ms-input-placeholder {\n    color: #7d858c;\n}\ntextarea[data-v-2785bc65]::-ms-input-placeholder, input[type="password"][data-v-2785bc65]::-ms-input-placeholder, input[type="text"][data-v-2785bc65]::-ms-input-placeholder, input[type="number"][data-v-2785bc65]::-ms-input-placeholder, input[type="email"][data-v-2785bc65]::-ms-input-placeholder {\n    color: #7d858c;\n}\ntextarea[data-v-2785bc65]::placeholder,\n  input[type="password"][data-v-2785bc65]::placeholder,\n  input[type="text"][data-v-2785bc65]::placeholder,\n  input[type="number"][data-v-2785bc65]::placeholder,\n  input[type="email"][data-v-2785bc65]::placeholder {\n    color: #7d858c;\n}\ntextarea[disabled][data-v-2785bc65],\n  input[type="password"][disabled][data-v-2785bc65],\n  input[type="text"][disabled][data-v-2785bc65],\n  input[type="number"][disabled][data-v-2785bc65],\n  input[type="email"][disabled][data-v-2785bc65] {\n    background: #1e2024;\n    color: rgba(125, 133, 140, 0.8);\n    -webkit-text-fill-color: rgba(125, 133, 140, 0.8);\n}\n.popup-wrapper textarea[data-v-2785bc65],\n  .popup-wrapper input[type="password"][data-v-2785bc65],\n  .popup-wrapper input[type="text"][data-v-2785bc65],\n  .popup-wrapper input[type="number"][data-v-2785bc65],\n  .popup-wrapper input[type="email"][data-v-2785bc65] {\n    background: #25272c;\n}\n}\n.block-form[data-v-2785bc65] {\n  max-width: 100%;\n}\n',""])},hJ7W:function(a,t,n){"use strict";var e=n("BfOa");n.n(e).a},pAxR:function(a,t,n){"use strict";var e=n("IMud");n.n(e).a},pFam:function(a,t,n){"use strict";var e=n("Qqv+");n.n(e).a},qefO:function(a,t,n){"use strict";var e={name:"PageTab",props:["isLoading"],components:{Spinner:n("zTYo").a}},i=(n("hJ7W"),n("KHd+")),o=Object(i.a)(e,(function(){var a=this.$createElement,t=this._self._c||a;return t("div",{staticClass:"page-tab"},[t("div",{directives:[{name:"show",rawName:"v-show",value:this.isLoading,expression:"isLoading"}],attrs:{id:"loader"}},[t("Spinner")],1),this._v(" "),this._t("default")],2)}),[],!1,null,"71034d34",null);t.a=o.exports},"tvo/":function(a,t,n){"use strict";n.r(t);var e=n("GELx"),i=n("CjXH"),o=n("6TPS"),r=n("gahf"),d=n("qefO"),l=n("KnjL"),s=(n("vDqi"),{name:"PlanSubscribers",components:{DatatableCellImage:e.a,DownloadCloudIcon:i.q,DatatableWrapper:o.a,PageTabGroup:r.a,Trash2Icon:i.ab,Edit2Icon:i.r,PageTab:d.a,InfoBox:l.a},data:function(){return{subscribers:void 0,isLoading:!0,columns:[{label:this.$t("admin_page_user.table.name"),field:"name",sortable:!0},{label:this.$t("admin_page_user.table.storage_used"),field:"used",sortable:!1},{label:this.$t("admin_page_user.table.action"),sortable:!1}]}}}),p=(n("DiwD"),n("KHd+")),c=Object(p.a)(s,(function(){var a=this,t=a.$createElement,n=a._self._c||t;return n("PageTab",{attrs:{"is-loading":a.isLoading}},[n("PageTabGroup",[n("DatatableWrapper",{staticClass:"table",attrs:{api:"/api/admin/plans/"+this.$route.params.id+"/subscribers",paginator:!1,columns:a.columns,data:a.subscribers},on:{init:function(t){a.isLoading=!1}},scopedSlots:a._u([{key:"default",fn:function(t){var e=t.row;return[n("tr",[n("td",[n("router-link",{attrs:{to:{name:"UserDetail",params:{id:e.data.id}}}},[n("DatatableCellImage",{attrs:{"image-size":"small",image:e.data.relationships.settings.data.attributes.avatar,title:e.data.relationships.settings.data.attributes.name}})],1)],1),a._v(" "),n("td",[n("span",{staticClass:"cell-item"},[a._v("\n                            "+a._s(e.data.attributes.storage.used)+"%\n                        ")])]),a._v(" "),n("td",[n("div",{staticClass:"action-icons"},[n("router-link",{attrs:{to:{name:"UserDetail",params:{id:e.data.id}}}},[n("edit-2-icon",{staticClass:"icon icon-edit",attrs:{size:"15"}})],1),a._v(" "),n("router-link",{attrs:{to:{name:"UserDelete",params:{id:e.data.id}}}},[n("trash2-icon",{staticClass:"icon icon-trash",attrs:{size:"15"}})],1)],1)])])]}},{key:"empty-page",fn:function(){return[n("InfoBox",[n("p",[a._v(a._s(a.$t("admin_page_plans.subscribers.empty")))])])]},proxy:!0}])})],1)],1)}),[],!1,null,"2785bc65",null);t.default=c.exports}}]);