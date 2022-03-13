
Koa中间件机制：Koa中间件机制 就是 函数组合 的概念，将一组需要顺序执行的函数复合为一个函数，外层函数的参数实际是内层函数的返回值。洋葱🧅圈 模型可以形象 表示 这种机制，是 Koa 源码中的精髓和难点。

nodejs实现：

	const http = require('http')
	const server = http.createServer((req, res) => {
		res.writeHead(200)
		res.end('hello')
	})
	server.listen(3000, ()=>{
		console.log('aaa')
	})

koa实现

	const koa = require('koa');
	const app = new Koa();
	app.use(ctx => {
		ctx.body = 'hello'
	});
	app.listen(3000);

> koa的目标是用更简单化，流程化，模块化的方式实现回调部分

手写koa:

	// 创建 da.js
	const http = require("http")
	class Da {
		listen(...args) {
			const server = http.createServer((req, res) => {
				this.callback(req, res);
			});
			server.listen(...args);
		}
		use(callback) {
			this.callback = callback;
		}
	}
	module.exports = da;

	// 调用 app.js
	const Da = require('./da');
	const app = new Da();
	app.use((req, res) => {
		res.writeHead(200);
		res.end('hello');
	});
	app.listen(3000, () => {
		console.log("监听端口3000");
	});

context

> 封装 request, response, 和 context

request.js

	module.exports = {
		get url() {
			return this.req.url;
		}
	};

response.js

	module.exports = {
		get body() {
			return this._body;
		},
		set body(val) {
			this._body = val;
		}
	};

context.js

	module.exports = {
		get url() {
			return this.request.url;
		},
		get body() {
			return this.response.body;
		},
		set body(val) {
			this.responese.body = val;
		}
	};

da.js

// 导入这三个类
const context = require('./context');
const request = require('./request');
const response = require('./response');

class Da {
	listen(...args) {
		const server = http.createServer((req, res) => {
			// 创建上下文
			let ctx = this.createContext
			// 执行回调，这次传入ctx
			this.callback(ctx);
			// 响应
			res.end(ctx.body)
		});
	}
	// 构建上下文，把res和req都挂载到ctx之上，并且在ctx.req和ctx.request.req同时保存
	createContext(req, res) {
		const ctx = Object.create(content);
		ctx.request = Object.create(request);
		ctx.response = Object.create(response);
		
		ctx.req = ctx.request.req = req;
		ctx.res = ctx.response.res = res;
		return ctx;
	}
}


















