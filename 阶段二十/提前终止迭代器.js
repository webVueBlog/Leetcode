/**

for-of 循环通过 break、continue、return 或 throw 提前退出；

解构操作并未消费所有值。

数组的迭代器就是不能关闭的：

let a = [1, 2, 3, 4, 5]; 
let iter = a[Symbol.iterator](); 
for (let i of iter) { 
 console.log(i); 
 if (i > 2) { 
 break 
 } 
} 
// 1 
// 2 
// 3 
for (let i of iter) { 
 console.log(i); 
} 
// 4 
// 5



*/