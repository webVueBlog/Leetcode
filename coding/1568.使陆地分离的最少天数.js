/*
 * @lc app=leetcode.cn id=1568 lang=javascript
 *
 * [1568] 使陆地分离的最少天数
 */

// @lc code=start
/**
 * @param {number[][]} grid
 * @return {number}
 给你一个由若干 0 和 1 组成的二维网格 grid ，其中 0 表示水，而 1 表示陆地。岛屿由水平方向或竖直方向上相邻的 1 （陆地）连接形成。

如果 恰好只有一座岛屿 ，则认为陆地是 连通的 ；否则，陆地就是 分离的 。

一天内，可以将任何单个陆地单元（1）更改为水单元（0）。

返回使陆地分离的最少天数。


输入：grid = [[0,1,1,0],[0,1,1,0],[0,0,0,0]]
输出：2
解释：至少需要 2 天才能得到分离的陆地。
将陆地 grid[1][1] 和 grid[0][2] 更改为水，得到两个分离的岛屿。

示例 3：

输入：grid = [[1,0,1,0]]
输出：0
示例 4：

输入：grid = [[1,1,0,1,1],
             [1,1,1,1,1],
             [1,1,0,1,1],
             [1,1,0,1,1]]
输出：1
示例 5：

输入：grid = [[1,1,0,1,1],
             [1,1,1,1,1],
             [1,1,0,1,1],
             [1,1,1,1,1]]
输出：2
 */
const dx = [0, 1, 0, -1];
const dy = [1, 0, -1 ,0];

const dfs = (x, y, grid, n, m) => {
    grid[x][y] = 2;
    for (let i = 0; i < 4; ++i) {
        const tx = dx[i] + x;
        const ty = dy[i] + y;
        if (tx < 0 || tx >= n || ty < 0 || ty >= m || grid[tx][ty] != 1) {
            continue;
        }
        dfs(tx, ty, grid, n, m);
    }
}

const count = (grid, n, m) => {
    let cnt = 0;
    for (let i = 0; i < n; ++i) {
        for (let j = 0; j < m; ++j) {
            if (grid[i][j] == 1) {
                cnt++;
                dfs(i, j, grid, n, m);
            }
        }
    }
    // 还原
    for (let i = 0; i < n; ++i) {
        for (let j = 0; j < m; ++j) {
            if (grid[i][j] == 2) {
                grid[i][j] = 1;
            }
        }
    }
    return cnt;
}
var minDays = function(grid) {
    const n = grid.length, m = grid[0].length;
    // 岛屿数量不为 1，陆地已经分离
    if (count(grid, n, m) != 1) {
        return 0;
    }
    for (let i = 0; i < n; ++i) {
        for (let j = 0; j < m; ++j) {
            if (grid[i][j]) {
                grid[i][j] = 0;
                if (count(grid, n, m) != 1) {
                    // 更改一个陆地单元为水单元后陆地分离
                    return 1;
                }
                grid[i][j] = 1;
            }
        }
    }
    return 2;
};


// @lc code=end

