// 接收一个Promie实例的数组或具有Iterator接口的对象作为参数
// 这个方法返回一个新的promise对象
// 遍历传入的参数，用Promise.resolve()将参数"包一层",使其变成一个promise对象
// 参数所有回调成功才是成功，返回值数组与参数顺序一致
// 参数数组其中一个失败，则触发失败状态，第一个触发失败的Promise错误信息作为Promise.all的错误信息

// Promise.all 用来处理多个并发请求，也是为了页面数据构造的方便

function promiseAll(promises) {
 return new Promise(function(resolve, reject) {
  // 返回一个promise
  if(!Array.isArray(promises)) {
   // 判断参数是否为数组
   throw new TypeError(`argument must be a array`)
  }
  var resolvedCounter = 0; // 计算数量到达数组的长度

  var resolvedResult = []; // 得到的结果
  var promiseNum = promises.length; // 获取数组的长度

  for(let i = 0; i < promiseNum; i++) {

   Promise.resolve(promises[i]).then(value => {
    resolvedCounter++;
    resolvedResult[i] = value; // 放到结果数组里
    // 判断是否是时候了
    if(resolvedCounter === promiseNum) {
     return resolve(resolvedResult) // 获取所有值进行return
    }
   }, error => {
    return reject(error)
   })

  }

 })
}

let p1 = new Promise(function(resolve, reject) {
 setTimeout(function() {
  resolve(1)
 }, 1000)
})

let p2 = new Promise(function(resolve, reject) {
 setTimeout(function() {
  resolve(2)
 }, 2000)
})

let p3 = new Promise(function(resolve, reject) {
 setTimeout(function() {
  resolve(3)
 }, 3000)
})

promiseAll([p1, p2, p3]).then(res => {
 console.log(res) // [ 1, 2, 3 ]
})