
```js
class Demo extends React.Component {
 // a = 1
 /*
 React.createRef调用后可以返回一个容器，该容器可以存储被ref所表示的节点
 */
 myRef = React.createRef(); // 该容器是“专人专用”
 // 展示左侧输入框的数据
 showData = () => {
  console.log(this.myRef.current) // <input type="text" placeholder="点击">
  //this.myRef.current.value

  const {input1} = this
  alert(input1.value)
 }
 // 展示右侧输入框的数据
 showData2 = () => {
  const {input2} = this
  alert(input2.value)
 }

 saveInput = (c) => {
  this.input1 = c;
  console.log('dada', c);
 }
 render() {
  return (
   <div>
    <input ref={this.myRef} type="text" placeholder="点击"/>
    <input ref={c => this.input1 = c} type="text" placeholder="点击"/>
    <button onClick={this.showData}>点击</button>
    <input onBlur={this.showData2} ref={c => this.input2 = c} type="text">

    <input ref={this.saveInput} type="text"/>
   </div>
  )
 }
}
ReactDOM.render(<Demo a="1" b="2"/>, document.getElementById('test'))
```