## vue-router原理

vue-router提供了三种运行方式

hash：使用URL hash值来做路由。默认模式

history：依赖html5 history API 和 服务器配置。查看HTML5 History模式

abstract：支持所有js运行环境，比如node

随着ajax的流行，异步数据请求交互运行在不刷新浏览器的情况下进行，单页面应用在页面交互，页面跳转都是无刷新的，为了实现单页面应用，就有了前端路由。
前端路由就是匹配不同的url进行解析，然后动态渲染出区域html内容，在改变url的情况下，保证页面的不刷新。hash值的变化，并不会导致浏览器向服务器发送请求，也就不会刷新页面

1.hash模式：

每次hash值得变化，还会触发hash change事件，通过这个事件会知道hash值发生了哪些变化，然后监听这个值来实现更新页面部分内容得操作。

2.history模式

html5多了两个api，pushState(创建历史记录）和replaceState(修改)，通过这两个api可以改变url地址并且不会发送请求，点击后退、前进按钮会触发onpopState()

原理：通常构建一个vue应用的时候，我们会使用Vue.use以插件形式安装VueRouter,同时会在vue的实例上挂载router实例。在vueRouter这个插件中有一个公共的方法install，

这个方法的第一个参数是Vue构造器，第二个参数是一个可选的参数对象。其中在install文件中，并且混入了mixin，给每个组件创建beforeCreate钩子，在Vue的实例上初始化了一些私有属性，其中_router指向VueRouter的实例，_root指向vue的实例。

在vue中利用数据劫持defineProperty在原型prototype上初始化了一些getter，分别是router代表当前的Router实例，route代表当前router信息。

在install中也全局注册了router-view，router-link，其中vue.util.defineReactive，是vue里面发布订阅者劫持数据的方法，劫持_route，当_route触发setter的时候，则会通知到依赖组件。接下来在init中，会挂载判断路由的模式，是history或者hash，调用相应的方法同时更新_route,_route的更新就会触发router-view的渲染

https://github.com/webVueBlog/Leetcode