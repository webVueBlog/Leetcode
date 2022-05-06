function fun(n, o) {
 console.log(o)
 return {
   fun: function(m){
     return fun(m, n);
   }
 };
}
var a = fun(0);  // undefined
a.fun(1);  // 1, 0
a.fun(2);  // 2, 0
a.fun(3);  // 3, 0

var b = fun(0).fun(1).fun(2).fun(3);

/**
fun(0, o).fun(1, o).fun(2, o).fun(3, o)
fun(0, o) {
 console.log(o)
 return {
  fun: function(m) {
   return fun(m, n);
  }
 }
}
 */

var c = fun(0).fun(1); // 1, 0
c.fun(2);  // 2, 1
c.fun(3);  // 3, 1


// undefined  0  0  0
// undefined  0  1  2
// undefined  0  1  1
