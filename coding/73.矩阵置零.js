/*
 * @lc app=leetcode.cn id=73 lang=javascript
 *
 * [73] 矩阵置零
 */

// @lc code=start
/**
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 * 给定一个 m x n 的矩阵，如果一个元素为 0 ，则将其所在行和列的所有元素都设为 0 。请使用 原地 算法。

输入：matrix = [[1,1,1],[1,0,1],[1,1,1]]
输出：[[1,0,1],[0,0,0],[1,0,1]]

输入：matrix = [[0,1,2,0],[3,4,5,2],[1,3,1,5]]
输出：[[0,0,0,0],[0,4,5,0],[0,3,1,0]]

(92 ms)
 */
var setZeroes = function(matrix) {
 var track = []

 // 找0
 for(let i = 0; i < matrix.length; i++) {
  for(let j = 0; j < matrix[0].length; j++) {
   if(matrix[i][j] === 0) track.push([i, j])
  }
 }

 for(let i = 0; i < track.length; i++) {
  // 有多少个0
  var [x, y] = track[i]

  for(let j = 0; j < matrix[0].length; j++) {
   matrix[x][j] = 0
  }

  for(var j = 0; j < matrix.length; j++) {
   matrix[j][y] = 0
  }
 }
};
// @lc code=end

