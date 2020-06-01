(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d0a2da7"],{"004e":function(t,e,a){"use strict";a.r(e);var i=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"cs-p"},[a("el-form",{attrs:{inline:!0,size:"small"}},[t.auth.add?a("el-form-item",[a("el-button",{attrs:{icon:"el-icon-plus",disabled:t.loading},on:{click:t.handleCreate}},[t._v("新增折扣")])],1):t._e(),t.auth.enable||t.auth.disable?a("el-form-item",[a("el-button-group",[t.auth.enable?a("el-button",{attrs:{icon:"el-icon-check",disabled:t.loading},on:{click:function(e){return t.handleStatus(null,1,!0)}}},[t._v("启用")]):t._e(),t.auth.disable?a("el-button",{attrs:{icon:"el-icon-close",disabled:t.loading},on:{click:function(e){return t.handleStatus(null,0,!0)}}},[t._v("禁用")]):t._e()],1)],1):t._e(),t.auth.del?a("el-form-item",[a("el-button",{attrs:{icon:"el-icon-delete",disabled:t.loading},on:{click:function(e){return t.handleDelete(null)}}},[t._v("删除")])],1):t._e(),a("cs-help",{staticStyle:{"padding-bottom":"19px"},attrs:{router:t.$route.path}})],1),a("el-table",{attrs:{data:t.currentTableData,"highlight-current-row":!0},on:{"selection-change":t.handleSelectionChange,"sort-change":t.sortChange}},[a("el-table-column",{attrs:{align:"center",type:"selection",width:"55"}}),a("el-table-column",{attrs:{label:"编号",prop:"discount_id",sortable:"custom","min-width":"40"}}),a("el-table-column",{attrs:{label:"名称",prop:"name",sortable:"custom","min-width":"180"}}),a("el-table-column",{attrs:{label:"折扣方式",prop:"type",width:"160"},scopedSlots:t._u([{key:"default",fn:function(e){return[t._v(" "+t._s(t.typeMap[e.row.type])+" ")]}}])}),a("el-table-column",{attrs:{label:"折扣日期",prop:"begin_time",sortable:"custom",align:"center",width:"160"},scopedSlots:t._u([{key:"default",fn:function(e){return[a("span",[t._v(t._s(e.row.begin_time))]),a("br"),a("span",[t._v(t._s(e.row.end_time))])]}}])}),a("el-table-column",{attrs:{label:"状态",prop:"status",sortable:"custom",align:"center",width:"100"},scopedSlots:t._u([{key:"default",fn:function(e){return[a("el-tag",{style:t.auth.enable||t.auth.disable?"cursor: pointer;":"",attrs:{size:"mini",type:t.statusMap[e.row.status].type,effect:t.auth.enable||t.auth.disable?"light":"plain"},nativeOn:{click:function(a){return t.handleStatus(e.$index)}}},[t._v(" "+t._s(t.statusMap[e.row.status].text)+" ")])]}}])}),a("el-table-column",{attrs:{label:"操作",align:"center","min-width":"100"},scopedSlots:t._u([{key:"default",fn:function(e){return[t.auth.set?a("el-button",{attrs:{size:"small",type:"text"},on:{click:function(a){return t.handleUpdate(e.$index)}}},[t._v("编辑")]):t._e(),t.auth.del?a("el-button",{attrs:{size:"small",type:"text"},on:{click:function(a){return t.handleDelete(e.$index)}}},[t._v("删除")]):t._e()]}}])})],1),a("el-dialog",{attrs:{title:t.textMap[t.dialogStatus],visible:t.dialogFormVisible,"append-to-body":!0,"close-on-click-modal":!1,"destroy-on-close":!0,width:"760px"},on:{"update:visible":function(e){t.dialogFormVisible=e}}},[a("el-form",{ref:"form",attrs:{model:t.form,rules:t.rules,"label-width":"80px"}},[a("el-form-item",{attrs:{label:"名称",prop:"name"}},[a("el-input",{attrs:{placeholder:"请输入折扣名称",clearable:!0},model:{value:t.form.name,callback:function(e){t.$set(t.form,"name",e)},expression:"form.name"}})],1),a("el-row",{attrs:{gutter:20}},[a("el-col",{attrs:{span:12}},[a("el-form-item",{attrs:{label:"开始日期",prop:"begin_time"}},[a("el-date-picker",{staticStyle:{width:"100%"},attrs:{type:"datetime","value-format":"yyyy-MM-dd HH:mm:ss",placeholder:"请选择折扣开始日期"},model:{value:t.form.begin_time,callback:function(e){t.$set(t.form,"begin_time",e)},expression:"form.begin_time"}})],1)],1),a("el-col",{attrs:{span:12}},[a("el-form-item",{attrs:{label:"结束日期",prop:"end_time"}},[a("el-date-picker",{staticStyle:{width:"100%"},attrs:{type:"datetime","value-format":"yyyy-MM-dd HH:mm:ss",placeholder:"请选择折扣结束日期"},model:{value:t.form.end_time,callback:function(e){t.$set(t.form,"end_time",e)},expression:"form.end_time"}})],1)],1)],1),a("el-row",{attrs:{gutter:20}},[a("el-col",{attrs:{span:12}},[a("el-form-item",{attrs:{label:"折扣方式",prop:"type"}},[a("el-select",{staticStyle:{width:"100%"},attrs:{placeholder:"请选择"},model:{value:t.form.type,callback:function(e){t.$set(t.form,"type",e)},expression:"form.type"}},t._l(t.typeMap,(function(t,e){return a("el-option",{key:e,attrs:{label:t,value:e}})})),1)],1)],1),a("el-col",{attrs:{span:12}},[a("el-form-item",{attrs:{label:"状态",prop:"status"}},[a("el-switch",{attrs:{"active-value":1,"inactive-value":0},model:{value:t.form.status,callback:function(e){t.$set(t.form,"status",e)},expression:"form.status"}})],1)],1)],1),a("el-form-item",{attrs:{label:"商品选取",prop:"discount_goods"}},[a("cs-goods-select",{attrs:{"check-list":t.form.discount_goods},on:{confirm:t.handleGoodsConfirm}},[a("el-button",{attrs:{slot:"control"},slot:"control"},[t._v("商品选取")])],1)],1),t.dialogFormVisible?a("page-goods",{attrs:{type:t.form.type,"type-map":t.typeMap,status:t.dialogStatus},model:{value:t.form.discount_goods,callback:function(e){t.$set(t.form,"discount_goods",e)},expression:"form.discount_goods"}}):t._e()],1),a("div",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[a("el-button",{attrs:{size:"small"},on:{click:function(e){t.dialogFormVisible=!1}}},[t._v("取消")]),"create"===t.dialogStatus?a("el-button",{attrs:{type:"primary",loading:t.dialogLoading,size:"small"},on:{click:t.create}},[t._v("确定")]):a("el-button",{attrs:{type:"primary",loading:t.dialogLoading,size:"small"},on:{click:t.update}},[t._v("修改")])],1)],1)],1)},n=[],o=(a("4160"),a("c975"),a("d3b7"),a("25f0"),a("159b"),a("5530")),s=a("36d8"),l=a("ca00"),r={components:{PageGoods:function(){return a.e("chunk-1aa095e6").then(a.bind(null,"51a7"))},csGoodsSelect:function(){return a.e("chunk-a3026c04").then(a.bind(null,"e7ff"))}},props:{loading:{default:!1},tableData:{default:function(){return[]}},typeMap:{default:function(){}}},data:function(){return{currentTableData:[],multipleSelection:[],statusMap:{0:{text:"禁用",type:"danger"},1:{text:"启用",type:"success"},2:{text:"...",type:"info"}},textMap:{update:"编辑折扣",create:"新增折扣"},form:{name:void 0,type:void 0,begin_time:void 0,end_time:void 0,status:void 0,discount_goods:void 0},auth:{add:!1,set:!1,del:!1,enable:!1,disable:!1},rules:{name:[{required:!0,message:"名称不能为空",trigger:"blur"},{max:100,message:"长度不能大于 100 个字符",trigger:"blur"}],begin_time:[{required:!0,message:"开始日期不能为空",trigger:"change"}],end_time:[{required:!0,message:"结束日期不能为空",trigger:"change"}],type:[{required:!0,message:"至少选择一项",trigger:"change"}],discount_goods:[{required:!0,message:"商品选取不能为空",trigger:"blur"}]},dialogLoading:!1,dialogFormVisible:!1,dialogStatus:""}},watch:{tableData:{handler:function(t){this.currentTableData=t},immediate:!0}},mounted:function(){this._validationAuth()},methods:{_validationAuth:function(){this.auth.add=this.$permission("/marketing/marketing/discount/add"),this.auth.set=this.$permission("/marketing/marketing/discount/set"),this.auth.del=this.$permission("/marketing/marketing/discount/del"),this.auth.enable=this.$permission("/marketing/marketing/discount/enable"),this.auth.disable=this.$permission("/marketing/marketing/discount/disable")},_getIdList:function(t){null===t&&(t=this.multipleSelection);var e=[];return Array.isArray(t)?t.forEach((function(t){e.push(t.discount_id)})):e.push(this.currentTableData[t].discount_id),e},handleSelectionChange:function(t){this.multipleSelection=t},sortChange:function(t){var e=t.column,a=t.prop,i=t.order,n={order_type:void 0,order_field:void 0};e&&i&&(n.order_type="ascending"===i?"asc":"desc",n.order_field=a),this.$emit("sort",n)},handleStatus:function(t){var e=this,a=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0,i=arguments.length>2&&void 0!==arguments[2]&&arguments[2],n=this._getIdList(t);if(0!==n.length){if(!i){var l=this.currentTableData[t],r=l.status?0:1;if(l.status>1)return;if(0===r&&!this.auth.disable)return;if(1===r&&!this.auth.enable)return;return this.$set(this.currentTableData,t,Object(o["a"])(Object(o["a"])({},l),{},{status:2})),void c(n,r,this)}this.$confirm("确定要执行该操作吗?","提示",{confirmButtonText:"确定",cancelButtonText:"取消",type:"warning",closeOnClickModal:!1}).then((function(){c(n,a,e)})).catch((function(){}))}else this.$message.error("请选择要操作的数据");function c(t,e,a){Object(s["e"])(t,e).then((function(){a.currentTableData.forEach((function(i,n){-1!==t.indexOf(i.discount_id)&&a.$set(a.currentTableData,n,Object(o["a"])(Object(o["a"])({},i),{},{status:e}))})),a.$message.success("操作成功")}))}},handleDelete:function(t){var e=this,a=this._getIdList(t);0!==a.length?this.$confirm("确定要执行该操作吗?","提示",{confirmButtonText:"确定",cancelButtonText:"取消",type:"warning",closeOnClickModal:!1}).then((function(){Object(s["b"])(a).then((function(){l["a"].deleteDataList(e.currentTableData,a,"discount_id"),e.currentTableData.length<=0&&e.$emit("refresh",!0),e.$message.success("操作成功")}))})).catch((function(){})):this.$message.error("请选择要操作的数据")},handleGoodsConfirm:function(t){var e=[];t.forEach((function(t){e.push({goods_id:t.goods_id,discount:void 0,description:"",goods:t})})),this.form.discount_goods=e},handleCreate:function(){var t=this;this.form={name:"",type:void 0,begin_time:void 0,end_time:void 0,status:1,discount_goods:[]},this.$nextTick((function(){t.$refs.form&&t.$refs.form.clearValidate(),t.dialogStatus="create",t.dialogLoading=!1,t.dialogFormVisible=!0}))},handleUpdate:function(t){var e=this;this.currentIndex=t,this.form=Object(o["a"])(Object(o["a"])({},this.currentTableData[t]),{},{type:this.currentTableData[t].type.toString()}),this.$nextTick((function(){e.$refs.form&&e.$refs.form.clearValidate(),e.dialogStatus="update",e.dialogLoading=!1,e.dialogFormVisible=!0}))},create:function(){var t=this;this.$refs.form.validate((function(e){e&&(t.dialogLoading=!0,Object(s["a"])(t.form).then((function(e){t.currentTableData.unshift(e.data),t.dialogFormVisible=!1,t.$message.success("操作成功")})).catch((function(){t.dialogLoading=!1})))}))},update:function(){var t=this;this.$refs.form.validate((function(e){e&&(t.dialogLoading=!0,Object(s["d"])(t.form).then((function(e){t.$set(t.currentTableData,t.currentIndex,Object(o["a"])(Object(o["a"])({},t.currentTableData[t.currentIndex]),e.data)),t.dialogFormVisible=!1,t.$message.success("操作成功")})).catch((function(){t.dialogLoading=!1})))}))}}},c=r,u=a("2877"),d=Object(u["a"])(c,i,n,!1,null,null,null);e["default"]=d.exports}}]);