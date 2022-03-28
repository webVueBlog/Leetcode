/**
 * 

在移动端做开发时，必须要搞清楚 viewport 这一设置。

viewport 就是视区窗口，也就是浏览器中显示网页的部分。PC 端上基本等于设备显示区域，但在移动端上 viewport 会超出设备的显示区域（即会有横向滚动条出现）。
设备默认的 viewport 在 980 - 1024 之间。

为了让移动端可以很好地显示页面，因此需要对 viewport 进行设置。相关的设置值如下：

width	设置 layout viewport 的宽度，为一个正整数，或字符串"width-device"
initial-scale	设置页面的初始缩放值，为一个数字，可以带小数
minimum-scale	允许用户的最小缩放值，为一个数字，可以带小数
maximum-scale	允许用户的最大缩放值，为一个数字，可以带小数
height	设置 layout viewport 的高度，这个属性对我们并不重要，很少使用
user-scalable	是否允许用户进行缩放，值为"no"或"yes", no 代表不允许，yes 代表允许

viewport 是在 meta 标签内进行控制。

// width=device-width, initial-scale=1.0 是为了兼容不同浏览器

<meta
 name="viewport"
 content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=0"
/>

 */