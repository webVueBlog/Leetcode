/**
 * @param {number[]} nums
 * @return {number[][]}
 46. 全排列
 [1,2,3] length=3 []
 */
var permute = function(nums) {
    const dfs = (curr, store) => {
        // 1.满足条件，记录结果
        // 2.满足终止条件，立即终止
        if(curr.length===nums.length) {
            ans.push([...curr]);
            // store.length === 0
            return;
        }
        // 3.继续尝试
        for(let i=0; i<store.length; i++) {
            //   i=0 i=1 i=2
            //[] [1,   2,  3]
            //[2] [1,3]
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