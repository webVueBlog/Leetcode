/**

ECMAScript 中的语句以分号结尾。

let sum = a + b // 没有分号也有效，但不推荐
let diff = a - b; // 加分号有效，推荐

// 有效，但容易导致错误，应该避免
if (test) 
 console.log(test); 
// 推荐
if (test) { 
 console.log(test); 
}

*/