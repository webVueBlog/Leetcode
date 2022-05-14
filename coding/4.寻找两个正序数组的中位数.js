/*
 * @lc app=leetcode.cn id=4 lang=javascript
 *
 * [4] 寻找两个正序数组的中位数
 */

// @lc code=start
/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 * 
 * 给定两个大小分别为 m 和 n 的正序（从小到大）数组 nums1 和 nums2。请你找出并返回这两个正序数组的 中位数 。

算法的时间复杂度应该为 O(log (m+n)) 。

输入：nums1 = [1,3], nums2 = [2]
输出：2.00000
解释：合并数组 = [1,2,3] ，中位数 2

输入：nums1 = [1,2], nums2 = [3,4]
输出：2.50000
解释：合并数组 = [1,2,3,4] ，中位数 (2 + 3) / 2 = 2.5
(88 ms)
 */
var findMedianSortedArrays = function(nums1, nums2) {
    if (nums1.length > nums2.length) return findMedianSortedArrays(nums2, nums1)
    let x = nums1.length
    let y = nums2.length
    let low = 0,
        high = x
    while (low <= high) {
        const partitionX = (high + low) >> 1
        const partitionY = ((x + y + 1) >> 1) - partitionX

        const maxX = partitionX == 0 ? Number.NEGATIVE_INFINITY : nums1[partitionX - 1]
        const maxY = partitionY == 0 ? Number.NEGATIVE_INFINITY : nums2[partitionY - 1]

        const minX = partitionX == nums1.length ? Number.POSITIVE_INFINITY : nums1[partitionX]
        const minY = partitionY == nums2.length ? Number.POSITIVE_INFINITY : nums2[partitionY]

        if (maxX <= minY && maxY <= minX) {
            const lowMax = Math.max(maxX, maxY)
            if ((x + y) % 2 == 1)
                return lowMax
            return (lowMax + Math.min(minX, minY)) / 2
        } else if (maxX < minY) {
            low = partitionX + 1
        } else
            high = partitionX - 1
    }

};
// @lc code=end