var friendName = 'World';
(function() {
  if (typeof friendName === 'undefined') {
    var friendName = 'Jack';
    console.log('Goodbye ' + friendName);
  } else {
    console.log('Hello ' + friendName);
  }
})();

// Goodbye Jack


// var name = 'World!';
// (function () {
//     var name;
//     if (typeof name === 'undefined') {
//         name = 'Jack';
//         console.log('Goodbye ' + name);
//     } else {
//         console.log('Hello ' + name);
//     }
// })();
