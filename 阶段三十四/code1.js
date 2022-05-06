(function(){
 var x = y = 1;
})();
var z;

console.log(y); // 1
console.log(z); // undefined
console.log(x); // Uncaught ReferenceError: x is not defined
// x是一个局部变量，y是一个全局变量，所以打印x是报错。