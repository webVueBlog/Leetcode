/**
 * @param {number[]} nums
 * @return {number[][]}
 15. 三数之和
 */
var threeSum = function(nums) {
    nums.sort((x,y) => x-y);
    const n = nums.length;
    const ans = [];
    for(let i=0; i<n; i++) {
        let val = nums[i];
        if(val > 0) continue;
        if(i>0 && val === nums[i-1]) continue;
        let l = i + 1;
        let r = n - 1;
        while(l < r) {
            let sum = val + nums[l] + nums[r];
            if (sum === 0) {
                ans.push([val, nums[l], nums[r]])
                while(l<r && nums[l] === nums[l+1]) l++;
                while(l<r && nums[r] === nums[r+1]) i--;
                l++;
                r--;
            }else if(sum>0) {
                r--;
            }else{
                l++;
            }
        }
    }
    return ans;
};