(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-6fef3146"],{"028f":function(e,t,r){},"2edc":function(e,t,r){"use strict";r.d(t,"a",(function(){return s})),r.d(t,"h",(function(){return o})),r.d(t,"c",(function(){return l})),r.d(t,"d",(function(){return c})),r.d(t,"e",(function(){return u})),r.d(t,"g",(function(){return d})),r.d(t,"f",(function(){return m})),r.d(t,"b",(function(){return v}));var i=r("5530"),n=r("bc07"),a="/v1/delivery_item";function s(e){return Object(n["a"])({url:a,method:"post",data:Object(i["a"])({method:"add.delivery.company.item"},e)})}function o(e){return Object(n["a"])({url:a,method:"post",data:Object(i["a"])({method:"set.delivery.company.item"},e)})}function l(e){return Object(n["a"])({url:a,method:"post",data:{method:"del.delivery.company.list",delivery_item_id:e}})}function c(e){return Object(n["a"])({url:a,method:"post",data:{method:"get.delivery.company.item",delivery_item_id:e}})}function u(e){return Object(n["a"])({url:a,method:"post",data:Object(i["a"])({method:"get.delivery.company.list"},e)})}function d(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:null;return Object(n["a"])({url:a,method:"post",data:{method:"get.delivery.company.select",type:e}})}function m(e){return Object(n["a"])({url:a,method:"post",data:{method:"get.delivery.company.recognise",code:e}})}function v(e){return Object(n["a"])({url:a,method:"post",data:{method:"copy.delivery.company.hot",delivery_item_id:e}})}},4350:function(e,t,r){"use strict";r.r(t);var i=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"cs-p"},[r("el-tabs",{staticClass:"tab-box",on:{"tab-click":function(t){e.$emit("tabs",t.name)}},model:{value:e.tabPane,callback:function(t){e.tabPane=t},expression:"tabPane"}},e._l(e.statusMap,(function(t,i){return r("el-tab-pane",{key:i,attrs:{label:t,name:i}},[i===e.tabPane?r("el-table",{attrs:{data:e.currentTableData}},[r("el-table-column",{attrs:{label:"商品","min-width":"380"},scopedSlots:e._u([{key:"default",fn:function(t){return[r("div",{staticClass:"service-summary cs-mb-5"},[r("span",{staticClass:"cs-mr"},[e._v("售后单号："+e._s(t.row.service_no))]),r("span",[e._v("创建日期："+e._s(t.row.create_time))])]),r("div",{staticClass:"service-goods"},[r("el-image",{staticClass:"goods-image cs-cp",attrs:{src:e._f("getPreviewUrl")(t.row.get_order_goods.goods_image),fit:"contain",lazy:""},on:{click:function(r){return e.handleView(t.row.get_order_goods.goods_id)}}}),r("div",{staticClass:"goods-info service-text"},[r("p",[r("span",{staticClass:"link",on:{click:function(r){return e.handleView(t.row.get_order_goods.goods_id)}}},[e._v(e._s(t.row.get_order_goods.goods_name))]),r("span",{staticClass:"delivery cs-pl-5",style:{color:e.deliveryMap[t.row.get_order_goods.status].color}},[e._v(e._s(e.deliveryMap[t.row.get_order_goods.status].text))])]),r("p",{staticClass:"son"},[e._v(" 订单号："),r("span",{staticClass:"link",on:{click:function(r){return e.handleOrder(t.row.order_no)}}},[e._v(e._s(t.row.order_no))])]),t.row.get_order_goods.key_value?r("p",{staticClass:"son"},[e._v(e._s(t.row.get_order_goods.key_value))]):e._e(),r("p",{staticClass:"son"},[e._v(e._s(t.row.reason))])])],1)]}}],null,!0)}),r("el-table-column",{attrs:{label:"售后类型","min-width":"100"},scopedSlots:e._u([{key:"default",fn:function(t){return[r("div",{staticClass:"service-text"},[r("p",[e._v(e._s(e.typeMap[t.row.type]))]),t.row.goods_status?r("p",{staticClass:"son"},[e._v("收货状态："+e._s(e.goodsMap[t.row.goods_status]))]):e._e(),t.row.refund_fee?r("p",{staticClass:"son"},[e._v("申请金额："+e._s(e._f("getNumber")(t.row.refund_fee)))]):e._e(),t.row.qty?r("p",{staticClass:"son"},[e._v("申请数量："+e._s(t.row.qty))]):e._e()])]}}],null,!0)}),r("el-table-column",{attrs:{label:"买家"},scopedSlots:e._u([{key:"default",fn:function(t){return[r("div",{staticClass:"service-text"},[r("p",{staticStyle:{width:"130px"}},[r("span",{staticClass:"son"},[e._v(e._s(t.row.get_user.username))]),t.row.get_user.level_icon?r("el-image",{staticClass:"level-icon",attrs:{src:t.row.get_user.level_icon,fit:"fill"}},[r("div",{staticClass:"image-slot",attrs:{slot:"error"},slot:"error"},[r("i",{staticClass:"el-icon-picture-outline"})])]):e._e()],1),t.row.get_admin?r("p",[r("span",{staticClass:"son",style:e._getServiceColor(t.row.get_admin)},[e._v(e._s(e._f("getUserName")(t.row.get_admin)))])]):e._e(),t.row.is_return?r("p",[r("el-tooltip",{attrs:{placement:"top"}},[r("div",{attrs:{slot:"content"},slot:"content"},[e._v(" 快递单号："+e._s(t.row.logistic_code)),r("br"),r("br"),t.row.address?[e._v(" 姓名："+e._s(t.row.consignee)),r("br"),e._v(" 手机："+e._s(t.row.mobile)),r("br"),e._v(" 地址："+e._s(t.row.address)),r("br"),e._v(" 邮编："+e._s(t.row.zipcode)+" ")]:[e._v(" 买家尚未填写返件信息 ")]],2),r("el-link",{staticClass:"service-button",attrs:{type:"info",underline:!1},on:{click:function(r){return e.handleDist(t.row.service_no,t.row.logistic_code)}}},[e._v("返件地址")])],1)],1):e._e()])]}}],null,!0)}),r("el-table-column",{attrs:{label:"售后状态",align:"center"},scopedSlots:e._u([{key:"default",fn:function(t){return[r("div",{staticClass:"service-text"},[r("el-badge",{staticClass:"service-event",attrs:{hidden:!t.row.admin_event,"is-dot":""}},[r("p",{staticClass:"service-button"},[e._v(e._s(e.statusMap[t.row.status+1]))])]),t.row.result?r("p",[r("el-tooltip",{attrs:{content:t.row.result,placement:"top"}},[r("span",{staticClass:"son"},[e._v("处理结果")])])],1):e._e(),[2,3].includes(t.row.type)&&6===t.row.status&&e.auth.dist?r("p",[r("el-link",{staticClass:"service-button",attrs:{type:"info",underline:!1},on:{click:function(r){return e.handleDist(t.row.service_no,null,t.row.logistic_code)}}},[e._v("物流信息")])],1):e._e(),r("p",[r("el-link",{staticClass:"service-button",attrs:{type:"info",underline:!1},on:{click:function(r){return e.handleService(t.row.service_no)}}},[e._v("详情")])],1)],1)]}}],null,!0)}),r("el-table-column",{attrs:{label:"操作",align:"center"},scopedSlots:e._u([{key:"default",fn:function(t){return[r("div",{staticClass:"service-text"},[0===t.row.status&&e.auth.agree?r("p",[r("el-link",{staticClass:"service-button",attrs:{type:"primary",underline:!1},on:{click:function(r){return e.handleServiceAgree(t.$index)}}},[e._v("同意售后")])],1):e._e(),0===t.row.status&&e.auth.refused?r("p",[r("el-link",{staticClass:"service-button",attrs:{type:"danger",underline:!1},on:{click:function(r){return e.handleServiceRefused(t.$index)}}},[e._v("拒绝售后")])],1):e._e(),0!==t.row.type&&1===t.row.status&&!t.row.logistic_code&&e.auth.sendback?r("p",[r("el-link",{staticClass:"service-button",attrs:{type:"primary",underline:!1},on:{click:function(r){return e.handleServiceSendback(t.$index)}}},[e._v(e._s(t.row.is_return?"撤销寄回":"要求寄回"))])],1):e._e(),(0===t.row.type&&1===t.row.status||3===t.row.status)&&e.auth.after?r("p",[r("el-link",{staticClass:"service-button",attrs:{type:"primary",underline:!1},on:{click:function(r){return e.handleServiceAfter(t.$index)}}},[e._v("设为售后中")])],1):e._e(),[1,3,4].includes(t.row.status)&&e.auth.cancel?r("p",[r("el-link",{staticClass:"service-button",attrs:{type:"danger",underline:!1},on:{click:function(r){return e.handleServiceCancel(t.$index)}}},[e._v("撤销售后")])],1):e._e(),4===t.row.status&&e.auth.complete?r("p",[r("el-link",{staticClass:"service-button",attrs:{type:"success",underline:!1},on:{click:function(r){return e.setServiceComplete(t.$index)}}},[e._v("售后完成")])],1):e._e(),e.auth.remark?r("p",[r("el-tooltip",{attrs:{disabled:t.row.remark.length<=0,content:t.row.remark,placement:"left"}},[r("el-link",{staticClass:"service-button",attrs:{type:t.row.remark?"warning":"info",underline:!1},on:{click:function(r){return e.setServiceRemark(t.$index)}}},[e._v("备注")])],1)],1):e._e()])]}}],null,!0)})],1):e._e()],1)})),1),r("el-dialog",{attrs:{title:"卖家备注",visible:e.formRemark.visible,"append-to-body":!0,"close-on-click-modal":!1,width:"600px"},on:{"update:visible":function(t){return e.$set(e.formRemark,"visible",t)}}},[r("el-input",{attrs:{type:"textarea",rows:6,placeholder:"编辑卖家备注，仅卖家自己可见",maxlength:"255","show-word-limit":""},model:{value:e.formRemark.request.remark,callback:function(t){e.$set(e.formRemark.request,"remark",t)},expression:"formRemark.request.remark"}}),r("div",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[r("el-button",{attrs:{size:"small"},on:{click:function(t){e.formRemark.visible=!1}}},[e._v("取消")]),r("el-button",{attrs:{type:"primary",loading:e.formRemark.loading,size:"small"},on:{click:e.handleServiceRemark}},[e._v("确定")])],1)],1),r("el-dialog",{attrs:{title:"售后完成",visible:e.formComplete.visible,"append-to-body":!0,"close-on-click-modal":!1,width:"600px"},on:{"update:visible":function(t){return e.$set(e.formComplete,"visible",t)},open:e.handleOpenDelivery}},[r("el-form",{ref:"formComplete",attrs:{model:e.formComplete.request,rules:e.rules.complete,"label-width":"80px"}},[r("el-form-item",{attrs:{label:"处理结果",prop:"result"}},[r("el-input",{attrs:{placeholder:"可输入售后处理结果",clearable:!0},model:{value:e.formComplete.request.result,callback:function(t){e.$set(e.formComplete.request,"result",t)},expression:"formComplete.request.result"}})],1),[2,3].includes(e.formComplete.request.type)?r("el-form-item",{attrs:{label:"快递单号",prop:"logistic_code"}},[r("el-input",{staticClass:"input-with-select",attrs:{placeholder:"请输入售后完成后寄回商品的快递单号",clearable:!0},model:{value:e.formComplete.request.logistic_code,callback:function(t){e.$set(e.formComplete.request,"logistic_code",t)},expression:"formComplete.request.logistic_code"}},[r("el-select",{staticStyle:{width:"150px"},attrs:{slot:"prepend",placeholder:"请选择"},slot:"prepend",model:{value:e.formComplete.request.delivery_item_id,callback:function(t){e.$set(e.formComplete.request,"delivery_item_id",t)},expression:"formComplete.request.delivery_item_id"}},e._l(e.delivery,(function(e,t){return r("el-option",{key:t,attrs:{label:e.name,value:e.delivery_item_id}})})),1)],1)],1):e._e()],1),r("div",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[r("el-button",{attrs:{size:"small"},on:{click:function(t){e.formComplete.visible=!1}}},[e._v("取消")]),r("el-button",{attrs:{type:"primary",loading:e.formComplete.loading,size:"small"},on:{click:e.handleServiceComplete}},[e._v("确定")])],1)],1),r("cs-delivery-dist",{ref:"deliveryDist"})],1)},n=[],a=r("4e03"),s={mixins:[a["a"]],props:{loading:{default:!1},tableData:{default:function(){return[]}},typeMap:{default:function(){}}},data:function(){return{tabPane:0}},watch:{tableData:{handler:function(e){this.currentTableData=e},immediate:!0}},methods:{handleService:function(e){this.$router.push({name:"order-service-info",params:{service_no:e}})}}},o=s,l=(r("4950"),r("2877")),c=Object(l["a"])(o,i,n,!1,null,"1fc8a2bc",null);t["default"]=c.exports},4950:function(e,t,r){"use strict";var i=r("028f"),n=r.n(i);n.a},"4e03":function(e,t,r){"use strict";r("caad"),r("a434"),r("b0c0"),r("a9e3"),r("d3b7");var i=r("5530"),n=r("2680"),a=r("ca00"),s=r("2edc");t["a"]={components:{csDeliveryDist:function(){return r.e("chunk-561e7c04").then(r.bind(null,"3b44"))}},data:function(){return{currentTableData:[],auth:{message:!1,agree:!1,refused:!1,sendback:!1,after:!1,cancel:!1,complete:!1,remark:!1,dist:!1},delivery:[],statusMap:{0:"全部",1:"待处理",2:"已同意",3:"已拒绝",4:"已寄件",5:"售后中",6:"已撤销",7:"已完成"},deliveryMap:{0:{text:"待发货",color:"#303133"},1:{text:"已发货",color:"#67C23A"},2:{text:"已收货",color:"#67C23A"},3:{text:"已取消",color:"#F56C6C"}},goodsMap:{0:"未选择",1:"未收到货",2:"已收到货"},rules:{complete:{result:[{max:100,message:"长度不能大于 100 个字符",trigger:"blur"}],logistic_code:[{required:!0,message:"快递单号不能为空",trigger:"blur"},{max:50,message:"长度不能大于 50 个字符",trigger:"blur"}]}},formRemark:{index:void 0,loading:!1,visible:!1,request:{}},formComplete:{index:void 0,loading:!1,visible:!1,request:{}}}},filters:{getPreviewUrl:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"goods_image_x80";return e?a["a"].getImageCodeUrl(e,t):""},getNumber:function(e){return a["a"].getNumber(e)},getUserName:function(e){if(e.username)return e.username===a["a"].cookies.get("uuid")?"我的工单":"".concat(e.username," 的工单")}},mounted:function(){this._validationAuth()},methods:{_validationAuth:function(){this.auth.message=this.$permission("/order/service/list/message"),this.auth.agree=this.$permission("/order/service/list/agree"),this.auth.refused=this.$permission("/order/service/list/refused"),this.auth.sendback=this.$permission("/order/service/list/sendback"),this.auth.after=this.$permission("/order/service/list/after"),this.auth.cancel=this.$permission("/order/service/list/cancel"),this.auth.complete=this.$permission("/order/service/list/complete"),this.auth.remark=this.$permission("/order/service/list/remark"),this.auth.dist=this.$permission("/order/service/list/dist")},_getServiceColor:function(e){if(e&&e.username===a["a"].cookies.get("uuid"))return"color: #E6A23C;"},_whetherToConfirm:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:null,t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"warning",r={confirmButtonText:"确定",cancelButtonText:"取消",closeOnClickModal:!1,type:t},i=e||"确定要执行该操作吗?";return this.$confirm(i,"提示",r)},handleOpenDelivery:function(){var e=this;this.delivery.length||Object(s["g"])(0).then((function(t){e.delivery=t.data||[]}))},handleView:function(e){this.$router.push({name:"goods-admin-view",params:{goods_id:e}})},handleOrder:function(e){this.$router.push({name:"order-admin-info",params:{order_no:e}})},handleDist:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null,r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:[];this.$refs.deliveryDist&&("string"===typeof r&&(r=r?[r]:[]),this.$refs.deliveryDist.show(e,t,r))},setServiceRemark:function(e){var t=this.currentTableData[e];this.formRemark={index:e,loading:!1,visible:!0,request:{service_no:t.service_no,remark:t.remark}}},handleServiceRemark:function(){var e=this;this.formRemark.loading=!0;var t=this.formRemark.index;Object(n["i"])(this.formRemark.request).then((function(){e.currentTableData[t].remark=e.formRemark.request.remark,e.formRemark.visible=!1,e.$message.success("操作成功")})).catch((function(){e.formRemark.loading=!1}))},handleServiceAgree:function(e){var t=this;this._whetherToConfirm().then((function(){var r=t.currentTableData[e];Object(n["e"])(r.service_no).then((function(n){"order-service-info"!==t.$options.name?"0"===t.tabPane?t.$set(t.currentTableData,e,Object(i["a"])(Object(i["a"])(Object(i["a"])({},r),n.data),{},{admin_event:0,get_admin:{username:a["a"].cookies.get("uuid")}})):(t.currentTableData.splice(e,1),t.currentTableData.length<=0&&t.$emit("refresh",!0)):t.getServiceData()})).then((function(){t.$message.success("操作成功")}))})).catch((function(){}))},handleServiceRefused:function(e){var t=this;this.$prompt("请输入拒绝原因","提示",{confirmButtonText:"确定",cancelButtonText:"取消",inputPattern:/\S/,inputErrorMessage:"请输入拒绝原因"}).then((function(r){var s=r.value,o=t.currentTableData[e];Object(n["h"])(o.service_no,s).then((function(r){"order-service-info"!==t.$options.name?"0"===t.tabPane?t.$set(t.currentTableData,e,Object(i["a"])(Object(i["a"])(Object(i["a"])({},o),r.data),{},{admin_event:0,get_admin:{username:a["a"].cookies.get("uuid")}})):(t.currentTableData.splice(e,1),t.currentTableData.length<=0&&t.$emit("refresh",!0)):t.getServiceData()})).then((function(){t.$message.success("操作成功")}))})).catch((function(){}))},handleServiceSendback:function(e){var t=this;this._whetherToConfirm().then((function(){var r=t.currentTableData[e],a=Number(!r.is_return);Object(n["j"])(r.service_no,a).then((function(){"order-service-info"!==t.$options.name?t.$set(t.currentTableData,e,Object(i["a"])(Object(i["a"])({},r),{},{is_return:a,admin_event:0})):t.getServiceData()})).then((function(){t.$message.success("操作成功")}))})).catch((function(){}))},handleServiceAfter:function(e){var t=this;this._whetherToConfirm().then((function(){var r=t.currentTableData[e];Object(n["d"])(r.service_no).then((function(n){"order-service-info"!==t.$options.name?"0"===t.tabPane?t.$set(t.currentTableData,e,Object(i["a"])(Object(i["a"])(Object(i["a"])({},r),n.data),{},{admin_event:0})):(t.currentTableData.splice(e,1),t.currentTableData.length<=0&&t.$emit("refresh",!0)):t.getServiceData()})).then((function(){t.$message.success("操作成功")}))})).catch((function(){}))},handleServiceCancel:function(e){var t=this;this._whetherToConfirm().then((function(){var r=t.currentTableData[e];Object(n["f"])(r.service_no).then((function(n){"order-service-info"!==t.$options.name?"0"===t.tabPane?t.$set(t.currentTableData,e,Object(i["a"])(Object(i["a"])(Object(i["a"])({},r),n.data),{},{admin_event:0})):(t.currentTableData.splice(e,1),t.currentTableData.length<=0&&t.$emit("refresh",!0)):t.getServiceData()})).then((function(){t.$message.success("操作成功")}))})).catch((function(){}))},setServiceComplete:function(e){var t=this,r=this.currentTableData[e];this.formComplete={index:e,loading:!1,visible:!1,request:{type:r.type,service_no:r.service_no,delivery_item_id:void 0,logistic_code:void 0,result:void 0}},this.$nextTick((function(){t.$refs.formComplete&&t.$refs.formComplete.clearValidate(),t.formComplete.visible=!0}))},handleServiceComplete:function(){var e=this;this.$refs.formComplete.validate((function(t){if(t){var r=e.formComplete.request;if([2,3].includes(r.type)&&!r.delivery_item_id)return void e.$message.error("请选择快递公司");e.formComplete.loading=!0;var a=e.formComplete.index;Object(n["g"])(r).then((function(t){"order-service-info"!==e.$options.name?"0"===e.tabPane?e.$set(e.currentTableData,a,Object(i["a"])(Object(i["a"])(Object(i["a"])({},e.currentTableData[a]),t.data),{},{admin_event:0})):(e.currentTableData.splice(a,1),e.currentTableData.length<=0&&e.$emit("refresh",!0)):e.getServiceData(),e.formComplete.visible=!1,e.$message.success("操作成功")}))}}))}}}}}]);