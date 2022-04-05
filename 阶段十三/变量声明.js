/**

ECMAScript 5.1  var

ES6 let 和 const

1. 使用 var 的函数作用域声明

function add(num1, num2) { 
 var sum = num1 + num2; 
 return sum; 
} 
let result = add(10, 20); // 30 
console.log(sum); // 报错：sum 在这里不是有效变量



function add(num1, num2) { 
sum = num1 + num2; 
 return sum; 
} 
let result = add(10, 20); // 30 
console.log(sum); // 30


var 声明会被拿到函数或全局作用域的顶部，位于作用域中所有代码之前。这个现象叫作“提升”（hoisting）

var name = "Jake"; 
// 等价于：
name = 'Jake'; 
var name;


function fn1() { 
 var name = 'Jake'; 
} 
// 等价于：
function fn2() { 
 var name; 
 name = 'Jake'; 
}


console.log(name); // undefined 
var name = 'Jake'; 
function() { 
 console.log(name); // undefined 
 var name = 'Jake'; 
}


2. 使用 let 的块级作用域声明

if (true) { 
 let a; 
} 
console.log(a); // ReferenceError: a 没有定义
while (true) { 
 let b; 
}
console.log(b); // ReferenceError: b 没有定义
function foo() { 
 let c; 
} 
console.log(c); // ReferenceError: c 没有定义
 // 这没什么可奇怪的
 // var 声明也会导致报错



// 这不是对象字面量，而是一个独立的块
// JavaScript 解释器会根据其中内容识别出它来
{ 
 let d; 
}


不能声明两次 会抛出 SyntaxError 。

var a; 
var a; 
// 不会报错
{ 
 let b; 
 let b; 
} 
// SyntaxError: 标识符 b 已经声明过了

“暂时性死区”（temporal dead zone）

3. 使用 const 的常量声明

使用 const 声明的变量必须同时初始化为某个值。


const a; // SyntaxError: 常量声明时没有初始化
const b = 3; 
console.log(b); // 3 
b = 4; // TypeError: 给常量赋值


if (true) { 
 const a = 0; 
} 
console.log(a); // ReferenceError: a 没有定义


while (true) { 
 const b = 1; 
} 
console.log(b); // ReferenceError: b 没有定义
function foo() { 
 const c = 2; 
} 
console.log(c); // ReferenceError: c 没有定义
{ 
 const d = 3; 
} 
console.log(d); // ReferenceError: d 没有定义


const o1 = {}; 
o1 = {}; // TypeError: 给常量赋值
const o2 = {}; 
o2.name = 'Jake'; 
console.log(o2.name); // 'Jake'

如果想让整个对象都不能修改，可以使用 Object.freeze()


const o3 = Object.freeze({}); 
o3.name = 'Jake'; 
console.log(o3.name); // undefined

4. 标识符查找

var color = 'blue'; 
function getColor() { 
 return color; 
} 
console.log(getColor()); // 'blue'


var color = 'blue'; 
function getColor() { 
let color = 'red'; 
 return color; 
} 
console.log(getColor()); // 'red'


var color = 'blue'; 
function getColor() { 
let color = 'red'; 
{ 
let color = 'green'; 
return color; 
} 
} 
console.log(getColor()); // 'green'


注意 标识符查找并非没有代价。访问局部变量比访问全局变量要快，因为不用切换作用域。不过，JavaScript 引擎在优化标识符查找上做了很多工作，将来这个差异可能就微不足道了。

*/

const o3 = Object.freeze({ age: 12 });
o3.name = 'Jake';
console.log(o3.name); // undefined
delete o3.age
console.log(o3.age) // 12