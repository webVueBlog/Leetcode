
//bind() 方法会创建一个新函数,当这个新函数被调用时，bind() 的第一个参数将作为它运行时的 this
// 之后的一序列参数将会在传递的实参前传入作为它的参数
//由此我们可以首先得出 bind 函数的两个特点：返回一个函数,可以传入参数
var foo = {
 value: 1,
};
function bar(a, b) {
 console.log(this.value, a, b); //1 "a" "b" 用 arguments 进行处理
}
var bindFoo = bar.bind(foo, 'a');
bindFoo('b');

// bind特点 一个绑定函数也能使用new操作符创建对象：这种行为就像把原函数当成构造器。
// 提供的 this 值被忽略，同时调用时的参数被提供给模拟函数。
// 当 bind 返回的函数作为构造函数的时候，bind 时指定的 this 值会失效，但传入的参数依然生效。
var value = 2;

var foo = {
 value: 1,
};

function bar(name, age) {
 this.habit = 'shopping';
}

bar.prototype.friend = 'kevin';

var bindFoo = bar.bind(foo, 'daisy');

var obj = new bindFoo('18');
// undefined
// daisy
// 18
console.log(obj.habit);
console.log(obj.friend);
// shopping
// kevin


Function.prototype.testBind = function (obj) {
 let self = this;
 if (typeof this !== 'function') {
  return;
 }
 let args = Array.prototype.slice.call(arguments, 1);
 let fbound = function () {
  let Bindargs = Array.prototype.slice.call(arguments);
  return self.apply(
   this instanceof fbound ? this : obj,
   args.concat(Bindargs)
  );
 };
 return fbound;
};
