/**
 * @param {number[]} coins
 * @param {number} amount
 * @return {number}
 322. 零钱兑换
 coins = [1, 2, 5], amount = 11
 dp[11] = ?
// 从左到右 dp[0] dp[1] dp[2] dp[3]
i 总金额 最少的硬币个数
dp[i]  = Math.min(dp[i-coin] + 1, dp[i-coin] + 1...) // icon值
dp[11] = dp[6] + (5) / dp[9] + (2) / dp[10] + (1)
                  1             1              1
         总金额为6的硬币数量
dp[6] dp[9] dp[10]
dp[6] = dp[1] + (5) / dp[4] + (2) / dp[5] + (1)
dp[1] dp[4] dp[5]
dp[1] = dp[-4] + (5) / dp[-1] + (2) / dp[0] + 1
dp[0] dp[i] >= 0
 */
var coinChange = function(coins, amount) {
    const dp = new Array(amount+1).fill(Infinity);
    dp[0] = 0;
    for (let i = 1; i <= amount; i++) {
        // dp[1] - dp[11]
        for (let coin of coins) {
            if (i - coin < 0) continue
            dp[i] = Math.min(dp[i], dp[i-coin] + 1)
        }
    }
    return dp[amount] === Infinity ? -1 : dp[amount]; // 硬币数量
};