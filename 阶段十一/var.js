/**

ECMAScript 变量是松散类型的，意思是变量可以用于保存任何类型的数据。

每个变量只不过是一个用于保存任意值的命名占位符。

有 3 个关键字可以声明变量：var、const 和 let。

var 在ECMAScript 的所有版本中都可以使用

const 和 let 只能在 ECMAScript 6 及更晚的版本中使用

*/


/**

var message = "hi"; 
message = 100; // 合法，但不推荐

function test() { 
 var message = "hi"; // 局部变量
} 
test(); 
console.log(message); // 出错！

关键的问题在于，使用 var 操作符定义的变量会成为包含它的函数的局部变量。

在一个函数内部定义一个变量，就意味着该变量将在函数退出时被销毁

function test() { 
message = "hi"; // 全局变量
} 
test(); 
console.log(message); // "hi"

var message = "hi", 
 found = false, 
 age = 29;

在严格模式下，不能定义名为 eval 和 arguments 的变量，否则会导致语法错误。

1. var 声明作用域
2. var 声明提升

function foo() { 
 console.log(age); 
 var age = 26; 
} 
foo(); // undefined

function foo() { 
var age; 
 console.log(age); 
 age = 26; 
} 
foo(); // undefined

function foo() { 
 var age = 16; 
 var age = 26; 
 var age = 36; 
 console.log(age); 
} 
foo(); // 36

*/