
> 擅长Vue/React，源码加购，小程序，移动端，Nodejs整个前端技术栈

1. webpack
2. 手动配置
3. entry & output
4. webpack 到底干了啥
5. dev-serve
6. 自动加载html
7. 打包
8. 支持css
9. 抽离css
10. 支持css 预编译 stylus
11. post-css
12. es6
13. 图片
14. source-map
15. 跨域
16. vue
17. react
18. webppack 优化
19. 懒加载
20. webpack 自带优化
21. tree-shaking
22. 预计算

webpack webpack-cli -D

webpack

1. entry 定义整个编译过程的起点
2. output 定义整个编译过程的终点
3. module 定义模块 module 的处理方式
4. plugin 对编译完成后的内容进行二度加工
5. resolve.alias 定义模块的别名

webpack

	module.exports = {
		entry: './index.js',
		output: {
			path: path.resolve(process.cwd(), 'dist/'),
			filename: '[name].js'
		},
		resolve: {
			alias: { jquery: 'src/lib/jquery.js', }
		},
		plugins: [
			new WebpackNotifierPlugin()
		],
		module: {
			
		}
	}
	
npm install webpack webpack-cli -D

	const sayHi = require('./a.js')

	sayHi('aaa');

	// a.js

	module.exports = (name) => {
		console.log('hello')
	}

新建webpack.config.js

	module.exports = {
		mode: 'development',
		entry: './src/index.js',
		output: {
			filename: 'pack.js'
		}
	}

1. 读取webpack.config.js
2. 解析文件依赖
3. 替换require 为 `__webpack_require__`
4. 本地使用 {} 存储所有的文件，然后通过使用为 `__webpack_require__` 获取文件内容，执行函数

webpack

	module.exports = {
		entry: './index.js',
		output: {
			path: path.resolve(process.cwd(), 'dist/'),
			filename: '[name].js'
		},
		resolve: {
			alias: { jquery: 'src/lib/jquery.js', }
		},
		plugins: [
			new webpackNotifierPlugin()
		],
		module: {
			loaders: [{
				test: /\.js[x]?$/,
				exclude: /node_moduls/,
				loader: 'babel-loader'
			}, {
				test: /\.less$/,
				loaders: ['style-loader', 'css-loader', 'less-loader']
			}, {
				test: /\.html/,
				loader: 'html-loader?' + JSON.stringify({minimize: false})
			}]
		}
	};


读取入口文件

	class da {
		constructor(config) {
			this.config = config
			// 入口
			this.entry = config.entry
			// 工作路径
			this.root = process.cwd()
			// 依赖关系
			this.modules = {}
		}
		// 创建模块
		createModule(modulePath, name) {
			// modulePath 是绝对路径，获取文件
			// name 是相对路径，作为key
			let code = fs.readFileSync(modulePath, 'utf-8')
			console.log(name, code)
		}
		start() {
			// 创建模块依赖关系
			console.log('开始啦')
			const entryPath = path.resolve(this.root, this.entry)
			this.createModule(entryPath, this.entry)
		}
	}
	const j = new da(config)
	k.start()



