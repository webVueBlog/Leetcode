const promise1 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve('success')
  }, 1000)
})
const promise2 = promise1.then(() => {
  throw new Error('error!!!')
})
console.log('promise1', promise1)
console.log('promise2', promise2)
setTimeout(() => {
  console.log('promise1', promise1)
  console.log('promise2', promise2)
}, 2000)


// promise1 Promise {<pending>}
// promise2 Promise {<pending>}

// Uncaught (in promise) Error: error!!!
// promise1 Promise {<fulfilled>: "success"}
// promise2 Promise {<rejected>: Error: error!!}
