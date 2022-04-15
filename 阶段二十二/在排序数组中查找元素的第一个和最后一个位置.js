var searchRange = function(nums, target) {
    let ans = new Array(2).fill(-1);
    nums = nums.sort((a,b) => a - b);
    let startIndex = nums.findIndex(value => value === target)
    if(startIndex !== -1) {
        ans[0] = startIndex
        let endIndex = nums.lastIndexOf(target)
        if(endIndex !== -1) {
            ans[1] = endIndex
        }
    }
    return ans;
};