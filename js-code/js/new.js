function objectFactory(){
 // 1. 首先创建了一个新的空对象
 let newObject = null;
 let constructor = Array.prototype.shift.call(arguments); // 类数组头部
 let result = null;
 // 判断参数是否是一个函数
 if(typeof constructor !== 'function') {
  console.error('type error');
  return;
 }
 // 2.设置原型，将 对象的原型 设置为 函数的prototype对象
 // 新建一个空对象，对象的原型 为 构造函数的prototype对象
 newObject = Object.create(constructor.prototype);
 // 3.让函数的this指向这个对象，执行构造函数的代码（为这个新对象添加属性）
 // 将this指向新建对象，并执行函数
 result = constructor.apply(newObject, arguments);
 // 4.判断函数的返回值类型，如果是值类型，返回创建的对象。如果是引用类型，就返回这个引用类型的对象。
 let flag = result && (typeof result === 'object') || typeof result === 'function';
 // 判断返回结果
 return flag ? result : newObject;
}

function Car(make, model, year) {
 this.make = make;
 this.model = model;
 this.year = year;
}

const car1 = new Car('Eagle', 'Talon TSi', 1993);

// console.log(car1);
// Car { make: 'Eagle', model: 'Talon TSi', year: 1993 }
console.log(objectFactory(Car, 'Eagle', 'Talon TSi', 1993))
// Car { make: 'Eagle', model: 'Talon TSi', year: 1993 }