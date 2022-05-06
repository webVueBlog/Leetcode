function a() {
 var temp = 10;
 function b() {
     console.log(temp); // 10
 }
 b();
}

a();





function a() {
 var temp = 10;
 b();
}
function b() {
 console.log(temp); // 报错 Uncaught ReferenceError: temp is not defined
}
a();
