/**

承诺必须提供一种then方法来访问其当前或最终的价值或原因。

Promise 的then方法接受两个参数：

promise.then(onFulfilled, onRejected)

onFulfilled和都是onRejected可选参数：
如果onFulfilled不是函数，则必须忽略它。
如果onRejected不是函数，则必须忽略它。

如果onFulfilled是一个函数：
它必须在promise完成后调用，并以promise' 值作为它的第一个参数。
在完成之前不能调用它promise。
不能多次调用它。

如果onRejected是一个函数，
它必须在promise被拒绝后被调用，并以promise' 的理由作为它的第一个参数。
promise在被拒绝之前不能调用它。
不能多次调用它。


onFulfilled并且onRejected必须作为函数调用（即没有this值）

then可以在同一个 Promise 上多次调用。
如果/何时promise满足，所有相应onFulfilled的回调必须按照它们对then.
如果/何时promise被拒绝，所有相应onRejected的回调必须按照它们对then.


promise2 = promise1.then(onFulfilled, onRejected);


如果其中一个onFulfilled或onRejected返回一个值x，则运行 Promise Resolution Procedure [[Resolve]](promise2, x)。
如果其中一个onFulfilled或onRejected抛出异常e，则promise2必须以拒绝e为理由。
如果onFulfilled不是一个函数并且promise1被满足，则promise2必须以与 相同的值来满足promise1。
如果onRejected不是函数并且promise1被拒绝，则promise2必须以与 相同的原因被拒绝promise1。


*/