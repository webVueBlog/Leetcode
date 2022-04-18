/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 剑指 Offer 53 - I. 在排序数组中查找数字 I
 二分
 [1,2,3,5,7]
 [5,7,7,8,8,10] target = 9  // 6 // 8
  l     r(m)   r
        m (l=m+1)
搜索左边界 // l 是否等于 target
v(m) < target   l = m + 1;
v(m) > target   r = m;
v(m) === target r = m;
// 判断 l 是否等于 target
v(m) < target    l = m + 1;
v(m) > target    r = m;
v(m) === target  l = m + 1;

[l, r) => while(l < r)
[l, r] => while(l <= r)
剑指 Offer 53 - I. 在排序数组中查找数字 I
 */
var search = function(nums, target) {
    const l = findLeft(nums, target);
    const r = findRight(nums, target);
    if(l === -1) {
        return 0;
    }
    return r - l + 1; //出现次数
};


function findLeft(nums, target) {
    // 值 / -1
    let l = 0, r = nums.length;
    while(l < r){
        const m = l + ((r-l)>>1);
        const mid = nums[m];
        if(mid === target) {
            r = m;
        } else if(mid > target) {
            r = m;
        } else if(mid < target) {
            l = m+1;
        }
    }
    if(nums[l] === target) {
        return l;
    }
    return -1;
}

function findRight(nums, target) {
    // 值 / -1
    let l = 0, r = nums.length;
    while(l < r){
        const m = l + ((r-l)>>1);
        const mid = nums[m];
        if(mid === target) {
            l = m + 1;
        } else if(mid > target) {
            r = m;
        } else if(mid < target) {
            l = m+1;
        }
    }
    if(nums[l-1] === target) {
        return l-1;
    }
    return -1;
}