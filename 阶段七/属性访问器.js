// __proto__ 不算一个属性 是一个 getter setter
let hd = {
 name: 'da',
};
hd.__proto__ = {
 show() {
  console.log(this.name);
 },
};
hd.__proto__ = 99; //自动忽略 如果是个对象才会执行
hd.show(); // da
console.log(hd.__proto__); //show: ƒ show()
//{ show: [Function: show] }

//伪代码
// let hd1 = {
//   action: {},
//   get proto() {
//     return this.action
//   },
//   get proto(obj) {
//     if (obj instanceof Object) {
//       this.action = obj
//     }
//   }
// };
// console.log(hd1);
let da = {};
console.log(da); // {}

//如果就是像给__proto__设置基本类型
let a = Object.create(null);
a.__proto__ = 'b';
console.log(a.__proto__); //b
