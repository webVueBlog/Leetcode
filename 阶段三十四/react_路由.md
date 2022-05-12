
```js
app.get("/search/users", function(req, res) {
 const {q} = req.query
 axios({
  url: 'https://api.github.com/search/users',
  params: {q}
 }).then(response => {
  res.json(response.data)
 })
})
```

什么是路由：

1. 一个路由就是一个映射关系（key.value）
2. key为路径，value可能是function或component

路由分类：

后端路由：

1. 理解：value是function，用来处理客户端提交的请求。
2. 注册路由:router.get(path,function(req,res))
3. 工作过程：当node接收到一个请求时，根据请求路径找到匹配的路由，调用路由的函数来处理请求，返回响应数据

前端路由：

1. 浏览器端路由， value时component，用于展示页面内容。
2. 注册路由 `<Route path="/test" component={Test}>`
3. 工作过程：当浏览器的path 变为`/test`时，当前路由组件就会变为Test组件.

