/*
 * @lc app=leetcode.cn id=3 lang=javascript
 *
 * [3] 无重复字符的最长子串
 */

// @lc code=start
/**
 * @param {string} s
 * @return {number}

给定一个字符串 s ，请你找出其中不含有重复字符的 最长子串 的长度。

输入: s = "abcabcbb"
输出: 3 
解释: 因为无重复字符的最长子串是 "abc"，所以其长度为 3。

输入: s = "bbbbb"
输出: 1
解释: 因为无重复字符的最长子串是 "b"，所以其长度为 1。

0 '-' 'a' '-' 0
0 '-'
{a: 0} '-' 0 '-' 1

1 '-' 'b' '-' 1
0 '-'
{a: 0, b: 1} '-' 1 '-' 2

2 '-' 'c' '-' 2
0 '-'
{a: 0, b: 1, c: 2} '-' 2 '-' 3

3 '-' 'a' '-' 3
1 '-'
{a: 3, b: 1, c: 2} '-' 3 '-' 3

3 '-' 'b' '-' 4
2 '-'
{a: 3, b: 4, c: 2} '-' 3 '-' 3

3 '-' 'c' '-' 5
3 '-'
{a: 3, b: 4, c: 5} '-' 3 '-' 3

3 '-' 'b' '-' 6
5 '-'
{a: 3, b: 6, c: 5} '-' 3 '-' 2

3 '-' 'b' '-' 7
7 '-'
{a: 3, b: 7, c: 5} '-' 3 '-' 1

 */
// (100 ms) 返回长度
function lengthOfLongestSubstring(s) {
 const map = {};
 var left = 0;
 
 return s.split('').reduce((max, v, i) => {
     left = map[v] >= left ? map[v] + 1 : left;
     map[v] = i;
     return Math.max(max, i - left + 1);
 }, 0);
}
// @lc code=end

