(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-ed207f60"],{1610:function(t,e,a){"use strict";a.d(e,"a",(function(){return r})),a.d(e,"g",(function(){return n})),a.d(e,"b",(function(){return d})),a.d(e,"i",(function(){return c})),a.d(e,"f",(function(){return u})),a.d(e,"e",(function(){return l})),a.d(e,"j",(function(){return m})),a.d(e,"h",(function(){return p})),a.d(e,"k",(function(){return f})),a.d(e,"c",(function(){return g})),a.d(e,"d",(function(){return _}));var o=a("5530"),i=a("bc07"),s="/v1/goods_attribute";function r(t){return Object(i["a"])({url:s,method:"post",data:Object(o["a"])({method:"add.goods.attribute.body.item"},t)})}function n(t){return Object(i["a"])({url:s,method:"post",data:Object(o["a"])({method:"set.goods.attribute.body.item"},t)})}function d(t){return Object(i["a"])({url:s,method:"post",data:Object(o["a"])({method:"add.goods.attribute.item"},t)})}function c(t){return Object(i["a"])({url:s,method:"post",data:Object(o["a"])({method:"set.goods.attribute.item"},t)})}function u(t){return Object(i["a"])({url:s,method:"post",data:Object(o["a"])({method:"get.goods.attribute.page"},t)})}function l(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0;return Object(i["a"])({url:s,method:"post",data:{method:"get.goods.attribute.list",goods_type_id:t,attribute_all:e}})}function m(t,e){return Object(i["a"])({url:s,method:"post",data:{method:"set.goods.attribute.key",goods_attribute_id:t,attr_index:e}})}function p(t,e){return Object(i["a"])({url:s,method:"post",data:{method:"set.goods.attribute.important",goods_attribute_id:t,is_important:e}})}function f(t,e){return Object(i["a"])({url:s,method:"post",data:{method:"set.goods.attribute.sort",goods_attribute_id:t,sort:e}})}function g(t){return Object(i["a"])({url:s,method:"post",data:{method:"del.goods.attribute.list",goods_attribute_id:t}})}function _(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0;return Object(i["a"])({url:s,method:"post",data:{method:"get.goods.attribute.data",goods_type_id:t,attribute_all:e}})}},"373f":function(t,e,a){},"59f7":function(t,e,a){"use strict";var o=a("373f"),i=a.n(o);i.a},"81d5":function(t,e,a){"use strict";var o=a("7b0b"),i=a("23cb"),s=a("50c4");t.exports=function(t){var e=o(this),a=s(e.length),r=arguments.length,n=i(r>1?arguments[1]:void 0,a),d=r>2?arguments[2]:void 0,c=void 0===d?a:i(d,a);while(c>n)e[n++]=t;return e}},a2a9:function(t,e,a){"use strict";a.d(e,"a",(function(){return r})),a.d(e,"l",(function(){return n})),a.d(e,"g",(function(){return d})),a.d(e,"c",(function(){return c})),a.d(e,"h",(function(){return u})),a.d(e,"p",(function(){return l})),a.d(e,"o",(function(){return m})),a.d(e,"n",(function(){return p})),a.d(e,"q",(function(){return f})),a.d(e,"f",(function(){return g})),a.d(e,"j",(function(){return _})),a.d(e,"d",(function(){return b})),a.d(e,"m",(function(){return h})),a.d(e,"b",(function(){return v})),a.d(e,"e",(function(){return C})),a.d(e,"i",(function(){return O})),a.d(e,"k",(function(){return j}));var o=a("5530"),i=a("bc07"),s="/v1/goods";function r(t){return Object(i["a"])({url:s,method:"post",data:Object(o["a"])({method:"add.goods.item"},t)})}function n(t){return Object(i["a"])({url:s,method:"post",data:Object(o["a"])({method:"set.goods.item"},t)})}function d(t){return Object(i["a"])({url:s,method:"post",data:{method:"get.goods.item",goods_id:t}})}function c(t,e){return Object(i["a"])({url:s,method:"post",data:{method:"del.goods.list",goods_id:t,is_delete:e}})}function u(t){return Object(i["a"])({url:s,method:"post",data:{method:"get.goods.select",goods_id:t}})}function l(t,e){return Object(i["a"])({url:s,method:"post",data:{method:"set.recommend.goods.list",goods_id:t,is_recommend:e}})}function m(t,e){return Object(i["a"])({url:s,method:"post",data:{method:"set.new.goods.list",goods_id:t,is_new:e}})}function p(t,e){return Object(i["a"])({url:s,method:"post",data:{method:"set.hot.goods.list",goods_id:t,is_hot:e}})}function f(t,e){return Object(i["a"])({url:s,method:"post",data:{method:"set.shelves.goods.list",goods_id:t,status:e}})}function g(t){return Object(i["a"])({url:s,method:"post",data:{method:"get.goods.attr.list",goods_id:t}})}function _(t){return Object(i["a"])({url:s,method:"post",data:{method:"get.goods.spec.list",goods_id:t}})}function b(t){return Object(i["a"])({url:s,method:"post",data:Object(o["a"])({method:"get.goods.admin.list"},t)})}function h(t,e){return Object(i["a"])({url:s,method:"post",data:{method:"set.goods.sort",goods_id:t,sort:e}})}function v(t){return Object(i["a"])({url:s,method:"post",data:{method:"copy.goods.item",goods_id:t}})}function C(t){return Object(i["a"])({url:s,method:"post",data:{method:"get.goods.attr.config",goods_id:t}})}function O(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0;return Object(i["a"])({url:s,method:"post",data:{method:"get.goods.spec.config",goods_id:t,key_to_array:e}})}function j(t){return Object(i["a"])({url:s,method:"post",data:{method:"get.goods.spec.menu",goods_id:t}})}},aff5:function(t,e,a){var o=a("23e7");o({target:"Number",stat:!0},{MAX_SAFE_INTEGER:9007199254740991})},cb29:function(t,e,a){var o=a("23e7"),i=a("81d5"),s=a("44d2");o({target:"Array",proto:!0},{fill:i}),s("fill")},e044:function(t,e,a){"use strict";a.r(e);var o=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("cs-container",{attrs:{"is-back":t.isBack}},[a("div",{staticClass:"cs-p"},[a("el-card",{staticClass:"box-card",attrs:{shadow:"never"}},[a("div",{staticClass:"clearfix",attrs:{slot:"header"},slot:"header"},[a("div",{staticClass:"gallery"},[a("page-media",{ref:"goodsMedia",attrs:{image:t.goodsData.attachment,video:t.goodsData.video}})],1),a("div",{staticClass:"itemInfo"},[a("div",{staticClass:"goods-name cs-pb-5"},[a("b",[t._v(t._s(t.goodsData.name))])]),a("div",{staticClass:"product-name"},[a("span",[t._v(t._s(t.goodsData.product_name))])]),a("div",{staticClass:"summary-first"},[a("div",{staticClass:"summary-price-wrap cs-pt-10"},[a("div",{staticClass:"summary-price"},[a("div",{staticClass:"dt"},[t._v("市场价")]),a("div",{staticClass:"dd"},[a("span",{staticStyle:{"text-decoration":"line-through"}},[a("span",[t._v("￥")]),a("span",[t._v(t._s(t._f("getNumber")(t.goodsData.market_price)))])])])]),a("div",{staticClass:"summary-price"},[a("div",{staticClass:"dt",staticStyle:{"line-height":"28px"}},[t._v("本店价")]),a("div",{staticClass:"dd"},[a("span",{staticClass:"price"},[a("span",[t._v("￥")]),a("span",{staticStyle:{"font-size":"22px"}},[a("b",[t._v(t._s(t.currentPrice))])])])])]),a("div",{staticClass:"summary-price price-bg"},[a("div",{staticClass:"dt"},[t._v("总库存")]),a("div",{staticClass:"dd"},[a("span",[t._v(t._s(t.currentStore))])])]),a("div",{staticClass:"summary-info"},[a("div",{staticClass:"content"},[a("p",[t._v("评价数")]),a("span",[t._v(t._s(t.goodsData.comment_sum))])]),a("div",{staticClass:"content"},[a("p",[t._v("累计销量")]),a("span",[t._v(t._s(t.goodsData.sales_sum))])])])])]),t._l(t.specConfig,(function(e,o){return a("div",{key:o,staticClass:"cs-pt-5"},[a("div",{staticStyle:{display:"inline-block"}},[a("div",{staticClass:"dt"},[t._v(t._s(e.name))]),a("div",{staticClass:"dd"},t._l(e.spec_item,(function(i,s){return a("div",{key:s,staticClass:"goods-spec",class:{active:e.active===i.spec_item_id,disabled:i.disabled},on:{click:function(e){return t.selectSpec(o,s)}}},[i.color?[a("span",{staticClass:"item-info",style:{"background-color":i.color}})]:t._e(),i.image.length?[a("el-image",{staticClass:"item-info",attrs:{src:t._f("getPreviewUrl")(i.image[0]["source"],36,36),fit:"contain"}})]:t._e(),a("span",{staticClass:"item-name"},[t._v(t._s(i.item_name))])],2)})),0)])])}))],2)]),a("el-tabs",{model:{value:t.activeName,callback:function(e){t.activeName=e},expression:"activeName"}},[a("el-tab-pane",{attrs:{label:"详情描述",name:"content"}},[t.attrImportant.length?a("div",{staticClass:"parameter cs-mb-15"},[a("ul",{staticClass:"parameter-list"},t._l(t.attrImportant,(function(e,o){return a("li",{key:o,attrs:{title:e.attr_value}},[a("span",[t._v(t._s(e.attr_name+"："+e.attr_value))])])})),0),a("p",{staticClass:"more-par cs-pr",staticStyle:{margin:"0"}},[a("el-button",{attrs:{type:"text",size:"mini"},on:{click:function(e){t.activeName="attr"}}},[t._v("详细参数 >>")])],1)]):t._e(),a("div",{staticClass:"mce-content-body",domProps:{innerHTML:t._s(t.goodsData.content)}})]),a("el-tab-pane",{attrs:{label:"商品属性",name:"attr"}},[a("el-table",{attrs:{data:t.attrConfig,"row-key":"goods_attribute_id","tree-props":{children:"get_attribute"},"show-header":!1,"default-expand-all":""}},[a("el-table-column",{attrs:{prop:"attr_name",width:"160","show-overflow-tooltip":""},scopedSlots:t._u([{key:"default",fn:function(e){return[a("span",{class:{"attr-label":!e.row.is_parent}},[t._v(t._s(e.row.attr_name))])]}}])}),a("el-table-column",{attrs:{align:"center",width:"35"},scopedSlots:t._u([{key:"default",fn:function(e){return[e.row.description?a("el-tooltip",{attrs:{content:e.row.description,placement:"top"}},[a("i",{staticClass:"el-icon-warning-outline"})]):t._e()]}}])}),a("el-table-column",{attrs:{prop:"attr_value"}})],1)],1)],1)],1)],1)])},i=[],s=(a("a4d3"),a("e01a"),a("99af"),a("cb29"),a("4160"),a("c975"),a("a15b"),a("a9e3"),a("aff5"),a("d3b7"),a("ac1f"),a("25f0"),a("3ca3"),a("1276"),a("159b"),a("ddb0"),a("b85c")),r=a("ca00"),n=a("60bb"),d=a("1610"),c=a("a2a9"),u={props:{goods_id:{type:[String,Number],required:!0},isBack:{type:Boolean,required:!1,default:!0}},data:function(){return{activeName:"content",currentPrice:0,rangePrice:"",currentStore:0,goodsData:{},attrConfig:[],attrImportant:[],specCombo:{},specConfig:[]}},filters:{getNumber:function(t){return r["a"].getNumber(t)},getPreviewUrl:function(t,e,a){return r["a"].getImageStyleUrl(t,"&size[]=".concat(e,"&size[]=").concat(a))}},watch:{goods_id:{handler:function(){this.getGoodsData()},immediate:!0}},components:{PageMedia:function(){return a.e("chunk-58ffded3").then(a.bind(null,"0460"))}},methods:{resetGoodsData:function(){this.activeName="content",this.currentPrice=0,this.rangePrice="",this.currentStore=0,this.goodsData={},this.attrConfig=[],this.attrImportant=[],this.specCombo={},this.specConfig=[]},getGoodsOtherInfo:function(){var t=this;Promise.all([Object(c["k"])(this.goods_id),Object(c["f"])(this.goods_id),Object(d["d"])(this.goodsData.goods_type_id,1)]).then((function(e){if(t.specCombo=e[0].data?e[0].data.spec_combo:{},t.specConfig=e[0].data?e[0].data.spec_config:[],1===Object(n["size"])(t.specConfig)&&t.specConfig[0].spec_item.forEach((function(e){var a=t.specCombo[e.spec_item_id];(!a||a.store_qty<=0)&&(e.disabled=!0)})),Object(n["size"])(t.specCombo)>0){var a=Number.MAX_SAFE_INTEGER,o=0;for(var i in t.specCombo)Object.prototype.hasOwnProperty.call(t.specCombo,i)&&(a=Math.min(a,t.specCombo[i].price),o=Math.max(o,t.specCombo[i].price));a=r["a"].getNumber(a),o=r["a"].getNumber(o),t.rangePrice="".concat(a," - ").concat(o),t.currentPrice=t.rangePrice}var d,c={},u=Object(s["a"])(e[1].data||[]);try{for(u.s();!(d=u.n()).done;){var l=d.value;if(l.attr_value){if(void 0===c[l.parent_id]){var m=e[2].data[l.parent_id];if(!m)continue;var p=t.attrConfig.push({goods_attribute_id:m.goods_attribute_id,attr_name:m.attr_name,is_parent:!0,get_attribute:[]});c[l.parent_id]=p-1}var f=e[2].data[l.goods_attribute_id];1===f.is_important&&t.attrImportant.push({goods_attribute_id:f.goods_attribute_id,attr_name:f.attr_name,attr_value:l.attr_value}),t.attrConfig[c[l.parent_id]].get_attribute.push({goods_attribute_id:f.goods_attribute_id,description:f.description,attr_name:f.attr_name,attr_value:l.attr_value})}}}catch(g){u.e(g)}finally{u.f()}}))},getGoodsData:function(){var t=this;this.resetGoodsData(),Object(c["g"])(this.goods_id).then((function(e){t.goodsData=e.data||{},t.currentPrice=r["a"].getNumber(t.goodsData.shop_price),t.currentStore=t.goodsData.store_qty,t.getGoodsOtherInfo()}))},selectSpec:function(t,e){var a=this,o=this.specConfig[t],i=this.specConfig[t].spec_item[e];if(!i.disabled){var d=new Array(this.specConfig.length).fill(0),c=o.active!==i.spec_item_id?i.spec_item_id:0;if(this.$set(o,"active",c),this.specConfig.forEach((function(t,e){t.active&&(d[e]=t.active.toString())})),i.image.length>0&&this.$nextTick((function(){a.$refs.goodsMedia.updateImage(c?i.image:[])})),this.specConfig.length>1){var u=[];for(var l in d)if(Object.prototype.hasOwnProperty.call(d,l)&&d[l]){var m=[],p=[];for(var f in this.specCombo){var g=f.split("_");g[l]===d[l]&&(this.specCombo[f].store_qty>0?p=p.concat(g):m=m.concat(g))}m.length&&(u=u.concat(Object(n["difference"])(m,p)))}u=Object(n["uniq"])(u),this.specConfig.forEach((function(t){var e,a=Object(s["a"])(t.spec_item);try{for(a.s();!(e=a.n()).done;){var o=e.value;t.active!==o.spec_item_id?-1!==u.indexOf(o.spec_item_id.toString())?o.disabled=!0:o.disabled=!1:o.disabled=!1}}catch(i){a.e(i)}finally{a.f()}}))}var _=d.join("_");Object.prototype.hasOwnProperty.call(this.specCombo,_)?(this.currentStore=this.specCombo[_].store_qty,this.currentPrice=r["a"].getNumber(this.specCombo[_].price)):(this.currentStore=this.goodsData.store_qty,this.currentPrice=this.rangePrice)}}}},l=u,m=(a("59f7"),a("2877")),p=Object(m["a"])(l,o,i,!1,null,"73e9ff5d",null);e["default"]=p.exports}}]);