// AJAZ 是Asynchronous JavaScript and XML的缩写，指的是通过JavaScript的异步通信，从服务器获取XML文档从中提取数据，再更新当前网页的对应部分，而不用刷新整个网页。

// 创建AJAX请求的步骤：
/**

1. 创建一个XMLHttpRequest对象
2. 在这个对象上使用open方法创建一个HTTP请求，open方法所需要的参数是请求的方法，请求的地址，是否异步和用户的认证信息
3. 在发起请求前，可以为这个对象添加一些信息和监听函数。比如说可以通过setRequestHeader方法来为请求添加头信息。还可以为这个对象添加一个状态监听函数。一个XMLHttpRequest对象一共有5个状态，当它的状态变化时会触发onreadystatechange事件，可以通过设置监听函数，来处理请求成功后的结果。
4. 当对象的readyState变为4的时候，代表服务器返回的数据接收完成，这个时候可以通过判断请求的状态，如果状态是2XX或者304的话则代表返回正常。这个时候就可以通过response中的数据来对页面进行更新了。
5. 当对象的属性和监听函数设置完成后，最后调用send方法来向服务器发起请求，可以传入参数作为发送的数据体。

*/

const SERVER_URL = '/server';
let xhr = new XMLHttpRequest();
// 创建Http请求
xhr.open('GET', SERVER_URL, true);
// 设置状态监听函数
xhr.onreadystatechange = function() {
 if(this.readyState !== 4) return;
 // 当请求成功时
 if(this.status === 200) {
  handle(this.response);
 }else{
  console.error(this.statusText);
 }
};
// 设置请求失败时的监听函数
xhr.onerror = function() {
 console.log(this.statusText);
};
// 设置请求头信息
xhr.responseType = 'json';
xhr.setRequestHeader('Accept', 'application/json');
// 发送Http请求
xhr.send(null)

