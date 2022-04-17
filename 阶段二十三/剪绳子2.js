/**
 * @param {number} n
 * @return {number}
 */
var cuttingRope = function(n) {
    const dp = new Array(n + 1).fill(0 n); // 0n

    const mod = BigInt(1e9 + 7);

    dp[1] = 1 n; // 1n

    for (let i = 2; i <= n; i++) {
        for (let j = 1; j < i; j++) {
            let curr = dp[i];
            if (BigInt(j * (i - j)) > curr) {
                curr = BigInt(j * (i - j));
            }
            if (BigInt(dp[j] * BigInt(i - j)) > curr) {
                curr = BigInt(dp[j] * BigInt(i - j));
            }
            if (BigInt(dp[j] * dp[i - j]) > curr) {
                curr = BigInt(dp[j] * dp[i - j]);
            }
            dp[i] = curr;
        }
    }
    return dp[n] % mod;
};