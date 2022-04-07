/**
判断一个对象是不是数组

if (value instanceof Array){
 // 操作数组
} 

ECMAScript 提供了 Array.isArray()方法。这个方法的目的就是确定一个值是否为数组，而不用管它是在哪个全局执行上下文中创建的。

if (Array.isArray(value)){
 // 操作数组
}

*/