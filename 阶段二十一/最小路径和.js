var minPathSum = function(grid) {
    const row = grid.length;
    const col = grid[0].length;
    const dp = new Array(row).fill(0).map(_ => new Array(col).fill(0));
    dp[0][0] = grid[0][0];
    dp[-1] = new Array(col).fill(Infinity);
    for (let i = 0; i < row; i++) {
        dp[i][-1] = Infinity;
    }
    for (let i = 0; i < row; i++) {
        for (let j = 0; j < col; j++) {
            if (i === 0 && j === 0) continue;
            dp[i][j] = Math.min(dp[i - 1][j] + grid[i][j], dp[i][j - 1] + grid[i][j]);
        }
    }
    console.log(dp);
    return dp[row - 1][col - 1];
};