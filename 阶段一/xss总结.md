## xss攻击

1. 往 web 页面插入恶意的 script 代码，当用户浏览该网页时，嵌入其中的 web 里面的 script 代码就会被执行，从而达到恶意攻击用户的目的。

比如说 document.cookie 就可以成功盗取用户的 cookie 信息。

2. 通常是通过 “php 的输出函数" 将 js 代码输出到 html 页面中。通过本地浏览器执行的，所以xss 漏洞关键就是 ”寻找参数未过滤的输出函数"

反射型xss(非持久化)：攻击者事先准备好攻击链接，需要欺骗用户自己去点击链接才触发 xss 代码，容易出现在搜索界面。

防御：

1. 在输出 html 时，加上 content security policy 的 http header (可以防止 xss 被攻击时，嵌入第三方脚本)
2. 在设置 cookie 时，加上 httpOnly 参数（可以防止 cookie 被盗取）
3. 在开发 api 时，加上 referer

存储型xss（持久化）：先将攻击代码存储进数据库或文件中，当 web 程序读取利用代码时再输出在页面上执行利用代码。存储型xss不考虑浏览器的过滤问题，屏蔽性也好很多。

一次提交之后，每当有用户访问这个页面都会受到 xss 攻击，危害⚠️巨大。

防御：htmlentities

却会转换所有的 html 代码，连同里面的它无法识别的中文字符也会转化。

https://github.com/webVueBlog/Leetcode