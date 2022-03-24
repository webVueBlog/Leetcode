/**在解决原型中包含引用类型值所带来的的问题的过程中
 * 借用构造函数（伪造对象）
 * 中心思想：在子类构造函数的内部调用超类型的构造函数
 * 函数只不过是在特定环境中执行代码的对象
 * 因此通过apply和call也可以在新创建的对象上执行构造函数
 */

function Father() {
 this.color = ['yellow', 'red', 'blue']; //实例属性
}
function Children() {
 // 继承Father
 Father.call(this);
 // 借调超类型的构造函数 通过call方法
 // 实际上是在创建的Children新环境调用了Father构造函数
 // 这样一来就会在新的Children对象上面执行Father()函数中定义的所有对象的初始化代码
 // 所以每个实例都会拥有自己的color属性副本
}

var child1 = new Children();
child1.color.push('xxx');
var child2 = new Children();
console.log(child1.color); // ["yellow", "red", "blue", "xxx"]
console.log(child2.color); //["yellow", "red", "blue"]

/** 相对于原型链来说
 *  借用构造函数有一个很大的优势
 *  子类型构造函数可以向超类型构造函数传递参数
 */

function SuperType(name) {
 this.name = name;
}
SuperType.prototype.show = function () {
 console.log('这个原型方法 继承见不到');
};
function SubType() {
 SuperType.call(this, 'xxx'); // 为SubType设置了name属性
 this.age = 18;
}

let da = new SubType();
//SubType.show()  //SubType.show is not a function
console.dir(SubType);
console.log(da.name); //xxx
console.log(da.age); //18

/* 借用构造函数模式缺点
   1.无法避免构造函数模式的问题：方法都在构造函数中定义，函数复用无从谈起
   2.再超类型原型中定义的方法 子类型不可见 结果所有类型都得使用构造函数模式 */

