/**

return()方法用于提前终止迭代器

next()
throw()



function* generatorFn() {} 
const g = generatorFn(); 
console.log(g); // generatorFn {<suspended>} 
console.log(g.next); // f next() { [native code] } 
console.log(g.return); // f return() { [native code] } 
console.log(g.throw); // f throw() { [native code] }


return()和 throw()方法都可以用于强制生成器进入关闭状态。

return()方法会强制生成器进入关闭状态。

提供给 return()方法的值，就是终止迭代器对象的值


function* generatorFn() { 
 for (const x of [1, 2, 3]) { 
 yield x; 
 } 
} 
const g = generatorFn(); 
console.log(g); // generatorFn {<suspended>} 
console.log(g.return(4)); // { done: true, value: 4 } 
console.log(g); // generatorFn {<closed>}


所有生成器对象都有 return()方法，只要通过它进入关闭状态，就无法恢复了

调用 next()会显示 done: true 状态，而提供的任何返回值都不会被存储或传播

function* generatorFn() { 
 for (const x of [1, 2, 3]) { 
 yield x; 
 } 
}

const g = generatorFn(); 
console.log(g.next()); // { done: false, value: 1 } 
console.log(g.return(4)); // { done: true, value: 4 } 
console.log(g.next()); // { done: true, value: undefined } 
console.log(g.next()); // { done: true, value: undefined } 
console.log(g.next()); // { done: true, value: undefined }


for-of 循环等内置语言结构会忽略状态为 done: true 的 IteratorObject 内部返回的值

function* generatorFn() { 
 for (const x of [1, 2, 3]) { 
 yield x; 
 } 
} 
const g = generatorFn(); 
for (const x of g) { 
 if (x > 1) { 
 g.return(4); 
 } 
 console.log(x); 
} 
// 1 
// 2


throw()


throw()方法会在暂停的时候将一个提供的错误注入到生成器对象中

function* generatorFn() { 
 for (const x of [1, 2, 3]) { 
 yield x; 
 } 
} 
const g = generatorFn(); 
console.log(g); // generatorFn {<suspended>} 
try { 
 g.throw('foo'); 
} catch (e) { 
 console.log(e); // foo 
} 
console.log(g); // generatorFn {<closed>}

function* generatorFn() { 
 for (const x of [1, 2, 3]) { 
try { 
yield x; 
} catch(e) {} 
 } 
}
const g = generatorFn(); 
console.log(g.next()); // { done: false, value: 1} 
g.throw('foo'); 
console.log(g.next()); // { done: false, value: 3}


*/