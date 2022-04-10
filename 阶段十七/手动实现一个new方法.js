/**

new 的理解

new 运算符创建一个用户定义的对象类型的实例或具有构造函数的内置对象类型之一

创建新对象
新对象原型[[prototype]] = 构造函数prototype
this 指向新对象
执行构造函数
如果构造函数返回非空对象，就返回这个对象引用，不然返回创建的新对象


构造函数：
先准备一个构造函数来new使用。

function constructorFunction(name, age){
  this.name = name;
  this.age = age;
}
constructorFunction.prototype.say = function(){
  return 'Hello '+ this.name
}


function _new(Fn,...args){
    // 创建对象
    let obj = {};
    // 对象的原型指向其构造函数对应的原型
    obj.proto = Fn.prototype;
    // 运行函数，且修改this指向实例
    obj1= Fn.apply(obj,args)
    // 返回对象
    return obj1 instanceof Object ? obj1:obj
}


*/

// function objectFactory() {

//     var obj = new Object(), //从Object.prototype上克隆一个对象

//         Constructor = [].shift.call(arguments); //取得外部传入的构造器

//     var F = function() {};
//     F.prototype = Constructor.prototype;
//     obj = new F(); //指向正确的原型

//     var ret = Constructor.apply(obj, arguments); //借用外部传入的构造器给obj设置属性

//     return typeof ret === 'object' ? ret : obj; //确保构造器总是返回一个对象

// };

// console.log(new Object());

// var a = objectFactory({ name: '' })
// var b = objectFactory({ name: '' })
// var c = objectFactory({ name: '1' })
// console.log(a);
// console.log(b);
// console.log(c);

// 第一版代码
function objectFactory() {

    var obj = new Object(),

        Constructor = [].shift.call(arguments);

    obj.__proto__ = Constructor.prototype;

    Constructor.apply(obj, arguments);

    return obj;

};

console.log(new Object());

var a = objectFactory({ name: '' })
var b = objectFactory({ name: '' })
var c = objectFactory({ name: '1' })
console.log(a);
console.log(b);
console.log(c);