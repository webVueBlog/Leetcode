/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var searchInsert = function(nums, target) {
    let l = 0,
        r = nums.length - 1;
    while (l <= r) {
        let mid = 1 + ((r - 1) >> 1);
        const n = nums[mid];
        if (n === target) {
            return mid;
        } else if (n > target) {
            r = mid - 1;
        } else if (n < target) {
            l = mid + 1;
        }
    }
    return l;
};

/**
var searchInsert = function(nums, target) {
    let l = 0,
        r = nums.length - 1;
        if(target < nums[0]) return 0;
    while (l < r) {
        let mid = Math.floor((l + r + 1) / 2);
        if(nums[mid] <= target) l = mid;
        else r = mid - 1;
    }
    if(nums[l] != target) return l + 1;
    else return l;
};
 */