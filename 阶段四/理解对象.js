// 1.创建对象的方法
var person = new Object();
person.name = 'aaa';
person.age = 1;
person.job = 'dd';
person.sayName = function () {
 console.log(this.name);
};
person.sayName();

// 2.对象字面量
var person1 = {
 name: 'bbb',
 age: 1,
 job: 'fe',
 sayName: function () {
  console.log(this.name);
 },
};
person1.sayName();

// 对象属性类型  ECMAScript有两种属性：数据属性和访问器属性
// 1.数据属性 Configurable Enumerable Writable Value
// Configurable：表示能否通过delete删除属性从而重新定义属性，能否修改属性的特性，能否把属性修改为访问器属性。默认true,一旦设置为false 就不能再变为可配置得了
// Enumerable：表示能否通过for-in循环返回属性 默认true
// Writable ：能否修改属性的值 默认true
// 要修改属性的默认的特性 需要 Object.defineProperty()
// 在调用Object.defineProperty()创建一个新属性的时候，三种特性都默认为false

Object.defineProperty(person1, 'name', {
 writable: false, // 更改为只读
});

person1.name = 'xxx';
person1.sayName();

// 2.访问器属性(包含一对getter 和 setter函数)
// 访问器有如下四个特性 Configurable Enumerable get(在读取属性时候调用的函数) set(在设置属性时候调用的函数)
// 访问器不能直接定义,必须使用Object.defineProperty来定义

var book = {
 _year: 2004, //year前面的_ 表示只能通过对象方法访问的属性
 edition: 1,
};

var book = {
 _year: 2004, //year前面的_ 表示只能通过对象方法访问的属性
 edition: 1,
};
Object.defineProperty(book, 'year', {
 //'year' 就是访问器属性
 get: function () {
  return this._year;
 },
 set: function (newYear) {
  // console.log(newYear);
  if (newYear > 2004) {
   this._year = newYear;
   this.edition = 2;
  }
 },
});
book.year = 2021;
console.log(book.year);


// 定义了两个数据属性(_age和edition) 和一个访问器属性age
let da = {};
Object.defineProperties(ybz, {
 age1: {
  writable: true,
  value: 18,
 },
 edition: {
  writable: true,
  value: 1,
 },
 dd: {
  get: function () {
   return this.age;
  },
  set: function (newage) {
   this.age = newage;
  },
 },
});
da.age1 = 19;
console.log(da.age1); //19
