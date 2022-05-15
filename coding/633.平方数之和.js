/*
 * @lc app=leetcode.cn id=633 lang=javascript
 *
 * [633] 平方数之和
 */

// @lc code=start
/**
 * @param {number} c
 * @return {boolean}
 * 给定一个非负整数 c ，你要判断是否存在两个整数 a 和 b，使得 a2 + b2 = c 。

输入：c = 5
输出：true
解释：1 * 1 + 2 * 2 = 5

输入：c = 3
输出：false

(76 ms)
 */
var judgeSquareSum = function(c) {
    for (let i = 0; i * i <= c; i++) {
        let b = Math.sqrt(c - i * i);
        if (b === parseInt(b)) return true;
    }
    return false
};

// var judgeSquareSum = function(c) {
//     var r = Math.floor(Math.sqrt(c));
//     var l = 0;

//     while (l <= r) {
//         var sum = l ** 2 + r ** 2
//         if (sum === c) {
//             return true
//         } else if (sum < c) {
//             l++
//         } else {
//             r--
//         }
//     }
//     return false
// };
// @lc code=end