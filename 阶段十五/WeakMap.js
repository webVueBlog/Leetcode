/**

ECMAScript 6 新增的“弱映射”（WeakMap）是一种新的集合类型

WeakMap 中的“weak”（弱）描述的是 JavaScript 垃圾回收程序对待“弱映射”中键的方式。

可以使用 new 关键字实例化一个空的 WeakMap：
const wm = new WeakMap();

弱映射中的键只能是 Object 或者继承自 Object 的类型，尝试使用非对象设置键会抛出TypeError。

const key1 = {id: 1}, 
 key2 = {id: 2},
key3 = {id: 3}; 

// 使用嵌套数组初始化弱映射
const wm1 = new WeakMap([ 
 [key1, "val1"], 
 [key2, "val2"], 
 [key3, "val3"] 
]);


alert(wm1.get(key1)); // val1 
alert(wm1.get(key2)); // val2 
alert(wm1.get(key3)); // val3


// 初始化是全有或全无的操作
// 只要有一个键无效就会抛出错误，导致整个初始化失败
const wm2 = new WeakMap([ 
 [key1, "val1"], 
 ["BADKEY", "val2"], 
 [key3, "val3"] 
]); 
// TypeError: Invalid value used as WeakMap key 
typeof wm2; 
// ReferenceError: wm2 is not defined

// 原始值可以先包装成对象再用作键
const stringKey = new String("key1"); 
const wm3 = new WeakMap([ 
 stringKey, "val1" 
]); 
alert(wm3.get(stringKey)); // "val1"


可以使用 set()再添加键/值对，可以使用 get()和 has()查询，还可以使用 delete()删除

const wm = new WeakMap(); 
const key1 = {id: 1}, 
 key2 = {id: 2};

alert(wm.has(key1)); // false 
alert(wm.get(key1)); // undefined

wm.set(key1, "Matt") 
 .set(key2, "Frisbie"); 
alert(wm.has(key1)); // true 
alert(wm.get(key1)); // Matt

wm.delete(key1); // 只删除这一个键/值对

alert(wm.has(key1)); // false 
alert(wm.has(key2)); // true

const key1 = {id: 1}, 
 key2 = {id: 2}, 
 key3 = {id: 3}; 
const wm = new WeakMap().set(key1, "val1");


wm.set(key2, "val2") 
 .set(key3, "val3"); 
alert(wm.get(key1)); // val1 
alert(wm.get(key2)); // val2 
alert(wm.get(key3)); // val3















## 弱键

WeakMap 中“weak”表示弱映射的键是“弱弱地拿着”的

但要注意的是，弱映射中值的引用可不是“弱弱地拿着”的


const wm = new WeakMap(); 
wm.set({}, "val");

当这行代码执行完成后，这个对象键就会被当作垃圾回收。





const wm = new WeakMap(); 
const container = { 
 key: {} 
}; 
wm.set(container.key, "val"); 
function removeReference() { 
 container.key = null; 
}


container 对象维护着一个对弱映射键的引用


调用了 removeReference()，就会摧毁键对象的最后一个引用
*/

/**

不可迭代键

因为 WeakMap 中的键/值对任何时候都可能被销毁，所以没必要提供迭代其键/值对的能力。当然，
也用不着像 clear()这样一次性销毁所有键/值的方法。WeakMap 确实没有这个方法。因为不可能迭代，
所以也不可能在不知道对象引用的情况下从弱映射中取得值。即便代码可以访问 WeakMap 实例，也没
办法看到其中的内容。

WeakMap 实例之所以限制只能用对象作为键，是为了保证只有通过键对象的引用才能取得值。如果
允许原始值，那就没办法区分初始化时使用的字符串字面量和初始化之后使用的一个相等的字符串了。???

*/

/**

使用弱映射

1. 私有变量

私有变量会存储在弱映射中，以对象实例为键，以私有成员的字典为值。


const wm = new WeakMap(); 

class User { 
 constructor(id) { 
 this.idProperty = Symbol('id'); 
 this.setId(id); 
 } 

 setPrivate(property, value) { 
 const privateMembers = wm.get(this) || {}; 
 privateMembers[property] = value; 
 wm.set(this, privateMembers); 
 } 

 getPrivate(property) { 
 return wm.get(this)[property]; 
 } 

 setId(id) { 
 this.setPrivate(this.idProperty, id); 
 } 

 getId() { 
 return this.getPrivate(this.idProperty); 
 } 
} 

const user = new User(123); 
alert(user.getId()); // 123 
user.setId(456); 
alert(user.getId()); // 456 

// 并不是真正私有的
alert(wm.get(user)[user.idProperty]); // 456


可以用一个闭包把 WeakMap 包装起来

const User = (() => { 
 const wm = new WeakMap(); 

 class User { 
 constructor(id) { 
 this.idProperty = Symbol('id');

this.setId(id); 
 } 

 setPrivate(property, value) { 
 const privateMembers = wm.get(this) || {}; 
 privateMembers[property] = value; 
 wm.set(this, privateMembers); 
 } 

 getPrivate(property) { 
 return wm.get(this)[property]; 
 } 

 setId(id) { 
 this.setPrivate(this.idProperty, id); 
 } 

 getId(id) { 
 return this.getPrivate(this.idProperty); 
 } 

 } 
 return User; 
})();


const user = new User(123); 
alert(user.getId()); // 123 
user.setId(456); 
alert(user.getId()); // 456



2. DOM 节点元数据

const m = new Map(); 

const loginButton = document.querySelector('#login'); 

// 给这个节点关联一些元数据
m.set(loginButton, {disabled: true});





const wm = new WeakMap(); 

const loginButton = document.querySelector('#login'); 

// 给这个节点关联一些元数据
wm.set(loginButton, {disabled: true});


*/