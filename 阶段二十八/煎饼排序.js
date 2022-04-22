/**
 * @param {number[]} arr
 * @return {number[]}
 969. 煎饼排序
 */
var pancakeSort = function(arr) {
    // 首先找到数组的最大位 把最大值反转到尾部
    // 找到最大值到第一，再到最后一位
    const ret = []
    while (arr.length) {
        let max = getMax(arr)
        if (max !== arr.length - 1) {
            if (max !== 0) {
                ret.push(max + 1)
                reverse(arr, max)
            }
            ret.push(arr.length)
            reverse(arr, arr.length - 1)
        }
        arr.pop()
    }
    return ret
};

var getMax = function(arr) {
    let s = 0
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] > arr[s]) s = i
    }
    return s
}

var reverse = function(arr, n) {
    let k = 0
    while (k < n) {
        [arr[k], arr[n]] = [arr[n], arr[k]]
        k++
        n--
    }
}