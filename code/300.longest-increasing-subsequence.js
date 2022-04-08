/*
 * @lc app=leetcode.cn id=300 lang=javascript
 *
 * [300] Longest Increasing Subsequence
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 * 
 * nums = [10,9,2,5,3,7,101,18]
 */
// 动态规划 状态 +  选择
var lengthOfLIS = function(nums) {
    let len = nums.length;
    let max = 1;
    let dp = new Array(len).fill(1); // 以每一项为结尾的最长递增子序列的长度
    for (let i = 0; i < len; i++) {
        // dp[i]
        for (let j = 0; j < i; j++) {
            // dp[j]
            // [2,5,7] 2 => 5 < 7 3?
            if (nums[j] < nums[i]) {
                dp[i] = Math.max(dp[j] + 1, dp[i]);
            }
        }
        max = Math.max(dp[i], max);
    }
    return max;
};
// @lc code=end