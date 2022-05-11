/*
 * @lc app=leetcode.cn id=258 lang=javascript
 *
 * [258] 各位相加
 */

// @lc code=start
/**
 * @param {number} num
 * @return {number}

给定一个非负整数 num，反复将各个位上的数字相加，直到结果为一位数。返回这个结果。

输入: num = 38
输出: 2 
解释: 各位相加的过程为：
38 --> 3 + 8 --> 11
11 --> 1 + 1 --> 2
由于 2 是一位数，所以返回 2。

输入: num = 0
输出: 0

(68 ms)
 */
var addDigits = function(num) {
 if(isNaN(num) || num === 0) return 0;
 if(num<10) return num;
 return num % 9 === 0 ? 9 : num % 9;
};
// @lc code=end

