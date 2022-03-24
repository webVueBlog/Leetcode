/**
 * 1. 创建一个空的简单 JavaScript 对象(即 {})
 * 2. 将新对象的 _proto_ 指向构造函数的prototype 对象
 * 3. 让 this 指向新对象并执行构造函数里面的代码，给这个新对象添加属性 和 方法。
 * 4. 判断构造函数的返回值，如果是对象类型则返回该对象，否则返回自己创建的对象
 */

let Parent = function (name, age) {
 this.name = name;
 this.age = age;
};

Parent.prototype.sayName = function () {
 console.log(this.name);
};

function testNew(Parent, ...rest) {
 let children = {};
 children.__proto__ = Parent.prototype;
 let result = Parent.apply(children, rest);
 return typeof result === 'object' ? result : children;
}

let Children1 = testNew(Parent, 'dada', 18);
let Children2 = new Parent('dada', 12);

Children1.sayName();
Children2.sayName();

console.log(Children1);
// dada
// dada
// Parent { name: 'dada', age: 18 }

function TestNew(parent, ...arg) {
 let obj = {};
 obj.__proto__ = parent.prototype;
 let result = parent.apply(obj, ...arg);
 return typeof result === 'object' ? result : obj;
}

function mySetINterval(fn, time) {
 function interval() {
  setTimeout(interval, time);
  fn();
 }
 setTimeout(interval, time);
}

function fn() {
 console.log('3');
}

mySetINterval(fn, 100);

