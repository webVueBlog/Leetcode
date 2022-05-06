async function async1 () {
 console.log('async1 start');
 await new Promise(resolve => {
   console.log('promise1')
   resolve('promise1 resolve')
 }).then(res => console.log(res))
 console.log('async1 success');
 return 'async1 end'
}
console.log('srcipt start')
async1().then(res => console.log(res))
console.log('srcipt end')


// srcipt start
// async1 start
// promise1
// srcipt end
// promise1 resolve
// async1 success
// async1 end