
react-router-dom

route路由

router路由器

```js
// React-Router
<Link className="list-group-item" to="/about">About</List>

<Route path="/about" component={About}/>

import {BrowserRouter} from 'react-router-dom'
<BrowserRouter>
 <App/>
</BrowserRouter>

<HashRouter></HashRouter>
```

1. 明确好界面中的导航区，展示区
2. 导航区的a标签改为Link标签

```js
<Link to="/xxx">Demo</Link>
```

3. 展示区写Route标签进行路径的匹配

```js
<Route path="/xxx" component={Demo}/>
```

4. `<App>`的最外侧包裹了一个`<BrowserRouter>`或`<HashRouter>`


