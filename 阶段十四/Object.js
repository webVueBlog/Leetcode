/**

地创建 Object 的实例

第一种是使用 new 操作符和 Object 构造函数

let person = new Object();
person.name = "Nicholas";
person.age = 29; 

使用对象字面量（object literal）表示法

let person = {
 name: "Nicholas",
 age: 29
};

在 ECMAScript 中，表达式上下文指的是期待返回值的上下文。

语句上下文（statementcontext）中，比如 if 语句的条件后面，则表示一个语句块的开始。

在对象字面量表示法中，属性名可以是字符串或数值

注意，数值属性会自动转换为字符串。

注意 在使用对象字面量表示法定义对象时，并不会实际调用 Object 构造函数

let person = {}; // 与 new Object()相同

对象字面量已经成为给函数传递大量可选参数的主要方式

console.log(person["name"]); // "Nicholas"
console.log(person.name); // "Nicholas"

使用中括号的主要优势就是可以通过变量访问属性，

*/