/*
 * @lc app=leetcode.cn id=300 lang=javascript
 *
 * [300] 最长递增子序列
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 * [10,9,2,5,3,7,101,18]
 * [10,9,2,5,3,7,101]
 * [10,9,2,5,3,7] 3
 * 动态规划题目
 * 一个完整的问题，可以分解很多小的子问题，小问题的最优解，那么全局就是最优解。
 * 动态规划：状态，选择
 */
var lengthOfLIS = function(nums) {
    let len = nums.length;
    let max = 1;
    // 以每一项为结尾的最长递增子序列的长度
    let dp = new Array(len).fill(1); // dp数组
    for (let i = 0; i < len; i++) {
        // dp[i]
        for (let j = 0; j < i; j++) {
            // dp[j]
            if (nums[j] < nums[i]) {
                dp[i] = Math.max(dp[j] + 1, dp[i]);
            }
        }
        max = Math.max(dp[i], max);
    }
    return max;
};
// @lc code=end