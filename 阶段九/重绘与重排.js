/**
 * 浏览器渲染大体上分为以下五步
 * 1.处理html生成 DOM tree（Document Object Model）
 * （浏览器把得到的html代码转换为一个DOM树，我们html文档中的每一个tag标签都是一个DOM树的节点（文本节点也是），
 * DOM树的根节点就是我们的document对象，这里要注意，我们用js动态生成的DOM节点也在DOM树上）
 * 
 * 2.处理css生成 CSSOM（CSS Object Model） Tree（浏览器会把所有的样式解析为样式结构体（包括css样式和浏览器默认样式），当
 * 然浏览器识别不了的样式不能解析，最后生成了CSSOM树）
 * 
 * 3.DOM树与CSS-DOM树合并为Render树 （Render树我们叫它渲染树。它是由DOM树和CSSOM树合成的，渲染树的每一个节点都有自己的style样式，渲染树上没有隐藏的节点，
 * 比如display：block和无样式head节点，因为这些节点不会呈现也不影响呈现）
 * 
 * 4.对Render树进行布局计算（在这个阶段会根据Render树的样式计算布局，输出的结果称为box盒模型
 * 
 * 5.遍历Render树的每一个节点绘制到屏幕（最后将信息渲染到屏幕中每一个真实的像素点
这个过程叫绘制或者 rasterizing 格栅化）
渲染树并不是一成不变的，在我们的脚本当中，它是可能改变的*/

/**重绘与重排
 * 1.重排：
 * 当DOM变化影响了元素的几何属性（宽、高改变等等），
 * 浏览器此时需要重新计算元素几何属性，并且页面中其他元素的几何属性可能会受影响，
 * 这样渲染树就发生了改变，也就是重新构造RenderTree渲染树，这个过程叫做重排（reflow）
 * 
 * 2.如果DOM变化仅仅影响的了背景色等等非几何属性，此时就发生了重绘（repaint）而不是重排，因为布局没有发生改变
 * 不管页面发生了重绘还是重排，它们都会影响性能（重绘还好一些），能避免要尽量避免
 */
/** 
 * 触发重绘的条件：改变元素外观属性。如：color，background-color等。
 * 重排：当渲染树中的一部分(或全部)因为元素的规模尺寸，布局，隐藏等改变而需要重新构建, 这就称为回流(reflow)。每个页面至少需要一次回流，就是在页面第一次加载的时候。
 * 重绘和重排的关系：在回流的时候，浏览器会使渲染树中受到影响的部分失效，并重新构造这部分渲染树，完成回流后，浏览器会重新绘制受影响的部分到屏幕中，该过程称为重绘。
 * 重排必定会引发重绘，但重绘不一定会引发重排。 */

/**
 * 触发重排
 * 页面布局和元素几何属性的改变就会导致重排
1.页面初始渲染
2.添加/删除可见DOM元素
3.改变元素位置
4.改变元素尺寸（宽、高、内外边距、边框等）
5.改变元素内容（文本或图片等）
6.改变窗口尺寸
7.不同的条件下发生重排的范围及程度会不同，某些情况甚至会重排整个页面，滑动滚动条 */

/**3.优化：
 * 1、浏览器自己的优化：浏览器会维护1个队列，把所有会引起回流、重绘的操作放入这个队列，等队列中的操作到了一定的数量或者到了一定的时间间隔，浏览器就会flush队列，进行一个批处理。这样就会让多次的回流、重绘变成一次回流重绘。
 * 
 * 2、我们要注意的优化：我们要减少重绘和重排就是要减少对渲染树的操作，则我们可以合并多次的DOM和样式的修改。并减少对style样式的请求。
 * 
 * （1）直接改变元素的className
 * 
 * （2）display：none；先设置元素为display：none；然后进行页面布局等操作；设置完成后
 * 元素设置为display：block；这样的话就只引发两次重绘和重排；
 * 
 * 3）不要经常访问浏览器的flush队列属性；如果一定要访问，可以利用缓存。将访问的值存储起来，接下来使用就不会再引发回流；
 * 
 * （4）使用cloneNode(true or false) 和 replaceChild 技术，引发一次回流和重绘；
 * 
 * （5）将需要多次重排的元素，position属性设为absolute或fixed，元素脱离了文档流，它的变化不会影响到其他元素；
 * 
 * （6）如果需要创建多个DOM节点，可以使用DocumentFragment创建完后一次性的加入document；
 * 
 * （7）尽量不要使用table布局 */