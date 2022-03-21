
var str = '  abc d e f  g ';
function trim(str) {
 var reg = /\s+/g;
 if (typeof str === 'string') {
  var trimStr = str.replace(reg, '');
 }
 console.log(trimStr)
}
trim(str)
