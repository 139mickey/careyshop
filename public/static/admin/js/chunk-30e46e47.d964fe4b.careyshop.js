(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-30e46e47"],{"9a78":function(t,n,e){"use strict";e.d(n,"a",(function(){return r})),e.d(n,"d",(function(){return d})),e.d(n,"b",(function(){return u})),e.d(n,"c",(function(){return c})),e.d(n,"f",(function(){return s})),e.d(n,"e",(function(){return h}));var a=e("5530"),i=e("bc07"),o="/v1/navigation";function r(t){return Object(i["a"])({url:o,method:"post",data:Object(a["a"])({method:"add.navigation.item"},t)})}function d(t){return Object(i["a"])({url:o,method:"post",data:Object(a["a"])({method:"set.navigation.item"},t)})}function u(t){return Object(i["a"])({url:o,method:"post",data:{method:"del.navigation.list",navigation_id:t}})}function c(t){return Object(i["a"])({url:o,method:"post",data:Object(a["a"])({method:"get.navigation.list"},t)})}function s(t,n){return Object(i["a"])({url:o,method:"post",data:{method:"set.navigation.status",navigation_id:t,status:n}})}function h(t,n){return Object(i["a"])({url:o,method:"post",data:{method:"set.navigation.sort",navigation_id:t,sort:n}})}},a9e8:function(t,n,e){"use strict";e.r(n);var a=function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("cs-container",[e("page-header",{ref:"header",attrs:{slot:"header",loading:t.loading},on:{submit:t.handleSubmit},slot:"header"}),e("page-main",{attrs:{loading:t.loading,"table-data":t.table},on:{sort:t.handleSort,refresh:t.handleRefresh}})],1)},i=[],o=(e("d3b7"),e("5530")),r=e("9a78"),d={name:"setting-setting-navi",components:{PageHeader:function(){return e.e("chunk-2d2374b7").then(e.bind(null,"fb05"))},PageMain:function(){return e.e("chunk-2d0e6c4a").then(e.bind(null,"99c7"))}},data:function(){return{loading:!1,table:[],order:{order_type:void 0,order_field:void 0}}},mounted:function(){this.handleSubmit()},methods:{handleRefresh:function(){var t=this;this.$nextTick((function(){t.$refs.header.handleFormSubmit()}))},handleSort:function(t){var n=this;this.order=t,this.$nextTick((function(){n.$refs.header.handleFormSubmit()}))},handleSubmit:function(t){var n=this;this.loading=!0,Object(r["c"])(Object(o["a"])(Object(o["a"])({},t),this.order)).then((function(t){n.table=t.data||[]})).finally((function(){n.loading=!1}))}}},u=d,c=e("2877"),s=Object(c["a"])(u,a,i,!1,null,null,null);n["default"]=s.exports}}]);