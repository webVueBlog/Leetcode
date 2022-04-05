/**

虽然执行上下文主要有全局上下文和函数上下文两种（eval()调用内部存在第三种上下文），但有其他方式来增强作用域链。

在作用域链前端临时添加一个上下文

通常在两种情况下会出现这个现象

try/catch 语句的 catch 块 : 会创建一个新的变量对象，这个变量对象会包含要抛出的错误对象的声明。

with 语句: 会向作用域链前端添加指定的对象

都会在作用域链前端添加一个变量对象。

function buildUrl() { 
 let qs = "?debug=true"; 
 with(location){ 
 let url = href + qs; 
 } 
 return url; 
}

with 语句将 location 对象作为上下文

*/