/**

Boolean 是对应布尔值的引用类型。

let booleanObject = new Boolean(true);

Boolean 的实例会重写 valueOf()方法，返回一个原始值 true 或 false。

let falseObject = new Boolean(false); 
console.log(falseObject);
VM1120:2 Boolean {false}
undefined
let falseObject = new Boolean(false);
let result = falseObject && true;
console.log(result); // true 
VM1124:3 true

let falseValue = false;
result = falseValue && true;
console.log(result); // false 

console.log(typeof falseObject); // object
console.log(typeof falseValue); // boolean
console.log(falseObject instanceof Boolean); // true
console.log(falseValue instanceof Boolean); // false

*/