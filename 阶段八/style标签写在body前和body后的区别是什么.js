/**
 * 

在 HTML4 的时候，不应该把 style 放到 body 中间。

浏览器在渲染页面时 DOM 和 CSSOM 是并行的，然后两者结合形成 Render Tree 显示页面。从直觉上来说，style 写在 body 前不会对 DOM 的渲染进行阻塞；而写在 body 内会对 DOM 渲染进行阻塞。会产生 FOUC（Flash of Unstyled Content) 的现象，既一瞬间的白屏或者样式的突然变化（原因是 Render Tree 重新生成了）。

不过 W3C 在 HTML5.2 的定义中对于 style 标签的使用的定义中是允许将 style 放到 body 中的。

Contexts in which this element can be used:
Where metadata content is expected.
In a noscript element that is a child of a head element.
In the body, where flow content is expected.


 */