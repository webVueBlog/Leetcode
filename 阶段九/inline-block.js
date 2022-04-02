//相邻的两个inline-block节点为什么会出现间隔，该如何解决

/**是换行符引起的间隔问题，间隙为 4px。
 * 消除间隙的方法：
 * 1）去掉换行符；
 * 2）对父元素添加 font-size:0，将字体大小设置为 0，换行符也会为 0px，从而消除间隙，再为 inline-block 元素设置我们需要的字体大小；
 * 3）将 inline-block 的 margin-right/left 设置为 -4px；
 * 4）将父元素的 letter-spacing 或 word-spacing 设置为 -4px，这两个属性会增加或减少字符间隔。word-spacing 对中文无效
 * inline-block 还有两个问题：即不同高度的两个 inline-block 顶部不对齐，以及 inline-block 底部多出几像素（多出空白）。
 * 解决方法是为 inline-block 元素设置 vertical-align:top。设置元素的垂直对齐方式 */