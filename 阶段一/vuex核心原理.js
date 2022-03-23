// 1.vuex其实是一个对象 里面有一个install方法和一个Store类，在vue.use(plugin)的阶段，如果穿进去的plugin是对象，则必须拥有install方法，调用install方法，如果穿进去的是函数，则直接把函数当作install方法。

// 2.install方法接收vue当作参数，从$option来传递给每个组件挂载store实例

// 3.Store类拥有 commit mutation dispatch getter等方法，state双向绑定是因为，Store将传进来的state包装成data，作为new Vue的参数，从而实现响应式

class Store {
	constructor(options) {
		this.vm = new Vue({
			data: {
				state: options.state,
			},
		});

		let getters = options.getter || {};
		this.getters = {};
		Object.keys(getters).forEach((getterName) => {
			Object.defineProperty(this.getters, getterName, {
				get: () => {
					return getters[getterName](this.state);
				},
			});
		});

		let mutations = options.mutations || {};
		this.mutations = {};
		Object.keys(mutations).forEach((mutationName) => {
			this.mutations[mutationName] = (arg) => {
				mutations[mutationName](this.state, arg);
			};
		});

		let actions = options.actions;
		this.actions = {};
		Object.keys(actions).forEach((actionName) => {
			this.actions[actionName] = (arg) => {
				actions[actionName](this, arg);
			};
		});
	}
	dispatch(method, arg) {
		this.actions[method](arg);
	}
	commit = (method, arg) => {
		this.mutations[method](arg);
	};
	get state() {
		return this.vm.state;
	}
}
let install = (Vue) => {
	Vue.mixin({
		beforeCreate() {
			if (this.$options && this.$options.store) {
				this.$store = this.$options;
			} else {
				this.$store = this.$parent && this.$parent.$store;
			}
		},
	});
};

let Vuex = {
	Store,
	install,
};

export default Vuex;
