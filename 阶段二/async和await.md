主要考察宏任务和微任务，搭配promise，询问一些输出的顺序

原理：async 和 await 用了同步的方式去做异步，async 定义的函数的返回值都是 promise，await 后面的函数会执行，然后就会跳出整个 async 函数来执行后面js栈的代码