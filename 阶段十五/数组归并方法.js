/**
ECMAScript 为数组提供了两个归并方法：reduce()和 reduceRight()。

这两个方法都会迭代数组的所有项

接收 4 个参数：上一个归并值、当前项、当前项的索引和数组本身。这个函数返回的任何值都会作为下一次调用同一个函数的第一个参数。

let values = [1, 2, 3, 4, 5];
let sum = values.reduce((prev, cur, index, array) => prev + cur);
alert(sum); // 15 

*/