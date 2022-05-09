/*
 * @lc app=leetcode.cn id=1568 lang=javascript
 *
 * [1568] 使陆地分离的最少天数
 */

// @lc code=start
/**
 * @param {number[][]} grid
 * @return {number}
 */
 function markIsland(x, y, checked, grid, bridges = []) {
  let land = 0;
  const moves = [[0, 1], [1, 0], [0, -1], [-1, 0]];
  checked[x][y] = true;
  let newi, newj;

  for (let move of moves) {
      let i = x + move[0],
          j = y + move[1];

      if (0 <= i && i < grid.length && 0 <= j && j < grid[0].length && grid[i][j] == 1) {
          land++;
          if (checked[i][j] == false)
              markIsland(i, j, checked, grid, bridges);
          if (land == 1) {
              newi = i;
              newj = j;
          }
      }
  }
  if (land == 2)
      bridges.push([x, y]);
  if (land == 1)
      bridges.push([newi, newj]);
}

function isOneIsland(grid, bridges) {
  const checked = [...Array(grid.length)].map(() => new Array(grid[0].length).fill(false));
  let islandCount = 0;
  
  for (let i = 0; i < grid.length; i++) {
      for (let j = 0; j < grid[0].length; j++) {
          if (!checked[i][j] && grid[i][j] == 1) {
              islandCount++;
              markIsland(i, j, checked, grid, bridges);
          }
      }
  }
  
  return islandCount;
}

var minDays = function(grid) {
  const checked = [...Array(grid.length)].map(() => new Array(grid[0].length).fill(false));
  let bridges = [];
  let islandCount = isOneIsland(grid, bridges);
  if (islandCount !== 1)
      return 0;
  
  for (let [x, y] of bridges) {
      grid[x][y] = 0;
      if (isOneIsland(grid) !== 1) {
          return 1;
      }
      grid[x][y] = 1;
  }
  
  return 2;
};
// @lc code=end

