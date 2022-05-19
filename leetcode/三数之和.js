/**
 * @param {number[]} nums
 * @return {number[][]}
 15. 三数之和
 nums = [-1,0,1,2,-1,-4] [-4,-1,-1, 1, 3, 4, 2]
                                    i  i+1       n-1
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


/**
 * @param {number[]} nums
 * @return {number[][]}
 15. 三数之和
 */
var threeSum = function(nums) {
    if(!nums || nums.length < 2) return [];
    nums.sort((a, b) => a -b);
    let res = [];
    for(let i=0; i<nums.length; i++) {
        if(nums[i]>0) return res;
        if(nums[i-1] === nums[i]) continue;
        let [left, right] = [i+1, nums.length - 1];
        while(left < right) {
            const sum = nums[i] + nums[left] + nums[right];
            if(sum === 0) {
                res.push([nums[i], nums[left], nums[right]]);
                while(left<right && nums[left] === nums[left+1]) left++;
                while(left<right && nums[right] === nums[right+1]) right--;
                left++;''
                right--;
            } else if( sum < 0) {
                left++;
            } else {
                right--;
            }
        }
    }
    return res;
};