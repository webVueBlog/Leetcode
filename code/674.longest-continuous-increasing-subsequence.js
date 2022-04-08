/*
 * @lc app=leetcode.cn id=674 lang=javascript
 *
 * [674] Longest Continuous Increasing Subsequence
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var findLengthOfLCIS = function(nums) {
    // let len = nums.length;
    // let max = 0;
    // let count = 1;
    // for (let i = 0; i < len; i++) {
    //     if (nums[i] < nums[i + 1]) {
    //         count++;
    //     } else {
    //         max = Math.max(count, max);
    //         count = 1;
    //     }
    // }
    // return max;

    let len = 1,
        maxLen = 0;
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] < nums[i + 1]) len++;
        else len = 1;
        maxLen = Math.max(len, maxLen);
    }
    return maxLen;
};
// @lc code=end