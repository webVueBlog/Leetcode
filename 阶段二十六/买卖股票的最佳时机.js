/**
 * @param {number[]} prices
 * @return {number}
 122. 买卖股票的最佳时机 II
 dp[5][1]=Math.max(dp[4][1],dp[4][0]-prices[5]);
 dp[5][0]=Math.max(dp[4][0],dp[4][1]+prices[5]);
 */
var maxProfit = function(prices) {
    const n = prices.length;
    const dp = new Array(n).fill(0).map(() => new Array(2).fill(0));
    dp[0]=[0,-prices[0]];
    for(let i=1; i<n; i++) {
        dp[i][1] = Math.max(dp[i-1][1], dp[i-1][0]-prices[i]);
        dp[i][0] = Math.max(dp[i-1][0], dp[i-1][1] + prices[i]);
    }
    return dp[n-1][0]
};