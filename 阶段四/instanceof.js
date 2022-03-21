// 使用 instanceof 用于检测
// instanceof 运算符用于检测 构造函数的 prototype 属性是否出现在某个实例对象的原型链上。
function User2() { }
function Admin4() { }
Admin4.prototype = Object.create(User2.prototype);
let hd = new Admin4();
console.log(hd instanceof Admin4); //true
console.log(hd instanceof User2); //true

console.log(hd.__proto__ == Admin4.prototype); //true
console.log(hd.__proto__.__proto__ == User2.prototype); //true

// 递归检测原型的代码
function checkPrototype(obj, constructor) {
 if (!obj.__proto__) return false;
 if (obj.__proto__ == constructor.prototype) return true;
 return checkPrototype(obj.__proto__, constructor);
}

console.log(checkPrototype(hd, Admin4)); //true

