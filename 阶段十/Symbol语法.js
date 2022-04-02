let da = Symbol();
let da1 = Symbol();

console.log(da === da1); //false

let d = Symbol('description 是symbol自带属性');
console.log(d.description); //description 是symbol自带属性

let a = Symbol.for('就是定义方式不同 没什么区别');
console.log(a); //Symbol(就是定义方式不同 没什么区别)
console.log(a.description); //就是定义方式不同 没什么区别

let b = Symbol.for('就是定义方式不同 没什么区别 但是是在全局定义');
let c = Symbol.for('就是定义方式不同 没什么区别 但是是在全局定义');

console.log('如果一个人symbol需要重复定义 Symbol.for', a === b); //false

console.log('如果一个人symbol需要重复定义 Symbol.for', c === b); //true