// 将js对象转换为树形结构
/**
// 转换前：
source = [{
            id: 1,
            pid: 0,
            name: 'body'
          }, {
            id: 2,
            pid: 1,
            name: 'title'
          }, {
            id: 3,
            pid: 2,
            name: 'div'
          }]
// 转换为: 
tree = [{
          id: 1,
          pid: 0,
          name: 'body',
          children: [{
            id: 2,
            pid: 1,
            name: 'title',
            children: [{
              id: 3,
              pid: 1,
              name: 'div'
            }]
          }
        }]

 */

function jsonToTree(data) {
 let result = []
 if(!Array.isArray(data)) {
  return result
 }
 // 使用map，将当前对象的id与当前对象对应存储起来
 let map = {}
 data.forEach(item => {
  map[item.id] = item
 });
 data.forEach(item => {
  let parent = map[item.pid];
  if(parent) {
   (parent.children || (parent.children = [])).push(item)
  } else {
   result.push(item)
  }
 });
 return result;
}
