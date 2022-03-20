//访问器和普通属性操作是相通的，互撞的时候访问器优先级更高
const DATA = Symbol(); //唯一值
const user = {
 [DATA]: {
  name: 'name',
 },
 age: 10,
 //设置name
 set name(value) {
  this[DATA].name = value + 'dada';
 },
 get name() {
  return this[DATA].name;
 },
};
//又能设置属性 又能被访问器属性设置
user.name = 'dddd';
console.log(user.name); //dddddada 访问器优先级更高


//构造函数和类里面使用访问器
function User1(name, age) {
 // 变成私有属性
 let data = { name, age };
 // this.name = name;
 // this.age = age;
 Object.defineProperties(this, {
  name: {
   get() {
    return data.name
   },
   set(value) {
    data.name = value;
    console.log(value + 'set')
   }
  },
  age: {
   get() {
    return data.age
   },
   set(value) {
    data.age = value
   }
  }
 })
}

console.log(new User1('dada', 10)); // User1 {}


const DATA1 = Symbol();
class User2 {
 constructor(name, age) {
  this[DATA1] = { name, age };
 }
 get name() {
  return this[DATA1].name;
 }
 set name(value) { }
 get age() {
  return this[DATA1].age;
 }
 set age(value) {

 }
}
console.log(new User2('aa', 18)); // User2 { [Symbol()]: { name: 'aa', age: 18 } }


