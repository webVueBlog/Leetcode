//js中的所有函数的参数都是按值传递的

function setName(obj) {
 obj.name = 'jeskson';
 obj.str = 'okok';
}

// 创建一个 person 对象

var person = new Object();
setName(person);

person.age = 9;
console.log('person', person);
// person { name: 'jeskson', str: 'okok', age: 9 }

function setName1(obj) {
   //共享传递 按引用传递是传递对象的引用，而按共享传递是传递对象的引用的副本！ 拷贝副本也是一种值的拷贝，所以在过程中也直接认为是按值传递了。
 obj.name = 'jeskson';
 obj.str = 'kkk';
 //有一个新对象被赋值给obj
  //即使在函数内部修改了参数的值，但原始的引用仍然保持未变
  // 在函数内部重写obj的时候，这个变量引用变为了一个局部对象
  //这个局部对象会在函数执行完毕后被立即销毁
 obj = new Object();
 //说明在函数内部修改了参数的值原始引用仍未改变
 obj.name = 'dada';
}
// 创建了一个 person 对象
var person1 = new Object();
// 这个变量被传递到setName()
// 在这个函数中 obj和person引用的是同一个对象
// 即使这个变量是按值传递的 obj也会按照引用来访问同一个对象
setName1(person1);
console.log(person1); // { name: 'jeskson', str: 'kkk' }

let arr = [1, 2, 3]
let obj = {}
function modify(arrTemp, objTemp) {
 arrTemp = []
 objTemp.b = 2
 objTemp = { a: 3 }
}
modify(arr, obj)
console.log(arr);
console.log(obj);

// [ 1, 2, 3 ]
// { b: 2 }