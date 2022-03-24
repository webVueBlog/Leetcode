//原型的继承 而不是改变构造函数的原型
function User(param) {
 // this.name = function () {
 //   console.log('user name method');
 // };
}
User.prototype.name = function () {
 console.log('user name method');
};
let hd = new User();
hd.name(); // user name method
console.log(hd); //User {name: ƒ}

function Admin() { }
// Admin.prototype = User.prototype;  //直接改变构造函数的原型是不对的
Admin.prototype.__proto__ = User.prototype
let admin = new Admin();

admin.name(); // user name method
