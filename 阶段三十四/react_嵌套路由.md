
嵌套路由

1. 注册子路由时要写上父路由的path值
2. 路由的匹配是按照注册路由的顺序进行的

```js
<Switch>
 <Route path="/about" component={About} />
 <Route path="/home" component={Home} />
 <Redirect to="/about"/>
</Switch>
```


## 向路由组件传递参数数据

```js
<div>
<ul>
 {
  messageArr.map((msgObj) => {
   return (
    <li key={msgObj.id}>
     <Link to={`/home/message/detail/${msgObj.id}/${msgObj.title}`}>{msgObj.title}</Link>
    </li>
   )
  })
 }
</ul>
<hr/>
<Route path="/home/message/detail/:id/:title" component={Detail}/>
</div>
```

```js
this.props.match.

isExact: true
params: {id: '1', title: '2'}
path: '/home/xxx'
url: ''
```

向路由组件传递参数

- 路由链接（携带参数）：`<Link to='/demo/test/tom/18'}>详情</Link>`
- 注册路由（声明接收）：`<Route path="/demo/test/:name/:age" component = {Test}/>`
- 接收参数：`const {id, title} = this.props.match.params`

```js
// 向路由组件传递search参数

// ?id=01&title=xx1
// search参数无需声明接收，正常注册路由即可
<Route path="/home/message/detail" component={Detail}/>

import React, { Component } from 'react'
import qs from 'querystring';

const DetailData = [
 {id: '01', content: '您好'},
 {id: '02', content: '哈哈'}
]

export default class Detail extends Component {
 render() {
  console.log(this.props);
  // 接收params参数
  // const {id, title} = this.props.match.params

  // 接收search参数
  const {search} = this.props.location
  const {id,title} = qs.parse(search.slice(1))

  const findResult = DetailData.find((detailObj) => {
   return detailObj.id === id
  })

  return (
   <ul>
    <li>id:{id}</li>
   </ul>
  )
 }
}
```

search参数

路由链接（携带参数）：`<Link to='/demo/test?name=tom&age=18'}>详情</Link>`

注册路由（无需声明，正常注册即可）：`<Route path="/demo/test" component={Test}/>`

接收参数：`this.props.location.search`

备注：获取到的search是`urlencoded`编码字符串，需要借助querystring解析


state参数：

```js
<Link to={{pathname: '/home/message/detail', state:{id:msgObj, title:msgObj.title}}}>{msgObj.content}</Link>

// state参数无需声明接收，正常注册路由即可
<Route path="/home/message/detail" component={Detail}/>
```

state参数

路由链接（携带参数）：`<Link to={{path: '/demo/test', state:{name: 'da', age: 12}}}>详情</Link>`

注册路由（无需声明，注册注册即可): `<Route path="/demo/test" component={Test} />`

接收参数： this.props.location.state

备注：刷新也可以保留参数

