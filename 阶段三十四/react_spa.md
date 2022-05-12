
```js
// 引入react核心库
import React from 'react'
// 引入ReactDOM
import ReactDOM from 'react-dom'
// 引入App
import App from './App'
ReactDOM.render(<App/>, document.getElementById('root'))
```

```js
// setupProxy.js
const proxy = require('http-proxy-middleware')

module.exports = function(app) {
 app.use(
  proxy('/api1', {
   // 遇见/api1前缀的请求，就会触发该代理配置
   target: 'http://localhost:5000', // 请求转发给谁
   changeOrigin: true, // 控制服务器收到的请求头中Host的值
   pathRewrite:{'^/api1': ''} // 重写请求路径(必须)
  })
 )
}
```

SPA 的理解：

1. 单页Web应用（single page web application, SPA)
2. 整个应用只有一个完整的页面
3. 点击页面中的链接不会刷新页面，只会做页面的局部更新
4. 数据都需要通过ajax请求获取，并在前端异步展现

路由的理解

1. 一个路由就是一个映射关系
2. key为路径，value可能是function或component








