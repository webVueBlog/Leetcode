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









*/