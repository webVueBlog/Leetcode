
axios是一个基于promise的方法，可以发送get，post等请求，同时支持浏览器端和服务端的请求。

原理：

createInstance底层根据默认设置新建一个Axios对象， axios中所有的请求[axios, axios.get, axios.post等...]内部调用的都是Axios.prototype.request,
将Axios.prototype.request的内部this绑定到新建的Axios对象上,从而形成一个axios实例。新建一个Axios对象时，会有两个拦截器，request拦截器，response拦截器。

特点:

1.从浏览器创建XMLHttpRequest

2.从node.js发起http请求

3.支持promise api

4.拦截请求和响应(axios.interceptors.request/response)

5.转换请求和响应数据

6.取消请求

7.自动转化为JSON格式

8.客户端防止CSRF/XSRF


