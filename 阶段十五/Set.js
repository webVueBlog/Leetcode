/**

ECMAScript 6 新增的 Set 是一种新集合类型

使用 new 关键字和 Set 构造函数可以创建一个空集合：
const m = new Set();

// 使用数组初始化集合
const s1 = new Set(["val1", "val2", "val3"]);

alert(s1.size); // 3


// 使用自定义迭代器初始化集合
const s2 = new Set({ 
 [Symbol.iterator]: function*() { 
 yield "val1"; 
 yield "val2"; 
 yield "val3"; 
 } 
}); 
alert(s2.size); // 3

可以使用 add()增加值，使用 has()查询，通过 size 取得元素数量，以及使用 delete()和 clear()删除元素

const s = new Set();

alert(s.has("Matt")); // false 
alert(s.size); // 0


s.add("Matt") 
 .add("Frisbie");

alert(s.has("Matt")); // true 
alert(s.size); // 2

s.delete("Matt");

alert(s.has("Matt")); // false 
alert(s.has("Frisbie")); // true 
alert(s.size); // 1


s.clear(); // 销毁集合实例中的所有值

alert(s.has("Matt")); // false 
alert(s.has("Frisbie")); // false 
alert(s.size); // 0


const s = new Set().add("val1"); 
s.add("val2") 
 .add("val3"); 
alert(s.size); // 3



const s = new Set();

const functionVal = function() {}; 
const symbolVal = Symbol(); 
const objectVal = new Object();

s.add(functionVal); 
s.add(symbolVal); 
s.add(objectVal);

alert(s.has(functionVal)); // true 
alert(s.has(symbolVal)); // true 
alert(s.has(objectVal)); // true


// SameValueZero 检查意味着独立的实例不会冲突
alert(s.has(function() {})); // false


与严格相等一样，用作值的对象和其他“集合”类型在自己的内容或属性被修改时也不会改变：


const s = new Set();

const objVal = {}, 
 arrVal = [];

 s.add(objVal); 
s.add(arrVal);

objVal.bar = "bar"; 
arrVal.push("bar");

alert(s.has(objVal)); // true 
alert(s.has(arrVal)); // true


delete()返回一个布尔值，表示集合中是否存在要删除的值

const s = new Set();


s.add('foo'); 
alert(s.size); // 1 
s.add('foo'); 
alert(s.size); // 1

// 集合里有这个值
alert(s.delete('foo')); // true

// 集合里没有这个值
alert(s.delete('foo')); // false

















顺序与迭代

const s = new Set(["val1", "val2", "val3"]);

alert(s.values === s[Symbol.iterator]); // true 
alert(s.keys === s[Symbol.iterator]); // true

for (let value of s.values()) { 
 alert(value); 
} 
// val1 
// val2 
// val3


for (let value of s[Symbol.iterator]()) { 
 alert(value); 
} 
// val1 
// val2 
// val3


values()是默认迭代器

const s = new Set(["val1", "val2", "val3"]);

console.log([...s]); // ["val1", "val2", "val3"]


const s = new Set(["val1", "val2", "val3"]); 
for (let pair of s.entries()) { 
 console.log(pair); 
} 
// ["val1", "val1"] 
// ["val2", "val2"] 
// ["val3", "val3"]


const s = new Set(["val1", "val2", "val3"]); 
s.forEach((val, dupVal) => alert(`${val} -> ${dupVal}`)); 
// val1 -> val1 
// val2 -> val2 
// val3 -> val3


修改集合中值的属性不会影响其作为集合值的身份

const s1 = new Set(["val1"]); 
// 字符串原始值作为值不会被修改
for (let value of s1.values()) {
 value = "newVal"; 
 alert(value); // newVal 
 alert(s1.has("val1")); // true 
} 



const valObj = {id: 1}; 
const s2 = new Set([valObj]);


// 修改值对象的属性，但对象仍然存在于集合中
for (let value of s2.values()) { 
 value.id = "newVal"; 
 alert(value); // {id: "newVal"} 
 alert(s2.has(valObj)); // true 
} 
alert(valObj); // {id: "newVal"}








定义正式集合操作 ???







*/