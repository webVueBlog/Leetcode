/**
 * @param {number} k
 * @param {number[]} prices
 * @return {number}
 188. 买卖股票的最佳时机 IV
 */
var maxProfit = function(K, prices) {
    const n = prices.length;
    if(n === 0) return 0;
    const dp = new Array(n).fill(0).map(() => {
         return new Array(K+1).fill(0).map(() => {
             return new Array(2).fill(0);
         })
    }); 

    for(let i = 0; i<n; i++) {
        for(let k = 0; k<= K; k++) {
            if(i === 0) {
                dp[i][k][0] = 0;
                dp[i][k][1] = -prices[i];
                continue;
            }
            if(k===0) {
                dp[i][k][0] = 0
            }else{
                dp[i][k][0]=Math.max(dp[i-1][k][0],dp[i-1][k-1][1]+prices[i])
            }
            dp[i][k][1]=Math.max(dp[i-1][k][0]-prices[i],dp[i-1][k][1])
        }
    }

    return dp[n-1][K][0];
};