// typeof

function _typeof(value) {
 if (value === null) {
  return 'null';
 }

 return typeof value === 'object' ? {
  '[object Object]': 'Object',
  '[object Array]': 'Array',
  '[object Number]': 'Number',
  '[object String]': 'String',
  '[object Boolean]': 'Boolean'
 }[({}).toString.call(value)] : typeof value;
}

/**
 * input 输入框，监听它的input事件
 * 
 * onfocus: 获取焦点时触发
 * onblur: 失去焦点时触发
 * onchange: 失去焦点并且value发生变化时触发
 * onkeydown: 按下按键时触发
 * onkeyup: 按键抬起的触发
 * onclick: 主要用于 type = button，作为按钮的点击事件
 * onselect: input 里的内容文本被选中，选中部分文本也会触发
 * oninput: input 中的value值发生变化时触发
 */

// 浅拷贝

function clone(origin, target) {
 var tar = target || {};
 for (var k in origin) {
  if (origin.hasOwnProperty(k)) {
   tar[k] = origin[k];
  }
 }
 return tar;
}

// 深拷贝

function isArray(target) {
 return Object.prototype.toString.call(target) === '[object Array]';
}

function isObject(target) {
 return typeof target === 'object' && target !== null;
}

/**
 * @description 深拷贝（对象）
 * @param {object} origin - 源对象
 * @param {object} target - 目标对象
 * @returns {object}
 */
function deepClone(origin, target) {
 var tar = target || {};

 for (var k in origin) {
  if (origin.hasOwnProperty(k)) {
   if (isObject(origin[k])) {
    tar[k] = isArray(origin[k]) ? [] : {};
    deepClone(origin[k], tar[k]);
   } else {
    tar[k] = origin[k];
   }
  }
 }

 return tar;
}


// new 

/**
 * @description 自定义实现 new 关键字
 *  生成 this 指向，包含属性及 __proto__
 *  构造函数如果返回对象，new 出的实例也返回对象，否则返回构造的 this 对象
 */
function $new() {
 var constructor = [].shift.call(arguments),
  _this = {};

 _this.__proto__ = constructor.prototype;
 var res = constructor.apply(_this, arguments);

 return $typeof(res) === 'Object' ? res : _this;
}

// instanceof

/**
 * @description 判断 target 是否是 type 的实例
 * @param {any} target 
 * @param {any} type 
 * @returns {boolean}
 */
function $instanceof(target, type) {
 var p = target;

 while (p) {
  if (p === type.prototype) {
   return true;
  }
  p = p.__proto__;
 }

 return false;
}

// Object.create


/**
 * @description 以提供的原型创建新对象
 * @param {objejct} proto 
 * @returns {object}
 */
Object.prototype.$create = function (proto) {
 function Buffer() { };
 Buffer.prototype = proto;
 Buffer.prototype.constructor = Buffer;
 return new Buffer();
}

// call / apply / bind

/**
 * @description 自定义实现 call
 * @param {object} ctx - 上下文 
 * @returns {any}
 */
Function.prototype.$call = function (ctx) {
 ctx = ctx ? Object(ctx) : window;
 ctx.originFn = this;

 var args = [];

 for (var i = 1; i < arguments.length; i++) {
  args.push('arguments[' + i + ']');
 }

 var ret = eval(' ctx.originFn(' + args + ')');
 delete ctx.originFn;

 return ret;
}

/**
 * @description 自定义实现 apply
 *  只取到第二个参数, 后面的参数忽略；
 *  第二个参数： string、number、boolean、symbol -> reateListFromArrayLike called on non-object；
 *  第二个参数： {}、fn、null、undefined -> arguments -> length 0；
 *  第二个参数： [] -> 实参列表；
 * @param {object} ctx - 上下文
 * @param {array} args - 参数列表 
 * @returns {any}
 */
Function.prototype.$apply = function (ctx, args) {
 ctx = ctx ? Object(ctx) : window;
 ctx.originFn = this;

 if (
  typeof args === 'string' ||
  typeof args === 'number' ||
  typeof args === 'boolean' ||
  typeof args === 'symbol'
 ) {
  throw new TypeError(' CreateListFromArrayLike called on non-object');
 }

 if ($typeof(args) !== 'Array') {
  return ctx.originFn();
 }

 var ret = eval('ctx.originFn(' + args + ')');

 delete ctx.originFn;

 return ret;
}




