/**


arguments是一个对象。

js不能像java一样实现重载，arguments对象可以模拟重载。

js中每个函数都会有arguments这个实例，它引用着函数的实参，可以用数组下标的方式"[]"引用arguments的元素。arguments.length为函数实参个数，arguments.callee引用函数自身。

arguments他的特性和使用方法

特性：

1.arguments对象和Function是分不开的。

2.因为arguments这个对象不能显式创建。

3.arguments对象只有函数开始时才可用。

使用方法：

虽然arguments对象并不是一个数组，但是访问单个参数的方式与访问数组元素的方式相同

例如：

arguments[0],arguments[1]...


*/