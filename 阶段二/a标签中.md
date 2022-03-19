按照 lvha 顺序排列 a:link a:visited a:hover a:active

而引用CSS文件的@import就是造成这个问题的罪魁祸首。IE会先加载整个HTML文档的DOM，然后再去导入外部的CSS文件，因此，在页面DOM加载完成到CSS导入完成中间会有一段时间页面上的内容是没有样式的，这段时间的长短跟网速，电脑速度都有关系。 解决方法：只要在`<head>`之间加入一个`<link>或者<script>`元素就可以了。