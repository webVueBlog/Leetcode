/**


区别：
伪元素在css1中已经存在当时用单冒号，css3时做了修订用双冒号 ::before ::after表示伪元素用来区别伪类。

作用：
在元素前面（::before）和后面（::after）加内容

::是伪元素 ::after::before::first-letter:first-line
:是伪类 :active:hover

:表示伪类，是一种样式，比如:hover, :active等

::表示伪元素，是具体的内容，比如::before是在元素前面插入内容，::after则是在元素后面插入内容，不过需要content配合，并且插入的内容是inline的。

:before和:after其实还是表示伪元素，在css3中已经修订为::before和::after了，只是为了能兼容IE浏览器，所以也可以表示成:before和:after


*/