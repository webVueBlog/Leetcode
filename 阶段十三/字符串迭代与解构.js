/**

字符串的原型上暴露了一个`@@iterator` 方法 表示可以迭代字符串的每个字符


let message = "abc"; 
let stringIterator = message[Symbol.iterator](); 
console.log(stringIterator.next()); // {value: "a", done: false} 
console.log(stringIterator.next()); // {value: "b", done: false} 
console.log(stringIterator.next()); // {value: "c", done: false} 
console.log(stringIterator.next()); // {value: undefined, done: true}


let message = "abcde"; 
console.log([...message]); // ["a", "b", "c", "d", "e"]


for (const c of "abcde") { 
 console.log(c); 
} 
// a 
// b 
// c 
// d 
// e

*/