// call()方法使用一个指定的this指和单独给出的一个或多个参数来调用一个函数

// 调用call 为函数fn
Function.prototype.myCall = function(context) {
 // 判断调用对象
 if (typeof this !== 'function') {
  console.error('type error')
 }
 // 获取参数
 let args = [...arguments].slice(1), // [fn, 1,2,3,...,args]
 result = null;

 // 判断 context 是否传入，如果未传入则设置为 winodw
 context = context || window;

 // 将调用函数设为对象的方法 因为是函数 context.fn
 context.fn = this;
 // 调用函数
 result = context.fn(...args);
 // 将属性删除
 delete context.fn;
 return result;
}

function Product(name, price) {
 this.age = 12;
 this.name = name;
 this.price = price;
}

function Food(name, price, age) {
 Product.call(this, name, price, age);
 this.age = 18; // 去掉则显示12
 this.category = 'food';
}

console.log(new Food('cheese', 5).age);
// expected output: 18