## ObjectdefinePropery和proxy

```js
Object.defineProperty(obj, "num", {
 value: "",
 writable: true,
 configurable: true,
 enumerable: true,
});
```

使用 Object.defineProperty 只能设置和读取属性值，ES6 提供的 proxy 可以重定义更多的行为，比如 in delete 函数调用等更多行为。
proxy愿意代理器，new Proxy 是生成一个实例，里面的 target 方法用来拦截这个实例 handler 参数用来制定拦截方案

let proxy = new Proxy(target, handler)

```js
let proxy = new Proxy(
 {},
 {
  get: function(obj, prop) {
   return obj[prop];
  },
  set: function(obj, prop, value) {
   obj[prop] = value;
  },
 }
);

proxy.name = 'vueWebBlog'
console.log(proxy.name);
```

https://github.com/webVueBlog/Leetcode