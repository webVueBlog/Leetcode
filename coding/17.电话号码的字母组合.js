/*
 * @lc app=leetcode.cn id=17 lang=javascript
 *
 * [17] 电话号码的字母组合
 */

// @lc code=start
/**
 * @param {string} digits
 * @return {string[]}
 * 给定一个仅包含数字 2-9 的字符串，返回所有它能表示的字母组合。答案可以按 任意顺序 返回。

给出数字到字母的映射如下（与电话按键相同）。注意 1 不对应任何字母。

输入：digits = "23"
输出：["ad","ae","af","bd","be","bf","cd","ce","cf"]

输入：digits = ""
输出：[]

输入：digits = "2"
输出：["a","b","c"]

提示：

0 <= digits.length <= 4
digits[i] 是范围 ['2', '9'] 的一个数字。

 (76 ms)
 */
var letterCombinations = function(digits) {
 // 字符串为null，或者长度为0，返回空字符串
 if(digits == null || digits.length === 0) return [];
 const map = {
  2: 'abc',
  3: 'def',
  4: 'ghi',
  5: 'jkl',
  6: 'mno',
  7: 'pqrs',
  8: 'tuv',
  9: 'wxyz',
 };
 // 创建答案
 const res = [];
 const go = (i, s) => {
  // 如果i为字符串的长度 '2'
  if(i === digits.length) {
   res.push(s);
   return;
  }
  for(const c of map[digits[i]]) { // map[2[0]]
   go(i + 1, s + c); // ''+'a'
  }
 };
 go(0, '');
 return res;
};
// @lc code=end

