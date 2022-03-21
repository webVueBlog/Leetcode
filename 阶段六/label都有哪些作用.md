label通常用来关联一个表单控件

   <label for="hobby">爱好</label>
   <input id="hobby" type="checkbox"  value="0">

利用label"模拟"button来解决不同浏览器原生button样式不同的问题

结合checkbox、radio表单元素实现纯CSS状态切换，这样的实例就太多了。比如控制CSS动画播放和停止。

input的focus事件会触发锚点定位，我们可以利用label当触发器实现选项卡切换效果。