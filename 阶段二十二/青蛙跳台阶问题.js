/**
 * @param {number} n
 * @return {number}
 剑指 Offer 10- II. 青蛙跳台阶问题
 */
var numWays = function(n) {
    const dp = new Array(n);
    const mod = 1e9+7;
    dp[-1]=0;
    dp[0]=1;
    for(let i=1; i<=n; i++){
        dp[i] = (dp[i-1] + dp[i-2]) % mod;
    }
    return dp[n];
};