/**
 * 模板标签
 * 
 * 模板字符串可以紧跟在一个函数名后面，该函数将被调用来处理这个模板字符串
 * 
 */

function message(literals, value1, value2) {
 console.log(literals); // [ '', ' I am ', '' ]
 console.log(value1); // a
 console.log(value2); // b

 return value1 + literals + value2;
}

let x = 'a', y = 'b';

var res = message`${x} I am ${y}`;
console.log(res) // a, I am ,b