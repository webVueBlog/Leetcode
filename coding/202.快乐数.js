/*
 * @lc app=leetcode.cn id=202 lang=javascript
 *
 * [202] 快乐数
 */

// @lc code=start
/**
 * @param {number} n
 * @return {boolean}

编写一个算法来判断一个数 n 是不是快乐数。

「快乐数」 定义为：

对于一个正整数，每一次将该数替换为它每个位置上的数字的平方和。
然后重复这个过程直到这个数变为 1，也可能是 无限循环 但始终变不到 1。
如果这个过程 结果为 1，那么这个数就是快乐数。
如果 n 是 快乐数 就返回 true ；不是，则返回 false 。

输入：n = 2
输出：false

(68 ms)

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