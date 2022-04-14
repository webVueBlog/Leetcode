/**
 * @param {number[]} coins
 * @param {number} amount
 * @return {number}
 322. 零钱兑换
 */
var coinChange = function(coins, amount) {
    const dp = new Array(amount+1).fill(Infinity);
    dp[0] = 0;
    for (let i = 1; i <= amount; i++) {
        for (let coin of coins) {
            if (i - coin < 0) continue
            dp[i] = Math.min(dp[i], dp[i-coin] + 1)
        }
    }
    return dp[amount] === Infinity ? -1 : dp[amount];
};