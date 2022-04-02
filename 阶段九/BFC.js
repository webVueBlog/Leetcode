/**
 * 中文叫块级格式上下文，BFC 原理（BFC 的渲染规则）如下：
1）在 BFC 这个元素的垂直方向的边距会发生重叠，即 BFC 内部的兄弟元素中间会发生边距重叠。
解决方法，给某个兄弟元素增加一个父元素，给父元素创建一个 BFC，其他兄弟元素不会和这个新增的父元素发生边距重叠；
2）BFC 区域不会与浮动元素 box 重叠，这就是用来清除浮动的原理。
比如左边是浮动元素，右边是一个 div，如果两者高度不相等，整个布局就会坍塌，所以为这个 div 创建一个 BFC，就能得到我们想要的布局；
3）BFC 在页面是一个独立的容器，外面的元素不会影响里面的元素，反之亦然；
4）计算 BFC 高度时，浮动元素也会参与计算。这就是在浮动元素父元素上增加 overflow:hidden 会将浮动元素计算入内，而不会使父元素高度坍塌或者背景颜色显示不出来的原因。
创建 BFC 的方式：

1）只要 overflow 值不为 visible（默认值），就创建了 BFC；
2）float 值不为 none （默认值），只要设置了浮动，就创建了 BFC；
3）position 值不为 static（默认值）或者是 relative，就创建了 BFC；
4）将 display 值设置为 inline-box 或者是 table-cell（只要跟 table 相关的那几个），就创建了 BFC。
对应的内联元素的格式化上下文叫 IFC。 */

/**形成 BFC 的条件
五种:
浮动元素，float 除 none 以外的值 定位元素，position(absolute，fixed)
display 为以下其中之一的值 inline-block，table-cell，table-caption overflow 除了 visible 以外的值(hidden，auto，scroll)
HTML 就是一个 BFC

BFC 的特性:
内部的 Box 会在垂直方向上一个接一个的放置。 垂直方向上的距离由 margin 决定
bfc 的区域不会与 float 的元素区域重叠。
计算 bfc 的高度时，浮动元素也参与计算
bfc 就是页面上的一个独立容器，容器里面的子元素不会影响外面元素。 */