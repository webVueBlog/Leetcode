/**
 * 1. HTML4 和 HTML5 区别
 * 新增了语义化标签（section, article, aside, header, footer, nav)
 * 新增 video, audio 标签，用来播放视频和音频
 * 废除了一些旧标签，比如<font> <big> <center> 等
 * 新增了<canvas>标签，用于绘制图形
 * 新增了localStorage,sessionStorage对象
 * 废除了 Web SQL Database, 新增 IndexedDB 索引数据库
 * 新增 WebSocket 全双工通讯协议
 * 新增了一些 input 的属性，比如 email, number, range, Date pickers等
 * 新增用户自定义属性(data-*);
 * 
 * 2. meta标签
 * <meta>标签提供关于HTML 文档的元数据
 * meta 标签不会显示在页面上，但是对于机器是可读的。它可以告诉机器如何解析这个页面。
 * 
 * meta标签属性，必选属性
 * 
 * content 属性是必须的
 * 这里并不是说meta标签一定要有content，而是当存在http-equiv或name属性时，一定要有content属性对其进行说明。例如：
 * 
 * <meta name="keywords" content="个人">
 * 
 * http-equiv属性，用于添加http头部内容
 * 比如我们可以用它来实现页面重定向。
 * <meta http-equiv="Refresh" content="3;url=http://www.xxx.com">
 * 
 * name属性，供浏览器进行解析使用
 * 
 * 常用meta标签总结。
 * 
 * charset
 * 
 * charset 是声明文档使用的字符编码，可以用来解决乱码问题。
 * 这个charset一定要写第一行，不然可能会产生乱码
 * 
 * charset有两种写法：
 *  <meta charset="utf-8">
 *  <meta http-equiv="Content-Type" content="text/html; charset=uft-8">
 * 
 * seo优化相关
 *  <meta name="keywords" content="your keywords">
 *  <meta name="description" content="your description">
 *  <meta name="author" content="author, email address">
 * 
 * viewport
 * viewport主要是影响移动端页面布局
 * <meta name="viewport" content="width=device-width, initial-scale=1.0">
 * 
 * content参数：
 * width: 视图态度，可以设置数值或者 device-width
 * height: 视图高度，可以设置数值或者 device-height
 * initial-scale: 初始缩放比例
 * maximum-scale: 最大缩放比例
 * minimum-scale: 最小缩放比例
 * user-scalable: 是否允许用户缩放；
 */


/**
 * 
<meta name="viewport" content="width=device-width, initial-scale=1, user-scalable=no" />
<meta name="apple-mobile-web-app-capable" content="yes" />
<meta name="apple-mobile-web-app-status-bar-style" content="black" />
<meta name="format-detection"content="telephone=no, email=no" />
<meta name="viewport" content="width=device-width, initial-scale=1, user-scalable=no" />
<meta name="apple-mobile-web-app-capable" content="yes" /><!-- 删除苹果默认的工具栏和菜单栏 -->
<meta name="apple-mobile-web-app-status-bar-style" content="black" /><!-- 设置苹果工具栏颜色 -->
<meta name="format-detection" content="telphone=no, email=no" /><!-- 忽略页面中的数字识别为电话，忽略email识别 -->
<!-- 启用360浏览器的极速模式(webkit) -->
<meta name="renderer" content="webkit">
<!-- 避免IE使用兼容模式 -->
<meta http-equiv="X-UA-Compatible" content="IE=edge">
<!-- 针对手持设备优化，主要是针对一些老的不识别viewport的浏览器，比如黑莓 -->
<meta name="HandheldFriendly" content="true">
<!-- 微软的老式浏览器 -->
<meta name="MobileOptimized" content="320">
<!-- uc强制竖屏 -->
<meta name="screen-orientation" content="portrait">
<!-- QQ强制竖屏 -->
<meta name="x5-orientation" content="portrait">
<!-- UC强制全屏 -->
<meta name="full-screen" content="yes">
<!-- QQ强制全屏 -->
<meta name="x5-fullscreen" content="true">
<!-- UC应用模式 -->
<meta name="browsermode" content="application">
<!-- QQ应用模式 -->
<meta name="x5-page-mode" content="app">
<!-- windows phone 点击无高光 -->
<meta name="msapplication-tap-highlight" content="no">
<!-- 适应移动端end -->
 */

/**
 * 3. data-* 属性
 * data-* 属性，自定义属性
 * 可以使用 element.dataset 获取此属性
 * 可以通过 getAttribute 方法获取属性值
 */

/**
 * 4. 事件相关
 * 
 * 绑定事件处理函数
 * Element.onclick = function() {}
 * // 兼容性好。但是一个元素的同一个事件只能绑定一个处理函数，第二个事件绑定会覆盖第一个。
 * <button onclick=""></button> // 直接在元素上直接绑定事件处理函数。
 * // 内联事件监听器（行内事件监听器）
 * // 如果第一种和第二种同时绑定，第一种绑定的处理函数会覆盖第二种。也叫事件覆盖。
 * 
 * Element.addEventListener();
 * 同一个元素同一个事件可以绑定多个事件处理函数，都会执行
 * 同一个元素同一个事件绑定多次同一个事件处理函数时，只会触发一次。
 * 
 * Element.attachEvent() // IE8及以下
 * // 同一个元素同一个事件可以绑定多个事件处理函数，都会执行。
 * // 同一个元素同一个事件邦迪ing多次同一个事件处理函数，会触发多次。
 */

/**
 * 事件捕获，事件冒泡
 * 
 * 事件冒泡，从DOM 结构来看，由最里层一层一层的把事件向外传递的现象，叫做冒泡现象。
 * 
 * 事件捕获，从DOM 结构来看，由最外层向最里层把事件向内传递的现象，叫做捕获现象。
 * 
 * 可以设置 addEventListener的第三个参数为 true，就是事件捕虎，值为false，就是事件冒泡。
 * 
 * 事件捕获是先执行的，事件冒泡是后执行的。 事件捕获作用到事件源上时，不存在捕获现象，正常执行函数。
 * 
 * focus, blur, change, submit, reset, select 没有冒泡和捕获现象。
 * IE 浏览器没有事件捕获现象，老版本除了chrome之外，没有事件捕获。
 * 
 */

/**
 * 阻止冒泡事件
 * 
 * event存在于函数的参数中，IE8 存在window， window.event
 * 
 * var e = ev || window.event;
 * 
 * e.stopPropagation();
 * e.cancelBubble = true;
 * 
 * 阻止默认事件
 * 可以用来阻止a标签，form表单默认行为。
 * 
 * // return false
 * // 兼容性较好，只能在用句柄的方式中使用，对于addEventListener添加的事件无效
 * 
 * document.oncontextmenu = function() {
 *  return false;
 * }
 * 
 * document.oncontextmenu = function(ev) {
 *  var e = ev || window.event;
 *  e.returnValue = false;
 * }
 * 
 * 阻止a标签默认事件
 * 
 * <a href="javascript:void(0)">点击<a> => void(0) = return 0
 * 
 * <a href="javascript:;">点击<a>
 * 
 * <a href="#">点击<a>
 * 
 * a.onclick = function(e) {
 *  e.preventDefault();
 * }
 * 
 */


/**
 * 事件流
 * 
 * 事件流用来描述从页面中接收事件的顺序。
 * 
 * 事件流分为3个阶段：
 * 事件捕获阶段
 * 处于目标阶段
 * 事件冒泡阶段
 * 
 * DOM 事件级别
 * 
 * DOM 0 级
 * 
 * 定义 on 之类的事件模型，以句柄的方式绑定事件处理函数
 * onclick="函数名称" onclick = function () {}
 * 
 * DOM 1 级
 * 
 * 没有定义事件模型
 * 
 * DOM 2 级
 * 定义addEventListener，removeEventListener，使用3个参数，成为W3C规范。
 * IE9 以下，没有遵守此规范，必须用attachEvent, detachEvent
 * 
 * DOM 3 级
 * 
 * 主要是对于 DOM2 进行扩展，增加更多的事件，比如 load, scroll, keydown, keyup 等。
 * DOM3 允许用户自定义直接。
 * 
 * Event方式
 */

// 创建一个支持冒泡且不能被取消的 pingan 事件

let myEvent = new Event('pingan', { "bubbles": true, "cancelable": false });
document.dispatchEvent(myEvent);

// 事件可以任何元素触发，不仅仅是document
testDOM.dispatchEvent(myEvent);

// CustomEvent方式

// CustomEvent 支持传参，Event不支持

// 创建事件
const myEvent1 = new CustomEvent('calert', {
 detail: { name: 'hello' }
});

// 添加适当的事件监听器
window.addEventListener('calert', e => {
 alert('alert事件触发')
});
document.getElementById('box').addEventListener(
 'click', function () {
  // 派发事件
  window.dispatchEvent(pingan2Event);
 }
)

// 分发事件，使用 dispatchEvent 触发事件，在IE8 及以下版本需要使用 fireEvent 方法兼容。

if (window.dispatchEvent) {
 window.dispatchEvent(myEvent);
} else {
 window.fireEvent(myEvent);
}

// 自定义事件可以实现类似发布订阅的功能，一个地方触发事件，多个地方监听事件。

// 事件与事件源对象

// 当某个元素触发一个事件时，浏览器会把这个事件触发的详细信息包装成一个对象，传递到事件处理函数的参数中

elem.onclick = function (ev) {
 var e = ev || window.event,
  tar = e.target || e.srcElement;
 console.log(e);
}

// 事件委托

// 将事件委托给父级，事件触发后会冒泡到父级。点击子元素时，可以在父级元素上获得被点击的事件源对象。

// 好处：

// 减少多次绑定事件处理函数，对性能优化比较好；
// 对于动态增加的元素，也可以获取到事件源
// 可以动态获取子元素下标

oList.onclick = function (ev) {
 var e = ev || window.event,
  tar = e.target || e.srcElement,
  tagName = tar.tagName.toLowerCase(),
  idx = [].indexOf.call(oLi, arr);
 
 if (tagName === 'li') {
  console.log(tar, tar.innerText, tagName, idx);
 }
}





