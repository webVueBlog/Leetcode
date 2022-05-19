/**
 * @param {number[]} nums
 * @return {number}
 312. 戳气球
 1 [3, 8]

 [1,3,1,5,8,1]
  0 1 2 3 4 5
  -------
        - start
      -------- 1->5 有气球2 / 3 / 4 (k的可能值)
(0,3)起始 结束 i->j 最后k
dp[0][3][k] = dp[0][k] + dp[k][3] + nums[0] * nums[k] * nums[3]
dp[i][j][k] = dp[i][k] + dp[k][j] + nums[i] * nums[k] * nums[j]
// 遍历k 尝试 有气球就可以
开区间
dp[0][2][?]
dp[0][5][?]

 [3,1,5,8]
  0 1 2 3

dp[0][1] + nums[-1] * nums[2] * nums[len] + dp[3][3]

dp[0][1] ?
    dp[0][0]
    dp[1][1]
dp[3][3] ?

  dp[0][3][?] = Math.coin;
 */
var maxCoins = function(nums) {
    nums = [1, ...nums, 1];
    let len = nums.length;
    let dp = new Array(len).fill(0).map(_ => new Array(len).fill(0));
    for(let i = len - 3; i >= 0; i--) {
        for(let j = i + 2; j < len; j++) {
            //1->5 2 / 3 / 4 
            for(let k = i + 1; k < j; k++) {
                dp[i][j] = Math.max(
                    dp[i][j],
                    dp[i][k] + dp[k][j] + nums[i] * nums[k] * nums[j]
                );
            }
        }
    }
    return dp[0][len-1];
};


