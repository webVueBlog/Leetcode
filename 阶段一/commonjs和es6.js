
module.exports 与 exports  和 export  与 export default 的区别

module.exports 和 exports 都是 commonjs 的

export 和 export default 都是 es6 的

Node 应用由模块组成，应用 commonjs 模块规范，根据这个规范，每个文件都是一个模块，有自己的作用域。在一个文件里面定义的类 变量 函数 都是私有的，对其他文件不可见。

commonjs规定，每个模块内部，module代表当前模块。这个变量是一个对象，他的 exports 属性 (module.exports)是对外的接口。加载某个模块，其实是加载 module.exports 属性。

var x = 5;
var assX = function (value) {
	return value + x;
};
module.exports.x = x;
module.exports.addX = addX;
// 利用module.exports输出x 和 addX
// require方法用于加载模块。
var example = require('./example.js');
console.log(example.x); // 5
console.log(example.addX(1)); // 6

// exports 和 module.exports 优先使用module.exports
// 因为为了方便 node 为每个模块 都提供了一个 exports 变量，指向 module.exports 
// 等于每个模块头部有一个 var exports = module.exports 
// 我们可以直接在 exports 上添加方法，就像在 module.exports 添加一样
// 因为node模块 是通过module.exports导出的，如果直接让exports变量指向一个值，就切断了exports与module.exports之间的联系，导致意外发生
exports = function a (params) {};
let a = require('./a.js'); // a是一个空对象

// es6模块规范
// es6使用impor导入 export 导出

