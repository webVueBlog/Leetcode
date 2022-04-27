1. state是组件对象最重要的属性，值是对象（可以包含多个key-value的组合)
2. 组件被称为”状态机“，通过更新组件的state来更新对应的页面显示（重新渲染组件）
3. 组件中render方法中的this为组件实例对象
4. 组件自定义的方法中this为undefined，如何解决？ 强制绑定this，通过函数对象的bind()；箭头函数
5. 状态数据，不能直接修改或更新

```js
class Weather extends React.Component{
 state = { isHot: false, wind: '微风' }
 render() {
  const {isHot} = this.state
  return <h1 onClick={this.changeWeather}>今天天气很{isHot?'炎热':'凉爽'}</h1>
 }
 // 自定义方法-要用赋值语句的形式+箭头函数
 changeWeather = () => {
  // 箭头函数的this往外找
  const isHot = this.state.isHot
  this.setState({isHot: !isHot})
 }
 // 原型上
 // changeWeather() {
 //  const isHot = this.state.isHot
 //  this.setState({isHot: !isHot})
 // }
}
```