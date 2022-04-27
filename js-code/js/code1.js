// 实现每隔一秒打印 1,2,3,4

// 闭包实现
for(var i = 0; i < 5; i++) {
 (function(i) {
  setTimeout(function() {
   console.log(i)
  }, i*1000)
 })(i)
}

for(let i = 0; i < 5; i++) {
 setTimeout(function() {
  console.log(i)
 }, i * 1000)
}