## html加载过程

外链 css 是并行下载，不会阻碍其他资源下载，不会阻碍页面解析，但是会阻碍屏幕渲染 link

浏览器采用自上而下的方式解析，在遇到样式（link，style）与脚本文件(script)都会阻塞浏览器的解析，直到外部资源加载并解析 或 执行完毕后才会继续向下解析html。

script脚本执行过程中可能会修改html界面（如document.write函数）；DOM节点的CSS样式会影响js的执行结果。

1. 在既没有css 也没有js的情况下，HTML文档的解析过程为

html -> dom(加载完出发DOMContentLoaded) -> render tree -> 布局 -> 绘制

2. 在有css 无js情况下

HTML -> 遇到css(同时继续加载dom) (加载完触发DOMContentLoaded) -> 解析css(并行生成新的CSS Rule Tree) -> cssTree 与 dom 一起到达渲染树 -> 布局 -> 绘制

（不同于1就是，渲染树的生成是基于cssom和dom的，但是触发DOMContentLoader的时间依然是在HTML解析为DOM后，无论此时CSS解析为CSSOM的过程是否完成）

3. 当有 js 时， html文档解析过程为

HTML -> 遇到css -> 执行css(生成cssom 这时会并发执行 不会阻碍后面加载) -> 遇到js -> 等待js加载并且等待加载完成 -> cssom 构建完成 -> 执行js -> 回到html -> DOM -> 触发DOMContentLoaded -> 与cssom和dom一起组成渲染树 -> 布局 -> 绘制

HTML 文档被解析时如果遇见（同步）脚本，则停止解析，先去加载脚本，然后执行，执行结束后继续解析 HTML 文档。HTML 文档解析完毕后触发 DOMContentLoaded.

DOMContentLoaded 事件的触发既可能在async脚本执行前、又可能在async脚本执行后呢？这是因为，async标签的脚本加载完毕的时间有两种情况：

1. HTML 还没有被解析完的时候，async脚本已经加载完了，那么 HTML停止解析，去执行脚本，脚本执行完毕后触发DOMContentLoaded事件。
2. HTML 解析完了之后，async脚本才加载完，然后再执行脚本，那么在HTML解析完毕、async脚本还没加载完的时候就触发DOMContentLoaded事件

DOMContentLoaded事件只关注HTML是否被解析完，而不关注async脚本。

如果 script 标签中包含 defer，那么这一块脚本将不会影响HTML文档的解析， 而是等到 HTML 解析完成后才会执行。而 DOMContentLoaded 只有在 defer 脚本执行结束后才会被触发。

1. HTML 还没有解析完成时，defer脚本已经加载完毕，那么 defer 脚本将等待 HTML 解析完成后再执行。defer 脚本执行完毕后 DOMContentLoaded 事件。
2. HTML 解析完成时， defer脚本还没加载完毕，那么 defer 脚本继续加载，加载完成后直接执行，执行完毕后触发 DOMContentLoaded 事件。

地址url过程？

1. 在地址栏输入 url ，返回 html 后，浏览器开始顺序加载 并 渲染 DOM
2. 当浏览器 遇见 body 标签 才是真正开始 加载 并且 渲染 dom，此时会有以下几种情况
3. 遇见 dom 元素就正常顺序加载，边加载变渲染
4. 当遇见内联 css 时，浏览器 继续 加载，但渲染会被阻塞，此时会生成新的 CSS Rule Tree, 生成后 重新渲染页面。

在 head 标签下的 style 标签中，选择器 + 样式声明

5. 当遇见外联 css 时（link），浏览器 启一个线程 加载 css，DOM 继续加载但 渲染被阻塞
6. 内联js的情况，浏览器会执行这段脚本，dom的加载 和 渲染同时被阻塞 （因为 js 有可能会更改dom Tree 和 render Tree 因此同时被阻塞）
7. 外联js的情况，遇到外联 js，浏览器会下载这一段脚本，下载成功后执行它，整个过程DOM的加载和渲染同时被阻塞

页面渲染优化有哪些方式？

1. HTML文档结构层次尽量少，最好不深于六层；
2. 脚本尽量后放，放在前即可；
3. 少量首屏样式内联放在标签内；
4. 样式结构层次尽量简单；
5. 在脚本中尽量减少DOM操作，尽量缓存访问DOM的样式信息，避免过度触发回流；
6. 减少通过 JavaScript 代码修改元素样式，尽量使用修改 class 名方式操作样式或动画；
7. 动画尽量使用在绝对定位或固定定位的元素上；
8. 隐藏在屏幕外，或在页面滚动时，尽量停止动画；
9. 尽量缓存DOM查找，查找器尽量简洁；
10. 涉及多域名的网站，可以开启 域名 预解析

https://github.com/webVueBlog/Leetcode