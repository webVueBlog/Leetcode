/**
 * 
是CSS中的一个渲染机制，BFC就相当于一个盒子，内部的元素与外界的元素互不干扰。它不会影响外部的布局，外部的布局也不会影响到它。

形成条件（任意一条）
float的值不是none
position 的值不是static或者relative
display的值是inline-block,table-cell,flex,table-caption或者inline-flex
overflow的值不是visible

特性
内部的盒子会在垂直方向上一个接一个的放置
对于同一个BFC的俩个相邻的盒子的margin会发生重叠，与方向无关。
每个元素的左外边距与包含块的左边界相接触（从左到右），即使浮动元素也是如此
BFC的区域不会与float的元素区域重叠
计算BFC的高度时，浮动子元素也参与计算
BFC就是页面上的一个隔离的独立容器，容器里面的子元素不会影响到外面的元素，反之亦然

BFC 全称“块级格式化上下文”(Block Formatting Context)，对应的还有 IFC。BFC 类似一个“结界”，如果一个 DOM 元素具有 BFC，那么它内部的子元素不会影响外面的元素；外面的元素也不会影响到其内部元素。

最常见的例子就是清除 float 的 overflow: hidden; 属性。overflow: hidden; 会触发元素的 BFC，因此其内部的 float 元素不会影响到外部元素的布局。

触发 BFC 的条件：

<html> 根元素
float 不为 none
overflow 为 auto,scroll,hidden
display 的值为 table-cell, table-caption,inline-block 中任何一个
position 的值不为 static 和 relative
BFC 可以实现更加健壮的自适应布局。

 * 
 * 
 * 
 */