/*
 * @lc app=leetcode.cn id=202 lang=javascript
 *
 * [202] 快乐数
 */

// @lc code=start
/**
 * @param {number} n
 * @return {boolean}
 */
var isHappy = function(n) {
    var seen = {};
    while (n !== 1 && !seen[n]) {
        seen[n] = true;
        n = sumOfSquares(n);
    }
    return n === 1 ? true : false;
};

function sumOfSquares(numString) {
    return numString.toString().split('').reduce(function(sum, num) {
        return sum + Math.pow(num, 2);
    }, 0);
}

// var isHappy = function(n) {
//     if (n === 1) return true
//     let p = getNext(n)
//     let q = getNext(getNext(n))
//     while (p !== q && q !== 1) {
//         p = getNext(p)
//         q = getNext(getNext(q))
//     }
//     return q === 1
// };

// 获取下一个节点
var getNext = function(n) {
    let sum = 0;
    while (n) {
        sum += (n % 10) ** 2
        n = Math.floor(n / 10)
    }
    return sum
}

// @lc code=end