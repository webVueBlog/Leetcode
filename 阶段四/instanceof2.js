function A() { }
function B() { }
function C() { }

let c = new C()
B.prototype = c

let b = new B();
A.prototype = b;

let a = new A();

console.log(a instanceof B); //true
console.log(a.__proto__.__proto__ === B.prototype); //true
console.log(A.prototype === b); //true
console.log(a instanceof C); //true
