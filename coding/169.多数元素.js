/*
 * @lc app=leetcode.cn id=169 lang=javascript
 *
 * [169] 多数元素
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}

给定一个大小为 n 的数组 nums ，返回其中的多数元素。多数元素是指在数组中出现次数 大于 ⌊ n/2 ⌋ 的元素。

你可以假设数组是非空的，并且给定的数组总是存在多数元素。

提示：
n == nums.length
1 <= n <= 5 * 104
-109 <= nums[i] <= 109

输入：nums = [3,2,3]
输出：3

(68 ms)
 */
var majorityElement = function(nums) {
 var obj = {};
 // 遍历数组
 for(var i = 0; i < nums.length; i++) {
  // 如果存在+1，否则赋值为1
  obj[nums[i]] = obj[nums[i]] + 1 || 1
  // 出现次数 大于 ⌊ n/2 ⌋ 的元素
  if(obj[nums[i]] > nums.length / 2) return nums[i]
 }
};
// @lc code=end

