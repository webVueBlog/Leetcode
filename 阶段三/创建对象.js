// 工厂模式
// 缺点：对象无法识别，因为所有的实例都指向一个原型

function createPerson(name) {
 var o = new Object();
 o.name = name;
 o.getName = function () {
  console.log(this.name);
 };
 o.getName();
 return o;
}

var person1 = createPerson('da');
var person2 = createPerson('da1');
console.log(person1.__proto__ === person2.__proto__); 

// da
// da1
// true

// 2. 构造函数模式
// 优点：实例可以识别为一个特定的类型
// 缺点：每次创建实例时，每个方法都要被创建一次

function Person(name) {
 this.name = name;
 this.getName = function () {
  console.log(this.name);
 };
}

var person3 = new Person('a');
var person4 = new Person('b');
console.log(person3, person4)
// Person { name: 'a', getName: [Function (anonymous)] } Person { name: 'b', getName: [Function (anonymous)] }

// 2.1 构造函数模式优化
function Personal(name) {
 this.name = name;
 this.getName = getName;
}
function getName() {
 console.log(this.name);
}
var person5 = new Personal('c');
console.log(person5)
// /优点：解决了每个方法都要被重新创建的问题
// 缺点：这叫啥封装……
// Personal { name: 'c', getName: [Function: getName] }

// 3. 原型模式
function Person1(name) {

}
Person1.prototype.name = 'da';
Person1.prototype.getName = function () {
 console.log(this.name);
};
var person6 = new Person1();
console.log(person6) // Person1 {}
// 优点：方法不会重新创建
// 缺点：1. 所有的属性和方法都共享 2. 不能初始化参数

//4. 组合模式 优点：该共享的共享，该私有的私有，使用最广泛的方式
function Person2(name) {
 this.name = name;
}
Person2.prototype = {
 constructor: Person,
 getName: function () {
  console.log(this.name);
 }
};
var person7 = new Person2();

// 5.1 寄生构造函数模式
function Person3(name) {
 var o = new Object();
 o.name = name;
 o.getName = function () {
  console.log(this.name);
 };
 return o;
}
var person8 = new Person3('xx');
console.log(person8) // { name: 'xx', getName: [Function (anonymous)] }
console.log(person8 instanceof Person) // false
console.log(person8 instanceof Person3) // false
console.log(person8 instanceof Object)  // true

