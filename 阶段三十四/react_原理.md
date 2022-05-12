
history

```js
// window.history
<a href="http://xxx" onclick="return push('/test1')"> push test1 </a><br><br>

<button onClick="push('/test2')">push test2</button><br><br>
<button onClick="replace('/test3')">replace test3</button><br><br>

<button onClick="back()"> 回退 </button>
<button onClick="forword()"> 前进 </button>

<script>
let history = History.createBrowserHistory()

function push(path) {
 history.push(path)
 return false
}

function replace(path) {
 history.replace(path)
}

function back() {
 history.goBack()
}

function forword() {
 history.goForward()
}

history.listen((location) => {
 console.log('请求路由路径变化了', location)
})

</script>
```

锚点跳转不会引起页面的刷新， 可以留下历史记录的

```js
xxx/his.html#/
```