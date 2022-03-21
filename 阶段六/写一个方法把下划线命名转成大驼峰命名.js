function changeLine(str) {
 if (typeof str !== 'string') {
  alert('请确认要删除的对象为字符串！');
 } else {
  var newName = '';
  var arr = str.split('_');

  let map1 = arr.map((v, i) => {
   if (i === 0) { return v };
   return v.substring(0, 1).toUpperCase() + v.substring(1);
  })

  newName = map1.join('')
  console.log(newName)
 }
}

changeLine('name_id_ll')