// 1、绑定数据value
// 2、通过oninput触发事件获取当前$event.target.value，然后赋值给当前变量。  语法糖 :value + @input
//满足语法糖规则：属性必须为value，方法名必须为：input

/* <input v-model="sth" />
//  等同于
<input :value="sth" @input="sth = $event.target.value" /> */

/**即利用v-model绑定数据后，既绑定了数据，又添加了一个input事件监听。

实现原理：
1、v-bind绑定响应数据
2、触发input事件并传递数据 */