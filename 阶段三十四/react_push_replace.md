

```js
<Link replace to={{pathname: '/home/message/detail', state: {id:msgObje.id}}}>
```

## 编程式子路由导航

```js
import React, { Component } from 'react'
export default class News extends Component {
 componentDidMount() {
  setTImeout(() => {
   this.props.history.push('/home/message')
  }, 2000)
 }
 render() {
  return (
   <ul>
    <li>01</li>
   </ul>
  )
 }
}
```

编程式路由导航

借助this.props.history对象上的API对操作路由跳转，前进，后退

1. `this.props.history.push()`
2. `this.props.history.replace()`
3. `this.props.history.goBack()`
4. `this.props.history.goForward()`
5. `this.props.history.go()`


```js
history:里面有

go: go(n)
goBack: goBack()
goForward: goForward()
push: push(path, state)
replace: replace(path, state)

location:

pathname: '/about'
search: ''
state: undefined

match:

params: {}
path: '/about'
url: '/about'
```

widthRouter

```js
import {widthRouter} from 'react-router-dom'
// widthRouter可以加工一般组件，让一般组件具备路由组件所特有的API
// widthRouter的返回值是一个新组件
```