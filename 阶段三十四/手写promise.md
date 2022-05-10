一起养成写作习惯！5月10/31

1. promise是具有then行为符合本规范的方法或函数
2. thenable是定义then方法的对象或函数
3. value是任何合法的js值(undefined, thenable, promise)
4. 异常是使用throw语句抛出的值
5. reason是一个值，表示一个承诺被拒绝的原因

`npm init -y`

`npm i promises-aplus-tests -D`

adapter适配器

```js
var promisesAplusTests = require('promises-aplus-tests');
promisesAplusTests(adapter, function(err) {});

promisesAplusTests(adapter, {reporter: 'dot'}, function(err) {
	
})
```

```js
./node_modules/.bin/promises-aplus-tests src/promise.js
```

<!-- 872 passing (49s)

测试用例调用失败 null -->

## **index.js**

```js
const Promise = require('./promise')
// new Promise传函数， then方法
// 第一个成功 100
// 第二个promise成功 100
let p = new Promise((resolve, reject) => {
	// throw '出现错误' // 抛出错误处理
	
	// resolved状态
	// resolve(100);
	
	// pending状态
	setTimeout(() => {
		resolve(100); // 函数存起来
		// reject('失败hh')
	}, 1000);
	
	// rejected状态
	
	// reject('失败')
}).then(data => { // then() 方法 参数成功回调函数，失败回调函数
	console.log('第一个成功', data); // undefined
	// return data // 100
	
	// return p // 返回自己死循环
	
	// return new OtherPromise((resolve) => {
	// 	resolve('别人的promise')
	// })
	
	// 需要递归去处理
	// return new Promise((resolve, reject) => {
	// 	resolve(new Promise((resolve, reject) => {
	// 		resolve(data);
	// 	}))
	// })
}, reason => {
	console.log('第一个失败', reason);
	// return reason;
	throw '错误错误'
}).then(data => { // then() 方法 参数成功回调，失败回调 // promise 才能调用then
	console.log('第二个promise成功', data);
}, reason => {
	console.log('第二个promise失败', reason);
})

```

```js
const PENDING = 'pending';
const RESOLVED = 'resolved';
const REJECTED = 'rejected';
class Promise {
	constructor(executor) {
	    // console.log('我的promise');
		this.status = PENDING;
		this.value = null;
		this.reason = null;
		this.resolveCallbacks = []; // 存函数
		this.rejectCallbacks = [];
		// new Promise((resolve, reject) => {})
		try{
			executor(this.resolve.bind(this), this.reject.bind(this));
		}catch(e){
			//TODO handle the exception
			this.reject(e)
		}
	}
	// resolve() 函数
	resolve(value) {
		// 调用 resolve的时候，状态 resolved
		if(this.status === PENDING) {
			this.value = value;
			this.status = RESOLVED;
			this.resolveCallbacks.forEach(onFulfilled => {
				onFulfilled();
			})
		}
	}
	// reject()
	reject(reason) {
		// 调用 reject的时候，状态 rejected
		if(this.status === PENDING) {
			this.reason = reason;
			this.status = REJECTED;
			this.rejectCallbacks.forEach(onRejected => {
				onRejected();
			})
		}
	}
	then(onFulfilled, onRejected) {
		// 链表 onFulfilled onRejected 这两个可以都不传
		// 透传现象
		onFulfilled = typeof onFulfilled === 'function'  ? onFulfilled : data => data;
		onRejected = typeof onRejected === 'function' ? onRejected : err => { throw err };
		// then().then(参数)
		// console.log('then状态', this.status);
		let promise2 = new Promise((resolve, reject) => {
			if (this.status === PENDING) {
				// this.resolveCallbacks.push(onFulfilled);
				this.resolveCallbacks.push(() => {
					setTimeout(() => {
						// console.log('外面执行完', promise2)
						try{
							let x = onFulfilled(this.value);
							// 解析promise 判断是不是死循环, return Promise
							resolvePromise(x, promise2, resolve, reject);
						}catch(e){
							//TODO handle the exception
							// 如果报错的话，就当你失败
							reject(e)
						}
					});
				})
				this.rejectCallbacks.push(() => {
					setTimeout(() => {
						// console.log('外面执行完', promise2)
						try{
							let x = onRejected(this.reason);
							// 解析promise 判断是不是死循环, return Promise
							resolvePromise(x, promise2, resolve, reject);
						}catch(e){
							//TODO handle the exception
							// 如果报错的话，就当你失败
							reject(e);
						}
					});
				});
			}
			if (this.status === RESOLVED) {
				setTimeout(() => {
					// console.log('外面执行完', promise2)
					try{
						let x = onFulfilled(this.value);
						// 解析promise 判断是不是死循环, return Promise
						resolvePromise(x, promise2, resolve, reject);
					}catch(e){
						//TODO handle the exception
						// 如果报错的话，就当你失败
						reject(e)
					}
				});
			}
			if (this.status === REJECTED) {
				setTimeout(() => {
					// console.log('外面执行完', promise2)
					try{
						let x = onRejected(this.reason);
						// 解析promise 判断是不是死循环, return Promise
						resolvePromise(x, promise2, resolve, reject);
					}catch(e){
						//TODO handle the exception
						// 如果报错的话，就当你失败
						reject(e);
					}
				});
			}
		})
		return promise2;
	}
}

function resolvePromise(x, promise2, resolve, reject) {
	// 调用第一个Promise是我们的promise，第二个就不一定了。
	if (x === promise2) {
		return reject(new TypeError('Chaining cycle detected for permise!'));
	}
	// 如何判断它是promise
	// promise is an object or function with a then method whose behavior conforms to this specification.
	if (x && (typeof x === 'object' || typeof x === 'function')) {
		// 有没有调过
		let called;
		try{
			let then = x.then; // Object.defineProperty
			// 如果不是function调用会报错
			if (typeof then === 'function') {
				then.call(x, value => {
					if (called) return;
					called = true;
					
					resolvePromise(value, promise2, resolve, reject);
				}, reason => {
					if (called) return;
					called = true;
					reject(reason);
				}) // x.then
			} else {
				// 当成普通值
				resolve(x)
			}
		}catch(e){
			if (called) return;
			called = true;
			//TODO handle the exception
			reject(e); // 就算是promise不管
		}
	} else {
		resolve(x);
	}
}

Promise.deferred = function() {
	let defferred = {};
	defferred.promise = new Promise((resolve, reject) => {
		defferred.resolve = resolve;
		defferred.reject = reject;
	})
	return defferred;
}

var promisesAplusTests = require('promises-aplus-tests');

promisesAplusTests(Promise, function(err) {
	console.log('测试用例调用失败', err);
})

module.exports = Promise

// 
```

通过了官方的872个测试用例。