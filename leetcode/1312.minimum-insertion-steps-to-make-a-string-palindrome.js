/*
 * @lc app=leetcode.cn id=1312 lang=javascript
 *
 * [1312] Minimum Insertion Steps to Make a String Palindrome
 */

// @lc code=start
/**
 * @param {string} s
 * @return {number}
 */
var minInsertions = function(s) {
    const n = s.length;
    const dp = new Array(n).fill(0).map(_ => new Array(n).fill(0));
    dp[-1] = new Array(n).fill(0);
    dp[-1][-1] = 0;
    for (let i = 0; i < n; i++) {
        dp[i][-1] = 0;
    }
    const s2 = s.split('').reverse().join('');

    for (let i = 0; i < n; i++) {
        for (let j = 0; j < n; j++) {
            if (s[i] === s2[j]) {
                dp[i][j] = dp[i - 1][j - 1] + 1;
            } else {
                dp[i][j] = Math.max(dp[i - 1][j], dp[i][j - 1]);
            }
        }
    }
    return n - dp[n - 1][n - 1];
};
// @lc code=end