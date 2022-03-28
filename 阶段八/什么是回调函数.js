// 通常将一个函数B传入另一个函数A，并且在 需要的时候再调用函数A。

/**
 * 

回调函数就是指函数在初始定义的时候先不执行，等满足一定条件以后再拿出来执行
回调函数首先作为一个函数的参数传入，当这个函数执行后再执行的函数，往往会依赖前一个函数执行的结果。
 */

setTimeout(() => { console.log('在本轮任务最后执行!') }, 0);

/**
 * 
回调函数一般用来解决异步请求

 */

/**
 * 普通语法
 * @param scr:图片的url地址
 * @param callback：图片加载成功的回调函数
 * @param fail：图片加载失败的回调函数
 */
function loadImg(scr, callback, fail) {
    var img = document.createElement('img');

    // onload 事件在图片加载完成后立即执行,成功后执行callback函数,相当于一个回调函数。
    img.onload = function() {
        callback(img) // 图片加载成功执行的回调函数,传入img
    };
    // 图片加载失败执行这个函数
    img.onerror = function() {
        fail() // 图片加载失败执行的回调函数,传入img
    };
    img.src = scr
}

var src = 'https://xxx.png';

// 调用函数，传入2个回调函数，第一个是成功的回调，第二个是失败的回调。
loadImg(src, function(img) {
    console.log(img.width) // 回调函数里打印图片的宽

}, function() {
    console.log('failed') // 这个是失败的回调函数
});