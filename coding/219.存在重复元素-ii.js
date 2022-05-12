/*
 * @lc app=leetcode.cn id=219 lang=javascript
 *
 * [219] 存在重复元素 II
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {boolean}

给你一个整数数组 nums 和一个整数 k ，判断数组中是否存在两个 不同的索引 i 和 j ，满足 nums[i] == nums[j] 且 abs(i - j) <= k 。如果存在，返回 true ；否则，返回 false 。

输入：nums = [1,2,3,1], k = 3
输出：true

输入：nums = [1,0,1,1], k = 1
输出：true

输入：nums = [1,2,3,1,2,3], k = 2
输出：false

(100 ms)

 */
var containsNearbyDuplicate = function(nums, k) {
 // (116 ms)
 const map = {}
 for (let i = 0; i < nums.length; i++) {
  if(i - map[nums[i]] <= k) {
   return true;
  }
  map[nums[i]] = i
 }
 return false;
};

// var containsNearbyDuplicate = function(nums, k) {
//  const map = new Map();
//  for(let i = 0; i < nums.length; i++) {
//   // 遍历数组
//   // map.get(nums[i]) 存索引
//   if(i - map.get(nums[i]) <= k) {
//    return true;
//   }
//   // 没有就存索引
//   map.set(nums[i], i);
//  }
//  return false;
// };
// @lc code=end

