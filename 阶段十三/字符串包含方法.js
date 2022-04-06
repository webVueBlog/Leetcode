/**

ECMAScript 6 增加了 3 个用于判断字符串中是否包含另一个字符串的方法：startsWith()、endsWith()和 includes()。

返回一个表示是否包含的布尔值。

startsWith()检查开始于索引 0 的匹配项，endsWith()检查开始于索引(string.length - substring.length)的匹配项，而 includes()检查整个字符串

let message = "foobarbaz"; 
console.log(message.startsWith("foo")); // true 
console.log(message.startsWith("bar")); // false 
console.log(message.endsWith("baz")); // true 
console.log(message.endsWith("bar")); // false 
console.log(message.includes("bar")); // true 
console.log(message.includes("qux")); // false


startsWith()和 includes()方法接收可选的第二个参数，表示开始搜索的位置。

let message = "foobarbaz"; 
console.log(message.startsWith("foo")); // true 
console.log(message.startsWith("foo", 1)); // false 
console.log(message.includes("bar")); // true 
console.log(message.includes("bar", 4)); // false


let message = "foobarbaz"; 
console.log(message.endsWith("bar")); // false 
console.log(message.endsWith("bar", 6)); // true


*/