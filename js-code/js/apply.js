// apply()方法调用一个具有给定this值的函数，以及一个数组的形式提供的参数

Function.prototype.myApply = function(context) {
 // 判断调用对象是否为函数，即使我们是定义在函数的原型上的
 // 判断调用对象是否为函数
 if(typeof this !== 'function') {
  throw new TypeError('Error');
 }
 let result = null;
 // 判断context是否存在，如果不存在为window
 context = context || window;
 // 将函数设为对象的方法
 context.fn = this;
 // 数组
 if(arguments[1]) {
  result = context.fn(...arguments[1])
 } else {
  result = context.fn()
 }
 // 将属性删除
 delete context.fn;
 return result;
}

const numbers = [5, 6, 2, 3, 7];

const max = Math.max.apply(null, numbers);

console.log(max);
// expected output: 7