/** 思路：创建一个仅用于封装继承过程的函数
 * 该函数在内部以某种方式来增强对象
 * 最后再像真的是它做了所有工作一样返回对象
 * 考虑'对象'而不是自定义和构造函数的情况下，可以考虑寄生式继承
 */

function CreateAnother(o) {
 // o 是要作为新对象的基础对象
 let clone = Object.create(o); //通过调用函数创建一个新对象
 clone.show = function () {  //以某种方式来增强这个对象
  console.log(this.name);
 };
 return clone  //返回这个对象
}


var Father = {
 name: 'da',
 friends: ['pq'],
};

var children = CreateAnother(Father);
children.show()  //da 继承了Father 和 创造show方法

/** 与原型式继承非常相似，也是基于某个对象或者某些信息创建一个对象，然后增强对象，最后返回对象
 * 为了解决组合继承里面多次调用超类型构造函数而导致的低效率问题，可以将这个模式和组合模式一起使用
 */