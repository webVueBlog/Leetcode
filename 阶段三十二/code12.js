function runAsync(x) {
 const p = new Promise(r =>
   setTimeout(() => r(x, console.log(x)), 1000)
 );
 return p;
}
function runReject(x) {
 const p = new Promise((res, rej) =>
   setTimeout(() => rej(`Error: ${x}`, console.log(x)), 1000 * x)
 );
 return p;
}
Promise.race([runReject(0), runAsync(1), runAsync(2), runAsync(3)])
 .then(res => console.log("result: ", res))
 .catch(err => console.log(err));

//  0
// Error: 0
// 1
// 2
// 3