console.log('start'); //1
async function async1() {
    console.log('async1'); //3
    await async2();
    console.log('async1 end'); //7
    await async3();
    console.log('async end？'); //10
}

function async2() {
    console.log('async2'); //4
}

function async3() {
    console.log('async31 end111111'); //8
}
console.log('scrpit start'); //2
setTimeout(() => {
    console.log('setTimeOut'); //11
}, 0);
async1();
new Promise(function(reslove) {
    console.log('promise1'); //5
    reslove('promise2');
}).then((res) => {
    console.log(res); //9
});

console.log('script end'); //6