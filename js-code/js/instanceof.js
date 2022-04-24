// instanceof 运算符用于判断 构造函数的prototype属性 是否出现在 对象的原型链中的任何位置

function myInstanceof(obj, Fn) {
 // 1.首先获取类型的原型
 // 2.然后获取对象的原型
 let proto = Object.getPrototypeOf(obj), // 获取对象的原型
     prototype = Fn.prototype; // 获取构造函数的 prototype 对象

 // 3.然后一直循环判断 对象的原型 是否等于 类型的原型，直到对象原型为 null，因为原型链最终为null。
 while(true) {
  if(!proto) return false;
  if(proto === prototype) return true;

  proto = Object.getPrototypeOf(proto);
 }
}

function Car(make, model, year) {
 this.make = make;
 this.model = model;
 this.year = year;
}
const auto = new Car('Honda', 'Accord', 1998);

// console.log(auto instanceof Car);
console.log(myInstanceof(auto, Car))
// expected output: true

// console.log(auto instanceof Object);
console.log(myInstanceof(auto, Object))
// expected output: true