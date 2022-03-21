function User() { }

let da = new User();

console.log(da.__proto__ === User.prototype); // true

console.log(da.__proto__.constructor === User); // true

console.log(da.__proto__.__proto__ === Object.prototype); // true
