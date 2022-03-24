/**  要求必须有一个对象可以作为另一个对象的基础
 *   如果有那么一个对象的话，可以把他传递给object()函数
 *   在根据具体需求对得到的对象加以修改即可
 */

/** 在不需要创建一个children构造函数的时候，这个可以胜任
 *但是引用类型会被共享
 */
//将传入的对象作为新创建的对象的原型
function object1(o) {
 // 创建了一个临时性的构造函数
 function F() { }
 // 将传入的对象作为这个构造函数的原型
 F.prototype = o;
 // 返回这个临时性构造函数的新实例
 return new F();
 //本质上object对传入的对象进行的一层 浅复制
}

/** ES5通过新增的Object.create()方法规范了原型式继承
 * 方法接收两个参数，一个作为新对象原型的对象 和 一个为新对象定义额外属性的对象
 */

var Father = {
 name: 'da',
 friends: ['pq'],
};
var children = Object.create(Father); //原型式继承
children.name = '一辈子一辈子';
children.friends.push('x');
console.log(children);
console.log(children.friends); //["pq", "x"]
console.log(Father.friends); // ["pq", "x"]
/** 在没必要兴师动众的创建一个构造函数，
 * 只想让一个对象与另一个对象保持类似的情况下
 * 原型式继承完全可以胜任
 * 这种继承包含引用类型的值始终都会共享相应的值，就像使用原型模式一样
 */
/** 可以在不必预先定义构造函数的情况下实现继承，其本质是执行对给定对象的浅复制。而复制得到的副本还可以进一步改造 */
