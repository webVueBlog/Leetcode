/**

jsx的本质就是React.createElement()的语法糖，会通过babel的编译称为对React.createElement()的调用

为什么使用jsx?

因为相比React.createElement的调用，jsx层次分明，嵌套关系明显，可读性强
且使用了开发者较为熟悉的html标签语法来创建虚拟dom，（js对象表达式）
降低学习成本，提升开发效率

jsx是如何被转化为dom的

开发者的jsx代码 -> 经过bable编译转化为 React.createElement()的调用，生产虚拟dom -> 虚拟dom通过 render方法（ReactDom.render()) 对应生成真实dom

React.createElement()负责生成虚拟Dom

ReactDOM.render()将虚拟Dom转化为真实Dom

*/