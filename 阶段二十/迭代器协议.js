/**

迭代器是一种一次性使用的对象，用于迭代与其关联的可迭代对象。迭代器 API 使用 next()方法
在可迭代对象中遍历数据。每次成功调用 next()，都会返回一个 IteratorResult 对象，其中包含迭
代器返回的下一个值。若不调用 next()，则无法知道迭代器的当前位置。

next()方法返回的迭代器对象 IteratorResult 包含两个属性：done 和 value。done 是一个布
尔值，表示是否还可以再次调用 next()取得下一个值；value 包含可迭代对象的下一个值（done 为
false），或者 undefined（done 为 true）。done: true 状态称为“耗尽”。

*/