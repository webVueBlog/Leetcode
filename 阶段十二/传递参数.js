/**

ECMAScript 中所有函数的参数都是按值传递的。

变量有按值和按引用访问，而传参则只有按值传递。

在按值传递参数时，值会被复制到一个局部变量（即一个命名参数，或者用 ECMAScript 的话说，就是 arguments 对象中的一个槽位）。在按引用传递参数时，值在内存中的位置会被保存在一个局部变量，这意味着对本地变量的修改会反映到函数外部。

function addTen(num) { 
 num += 10; 
 return num; 
} 
let count = 20;

let result = addTen(count); 
console.log(count); // 20，没有变化
console.log(result); // 30


function setName(obj) { 
 obj.name = "Nicholas"; 
} 
let person = new Object(); 
setName(person); 
console.log(person.name); // "Nicholas"


function setName(obj) { 
 obj.name = "Nicholas"; 
obj = new Object(); 
obj.name = "Greg"; 
} 
let person = new Object(); 
setName(person); 
console.log(person.name); // "Nicholas"


当 obj 在函数内部被重写时，它变成了一个指向本地对象的指针。而那个本地对象在函数执行结束时就被销毁了。

*/

function setName(obj) {
    obj.name = "Nicholas";
    obj = new Object();
    obj.name = "Greg";
    console.log(obj.name)
}
let person = new Object();
setName(person);
console.log(person.name); // "Nicholas"