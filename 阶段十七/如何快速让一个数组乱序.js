var arr = [1, 2, 3, 4, 5]
arr.sort(function(a, b) { return Math.random() > 0.5 ? 1 : -1 })
console.log(arr);