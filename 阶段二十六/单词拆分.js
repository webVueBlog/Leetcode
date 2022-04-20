/**
 * @param {string} s
 * @param {string[]} wordDict
 * @return {boolean}
 139. 单词拆分
 */
var wordBreak = function(s, wordDict) {
    const n = s.length;
    const dp = new Array(n + 1).fill(false);
    dp[0] = true;
    for (let i = 1; i <= n; i++) {
        for (let j = 0; j < i; j++) {
            if (dp[j] && wordDict.indexOf(s.slice(j, i)) !== -1) {
                dp[i] = true;
                break;
            }
        }
    }
    return dp[n];
};