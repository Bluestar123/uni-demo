(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/video/video"],{"21b1":function(t,e,n){"use strict";n("ffff");var o=u(n("b0ce")),i=u(n("32a7"));function u(t){return t&&t.__esModule?t:{default:t}}Page((0,o.default)(i.default))},"32a7":function(t,e,n){"use strict";n.r(e);var o=n("fd0c"),i=n("9576");for(var u in i)"default"!==u&&function(t){n.d(e,t,function(){return i[t]})}(u);n("d490");var c=n("2877"),a=Object(c["a"])(i["default"],o["a"],o["b"],!1,null,null,null);e["default"]=a.exports},"46cd":function(t,e,n){"use strict";(function(t){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var n={data:function(){return{videoSrc:"",videoContext:"",current:null,list:[{name:"111",play:!1,videoSrc:"https://dcloud-img.oss-cn-hangzhou.aliyuncs.com/guide/uniapp/%E7%AC%AC1%E8%AE%B2%EF%BC%88uni-app%E4%BA%A7%E5%93%81%E4%BB%8B%E7%BB%8D%EF%BC%89-%20DCloud%E5%AE%98%E6%96%B9%E8%A7%86%E9%A2%91%E6%95%99%E7%A8%8B@20181126.mp4"},{name:"2222",play:!1,videoSrc:"https://apd-e484c9b85ebe84803ffc381ccaf3d7f8.v.smtcdns.com/vlive.qqvideo.tc.qq.com/AQXlHeVd1mcRMXhjE0npSZmXF1p8LhzB1yqS_dot1-FI/uwMRJfz-r5jAYaQXGdGnC2_ppdhgmrDlPaRvaV7F2Ic/e08294a3zew.p712.1.mp4?sdtfrom=v1010&guid=c558841e486015b69ab76dc77f422204&vkey=889AEE93A639D2DFA6B39C1C91FA43EDFA7CBF867CDAED9F5A5E29967285A2342F1CAE06352D984152EBC6C9772C7673346ABA7ECB4D050D3271788CA6E0F6F6638B8A0DB71E78E4345A666D3BF0D9E41CFD62C68622A6A70758C11E179AEF070D0ECECA5E27A0EE348A5066912D577C3D270EAE7FF90988"},{name:"3333",play:!1,videoSrc:"https://apd-1a7b5a45f459f7903e8e0fd5141e90e7.v.smtcdns.com/vlive.qqvideo.tc.qq.com/ABr62S_FYzcbOCVqoe4_UEE4CZCikJaQOYYHLTKQVpxo/uwMRJfz-r5jAYaQXGdGnC2_ppdhgmrDlPaRvaV7F2Ic/q0764o1o201.p712.1.mp4?sdtfrom=v1010&guid=c558841e486015b69ab76dc77f422204&vkey=ABB0FEE4FFD4D3134DF39F9BA322822D3091511896C353DDFFE1186F1EA27C4BDC2AFE4E155BA63DA2BE067C9239860DFAB88D0A524D334273A33B8679E3BA9CCBBA0A42E96A6F50CE3E1D954A3D7E44E6FBC2861F0DEB729D3E77FF509E29C1158C9B7399ECDB22843A32DF1DAED89626C851D56CB5C4F9"},{name:"44444",play:!1,videoSrc:"https://dcloud-img.oss-cn-hangzhou.aliyuncs.com/guide/uniapp/%E7%AC%AC1%E8%AE%B2%EF%BC%88uni-app%E4%BA%A7%E5%93%81%E4%BB%8B%E7%BB%8D%EF%BC%89-%20DCloud%E5%AE%98%E6%96%B9%E8%A7%86%E9%A2%91%E6%95%99%E7%A8%8B@20181126.mp4"}]}},onReady:function(){},onShow:function(){console.log(0xbd7a625405555)},methods:{toParse:function(){t.navigateTo({url:"../parse/parse"})},play_and_pause:function(t,e){var n=this;console.log(this.current),null==this.current?(this.videoSrc=t.videoSrc,this.videoContext.play(),this.current=e,t.play=!0):this.current==e?(t.play=!1,this.current=null,this.videoContext.pause()):(this.list[this.current].play=!1,this.videoContext.pause(),this.videoContext.seek=0,t.play=!0,this.videoSrc=t.videoSrc,setTimeout(function(){n.videoContext.play(),n.current=e},300))},play:function(){null==this.current&&(this.current=0),this.list[this.current].play=!0},pause:function(){null==this.current&&(this.current=0),this.list[this.current].play=!1}}};e.default=n}).call(this,n("6e42")["default"])},9576:function(t,e,n){"use strict";n.r(e);var o=n("46cd"),i=n.n(o);for(var u in o)"default"!==u&&function(t){n.d(e,t,function(){return o[t]})}(u);e["default"]=i.a},d490:function(t,e,n){"use strict";var o=n("f5fd"),i=n.n(o);i.a},f5fd:function(t,e,n){},fd0c:function(t,e,n){"use strict";var o=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("view",[n("button",{attrs:{type:"primary",eventid:"54ddc48c-0"},on:{tap:t.toParse}},[t._v("toParse")])],1)},i=[];n.d(e,"a",function(){return o}),n.d(e,"b",function(){return i})}},[["21b1","common/runtime","common/vendor"]]]);