/*
 * @lc app=leetcode.cn id=8 lang=javascript
 *
 * [8] 字符串转换整数 (atoi)
 */

// @lc code=start
/**
 * @param {string} s
 * @return {number}

输入：s = "   -42"
输出：-42

输入：s = "4193 with words"
输出：4193

(72 ms)

 */
var myAtoi = function(s) {
 return Math.max(Math.min(parseInt(s) || 0, 2147483647), -2147483648)
};
// @lc code=end

