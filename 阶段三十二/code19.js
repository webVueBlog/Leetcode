async function async1 () {
 await Promise.reject('error!!!').catch(e => console.log(e))
 console.log('async1');
 return Promise.resolve('async1 success')
}
async1().then(res => console.log(res))
console.log('script start')


// script start
// error!!!
// async1
// async1 success