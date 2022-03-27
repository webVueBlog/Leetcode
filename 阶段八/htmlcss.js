/**
 * 
 * html语义化
 * 提高代码可读性
 * 利用SEO优化
 * 
 * 块级元素，内联元素
 * 
 * 独占一行，不管内容的长度。
 * 
 * display: block | table;
 * 
 * div h1 p ul li table form
 * 
 * 内联元素
 * 
 * 不会独占一行，会紧跟排列，知道没有足够的空间
 * display: inline | inline-block;
 * 
 * span strong label a img input select textarea iframe
 * 
 * 盒模型
 * IE盒模型 和 标准盒模型
 * 
 * box-sizing: border-box | content-box;
 * 
 * margin合并
 * A 和 B 相距 10 个像素
 * div {
 *  font-size: 10px;
 *  line-height: 1;
 *  margin-top: 10px;
 * }
 * 
 * div {
 *  font-size: 16px;
 *  line-height: 1;
 *  margin-top: 10px;
 *  margin-bottom: 10px;
 * }
 */

// 这时，就出现margin 合并问题，两者间距合并为数值较大的值。

/**
 * BFC
 * Block formating context: 块级格式化上下文。
 * 
 * 形成独立的渲染区域。
 * 内部元素的渲染不会影响外界。
 * 
 * 形成BFC 常见的条件：
 * 浮动元素：（float不为none ，即left, right)
 * 绝对定位元素：(position 是 absolute, fixed)
 * 块级元素：overflow（非visible，即auto， scroll, hidden);
 * flex元素：
 * inline-block元素
 */

/**
 * 应用场景
 * 清除浮动
 * clear {
 *  overflow: hidden;
 * }
 */

/**
 * flex 布局
 * 
 * 父级容器
 * flex-direction: 主轴方向（水平方向，垂直方向）
 * justify-content: 主轴对齐方式
 * align-items: 交叉轴上的对齐方式
 * flex-wrap: 是否拆行。
 * 
 * 子元素相关
 * align-self: 子元素在交叉轴上的对齐方式
 * 
 * relative, absolute 定位
 * 
 * relative定位，相对于自身定位。
 * absolute定位，相对于最近的一层父级定位。
 * 
 * 
 * 定位元素relative, absolute, fixed 和 body
 * 
 * body本身就是一个定位元素
 * 
 * 水平居中
 * 
 * 行内元素
 * text-align: center;
 * 
 * 块级元素
 * margin: 0 auto;
 * 
 * absolute: 定位元素
 * left: 50%;
 * margin-left: -(width/2);
 * 
 * 
 * 垂直居中
 * 行内inline元素
 * line-height: height;
 * 
 * absolute定位元素
 * top: 50%;
 * margin-top: -(height/2);
 * 
 * top: 50%;
 * transform: translate(-50%, -50%);
 * 
 * top, left, bottom, right = 0
 * margin: auto;
 * 
 * line-height: 继承问题
 * 
 * 1 具体数值；例如50%；
 * 2 比例，如1.5；
 * 3 百分比，如20%；
 * 
 * rem
 * 
 * px 绝对长度单位
 * em 相对长度单位，相对于父元素
 * rem 相对长度单位，相对于html根元素
 * 
 */


