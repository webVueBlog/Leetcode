/**
 * @param {number} n
 * @return {number}
 * 剑指 Offer 14- I. 剪绳子
 * 2*6 = 12
 * dp[2] * 6 = ?
 * 2 * dp[6] = ?
 * dp[2] * dp[6] = ?
 */
var cuttingRope = function(n) {
    const dp = new Array(n + 1).fill(0);
    dp[1] = 1;
    for (let i = 2; i <= n; i++) {
        for (let j = 1; j < i; j++) {
            dp[i] = Math.max(
                dp[i],
                j * (i - j),
                dp[j] * (i - j),
                dp[j] * dp[i - j]
            );
        }
    }
    return dp[n];
};