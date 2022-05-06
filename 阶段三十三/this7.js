var myObject = {
 foo: "bar",
 func: function() {
     var self = this;
     console.log(this.foo);  
     console.log(self.foo);  
     (function() {
         console.log(this.foo);  
         console.log(self.foo);  
     }());
 }
};
myObject.func();

// bar bar undefined bar

// 立即执行 匿名函数表达式