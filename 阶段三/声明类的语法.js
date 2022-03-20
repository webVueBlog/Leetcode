class User {
 // constructor 会在 new 时自动执行，我们可以用它来做参数的初始化
 constructor(name) {
  this.name = name;
 }
 show() {
  return this.name
 }
 get() {
  console.log('constructor自动初始化')
 }
}

console.log(typeof User); // function

let p1 = new User('da');
p1.get(); // constructor自动初始化
console.log(p1.show()); // da

console.log(User.prototype === p1.__proto__); // true
console.log(User.prototype.constructor === User) // true

let p = class { };
console.log(typeof p); // function


