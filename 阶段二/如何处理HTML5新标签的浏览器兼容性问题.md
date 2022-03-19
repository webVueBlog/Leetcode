如何处理HTML5新标签的浏览器兼容性问题

方法一 :

1、使用静态资源的html5shiv包

    <!--[if lt IE9]>
    <script src="http://cdn.static.runoob.com/libs/html5shiv/3.7/html5shiv.min.js"></script>
    <![endif]-->

2、载入后，初始化新标签的css

header, section, footer, aside, nav, main, article, figure { display: block; }

方法二：

IE6/IE7/IE8支持通过document方法产生的标签，利用这一特性让这些浏览器支持HTML5新标签



