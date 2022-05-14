
```js
yarn add antd
```

按需引入+自定义主题

antd

1. 安装依赖：yarn add react-app-rewired customize-cra babel-plugin-import less less-loader
2. 修改package.json

```js
"scripts": {
 "start": "react-app-rewired start",
 "build": "react-app-rewired build",
 "test": "react-app-rewired test",
 "eject": "react-scripts eject"
}
```

3. 根目录下创建 config-overrides.js

```js
// 配置具体的修改规则
const { override, fixBabelImports, addLessLoader } = require('customize-cra');
module.exports = override(
 fixBabelImports('import', {
  libraryName: 'antd',
  libraryDirectory: 'es',
  style: true,
 }),
 addLessLoader({
  lessOptions: {
   javascriptEnabled: true,
   modifyVars: {'@primary-color': 'green'},
  }
 }),
);
```

备注：不用在组件里亲自引入样式了，即可：`import 'antd/dist/antd.css'`应该删掉