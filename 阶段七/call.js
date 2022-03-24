/**
 * call方法调用一个函数, 其具有一个指定的this值和分别地提供的参数(参数的列表)。
 * 注意：该方法的作用和 apply() 方法类似，只有一个区别
 * 就是call()方法接受的是若干个参数的列表，而apply()方法接受的是一个包含多个参数的数组。
 * 
 * js中的call(), apply()和bind()是Function.prototype下的方法
 * 
 * call() 方法在使用一个指定的 this 值和若干个指定的参数值的前提下调用某个函数或方法。
 * 
 * 
 * call实现思路：
 * 
 * 给新的对象添加一个函数，并让this（也就是当前绑定的函数）指向这个函数
 * 执行这个函数
 * 执行完以后删除这个方法
 * 可以将执行结果返回
 */

const obj = { name: 'dada' };
function getName(a, b) {
 console.log(this);
 console.log(this.name, a, b);
}

// call 方法
getName.call(obj, '1', '2');

//模拟call方法
Function.prototype.newCall = function (context, ...arg) {
 //必须是函数才能调用call
 if (typeof this !== 'function') {
  throw error;
 }
 // 不排除context为null
 context = context || Window;
 //给新对象添加一个函数 让函数指向this
 context.myFn = this;
 // 执行这个函数
 const result = context.myFn(...arg);
 // 删除这个方法
 delete context.myFn;
 //返回结果
 return result;
};
getName.newCall(obj, 1, 2);


