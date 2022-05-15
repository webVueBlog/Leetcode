/*
 * @lc app=leetcode.cn id=66 lang=javascript
 *
 * [66] 加一
 */

// @lc code=start
/**
 * @param {number[]} digits
 * @return {number[]}
 * 给定一个由 整数 组成的 非空 数组所表示的非负整数，在该数的基础上加一。

最高位数字存放在数组的首位， 数组中每个元素只存储单个数字。

你可以假设除了整数 0 之外，这个整数不会以零开头。

输入：digits = [1,2,3]
输出：[1,2,4]
解释：输入数组表示数字 123。
(52 ms)
 */
var plusOne = function(digits) {
    for (var i = digits.length - 1; i >= 0; i--) {
        digits[i]++;
        if (digits[i] > 9) {
            digits[i] = 0;
        } else {
            return digits;
        }
    }
    digits.unshift(1);
    return digits;
};
// @lc code=end