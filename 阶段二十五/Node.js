/**

DOM Level 1 描述了名为 Node 的接口，这个接口是所有 DOM 节点类型都必须实现的。

所有节点类型都继承 Node 类型，因此所有类型都共享相同的基本属性和方法。


每个节点都有 nodeType 属性，表示该节点的类型。节点类型由定义在 Node 类型上的 12 个数值常量表示：

Node.ELEMENT_NODE（1）//node.element_node

Node.ATTRIBUTE_NODE（2）//node.attribute_node

Node.TEXT_NODE（3）//node.text_node

Node.CDATA_SECTION_NODE（4）//node.cdata_section_node

Node.ENTITY_REFERENCE_NODE（5）//node.entity_reference_node

Node.ENTITY_NODE（6）//node.entity_node

Node.PROCESSING_INSTRUCTION_NODE（7）//node.processing_instruction_node

Node.COMMENT_NODE（8）//node.comment_node

Node.DOCUMENT_NODE（9）//node.document_node

Node.DOCUMENT_TYPE_NODE（10）//node.document_type_node

Node.DOCUMENT_FRAGMENT_NODE（11）//node.document_fragment_node

Node.NOTATION_NODE（12）//node.notation_node

最常用到的是元素节点和文本节点

nodeName 与 nodeValue 保存着有关节点的信息。这两个属性的值完全取决于节点类型。

if (someNode.nodeType == 1){ 
 value = someNode.nodeName; // 会显示元素的标签名
}

对元素而言，nodeName 始终等于元素的标签名，而 nodeValue 则始终为 null。

2. 节点关系

每个节点都有一个 childNodes 属性，其中包含一个 NodeList 的实例。


NodeList 是一个类数组对象，用于存储可以按位置存取的有序节点。


NodeList 是实时的活动对象

每个节点都有一个 parentNode 属性，指向其 DOM 树中的父元素。

childNodes 中的所有节点都有同一个父元素，因此它们的 parentNode 属性都指向同一个节点。


*/