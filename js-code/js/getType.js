// 手写类型判断函数
function getType(value) {
 // 判断数据是null的情况
 if(value === null) {
  return 'object';
 }
 // 判断数据是引用类型的情况
 if(typeof value === 'object') {
  let valueClass = Object.prototype.toString.call(value),
  type = valueClass.split(" ")[1].split("");

  console.log('v', valueClass)
  console.log('v split', valueClass.split(" "))
  console.log('v split 1', valueClass.split(" ")[1])
  console.log('v split 1 split', valueClass.split(" ")[1].split(""))

  type.pop();
  console.log('v pop', type, type.join("").toLowerCase())

  return type.join("").toLowerCase();
 } else {
  // 判断数据是基本数据类型的情况和函数的情况
  return typeof value;
 }
}

console.log(typeof null); // object
console.log(typeof undefined); // undefined
console.log(typeof [1,2,3]); // object
// expected output: "number"

// console.log(typeof 'blubber');
// expected output: "string"

// console.log(typeof true);
// expected output: "boolean"

// console.log(typeof undeclaredVariable);
// expected output: "undefined"

// console.log(getType(12))
// console.log(getType(null))
// console.log(getType(undefined))
console.log(getType('blubber'))
console.log(getType(true))
console.log(getType({ age: 12, job: 'it' }))
console.log(getType([1,2,3])) // array

