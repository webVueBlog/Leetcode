
	export default new Router ({
		routes: [
			{
				path: '/',
				name: 'home',
				component: Home,
				beforeEnter(from, to, next) {
					console.log(`beforeEnterHome from ${from} to ${to}`)
					setTimeout(() => {
						next()
					},1000)
					// next()
				},
				beforeLeave(to, from, next) {
					console.log('leavehome')
				}
			}
		]
	})

// 路由入口

vue-router

	import Vue from 'vue'
	import Router from 'vue-router'
	import Home from './views/Home.vue'

	Vue.use(Router)

	export default new Router({
		base: process.env.BASE_URL,
		routes: [
			{
				path: '/',
				name: 'home',
				component: Home
			},
			{
				path: '/about',
				name: 'about',
				component: () => import('./views/About.vue')
			}
		]
	})

	new Vue({
		router,
		render: h => h(App)
	}).$mount('#app')

Vue.use 用户执行Vue.use 的时候，实际执行的是模块的install 方法，会 把Vue 的实例传递进去，比如咱们整个字符串

	let Vue

	class Router {
		
	}
	function install (_Vue) {
		Vue = _Vue;
		Vue.mixin({
			beforeCreate() {
				const options = this.$options;
				console.log(options)
				Vue.prototype.$vrouter='hello'
			}
		})
	}

	export {install, Router}

单页面

hash模式

使用url# 后面的锚点来区分组件，hash改变的时候，页面不会重新加载，只会出发onhashchange事件。

hishtory 模式

hash 的 url 略丑，使用 mode:history，这种模式 充分利用了 html5 history interface 中新增加的 pushState() 和 replaceState() 方法。这两个方法应用于浏览器记录栈，在当前已有的 back， forward，go 基础之上，它们提供了对历史记录修改的功能。只能当它们执行修改时，虽然改变了当前的URL，但浏览器不会立即向后端发送请求。

代码

	let Vue
	class Router {
		static install(_Vue) {
			Vue = _Vue
			Vue.mixin({
				beforeCreate() {
					if(this.$options.router) {
						console.log('>')
						// new Vue 的时候传递的
						Vue.prototype.$vrouter = 'hello'
						Vue.prototype.$vrouter = this.$options.router
						this.$options.router.init()
					}
				}
			})
		}
		constructor(options) {
			this.$options = options
			this.routeMap = {}
			this.app = new Vue({
				data: {
					current: '/'
				}
			})
		}
		// 绑定事件
		init() {
			this.bindEvents()
			this.createRouteMap(this.$options)
			this.initComponent(Vue)
		}
		bindEvents() {
			window.addEventListener('load', this.onHashChange.bind(this), false)
			window.addEventListener('hashchange',this.onHashChange.bind(this),false)
		}
		// 路由映射表
		createRouteMap(options) {
			options.routes.forEach(item => {
				this.routeMap[item.path] = item.component
			})
		}
		// 注册组件
		initComponent(Vue) {
			Vue.component('router-link', {
				props: {
					to: String
				},
				render(h) {
					console.log(this.to)
					return h('a', {
						attrs: {
							href: '#' + this.to
						}
					},[
						this.$slots.default
					])
				}
			})
			const _this = this
			Vue.component('router-view', {
				render(h) {
					var component = _this.routeMap[_this.app.current]
					return h(component)
				}
			})
		}
		// 获取当前hash串
		getHash() {
			return window.location.hash.slice(1) || '/'
		}
		pubsh(url) {
			window.location.hash = url
			// 如果是
			// window.history.pushState(null, null, '#/'+url)
		}
		// 设置当前路径
		onHashChange() {
			this.app.current = this.getHash()
		}
	}
	export default Router

生命周期

	beforeEnter(from, to, next) {
		console.log(`beforEnterHome from ${from} to ${to}`)
		next()
	},
	onHashChange(e) {
		let {from, to} = this.getFrom(e)
		let hash = this.getHash()
		let router = this.routeMap[hash]
		
		if(router.beforeEnter) {
			router.beforeEnter(from, to, ()=>{
				this.app.current = this.getHash()
			})
		}else {
			this.app.current = this.getHash()
		}
	}

扩展

1. 除了 beforeCreate, 还有有销毁
2. history模式
3. match
4. 生命周期

