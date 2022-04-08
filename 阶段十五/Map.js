/**
作为 ECMAScript 6 的新增特性，Map 是一种新的集合类型

使用 new 关键字和 Map 构造函数可以创建一个空映射：
const m = new Map();

可以给 Map 构造函数传入一个可迭代对象，需要包含键/值对数组。

// 使用嵌套数组初始化映射
const m1 = new Map([ 
 ["key1", "val1"], 
 ["key2", "val2"], 
 ["key3", "val3"] 
]); 
alert(m1.size); // 3


// 使用自定义迭代器初始化映射
const m2 = new Map({ 
 [Symbol.iterator]: function*() { 
 yield ["key1", "val1"]; 
 yield ["key2", "val2"]; 
 yield ["key3", "val3"]; 
 } 
}); 
alert(m2.size); // 3


// 映射期待的键/值对，无论是否提供
const m3 = new Map([[]]); 
alert(m3.has(undefined)); // true 
alert(m3.get(undefined)); // undefined


可以使用 set()方法再添加键/值对

get()和 has()进行查询

可以使用 delete()和 clear()删除值

const m = new Map(); 

alert(m.has("firstName")); // false 
alert(m.get("firstName")); // undefined 
alert(m.size); // 0 

m.set("firstName", "Matt") 
 .set("lastName", "Frisbie"); 

alert(m.has("firstName")); // true 
alert(m.get("firstName")); // Matt 
alert(m.size); // 2 

m.delete("firstName"); // 只删除这一个键/值对

alert(m.has("firstName")); // false 
alert(m.has("lastName")); // true 
alert(m.size); // 1 

m.clear(); // 清除这个映射实例中的所有键/值对

alert(m.has("firstName")); // false 
alert(m.has("lastName")); // false 
alert(m.size); // 0


*/

// Object 只能使用数值、字符串或符号作为键

/**

const m = new Map(); 

const functionKey = function() {}; 
const symbolKey = Symbol(); 
const objectKey = new Object(); 

m.set(functionKey, "functionValue"); 
m.set(symbolKey, "symbolValue"); 
m.set(objectKey, "objectValue"); 

alert(m.get(functionKey)); // functionValue 
alert(m.get(symbolKey)); // symbolValue 
alert(m.get(objectKey)); // objectValue 

// SameValueZero 比较意味着独立实例不冲突
alert(m.get(function() {})); // undefined




const m = new Map(); 

const objKey = {}, 
 objVal = {}, 
 arrKey = [], 
 arrVal = []; 

m.set(objKey, objVal); 
m.set(arrKey, arrVal); 

objKey.foo = "foo"; 
objVal.bar = "bar"; 
arrKey.push("foo"); 
arrVal.push("bar"); 

console.log(m.get(objKey)); // {bar: "bar"} 
console.log(m.get(arrKey)); // ["bar"]


const m = new Map(); 

const a = 0/"", // NaN 
 b = 0/"", // NaN 
 pz = +0, 
 nz = -0;

alert(a === b); // false 
alert(pz === nz); // true 

m.set(a, "foo"); 
m.set(pz, "bar"); 

alert(m.get(b)); // foo 
alert(m.get(nz)); // bar

 */