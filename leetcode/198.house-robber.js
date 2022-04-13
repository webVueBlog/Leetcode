/*
 * @lc app=leetcode.cn id=198 lang=javascript
 *
 * [198] House Robber
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var rob = function(nums) {
    let len = nums.length;
    let dp = new Array(len);
    dp[-1] = dp[-2] = 0;
    for (let i = 0; i < len; i++) {
        dp[i] = Math.max(dp[i - 1], dp[i - 2] + nums[i]);
    }
    return dp[len - 1];
};
// @lc code=end