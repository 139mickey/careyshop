(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-76fe70d4"],{b5904:function(t,e,a){"use strict";a.r(e);var i=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"cs-p"},[a("el-form",{attrs:{inline:!0,size:"small"}},[t.auth.add?a("el-form-item",[a("el-button",{attrs:{icon:"el-icon-plus",disabled:t.loading},on:{click:t.handleCreate}},[t._v("新增客服")])],1):t._e(),t.auth.enable||t.auth.disable?a("el-form-item",[a("el-button-group",[t.auth.enable?a("el-button",{attrs:{icon:"el-icon-check",disabled:t.loading},on:{click:function(e){return t.handleStatus(null,1,!0)}}},[t._v("启用")]):t._e(),t.auth.disable?a("el-button",{attrs:{icon:"el-icon-close",disabled:t.loading},on:{click:function(e){return t.handleStatus(null,0,!0)}}},[t._v("禁用")]):t._e()],1)],1):t._e(),t.auth.del?a("el-form-item",[a("el-button",{attrs:{icon:"el-icon-delete",disabled:t.loading},on:{click:function(e){return t.handleDelete(null)}}},[t._v("删除")])],1):t._e(),a("cs-help",{staticStyle:{"padding-bottom":"19px"},attrs:{router:t.$route.path}})],1),a("el-table",{attrs:{data:t.currentTableData,"highlight-current-row":!0},on:{"selection-change":t.handleSelectionChange,"sort-change":t.sortChange}},[a("el-table-column",{attrs:{align:"center",type:"selection",width:"55"}}),a("el-table-column",{attrs:{label:"昵称",prop:"nick_name",sortable:"custom"}}),a("el-table-column",{attrs:{label:"组名称",prop:"type_name",sortable:"custom"}}),a("el-table-column",{attrs:{label:"排序值",prop:"sort",align:"center",sortable:"custom"},scopedSlots:t._u([{key:"default",fn:function(e){return[t.auth.sort?a("el-input-number",{staticStyle:{width:"88px"},attrs:{size:"mini","controls-position":"right",min:0,max:255},on:{change:function(a){return t.handleSort(e.$index)}},model:{value:e.row.sort,callback:function(a){t.$set(e.row,"sort",a)},expression:"scope.row.sort"}}):a("span",[t._v(" "+t._s(e.row.sort)+" ")])]}}])}),a("el-table-column",{attrs:{label:"状态",prop:"status",sortable:"custom",align:"center",width:"100"},scopedSlots:t._u([{key:"default",fn:function(e){return[a("el-tag",{style:t.auth.enable||t.auth.disable?"cursor: pointer;":"",attrs:{size:"mini",type:t.statusMap[e.row.status].type,effect:t.auth.enable||t.auth.disable?"light":"plain"},nativeOn:{click:function(a){return t.handleStatus(e.$index)}}},[t._v(" "+t._s(t.statusMap[e.row.status].text)+" ")])]}}])}),a("el-table-column",{attrs:{label:"操作",align:"center","min-width":"100"},scopedSlots:t._u([{key:"default",fn:function(e){return[t.auth.set?a("el-button",{attrs:{size:"small",type:"text"},on:{click:function(a){return t.handleUpdate(e.$index)}}},[t._v("编辑")]):t._e(),t.auth.del?a("el-button",{attrs:{size:"small",type:"text"},on:{click:function(a){return t.handleDelete(e.$index)}}},[t._v("删除")]):t._e()]}}])})],1),a("el-dialog",{attrs:{title:t.textMap[t.dialogStatus],visible:t.dialogFormVisible,"append-to-body":!0,"close-on-click-modal":!1,width:"600px"},on:{"update:visible":function(e){t.dialogFormVisible=e}}},[a("el-form",{ref:"form",attrs:{model:t.form,rules:t.rules,"label-width":"80px"}},[a("el-form-item",{attrs:{label:"昵称",prop:"nick_name"}},[a("el-input",{attrs:{placeholder:"请输入客服昵称",clearable:!0},model:{value:t.form.nick_name,callback:function(e){t.$set(t.form,"nick_name",e)},expression:"form.nick_name"}})],1),a("el-form-item",{attrs:{label:"组名称",prop:"type_name"}},[a("el-input",{attrs:{placeholder:"请输入客服组名称",clearable:!0},model:{value:t.form.type_name,callback:function(e){t.$set(t.form,"type_name",e)},expression:"form.type_name"}})],1),a("el-form-item",{attrs:{label:"联系方式",prop:"code"}},[a("el-input",{attrs:{placeholder:"请输入客服联系方式(自定义特征码)",type:"textarea",rows:5},model:{value:t.form.code,callback:function(e){t.$set(t.form,"code",e)},expression:"form.code"}})],1),a("el-form-item",{attrs:{label:"排序值",prop:"sort"}},[a("el-input-number",{staticStyle:{width:"120px"},attrs:{"controls-position":"right",min:0,max:255},model:{value:t.form.sort,callback:function(e){t.$set(t.form,"sort",e)},expression:"form.sort"}})],1),a("el-form-item",{attrs:{label:"状态",prop:"status"}},[a("el-switch",{attrs:{"active-value":"1","inactive-value":"0"},model:{value:t.form.status,callback:function(e){t.$set(t.form,"status",e)},expression:"form.status"}})],1)],1),a("div",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[a("el-button",{attrs:{size:"small"},on:{click:function(e){t.dialogFormVisible=!1}}},[t._v("取消")]),"create"===t.dialogStatus?a("el-button",{attrs:{type:"primary",loading:t.dialogLoading,size:"small"},on:{click:t.create}},[t._v("确定")]):a("el-button",{attrs:{type:"primary",loading:t.dialogLoading,size:"small"},on:{click:t.update}},[t._v("修改")])],1)],1)],1)},n=[],s=(a("4160"),a("c975"),a("d3b7"),a("25f0"),a("159b"),a("5530")),o=a("aed4"),r=a("ca00"),l={props:{loading:{default:!1},tableData:{default:function(){return[]}}},data:function(){return{currentTableData:[],multipleSelection:[],auth:{add:!1,set:!1,del:!1,sort:!1,enable:!1,disable:!1},dialogLoading:!1,dialogFormVisible:!1,dialogStatus:"",textMap:{update:"编辑客服",create:"新增客服"},statusMap:{0:{text:"禁用",type:"danger"},1:{text:"启用",type:"success"},2:{text:"...",type:"info"}},form:{nick_name:void 0,type_name:void 0,code:void 0,sort:void 0,status:void 0},rules:{nick_name:[{required:!0,message:"昵称不能为空",trigger:"blur"},{max:50,message:"长度不能大于 50 个字符",trigger:"blur"}],type_name:[{required:!0,message:"组名称不能为空",trigger:"blur"},{max:50,message:"长度不能大于 50 个字符",trigger:"blur"}],code:[{required:!0,message:"联系方式不能为空",trigger:"blur"},{max:150,message:"长度不能大于 150 个字符",trigger:"blur"}],sort:[{type:"number",message:"必须为数字值",trigger:"blur"}],status:[{type:"enum",enum:["0","1"],message:"值的范围必须为 0 或 1",trigger:"change"}]}}},watch:{tableData:{handler:function(t){this.currentTableData=t},immediate:!0}},mounted:function(){this._validationAuth()},methods:{_getIdList:function(t){null===t&&(t=this.multipleSelection);var e=[];return Array.isArray(t)?t.forEach((function(t){e.push(t.support_id)})):e.push(this.currentTableData[t].support_id),e},_validationAuth:function(){this.auth.add=this.$permission("/system/aided/support/add"),this.auth.set=this.$permission("/system/aided/support/set"),this.auth.del=this.$permission("/system/aided/support/del"),this.auth.sort=this.$permission("/system/aided/support/sort"),this.auth.enable=this.$permission("/system/aided/support/enable"),this.auth.disable=this.$permission("/system/aided/support/disable")},handleSelectionChange:function(t){this.multipleSelection=t},sortChange:function(t){var e=t.column,a=t.prop,i=t.order,n={order_type:void 0,order_field:void 0};e&&i&&(n.order_type="ascending"===i?"asc":"desc",n.order_field=a),this.$emit("sort",n)},handleCreate:function(){var t=this;this.form={nick_name:void 0,type_name:void 0,code:void 0,sort:50,status:"1"},this.$nextTick((function(){t.$refs.form&&t.$refs.form.clearValidate(),t.dialogStatus="create",t.dialogLoading=!1,t.dialogFormVisible=!0}))},create:function(){var t=this;this.$refs.form.validate((function(e){e&&(t.dialogLoading=!0,Object(o["a"])(t.form).then((function(e){t.currentTableData.unshift(e.data),t.dialogFormVisible=!1,t.$message.success("操作成功")})).catch((function(){t.dialogLoading=!1})))}))},handleStatus:function(t){var e=this,a=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0,i=arguments.length>2&&void 0!==arguments[2]&&arguments[2],n=this._getIdList(t);if(0!==n.length){if(!i){var r=this.currentTableData[t],l=r.status?0:1;if(r.status>1)return;if(0===l&&!this.auth.disable)return;if(1===l&&!this.auth.enable)return;return this.$set(this.currentTableData,t,Object(s["a"])(Object(s["a"])({},r),{},{status:2})),void u(n,l,this)}this.$confirm("确定要执行该操作吗?","提示",{confirmButtonText:"确定",cancelButtonText:"取消",type:"warning",closeOnClickModal:!1}).then((function(){u(n,a,e)})).catch((function(){}))}else this.$message.error("请选择要操作的数据");function u(t,e,a){Object(o["f"])(t,e).then((function(){a.currentTableData.forEach((function(i,n){-1!==t.indexOf(i.support_id)&&a.$set(a.currentTableData,n,Object(s["a"])(Object(s["a"])({},i),{},{status:e}))})),a.$message.success("操作成功")}))}},handleDelete:function(t){var e=this,a=this._getIdList(t);0!==a.length?this.$confirm("确定要执行该操作吗?","提示",{confirmButtonText:"确定",cancelButtonText:"取消",type:"warning",closeOnClickModal:!1}).then((function(){Object(o["b"])(a).then((function(){r["a"].deleteDataList(e.currentTableData,a,"support_id"),e.$message.success("操作成功")}))})).catch((function(){})):this.$message.error("请选择要操作的数据")},handleSort:function(t){Object(o["e"])(this.currentTableData[t].support_id,this.currentTableData[t].sort)},handleUpdate:function(t){var e=this;this.currentIndex=t;var a=this.currentTableData[t];this.form=Object(s["a"])(Object(s["a"])({},a),{},{status:a.status.toString()}),this.$nextTick((function(){e.$refs.form&&e.$refs.form.clearValidate(),e.dialogStatus="update",e.dialogLoading=!1,e.dialogFormVisible=!0}))},update:function(){var t=this;this.$refs.form.validate((function(e){e&&(t.dialogLoading=!0,Object(o["d"])(t.form).then((function(e){t.$set(t.currentTableData,t.currentIndex,Object(s["a"])(Object(s["a"])({},t.currentTableData[t.currentIndex]),e.data)),t.dialogFormVisible=!1,t.$message.success("操作成功")})).catch((function(){t.dialogLoading=!1})))}))}}},u=l,c=a("2877"),d=Object(c["a"])(u,i,n,!1,null,null,null);e["default"]=d.exports}}]);