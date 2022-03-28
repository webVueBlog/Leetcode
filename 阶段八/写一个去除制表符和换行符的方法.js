// \s会匹配空格，还是老实用[\t\n\v\r\f]吧

var str = 'lso so s\n sppsf';

function fn(str) {
    var s = str.replace(/\s+/g, ''); // lsosossppsf
    // var s = str.replace(/[\t\n\v\r\f]/g, ''); // lso so s sppsf
    // t n v r f
    return s;
}
console.log(fn(str));