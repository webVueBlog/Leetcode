// rest 参数的逆运算，将一个数组转为用逗号分隔的参数序列

//2.替代函数的 apply 方法
// ES5 的写法
// function f(x, y, z) {
//  // ...
// }
// var args = [0, 1, 2];
// f.apply(null, args);

// ES6的写法
// function f(x, y, z) {
//  // ...
// }
// let args = [0, 1, 2];
// f(...args);

//数组实例的 find() 和 findIndex()
//数组实例的find方法，用于找出第一个符合条件的数组成员

[1, 4, -5, -6].find((n) => n < 0);
// -5
//当前的值、当前的位置和原数组
[1, 5, 10, 15].find(function (value, index, arr) {
 return value > 9;
}); // 10

//数组实例的findIndex方法的用法与find方法非常类似，返回第一个符合条件的数组成员的'位置'，如果所有成员都不符合条件，则返回-1。
[1, 5, 10, 15].findIndex(function (value, index, arr) {
 return value > 9;
}); // 2

//这两个方法都可以发现NaN，弥补了数组的indexOf方法的不足。

[NaN]
 .indexOf(NaN)
  // -1


[NaN].findIndex((y) => Object.is(NaN, y));
// 0