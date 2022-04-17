/**
 * @param {number} n
 * @return {number}
 */
var fib = function(n) {
    const dp = new Array(n + 1);
    const mod = 1e9 + 7;
    dp[0] = 0;
    dp[1] = 1;
    for (let i = 2; i <= n; i++) {
        dp[i] = (dp[i - 1] + dp[i - 2]) % mod;
    }
    return dp[n];
};