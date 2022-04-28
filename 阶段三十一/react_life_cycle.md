
```js
// 生命周期
/**
挂载 mount
卸载 unmount
 */

// 创建组件
// 生命周期回调函数 = 生命周期钩子函数 = 生命周期函数 = 生命周期钩子
class Life extends React.Component {
 // 类 构造器 赋值语句
 state = {opacity: 1}
 death = () => {
  
  // 卸载组件
  ReactDOM.unmountComponentAtNode(document.getElementById('test'))
 }
 // 组件挂载完毕后
 componentDidMount() {
  // 组件挂载完毕，只调用一次
  this.timer = setInterval(()=>{
   // 获取原状态
   let {opacity} = this.state
   // 减少0.1
   opacity -= 0.1
   if(opacity <= 0) opacity = 1
   // 设置新的透明度
   this.setState({opacity})
  },200);
 }
 componentWillUnmount() {
  // 清除定时器
  clearInterval(this.timer)
 }
 // render调用的时候，初始化渲染，状态更新之后
 render() { // 1 + n 该状态render执行
  return (
   <div>
    <h2 style={{opacity: this.state.opacity}}>React</h2>
    <button onClick={this.death}></button>
   </div>
  )
 }
}
// 渲染组件
ReactDOM.render(<Life/>, document.getElementById('test'))

// 只要组件挂载到页面上不点
```