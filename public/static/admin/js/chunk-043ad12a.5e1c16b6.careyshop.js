(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-043ad12a"],{3113:function(e,t,a){"use strict";a.r(t);var r=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"cs-p"},[a("el-card",{staticClass:"box-card",attrs:{shadow:"never"}},[a("div",{staticClass:"cs-tc clearfix",attrs:{slot:"header"},slot:"header"},[a("span",[e._v(e._s(e.stateMap[e.state]))])]),a("el-form",{ref:"form",attrs:{model:e.currentForm,rules:e.rules,"label-width":"80px"}},[a("el-form-item",{attrs:{label:"标题",prop:"title"}},[a("el-input",{attrs:{placeholder:"请输入专题标题",clearable:!0},model:{value:e.currentForm.title,callback:function(t){e.$set(e.currentForm,"title",t)},expression:"currentForm.title"}})],1),a("el-form-item",{attrs:{label:"别名",prop:"alias"}},[a("el-input",{attrs:{placeholder:"可输入专题别名",clearable:!0},model:{value:e.currentForm.alias,callback:function(t){e.$set(e.currentForm,"alias",t)},expression:"currentForm.alias"}})],1),a("el-form-item",{attrs:{label:"关键词",prop:"keywords"}},[a("el-input",{attrs:{placeholder:"可输入专题关键词",clearable:!0},model:{value:e.currentForm.keywords,callback:function(t){e.$set(e.currentForm,"keywords",t)},expression:"currentForm.keywords"}})],1),a("el-form-item",{attrs:{label:"描述",prop:"description"}},[a("el-input",{attrs:{placeholder:"可输入专题描述",type:"textarea",rows:3},model:{value:e.currentForm.description,callback:function(t){e.$set(e.currentForm,"description",t)},expression:"currentForm.description"}})],1),a("el-form-item",{attrs:{label:"内容",prop:"content"}},[a("cs-tinymce",{ref:"tinymce",attrs:{code:"inside_content"},model:{value:e.currentForm.content,callback:function(t){e.$set(e.currentForm,"content",t)},expression:"currentForm.content"}})],1),a("el-form-item",{attrs:{label:"状态",prop:"status"}},[a("el-switch",{attrs:{"active-value":"1","inactive-value":"0"},model:{value:e.currentForm.status,callback:function(t){e.$set(e.currentForm,"status",t)},expression:"currentForm.status"}})],1),a("el-form-item",{attrs:{size:"small"}},[a("el-button",{attrs:{type:"primary",loading:e.dialogLoading},on:{click:e.handleConfirm}},[e._v(e._s(e.stateButton[e.state]))]),a("el-button",{on:{click:e.handleClose}},[e._v("取消")])],1)],1)],1)],1)},n=[],s=(a("d3b7"),a("5530")),o=a("5880"),i=a("25c9"),c={components:{csTinymce:function(){return Promise.all([a.e("chunk-b993a81a"),a.e("chunk-56353b7a")]).then(a.bind(null,"4b93"))}},props:{state:{type:String,required:!0,default:"create"},formData:{type:Object,required:!1,default:function(){}}},data:function(){return{dialogLoading:!1,stateMap:{create:"新增专题",update:"编辑专题"},stateButton:{create:"确定",update:"修改"},currentForm:{title:"",alias:"",content:"",keywords:"",description:"",status:"1"},rules:{title:[{required:!0,message:"标题不能为空",trigger:"blur"},{max:200,message:"长度不能大于 200 个字符",trigger:"blur"}],alias:[{max:100,message:"长度不能大于 100 个字符",trigger:"blur"}],keywords:[{max:255,message:"长度不能大于 255 个字符",trigger:"blur"}],description:[{max:255,message:"长度不能大于 255 个字符",trigger:"blur"}],content:[{required:!0,message:"内容不能为空",trigger:"blur"}]}}},watch:{formData:{handler:function(e){var t=this;"update"===this.state&&(this.currentForm=e,this.$refs.tinymce&&(this.$refs.tinymce.destroyTinymce(),this.$refs.tinymce.initTinymce(),this.$refs.tinymce.setContent(e.content)),this.$nextTick((function(){t.$refs.form.clearValidate()})))}}},methods:Object(s["a"])(Object(s["a"])(Object(s["a"])({},Object(o["mapActions"])("careyshop/page",["close"])),Object(o["mapActions"])("careyshop/update",["updateData"])),{},{handleClose:function(){this.close({tagName:this.$route.fullPath})},handleConfirm:function(){var e=this;this.$refs.form.validate((function(t){t&&(e.dialogLoading=!0,"create"===e.state?e.handleCreate():e.handleUpdate())}))},handleCreate:function(){var e=this;Object(i["a"])(this.currentForm).then((function(t){e.updateData({type:"add",name:"system-topic-admin",data:Object(s["a"])({},t.data)}),e.$message.success("操作成功"),e.handleClose()})).finally((function(){e.dialogLoading=!1}))},handleUpdate:function(){var e=this;Object(i["e"])(this.currentForm).then((function(t){e.updateData({type:"set",name:"system-topic-admin",srcId:t.data.topic_id,data:Object(s["a"])({},t.data)}),e.$message.success("操作成功"),e.handleClose()})).finally((function(){e.dialogLoading=!1}))}})},l=c,u=(a("e532"),a("2877")),d=Object(u["a"])(l,r,n,!1,null,"36afd38c",null);t["default"]=d.exports},b5db:function(e,t,a){},e532:function(e,t,a){"use strict";var r=a("b5db"),n=a.n(r);n.a}}]);