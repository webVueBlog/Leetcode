/**

原本 HTML 也允许自定义 attributes 因此在早期前端，为了将数据塞在标签中，往往会采用自定义属性存放数据的方法。

而 data- 便是 HTML 5 中用来存放数据的标签。使用 data-* 时，需要注意，data- 之后的单词必须是小写的，但是可以用多个 - 连接。而在对应的 DOM 方法中，我们可以通过 ele.dataset[属性名] 进行访问。在这里的属性名可以使用驼峰（转换规则和 vue 的组件名称转换一样）。

相比之前的自定义属性存放数据，使用 data-* 的方法，在数据的获取上会比较方便。


*/