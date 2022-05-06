window.number = 2;
var obj = {
 number: 3,
 db1: (function(){
   console.log(this);
   this.number *= 4;
   return function(){
     console.log(this);
     this.number *= 5;
   }
 })()
}
var db1 = obj.db1;

db1();
obj.db1();
console.log(obj.number);     // 15
console.log(window.number);  // 40
