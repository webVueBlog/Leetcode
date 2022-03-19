页面导入样式时，使用link和@import有什么区别

1、link属于XHTML标签，除了加载CSS外，还能用于定义RSS（简易信息聚合，是一种基于XML标准，在互联网上被广泛采用的内容包装和投递协议），rel连接属性等作用；@import是CSS提供的，只能用于加载CSS；

2、页面被加载时，link会同时被加载；而@import引用的CSS会等到页面被加载完成后再加载；

3、link是XHTML标签，没有兼容问题；而@import只有在IE5以上才能被识别；

4、link支持使用JavaScript控制DOM修改样式；而@import不支持。
