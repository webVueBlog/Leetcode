/**

Null 类型同样只有一个值，即特殊值 null。

null 值表示一个空对象指针

let car = null; 
console.log(typeof car); // "object"

在定义将来要保存对象值的变量时，建议使用 null 来初始化，不要使用其他值

if (car != null) { 
 // car 是一个对象的引用
}

undefined 值是由 null 值派生而来的

console.log(null == undefined); // true

null 是一个假值。

let message = null; 
let age; 
if (message) { 
 // 这个块不会执行
} 
if (!message) { 
 // 这个块会执行
}

if (age) { 
 // 这个块不会执行
} 
if (!age) { 
 // 这个块会执行
}

*/

console.log(null === undefined); // false

let message = null;
let age;
if (message) {
    // 这个块不会执行
    console.log('1')
}
if (!message) {
    // 这个块会执行
    console.log('2')
}
if (Boolean(message)) {
    // 这个块不会执行
    console.log('3')
}

if (age) {
    // 这个块不会执行
    console.log('4')
}
if (!age) {
    // 这个块会执行
    console.log('5')
}

console.log(Boolean(message)) // false