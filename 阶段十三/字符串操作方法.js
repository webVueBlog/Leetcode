/**

concat()，用于将一个或多个字符串拼接成一个新字

let stringValue = "hello "; 
let result = stringValue.concat("world"); 
console.log(result); // "hello world" 
console.log(stringValue); // "hello"

concat()方法可以接收任意多个参数，因此可以一次性拼接多个字符串

更常用的方式是使用加号操作符（+）


3 个从字符串中提取子字符串的方法：slice()、substr()和 substring()

第一个参数表示子字符串开始的位置，第二个参数表示子字符串结束的位置。

slice() substring()       substr()
对 slice()和 substring()而言，第二个参数是提取结束的位置（即该位置之前的字符会被提取出来）。

substr()而言
第二个参数表示返回的子字符串数量。

let stringValue = "hello world"; 
console.log(stringValue.slice(3)); // "lo world" 
console.log(stringValue.substring(3)); // "lo world" 
console.log(stringValue.substr(3)); // "lo world" 
console.log(stringValue.slice(3, 7)); // "lo w" 
console.log(stringValue.substring(3,7)); // "lo w" 
console.log(stringValue.substr(3, 7)); // "lo worl"

slice()方法将所有负值参数都当成字符串长度加上负参数值。

substring()方法会将所有负参数值都转换为 0

substr()方法将第一个负参数值当成字符串长度加上该值，将第二个负参数值转换为 0。

let stringValue = "hello world"; 
console.log(stringValue.slice(-3)); // "rld" 
console.log(stringValue.substring(-3)); // "hello world" 
console.log(stringValue.substr(-3)); // "rld" 

console.log(stringValue.slice(3, -4)); // "lo w" 
console.log(stringValue.substring(3, -4)); // "hel" 
console.log(stringValue.substr(3, -4)); // "" (empty string)

substring(3, 0)，等价于 substring(0, 3)


字符串位置方法

indexOf()和 lastIndexOf()

indexOf()方法从字符串开头开始查找子字符串，而 lastIndexOf()方法从字符串末尾开始查找子字符串。

let stringValue = "hello world"; 
console.log(stringValue.indexOf("o")); // 4 
console.log(stringValue.lastIndexOf("o")); // 7

这两个方法都可以接收可选的第二个参数，表示开始搜索的位置。

indexOf()会从这个参数指定的位置开始向字符串末尾搜索，忽略该位置之前的字符；lastIndexOf()则会从这个参数指定的位置开始向字符串开头搜索，忽略该位置之后直到字符串末尾的字符。

*/