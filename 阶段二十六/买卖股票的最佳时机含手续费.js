/**
 * @param {number[]} prices
 * @param {number} fee
 * @return {number}
 714. 买卖股票的最佳时机含手续费
 dp[3][0] = Math.max(dp[2][0], dp[2][1] + prices[3] - fee);
 dp[3][1] = Math.max(dp[2][1], dp[2][0] - prices[3]);
 */
var maxProfit = function(prices, fee) {
    const n = prices.length;
    const dp = new Array(n).fill(0).map(() => new Array(2).fill(0));
    dp[0] = [0, -prices[0]];
    for(let i = 1; i < n; i++) {
        dp[i][0] = Math.max(dp[i-1][0], dp[i-1][1]+prices[i]-fee);
        dp[i][1] = Math.max(dp[i-1][1], dp[i-1][0] - prices[i]);
    }
    return dp[n-1][0];
};