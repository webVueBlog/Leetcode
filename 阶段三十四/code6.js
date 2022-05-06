var a=3;
function c(){
   console.log(a);
}

(function(){
 var a=4;
 c();
})();

// js中变量的作用域链与定义时的环境有关，与执行时无关。执行环境只会改变this、传递的参数、全局变量等