webpackJsonp([3],{829:function(e,t,n){function a(e){n(855)}var o=n(85)(n(841),n(870),a,"data-v-1e03d972",null);e.exports=o.exports},841:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default={data:function(){return{renderedMarkdown:""}},methods:{getReadme:function(){var e=this;this.$gitHubApi.getReadme(this).then(function(t){t.data&&(e.renderedMarkdown=e.$marked(t.data))})}},mounted:function(){var e=this;this.$nextTick(function(){e.getReadme()})}}},847:function(e,t,n){t=e.exports=n(826)(!1),t.push([e.i,".about-me[data-v-1e03d972]{width:calc(100% - 260px);-ms-flex-positive:1;flex-grow:1;padding:30px;overflow-y:auto}",""])},855:function(e,t,n){var a=n(847);"string"==typeof a&&(a=[[e.i,a,""]]),a.locals&&(e.exports=a.locals);n(827)("024f7c9c",a,!0,{})},870:function(e,t){e.exports={render:function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"about-me bga-back-top"},[n("article",{staticClass:"markdown-body",domProps:{innerHTML:e._s(e.renderedMarkdown)}})])},staticRenderFns:[]}}});