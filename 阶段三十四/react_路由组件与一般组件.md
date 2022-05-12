
hash `#` 后面的是前端的，不会带给服务器

区别：

```js
写法不同：

一般组件：<Demo/>
路由组件：<Route path="/demo" component={Demo}/>

存放位置不同：

一般组件：components

路由组件：pages

接收到的props不同：

一般组件：写组件标签时传递了什么，就能收到什么
路由组件：接收到三个固定的属性

history: 
go
goBack
goForward
push
replace

location:
pathname
search
state

match:
params
path
url

```