```js
// 创建组件
class Person extends React.Component {
 render() {
  console.log(this);
  const { name, age, sex } = this.props
  return (
   <ul>
    <li>姓名：{name}</li>
    <li>性别：{sex}</li>
    <li>年龄：{age}</li>
   </ul>
  )
 }
}
// 渲染组件到页面
// ReactDOM.render(<Person name="name1" age="12" sex="男"/>, document.getElementById('text'))
const p = {name: 'name', age: '12', sex: 'n'}
ReactDOM.render(<Person {...p} />, document.getElementById('test2))
```
// 20