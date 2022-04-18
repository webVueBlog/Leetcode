/**
 * @param {number} n
 * @return {number[]}
 剑指 Offer 60. n个骰子的点数
 n = 2
 s = 2,3,...12
 点数 1 getCount(2, 13)
 点数 2 getCount(2, 12)
 ...
 点数6
 */
var dicesProbability = function(n) {
    const memo = new Array(n+1).fill(0).map(_ => new Array(n*6 + 1).fill(-1));
    // 股子1
    for(let i = 1; i <= 6; i++) {
        memo[1][i] = 1;
    }
    const getCount = (n,k) => {
        // 2+1 个股子，和为 14
        if(n < 1 || k > 6*n){
            return 0;
        }
        if (memo[n][k] !== -1) return memo[n][k];
        let res = 0;
        for(let i = 1; i <= 6 && k - i >= n - 1; i++) {
            res += memo[n-1][k-i] !== -1 ? memo[n-1][k-i] : getCount(n-1, k-i);
        }
        return res;
    }
    const total = Math.pow(6,n);
    const ans = [];

    for(let i = 6 * n; i >= n; i--) {
        // n个股子，总和位i
        const count = getCount(n, i);
        ans[i-n] = count / total;
    }
    return ans;
};

/**
var dicesProbability = function(n) {
    // 二维数组，n 个骰子所以有 n 行，而每一行代表有 n 个骰子时，各值的出现次数，即如果2个骰子，各值的取值范围是 2 ~ 12(2 * 6)，出现次数取决于上一层的值(1 ~ 6)
    // n + 1 的原因是，第 0 行浪费啦，为了便于理解，第一个骰子对应第一行，而不是第 0 行
    // 每一行值范围是 n * 6 + 1 的原因跟上面一样，比如 2 个骰子，取值从 2 开始，到 12 结束，所以要多开一列，容纳 12 这个下标
    let dp = new Array(n + 1).fill().map(() => new Array(n * 6 + 1).fill(0)), result = [];

    // 初始化第一行，即一个骰子时，取值都为 1，因为出现次数只为 1 次，且各值取值只能为 1 ~ 6
    for(let i = 1; i <= 6; i++) {
        dp[1][i] = 1;
    }

    // 直接计算从第二个骰子开始，一直到第 n 个骰子的 dp
    for(let i = 2; i <= n; i++) {
        // 那一层骰子取值范围是 i 到 6 * i，例如第二个骰子，范围是 [2, 12]
        for(let j = i; j <= 6 * i; j++) {
            // 每个取值时，比如 4 这个取值，可能是上一次是 1 这次是 3，也可能上次 2 这次 2，也可能上次 3 这次 1，所以要 1-6 都遍历一次
            for(let cur = 1; cur <= 6; cur++) {
                // 出现 = 时只有一种情况，出现点数 0 ，不可能，所以也要排除，而对于 < ，如果此时要取 3 这个值的出现次数，前面的数如果是 4,5,6 这种大过它的也不可能
                if(j <= cur)
                    break;
                // 每个取值时，比如 4 这个取值，可能是上一次是 1 这次是 3，也可能上次 2 这次 2，也可能上次 3 这次 1，所以要累加
                dp[i][j] += dp[i - 1][j - cur];
            }
        }
    }
    
    let all = Math.pow(6, n);

    // 总数为 Math.pow(6, n)，比如 2个骰子，第一个取 1 时，第二个可能 [1, 6]，第一个取 2 时，第二个可能 [1, 6]，以此类推一直到第一个是 6 时
    // dp[n][i] 代表第 n 层的 i 取值出现次数，即 dp[2][12] 代表第二层时 12 的出现次数
    // 只取那一层对应索引范围内的出现次数即可，同时除以总数就是平均概率
    for(let i = n; i <= n * 6; i++) {
        result.push(dp[n][i] / all);
    }

    return result;
};

作者：smooth-b
链接：https://leetcode-cn.com/problems/nge-tou-zi-de-dian-shu-lcof/solution/by-smooth-b-t2ez/
来源：力扣（LeetCode）
著作权归作者所有。商业转载请联系作者获得授权，非商业转载请注明出处。

var dicesProbability = function(n) {
    let dp = Array(6).fill(1 / 6); // 初始化一个骰子的点数之和概率
    for (let i = 2; i <= n; i++) { // 处理2-n个骰子的点数之和
        let temp = Array(5 * i + 1).fill(0); // 初始化点数之和出现情况
        for (let j = 0; j < dp.length; j++) { // 上一轮骰子的概率
            for (let k = j; k < j + 6; k++) { // 本轮骰子的投掷情况
                temp[k] += dp[j] / 6; // 重点，下面分析
            }
        }
        dp = temp; // 赋值给dp，方便下一次循环
    }
    return dp;
};

*/