/**


form 标签的 enctype 属性指定将数据回发到服务器时浏览器如果对表单数据进行编码，其有三种编码形式：

application/x-www-form-urlencoded(也是默认格式)
application/x-www-form-urlencoded编码类型会将表单中发送到服务器之前都会进行编码(空格转换为 "+" 加号，特殊符号转换为 ASCII HEX 值)，数据编码成键值对的形式，当表单的action为post时，它会把form数据封装到 http body 中，然后发送到服务器；当表单的action位get时，它会把表单中发送的数据转换成一个字符串(如：a=1&b=2&c=3)并使用?连接到 url 后面。在不指定 enctype 属性时 application/x-www-form-urlencoded 是默认属性。
multipart/form-data
它不对字符进行编码，在使用包含文件(如图片、mp4等文件)上传控件的表单时必须使用该值
text/plain
数据以纯文本格式进行编码，空格转换为 "+" 加号，但不对特殊字符编码

<form> 标签的 enctype 属性，用来控制表单上传的数据的编码格式。其值和 HTTP 请求的 Content-type 值一样。在数据提交到服务器之前，会以 enctype 的值进行编码。

*/