(window.webpackJsonp=window.webpackJsonp||[]).push([[58],{XvMd:function(t,e,n){"use strict";n.r(e);var o=n("YQUA"),i=n("XdRL"),r=n("gQwf"),a=n("RXD1"),c=n("G7DB"),l=n("t5U/"),u=n("Hi0u"),s=n("xcnA"),d=n("bpVB"),p=n("0gRs"),m=n("dH5z"),v=n("c4kp"),_=n("2QtR"),f=n("axtU"),O=n("Nv84"),h=n("uFbu"),b=n("L2JU"),$=n("xCqy");function F(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(t);e&&(o=o.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,o)}return n}function M(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?F(Object(n),!0).forEach((function(e){g(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):F(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function g(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}var w={name:"SharedWithMe",components:{MobileActionButtonUpload:a.a,MobileMultiSelectToolbar:c.a,MobileTeamContextMenu:o.a,MobileActionButton:l.a,MobileContextMenu:u.a,MobileCreateMenu:s.a,ToolbarButton:p.a,ButtonUpload:d.a,OptionUpload:m.a,OptionGroup:f.a,FileBrowser:v.a,ContextMenu:_.a,ButtonBase:O.a,Option:h.a,FileActionsMobile:r.a,EmptyFilePage:i.a},computed:M(M({},Object(b.b)(["currentTeamFolder","clipboard","config","user"])),{},{teamFolder:function(){return this.currentTeamFolder?this.currentTeamFolder:this.clipboard[0]},canEdit:function(){var t=this;return!(!this.currentTeamFolder||!this.user)&&"can-edit"===this.currentTeamFolder.data.relationships.members.data.find((function(e){return e.data.id===t.user.data.id})).data.attributes.permission},isTeamFolderHomepage:function(){return this.$isThisRoute(this.$route,["SharedWithMe"])&&!this.$route.params.id},isFolder:function(){return this.item&&"folder"===this.item.data.type},hasFile:function(){return this.clipboard.find((function(t){return"folder"!==t.type}))}}),data:function(){return{item:void 0}},methods:{createFolder:function(){$.a.$emit("popup:open",{name:"create-folder"})}},mounted:function(){var t=this;this.$store.commit("SET_CURRENT_TEAM_FOLDER",void 0),this.$store.dispatch("getSharedWithMeFolder",this.$route.params.id),$.a.$on("context-menu:show",(function(e,n){return t.item=n})),$.a.$on("mobile-context-menu:show",(function(e){return t.item=e})),$.a.$on("context-menu:current-folder",(function(e){return t.item=e})),$.a.$on("action:confirmed",(function(e){"leave-team-folder"===e.operation&&axios.delete("/api/teams/folders/".concat(e.id,"/leave")).then((function(){t.$route.params.id?t.$router.push({name:"SharedWithMe"}):t.$store.dispatch("getSharedWithMeFolder",void 0),$.a.$emit("toaster",{type:"success",message:t.$t("You have successfully left the team folder")})})).catch((function(){return t.$isSomethingWrong()}))}))},beforeDestroy:function(){$.a.$off("action:confirmed")}},y=n("KHd+"),k=Object(y.a)(w,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("MobileContextMenu",[t.canEdit&&t.item?n("OptionGroup",[n("Option",{attrs:{title:t.$t("context_menu.rename"),icon:"rename"},nativeOn:{click:function(e){return t.$renameFileOrFolder(t.item)}}}),t._v(" "),n("Option",{attrs:{title:t.$t("context_menu.move"),icon:"move-item"},nativeOn:{click:function(e){return t.$moveFileOrFolder(t.item)}}}),t._v(" "),n("Option",{attrs:{title:t.$t("context_menu.delete"),icon:"trash"},nativeOn:{click:function(e){return t.$deleteFileOrFolder(t.item)}}})],1):t._e(),t._v(" "),t.item?n("OptionGroup",[n("Option",{attrs:{title:t.$t("context_menu.download"),icon:"download"},nativeOn:{click:function(e){return t.$downloadSelection(t.item)}}})],1):t._e()],1),t._v(" "),n("MobileCreateMenu",[n("OptionGroup",[n("OptionUpload",{attrs:{title:t.$t("actions.upload"),"is-hover-disabled":"true"}})],1),t._v(" "),n("OptionGroup",[n("Option",{attrs:{title:t.$t("actions.create_folder"),icon:"folder-plus","is-hover-disabled":"true"},nativeOn:{click:function(e){return e.stopPropagation(),t.createFolder(e)}}})],1)],1),t._v(" "),n("MobileTeamContextMenu",[n("OptionGroup",[n("Option",{attrs:{title:t.$t("Leave the Team Folder"),icon:"user-minus"},nativeOn:{click:function(e){return t.$detachMeFromTeamFolder(t.teamFolder)}}})],1)],1),t._v(" "),n("MobileMultiSelectToolbar",[t.canEdit?n("ToolbarButton",{staticClass:"action-btn",class:{"is-inactive":t.clipboard.length<1},attrs:{source:"move",action:t.$t("actions.move")},nativeOn:{click:function(e){return t.$moveFileOrFolder(t.clipboard)}}}):t._e(),t._v(" "),t.canEdit?n("ToolbarButton",{staticClass:"action-btn",class:{"is-inactive":t.clipboard.length<1},attrs:{source:"trash",action:t.$t("actions.delete")},nativeOn:{click:function(e){return t.$deleteFileOrFolder(t.clipboard)}}}):t._e(),t._v(" "),n("ToolbarButton",{staticClass:"action-btn",attrs:{source:"download",action:t.$t("actions.download")},nativeOn:{click:function(e){return t.$downloadSelection(t.item)}}})],1),t._v(" "),n("ContextMenu",{scopedSlots:t._u([t.canEdit?{key:"empty-select",fn:function(){return[t.isTeamFolderHomepage?t._e():n("OptionGroup",[n("OptionUpload",{attrs:{title:t.$t("actions.upload")}}),t._v(" "),n("Option",{attrs:{title:t.$t("actions.create_folder"),icon:"folder-plus"},nativeOn:{click:function(e){return e.stopPropagation(),t.$createFolder(e)}}})],1)]},proxy:!0}:null,t.item?{key:"single-select",fn:function(){return[t.canEdit?n("OptionGroup",[n("Option",{attrs:{title:t.$t("context_menu.rename"),icon:"rename"},nativeOn:{click:function(e){return t.$renameFileOrFolder(t.item)}}}),t._v(" "),n("Option",{attrs:{title:t.$t("context_menu.move"),icon:"move-item"},nativeOn:{click:function(e){return t.$moveFileOrFolder(t.item)}}}),t._v(" "),n("Option",{attrs:{title:t.$t("context_menu.delete"),icon:"trash"},nativeOn:{click:function(e){return t.$deleteFileOrFolder(t.item)}}})],1):t._e(),t._v(" "),n("OptionGroup",[n("Option",{attrs:{title:t.$t("context_menu.detail"),icon:"detail"},nativeOn:{click:function(e){return t.$openInDetailPanel(t.item)}}}),t._v(" "),n("Option",{attrs:{title:t.$t("context_menu.download"),icon:"download"},nativeOn:{click:function(e){return t.$downloadSelection(t.item)}}})],1)]},proxy:!0}:null,t.item?{key:"multiple-select",fn:function(){return[t.canEdit?n("OptionGroup",[n("Option",{attrs:{title:t.$t("context_menu.move"),icon:"move-item"},nativeOn:{click:function(e){return t.$moveFileOrFolder(t.item)}}}),t._v(" "),n("Option",{attrs:{title:t.$t("context_menu.delete"),icon:"trash"},nativeOn:{click:function(e){return t.$deleteFileOrFolder(t.item)}}})],1):t._e(),t._v(" "),n("OptionGroup",[n("Option",{attrs:{title:t.$t("context_menu.download"),icon:"download"},nativeOn:{click:function(e){return t.$downloadSelection(t.item)}}})],1)]},proxy:!0}:null],null,!0)}),t._v(" "),n("FileActionsMobile",[n("MobileActionButton",{attrs:{icon:"search"},nativeOn:{click:function(e){return t.$openSpotlight(e)}}},[t._v("\n\t\t\t\t"+t._s(t.$t("Spotlight"))+"\n\t\t\t")]),t._v(" "),n("MobileActionButton",{attrs:{icon:t.$getCurrentSectionIcon()},nativeOn:{click:function(e){return t.$showMobileMenu("file-filter")}}},[t._v("\n\t\t\t\t"+t._s(t.$getCurrentSectionName())+"\n\t\t\t")]),t._v(" "),t.canEdit?n("MobileActionButton",{attrs:{icon:"cloud-plus"},nativeOn:{click:function(e){return t.$showMobileMenu("create-list")}}},[t._v("\n\t\t\t\t"+t._s(t.$t("mobile.create"))+"\n\t\t\t")]):t._e(),t._v(" "),n("MobileActionButton",{attrs:{icon:"check-square"},nativeOn:{click:function(e){return t.$enableMultiSelectMode(e)}}},[t._v("\n\t\t\t\t"+t._s(t.$t("context_menu.select"))+"\n\t\t\t")]),t._v(" "),n("MobileActionButton",{attrs:{icon:"preview-sorting"},nativeOn:{click:function(e){return t.$showMobileMenu("file-sorting")}}},[t._v("\n\t\t\t\t"+t._s(t.$t("preview_sorting.preview_sorting_button"))+"\n\t\t\t")])],1),t._v(" "),n("EmptyFilePage",[t.isTeamFolderHomepage?[n("h1",{staticClass:"title"},[t._v("\n\t\t\t\t\t"+t._s(t.$t("Nothing Shared With You"))+"\n\t\t\t\t")]),t._v(" "),n("p",{staticClass:"description"},[t._v("\n\t\t\t\t\t"+t._s(t.$t("All items that are shared with you will be visible here."))+"\n\t\t\t\t")])]:t._e(),t._v(" "),t.canEdit&&!t.isTeamFolderHomepage?[n("h1",{staticClass:"title"},[t._v("\n\t\t\t\t\t"+t._s(t.$t("empty_page.title"))+"\n\t\t\t\t")]),t._v(" "),n("p",{staticClass:"description"},[t._v("\n\t\t\t\t\t"+t._s(t.$t("empty_page.description"))+"\n\t\t\t\t")]),t._v(" "),n("ButtonUpload",{attrs:{"button-style":"theme"}},[t._v("\n\t\t\t\t\t"+t._s(t.$t("empty_page.call_to_action"))+"\n\t\t\t\t")])]:t._e(),t._v(" "),t.canEdit||t.isTeamFolderHomepage?t._e():[n("h1",{staticClass:"title"},[t._v("\n\t\t\t\t\t"+t._s(t.$t("There is Nothing Yet"))+"\n\t\t\t\t")])]],2),t._v(" "),n("FileBrowser")],1)}),[],!1,null,null,null);e.default=k.exports}}]);