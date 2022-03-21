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
Admin.prototype = Object.create(User.prototype); //继承User

let da = new Admin('da', 18);
da.show();
