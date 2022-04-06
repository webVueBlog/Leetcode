/**
 * 
在全局作用域中定义的变量和函数都会变成 Global 对象的属性 。

isNaN()、isFinite()、parseInt()和 parseFloat()，实际上都是 Global 对象的方法。

1. URL 编码方法

encodeURI()和 encodeURIComponent()方法用于编码统一资源标识符（URI），以便传给浏览器。

ecnodeURI()方法用于对整个 URI 进行编码

encodeURIComponent()方法用于编码 URI 中单独的组件

这两个方法的主要区别是，encodeURI()不会编码属于 URL 组件的特殊字符，比如冒号、斜杠、问号、井号，而 encodeURIComponent()会编码它发现的所有非标准字符。来


let uri = "http://www.wrox.com/illegal value.js#start"; 
// "http://www.wrox.com/illegal%20value.js#start" 
console.log(encodeURI(uri)); 
// "http%3A%2F%2Fwww.wrox.com%2Fillegal%20value.js%23start" 
console.log(encodeURIComponent(uri));
VM1436:3 http://www.wrox.com/illegal%20value.js#start
VM1436:5 http%3A%2F%2Fwww.wrox.com%2Fillegal%20value.js%23start

与 encodeURI()和 encodeURIComponent()相对的是 decodeURI()和 decodeURIComponent()。decodeURI()只对使用 encodeURI()编码过的字符解码。例如，%20 会被替换为空格，但%23 不会被替换为井号（#），因为井号不是由 encodeURI()替换的。类似地，decodeURIComponent()解码所有被 encodeURIComponent()编码的字符，基本上就是解码所有特殊值。


let uri = "http%3A%2F%2Fwww.wrox.com%2Fillegal%20value.js%23start"; 
// http%3A%2F%2Fwww.wrox.com%2Fillegal value.js%23start 
console.log(decodeURI(uri)); 
// http:// www.wrox.com/illegal value.js#start 
console.log(decodeURIComponent(uri));


window 对象

var color = "red"; 
function sayColor() { 
 console.log(window.color); 
} 
window.sayColor(); // "red"


Global 对象属性

undefined 特殊值 undefined
NaN 特殊值 NaN
Infinity 特殊值 Infinity
Object Object 的构造函数
Array Array 的构造函数
Function Function 的构造函数
Boolean Boolean 的构造函数
String String 的构造函数

Number Number 的构造函数
Date Date 的构造函数
RegExp RegExp 的构造函数
Symbol Symbol 的伪构造函数
Error Error 的构造函数
EvalError EvalError 的构造函数
RangeError RangeError 的构造函数
ReferenceError ReferenceError 的构造函数
SyntaxError SyntaxError 的构造函数
TypeError TypeError 的构造函数
URIError URIError 的构造函数


eval()方法


这个方法就是一个完整的 ECMAScript 解释器

eval("console.log('hi')");

console.log("hi");

let msg = "hello world"; 
eval("console.log(msg)"); // "hello world"

eval("let msg = 'hello world';"); 
console.log(msg); // Reference Error: msg is not defined 

通过 eval()定义的任何变量和函数都不会被提升，这是因为在解析代码的时候，它们是被包含在一个字符串中的。它们只是在 eval()执行的时候才会被创建。

*/