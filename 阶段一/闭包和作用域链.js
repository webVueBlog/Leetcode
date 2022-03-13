
// js采用的是词法作用域，函数在定义的时候，作用域就已经决定好了。函数的作用域基于函数创建的位置。因为函数有内部属性[[scope]],在函数定义的时候，就会保存所有父变量的对象到其中。

// 当执行一个函数，就会创建一个执行上下文，并且压入执行上下文栈，当函数执行完毕的时候，就会将函数的执行上下文从栈中弹出。

// 每个执行上下文都有三个重要属性

// 1.变量对象 2.作用域链 3.this

// 由多个执行上下文的变量对象构成的链表就叫做作用域链，当函数执行时，被推入执行上下文栈，会把活动对象添加到作用域链的前端，到这时候，作用域链创建完毕。

// 闭包：1.即使创建他的上下文已经销毁，它仍然存在
// 2.代码中引用了自由变量

var length = 10;
function fn() {
	return this.length + 1;
}
var obj1 = {
	length: 5,
	test1: function() {
		return fn();
	},
};
obj1.test2 = fn;
obj1.test1.call(); //  11
obj1.test1(); // 11
obj1.test2.call(); // 11
obj1.test2(); // 6

var a = 0;
if (true) {
	console.log(a); // 0
	a = 1;
	function a() {}
	a = 21;
	console.log(a); // 21
}
console.log(a); // 21
a = 100;
function fn() {
	console.log(this.a);
}
var obj = {
	a: 2,
	fn: fn,
};
obj.fn(); // 2









