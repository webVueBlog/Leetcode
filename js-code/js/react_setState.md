
```js
/**
props:
 new entry: ""
state
 isHot: false
rendered by
 react-dom
类中可以直接写赋值语句
 */

class Weather extends React.Component{
 constructor(props) {
  // 构造器调用1次
  suepr(props)
  this.state = { isHot: false }
  // 解决changeWeather中this指向问题
  this.changeWeather = this.changeWeather.bind(this)
 }
 render() {
  // render调用1+n次，1次初始化n次状态更新的次数
  const {isHot} = this.state
  return <h1 onClick={this.changeWeather}>今天天气很{isHot?'炎热':'凉爽'}</h1>
 }
 // 以上 const w1 = new Weather()
 changeWeather() {
  // 点几次调用几次
  // changeWeather放在哪里？Weather的原型对象上，供实例使用
  // 由于changeWeather是作为onClick的回调，所以不是通过实例调用的，是直接调用
  // 类中的方法默认开启了局部的严格模式，所以changeWeather中的this为undefined
  // 获取原来的isHot值
  const isHot = this.state.isHot
  this.setState({isHot: !isHot})
  // 严格注意：状态(state)不可直接更改，下面这行就是直接更改
  // this.state.isHot = !isHot
 }
}
```