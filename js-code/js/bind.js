// bind() 方法创建一个新的函数，在 bind() 被调用时，这个新函数的 this 被指定为 bind() 的第一个参数，而其余参数将作为新函数的参数，供调用时使用。

Function.prototype.myBind = function(context) {
 // 判断调用对象是否为函数
 if(typeof this !== 'function') {
  throw new TypeError('Error')
 }
 // 获取参数
 var args = [...arguments].slice(1)
 fn = this;
 return function(fn){
  // 根据调用方式，传入不同绑定值
  return fn.apply(
   this instanceof Fn ? this : context,
   args.concat(...arguments)
  );
 };
};


// const module = {
//  x: 42,
//  getX: function() {
//    return this.x;
//  }
// };

// const unboundGetX = module.getX;
// console.log(unboundGetX()); // The function gets invoked at the global scope
// expected output: undefined

// const boundGetX = unboundGetX.bind(module);
// console.log(boundGetX());
// expected output: 42