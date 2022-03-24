/**
 *将属性定义为以 _ 开始，来告诉使用者这是一个私有属性，请不要在外部使用。
  外部修改私有属性时可以使用访问器 setter 操作
  但这只是提示，就像吸烟时烟盒上的吸烟有害健康，但还是可以抽的
 */
// 继承时是可以使用的

const HOST = Symbol('主机');  //使用symbol定义protected属性
class Article {
 [HOST] = 'https://xxx.com';

 set host(url) {
  if (!/^https:\/\//i.test(url)) {
   throw new Error('网址错误');
  }
  this[HOST] = url;
 }

 lists() {
  return `${this[HOST]}/article`;
 }
}

class Common extends Article {
 lists() {
  return `${this[HOST]}/article`;
 }
}

let common = new Common
console.log(common.lists()); // https://xxx.com/article

let article = new Article();
console.log(article.lists()); //https://xxx.com/article
article.host = 'https://xxx.com';
console.log(article.lists()); //https://xxx.com/article
