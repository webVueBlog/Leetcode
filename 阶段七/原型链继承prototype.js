/**
 * 原型链继承存在一些问题
 * 包含引用值的原型属性会被所有实例共享
 * 所以要在构造函数中而不是原型对象中定义属性
 * 因为通过原型来继承时，原型实际上会变成另一个类型的实例
 * 原先的实例属性就顺理成章的变成现在的原型属性了
 */

Object.prototype.da = ['1', 2, 3, '7'];

var da = {};
console.log(da.da); //["1", 2, 3, "7"]
da.da.push('push一个ybz');

var xyk = {};
console.log(xyk.da); //["1", 2, 3, "7", "push一个ybz"]  包含引用值的原型属性会被所有实例共享

function Father() {
 this.color = ['yellow', 'red', 'blue']; //实例属性
}
// Father.prototype.color = ['yellow', 'red', 'blue'];
console.dir(Father);

let a = new Father
console.log(a.color); //["yellow", "red", "blue"]

function Children() { }
Children.prototype = new Father(); //childen的原型对象指向了Father的实例 通过原型来继承时，原型实际上会变成另一个类型的实例 这样就在原型属性上面定义了引用类型
var child1 = new Children();
child1.color.push('xxx')
var child2 = new Children();
console.log(child2.color);  //["yellow", "red", "blue", "xxx"]

/** 原型链第二个问题
 * 在创建子类型的实例时，不能向超类型的构造函数中传递参数
 * 没有办法在不影响所有对象的情况下 给超类型的构造函数传递参数
 */


