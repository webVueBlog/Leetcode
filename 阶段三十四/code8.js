f = function() {return true;};   
g = function() {return false;};   
(function() {   
   if (g() && [] == ![]) {   
      f = function f() {return false;};   
      function g() {return true;}   
   }   
})();   
console.log(f());
// false