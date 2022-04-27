
```js
// 22
// 加规则，限制
Person.propTypes = {
 name: PropTypes.string,
 age: PropTypes.number.isRequired,
 speak: PropTypes.func,
}
Person.defaultProps = {
 sex: '男',
 age: 12
}

// props是只读的

class Person extends React.Component {
 constructor(props) {
  // 构造器是否接受props，是否传递给super，取决于：是否希望在构造器中通过this访问props
  super(props)
  console.log('constructor', this.props);
 }
 static propsTypes={}
 static defaultProps={}
}

// 函数式组件 refs state用不了
function Person(props) {
 console.log(props)
}
Person.propTypes = {}
Person.defaultProps = {}
```

