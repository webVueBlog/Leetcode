/*
 * @lc app=leetcode.cn id=9 lang=javascript
 *
 * [9] 回文数
 */

// @lc code=start
/**
 * @param {number} x
 * @return {boolean}

给你一个整数 x ，如果 x 是一个回文整数，返回 true ；否则，返回 false 。

回文数是指正序（从左向右）和倒序（从右向左）读都是一样的整数。

例如，121 是回文，而 123 不是。

输入：x = -121
输出：false
解释：从左向右读, 为 -121 。 从右向左读, 为 121- 。因此它不是一个回文数。

输入：x = 10
输出：false
解释：从右向左读, 为 01 。因此它不是一个回文数。

121/10
12.1
12 Math.floor(i/10)

isPalindrome(121)

121 '-' 0 '-' 1 '-' 12 // 121 % 10 = 1
1
12 '-' 10 '-' 2 '-' 1
12
1 '-' 120 '-' 1 '-' 0
121

isPalindrome(1215)

1215 '-' 0 '-' 5 '-' 121
5
121 '-' 50 '-' 1 '-' 12
51
12 '-' 510 '-' 2 '-' 1
512
1 '-' 5120 '-' 1 '-' 0
5121

121 % 10
1
12 % 10
2
1 % 10
1

Math.floor(121/10)
12
Math.floor(12/10)
1
Math.floor(1/10)
0
 for(let i = x; i >= 1; i = Math.floor(i/10)) {
  console.log(i, '-', rev * 10, '-', i % 10, '-', Math.floor(i/10))
  rev = rev * 10 + i % 10
  console.log(rev)
 }
 */
// (168 ms)
var isPalindrome = function(x) {
 if(x < 0) return false
 let rev = 0;
 for(let i = x; i >= 1; i = Math.floor(i / 10)) {
  rev = rev * 10 + i % 10
 }
 return rev === x;
};
// @lc code=end

