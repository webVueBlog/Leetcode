/**
 * 浏览器请求
 * 有缓存
 * 是否过期
 * 
 * 是 Etag? 是 向web服务器请求带 If-None-Match
 *    Last-Modified？ 是 向web服务器请求带 If-Modified-Since
 *              服务器决策 - 》 200 0r 304?
 *                       304 -> 从缓存读取
 *     Etag? - 否 -> Last-Modified? 否 -》 向 web 服务器请求 -》 请求响应，缓存协商 -》 呈现
 * 是否过期？ 否 从缓存读取
 */