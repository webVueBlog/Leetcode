1. 初始化阶段：由ReactDom.render()触发 --- 初次渲染
 constructor() -> componentWillMount() -> render() -> componentDidMount() (常用，一般在这个钩子中一些初始化的事情，开启定时器，发送请求，订阅消息)

2. 更新阶段：由组件内部this.setState()或父组件render触发
 shouldComponentUpdate() -> ComponentWillUpdate() -> render() -> ComponentDidUpdate()

3. 卸载组件：由ReactDOM.unmountComponentAtNode()触发
 componentWillUnmount() （常用，关闭定时器，取消订阅）


```js
// UNSAFE_componentWillMount
// UNSAFE_componentWillUpdate
// UNSAFE_componentWillReceiveProps

// 18版本 UNSAFE_name
```

```js
// constructor
// render
// componentDidMount
// 不是实例调用 static 静态方法 获取派生状态来自props 必须由返回值
// 状态对象，null
// 使用？？？state的值在任何时候都取决于props， 那么可以使用

// 这个 横跨 挂载和更新， 阻断的话下面没有办法更新了
static getDerivedStateFromProps(props, state) {
 console.log('getDerivedStateFromProps', props, state)
 return null
 // return {count: 10} // 更改状态，后续更改不了了
 // return 'dada'
}
// 不建议使用

// render

// 更新
// render 获取快照 必须返回快照值或null
// 在更新之前获取快照
getSnapshotBeforeUpdate() {
 console.log('getSnapshotBeforeUpdate')
 return null 
}
// 组件更新完毕的钩子
componentDidUpdate(preProps, preState, snapshotValue) {
 console.log('Count---componentDidUpdate', preProps,preState,snapshotValue);
}
```

1. scrollTop
2. scrollHeight

新的生命周期里：

1. 初始化阶段：由ReactDOM.render()触发---初次渲染
 constructor() -> getDerivedStateFromProps -> render -> componentDidMount() 
2. 更新阶段：由组件内部this.setState()或父组件重新render触发
 getDerivedStateFromProps -> shouldComponentUpdate() -> render -> getSnapshotBeforeUpdate -> componentDidUpdate()
3. 卸载组件：由ReactDOM.unmountComponentAtNode()触发
 componentWillUnmount()

## 废弃的

componentWillMount

componentWillReceiveProps

componentWillUpdate