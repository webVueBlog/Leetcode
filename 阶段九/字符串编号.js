function getNum(arr) {
    let map = new Map();
    let result = [];
    for (const i of arr) {
        if (map.has(i)) {
            map.set(i, map.get(i) + 1);
        } else {
            map.set(i, 1);
        }
        result.push(i + map.get(i));
    }
    return result
}
let arr = ["ab", "c", "d", "ab", "c", "ab"];
console.log(getNum(arr)); // [ 'ab1', 'c1', 'd1', 'ab2', 'c2', 'ab3' ]