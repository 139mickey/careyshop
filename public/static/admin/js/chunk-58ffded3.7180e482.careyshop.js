(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-58ffded3"],{"0460":function(t,i,e){"use strict";e.r(i);var s=function(){var t=this,i=t.$createElement,e=t._self._c||i;return e("div",{staticClass:"magnify"},[e("div",{staticClass:"left-contaner"},[e("div",{class:{"middle-img":!0,"video-bg":t.isVideoPlay},style:{width:t.width+"px",height:t.height+"px"},on:{mouseover:function(i){return i.preventDefault(),i.stopPropagation(),t.boxMouseOver(i)},mouseleave:t.boxMouseLeave}},[t.isVideoEmpty||t.isVideoPlay?t._e():e("i",{staticClass:"el-icon-video-play video-button play",on:{click:function(i){t.isVideoPlay=!0}}}),t.isVideoPlay?[e("i",{staticClass:"el-icon-circle-close video-button stop",on:{mouseover:function(i){return i.preventDefault(),i.stopPropagation(),t.shadeMouseMove(i)},click:function(i){t.isVideoPlay=!1}}}),e("cs-video",{staticClass:"video-box",attrs:{"aspect-ratio":"1:1","video-data":t.video,autoplay:!0}})]:t._e(),e("img",{directives:[{name:"show",rawName:"v-show",value:!t.isVideoPlay,expression:"!isVideoPlay"}],style:{width:"auto",height:"auto","max-width":t.width-2+"px","max-height":t.height-2+"px"},attrs:{alt:"",src:t._f("getPreviewUrl")(t.currentImage,"goods_image_x480")}}),e("div",{directives:[{name:"show",rawName:"v-show",value:t.isShade,expression:"isShade"}],class:{shade:t.shade,"video-play":t.isVideoPlay},style:t.shadeSize,on:{mouseover:function(t){t.preventDefault(),t.stopPropagation()},mousemove:function(i){return i.preventDefault(),i.stopPropagation(),t.shadeMouseMove(i)}}})],2),e("div",{staticClass:"carousel",style:{width:t.width+"px",height:t.thumbHeight+"px"}},[e("i",{staticClass:"el-icon-arrow-left arrow",on:{click:function(i){return t.clickPage("left")}}}),e("div",{staticClass:"show-box"},[e("ul",{staticClass:"picture-container",style:{left:t.middleLeft+"px",width:t.middleWidth+"px"}},t._l(t.imageList,(function(i,s){return e("li",{key:s,staticClass:"picture-item",class:{selected:t.currentIndex===s},style:{width:t.thumbWidth+"px",height:t.thumbHeight+"px",margin:"0 "+t.itemMargin/2+"px"}},[e("img",{style:{width:"auto",height:"auto","max-width":t.thumbWidth-4+"px","max-height":t.thumbHeight-4+"px"},attrs:{alt:"",src:t._f("getPreviewUrl")(i,"goods_image_x80")},on:{mouseover:function(i){return t.tabPicture(s)}}})])})),0)]),e("i",{staticClass:"el-icon-arrow-right arrow",on:{click:function(i){return t.clickPage("right")}}})])]),e("div",{directives:[{name:"show",rawName:"v-show",value:!t.isVideoPlay&&t.isBig,expression:"!isVideoPlay && isBig"}],staticClass:"right-contanier",style:t.rightContanier},[e("img",{staticClass:"big-img",style:t.bigImageSize,attrs:{src:t._f("getPreviewUrl")(t.currentImage,"goods_image_x800"),alt:""}})])])},a=[],h=(e("99af"),e("a9e3"),e("d3b7"),e("2909")),o=e("ca00"),n=e("60bb"),r={components:{csVideo:function(){return e.e("chunk-01cfa9e1").then(e.bind(null,"476d"))}},props:{image:{type:Array,required:!1,default:function(){return[]}},video:{type:[Object,Array],required:!1,default:function(){}},width:{type:Number,default:460},height:{type:Number,default:460},thumbWidth:{type:Number,default:60},thumbHeight:{type:Number,default:60},zoom:{type:Number,default:1.48},pageSize:{type:Number,default:5}},data:function(){return{imgObj:{},imageList:[],middleLeft:0,currentImage:{},currentIndex:void 0,isVideoPlay:!1,isShade:!1,isBig:!1,shade:{width:this.width/this.zoom,height:this.height/this.zoom,left:0,top:0},bigImage:{left:0,top:0}}},filters:{getPreviewUrl:function(t,i){return t&&(t.source||t)?o["a"].getImageCodeUrl(t.source||t,i):""}},watch:{image:{handler:function(t){this.imageList=Object(h["a"])(t),this.resetData()},immediate:!0}},computed:{boxHeight:function(){return this.height+this.thumbHeight+20},itemMargin:function(){return(this.width-this.thumbWidth*this.pageSize-51)/this.pageSize},middleWidth:function(){return(this.thumbWidth+this.itemMargin)*this.imageList.length},isVideoEmpty:function(){return Object(n["isEmpty"])(this.video)},shadeSize:function(){return{width:"".concat(this.shade.width,"px"),height:"".concat(this.shade.height,"px"),left:"".concat(this.shade.left,"px"),top:"".concat(this.shade.top,"px")}},rightContanier:function(){return{width:"".concat(this.boxHeight,"px"),height:"".concat(this.boxHeight,"px"),left:"".concat(this.width,"px")}},bigImageSize:function(){return{width:"".concat(this.boxHeight*this.zoom,"px"),height:"".concat(this.boxHeight*this.zoom,"px"),left:"".concat(this.bigImage.left,"px"),top:"".concat(this.bigImage.top,"px")}}},methods:{resetData:function(){this.middleLeft=0,this.isShade=!1,this.isBig=!1,this.isVideoPlay=!1,this.currentIndex=void 0,this.currentImage=this.imageList[0]},updateImage:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[];this.imageList=t.length?t.concat(this.image):Object(h["a"])(this.image),this.resetData()},tabPicture:Object(n["debounce"])((function(t){Object.prototype.hasOwnProperty.call(this.imageList,t)&&(this.currentIndex=t,this.currentImage=this.imageList[t])}),100),clickPage:function(t){var i=this.width-51;if("right"===t){var e=-(this.thumbWidth+this.itemMargin)*this.imageList.length;-i+this.middleLeft>e&&(this.middleLeft-=i)}"left"===t&&this.middleLeft<0&&(this.middleLeft+=i)},handMove:function(t){if(!Object(n["isEmpty"])(this.imgObj)){var i=this.imgObj.getBoundingClientRect(),e=t.clientX-i.left,s=t.clientY-i.top;e-=this.shade.width/2,s-=this.shade.height/2;var a=this.width-this.shade.width,h=this.height-this.shade.height;e=e<=0?0:e,e=e>=a?a:e,s=s<=0?0:s,s=s>=h?h:s,this.shade.left=e,this.shade.top=s}},boxMouseOver:function(t){Object(n["isEmpty"])(this.imgObj)&&(this.imgObj=this.$el.getElementsByClassName("middle-img")[0]),this.isShade=!0,this.isBig=!0,this.handMove(t)},boxMouseLeave:function(){this.isShade=!1,this.isBig=!1},shadeMouseMove:function(t){this.handMove(t);var i=this.boxHeight*this.zoom/this.width,e=this.boxHeight*this.zoom/this.height;this.bigImage.left=-this.shade.left*i,this.bigImage.top=-this.shade.top*e}}},d=r,c=(e("efc5"),e("2877")),u=Object(c["a"])(d,s,a,!1,null,"3dcf68c1",null);i["default"]=u.exports},e907:function(t,i,e){},efc5:function(t,i,e){"use strict";var s=e("e907"),a=e.n(s);a.a}}]);