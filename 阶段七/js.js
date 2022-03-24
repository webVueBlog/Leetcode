function sum(array) {
 return array.reduce(function (a, b, currentIndex, arr) {
  console.log(a, b, currentIndex, arr);
  return a + b;
 });
}
console.log(sum([1, 2]));
// reduce() 方法接收一个函数作为累加器，数组中的每个值（从左到右）开始缩减，最终计算为一个值。
// reduce() 可以作为一个高阶函数，用于函数的 compose。
// array.reduce(function(total, currentValue, currentIndex, arr), initialValue)
// total （上一次调用回调返回的值，或者是提供的初始值（initialValue））
// currentValue （数组中当前被处理的元素）
// currentIndex （当前元素在数组中的索引）
// arr （调用 reduce 的数组）
// initialValue （作为第一次调用 callback 的第一个参数。）

// 每个函数在被调用时候都会取得两个特殊变量 this 和 arguments ，内部函数在搜索这两个变量的时候 只会搜索到其活动项目为止
// 永远不可能直接访问外部函数中的这两个变量
// 如果把外部作用域中的this对象保存在一个闭包能够访问到的变量里面 就能让闭包访问该对象了



