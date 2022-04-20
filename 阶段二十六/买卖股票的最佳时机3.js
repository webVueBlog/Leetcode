/**
 * @param {number[]} prices
 * @return {number}
 123. 买卖股票的最佳时机 III
 i天k几笔j持有
 dp[3][0][0]=max(dp[2][0][0], dp[2][-1][1]+prices[i]))
 dp[3][0][1]=max(dp[2][0][0]-prices[i],dp[2][0][1])
 */
var maxProfit = function(prices) {
    const n = prices.length;
    const dp = new Array(n).fill(0).map(() => {
        // 0 1 2 笔
         return new Array(3).fill(0).map(() => {
             return new Array(2).fill(0);
         })
    }); 

    for(let i = 0; i<n; i++) {
        for(let k = 0; k<= 2; k++) {
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

    return dp[n-1][2][0];
};