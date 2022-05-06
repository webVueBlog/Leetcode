var a, b
(function () {
   console.log(a);
   console.log(b);
   var a = (b = 3);
   console.log(a);
   console.log(b);   
})()
console.log(a);
console.log(b);


// undefined 
// undefined 
// 3 
// 3 
// undefined 
// 3
