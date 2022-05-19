/**
 * @param {number[]} nums
 * @return {number[][]}
 47.全排列 II #回溯
 */
var permuteUnique = function(nums) {
    const dfs = (curr, store, arr, len) => {
        if (curr.length === len) {
            arr.push([...curr]);
            return;
        }
        for (let i = 0; i < store.length; i++) {
            if (i > 0 && store[i] === store[i - 1]) {
                continue
            }
            let select = store[i]
            dfs(
                curr.concat(select),
                store.slice(0, i).concat(store.slice(i + 1)),
                arr,
                len
            )
        }
    }
    let ans = []
    nums.sort((a, b) => a - b);
    dfs([], nums, ans, nums.length)
    return ans
};