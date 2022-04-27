let arr1 = [1,2,23,2]
let arr2 = [23,2,2,1]
console.log(...arr1); // 展开一个数组
let arr3 = [...arr1, ...arr2] // 连接数组

// 在函数中使用
function sum(...numbers) {
 return numbers.reduce((preValue, currentValue) => {
  return preValue + currentValue
 })
}
console.log(sum(1,2,3,4));
// 构造字面量对象时使用展开语法
let person = {name: 'tom', age: 18}
let person2 = {...person}
// console.log(...person); // 报错，展开运算符不能展开对象
person.name = 'da'
console.log(person2);
console.log(person);

// 合并
let person3 = {...person, name: 'j', address: '地址'}
console.log(person3)