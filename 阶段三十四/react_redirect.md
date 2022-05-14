
```js
<Redirect to="/about"/>
```

Redirect的使用

1. 一般写在所有路由注册的最下方，当所有路由都无法匹配时，跳转到Redirect指定的路由
2. 具体编码

```js
<Switch>
 <Route path="/about" component={About}/>
 <Route path="/home" component={Home}/>
 <Redirect to="/about"/>
</Switch>
```