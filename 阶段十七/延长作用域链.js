// 执行环境类型总共有两种(全局和局部)
// 有些语句可以在作用域链的前端临时增加一个变量对象，该变量对象会在代码执行后被移除

//1.try-catch语句的catch块
//2.with语句

//这两个语句都会在作用域链的前端添加一个变量对象。

//with语句会把指定的对象添加到作用域链中
//catch块会创建一个新的变量对象，其中包含的是被抛出的错误对象的声明

function buildUrl() {
    var qs = 'dsfds';
    //在此 with接收location对象 这个变量对象被添加到了作用域链的前端
    //with把location添加到了作用域前端
    with(herf) {
        //url成了函数执行环境的一部分 可以作为函数的值被返回
        var url = herf + qs;
    }
    console.log(url);

    return url;
}