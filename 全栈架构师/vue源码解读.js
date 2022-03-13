// 1. 核心api
// 2. 组件化思想
// 3. router-vuex

vue工作机制

vue响应式的原理

依赖收集与追踪

编译compile

vue工作机制

// 初始化 🐣

// 在 new Vue() 之后。 Vue 会调用进行 初始化, 会初始化生命周期、事件、 props、 methods、data、computed 与 🌧️ watch 等. 其中最重要的是通过✅ Object.defineProperty 设置 setter 与 getter, 用来实现【响应式】以及【依赖收集】。

// 👕初始化之后🎣调用 $mount 挂载组件。


// 	new Vue() - init -> $mount -> compile() [parse optimize generate] -> render function - touch -> getter -> collect as Dependency -> Watcher
// 																																											- render -> Virtual DOM Tree -> patch()



// 	new MVVM() -> Observer(劫持监听所有属性) -> 通知变化
// 						-> Compile(解析指令) -> 订阅数据变化，绑定更新函数 -> Watcher
// 																-> 初始化试图 -> Updater <- 更新视图 <- Watcher

编译

编译模块分为三个阶段

// 1. parse 使用正则解析 template 中的 vue 的指令（v-xxx）变量等等 形成语法树 AST
// 2. optimize 标记一些静态节点，用作后面的性能优化，在 diff 的时候直接略过
// 3. generate 把第一部生成的 AST 转化为渲染函数 render function

响应式

// 这个块是vue 最核心的内容

// getter 和 setter ， 初始化的时候通过 defineProperty 进行待定，设置通知的机制

// 当编译生成的渲染函数被实际渲染的时候，会触发 getter 进行依赖收集，在数据变化的时候，触发 setter 进行更新

虚拟dom

// Virtual DOM 是 react 首创，Vue2 开始支持，就是用 JavaScript 对象来描述 dom 结构，数据修改的时候，我们先修改过虚拟 dom 中的数据，然后数组做 diff ，最后再汇总所有的 diff，力求做最少的 dom 操作，毕竟 js 里对比很快，而真实的 dom 操作太慢

// vdom
// {
// 	tag: 'div',
// 	props: {
// 	name: 'jeskson',
// 	style: { color: red },
// 	onClick: xx
// 	}
// 	children: [
// 	{
// 		tag: 'a',
// 		text: 'click me' 
// 	}
// 	]
// }

// <div name="xxx" style="color: red" @click="xx">
// 	<a>
// 	click me
// 	</a>
// </div>

更新视图

// 数据修改触发 setter，然后监听器 会 通知 进行修改，通过对比两个 dom 数，得到改变的地方，就是 patch 然后只需要把这些差异修改即可。

Vue2响应式的原理

defineProperty

// <div id="app">
// <p id="name"></p>
// </p>
// <script>
// var obj = {};
// Object.defineProperty(obj, 'name', {
// 	get: function() {
// 	return document.querySelector('#name').innerHTMl;
// 	},
// 	set: function(val) {
// 	document.querySelector('#name').innerHTML = val
// 	}
// })
// obj.name = 'webVueBlog';
// </script>

数据响应式

class minVue {
	constructor(options) {
		this.$options = options;
		// 数据响应化
		this.$data = options.data;
		this.observe(this.$data);

		// 模拟一下watcher创建
		// new Watcher()
		new Compile(options.el, this);
	}

	observe(value) {
		if (!value || typeof value !== 'object') {
			return;
		}

		// 对象里有多少，遍历get set
		// 遍历该对象
		Object.keys(value).forEach(key => {
			// 数据的响应化函数
			this.defineReactive(value, key, value[key])
		})
	}

	// 数据响应化
	defineReactive(obj, key, val) {
		this.observe(val); // 递归解决数据嵌套

		const dep = new Dep(); // 收集依赖

		Object.defineProperty(obj, key, {
			get() {
				Dep.target && dep.addDep(Dep.target);
				return val;
			},
			set(newVal) {
				if (newVal === val) {
					return;
				}
				val = newVal;
				console.log(`${key}属性更新了：${val}`);
				dep.notify()
			}
		})
	}
}

const app = new minVUe({
	data: {
		test: 'i am jeskson',
		foo: {
			bar: 'bar'
		}
	}
});

app.$data.test = 'hello world';
app.$data.foo.bar = 'abc';

依赖收集与追踪

// 依赖对象
class Dep {
	constructor() {
		// 存放所有的依赖 
		this.deps = []
	}
	// 在deps 中添加一个监听器对象
	addDep(dep) {
		this.deps.push(dep)
	}
	// 通知所有监听器去更新视图
	notify() {
		this.deps.forEach(dep => dep.update());
	}
}

// 监听器：负责更新视图
class Watcher {
	constructor() {
		// 在new 一个监听器对象 时将对象赋值给 Dep.target, 在get中会用到
		Dep.target = this
	}
	// 更新视图的方法
	update() {
		console.log('属性更新了');
	}
}

// Dep: 用来管理 Watcher
class Dep {
	constructor() {
		// 这里存放若干依赖 watcher
		this.deps = [];
	}
	addDep(dep) {
		this.deps.push(dep)
	}
	notify() {
		this.deps.forEach(dep => dep.update())
	}
}

// Watcher
class Watcher {
	constructor() {
		// 将当前 watcher 实例指定到Dep静态属性 target
		Dep.target = this;
	}

	update() {
		console.log()
	}
}


// 1. object -> 依赖 -> 多个监听 依赖watcher

编译compile

// 核心逻辑获取dom，遍历dom，获取{{}} 格式的变量，以及每个 dom 的属性，截获k-和@开头的设置响应式

// 获取dom，遍历子元素，（编译节点），遍历属性 ，at-开头/k-开头 -> 处理textContent 处理input

// 浏览器把不认识的转化

compile // new Compile(el, vm)

class Compile {
	constructor(el, vm) {
		// el 可能是选择器
		// 要遍历的宿主节点
		this.$el = document.querySelector();
		this.$vm = vm;

		// 编译
		if (this.$el) {
			// 转换内部内容为片段 Fragment
			this.$fragment = this.node2Fragment(this.$el);
			// 执行编译
			this.compile(this.$fragment);
			// 将编译完的html结果追加至 $el
			this.$el.appendChild(this.$fragment);
		}
	}

	// 将宿主元素中代码片段拿出来遍历，这样做比较高效
	node2Fragment(el) {
		const frag = document.createDocumentFragment();
		// 将el中所有子元素搬家到frag中
		let child;
		while (child = el.firstChild) {
			frag.appendChild(el.child)
		}
		return frag;
	}
	// 编译过程
	compile(el) {
		const childNodes = el.childNodes;
		Array(childNodes).forEach(node => {
			// 类型判断
			if (this.isElement(node)) {
				// 元素
				console.log('编译元素', node.nodeName)
			} else if (this.isText(node)) {
				// 文本
				console.log('编译文本', node.textContent)
			}
			
			// 递归子节点
			if (node.childNodes && node.childNodes.length > 0) {
				
			}
		})
	}
	
	compileText(node) {
		console.log(RegExp.$1);
	}
	
	isElement(node) {
		return node.nodeType === 1;
	}
	isText(node) {
		return node.nodeType === 3;
	}
}