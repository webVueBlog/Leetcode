## BFC

bfc: 块级格式化上下文

1. bfc是一个独立的布局环境，BFC 内部的元素布局与外部互不影响
2. 可以通过一些条件触发 BFC，从而实现布局上的需求或者解决一些问题
3. 可以将 BFC 想象成一个工具，无需探究其定义。

触发条件

1. 根元素 HTML
2. float 非none
3. position 为 absolute 和 fixed
4. overflow 的值非 visible
5. display 的值为 inline-block、 table-cell、table-caption、 flex、 inline-flex

BFC 特性

1. 属于同一个 bfc 的两个相邻容器的上下 margin 会重叠（重点），解析两者的较大值
2. 计算 bfc 高度时，浮动元素也要参与计算。
3. bfc 的区域不会与浮动容器发生重叠
4. bfc 内的容器在垂直方向上依次排列
5. 元素的 margin-left 与其包含块的 border-left 想接触
6. BFC 是独立容器，容器内部元素不会影响外部元素

BFC 功能总结

1. 可以利用 BFC 解决两个相邻元素的上下 margin 重叠问题；
2. 可以利用 BFC 解决高度塌陷问题；
3. 可以利用 BFC 实现多栏布局（两栏、三栏、圣杯、双飞翼等）。


https://github.com/webVueBlog/Leetcode
