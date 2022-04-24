// 节流
// 函数节流:指规定一个单位时间，在这个单位时间内，只能有一次触发事件的回调函数执行，如果在同一个单位时间内事件被触发多次，只有一次能生效。

// 场景 节流可以使用scroll函数的事件监听上，通过事件节流来降低事件调用的频率

function throttle(fn, delay) {
 let curTime = Date.now(); // 当前时间

 return function() {
  // 回调函数执行
  let context = this, args = arguments, nowTIme = Date.now();

  // 如果两次时间间隔超过了指定时间，则执行函数
  if(nowTIme - curTime >= delay) {
   curTime = Data.now();
   return fn.apply(context, args);
  }
 }
}