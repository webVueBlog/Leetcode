let a = {};
let b = {};
let c = {};

Object.setPrototypeOf(b, c); //设置c对象为b对象的原型
Object.setPrototypeOf(a, b); //把b指向a

console.log(b.__proto__.isPrototypeOf(a)); //true
console.log(b.isPrototypeOf(a)); //true 判断a是否是b的长辈
console.log(c.isPrototypeOf(b)); //true
console.log(c.isPrototypeOf(a)); //true
