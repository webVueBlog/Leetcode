
/**
 * 页面导入样式时，使用link和@import有什么区别？
 * 
 * 1. link 是 HTML 标签，@import 是css 提供的。
 * 2. link 引入的样式 页面加载时 同时加载，@import 引入的样式 需要等页面加载完成✅后再加载
 * 3. link 没有兼容性问题，@import 不兼容ie5以下
 * 4. link 可以通过js操作DOM 动态引入样式表改变样式，而 @import 不可以
 */


/**
 * 从属关系的区别：link 属于XHTML标签，而 @import 是CSS提供的语法规则，link 除了加载CSS，还可以定义RSS，定义rel连接属性等，@import 就只能加载css
 * 
 * 加载顺序的区别：页面加载时，link 会同时被加载，而 @import 引用的css会 等页面被加载完成后再加载。
 * 
 * 兼容性的区别： @import 只有IE5 以上才能被识别，而link是XHTML 标签，无兼容问题。
 * 
 * DOM 可空性区别：通过js操作DOM，可以插入link标签来改变样式：由于DOM方法是基于文档的，无法使用 @import 方法插入样式
 * 
 */

/**
 * 区别1: link是XHTML标签，除了加载CSS外，除了加载CSS外，还可以定义RSS等其它事物； @import 属于CSS范畴，只能加载CSS。
 * 区别2: link引用CSS时，在页面载入时 同时加载； @import 需要页面网页完全载入以后加载。（所以会出现一开始没有css样式，闪烁一下出现样式后的页面（网速慢的情况下）
 * 区别3: link 是 XHTML 标签，无兼容问题；@import 是CSS2.1提出的，低版本的浏览器不支持。
 * 区别4：link支持使用javascript控制dom去改变样式；而@import 不支持
 * 
 */

/**
 * 方式一： 内联样式
 * 
 * 内联样式，也叫行内样式，指的是 直接在HTML标签中的 style 属性中添加CSS.
 * <div style="display: none;background: red;"></div>
 * 
 * 这通常是个很糟糕的书写方式，它只能改变当前标签的样式，如果想要多个 <div> 拥有相同的样式，你不得不重复地为每个 <div> 添加相同的样式，如果想要修改一种样式，又不得不修改所有的 style 中的代码。很显然，内联方式引入 CSS 代码会导致 HTML 代码变得冗长，且使得网页难以维护。
 * 
 * 嵌入样式
嵌入方式指的是在 HTML 头部中的 <style> 标签下书写 CSS 代码。
示例：

<head>
    <style>

    .content {
        background: red;
    }

    </style>
</head>

嵌入方式的 CSS 只对当前的网页有效。因为 CSS 代码是在 HTML 文件中，所以会使得代码比较集中，当我们写模板网页时这通常比较有利。因为查看模板代码的人可以一目了然地查看 HTML 结构和 CSS 样式。因为嵌入的 CSS 只对当前页面有效，所以当多个页面需要引入相同的 CSS 代码时，这样写会导致代码冗余，也不利于维护。

方式三：链接样式
链接方式指的是使用 HTML 头部的 标签引入外部的 CSS 文件。
示例：

<head>
    <link rel="stylesheet" type="text/css" href="style.css">
</head>
这是最常见的也是最推荐的引入 CSS 的方式。使用这种方式，所有的 CSS 代码只存在于单独的 CSS 文件中，所以具有良好的可维护性。并且所有的 CSS 代码只存在于 CSS 文件中，CSS 文件会在第一次加载时引入，以后切换页面时只需加载 HTML 文件即可。

方式四：导入样式
导入方式指的是使用 CSS 规则引入外部 CSS 文件。
示例：

<style>
    @import url(style.css);
</style>
或者写在css样式中

@charset "utf-8";
@import url(style.css);
*{ margin:0; padding:0;}
.notice-link a{ color:#999;}
 */

