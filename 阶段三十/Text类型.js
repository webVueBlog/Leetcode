/**

let textNode = div.firstChild; // 或 div.childNodes[0]

div.firstChild.nodeValue = "Some other message";

1. 创建文本节点
document.createTextNode()可以用来创建新文本节点，它接收一个参数，即要插入节点的文本。

let textNode = document.createTextNode("<strong>Hello</strong> world!");

创建新文本节点后，其 ownerDocument 属性会被设置为 document。


let element = document.createElement("div"); 
element.className = "message"; 
let textNode = document.createTextNode("Hello world!"); 
element.appendChild(textNode); 
document.body.appendChild(element);

一般来说一个元素只包含一个文本子节点。

let element = document.createElement("div"); 
element.className = "message"; 
let textNode = document.createTextNode("Hello world!"); 
element.appendChild(textNode); 
let anotherTextNode = document.createTextNode("Yippee!"); 
element.appendChild(anotherTextNode); 
document.body.appendChild(element);

相邻文本节点的父节点上调用 normalize()时，所有同胞文本节点会被合并为一个文本节点


let element = document.createElement("div"); 
element.className = "message"; 
let textNode = document.createTextNode("Hello world!"); 
element.appendChild(textNode); 
let anotherTextNode = document.createTextNode("Yippee!"); 
element.appendChild(anotherTextNode); 
document.body.appendChild(element); 
alert(element.childNodes.length); // 2 
element.normalize(); 
alert(element.childNodes.length); // 1 
alert(element.firstChild.nodeValue); // "Hello world!Yippee!"

拆分文本节点 splitText()

 */