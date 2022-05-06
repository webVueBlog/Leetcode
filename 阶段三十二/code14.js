async function async1() {
 console.log("async1 start");
 await async2();
 console.log("async1 end");
 setTimeout(() => {
   console.log('timer1')
 }, 0)
}
async function async2() {
 setTimeout(() => {
   console.log('timer2')
 }, 0)
 console.log("async2");
}
async1();
setTimeout(() => {
 console.log('timer3')
}, 0)
console.log("start")

// async1 start
// async2
// start
// async1 end
// timer2
// timer3
// timer1