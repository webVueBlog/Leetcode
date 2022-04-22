/**
 * @param {number} k
 * @return {number}
 面试题 17.09. 第 k 个数
 */
var getKthMagicNumber = function(k) {
    let p3 = 0,
        p5 = 0,
        p7 = 0
    const arr = [1]
    while (--k) {
        const val_3 = arr[p3] * 3,
            val_5 = arr[p5] * 5,
            val_7 = arr[p7] * 7
        const val = Math.min(val_3, Math.min(val_5, val_7))
        arr.push(val)
        val_3 === val && p3++
            val_5 === val && p5++
            val_7 === val && p7++
    }
    return arr[arr.length - 1]
};