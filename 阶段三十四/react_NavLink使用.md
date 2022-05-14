
```js
import {NavLink} from 'react-router-dom'

<NavLink activeClassName="active" className="list" to="/about">About</NavLink>
```

```js
<MyNavLink to="/about" title="About"/>
<MyNavLink to="/home" title="Home"/>

// index.jsx

import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'

export default class MyNavLink extends Component {
 render() {
  // const {to, title} = this.props
  return (
   // <NavLink activeClassName="demo" className="list" to={to}>{title}</NavLink>
   <NavLink activeClassName="demo" className="list" {...this.props}/>

  )
 }
}
```