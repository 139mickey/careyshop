(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2332b7eb"],{"041d":function(t,e,n){"use strict";n.d(e,"a",(function(){return s})),n.d(e,"e",(function(){return u})),n.d(e,"d",(function(){return r})),n.d(e,"b",(function(){return d})),n.d(e,"c",(function(){return c}));var o=n("5530"),a=n("bc07"),i="/v1/goods_consult";function s(t){return Object(a["a"])({url:i,method:"post",data:{method:"del.goods.consult.list",goods_consult_id:t}})}function u(t,e){return Object(a["a"])({url:i,method:"post",data:{method:"set.goods.consult.show",goods_consult_id:t,is_show:e}})}function r(t,e){return Object(a["a"])({url:i,method:"post",data:{method:"reply.goods.consult.item",goods_consult_id:t,content:e}})}function d(t){return Object(a["a"])({url:i,method:"post",data:{method:"get.goods.consult.item",goods_consult_id:t}})}function c(t){return Object(a["a"])({url:i,method:"post",data:Object(o["a"])({method:"get.goods.consult.list"},t)})}},e725:function(t,e,n){"use strict";n.r(e);var o=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("cs-container",[n("page-header",{ref:"header",attrs:{slot:"header",loading:t.loading,"type-list":t.typeList},on:{submit:t.handleSubmit},slot:"header"}),n("page-main",{attrs:{loading:t.loading,"table-data":t.table,"type-list":t.typeList},on:{refresh:t.handleRefresh}}),n("page-footer",{attrs:{slot:"footer",loading:t.loading,current:t.page.current,size:t.page.size,total:t.page.total},on:{change:t.handlePaginationChange},slot:"footer"})],1)},a=[],i=(n("d3b7"),n("5530")),s=n("5880"),u=n("041d"),r={name:"goods-opinion-consult",components:{PageHeader:function(){return n.e("chunk-7c0d717c").then(n.bind(null,"3e0a"))},PageMain:function(){return n.e("chunk-1475d6b6").then(n.bind(null,"04e3"))},PageFooter:function(){return n.e("chunk-2d225417").then(n.bind(null,"e42d"))}},data:function(){return{table:[],loading:!1,typeList:{0:"商品咨询",1:"支付",2:"配送",3:"售后"},page:{current:1,size:0,total:0}}},mounted:function(){var t=this;this.$store.dispatch("careyshop/db/databasePage",{user:!0}).then((function(e){t.page.size=e.get("size").value()||25})).then((function(){t.handleSubmit()}))},methods:Object(i["a"])(Object(i["a"])({},Object(s["mapActions"])("careyshop/update",["updateData"])),{},{handleRefresh:function(){var t=this,e=arguments.length>0&&void 0!==arguments[0]&&arguments[0];e&&(!(this.page.current-1)||this.page.current--),this.$nextTick((function(){t.$refs.header.handleFormSubmit()}))},handlePaginationChange:function(t){var e=this;this.page=t,this.$nextTick((function(){e.$refs.header.handleFormSubmit()}))},handleSubmit:function(t){var e=this,n=arguments.length>1&&void 0!==arguments[1]&&arguments[1];n&&(this.page.current=1),this.loading=!0,Object(u["c"])(Object(i["a"])(Object(i["a"])({},t),{},{page_no:this.page.current,page_size:this.page.size})).then((function(t){e.updateData({type:"clear",name:"goods-opinion-consult"}),e.table=t.data.items||[],e.page.total=t.data.total_result})).finally((function(){e.loading=!1}))}})},d=r,c=n("2877"),l=Object(c["a"])(d,o,a,!1,null,null,null);e["default"]=l.exports}}]);