(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-0404598f"],{"25c9":function(t,e,n){"use strict";n.d(e,"a",(function(){return r})),n.d(e,"e",(function(){return d})),n.d(e,"b",(function(){return c})),n.d(e,"c",(function(){return u})),n.d(e,"d",(function(){return s})),n.d(e,"f",(function(){return h}));var a=n("5530"),o=n("bc07"),i="/v1/topic";function r(t){return Object(o["a"])({url:i,method:"post",data:Object(a["a"])({method:"add.topic.item"},t)})}function d(t){return Object(o["a"])({url:i,method:"post",data:Object(a["a"])({method:"set.topic.item"},t)})}function c(t){return Object(o["a"])({url:i,method:"post",data:{method:"del.topic.list",topic_id:t}})}function u(t){return Object(o["a"])({url:i,method:"post",data:{method:"get.topic.item",topic_id:t}})}function s(t){return Object(o["a"])({url:i,method:"post",data:Object(a["a"])({method:"get.topic.list"},t)})}function h(t,e){return Object(o["a"])({url:i,method:"post",data:{method:"set.topic.status",topic_id:t,status:e}})}},"6e48":function(t,e,n){"use strict";n.r(e);var a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("cs-container",[n("page-header",{ref:"header",attrs:{slot:"header",loading:t.loading},on:{submit:t.handleSubmit},slot:"header"}),n("page-main",{attrs:{loading:t.loading,"table-data":t.table},on:{sort:t.handleSort,refresh:t.handleRefresh}}),n("page-footer",{attrs:{slot:"footer",loading:t.loading,current:t.page.current,size:t.page.size,total:t.page.total},on:{change:t.handlePaginationChange},slot:"footer"})],1)},o=[],i=(n("d3b7"),n("5530")),r=n("5880"),d=n("25c9"),c={name:"system-topic-admin",components:{PageHeader:function(){return n.e("chunk-3f563f0a").then(n.bind(null,"84b9"))},PageMain:function(){return n.e("chunk-2e4dc53e").then(n.bind(null,"22e0"))},PageFooter:function(){return n.e("chunk-2d225417").then(n.bind(null,"e42d"))}},data:function(){return{table:[],loading:!1,page:{current:1,size:0,total:0},order:{order_type:void 0,order_field:void 0}}},mounted:function(){var t=this;this.$store.dispatch("careyshop/db/databasePage",{user:!0}).then((function(e){t.page.size=e.get("size").value()||25})).then((function(){t.handleSubmit()}))},methods:Object(i["a"])(Object(i["a"])({},Object(r["mapActions"])("careyshop/update",["updateData"])),{},{handleRefresh:function(){var t=this,e=arguments.length>0&&void 0!==arguments[0]&&arguments[0];e&&(!(this.page.current-1)||this.page.current--),this.$nextTick((function(){t.$refs.header.handleFormSubmit()}))},handlePaginationChange:function(t){var e=this;this.page=t,this.$nextTick((function(){e.$refs.header.handleFormSubmit()}))},handleSort:function(t){var e=this;this.order=t,this.$nextTick((function(){e.$refs.header.handleFormSubmit()}))},handleSubmit:function(t){var e=this,n=arguments.length>1&&void 0!==arguments[1]&&arguments[1];n&&(this.page.current=1),this.loading=!0,Object(d["d"])(Object(i["a"])(Object(i["a"])(Object(i["a"])({},t),this.order),{},{page_no:this.page.current,page_size:this.page.size})).then((function(t){e.updateData({type:"clear",name:"system-topic-admin"}),e.table=t.data.items||[],e.page.total=t.data.total_result})).finally((function(){e.loading=!1}))}})},u=c,s=n("2877"),h=Object(s["a"])(u,a,o,!1,null,null,null);e["default"]=h.exports}}]);