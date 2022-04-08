/**

ECMAScript 6 新增的“弱集合”（WeakSet）是一种新的集合类型

WeakSet 中的“weak”（弱）描述的是 JavaScript 垃圾回收程序对待“弱集合”中值的方式。

可以使用 new 关键字实例化一个空的 WeakSet：
const ws = new WeakSet();

弱集合中的值只能是 Object 或者继承自 Object 的类型，尝试使用非对象设置值会抛出 TypeError。


const val1 = {id: 1}, 
 val2 = {id: 2}, 
 val3 = {id: 3}; 
// 使用数组初始化弱集合
const ws1 = new WeakSet([val1, val2, val3]);

alert(ws1.has(val1)); // true 
alert(ws1.has(val2)); // true 
alert(ws1.has(val3)); // true

// 初始化是全有或全无的操作
// 只要有一个值无效就会抛出错误，导致整个初始化失败
const ws2 = new WeakSet([val1, "BADVAL", val3]); 
// TypeError: Invalid value used in WeakSet 
typeof ws2; 
// ReferenceError: ws2 is not defined


// 原始值可以先包装成对象再用作值
const stringVal = new String("val1"); 
const ws3 = new WeakSet([stringVal]); 
alert(ws3.has(stringVal)); // true


const ws = new WeakSet();

const val1 = {id: 1}, 
 val2 = {id: 2};

alert(ws.has(val1)); // false

ws.add(val1)
 .add(val2);

alert(ws.has(val1)); // true 
alert(ws.has(val2)); // true

ws.delete(val1); // 只删除这一个值

alert(ws.has(val1)); // false 
alert(ws.has(val2)); // true

const val1 = {id: 1}, 
 val2 = {id: 2}, 
 val3 = {id: 3};


const ws = new WeakSet().add(val1);

ws.add(val2) 
 .add(val3);

alert(ws.has(val1)); // true 
alert(ws.has(val2)); // true 
alert(ws.has(val3)); // true






WeakSet 中“weak”表示弱集合的值是“弱弱地拿着”的。

const ws = new WeakSet();

ws.add({});


const ws = new WeakSet(); 
const container = { 
 val: {} 
}; 
ws.add(container.val); 
function removeReference() { 
 container.val = null; 
}



*/


/**


不可迭代值???

因为 WeakSet 中的值任何时候都可能被销毁，所以没必要提供迭代其值的能力。当然，也用不着
像 clear()这样一次性销毁所有值的方法。WeakSet 确实没有这个方法。因为不可能迭代，所以也不
可能在不知道对象引用的情况下从弱集合中取得值。即便代码可以访问 WeakSet 实例，也没办法看到
其中的内容。

WeakSet 之所以限制只能用对象作为值，是为了保证只有通过值对象的引用才能取得值。如果允许
原始值，那就没办法区分初始化时使用的字符串字面量和初始化之后使用的一个相等的字符串了。


*/

/**
 * 
 * 使用弱集合

const disabledElements = new Set(); 
const loginButton = document.querySelector('#login'); 
// 通过加入对应集合，给这个节点打上“禁用”标签
disabledElements.add(loginButton);

const disabledElements = new WeakSet(); 
const loginButton = document.querySelector('#login'); 
// 通过加入对应集合，给这个节点打上“禁用”标签
disabledElements.add(loginButton);

*/