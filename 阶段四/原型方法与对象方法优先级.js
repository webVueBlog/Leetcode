let obj = {
 show() {
  console.log('xxx');
 },
 render() {
  console.log('自己的render');
 }
};
obj.__proto__.render = function () {
 console.log('长辈的render');
};
obj.show();
obj.render() //自己的render
