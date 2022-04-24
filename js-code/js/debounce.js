// 所有按钮加上防抖
// 防抖是指在事件被触发n秒后再次执行回调，如果在这个n秒内事件又被触发，则重新计时

function debounce(fn, wait) {
 // fn函数，wait等待秒数
 let timer = null; // 用于重新计时

 return function() {
  // 返回一个回调执行函数
  let context = this, args = arguments;

  // 如果此时存在定时器的话，则取消之前的定时器重新计时
  if(timer) {
   clearTimeout(timer);
   timer = null;
  }

  // 设置定时器，使时间间隔指定事件后执行
  timer = setTimeout(() =>{
   fn.apply(context, args)
  }, wait)
 }
}