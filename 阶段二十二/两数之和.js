/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    let result = [];
    let mapArr = new Map();
    for(let i = 0; i < nums.length; i++) {
        mapArr.set(nums[i], i)
        for(let j = 0; j < nums.length; j++) {
            let diff = target - nums[j];
            if (mapArr.has(diff) && mapArr.get(diff) !== j) {
                result[0] = mapArr.get(diff);
                result[1] = j;
            }
        }
    }
    return result;
};