/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 377. 组合总和 Ⅳ
 */
var combinationSum4 = function(nums, target) {
    let dp = new Array(target+1).fill(0);
    dp[0] = 1;
    for(let i = 1; i<=target; i++) {
        for(let j = 0; j < nums.length; j++) {
            if(i - nums[j] >= 0) {
                dp[i] += dp[i-nums[j]];
            }
        }
    }
    return dp[target];
};


