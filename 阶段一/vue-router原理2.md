
vue-router作为插件被引用到vue时，

Vue.use()如果传进去的是对象，则必须传install方法，如果是函数，就直接作为install调用，

vue-router被引入调用了install函数，用vue作为参数，利用vue.mixin混入机制，

在beforeCreate获取$option 创建私有属性 _route = this.$option.route.并且在这个函数中通过vue.util.defineReactive定义了响应式的_route属性，

当_route值改变的时候就会自动调用vue的render方法，更新视图。

vue的实例引用vue-route实例，利用object.defineProperty截取了_route的属性，在触发更新时候，响应依赖他的组件们，
调用vue.util.defineReactive 这个是vue的发布订阅者劫持数据的函数，触发render的更新，
