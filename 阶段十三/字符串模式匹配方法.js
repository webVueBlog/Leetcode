/**

match()方法接收一个参数，可以是一个正则表达式字符串，也可以是一个 RegExp 对象

let text = "cat, bat, sat, fat"; 
let pattern = /.at/; 
// 等价于 pattern.exec(text) 
let matches = text.match(pattern); 
console.log(matches.index); // 0 
console.log(matches[0]); // "cat" 
console.log(pattern.lastIndex); // 0


let text = "cat, bat, sat, fat"; 
let pos = text.search(/at/); 
console.log(pos); // 1

这个方法返回模式第一个匹配的位置索引，如果没找到则返回1


search()始终从字符串开头向后匹配模式。


提供了 replace()方法

let text = "cat, bat, sat, fat"; 
let result = text.replace("at", "ond"); 
console.log(result); // "cond, bat, sat, fat" 
result = text.replace(/at/g, "ond"); 
console.log(result); // "cond, bond, sond, fond"

这个方法接收两个参数，第一个参数可以是一个 RegExp 对象或一个字符串（这个字符串不会转换为正则表达式），第二个参数可以是一个字符串或一个函数。

let text = "cat, bat, sat, fat"; 
result = text.replace(/(.at)/g, "word ($1)"); 
console.log(result); // word (cat), word (bat), word (sat), word (fat)

replace()的第二个参数可以是一个函数。

这个函数会收到 3 个参数：与整个模式匹配的字符串、匹配项在字符串中的开始位置，以及整个字符串。

function htmlEscape(text) { 
 return text.replace(/[<>"&]/g, function(match, pos, originalText) { 
 switch(match) { 
 case "<": 
 return "&lt;"; 
 case ">": 
 return "&gt;"; 
 case "&": 
 return "&amp;"; 
 case "\"": 
 return "&quot;"; 
 } 
 }); 
} 
console.log(htmlEscape("<p class=\"greeting\">Hello world!</p>")); 
// "&lt;p class=&quot;greeting&quot;&gt;Hello world!</p>"

split()

let colorText = "red,blue,green,yellow"; 
let colors1 = colorText.split(","); // ["red", "blue", "green", "yellow"] 
let colors2 = colorText.split(",", 2); // ["red", "blue"] 
let colors3 = colorText.split(/[^,]+/); // ["", ",", ",", ",", ""]

这是因为正则表达式指定的分隔符出现在了字符串开头（"red"）和末尾（"yellow"）。

*/