const PENDING = 'pending'
const RESOLVED = 'resolved'
const REJECTED = 'rejected'

function MyPromise(fn) {
  // 保存初始化状态
  var self = this
  // 初始化状态
  this.state = PENDING
  // 用于保存 fulfilled 或者 rejected 传入的值
  this.value = null
  // 用于保存 resolve 的回调函数
  this.resolvedCallbacks = []
  // 用于保存 reject 的回调函数
  this.rejectedCallbacks = []

  // 状态转变为resolved方法
  function resolve(value) {
    // 判断传入元素是否为Promise值，如果是，则状态改变必须等待前一个状态改变后再进行改变
    if (value instanceof MyPromise) {
      // promise.then()
      return value.then(resolve, reject)
    }

    // 保证代码的执行顺序为本轮事件循环的末尾
    setTimeout(() => {
      // 只有状态为 pending 时才能转变
      if (self.state === PENDING) {
        // 修改状态
        self.state = RESOLVED
        // 设置传入的值
        self.value = value
        // 执行回调函数
        self.resolvedCallbacks.forEach((callback) => {
          callback(value)
        })
      }
    }, 0)
  }

  // 状态转变为rejected方法
  function reject(value) {
    // 保证代码的执行顺序为本轮事件循环的末尾
    setTimeout(() => {
      // 只有状态为 pending 时才能转变
      if (self.state === PENDING) {
        // 修改状态
        self.state = REJECTED
        // 设置传入的值
        self.value = value
        // 执行回调函数
        self.rejectedCallbacks.forEach((callback) => {
          callback(value)
        })
      }
    }, 0)
  }

  // 将两个方法传入函数执行
  try {
    fn(resolve, reject)
  } catch (e) {
    // 遇到错误时，捕获错误，执行reject参数
    reject(e)
  }

  MyPromise.prototype.then = function (onResolved, onRejected) {
    // 首先判断两个参数是否为 函数类型，因为这两个参数是 可选参数
    onResolved =
      typeof onResolved === 'function' ? onResolved : (value) => { return value }

    onRejected =
      typeof onRejected === 'function' ? onRejected : (error) => { return error }

    //如果是等待状态，则将函数加入对应列表中
    if (this.state === PENDING) {
      this.resolvedCallbacks.push(onResolved)
      this.rejectedCallbacks.push(onRejected)
    }

    // 如果状态已经凝固，则直接执行对应状态的函数
    if (this.state === RESOLVED) {
      onResolved(this.value)
    }

    if (this.state === REJECTED) {
      onRejected(this.value)
    }
  }
}

/**

const myFistPromise = new Promise((resolve, reject) => {
 // resolve(value) // fulfilled
 // 或
 // reject(reason) // rejected
});

 */
