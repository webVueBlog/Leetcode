/*
 * @lc app=leetcode.cn id=35 lang=javascript
 *
 * [35] 搜索插入位置
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}

给定一个排序数组和一个目标值，在数组中找到目标值，并返回其索引。如果目标值不存在于数组中，返回它将会被按顺序插入的位置。

请必须使用时间复杂度为 O(log n) 的算法。

提示:

1 <= nums.length <= 104
-104 <= nums[i] <= 104
nums 为 无重复元素 的 升序 排列数组
-104 <= target <= 104

输入: nums = [1,3,5,6], target = 5
输出: 2

输入: nums = [1,3,5,6], target = 2
输出: 1

输入: nums = [1,3,5,6], target = 7
输出: 4

 (52 ms)
 */
var searchInsert = function(nums, target) {
 return binarySearch(nums, target, 0, nums.length - 1);
};

function binarySearch(array, target, start, end) {
 // 如果目标小于最后一项，则将其插入到该项索引处
 // 因为任何小于目标的索引已经被确认小于目标
 // 否则将其插入到该项索引+1处
 // 因为任何已经被确认大于目标的指标
 if(start > end) return start;

 const midPoint = Math.floor((start + end)/2);

 // 找到目标
 if(array[midPoint] === target) return midPoint;

 // 搜索左边
 if (array[midPoint] > target) {
  return binarySearch(array, target, start, midPoint - 1)
 } ;

 // 搜索右边
 if (array[midPoint] < target) {
  return binarySearch(array, target, midPoint + 1, end);
 } 
}
// @lc code=end

