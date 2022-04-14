/**
 * @param {number[]} nums
 * @return {number}
 312. 戳气球
 */
var maxCoins = function(nums) {
    nums = [1, ...nums, 1];
    let len = nums.length;
    let dp = new Array(len).fill(0).map(_ => new Array(len).fill(0));
    for(let i = len - 3; i >= 0; i--) {
        for(let j = i + 2; j < len; j++) {
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


