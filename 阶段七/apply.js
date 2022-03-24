const obj = { name: 'xx' };
function getName(a, b) {
 console.log(this.name, a, b);
}

Function.prototype.newApply = function (context, arg) {
 //必须是函数才能调用
 if (typeof this !== 'function') {
  throw this + 'is not a function';
 }
 // 不排除context为null
 context = context || window;
 // 不排除参数为空
 arg = arg || [];
 //给新对象添加一个函数 让函数指向this
 context.myFn = this;
 // 执行这个函数
 const result = context.myFn(...arg);
 delete context.myFn; //再删除,否则就有副作用了
 return result;
};
var a = getName.newApply(obj, [1, 2]); //xx
console.log(a)
