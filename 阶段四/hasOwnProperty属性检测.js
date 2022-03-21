let a = { name: 'da' };
let b = { age: '18' };
let c = { like: 'cat' };
//hasOwnPropoty 之查看自己属性 不查看原型属性
Object.setPrototypeOf(b, c); //设置c对象为b对象的原型
Object.setPrototypeOf(a, b); //设置b对象为a对象的原型

console.log(b.like); //cat
console.log(b.hasOwnProperty('like'));  //false