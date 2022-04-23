/**

Element 表示XML或HTML元素，对外暴露出访问元素标签名、子节点和属性的能力。

Element 类型的节点具有以下特征：

nodeType 等于 1；

nodeName 值为元素的标签名；

nodeValue 值为 null；

parentNode 值为 Document 或 Element 对象；

子节点可以是 Element、Text、Comment、ProcessingInstruction、CDATASection、
EntityReference 类型。

可以通过 nodeName 或 tagName 属性来获取元素的标签名。这两个属性返回同样的值


let div = document.getElementById("myDiv"); 
alert(div.tagName); // "DIV" 
alert(div.tagName == div.nodeName); // true

在 HTML 中，元素标签名始终以全大写表示；在 XML（包括 XHTML）中，标签名始终与源
代码中的大小写一致。

所有 HTML 元素都通过 HTMLElement 类型表示

id，元素在文档中的唯一标识符；

title，包含元素的额外信息，通常以提示条形式展示；

lang，元素内容的语言代码

dir，语言的书写方向

className，相当于 class 属性，用于指定元素的 CSS 类

let div = document.getElementById("myDiv"); 
alert(div.id); // "myDiv" 
alert(div.className); // "bd" 
alert(div.title); // "Body text" 
alert(div.lang); // "en" 
alert(div.dir); // "ltr"


div.id = "someOtherId"; 
div.className = "ft"; 
div.title = "Some other text"; 
div.lang = "fr"; 
div.dir ="rtl";


取得属性

getAttribute() setAttribute() removeAttribute()

let div = document.getElementById("myDiv"); 
alert(div.getAttribute("id")); // "myDiv" 
alert(div.getAttribute("class")); // "bd" 
alert(div.getAttribute("title")); // "Body text" 
alert(div.getAttribute("lang")); // "en" 
alert(div.getAttribute("dir")); // "ltr"

getAttribute()主要用于取得自定义属性的值。


div.setAttribute("id", "someOtherId"); 
div.setAttribute("class", "ft"); 
div.setAttribute("title", "Some other text"); 
div.setAttribute("lang","fr"); 
div.setAttribute("dir", "rtl");


setAttribute()适用于 HTML 属性，也适用于自定义属性。


div.id = "someOtherId"; 
div.align = "left";

div.mycolor = "red"; 
alert(div.getAttribute("mycolor")); // null

removeAttribute()用于从元素中删除属性。

div.removeAttribute("class");


Element 类型是唯一使用 attributes 属性的 DOM 节点类型。attributes 属性包含一个
NamedNodeMap 实例，是一个类似 NodeList 的“实时”集合。


getNamedItem(name)，返回 nodeName 属性等于 name 的节点；

removeNamedItem(name)，删除 nodeName 属性等于 name 的节点；

setNamedItem(node)，向列表中添加 node 节点，以其 nodeName 为索引；

item(pos)，返回索引位置 pos 处的节点。

let id = element.attributes.getNamedItem("id").nodeValue;

let id = element.attributes["id"].nodeValue;

element.attributes["id"].nodeValue = "someOtherId";

let oldAttr = element.attributes.removeNamedItem("id");

element.attributes.setNamedItem(newAttr);

创建元素

可以使用 document.createElement()方法创建新元素。

div.id = "myNewDiv"; 
div.className = "box";

可以使用 appendChild()、insertBefore()或 replaceChild()。


for (let i = 0, len = element.childNodes.length; i < len; ++i) { 
 if (element.childNodes[i].nodeType == 1) { 
 // 执行某个操作
 } 
}


 */