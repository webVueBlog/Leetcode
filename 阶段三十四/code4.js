function fn1(){
   console.log('fn1')
 }
 var fn2
  
 fn1()
 fn2()
  
 fn2 = function() {
   console.log('fn2')
 }
  
 fn2()
 

//  fn1
// Uncaught TypeError: fn2 is not a function
// fn2
