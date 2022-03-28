// 借助 cookie, localStorage(sessionStorage 在某些场景下并不能跨标签， 必须要原页面的 a 标签的 target = _blank 才行)。 这些只要在同一个域名下就可以进行通信和数据的共享
// 借助 window.postMessage API 来进行消息的传递