/** 
 * 1.GET请求只能 URL 编码，而 POST 支持多种编码方式
 * 2.GET请求只接受 ASCII 字符的参数，而 POST 则没有限制
 * 3.GET请求的参数通过 URL传送，而 POST 放在 Request Body 中
 * 4.GET相对于 POST 更不安全，因为参数直接暴露在 URL 中
 * 5.GET请求会被浏览器主动缓存，而 POST 不会（除非自己手动设置）
 * 6.GET 请求在 URL 传参有长度限制，而 POST 则没有限制GET 产生的 URL 地址可以被收藏，而 POST 不可以
 * 7.GET 请求的参数会被完整的保留在浏览器的历史记录里，而 POST 的参数则不会
 * 8.GET 在浏览器回退时是无害的，而 POST 会再次提交请求 */