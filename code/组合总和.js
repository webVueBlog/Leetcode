/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 377. 组合总和 Ⅳ
target = 4
dp[4] 和为4的组合数
dp[4] = dp[3]+1 + dp[2]+2 + dp[1]+3 + dp[0]+4
[
    [1,1,1]
    [1,2]
]
输入：nums = [1,2,3], target = 4

d[4] = dp[3]+1 + dp[2]+2 + dp[1]+3 + dp[0]+4 (4没有出现)
        4      +  2      +  1      = 7
d[3] = dp[2]+1 + dp[1]+2 + dp[0]+3
        2 + 1 + 1 = 4
dp[2] = dp[1]+1 + dp[0]+2
        1 + 1 = 2
dp[1] = dp[0]+1 // dp[1] = 1
        1 = 1
dp[0] = 1

输入：nums = [1,2,3], target = 4

dp[4] = 4 + 2 + 1 = 7
      = dp[3] + dp[2] + dp[1] = 7
dp[3] = 2 + 1 + 1 = 4
      = dp[2] + dp[1] + dp[0] = 4
dp[2] = 1 + 1 = 2
      = dp[1] + dp[0] = 2
dp[1] = 1
      = dp[0] = 1
dp[0] = 1


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



