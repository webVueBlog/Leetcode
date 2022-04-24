// then方法返回一个新的promise实例
// promise状态发生变化时 (resolve / reject 被调用时) 再执行then里的函数

then(onFulfilled, onReject) {
 // 保存前一个promise的this
 const self = this;

 return new MyPromise((resolve,reject) => {
  // 封装前一个promise成功时执行的函数
  let fulfilled = () => {
   try {
    const result = onFulfilled(self.value); // 承前
    return result instanceof MyPromise ? result.then(resolve, reject) : resolve(result) 
   } catch (err) {
    reject(err)
   }
  }

  // 封装前一个promise失败时执行的函数
  let rejected = () => {
   try{
    const result = onReject(self.reason);
    return result instanceof MyPromise ? result.then(resolve, reject) : reject(result)
   } catch(err) {
    reject(err)
   }
  }

  switch(self.status) {
   case PENDING:
    self.onFulfilledCallbacks.push(fulfilled);
    self.onRejectedCallbacks.push(reject);
    break;
   case FULFILLED: 
    fulfilled();
    break;
   case REJECT:
    rejected();
    break;
  }
  
 })
}