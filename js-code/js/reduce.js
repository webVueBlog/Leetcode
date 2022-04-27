let arr = [1,2,3,4,5]
arr.reduce((prev, next) => { return prev + next }, 0)

let arr2 = [1,2,3,[23,4,5]]
arr2.flat(Infinity).reduce((prev, next) => { return prev + next }, 0)

let arr3 = [{a:9, b:3, c:4}, {a:1, b:3}, {a:3}] 
arr3.reduce((prev, cur) => {
    return prev + cur["a"];
}, 0)
