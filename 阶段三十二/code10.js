function runAsync (x) {
 const p = new Promise(r => 
  setTimeout(() => 
   r(x, console.log(x)
  ), 1000)
 )
 return p
}
function runReject (x) {
 const p = new Promise((res, rej) => 
 setTimeout(() => rej(`Error: ${x}`, console.log(x)), 1000 * x)
 )
 return p
}
Promise.all([runAsync(1), runReject(4), runAsync(3), runReject(2)])
      .then(res => console.log(res))
      .catch(err => console.log(err))

// // 1s后输出
// 1
// 3
// // 2s后输出
// 2
// Error: 2
// // 4s后输出
// 4
