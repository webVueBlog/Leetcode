/**
 * @param {number} n
 * @return {number}
 526. 优美的排列
 {
     1： [1,2,3]
     2:  [1,2]
     3:  [1,3]
 }
 位置
 {
     1: true
     2: true
     3: true
 }
 */
var countArrangement = function(n) {
    let map = {};
    let canuse = {};
    let count = 0;
    for(let i = 1; i <= n; i++) { // 位置
        canuse[i] = true // {1:true,2:true,3:true}
        // 遍历位置
        if (map[i] === undefined) {
            map[i] = []; // {1:[],2:[],3:[]}
        }
        for(let j = 1; j <= n; j++) {
            // 遍历值 i位置 j值
            if (i % j === 0 || j % i === 0) { // i = 1 
                map[i].push(j); // map[1] { 1: [1, 2, 3], 2: [1, 2], 3: [1, 3]}
            }
        }
    }
	// map { '1': [ 1, 2, 3 ], '2': [ 1, 2 ], '3': [ 1, 3 ] }
	// canuse { '1': true, '2': true, '3': true }

    const dfs = (current) => { // [] [1] [1,2] [1,2,3]
        // 下一个尝试的位置 1
        let currentLen = current.length;
        // 1. 确定是否满足条件
        // 2. 确定终止条件
        if (currentLen === n) {
            return count++;
        }
        // 3. 继续尝试
        let store = map[currentLen + 1]; // map[1] [1,2,3] -> map[2] [1, 2]
        for(let i = 0; i<store.length; i++) {
            let value = store[i]; // 1, 2, 3
            if(canuse[value] === false) continue;
            current.push(value); // [1]
            canuse[value] = false; // { 1: false, 2: true, 3: true }
            dfs(current); // dfs[1]
            current.pop();
            canuse[value] = true;
        }
    }
    dfs([]);
    return count;
};