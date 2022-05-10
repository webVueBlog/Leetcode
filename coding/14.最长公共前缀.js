/*
 * @lc app=leetcode.cn id=14 lang=javascript
 *
 * [14] 最长公共前缀
 */

// @lc code=start
/**
 * @param {string[]} strs
 * @return {string}

提示：

1 <= strs.length <= 200
0 <= strs[i].length <= 200
strs[i] 仅由小写英文字母组成

编写一个函数来查找字符串数组中的最长公共前缀。

如果不存在公共前缀，返回空字符串 ""。

示例 1：
输入：strs = ["flower","flow","flight"]
输出："fl"

示例 2：
输入：strs = ["dog","racecar","car"]
输出：""
解释：输入不存在公共前缀。

(68 ms)
 */
var longestCommonPrefix = function(strs) {
 if(strs === undefined || strs.length === 0) { return ''; }

 return strs.reduce((prev, next) => {
  let i = 0;
  while(prev[i] && next[i] && prev[i] === next[i]) i++;
  return prev.slice(0, i);
 })
;};
// @lc code=end

