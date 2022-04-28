旧版本的生命周期流程

挂载时：先调用 构造器 constructor 再调用 componentWillMount 执行 render 再调用 componentDidMount ---- componentWillUnmount

更新 父组件render: componentWillReceiveProps(第一次传的不调，新值才调用) -> shouldComponentUpdate (setState) -> componentWillUpdate(forceUpdate) -> render -> componentDidUpdate ---- componentWillUnmount

forceUpdate强制更新(不对组件进行更改，想让组件更新一下，使用强制更新)

```js
class Count extends React.Component {
 constructor(props) {
  console.log('Count---constructor');
  super(props)
  this.state = {count: 0}
 }
 // state = {count: 0}
 add = () => {
  const {count} = this.state
  this.setState({count: count + 1})
 }
 death = () => {
  ReactDOM.unmountCompoentAtNode(document.getElementById('test'))
 }
 force = () => {
  // 强制更新按钮的回调
  this.forceUpdate()
  // Count-- 可以不改变状态数值
  // componentWillUpdate
  // render
  // componentDidUpdate
 }
 componentWillMount() {
  console.log('Count---componentWillMount')
 }
 componentDidMount() {
  console.log('Count---componentDidMount')
 }
 componentWillUnmount() {
  console.log('Count---componentWillUnmount')
 }
 shouldComponentUpdate() { // 组件是否应该更新
  console.log('Count---shouldComponentUpdate')
  return true
 }
 // 组件将要更新
 componentWillUpdate() {
  console.log('Count---componentWillUpdate')
 }
 componentDidUpdate() {
  console.log('Count---componentDidUpdate')
 }
 render() {
  console.log('Count---render')
  const {count} = this.state
  return (
   <div>
    <h2>当前求和为：{count}</h2>
    <button onClick={this.add}>点击</button>
    <button onClick={this.death}>点击</button>
   </div>
  )
 }
}
ReactDOM.render(<Count/>, document.getElementById('test'))
```

