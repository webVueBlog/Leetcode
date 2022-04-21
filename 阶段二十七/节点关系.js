/**


每个节点都有一个 childNodes 属性，其中包含一个 NodeList 的实例。NodeList 是一个类数组
对象，用于存储可以按位置存取的有序节点。注意，NodeList 并不是 Array 的实例，但可以使用中括
号访问它的值，而且它也有 length 属性。NodeList 对象独特的地方在于，它其实是一个对 DOM 结
构的查询，因此 DOM 结构的变化会自动地在 NodeList 中反映出来。我们通常说 NodeList 是实时的
活动对象，而不是第一次访问时所获得内容的快照。


文档中的所有节点都与其他节点有关系。这些关系可以形容为家族关系，相当于把文档树比作家谱。
在 HTML 中，<body>元素是<html>元素的子元素，而<html>元素则是<body>元素的父元素。<head>
元素是<body>元素的同胞元素，因为它们有共同的父元素<html>。

使用中括号或使用 item()方法访问 NodeList 中的元素


每个节点都有一个 parentNode 属性，指向其 DOM 树中的父元素。childNodes 中的所有节点都
有同一个父元素，因此它们的 parentNode 属性都指向同一个节点。此外，childNodes 列表中的每个
节点都是同一列表中其他节点的同胞节点。而使用 previousSibling 和 nextSibling 可以在这个列
表的节点间导航。这个列表中第一个节点的 previousSibling 属性是 null，最后一个节点的
nextSibling 属性也是 null


if (someNode.nextSibling === null){ 
 alert("Last node in the parent's childNodes list."); 
} else if (someNode.previousSibling === null){ 
 alert("First node in the parent's childNodes list."); 
}


注意，如果 childNodes 中只有一个节点，则它的 previousSibling 和 nextSibling 属性都是
null。


父节点和它的第一个及最后一个子节点也有专门属性：firstChild 和 lastChild 分别指向
childNodes 中的第一个和最后一个子节点。someNode.firstChild 的值始终等于 someNode. 
childNodes[0]，而 someNode.lastChild 的值始终等于 someNode.childNodes[someNode. 
childNodes.length-1]。如果只有一个子节点，则 firstChild 和 lastChild 指向同一个节点。如
果没有子节点，则 firstChild 和 lastChild 都是 null。

hasChildNodes()，这个方法如果返回 true 则说明节点有一个或多个子节点。

ownerDocument 属性是一个指向代表整个文档的文档节点
的指针。




*/