
Vue 组件化 的思想

- vue-cli 插件使用
- 组件编写 和 注册
- 自定义组件 的双向绑定
- 使用插槽复合组件
- 组件间通信
- 跨层级传值

```js
<el-form :model="model" :rules="rules" ref="loginForm">
	<el-form-item label="用户名" prop="username">
		<el-input v-model="model.username"></el-input>
	</el-form-item>
	<el-form-item label="密码" prop="password">
		<el-input type="password" v-model="model.password"></el-input>
	</el-form-item>
	<el-form-item>
		<el-button type="primary" @click="submitForm('loginForm')">提交</el-button>
	</el-form-item>
</el-form> 
```

组件设计

实现Form  FormItem  Input

Form 提供数据模型，校验规则
 FormItem 显示label,执行校验和显示校验结果
  input 绑定数据模型，通知 FormItem 执行校验
  
```js
<v-input v-model="model.username"></v-input>

<input type="text" :value="vale" @input="onInput">

<input :type="type" :value="value" @input="onInput">

props: {
	value: {
		type: String,
		default: ''
	},
},
```

```js
// 匿名插槽
// 定义 parent 中插槽
<div><slot></slot></div>
// 使用 parent 并指定插槽内容
<parent>Content</parent>

// 具名插槽
// 定义 parent 中插槽
<div><slot name="top"></slot></div>
// 使用 parent 并指定插槽内容
<parent><template slot="top">top content</template></parent>
```

