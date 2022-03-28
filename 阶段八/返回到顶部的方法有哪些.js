// window.location.href += '#'
// document.documentElement.scrollTop = 0;

// 利用 a 标签的锚点。 在顶部放一个 a 标签 < a name = "top" > 顶部 < / >，在需要回到顶部的位置放置一个 a 标签，地址为 top。 <a href="#top">回到顶部</a > 。要做成隐藏的锚点， 可以把内部的内容去掉， name 是必须的。

// 利用#， 在 url 后增加# 不会让页面刷新， 并且可以回到顶部。 可以对 location.href 进行设置 location.href += '#'。
// 当这个方法执行多次即有多个# 时， 页面不会有响应。

// 利用 javascript 设置 scrollTop = 0， 一般设置在最外层， 即 document.documentElement.scrollTop = 0 就可以返回顶部。