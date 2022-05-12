/*
 * @lc app=leetcode.cn id=5 lang=javascript
 *
 * [5] 最长回文子串
 */

// @lc code=start
/**
 * @param {string} s
 * @return {string}

给你一个字符串 s，找到 s 中最长的回文子串。

输入：s = "babad"
输出："bab"
解释："aba" 同样是符合题意的答案。

输入：s = "cbbd"
输出："bb"

提示：

1 <= s.length <= 1000
s 仅由数字和英文字母组成

 (160 ms)
 */
function longestPalindrome(s) {
 let ll = 0, rr = 0;
 // 遍历字符串
 for (let i = 0; i < s.length; i++)
   for (let j of [i, i+1])
     for (l = i, r = j; s[l] && s[l] === s[r]; l--, r++)
       [ll, rr] = (r-l+1) > (rr-ll+1) ? [l, r] : [ll, rr];
 
 return s.substring(ll, rr+1);
}
// @lc code=end

