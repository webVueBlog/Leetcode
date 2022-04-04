/**

使用 DOM API

向 DOM 中动态添加 script 元素同样可以加载指定的脚本

let script = document.createElement('script'); 
script.src = 'gibberish.js'; 
document.head.appendChild(script);

以这种方式创建的<script>元素是以异步方式加载的，相当于添加了 async 属性。

因为所有浏览器都支持 createElement()方法，但不是所有浏览器都支持 async 属性。

如果要统一动态脚本的加载行为，可以明确将其设置为同步加载：

let script = document.createElement('script'); 
script.src = 'gibberish.js'; 
script.async = false; 
document.head.appendChild(script);

以这种方式获取的资源对浏览器预加载器是不可见的。

这种方式可能会严重影响性能。

要想让预加载器知道这些动态请求文件的存在，可以在文档头部显式声明它们：

<link rel="preload" href="gibberish.js">

*/