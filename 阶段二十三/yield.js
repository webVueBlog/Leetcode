/**

yield

yield 关键字可以让生成器停止和开始执行，也是生成器最有用的地方。生成器函数在遇到 yield
关键字之前会正常执行。遇到这个关键字后，执行会停止，函数作用域的状态会被保留。停止执行的生
成器函数只能通过在生成器对象上调用 next()方法来恢复执行

function* generatorFn() { 
 yield; 
} 
let generatorObject = generatorFn(); 
console.log(generatorObject.next()); // { done: false, value: undefined } 
console.log(generatorObject.next()); // { done: true, value: undefined }


function* generatorFn() { 
yield 'foo'; 
yield 'bar'; 
 return 'baz'; 
} 
let generatorObject = generatorFn(); 
console.log(generatorObject.next()); // { done: false, value: 'foo' } 
console.log(generatorObject.next()); // { done: false, value: 'bar' } 
console.log(generatorObject.next()); // { done: true, value: 'baz' }


function* generatorFn() { 
 yield 'foo'; 
 yield 'bar'; 
 return 'baz'; 
} 
let generatorObject1 = generatorFn(); 
let generatorObject2 = generatorFn(); 
console.log(generatorObject1.next()); // { done: false, value: 'foo' } 
console.log(generatorObject2.next()); // { done: false, value: 'foo' }
console.log(generatorObject2.next()); // { done: false, value: 'bar' } 
console.log(generatorObject1.next()); // { done: false, value: 'bar' }


yield 关键字只能在生成器函数内部使用，用在其他地方会抛出错误。

// 有效
function* validGeneratorFn() { 
 yield; 
} 
// 无效
function* invalidGeneratorFnA() { 
 function a() { 
 yield; 
 } 
} 
// 无效
function* invalidGeneratorFnB() { 
 const b = () => { 
 yield; 
 } 
} 
// 无效
function* invalidGeneratorFnC() { 
 (() => { 
 yield; 
 })(); 
}


1. 生成器对象作为可迭代对象


function* generatorFn() { 
 yield 1; 
 yield 2; 
 yield 3; 
} 
for (const x of generatorFn()) { 
 console.log(x); 
} 
// 1 
// 2 
// 3

2. 使用 yield 实现输入和输出

第一次调用 next()传入的值不会被使用，因为这一次调用是为了开始执行生成器函数

function* generatorFn(initial) { 
 console.log(initial); 
 console.log(yield); 
 console.log(yield); 
} 
let generatorObject = generatorFn('foo'); 
generatorObject.next('bar'); // foo 
generatorObject.next('baz'); // baz 
generatorObject.next('qux'); // qux


yield 关键字可以同时用于输入和输出

function* generatorFn() { 
return yield 'foo'; 
} 
let generatorObject = generatorFn(); 
console.log(generatorObject.next()); // { done: false, value: 'foo' } 
console.log(generatorObject.next('bar')); // { done: true, value: 'bar' }


无穷计数生成器函数

function* generatorFn() { 
 for (let i = 0;;++i) { 
 yield i; 
 } 
} 
let generatorObject = generatorFn(); 
console.log(generatorObject.next().value); // 0 
console.log(generatorObject.next().value); // 1 
console.log(generatorObject.next().value); // 2 
console.log(generatorObject.next().value); // 3 
console.log(generatorObject.next().value); // 4 
console.log(generatorObject.next().value); // 5

function *nTimes(n) {
 for(let i = 0; i<n; ++i) {
 yield i;
 }
}

for(let x of nTimes(3)) {
 console.log(x);
}
// 0
// 1
// 2

function* nTimes(n) { 
 let i = 0; 
 while(n--) { 
 yield i++; 
 } 
} 
for (let x of nTimes(3)) { 
 console.log(x); 
} 
// 0 
// 1 
// 2

function* range(start, end) { 
 while(end > start) { 
 yield start++; 
 } 
} 
for (const x of range(4, 7)) { 
 console.log(x); 
} 
// 4 
// 5 
// 6 
function* zeroes(n) { 
 while(n--) { 
 yield 0; 
 } 
} 
console.log(Array.from(zeroes(8))); // [0, 0, 0, 0, 0, 0, 0, 0]


3. 产生可迭代对象


// 等价的 generatorFn：
// function* generatorFn() { 
// for (const x of [1, 2, 3]) { 
// yield x; 
// } 
// } 
function* generatorFn() { 
yield* [1, 2, 3]; 
} 
let generatorObject = generatorFn(); 
for (const x of generatorFn()) { 
 console.log(x); 
} 
// 1 
// 2 
// 3



function* generatorFn() { 
yield* [1, 2]; 
yield *[3, 4]; 
yield * [5, 6]; 
} 
for (const x of generatorFn()) { 
 console.log(x); 
} 
// 1 
// 2 
// 3 
// 4 
// 5 
// 6


function* generatorFn() { 
 console.log('iter value:', yield* [1, 2, 3]); 
} 
for (const x of generatorFn()) { 
 console.log('value:', x); 
} 
// value: 1 
// value: 2 
// value: 3 
// iter value: undefined


对于生成器函数产生的迭代器来说，这个值就是生成器函数返回的值


function* innerGeneratorFn() { 
 yield 'foo'; 
return 'bar'; 
} 
function* outerGeneratorFn(genObj) { 
 console.log('iter value:', yield* innerGeneratorFn()); 
} 
for (const x of outerGeneratorFn()) { 
 console.log('value:', x); 
} 
// value: foo 
// iter value: bar



4. 使用 yield*实现递归算法


function* nTimes(n) { 
 if (n > 0) { 
yield* nTimes(n - 1); 
yield n - 1; 
 } 
} 
for (const x of nTimes(3)) { 
 console.log(x); 
} 
// 0 
// 1 
// 2


*/