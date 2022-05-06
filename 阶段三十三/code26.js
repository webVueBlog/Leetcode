Promise.resolve().then(() => {
 console.log('1');
 throw 'Error';
}).then(() => {
 console.log('2');
}).catch(() => {
 console.log('3');
 throw 'Error';
}).then(() => {
 console.log('4');
}).catch(() => {
 console.log('5');
}).then(() => {
 console.log('6');
});


// 1
// 3
// 5
// 6