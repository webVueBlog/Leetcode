BFC块级格式化上下文，在布局中生成块级盒子的区域，BFC为独立布局环境，内部的元素不受外界影响


实现BFC的条件: 

1.HTML.

2.float不为none.

3.display：inline-block，table，table-caption，flex，table-cell，grid

4.overflow不为visible 5.position为absolute或者fixed 
 
BFC的特性:

1.内部的box会在垂直方向上，一个接一个的放置 

2.盒子外边距会重叠

3.BFC的区域不会与浮动元素重叠 

4.计算高度会把浮动元素一并计入

5.子元素不会影响到外部元素，反之也如此

6.元素的margin-left与其包含块的border-left相接触


