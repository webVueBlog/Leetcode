/*
 * @lc app=leetcode.cn id=220 lang=javascript
 *
 * [220] 存在重复元素 III
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} k
 * @param {number} t
 * @return {boolean}
 * 滑动窗口
 * 
 * nums = [1,5,9,1,5,9], k = 2, t = 3
 * 
 * [1,5,9,1,5,9]

给你一个整数数组 nums 和两个整数 k 和 t 。请你判断是否存在 两个不同下标 i 和 j，使得 abs(nums[i] - nums[j]) <= t ，同时又满足 abs(i - j) <= k 。

如果存在则返回 true，不存在返回 false。

输入：nums = [1,2,3,1], k = 3, t = 0
输出：true

输入：nums = [1,0,1,1], k = 1, t = 2
输出：true

(832 ms)
 */
var containsNearbyAlmostDuplicate = function(nums, k, t) {
    // 遍历数组
    for(let i = 0; i < nums.length; i++) {
        // 索引 比较两个元素
        for(let j = i+1; j <= i+k; j++) {
            // 判断是否符合值 <= t
            let diff = Math.abs(nums[i] - nums[j]);
            if(diff <= t) {
                return true;
            }
        }
    }
    return false;
};

// var containsNearbyAlmostDuplicate = function(nums, k, t) {
//     let len = nums.length;
//     let window = [];
//     let ans = false;
//     out: for (let i = 0; i < len; i++) {
//         let value = nums[i];
//         for (let j = 0; j < window.length; j++) {
//             let w = window[j];
//             if (Math.abs(w - value) <= t) {
//                 ans = true;
//                 break out;
//             }
//         }
//         window.push(value);
//         if (window.length > k) {
//             window.shift();
//         }
//     }
//     return ans;
// };
// @lc code=end