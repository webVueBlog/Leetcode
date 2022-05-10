/*
 * @lc app=leetcode.cn id=28 lang=javascript
 *
 * [28] 实现 strStr()
 */

// @lc code=start
/**
 * @param {string} haystack
 * @param {string} needle
 * @return {number}

给你两个字符串 haystack 和 needle ，请你在 haystack 字符串中找出 needle 字符串出现的第一个位置（下标从 0 开始）。如果不存在，则返回  -1 。

示例 1：
输入：haystack = "hello", needle = "ll"
输出：2

示例 2：
输入：haystack = "aaaaa", needle = "bba"
输出：-1

示例 3：
输入：haystack = "", needle = ""
输出：0

 */
// (64 ms)
var strStr = function(haystack, needle) {
 if(needle === '' || needle === haystack) return 0;
 if(haystack.length < needle.length) return -1;

 for(let i = 0; i < haystack.length - needle.length + 1; i++) {
  //开始在haystack中循环，直到剩下的子字符串比needle短
  if(haystack[i] === needle[0]) {
   //当我们看到一个字符匹配的第一个字符
   for(let j = 0; j < needle.length; j++) {
    if(needle[j] !== haystack[i + j]) {
     break;
    }else if(j === needle.length - 1) {
     return i;
    }
   }
  }
 }
 return -1;
};
// @lc code=end

