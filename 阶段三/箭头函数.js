/**
 * 1. 箭头函数没有自己的 this 对象
 * 2. 不可以当作构造函数，也就是说，不可以对箭头函数使用 new 命令，否则会抛出一个错误
 * 3. 不可以使用 arguments 对象，该对象在函数体内不存在，如果要用，可以用 rest 参数代替
 * 4. 不可以使用 yield 命令，因此箭头函数不能用作 Generator 函数
 */

var a = () => {
 console.log('a')
}

var b = new a();
console.log('b', b) // TypeError: a is not a constructor