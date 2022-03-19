
Canvas 是HTML5新增的一个元素对象，名副其实就是一个画布，浏览器 js 配有相应的操作api，可以不再依赖其他的API或组件而直接绘图，相当于2D的API。Canvas 适用于位图，高数据量高绘制频率（帧率）的场景，如动画、游戏；

SVG 是给数据就可以绘制点、线、图形的，基于 XML 的标记语言；SVG 适用于矢量图，低数据量低绘制频率的场景，如图形、图表；

WebGL（全写Web Graphics Library）是一种3D绘图标准，通俗说WebGL是canvas绘图中的3D版本。因为原生的WebGL很复杂，我们经常会使用一些三方的库，如three.js等，WebGL 主要用来做 3D 展示、动画、游戏。