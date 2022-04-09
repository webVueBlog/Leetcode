/**

由于中文比较特殊，最稳妥的还是使用 unicode 来进行匹配。这两个 unicode 分别表示第一个和最后一个汉字。

*/

function isChinese(str) {
    const re = /^[\u4e00-\u9fa5]+$/;
    return re.test(str);
}

console.log(isChinese('劳斯莱斯了'))