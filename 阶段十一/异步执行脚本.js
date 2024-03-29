/**

HTML5 为<script>元素定义了 async 属性。

只适用于外部脚本 都会告诉浏览器立即开始下载。

不同的是，标记为 async 的脚本并不保证能按照它们出现的次序执行

第二个脚本可能先于第一个脚本执行

添加 async 属性的目的是告诉浏览器，不必等脚本下载和执行完后再加载页面

同样也不必等到该异步脚本下载和执行后再加载其他脚本。

异步脚本不应该在加载期间修改 DOM。

异步脚本保证会在页面的 load 事件前执行，但可能会在 DOMContentLoaded 之前或之后。

对于 XHTML 文档，指定 async 属性时应该写成 async="async"。

*/