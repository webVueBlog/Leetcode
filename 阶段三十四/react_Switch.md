
NavLink和封装NavLink

1. NavLink可以实现路由链接的高亮，通过activeClassName指定样式名
2. 标签体内容是一个特殊的标签属性
3. 通过this.props.children可以获取标签体内容

```js
<Switch>
 <Route path="/about" component={About} />
</Switch>
```

1. 通常情况下，path和component是一一对应的关系。
2. Switch可以提高路由匹配效率

```js
使用hash

解决样式丢失
```

解决多级路径刷新页面样式丢失的问题

1. public/index.html 中 引入样式时不写 `./` 写 `/`
2. public/index.html 中 引入样式时不写 `./` 写 `%PUBLIC_URL%`
3. 使用HashRouter