// executor为执行者
// 当执行者异常的时候触发拒绝状态
// 使用静态属性存储默认值
// 状态只能改变一次，所以要早resolve和reject里面加判断
// 因为 resolve 和reject在执行者里面调用，作用域是不会继承this的
// 所以需要改变this指向

// then可以有两个参数， 成功和错误的回调函数
// then的函数参数都不是必须的，所以需要设置默认值为函数
// 当传递then发生异常统一交给onRejected来处理

// then方法需要处理promise为pending时的状态：
//1.在构造函数中添加callback来保存pending的状态处理函数，当状态改变时循环调用 
//2.将then方法的回调函数添加到callback数组中，用于异步执行。
//3. resolve 与reject函数中添加处理callback的方法

//Promise中的then是链式调用执行的，所以then也要返回Promise才能实现
//then的onReject函数是对前面Promise的rejected的处理
//但该Promise返回状态要为fulfilled，所以在调用onRejected后改变当前promise为fulfilled状态

//如果then返回promise 需要判断分别处理返回值为promise与普通值的情况

//then的返回的promise不能是then相同的Promise 

