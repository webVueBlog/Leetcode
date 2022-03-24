let a = {
 name: 'a',
};

let b = {
 name: 'b',
 show() {
  console.log('a可以使用');
 },
 view() {
  console.log(this.name);
 },
};

Object.setPrototypeOf(a, b); //把a的父亲设置为b
a.show(); //a可以使用
a.view(); //a
console.log(a.__proto__); // name: 'b',
console.log(a.__proto__.__proto__);

// 每一个JavaScript对象(null除外)在创建的时候就会与之关联另一个对象，这个对象就是我们所说的原型，每一个对象都会从原型"继承"属性。
// 每个函数都有一个 prototype 属性
// 每个原型都有一个 constructor 属性指向关联的构造函数。
// 当读取实例的属性时，如果找不到，就会查找与对象关联的原型中的属性，如果还查不到，就去找原型的原型，一直找到最顶层为止，顶层是null。
function Person() { }
// Person.prototype.name = 'da';
var person = new Person();
// person.name = 'Kevin';
Object.prototype.name = 'ObjectName';
console.log(person);
console.log(person.__proto__.constructor); //指回去构造函数本身
console.log(person.__proto__.name); //da
console.log(person.name); // 当读取实例的属性时，如果找不到，就会查找与对象关联的原型中的属性，如果还查不到，就去找原型的原型，一直找到最顶层为止。 ObjectName
console.log(person.__proto__.__proto__.constructor);

console.log(Person.__proto__.constructor); //ƒ Function() { [native code] }
//
let fn = new Function();
console.log(fn.__proto__.__proto__ === Object.prototype); //true
console.log(Function.prototype.__proto__ === Object.prototype); //true
console.log(Object.__proto__ === Function.prototype); //true 　Object是对象的构造函数，那么它也是一个函数，当然它的__proto__也是指向Function.prototype


Function.prototype.a1 = 1;
Object.prototype.b1 = 2;

function A() { }
var a1 = new A();

console.log(A.a1, A.b1); //1 2
console.log(a.a1, a.b1); //undefined 2
console.log(Function.b1, Object.a1); //2 1  Object.__proto__===Function.prototype
console.log(Function.prototype.__proto__);
console.log(Function.prototype.__proto__ === Object.prototype); //true
//Function.b和Object.a中的 Function和Object是九个内置对象中的，所以它可以找到Function.prototype和Object.prototype。

//每个构造函数都有一个原型对象,原型对象都包含一个指向构造函数的指针,而实例都包含一个指向原型对象的内部指针
//如果让原型对象等于另外一个类型的实例,那么原型对象也包含这一个指向另一个原型的指针
//另一个原型也包含着指向另一个构造函数的指针,层层递进 就构成了实例与原型的链条 就是原型链
原型链实例