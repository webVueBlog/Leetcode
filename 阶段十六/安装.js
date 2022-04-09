/**

$ npm install -g cnpm --registry=https://registry.npmmirror.com
$ npm config set registry https://registry.npmmirror.com


$ cnpm install [name]


使用 create-react-app 快速构建 React 开发环境

create-react-app 自动创建的项目是基于 Webpack + ES6 。

yarn add create-react-app


npx create-react-app my-app
cd my-app
npm start


  npm start
    Starts the development server.

  npm run build
    Bundles the app into static files for production.

  npm test
    Starts the test runner.

  npm run eject
    Removes this tool and copies build dependencies, configuration files
    and scripts into the app directory. If you do this, you can’t go back!

We suggest that you begin by typing:

  cd my-app
  npm start
  
当你准备部署到生产环境时，使用 npm run build 创建一个压缩后的 bundle（包）。

你 无需 安装或配置 Webpack 或 Babel 等工具。 它们是预先配置好并且隐藏的

npx
npx create-react-app my-app

Yarn
yarn create react-app my-app

npm
npm init react-app my-app


npm test 或 yarn test

npm run build 或 yarn build
将生产环境的应用程序构建到 build 目录。 它能将 React 正确地打包为生产模式中并优化构建以获得最佳性能。


yarn add husky lint-staged prettier
husky 使得使用 githooks 变得很容易，就好像它们是 npm 脚本一样。
lint-staged 允许我们在 git 中的 staged 文件上运行脚本。

将以下字段添加到 package.json ：

+  "husky": {
+    "hooks": {
+      "pre-commit": "lint-staged"
+    }
+  }
接下来，我们在 package.json 中添加一个 'lint-staged' 字段，例如：


*/

  "dependencies": {
    // ...
  },
+ "lint-staged": {
+   "src/**/*.{js,jsx,ts,tsx,json,css,scss,md}": [
+     "prettier --single-quote --write",
+     "git add"
+   ]
+ },
  "scripts": {