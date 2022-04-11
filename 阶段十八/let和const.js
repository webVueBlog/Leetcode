/**ES6 新增了let命令，用来声明变量。
 * 它的用法类似于var，但是所声明的变量，只在let命令所在的代码块内有效。 */

var a = [];
for (let i = 0; i < 10; i++) {
    a[i] = function() {
        console.log(i);
    };
}
a[5](); // 5

a[6](); // 6

/**在代码块内，使用let命令声明变量之前，该变量都是不可用的。这在语法上，称为“暂时性死区”（temporal dead zone，简称 TDZ）。 */

if (true) {
    // TDZ开始
    tmp = 'abc'; // ReferenceError
    console.log(tmp); // ReferenceError
    let tmp; // TDZ结束
    console.log(tmp); // undefined
    tmp = 123;
    console.log(tmp); // 123
}


//let不允许在相同作用域内，重复声明同一个变量。
// let a = 1;
// let a = 2;

//const声明一个只读的常量。一旦声明，常量的值就不能改变。
const PI = 3.1415;
PI // 3.1415
PI = 3;
// TypeError: Assignment to constant variable.
//const声明的变量不得改变值，这意味着，const一旦声明变量，就必须立即初始化，不能留到以后赋值

// const foo;
// SyntaxError: Missing initializer in const declaration

/**const实际上保证的，并不是变量的值不得改动，而是变量指向的那个内存地址所保存的数据不得改动
 * 。对于简单类型的数据（数值、字符串、布尔值），值就保存在变量指向的那个内存地址，因此等同于常量。
 * 但对于复合类型的数据（主要是对象和数组），变量指向的内存地址，保存的只是一个指向实际数据的指针，const只能保证这个指针是固定的（即总是指向另一个固定的地址）
 * 至于它指向的数据结构是不是可变的，就完全不能控制了。
 * 因此，将一个对象声明为常量必须非常小心。
 */

const foo = {};
// 为 foo 添加一个属性，可以成功
foo.prop = 123;
foo.prop // 123
    // 将 foo 指向另一个对象，就会报错
foo = {}; // TypeError: "foo" is read-only

//  ES6 声明变量的六种方法
// ES5 只有两种声明变量的方法：var命令和function命令。
// ES6 除了添加let和const命令，后面章节还会提到，另外两种声明变量的方法：
// import命令和class命令。所以，ES6 一共有 6 种声明变量的方法。