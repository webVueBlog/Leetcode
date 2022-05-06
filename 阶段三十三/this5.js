var obj = { 
 name : 'xxx', 
 fun : function(){ 
   console.log(this.name); 
 } 
} 
obj.fun()     // xxx
new obj.fun() // undefined
// 使用new构造函数时，其this指向的是全局环境window