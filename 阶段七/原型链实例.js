Function.prototype.a = () => console.log(1)

Object.prototype.b = () => console.log(2)

function A() { }

var a = new A();

console.log(A.__proto__ === Function.prototype)  // true

console.log(Function.prototype.__proto__ === Object.prototype) // true

