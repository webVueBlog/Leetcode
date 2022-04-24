// Promise.race(iterable) 方法返回一个 promise，一旦迭代器中的某个promise解决或拒绝，返回的promise就会解决或拒绝

function promiseRace(promises) {
 return new Promise(function(resolve, reject) {
  // 返回一个promise
  if(!Array.isArray(promises)) {
   // 判断参数是否为数组
   throw new TypeError(`argument must be a array`)
  }
  var promiseNum = promises.length; // 获取数组的长度
  for(let i = 0; i < promiseNum; i++) {

   Promise.resolve(promises[i]).then(value => {
     return resolve(value)
   }, error => {
    return reject(error)
   })

  }

 })

 // return new Promise(function(resolve, reject) {
 //  if(!Array.isArray(promises)) {
 //   throw new TypeError(`argument must be a array`)
 //  }
 //  var promiseNum = promises.length; // 获取数组的长度
 //  for(let i = 0; i < promiseNum; i++) {
 //   Promise.resolve(promises[i]).then(value => {
 //    return resolve(value)
 //   }, error => {
 //    return reject(error)
 //   })
 //  }
 // })
}

const promise1 = new Promise((resolve, reject) => {
 setTimeout(resolve, 500, 'one');
});

const promise2 = new Promise((resolve, reject) => {
 setTimeout(reject, 100, 'two');
});

Promise.race([promise1, promise2]).then((value) => {
 console.log(value);
 // Both resolve, but promise2 is faster
},(error) => {
 console.log(error);
});
// expected output: "two"

promiseRace([promise1, promise2]).then((value) => {
 console.log(value);
 // Both resolve, but promise2 is faster
},(error) => {
 console.log(error);
});
