function Da() {
 let n = 1;
 return function sum() {
  console.log(n++);
 };
}
//反复调用产生新的数据 永远不会再被用到 
//调一次函数就产生一次新的内存地址
//把里面的数据返回给外部 保证内存地址一直在
Da()(); //1 
Da()(); //1

//return 了sum 这块数据被使用了！
//不会被清除
let a = Da();
a(); //1
a(); //2
let b = Da();
b(); //1
b(); //2
b(); //3
let c = Da();
c(); //1
c(); //2
c(); //3
c(); //4
c(); //5
c(); //6
c(); //7
