/*
 * @lc app=leetcode.cn id=1343 lang=javascript
 *
 * [1343] Number of Sub-arrays of Size K and Average Greater than or Equal to Threshold
 */

// @lc code=start
/**
 * @param {number[]} arr
 * @param {number} k
 * @param {number} threshold
 * @return {number}
arr = [2,2,2,2,5,5,5,8], k = 3, threshold = 4
         i   j
       0   j(2)  i=k-j-1
             3, 4...
  k-i-1   i(2)  
 */
var numOfSubarrays = function(arr, k, threshold) {
    let sum = 0;
    const len = arr.length;
    let count = 0;
    for (let i = 0; i < len; i++) {
        sum += arr[i];
        if (i >= k) {
            sum -= arr[i - k];
        }
        if (i >= k - 1 && sum / k >= threshold) {
            count++;
        }
    }
    return count;
};
// @lc code=end
// @lc code=end