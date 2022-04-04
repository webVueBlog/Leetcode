/**

用它声明变量时必须同时初始化变量 试修改 const 声明的变量会导致运行时错误

const age = 26; 
age = 36; // TypeError: 给常量赋值

// const 也不允许重复声明
const name = 'Matt'; 
const name = 'Nicholas'; // SyntaxError

// const 声明的作用域也是块
const name = 'Matt'; 
if (true) { 
 const name = 'Nicholas'; 
} 
console.log(name); // Matt

const person = {}; 
person.name = 'Matt'; // ok

for (const i = 0; i < 10; ++i) {} // TypeError：给常量赋值

let i = 0; 
for (const j = 7; i < 5; ++i) { 
 console.log(j); 
} 
// 7, 7, 7, 7, 7 
for (const key in {a: 1, b: 2}) { 
 console.log(key); 
} 
// a, b 
for (const value of [1,2,3,4,5]) { 
 console.log(value); 
} 
// 1, 2, 3, 4, 5

*/