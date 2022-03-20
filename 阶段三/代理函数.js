function fun(num) {
 return num === 1 ? 1 : num * 2;
}

let proxy = new Proxy(fun, {
 apply(func, obj, args) {
  console.log(func);
  console.log(obj);
  console.log(args);
 }
});

proxy(3);
// [Function: fun]
// undefined
// [3]

function fun1(num) {
 return num === 1 ? 1 : num * 2;
}

let proxy1 = new Proxy(fun1, {
 apply(fun1, obj, args) {
  console.log(fun1);
  console.log(obj);
  console.log(args);
 }
});

console.log(proxy1(3))