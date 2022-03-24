/** 
原生的继承主要是操作原型链，实现起来比较麻烦，使用 class 就要简单的多了。
继承时'必须'在子类构造函数中调用 super() '执行父类构造函数'
super.show() 执行父类方法
下面是子类继承了父类的方法show
 */

class Person {
 constructor(name) {
  console.log(name);
  this.name = name;
 }
 show() {
  return `xxx: ${this.name}`;
 }
}
class User extends Person {
 constructor(name) {
  console.log(name);
  super(name);
 }
 run() {
  return super.show();
 }
}
const da = new Person("da");
const a = new User("一辈子");
console.dir(a.run());  //xxx: 一辈子