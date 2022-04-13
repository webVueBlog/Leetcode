/**

class Counter { 
 // Counter 的实例应该迭代 limit 次
 constructor(limit) { 
 this.count = 1; 
 this.limit = limit; 
 } 
next() { 
if (this.count <= this.limit) { 
return { done: false, value: this.count++ }; 
} else { 
return { done: true, value: undefined }; 
} 
} 
[Symbol.iterator]() { 
return this; 
} 
} 
let counter = new Counter(3); 
for (let i of counter) { 
 console.log(i); 
} 
// 1 
// 2 
// 3



*/