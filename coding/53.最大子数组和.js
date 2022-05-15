/*
 * @lc app=leetcode.cn id=53 lang=javascript
 *
 * [53] 最大子数组和
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 * 给你一个整数数组 nums ，请你找出一个具有最大和的连续子数组（子数组最少包含一个元素），返回其最大和。

子数组 是数组中的一个连续部分。

输入：nums = [-2,1,-3,4,-1,2,1,-5,4]
输出：6
解释：连续子数组 [4,-1,2,1] 的和最大，为 6 。

输入：nums = [1]
输出：1

输入：nums = [5,4,-1,7,8]
输出：23

 (92 ms)
 */
function maxSubArray(A) {
    var prev = 0;
    var max = -Number.MAX_VALUE;

    for (var i = 0; i < A.length; i++) {
        prev = Math.max(prev + A[i], A[i]);
        max = Math.max(max, prev);
    }
    return max;
}

// @lc code=end