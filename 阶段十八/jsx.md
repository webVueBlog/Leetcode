```js
var myStyle = {
    fontSize: 100,
    color: '#FF0000'
};
ReactDOM.render(
    <h1 style = {myStyle}>xxx</h1>,
    document.getElementById('example')
);
```

```js
var arr = [
  <h1>xxx</h1>,
  <h2>xxx，xxx！</h2>,
];
ReactDOM.render(
  <div>{arr}</div>,
  document.getElementById('example')
);
```