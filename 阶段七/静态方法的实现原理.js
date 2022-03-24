// 指通过类访问 不能使用对象访问的方法，比如系统的Math.round()就是静态方法
// 一般来讲方法不需要对象属性参与计算就可以定义为静态方法

function User() {
 this.show = function (param) {
  console.log('show'); //这个方法存在于对象上 每new一个实例都会创建 不推荐 建议放到原型
 };
}
User.prototype.show1 = function () {
 console.log('show1');
};
User.view = function () {
 console.log('这是静态方法'); //不属于单独一个实例
};
let hd = new User();
hd.show(); //show
hd.show1(); //show1
console.log(hd);
console.dir(User); //view
//hd.view() //: hd.view is not a function

class User1 {
 constructor(name, age) {
  this.name = name;
  this.age = age;
 }
 static create(...arg) {
  return new User1(...arg);
 }
}
const a = User1.create('da', 18);
console.log(a); //User1 {name: "da", age: 18}


const data = [
 { name: "js", price: 100 },
 { name: "mysql", price: 212 },
 { name: "vue.js", price: 98 }
];
class Lesson {
 constructor(data) {
  this.model = data;
 }
 get price() {
  return this.model.price;
 }
 get name() {
  return this.model.name;
 }
 //批量生成对象
 static createBatch(data) {
  return data.map(item => new Lesson(item));
 }
 //最贵的课程
 static MaxPrice(collection) {
  return collection.sort((a, b) => b.price - a.price)[0];
 }
}
const lessons = Lesson.createBatch(data);
console.log(lessons);
console.log(Lesson.MaxPrice(lessons).name);