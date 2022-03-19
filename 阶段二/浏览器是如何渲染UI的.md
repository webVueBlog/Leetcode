浏览器是如何渲染UI的

浏览器获取HTML文件，然后对文件进行解析，形成DOM Tree

与此同时，进行CSS解析，生成Style Rules

接着将DOM Tree与Style Rules合成为 Render Tree

接着进入布局（Layout）阶段，也就是为每个节点分配一个应出现在屏幕上的确切坐标

随后调用GPU进行绘制（Paint），遍历Render Tree的节点，并将元素呈现出来

