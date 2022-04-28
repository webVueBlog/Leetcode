
```js
/*
高阶函数，如果一个函数符合下面中任何一个，就是高阶函数
1. 若A函数，接收的参数是一个函数，那么A就是一个高阶函数
2. 若A函数，调用的返回值依然是一个函数，那么A就是一个高阶函数

函数的柯里化，通过函数调用继续返回函数的方式，实现多次接收参数最后统一处理的函数编码形式。

*/

class Login extends React.Component {
 // 初始化状态
 state = {
  username: '',
  password: ''
 }
 // 函数的柯里化
 saveFormData = (dataType) => {
  // console.log(dataType) // username
  return (event) => {
   this.setState({[dataType]: event.target.value})
  }
 }
 render() {
  return (
   <form>
    <input onChange={this.saveFormData('username')}/>
   </form>
  )
 }
}
```

```js
function sum(a) {
 return (b) => {
  return (c) => {
   return a + b + c
  }
 }
}

let d = sum(1)(2)(3)
```

```js

saveFormData = (dataType, event) => {
 this.setState({[dataType]: event.target.value})
}

<form onSubmit={this.handleSubmit}>
 用户名：<input onChange={event => this.saveFormData('username', event)} type="text"/>
</form>
```