/**
 * @param {number} n
 * @return {number}
 剑指 Offer 10- II. 青蛙跳台阶问题
 */
 // 1,1,2,3,5,8,13
    // 0,1,2,3,4,5
// dp[i] = 7  dp[i] = dp[i-1] + dp[i-2]
// dp[6] = dp[5] + dp[4]
// dp[5] = dp[4] + dp[3] ...
// d[2] = dp[1] + dp[0]
// dp[1] = dp[0] + dp[-1]
// dp[0] = 1
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