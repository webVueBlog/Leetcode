/** 寄生组合式继承可以解决组合继承中 构造函数要调用两次的问题
 * 原理：借用构造函数来继承属性，通过原型链的混成型属来继承方法
 * 思路：不必为了指定子类型的原型而调用超类型的构造函数，只需要超类型的一个副本即可
 * 本质上:使用寄生式继承来继承超类型的原型，再将结果指定给子类型的原型
 */

function inheritPrototype(children, father) {
 // 接收子类型构造函数和超类型构造函数
 // 让变量prototype指向超类型的prototype 创造father构造函数原型的一个副本
 let prototype = Object(father.prototype);
 // 指定变量prototype的构造函数为children 将创建的副本添加constructor属性
 // 弥补因重写原型而失去的默认的constructor属性
 prototype.constructor = children;
 // 将创建的副本赋值给子类型的原型
 children.prototype = prototype;
}

function Father(name) {
 this.name = name;
 this.colors = ['red', 'yellow', 'blue'];
 this.view = function () {
  console.log(this.colors, '这个是实例方法');
 };
}

Father.callView = function () {
 console.log(
  '这个是静态方法 不属于单独一个实例,该方法不会被继承，而是直接通过类来调用，这被称为 “静态方法”。父类的静态方法可以被子类继承。'
 );
};

Father.prototype.show = function () {
 console.log(this.name, '这个是原型方法');
};

function Children(name, age) {
 Father.call(this, name);
 this.age = age;
}

inheritPrototype(Children, Father);
Children.prototype.sayAge = function () {
 console.log(this.age);
};
let da = new Children('ybz', 18);
let aa = new Children('xyk', 18);
console.log(da);
da.colors.push('1');
console.log(da.colors); //["red", "yellow", "blue", "1"]
console.log(aa.colors); // ["red", "yellow", "blue"]
da.show();
console.dir(Children);
console.dir(Father);
Father.callView();
// 集寄生式继承和组合继承的优点于一身，是实现基于类型继承的最有效方式
