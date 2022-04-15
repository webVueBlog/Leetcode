/**
 * @param {number[]} nums
 * @return {number[][]}
 46. 全排列
 [1,2,3] length=3 []
 */
var permute = function(nums) {
    const dfs = (curr, store) => {
        if(curr.length===nums.length) {
            ans.push([...curr]);
            return;
        }
        for(let i=0; i<store.length; i++) {
            dfs(
                curr.concat(store[i]),
                store.slice(0,i).concat(store.slice(i+1))
            )
        }
    };
    let ans = [];
    dfs([], nums);
    return ans;
};