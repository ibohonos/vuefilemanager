(window.webpackJsonp=window.webpackJsonp||[]).push([[58],{"0rhn":function(t,a,e){var i=e("MWZw");"string"==typeof i&&(i=[[t.i,i,""]]);var n={hmr:!0,transform:void 0,insertInto:void 0};e("aET+")(i,n);i.locals&&(t.exports=i.locals)},"2Sb1":function(t,a,e){"use strict";var i={name:"PageHeader",props:["title","canBack"],components:{ChevronLeftIcon:e("CjXH").h}},n=(e("JOXf"),e("KHd+")),s=Object(n.a)(i,(function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"page-header"},[t.canBack?e("div",{staticClass:"go-back",on:{click:function(a){return t.$router.back()}}},[e("chevron-left-icon",{attrs:{size:"17"}})],1):t._e(),t._v(" "),e("div",{staticClass:"content"},[e("h1",{staticClass:"title"},[t._v(t._s(t.title))])])])}),[],!1,null,"9fd0a424",null);a.a=s.exports},"3eeM":function(t,a,e){(t.exports=e("I1BE")(!1)).push([t.i,".page-header[data-v-9fd0a424]{display:flex;align-items:center;background:#fff;z-index:9;width:100%;position:sticky;top:0;padding-top:20px;padding-bottom:20px}.page-header .title[data-v-9fd0a424]{font-size:1.125em;font-weight:700;color:#1b2539}.page-header .go-back[data-v-9fd0a424]{margin-right:10px;cursor:pointer}.page-header .go-back svg[data-v-9fd0a424]{vertical-align:middle;margin-top:-4px}@media only screen and (max-width:960px){.page-header .title[data-v-9fd0a424]{font-size:1.125em}}@media only screen and (max-width:690px){.page-header[data-v-9fd0a424]{display:none}}@media (prefers-color-scheme:dark){.page-header[data-v-9fd0a424]{background:#141414}.page-header .title[data-v-9fd0a424]{color:#bec6cf}.page-header .icon path[data-v-9fd0a424]{fill:#00bc7e}}",""])},"5EXa":function(t,a,e){var i=e("EX7C");"string"==typeof i&&(i=[[t.i,i,""]]);var n={hmr:!0,transform:void 0,insertInto:void 0};e("aET+")(i,n);i.locals&&(t.exports=i.locals)},"6TPS":function(t,a,e){"use strict";var i=e("CjXH"),n={props:["data"],computed:{normalizedColumns:function(){return this.data.id&&delete this.data.id,Object.values(this.data)}}},s=(e("YLwN"),e("KHd+")),o=Object(s.a)(n,(function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("tr",{staticClass:"table-row"},t._l(t.normalizedColumns,(function(a,i){return e("td",{key:i,staticClass:"table-cell"},[e("span",[t._v(t._s(a))])])})),0)}),[],!1,null,"b0f3a8d0",null).exports,r=e("vDqi"),l=e.n(r),c={name:"DatatableWrapper",props:["columns","scope","paginator","api","tableData"],components:{ChevronRightIcon:i.i,ChevronLeftIcon:i.h,DatatableCell:o,ChevronUpIcon:i.j},computed:{hasData:function(){return this.data&&this.data.data&&this.data.data.length>0},floatPages:function(){return[this.pageIndex-1,this.pageIndex,this.pageIndex+1]}},data:function(){return{data:void 0,isLoading:!0,pageIndex:1,filter:{sort:"DESC",field:void 0}}},methods:{goToPage:function(t){t>this.data.meta.last_page||0===t||(this.pageIndex=t,this.getPage(t))},sort:function(t,a){a&&(this.filter.field=t,"DESC"===this.filter.sort?this.filter.sort="ASC":"ASC"===this.filter.sort&&(this.filter.sort="DESC"),this.getPage(this.pageIndex))},getPage:function(t){var a=this;this.URI=this.api,this.paginator&&(this.URI=this.URI+"?page="+t),this.filter.field&&(this.URI=this.URI+(this.paginator?"&":"?")+"sort="+this.filter.field+"&direction="+this.filter.sort),this.isLoading=!0,l.a.get(this.URI).then((function(t){a.data=t.data,a.$emit("data",t.data)})).catch((function(){return a.$isSomethingWrong()})).finally((function(){a.$emit("init",!0),a.isLoading=!1}))}},created:function(){this.api&&this.getPage(this.pageIndex),this.tableData&&(this.data=this.tableData,this.isLoading=!1)}},d=(e("BL2S"),Object(s.a)(c,(function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"datatable"},[t.hasData?e("table",{staticClass:"table"},[e("thead",{staticClass:"table-header"},[e("tr",t._l(t.columns,(function(a,i){return a.hidden?t._e():e("th",{key:i,class:{sortable:a.sortable},on:{click:function(e){return t.sort(a.field,a.sortable)}}},[e("span",{staticClass:"text-theme"},[t._v(t._s(a.label))]),t._v(" "),a.sortable?e("chevron-up-icon",{staticClass:"filter-arrow",class:{"arrow-down":"ASC"===t.filter.sort},attrs:{size:"14"}}):t._e()],1)})),0)]),t._v(" "),e("tbody",{staticClass:"table-body"},[t._l(t.data.data,(function(a){return t._t("default",[e("DatatableCell",{key:a.id,attrs:{data:a}})],{row:a})}))],2)]):t._e(),t._v(" "),t.isLoading||t.hasData?t._e():t._t("empty-page"),t._v(" "),t.paginator&&t.hasData?e("div",{staticClass:"paginator-wrapper"},[t.data.meta.total>20&&t.data.meta.last_page<=6?e("ul",{staticClass:"pagination"},[e("li",{staticClass:"page-item previous"},[e("a",{staticClass:"page-link",class:{disabled:0==t.pageIndex},on:{click:function(a){return t.goToPage(t.pageIndex-1)}}},[e("chevron-left-icon",{staticClass:"icon",attrs:{size:"14"}})],1)]),t._v(" "),t._l(6,(function(a,i){return e("li",{key:i,staticClass:"page-item",on:{click:function(e){return t.goToPage(a)}}},[e("a",{staticClass:"page-link",class:{active:t.pageIndex===a}},[t._v("\n                    "+t._s(a)+"\n                ")])])})),t._v(" "),e("li",{staticClass:"page-item next"},[e("a",{staticClass:"page-link",class:{disabled:t.pageIndex+1==t.data.meta.last_page},on:{click:function(a){return t.goToPage(t.pageIndex+1)}}},[e("chevron-right-icon",{staticClass:"icon",attrs:{size:"14"}})],1)])],2):t._e(),t._v(" "),t.data.meta.total>20&&t.data.meta.last_page>6?e("ul",{staticClass:"pagination"},[e("li",{staticClass:"page-item previous"},[e("a",{staticClass:"page-link",class:{disabled:0==t.pageIndex},on:{click:function(a){return t.goToPage(t.pageIndex-1)}}},[e("chevron-left-icon",{staticClass:"icon",attrs:{size:"14"}})],1)]),t._v(" "),t.pageIndex>=5?e("li",{staticClass:"page-item",on:{click:function(a){return t.goToPage(1)}}},[e("a",{staticClass:"page-link"},[t._v("\n                    1\n                ")])]):t._e(),t._v(" "),t._l(5,(function(a,i){return t.pageIndex<5?e("li",{key:i,staticClass:"page-item",on:{click:function(e){return t.goToPage(a)}}},[e("a",{staticClass:"page-link",class:{active:t.pageIndex===a}},[t._v("\n                    "+t._s(a)+"\n                ")])]):t._e()})),t._v(" "),t.pageIndex>=5?e("li",{staticClass:"page-item"},[e("a",{staticClass:"page-link"},[t._v("...")])]):t._e(),t._v(" "),t._l(t.floatPages,(function(a,i){return t.pageIndex>=5&&t.pageIndex<t.data.meta.last_page-3?e("li",{key:i,staticClass:"page-item",on:{click:function(e){return t.goToPage(a)}}},[e("a",{staticClass:"page-link",class:{active:t.pageIndex===a}},[t._v("\n                    "+t._s(a)+"\n                ")])]):t._e()})),t._v(" "),t.pageIndex<t.data.meta.last_page-3?e("li",{staticClass:"page-item"},[e("a",{staticClass:"page-link"},[t._v("...")])]):t._e(),t._v(" "),t._l(5,(function(a,i){return t.pageIndex>t.data.meta.last_page-4?e("li",{key:i,staticClass:"page-item",on:{click:function(a){t.goToPage(t.data.meta.last_page-(4-i))}}},[e("a",{staticClass:"page-link",class:{active:t.pageIndex===t.data.meta.last_page-(4-i)}},[t._v("\n                    "+t._s(t.data.meta.last_page-(4-i))+"\n                ")])]):t._e()})),t._v(" "),t.pageIndex<t.data.meta.last_page-3?e("li",{staticClass:"page-item",on:{click:function(a){return t.goToPage(t.data.meta.last_page)}}},[e("a",{staticClass:"page-link"},[t._v("\n                    "+t._s(t.data.meta.last_page)+"\n                ")])]):t._e(),t._v(" "),e("li",{staticClass:"page-item next"},[e("a",{staticClass:"page-link",class:{disabled:t.pageIndex+1==t.data.meta.last_page},on:{click:function(a){return t.goToPage(t.pageIndex+1)}}},[e("chevron-right-icon",{staticClass:"icon",attrs:{size:"14"}})],1)])],2):t._e(),t._v(" "),e("span",{staticClass:"paginator-info"},[t._v(t._s(t.$t("datatable.paginate_info",{visible:t.data.meta.per_page,total:t.data.meta.total})))])]):t._e()],2)}),[],!1,null,"bee2ed74",null));a.a=d.exports},"8V88":function(t,a,e){(t.exports=e("I1BE")(!1)).push([t.i,".empty-page-content[data-v-985303dc]{width:100%;height:100%;display:flex;align-items:center;text-align:center}.empty-page-content .content[data-v-985303dc]{margin:-70px auto 0;max-width:360px}.empty-page-content .content[data-v-985303dc] .button-base{margin:0 auto}.empty-page-content .icon circle[data-v-985303dc],.empty-page-content .icon line[data-v-985303dc],.empty-page-content .icon path[data-v-985303dc],.empty-page-content .icon polyline[data-v-985303dc]{color:inherit}.empty-page-content .header[data-v-985303dc]{margin-top:15px;margin-bottom:25px}.empty-page-content .title[data-v-985303dc]{font-size:1.4375em;font-weight:700;padding-bottom:5px}.empty-page-content .description[data-v-985303dc]{font-size:1em;font-weight:500}",""])},BL2S:function(t,a,e){"use strict";e("XG7Q")},CK9m:function(t,a,e){var i=e("Wx07");"string"==typeof i&&(i=[[t.i,i,""]]);var n={hmr:!0,transform:void 0,insertInto:void 0};e("aET+")(i,n);i.locals&&(t.exports=i.locals)},CLdG:function(t,a,e){(t.exports=e("I1BE")(!1)).push([t.i,".preview-list-icon line,.preview-list-icon rect{color:inherit}",""])},Cbtr:function(t,a,e){"use strict";e("5EXa")},D62o:function(t,a,e){"use strict";var i=e("xCqy"),n=e("CjXH"),s={name:"MobileHeader",props:["title"],components:{ChevronLeftIcon:n.h,MenuIcon:n.P},methods:{showMobileNavigation:function(){i.a.$emit("mobile-menu:show","user-navigation")},goBack:function(){this.$router.back()}}},o=(e("R6Y3"),e("KHd+")),r=Object(o.a)(s,(function(){var t=this.$createElement,a=this._self._c||t;return a("header",{staticClass:"mobile-header"},[a("div",{staticClass:"go-back",on:{click:this.goBack}},[a("chevron-left-icon",{staticClass:"icon",attrs:{size:"17"}})],1),this._v(" "),a("div",{staticClass:"location-name"},[this._v(this._s(this.title))]),this._v(" "),a("div",{staticClass:"mobile-menu",on:{click:this.showMobileNavigation}},[a("menu-icon",{staticClass:"icon",attrs:{size:"17"}})],1)])}),[],!1,null,"699fe34a",null);a.a=r.exports},EX7C:function(t,a,e){(t.exports=e("I1BE")(!1)).push([t.i,".table-tools[data-v-ea4dd90c]{background:#fff;display:flex;justify-content:space-between;padding:15px 0 10px;position:sticky;top:40px;z-index:9}.table .cell-item[data-v-ea4dd90c]{font-size:.9375em;white-space:nowrap}.table .name[data-v-ea4dd90c]{font-weight:700;cursor:pointer}@media only screen and (max-width:690px){.table-tools[data-v-ea4dd90c]{padding:0 0 5px}}@media (prefers-color-scheme:dark){.table-tools[data-v-ea4dd90c]{background:#141414}.action-icons .icon[data-v-ea4dd90c]{cursor:pointer}.action-icons .icon circle[data-v-ea4dd90c],.action-icons .icon line[data-v-ea4dd90c],.action-icons .icon path[data-v-ea4dd90c],.action-icons .icon polyline[data-v-ea4dd90c]{stroke:#bec6cf}.user-thumbnail .info .email[data-v-ea4dd90c]{color:#7d858c}}",""])},"GAT/":function(t,a,e){"use strict";e.r(a);var i=e("6TPS"),n=e("t5U/"),s=e("KfIT"),o=e("xxrA"),r=e("D62o"),l=e("THmQ"),c=e("Nv84"),d=e("CjXH"),p=e("2Sb1"),b=e("kPoH"),u=e("zTYo"),g=e("L2JU");e("vDqi");function v(t,a){var e=Object.keys(t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);a&&(i=i.filter((function(a){return Object.getOwnPropertyDescriptor(t,a).enumerable}))),e.push.apply(e,i)}return e}function h(t){for(var a=1;a<arguments.length;a++){var e=null!=arguments[a]?arguments[a]:{};a%2?v(Object(e),!0).forEach((function(a){f(t,a,e[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(e)):v(Object(e)).forEach((function(a){Object.defineProperty(t,a,Object.getOwnPropertyDescriptor(e,a))}))}return t}function f(t,a,e){return a in t?Object.defineProperty(t,a,{value:e,enumerable:!0,configurable:!0,writable:!0}):t[a]=e,t}var m={name:"Plans",components:{MobileActionButton:n.a,EmptyPageContent:s.a,DatatableWrapper:i.a,SectionTitle:l.a,MobileHeader:r.a,SwitchInput:o.a,Trash2Icon:d.gb,PageHeader:p.a,ButtonBase:c.a,ColorLabel:b.a,Edit2Icon:d.t,Spinner:u.a},computed:h(h({},Object(g.b)(["config"])),{},{isEmptyPlans:function(){return!this.isLoading&&0===this.plans.length&&this.config.stripe_public_key},stripeIsNotConfigured:function(){return!this.config.stripe_public_key},stripeConfiguredWithPlans:function(){return!this.isLoading&&this.config.stripe_public_key}}),data:function(){return{isLoading:!0,plans:[],columns:[{label:this.$t("admin_page_plans.table.status"),field:"data.attributes.status",sortable:!1},{label:this.$t("admin_page_plans.table.name"),field:"data.attributes.name",sortable:!1},{label:this.$t("admin_page_plans.table.subscribers"),field:"data.attributes.subscribers",sortable:!1},{label:this.$t("admin_page_plans.table.price"),field:"data.attributes.price",sortable:!1},{label:this.$t("admin_page_plans.table.storage_capacity"),field:"data.attributes.capacity",sortable:!1},{label:this.$t("admin_page_user.table.action"),sortable:!1}]}},methods:{changeStatus:function(t,a){this.$updateText("/admin/plans/"+a,"is_active",t)}},created:function(){this.config.stripe_public_key||(this.isLoading=!1)}},_=(e("Cbtr"),e("KHd+")),x=Object(_.a)(m,(function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{attrs:{id:"single-page"}},[e("div",{directives:[{name:"show",rawName:"v-show",value:t.stripeConfiguredWithPlans,expression:"stripeConfiguredWithPlans"}],attrs:{id:"page-content"}},[e("MobileHeader",{attrs:{title:t.$t(t.$router.currentRoute.meta.title)}}),t._v(" "),e("PageHeader",{attrs:{title:t.$t(t.$router.currentRoute.meta.title)}}),t._v(" "),t.config.stripe_public_key?e("div",{staticClass:"content-page"},[e("div",{staticClass:"table-tools"},[e("div",{staticClass:"buttons"},[e("router-link",{attrs:{to:{name:"PlanCreate"}}},[e("MobileActionButton",{attrs:{icon:"plus"}},[t._v("\n                            "+t._s(t.$t("admin_page_plans.create_plan_button"))+"\n                        ")])],1)],1),t._v(" "),e("div",{staticClass:"searching"})]),t._v(" "),e("DatatableWrapper",{staticClass:"table table-users",attrs:{api:"/api/admin/plans",paginator:!1,columns:t.columns},on:{data:function(a){t.plans=a},init:function(a){t.isLoading=!1}},scopedSlots:t._u([{key:"default",fn:function(a){var i=a.row;return[e("tr",[e("td",{staticStyle:{"max-width":"80px"}},[e("span",{staticClass:"cell-item"},[e("SwitchInput",{staticClass:"switch",attrs:{state:i.data.attributes.status},on:{input:function(a){return t.changeStatus(a,i.data.id)}}})],1)]),t._v(" "),e("td",{staticClass:"name",staticStyle:{"min-width":"120px"}},[e("router-link",{staticClass:"cell-item",attrs:{to:{name:"PlanSettings",params:{id:i.data.id}},tag:"div"}},[e("span",[t._v(t._s(i.data.attributes.name))])])],1),t._v(" "),e("td",[e("span",{staticClass:"cell-item"},[t._v("\n                                "+t._s(i.data.attributes.subscribers)+"\n                            ")])]),t._v(" "),e("td",[e("span",{staticClass:"cell-item"},[t._v("\n                                "+t._s(i.data.attributes.price_formatted)+"\n                            ")])]),t._v(" "),e("td",[e("span",{staticClass:"cell-item"},[t._v("\n                                "+t._s(i.data.attributes.capacity_formatted)+"\n                            ")])]),t._v(" "),e("td",[e("div",{staticClass:"action-icons"},[e("router-link",{attrs:{to:{name:"PlanSettings",params:{id:i.data.id}}}},[e("edit-2-icon",{staticClass:"icon icon-edit",attrs:{size:"15"}})],1),t._v(" "),e("router-link",{attrs:{to:{name:"PlanDelete",params:{id:i.data.id}}}},[e("trash2-icon",{staticClass:"icon icon-trash",attrs:{size:"15"}})],1)],1)])])]}}],null,!1,3279855567)})],1):t._e()],1),t._v(" "),t.isEmptyPlans?e("EmptyPageContent",{attrs:{icon:"file",title:t.$t("admin_page_plans.empty.title"),description:t.$t("admin_page_plans.empty.description")}},[e("router-link",{attrs:{to:{name:"PlanCreate"},tag:"p"}},[e("ButtonBase",{attrs:{"button-style":"theme"}},[t._v(t._s(t.$t("admin_page_plans.empty.button")))])],1)],1):t._e(),t._v(" "),t.stripeIsNotConfigured?e("EmptyPageContent",{attrs:{icon:"settings",title:t.$t("activation.stripe.title"),description:t.$t("activation.stripe.description")}},[e("router-link",{attrs:{to:{name:"AppPayments"}}},[e("ButtonBase",{attrs:{"button-style":"theme"}},[t._v(t._s(t.$t("activation.stripe.button")))])],1)],1):t._e(),t._v(" "),t.isLoading?e("div",{attrs:{id:"loader"}},[e("Spinner")],1):t._e()],1)}),[],!1,null,"ea4dd90c",null);a.default=x.exports},Gc5Z:function(t,a,e){var i=e("dtPa");"string"==typeof i&&(i=[[t.i,i,""]]);var n={hmr:!0,transform:void 0,insertInto:void 0};e("aET+")(i,n);i.locals&&(t.exports=i.locals)},JOXf:function(t,a,e){"use strict";e("nr4+")},JsZR:function(t,a,e){"use strict";e("mGdo")},KSns:function(t,a,e){var i=e("8V88");"string"==typeof i&&(i=[[t.i,i,""]]);var n={hmr:!0,transform:void 0,insertInto:void 0};e("aET+")(i,n);i.locals&&(t.exports=i.locals)},KfIT:function(t,a,e){"use strict";var i=e("CjXH"),n={name:"EmptyPageContent",props:["icon","title","description"],components:{SettingsIcon:i.bb,FileTextIcon:i.A,Edit2Icon:i.t,FileIcon:i.y}},s=(e("SEXA"),e("KHd+")),o=Object(s.a)(n,(function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"empty-page-content"},[e("div",{staticClass:"content"},[e("div",{staticClass:"icon"},["file"===t.icon?e("file-icon",{staticClass:"text-theme",attrs:{size:"38"}}):t._e(),t._v(" "),"file-text"===t.icon?e("file-text-icon",{staticClass:"text-theme",attrs:{size:"38"}}):t._e(),t._v(" "),"settings"===t.icon?e("settings-icon",{staticClass:"text-theme",attrs:{size:"38"}}):t._e(),t._v(" "),"edit"===t.icon?e("edit2-icon",{staticClass:"text-theme",attrs:{size:"38"}}):t._e()],1),t._v(" "),e("div",{staticClass:"header"},[e("h1",{staticClass:"title"},[t._v(t._s(t.title))]),t._v(" "),e("h2",{staticClass:"description"},[t._v(t._s(t.description))])]),t._v(" "),t._t("default")],2)])}),[],!1,null,"985303dc",null);a.a=o.exports},LedX:function(t,a,e){"use strict";e("WEWl")},MWZw:function(t,a,e){(t.exports=e("I1BE")(!1)).push([t.i,".color-label[data-v-5c508dbf]{text-transform:capitalize;font-size:.75em;display:inline-block;border-radius:6px;font-weight:700;padding:4px 6px}.color-label.purple[data-v-5c508dbf]{color:#9d66fe;background:rgba(157,102,254,.1)}.color-label.yellow[data-v-5c508dbf]{color:#ffbd2d;background:rgba(255,189,45,.1)}.color-label.green[data-v-5c508dbf]{color:#00bc7e;background:rgba(0,188,126,.1)}.color-label.red[data-v-5c508dbf]{color:#fd397a;background:rgba(253,57,122,.1)}",""])},R6Y3:function(t,a,e){"use strict";e("Xm12")},SEXA:function(t,a,e){"use strict";e("KSns")},SdtT:function(t,a,e){(t.exports=e("I1BE")(!1)).push([t.i,".datatable[data-v-bee2ed74]{height:100%}.table-row[data-v-bee2ed74]{transition:all .3s ease}.table-row-enter[data-v-bee2ed74],.table-row-leave-to[data-v-bee2ed74]{opacity:0;transform:translateY(-100%)}.table-row-leave-active[data-v-bee2ed74]{position:absolute}.table[data-v-bee2ed74]{border-collapse:collapse;overflow-x:auto}.table[data-v-bee2ed74],.table tr[data-v-bee2ed74]{width:100%}.table tr td[data-v-bee2ed74]:first-child,.table tr th[data-v-bee2ed74]:first-child{padding-left:15px}.table tr td[data-v-bee2ed74]:last-child,.table tr th[data-v-bee2ed74]:last-child{padding-right:15px;text-align:right}.table .table-header[data-v-bee2ed74]{margin-bottom:10px}.table .table-header tr td[data-v-bee2ed74],.table .table-header tr th[data-v-bee2ed74]{padding:12px;text-align:left}.table .table-header tr td span[data-v-bee2ed74],.table .table-header tr th span[data-v-bee2ed74]{font-weight:700;font-size:.75em;white-space:nowrap}.table .table-header tr td.sortable[data-v-bee2ed74],.table .table-header tr th.sortable[data-v-bee2ed74]{cursor:pointer}.table .table-header tr td.sortable:hover .filter-arrow[data-v-bee2ed74],.table .table-header tr th.sortable:hover .filter-arrow[data-v-bee2ed74]{opacity:1}.table .table-header tr td[data-v-bee2ed74]:last-child,.table .table-header tr th[data-v-bee2ed74]:last-child{text-align:right}.table .table-header .filter-arrow[data-v-bee2ed74]{vertical-align:middle;margin-left:8px;transition:all .3s ease;opacity:0}.table .table-header .filter-arrow path[data-v-bee2ed74]{fill:rgba(27,37,57,.7)}.table .table-header .filter-arrow.arrow-down[data-v-bee2ed74]{transform:rotate(180deg)}.table .table-header span[data-v-bee2ed74]{font-size:13px;font-weight:700}.table .table-body tr[data-v-bee2ed74]{border-radius:8px}.table .table-body tr[data-v-bee2ed74]:hover{background:#f4f5f6}.table .table-body tr td[data-v-bee2ed74],.table .table-body tr th[data-v-bee2ed74]{padding:12px}.table .table-body tr td:last-child button[data-v-bee2ed74],.table .table-body tr th:last-child button[data-v-bee2ed74]{margin-right:0}.table .table-body a.page-link[data-v-bee2ed74],.table .table-body span[data-v-bee2ed74]{font-size:.9375em;font-weight:700;padding:10px 35px 10px 0;display:block;white-space:nowrap}.pagination .page-item[data-v-bee2ed74]{padding:3px;display:inline-block}.pagination .page-link[data-v-bee2ed74]{width:30px;height:30px;display:block;color:#1b2539;border-radius:6px;text-align:center;line-height:2.4;font-weight:700;font-size:13px;cursor:pointer;transition:all .15s ease}.pagination .page-link .icon[data-v-bee2ed74]{vertical-align:middle;margin-top:-2px}.pagination .page-link.active[data-v-bee2ed74],.pagination .page-link[data-v-bee2ed74]:hover:not(.disabled){background:#f4f5f6;color:#1b2539}.pagination .page-link.disabled[data-v-bee2ed74]{background:transparent;cursor:default}.pagination .page-link.disabled svg path[data-v-bee2ed74]{fill:rgba(27,37,57,.7)}.paginator-wrapper[data-v-bee2ed74]{margin-top:30px;margin-bottom:40px;display:flex;justify-content:space-between;align-items:center}.paginator-wrapper .paginator-info[data-v-bee2ed74]{font-size:13px;color:rgba(27,37,57,.7)}.user-preview[data-v-bee2ed74]{display:flex;align-items:center;cursor:pointer}.user-preview img[data-v-bee2ed74]{width:45px;margin-right:22px}@media only screen and (max-width:690px){.paginator-wrapper[data-v-bee2ed74]{display:block;text-align:center}.paginator-wrapper .paginator-info[data-v-bee2ed74]{margin-top:10px;display:block}}@media (prefers-color-scheme:dark){.table .table-body th[data-v-bee2ed74]:hover,.table .table-body tr[data-v-bee2ed74]:hover{background:#1e2024}.pagination .page-link[data-v-bee2ed74],.paginator-wrapper .paginator-info[data-v-bee2ed74]{color:#7d858c}.pagination .page-link svg polyline[data-v-bee2ed74]{stroke:#bec6cf}.pagination .page-link.active[data-v-bee2ed74],.pagination .page-link[data-v-bee2ed74]:hover:not(.disabled){color:#00bc7e;background:rgba(0,188,126,.1)}.pagination .page-link.disabled[data-v-bee2ed74]{background:transparent;cursor:default}.pagination .page-link.disabled svg polyline[data-v-bee2ed74]{stroke:#7d858c}}",""])},THmQ:function(t,a,e){"use strict";var i={name:"SectionTitle"},n=(e("UHE7"),e("KHd+")),s=Object(n.a)(i,(function(){var t=this.$createElement;return(this._self._c||t)("b",{staticClass:"text-label"},[this._t("default")],2)}),[],!1,null,"6d799cf2",null);a.a=s.exports},UHE7:function(t,a,e){"use strict";e("UmJ6")},UmJ6:function(t,a,e){var i=e("vFyo");"string"==typeof i&&(i=[[t.i,i,""]]);var n={hmr:!0,transform:void 0,insertInto:void 0};e("aET+")(i,n);i.locals&&(t.exports=i.locals)},WEWl:function(t,a,e){var i=e("sGz8");"string"==typeof i&&(i=[[t.i,i,""]]);var n={hmr:!0,transform:void 0,insertInto:void 0};e("aET+")(i,n);i.locals&&(t.exports=i.locals)},WFjI:function(t,a,e){"use strict";e("JsZR");var i=e("KHd+"),n=Object(i.a)({},(function(){var t=this.$createElement,a=this._self._c||t;return a("svg",{staticClass:"preview-list-icon",attrs:{fill:"none",stroke:"currentColor","stroke-width":"1.5","fill-rule":"evenodd","stroke-linecap":"round","stroke-linejoin":"round",width:"15px",height:"15px",viewBox:"0 0 20 16",version:"1.1",xmlns:"http://www.w3.org/2000/svg","xmlns:xlink":"http://www.w3.org/1999/xlink"}},[a("rect",{attrs:{x:"9.77777778",y:"0",width:"6.22222222",height:"6.22222222"}}),this._v(" "),a("rect",{attrs:{x:"9.77777778",y:"9.77777778",width:"6.22222222",height:"6.22222222"}}),this._v(" "),a("line",{attrs:{x1:"0",y1:"2",x2:"6",y2:"2"}}),this._v(" "),a("line",{attrs:{x1:"0",y1:"8",x2:"6",y2:"8"}}),this._v(" "),a("line",{attrs:{x1:"0",y1:"14",x2:"6",y2:"14"}})])}),[],!1,null,null,null);a.a=n.exports},Wx07:function(t,a,e){(t.exports=e("I1BE")(!1)).push([t.i,".table-row[data-v-b0f3a8d0]{border-radius:8px}.table-row[data-v-b0f3a8d0]:hover{background:#f4f5f6}.table-row .table-cell[data-v-b0f3a8d0]{padding-top:15px;padding-bottom:15px}.table-row .table-cell[data-v-b0f3a8d0]:first-child{padding-left:15px}.table-row .table-cell[data-v-b0f3a8d0]:last-child{padding-right:15px;text-align:right}.table-row .table-cell span[data-v-b0f3a8d0]{font-size:1em;font-weight:700}",""])},XG7Q:function(t,a,e){var i=e("SdtT");"string"==typeof i&&(i=[[t.i,i,""]]);var n={hmr:!0,transform:void 0,insertInto:void 0};e("aET+")(i,n);i.locals&&(t.exports=i.locals)},Xm12:function(t,a,e){var i=e("q8nf");"string"==typeof i&&(i=[[t.i,i,""]]);var n={hmr:!0,transform:void 0,insertInto:void 0};e("aET+")(i,n);i.locals&&(t.exports=i.locals)},YLwN:function(t,a,e){"use strict";e("CK9m")},dtPa:function(t,a,e){(t.exports=e("I1BE")(!1)).push([t.i,".mobile-action-button[data-v-7b8372d6]{background:#f4f5f6;margin-right:8px;border-radius:8px;padding:7px 14px;cursor:pointer;border:none;transition:all .15s ease}.mobile-action-button .flex[data-v-7b8372d6]{display:flex;align-items:center}.mobile-action-button .icon[data-v-7b8372d6]{margin-right:10px;font-size:.875em}.mobile-action-button .icon circle[data-v-7b8372d6],.mobile-action-button .icon line[data-v-7b8372d6],.mobile-action-button .icon path[data-v-7b8372d6],.mobile-action-button .icon polygon[data-v-7b8372d6],.mobile-action-button .icon polyline[data-v-7b8372d6],.mobile-action-button .icon rect[data-v-7b8372d6]{transition:all .15s ease}.mobile-action-button .label[data-v-7b8372d6]{transition:all .15s ease;font-size:.875em;font-weight:700;color:#1b2539}.mobile-action-button[data-v-7b8372d6]:active{transform:scale(.95)}@media (prefers-color-scheme:dark){.mobile-action-button[data-v-7b8372d6]{background:#1e2024}.mobile-action-button circle[data-v-7b8372d6],.mobile-action-button line[data-v-7b8372d6],.mobile-action-button path[data-v-7b8372d6],.mobile-action-button polygon[data-v-7b8372d6],.mobile-action-button polyline[data-v-7b8372d6],.mobile-action-button rect[data-v-7b8372d6]{color:inherit}.mobile-action-button .label[data-v-7b8372d6]{color:#bec6cf}}",""])},kPoH:function(t,a,e){"use strict";var i={name:"ColorLabel",props:["color"]},n=(e("m6y/"),e("KHd+")),s=Object(n.a)(i,(function(){var t=this.$createElement;return(this._self._c||t)("b",{staticClass:"color-label",class:this.color},[this._t("default")],2)}),[],!1,null,"5c508dbf",null);a.a=s.exports},"m6y/":function(t,a,e){"use strict";e("0rhn")},mGdo:function(t,a,e){var i=e("CLdG");"string"==typeof i&&(i=[[t.i,i,""]]);var n={hmr:!0,transform:void 0,insertInto:void 0};e("aET+")(i,n);i.locals&&(t.exports=i.locals)},"nr4+":function(t,a,e){var i=e("3eeM");"string"==typeof i&&(i=[[t.i,i,""]]);var n={hmr:!0,transform:void 0,insertInto:void 0};e("aET+")(i,n);i.locals&&(t.exports=i.locals)},q8nf:function(t,a,e){(t.exports=e("I1BE")(!1)).push([t.i,".mobile-header[data-v-699fe34a]{padding:10px 0;text-align:center;background:#fff;position:sticky;display:none;z-index:6;top:0}.mobile-header>div[data-v-699fe34a]{flex-grow:1;align-self:center;white-space:nowrap}.mobile-header .go-back[data-v-699fe34a]{text-align:left}.mobile-header .location-name[data-v-699fe34a]{line-height:1;text-align:center;width:100%;vertical-align:middle;font-size:.9375em;color:#1b2539;font-weight:700;max-width:220px;overflow:hidden;text-overflow:ellipsis;display:inline-block}.mobile-header .mobile-menu[data-v-699fe34a]{text-align:right}.mobile-header .icon[data-v-699fe34a]{vertical-align:middle;margin-top:-4px}@media only screen and (max-width:690px){.mobile-header[data-v-699fe34a]{display:flex;margin-bottom:15px}}@media (prefers-color-scheme:dark){.mobile-header[data-v-699fe34a]{background:#141414}.mobile-header .location-name[data-v-699fe34a]{color:#bec6cf}}",""])},sGz8:function(t,a,e){(t.exports=e("I1BE")(!1)).push([t.i,".input-wrapper[data-v-421ca226]{display:flex;width:100%}.input-wrapper .input-label[data-v-421ca226]{color:#1b2539}.input-wrapper .switch-content[data-v-421ca226]{width:100%}.input-wrapper .switch-content[data-v-421ca226]:last-child{width:80px}.switch[data-v-421ca226]{width:50px;height:28px;background:#f1f1f5;position:relative}.switch[data-v-421ca226],.switch .switch-button[data-v-421ca226]{border-radius:50px;display:block;transition:all .3s ease}.switch .switch-button[data-v-421ca226]{width:22px;height:22px;background:#fff;position:absolute;top:3px;left:3px;box-shadow:0 2px 4px rgba(37,38,94,.1);cursor:pointer}.switch.active .switch-button[data-v-421ca226]{left:25px}@media (prefers-color-scheme:dark){.switch[data-v-421ca226]{background:#1e2024}.popup-wrapper .switch[data-v-421ca226]{background:#25272c}}",""])},"t5U/":function(t,a,e){"use strict";var i=e("CjXH"),n=e("WFjI"),s={name:"MobileActionButton",props:["icon"],components:{FilePlusIcon:i.z,SortingIcon:n.a,CheckSquareIcon:i.f,DollarSignIcon:i.r,CreditCardIcon:i.p,FolderPlusIcon:i.D,UserPlusIcon:i.lb,XSquareIcon:i.pb,FilterIcon:i.B,CheckIcon:i.e,TrashIcon:i.hb,PlusIcon:i.V,ListIcon:i.M,GridIcon:i.F}},o=(e("zKuA"),e("KHd+")),r=Object(o.a)(s,(function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("button",{staticClass:"mobile-action-button"},[e("div",{staticClass:"flex"},["file-plus"===t.icon?e("file-plus-icon",{staticClass:"icon dark-text-theme",attrs:{size:"15"}}):t._e(),t._v(" "),"filter"===t.icon?e("filter-icon",{staticClass:"icon dark-text-theme",attrs:{size:"15"}}):t._e(),t._v(" "),"credit-card"===t.icon?e("credit-card-icon",{staticClass:"icon dark-text-theme",attrs:{size:"15"}}):t._e(),t._v(" "),"folder-plus"===t.icon?e("folder-plus-icon",{staticClass:"icon dark-text-theme",attrs:{size:"15"}}):t._e(),t._v(" "),"th-list"===t.icon?e("list-icon",{staticClass:"icon dark-text-theme",attrs:{size:"15"}}):t._e(),t._v(" "),"trash"===t.icon?e("trash-icon",{staticClass:"icon dark-text-theme",attrs:{size:"15"}}):t._e(),t._v(" "),"th"===t.icon?e("grid-icon",{staticClass:"icon dark-text-theme",attrs:{size:"15"}}):t._e(),t._v(" "),"user-plus"===t.icon?e("user-plus-icon",{staticClass:"icon dark-text-theme",attrs:{size:"15"}}):t._e(),t._v(" "),"plus"===t.icon?e("plus-icon",{staticClass:"icon dark-text-theme",attrs:{size:"15"}}):t._e(),t._v(" "),"check-square"===t.icon?e("check-square-icon",{staticClass:"icon dark-text-theme",attrs:{size:"15"}}):t._e(),t._v(" "),"x-square"===t.icon?e("x-square-icon",{staticClass:"icon dark-text-theme",attrs:{size:"15"}}):t._e(),t._v(" "),"check"===t.icon?e("check-icon",{staticClass:"icon dark-text-theme",attrs:{size:"15"}}):t._e(),t._v(" "),"dollar-sign"===t.icon?e("dollar-sign-icon",{staticClass:"icon dark-text-theme",attrs:{size:"15"}}):t._e(),t._v(" "),"preview-sorting"===t.icon?e("sorting-icon",{staticClass:"icon dark-text-theme preview-sorting"}):t._e(),t._v(" "),e("span",{staticClass:"label"},[t._t("default")],2)],1)])}),[],!1,null,"7b8372d6",null);a.a=r.exports},vFyo:function(t,a,e){(t.exports=e("I1BE")(!1)).push([t.i,".text-label[data-v-6d799cf2]{font-size:.75em;color:#afafaf;font-weight:700;display:block;margin-bottom:20px}@media (prefers-color-scheme:dark){.text-label[data-v-6d799cf2]{color:#00bc7e}}",""])},xxrA:function(t,a,e){"use strict";var i={name:"SwitchInput",props:["label","name","state","info"],data:function(){return{isSwitched:void 0}},methods:{changeState:function(){this.isSwitched=!this.isSwitched,this.$emit("input",this.isSwitched)}},mounted:function(){this.isSwitched=this.state}},n=(e("LedX"),e("KHd+")),s=Object(n.a)(i,(function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"input-wrapper"},[e("div",{staticClass:"switch-content"},[t.label?e("label",{staticClass:"input-label"},[t._v(t._s(t.label)+":")]):t._e(),t._v(" "),t.info?e("small",{staticClass:"input-info"},[t._v(t._s(t.info))]):t._e()]),t._v(" "),e("div",{staticClass:"switch-content text-right"},[e("div",{staticClass:"switch",class:{active:t.isSwitched},on:{click:t.changeState}},[e("div",{staticClass:"switch-button"})])])])}),[],!1,null,"421ca226",null);a.a=s.exports},zKuA:function(t,a,e){"use strict";e("Gc5Z")}}]);