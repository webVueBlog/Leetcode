function Extend(sub, sup) {
 sub.prototype = Object.create(sup.prototype);
 Object.defineProperty(sub.prototype, 'constructor', {
  value: Admin,
  enumerable: false,
 });
}

function User(name, age) {
 this.name = name;
 this.age = age;
}
User.prototype.show = function () {
 console.log(this.name, this.age);
};

function Admin(...args) {
 User.apply(this, args);
}
Extend(Admin, User);

let admin = new Admin('da', 18);
admin.show();
