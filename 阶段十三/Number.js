/**
Number 是对应数值的引用类型。

let numberObject = new Number(10);

Number 类型重写了 valueOf()、toLocaleString()和 toString()方法。valueOf()方法返回 Number 对象表示的原始数值，另外两个方法返回数值字符串。


let num = 10;
console.log(num.toString()); // "10"
console.log(num.toString(2)); // "1010"
console.log(num.toString(8)); // "12"
console.log(num.toString(10)); // "10"
console.log(num.toString(16)); // "a"


toFixed()方法返回包含指定小数点位数的数值字符串

let num = 10;
console.log(num.toFixed(2)); // "10.00"

let num = 10.005;
console.log(num.toFixed(2)); // "10.01"

则四舍五入

toFixed()自动舍入的特点可以用于处理货币。


比如，0.1 + 0.2 = 0.30000000000000004。


toExponential()也接收一个参数，表示结果中小数的位数。

let num = 10;
console.log(num.toExponential(1)); // "1.0e+1"

toPrecision()方法会根据情况返回最合理的输出结果，可能是固定长度，也可能是科学记数法形式。

let num = 99;
console.log(num.toPrecision(1)); // "1e+2"
console.log(num.toPrecision(2)); // "99"
console.log(num.toPrecision(3)); // "99.0"

let numberObject = new Number(10);
let numberValue = 10;
console.log(typeof numberObject); // "object"
console.log(typeof numberValue); // "number"
console.log(numberObject instanceof Number); // true
console.log(numberValue instanceof Number); // false

isInteger()方法与安全整数

ES6 新增了 Number.isInteger()方法，用于辨别一个数值是否保存为整数

console.log(Number.isInteger(1)); // true
console.log(Number.isInteger(1.00)); // true
console.log(Number.isInteger(1.01)); // false


*/