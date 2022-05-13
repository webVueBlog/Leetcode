/*
 * @lc app=leetcode.cn id=119 lang=javascript
 *
 * [119] 杨辉三角 II
 */

// @lc code=start
/**
 * @param {number} rowIndex
 * @return {number[]}
 * 给定一个非负索引 rowIndex，返回「杨辉三角」的第 rowIndex 行。

在「杨辉三角」中，每个数是它左上方和右上方的数的和。

输入: rowIndex = 3
输出: [1,3,3,1]

输入: rowIndex = 0
输出: [1]

输入: rowIndex = 1
输出: [1,1]

提示:

0 <= rowIndex <= 33
 
 (60 ms)
 */
var getRow = function(rowIndex) {
 var ans = new Array(rowIndex+1)
 // rowIndex 为 0 值 为 1
 ans[0] = ans[rowIndex] = 1
 for(let i = 1, up = rowIndex; i < rowIndex; i++, up--) {
  ans[i] = ans[i-1] * up / i
 }
 return ans
};
// @lc code=end

