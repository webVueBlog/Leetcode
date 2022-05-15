/*
 * @lc app=leetcode.cn id=485 lang=javascript
 *
 * [485] 最大连续 1 的个数
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
给定一个二进制数组 nums ， 计算其中最大连续 1 的个数。

输入：nums = [1,1,0,1,1,1]
输出：3
解释：开头的两位和最后的三位都是连续 1 ，所以最大连续 1 的个数是 3.

输入：nums = [1,0,1,1,0,1]
输出：2

(72 ms)
 */

var findMaxConsecutiveOnes = function(nums) {
    let [left, right, len, res] = [0, 0, nums.length, 0];
    while (right < len) {
        if (nums[right] === 1) {
            right++;
        } else {
            left = right;
            left++;
            right++;
        }
        res = Math.max(res, right - left)
    }
    return res;
}

// var findMaxConsecutiveOnes = function(nums) {
//     let max = 0,
//         curr = 0;
//     for (let k of nums) {
//         max = Math.max(max, curr += k);
//         if (!k) curr = 0;
//     }
//     return max;
// };
// @lc code=end