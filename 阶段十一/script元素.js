// < script > 元素有下列 8 个属性
/**

1. async 可选。表示应该立即开始下载脚本，但不能阻止其他页面动作，比如 下载资源或等待其他 脚本加载。 只对外部脚本文件有效。
2. charset 可选。使用 src 指定的代码字符集。 这个属性很少使用，因为大多数浏览器不在乎它的值。
3. crossorigin: 可选。 配置相关请求的 CORS （跨源资源共享） 设置。 默认不使用 CORS。 crossorigin = "anonymous" 配置文件请求不必设置凭据标志。

crossorigin="use-credentials" 设置凭据标志，意味着 出站请求会包含凭据。

4. defer： 可选。表示脚本可以延迟到文档完全被解析和显示之后再执行。只对外部脚本文件有效。在IE7 及更早的版本中，对行内脚本也可以指定这个属性。
5. integrity: 可选。允许比对接收到的资源 和 指定的加密签名以验证子资源完整性（SRI，Subresource Integrity)。如果接收到 的资源的签名与这个属性指定的签名不匹配，则页面会报错，脚本不会执行。这个属性可以用于确保 内容分发网络（CDN，Content Delivery Network) 不会提供恶意内容。

6. language: 废弃。

7. src: 可选。表示包含要执行的代码的外部文件。

8. type: 可选。代替 language，表示代码块中 脚本语言的内容类型（也称 MIME 类型）。 text/javascript 
 */