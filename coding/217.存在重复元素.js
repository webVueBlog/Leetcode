/*
 * @lc app=leetcode.cn id=217 lang=javascript
 *
 * [217] 存在重复元素
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {boolean}

给你一个整数数组 nums 。如果任一值在数组中出现 至少两次 ，返回 true ；如果数组中每个元素互不相同，返回 false 。
 
输入：nums = [1,2,3,1]
输出：true

输入：nums = [1,2,3,4]
输出：false

输入：nums = [1,1,1,3,3,4,3,2,4,2]
输出：true

(80 ms)

 */
var containsDuplicate = function(nums) {
 const map = {}
 for(let i = 0; i < nums.length; i++) {
  if(!map[nums[i]]) {
   map[nums[i]] = 1
  } else {
   return true
  }
 }
 return false
};
// @lc code=end

