setTimeout(function () {
 console.log(1);
}, 100);

new Promise(function (resolve) {
 console.log(2);
 resolve();
 console.log(3);
}).then(function () {
 console.log(4);
 new Promise((resove, reject) => {
   console.log(5);
   setTimeout(() =>  {
     console.log(6);
   }, 10);
 })
});
console.log(7);
console.log(8);


// 2
// 3
// 7
// 8
// 4
// 5
// 6
// 1