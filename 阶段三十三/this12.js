var a = 10; 
var obt = { 
  a: 20, 
  fn: function(){ 
    var a = 30; 
    console.log(this.a)
  } 
}
obt.fn();  // 20
obt.fn.call(); // 10
(obt.fn)(); // 20


// 20 10 20