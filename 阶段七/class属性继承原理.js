function User(name) {
 this.name = name;
 this.show = function () {
  console.log(this.name);
 };
}
User.prototype.view = function () {
 console.log(this.name + 'xx');
};
function Admin(name) {
 this.name = name;
 // User.call(this, name);  //继承
}
Admin.prototype = Object.create(User.prototype); //继承
let hd = new Admin('da');
hd.view(); //daxx
//hd.show(); //报错
console.log(hd);



class User1 {
 constructor(name1) {
  this.name1 = name1;
 }
}
class Admin1 extends User1 {
 constructor(name1) {
  //这就解释了为什么在子类构造函数中要先执行super super会调用父类中的构造函数
  super(name1);
 }
}
let hd2 = new Admin1("da");
console.log(hd2); //Admin1 {name1: "da"}