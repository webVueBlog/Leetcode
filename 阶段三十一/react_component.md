包含表单的组件分类：

```js
a. 受控组件

b. 非受控组件
```

```js
// 非受控组件
// 输入类 现用现取

class Login extends React.Component{
 handleSubmit = (event) => {
  event.preventDefault() //  阻止表单提交 ajax 页面刷新
  const {username, password} = this
  alert(`你输入的用户名时：${username.value},你输入的密码是:${password.value}`)
 }
 render() {
  return (
   <form onSubmit={this.handleSubmit}>
    用户名：<input ref={c => this.username = c} type="text" name="username">
    密码：<input ref={c => this.password = c} type="password" name="password">
    <button>登录</button>
   </form>
  )
 }
}
```

```js
// 受控组件,输入类数据存储到状态，用到去出

// 写受控组件，没有ref，请勿过渡使用ref

state: {
 username: '',
 password: '',
}

saveUsername = (event) => {
 this.setState({username: event.target.value})
}

<input onChange={this.saveUsername} type="text" name="username">

<input onChange={this.savePassword} type="password" name="password">
```