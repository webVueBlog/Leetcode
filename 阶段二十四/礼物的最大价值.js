/**
 * @param {number[][]} grid
 * @return {number}
 剑指 Offer 47. 礼物的最大价值
 状态 + 选择
 dp[0][0] = 1
 dp[i][j] = max(dp[i-1][j], dp[i][j-1]) + grid[i][j]
 */
var maxValue = function(grid) {
    const row = grid.length;
    const col = grid[0].length;
    const dp = new Array(row).fill(0).map(_ => new Array(col).fill(0));

    for (let i = 0; i < row; i++) {
        for (let j = 0; j < col; j++) {
            dp[i][j] = Math.max(dp ? .[i - 1] ? .[j] ? ? 0, dp ? .[i] ? .[j - 1] ? ? 0) + grid[i][j]
        }
    }
    return dp[row - 1][col - 1];
};

/**
var maxValue = function(grid) {
    const row = grid.length;
    const col = grid[0].length;
    const dp = new Array(row).fill(0).map(_ => new Array(col).fill(0));

    for (let i = 0; i < row; i++) {
        for (let j = 0; j < col; j++) {
            dp[i][j] = Math.max(dp?.[i-1]?.[j] ?? 0, dp?.[i]?.[j-1] ?? 0) + grid[i][j]
        }
    }
    return dp[row-1][col-1];
};
 */