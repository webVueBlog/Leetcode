/**

使用一些移动端的 api 来判断是不是移动端。

let ua = navigator.userAgent;
// 移动端
isMobile: ("ontouchstart" in window || navigator.msMaxTouchPoints) ? true : false,
// 微信
isWechat: /micromessenger/gi.test(ua),
// qq
isQQ: /qq/gi.test(ua),
// VV音乐
isvvmusic: /vvmusic/gi.test(ua),
// 安卓
isAndroid: /android/gi.test(ua),
// iOS
isIOS: /iphone|ipad|ipod|itouch/gi.test(ua), // IOS



*/