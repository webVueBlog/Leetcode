/**
 * 1. 防抖：当事件持续触发，函数是不会执行的，等最后一次触发结束一段时间之后再去执行。
 * 特点：持续触发不执行，触发之后一段时间再执行*/

function fangDou(fn, delay) {
 let timer;
 return function () {
  clearTimeout(timer); // //如果持续触发就清除定时器
  timer = setTimeout(() => {
   console.log(this, arguments); // window
   fn.apply(this, arguments);
  }, delay);
 };
}

box = fangDou(function (e) {
 console.log(2000)
}, 1000)

/**
 * 2.节流：在一段时间内 只执行一次
 * 特点：持续触发并不会执行多次，到一定时间再去执行
 * 关键点：执行的时机，通过一个开关 */

function jieLiu(fn, delay) {
 let flag = true;
 return function () {
  if (!flag) {
   return;
  }
  flag = false;
  setTimeout(() => {
   fn.apply(this, arguments);
   flag = true;
  }, delay);
 };
}
box1 = jieLiu(function (e) {
 console.log(20000);
}, 1000);








