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
 */
var containsNearbyAlmostDuplicate = function(nums, k, t) {
    let len = nums.length;
    let window = [];
    let ans = false;
    out: for (let i = 0; i < len; i++) {
        let value = nums[i];
        for (let j = 0; j < window.length; j++) {
            let w = window[j];
            if (Math.abs(w - value) <= t) {
                ans = true;
                break out;
            }
        }
        window.push(value);
        if (window.length > k) {
            window.shift();
        }
    }
    return ans;
};
// @lc code=end