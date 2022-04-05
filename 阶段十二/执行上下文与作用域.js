/**

执行上下文（以下简称“上下文”）

变量或函数的上下文决定了它们可以访问哪些数据，以及它们的行为。每个上下文都有一个关联的变量对象（variable object），而这个上下文中定义的所有变量和函数都存在于这个对象上。

上下文在其所有代码都执行完毕后会被销毁，包括定义在它上面的所有变量和函数

当代码执行流进入函数时，函数的上下文被推到一个上下文栈上。

在函数执行完之后，上下文栈会弹出该函数上下文，将控制权返还给之前的执行上下文。

ECMAScript程序的执行流就是通过这个上下文栈进行控制的。

上下文中的代码在执行的时候，会创建变量对象的一个作用域链（scope chain）。这个作用域链决定了各级上下文中的代码在访问变量和函数时的顺序。代码正在执行的上下文的变量对象始终位于作用域链的最前端。

如果上下文是函数，则其活动对象（activation object）用作变量对象。

活动对象最初只有一个定义变量：arguments。（全局上下文中没有这个变量。）

作用域链中的下一个变量对象来自包含上下文，再下一个对象来自再下一个包含上下文。以此类推直至全局上下文；全局上下文的变量对象始终是作用域链的最后一个变量对象。

代码执行时的标识符解析是通过沿作用域链逐级搜索标识符名称完成的。搜索过程始终从作用域链的最前端开始，然后逐级往后，直到找到标识符。

var color = "blue"; 
function changeColor() { 
 let anotherColor = "red"; 
 function swapColors() { 
 let tempColor = anotherColor; 
 anotherColor = color; 
 color = tempColor; 
 // 这里可以访问 color、anotherColor 和 tempColor 
 } 
 // 这里可以访问 color 和 anotherColor，但访问不到 tempColor 
 swapColors(); 
} 
// 这里只能访问 color
changeColor();

*/