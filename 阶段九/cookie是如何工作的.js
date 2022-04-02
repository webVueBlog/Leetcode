/**
 * 当浏览器发送一个请求的时候，浏览器会检查是否有相应的cookie，如果有就直接添加到Request Headers的cookie字段中
 * 当服务器需要cookie时，在http响应头添加set-cookie，浏览器接收到会自动识别
 */