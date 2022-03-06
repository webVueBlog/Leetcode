## vue组件通信

1.方法一、props/$emit

父组件A通过props的方式向子组件B传递，B to A 通过在 B 组件中 $emit, A 组件中 v-on 的方式实现

2.子组件向父组件传值（通过事件形式）:组件通过events给父组件发送消息，实际上就是子组件把自己的数据发送到父组件。

方法二、$emit/$on

```js
var Event=new Vue();
Event.$emit(事件名,数据);
Event.$on(事件名,data = {});
```

https://github.com/webVueBlog/Leetcode