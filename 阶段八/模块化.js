/**
 * 模块化开发时当下最重要的前端开发范式之一。
 * 
 * 模块化是一种最主流的代码组织方式。通过把复杂代码按照功能不同划分为不同模块单独维护，去提高开发效率，降低维护成本。
 * 
 * 模块化只是思想，并不包括具体实现。
 * 
 * 模块化演进过程
 * 
 * 1. 基于文件划分模块
 * 
 * web中最原始的模块系统。将每个功能以及相关状态数据存放到不同文件中，约定每个文件就是独立的模块。
 * 
 * 使用模块时，将模块引入到页面中，一个script标签对应一个模块。
 * 
 * 
 */

// module a 相关状态数据和功能函数

var name = 'module-a'

function method1() {
 console.log(name + '#method1')
}

function method2() {
 console.log(name + '#method2')
}

// module b 相关状态数据和功能函数

var name = 'module-b'

function method1() {
 console.log(name + 'method1');
}

function method2() {
 console.log(name + 'method2');
}

// 缺点：

/**
 * 污染全局作用域
 * 命名冲突问题
 * 无法管理模块依赖关系
 */

// 命名空间方式

/**
 * 每个模块只暴露一个全局对象，所有模块成员都挂载到这个对象中。具体做法就是在第一阶段的基础上，通过将每个模块【包囊】为一个全局对象的形式实现，有点类似于为模块内的成员添加了【命名空间】的感觉
 */

// module a 相关状态数据和功能函数

var moduleA = {
 name: 'module-a',

 method1: function () {
  console.log(this.name + '#method1')
 },

 method2: function () {
  console.log(this.name + '#method2')
 }
}

// module b 相关状态数据和功能函数

var moduleB = {
 name: 'module-b',

 method1: function () {
  console.log(this.name + '#method1')
 },

 method2: function () {
  console.log(this.name + '#method2')
 }
}

/**
 * 
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <meta http-equiv="X-UA-Compatible" content="ie=edge">
  <title>Modular evolution stage 2</title>
</head>
<body>
  <script src="module-a.js"></script>
  <script src="module-b.js"></script>
  <script>
    moduleA.method1()
    moduleB.method1()
    // 模块成员可以被修改
    moduleA.name = 'foo'
  </script>
</body>
</html>
 */


// 模块化规范的出现

/**
 * 模块化标准 + 模块加载器
 * 
 * CommonJS 规范
 * 
 * NodeJS 所提出的一套标准，NodeJS中 所有的模块代码必须 遵循 CommonJS 规范
 * 
 * 每一个文件就是一个模块
 * 
 * 每个模块都有单独的作用域
 * 每个模块都有单独的作用域
 * 通过module.exports导出成员
 * 通过require函数载入模块
 * 
 * CommonJS 约定以同步方式加载模块。 NodeJS 的执行机制是在启动时加载模块，执行过程中不需要加载，只会使用模块。
 * 
 * CommonJS 规范在浏览器端使用，必然会导致效率低下，因为每次页面加载都会导致大量的同步模块请求出现。
 * 
 * 所以说在早期的浏览器前端模块化规范中，并没有选择CommonJS规范，而是专门为浏览器新定义了规范，AMD规范。同时还推出了一个非常有名的库。Require.js实现了AMD规范，其本身也是非常强大的模块加载器。
 * 
 * AMD 规范
 * 
 * AMD （Asynchronous Module Definition) ，即异步模块定义规范。
 * 
 * Require.js 提供了AMD 模块化规范，以及一个自动化模块加载器。
 * 
 * 
 * 
 */


// 因为 jQuery 中定义的是一个名为 jquery 的 AMD 模块
// 所以使用时必须通过 'jquery' 这个名称获取这个模块
// 但是 jQuery.js 并不在同级目录下，所以需要指定路径
define('module1', ['jquery', './module2'], function ($, module2) {
 return {
  start: function () {
   $('body').animate({ margin: '200px' })
   module2()
  }
 }
})

/**
 * 
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <meta http-equiv="X-UA-Compatible" content="ie=edge">
  <title>Modular evolution stage 5</title>
</head>
<body>
  <script src="lib/require.js" data-main="main"></script>
</body>
</html>
 */

require.config({
 paths: {
  // 因为 jQuery 中定义的是一个名为 jquery 的 AMD 模块
  // 所以使用时必须通过 'jquery' 这个名称获取这个模块
  // 但是 jQuery.js 并不一定在同级目录下，所以需要指定路径
  jquery: './lib/jquery'
 }
})

require(['./modules/module1'], function (module1) {
 module1.start()
})


// 目前绝大多数第三方库都支持AMD 规范。
/**
 * 但是使用起来相对比较复杂，模块JS 文件请求频繁
 */

require(['./modules'], function (module1) {
 module1.start();
})

// 兼容 CMD 规范（类似 CommonJS 规范）
define(function (require, exports, module) {
 // 通过 require 引入依赖
 var $ = require('jquery')
 // 通过 exports 或者 module.exports 对外暴露成员
 module.exports = function () {
  console.log('module 2~')
  $('body').append('<p>module2</p>')
 }
})







