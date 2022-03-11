
1. 核心api
2. 组件化思想
3. router-vuex

vue工作机制

vue响应式的原理

依赖收集与追踪

编译compile

vue工作机制

初始化 🐣

在 new Vue() 之后。 Vue 会调用进行 初始化, 会初始化生命周期、事件、 props、 methods、data、computed 与 🌧️ watch 等. 其中最重要的是通过✅ Object.defineProperty 设置 setter 与 getter, 用来实现【响应式】以及【依赖收集】。

👕初始化之后🎣调用 $mount 挂载组件。


new Vue() - init -> $mount -> compile() [parse optimize generate] -> render function - touch -> getter -> collect as Dependency -> Watcher
                                                                                     - render -> Virtual DOM Tree -> patch()



new MVVM() -> Observer(劫持监听所有属性) -> 通知变化
           -> Compile(解析指令) -> 订阅数据变化，绑定更新函数 -> Watcher
                               -> 初始化试图 -> Updater <- 更新视图 <- Watcher

编译

编译模块分为三个阶段：

1. parse 使用正则解析 template 中的 vue 的指令（v-xxx）变量等等 形成语法树 AST
2. optimize 标记一些静态节点，用作后面的性能优化，在 diff 的时候直接略过
3. generate 把第一部生成的 AST 转化为渲染函数 render function

响应式

这个块是vue 最核心的内容

getter 和 setter ， 初始化的时候通过 defineProperty 进行待定，设置通知的机制

当编译生成的渲染函数被实际渲染的时候，会触发 getter 进行依赖收集，在数据变化的时候，触发 setter 进行更新

## 虚拟dom

Virtual DOM 是 react 首创，Vue2 开始支持，就是用 JavaScript 对象来描述 dom 结构，数据修改的时候，我们先修改过虚拟 dom 中的数据，然后数组做 diff ，最后再汇总所有的 diff，力求做最少的 dom 操作，毕竟 js 里对比很快，而真实的 dom 操作太慢

// vdom
{
 tag: 'div',
 props: {
  name: 'jeskson',
  style: { color: red },
  onClick: xx
 }
 children: [
  {
   tag: 'a',
   text: 'click me' 
  }
 ]
}

<div name="xxx" style="color: red" @click="xx">
 <a>
  click me
 </a>
</div>














