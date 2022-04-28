## dom-diffing

```js
class Time extends React.Component {
 state = {date: new Date()}
 componentDidMount() {
  setInterval(() => {
   this.setState({
    date: new Date()
   })
  }, 1000)
 }

 render() {
  return (
   <div>
    <h1>hello</h1>
    <input type="text"/>
    <span>{this.state.date.toTimeString()}</span>
   </div>
  )
 }
}
ReactDOM.render(<Time/>, document.getElementById('test'))
```

对比最小的力度是标签

## react/vue中的key

key的内部原理是什么？

为什么要遍历列表时，key最好不要用index?

1. 虚拟DOM中key的作用

   简单的说，key是虚拟DOM对象的标识，在更新显示时key起着极其重要的作用。

   详细的说，当状态中的数据发生变化时，react会根据【新数据】生成【新的虚拟DOM】，随后React进行【新虚拟DOM】与【旧虚拟DOM】的diff比较，比较规则如下：
  
      a. 旧虚拟DOM中找到了与新虚拟DOM相同的key：

         1）若虚拟DOM中内容没变，直接使用之前的真实DOM

         2）若虚拟DOM中内容变了，则生成新的真实DOM，随后替换掉页面中之前的真实DOM

      b. 旧虚拟DOM中未找到与新虚拟DOM相同的key

         根据数据创建新的真实DOM，随后渲染到页面

- 索引效率低
- id效率高

2. 用index作为key可能会引发的问题：

   1.若对数据进行：逆序添加，逆序删除等破坏顺序操作：
      
        会产生没有必要的真实DOM更新 ===》 界面效果没问题，但效率低。

   2.如果结构中还包含输入类的DOM

        会产生错误DOM更新 ===》 界面有问题

   3.注意：如果不存在对数据的逆序添加，逆序删除等破坏顺序操作，

        仅用于渲染列表用于展示，使用index作为key是没有问题的。
       
3. 开发中如何渲染key?:

   1.最好使用每条数据的唯一标识作为key，比如id,手机号，身份证号码，学号等唯一值。


   2.如果确定只是简单的展示数据，用index也是可以的。

