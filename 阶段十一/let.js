/**

let 声明的范围是块作用域

var 声明的范围是函数作用域

if (true) { 
 var name = 'Matt'; 
 console.log(name); // Matt 
} 
console.log(name); // Matt

if (true) { 
 let age = 26; 
 console.log(age); // 26 
} 
console.log(age); // ReferenceError: age 没有定义

块作用域是函数作用域的子集

let 也不允许同一个块作用域中出现冗余声明

var name; 
var name; 
let age; 
let age; // SyntaxError；标识符 age 已经声明过了


var name = 'Nicholas'; 
console.log(name); // 'Nicholas' 
if (true) { 
 var name = 'Matt'; 
 console.log(name); // 'Matt' 
} 
let age = 30; 
console.log(age); // 30 
if (true) { 
 let age = 26; 
 console.log(age); // 26 
}

var name; 
let name; // SyntaxError 
let age; 
var age; // SyntaxError

1. 暂时性死区

let 声明的变量不会在作用域中被提升。

// name 会被提升
console.log(name); // undefined 
var name = 'Matt'; 


// age 不会被提升
console.log(age); // ReferenceError：age 没有定义
let age = 26;

在 let 声明之前的执行瞬间被称为“暂时性死区”（temporal dead zone）

2. 全局声明

var name = 'Matt'; 
console.log(window.name); // 'Matt' 
let age = 26; 
console.log(window.age); // undefined

使用 let 在全局作用域中声明的变量不会成为 window 对象的属性

3. 条件声明

<script> 
 var name = 'Nicholas'; 
 let age = 26; 
</script> 
<script> 
 // 假设脚本不确定页面中是否已经声明了同名变量
 // 那它可以假设还没有声明过
 var name = 'Matt'; 
 // 这里没问题，因为可以被作为一个提升声明来处理
 // 不需要检查之前是否声明过同名变量
 let age = 36; 
 // 如果 age 之前声明过，这里会报错
</script>

4. for 循环中的 let 声明

for (var i = 0; i < 5; ++i) { 
 // 循环逻辑
} 
console.log(i); // 5

for (let i = 0; i < 5; ++i) { 
 // 循环逻辑
} 
console.log(i); // ReferenceError: i 没有定义

for (var i = 0; i < 5; ++i) { 
 setTimeout(() => console.log(i), 0) 
} 
// 你可能以为会输出 0、1、2、3、4 
// 实际上会输出 5、5、5、5、5

for (let i = 0; i < 5; ++i) { 
 setTimeout(() => console.log(i), 0) 
} 
// 会输出 0、1、2、3、4

*/