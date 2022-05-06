async function async1 () {
 await async2();
 console.log('async1');
 return 'async1 success'
}
async function async2 () {
 return new Promise((resolve, reject) => {
   console.log('async2')
   reject('error')
 })
}
async1().then(res => console.log(res))

// async2
// (node:3572) UnhandledPromiseRejectionWarning: error