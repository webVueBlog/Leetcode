/**

全 名 简 写 说 明
input $_ 最后搜索的字符串（非标准特性）
lastMatch $& 最后匹配的文本
lastParen $+ 最后匹配的捕获组（非标准特性）
leftContext $` input 字符串中出现在 lastMatch 前面的文本
rightContext $' input 字符串中出现在 lastMatch 后面的文本

let text = "this has been a short summer";
let pattern = /(.)hort/g;
if (pattern.test(text)) {
 console.log(RegExp.input); // this has been a short summer
 console.log(RegExp.leftContext); // this has been a
 console.log(RegExp.rightContext); // summer
 console.log(RegExp.lastMatch); // short
 console.log(RegExp.lastParen); // s
} 


lastMatch 属性包含匹配整个正则表达式的上一个字符串，即"short"。
lastParen 属性包含捕获组的上一次匹配，即"s"。


let text = "this has been a short summer";
let pattern = /(.)hort/g;

if (pattern.test(text)) {
 console.log(RegExp.$_); // this has been a short summer
 console.log(RegExp["$`"]); // this has been a
 console.log(RegExp["$'"]); // summer
 console.log(RegExp["$&"]); // short
 console.log(RegExp["$+"]); // s
}

let text = "this has been a short summer";
let pattern = /(..)or(.)/g;
if (pattern.test(text)) {
 console.log(RegExp.$1); // sh
 console.log(RegExp.$2); // t
} 

*/

/*
 * 注意：Opera 不支持简写属性名
 * IE 不支持多行匹配
 */