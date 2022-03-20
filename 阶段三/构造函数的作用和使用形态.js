function Da() {
 let n = 1;
 this.sum = function () {
  console.log(++n);
 };
}

// 每次new 都会产生一个新空间
let a = new Da();
// 构造函数中的变量也会被保存的 为每个对象保存一份
a.sum(); // 2;
a.sum(); // 3;
a.sum(); // 4;

let b = new Da();
b.sum(); // 2
b.sum(); // 3
b.sum(); // 4
b.sum(); // 5

function Daa(param) {
 let n = 1
 return n
}

let c = new Daa('jeskson');
console.log(c)