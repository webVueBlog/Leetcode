/**
Map 实例会维护键值对的插入顺序

映射实例可以提供一个迭代器（Iterator），能以插入顺序生成[key, value]形式的数组。

通过 entries()方法（或者 Symbol.iterator 属性，它引用 entries()）取得这个迭代器



const m = new Map([ 
 ["key1", "val1"], 
 ["key2", "val2"], 
 ["key3", "val3"] 
]); 

alert(m.entries === m[Symbol.iterator]); // true 

for (let pair of m.entries()) { 
 alert(pair); 
} 
// [key1,val1] 
// [key2,val2] 
// [key3,val3] 

for (let pair of m[Symbol.iterator]()) { 
 alert(pair); 
} 
// [key1,val1] 
// [key2,val2] 
// [key3,val3]



因为 entries()是默认迭代器，所以可以直接对映射实例使用扩展操作

const m = new Map([ 
 ["key1", "val1"], 
 ["key2", "val2"], 
 ["key3", "val3"] 
]); 
console.log([...m]); // [[key1,val1],[key2,val2],[key3,val3]]

可以调用映射的 forEach(callback, opt_thisArg)


const m = new Map([ 
 ["key1", "val1"], 
 ["key2", "val2"], 
 ["key3", "val3"] 
]); 

m.forEach((val, key) => alert(`${key} -> ${val}`)); 

// key1 -> val1 
// key2 -> val2 
// key3 -> val3


const m = new Map([ 
 ["key1", "val1"], 
 ["key2", "val2"], 
 ["key3", "val3"] 
]); 

for (let key of m.keys()) { 
 alert(key); 
} 
// key1 
// key2 
// key3 

for (let key of m.values()) { 
 alert(key); 
} 
// value1 
// value2 
// value3





const m1 = new Map([ 
 ["key1", "val1"] 
]); 
// 作为键的字符串原始值是不能修改的
for (let key of m1.keys()) { 
 key = "newKey"; 
 alert(key); // newKey 
 alert(m1.get("key1")); // val1 
}


const keyObj = {id: 1}; 
const m = new Map([ 
 [keyObj, "val1"] 
]); 
// 修改了作为键的对象的属性，但对象在映射内部仍然引用相同的值
for (let key of m.keys()) { 
 key.id = "newKey"; 
 alert(key); // {id: "newKey"} 
 alert(m.get(keyObj)); // val1 
} 
alert(keyObj); // {id: "newKey"}


*/