/*
 * @lc app=leetcode.cn id=221 lang=javascript
 *
 * [221] 最大正方形
 */

// @lc code=start
/**
 * @param {character[][]} matrix
 * @return {number}

在一个由 '0' 和 '1' 组成的二维矩阵内，找到只包含 '1' 的最大正方形，并返回其面积。

m == matrix.length
n == matrix[i].length
1 <= m, n <= 300
matrix[i][j] 为 '0' 或 '1'

输入：matrix = [["1","0","1","0","0"],["1","0","1","1","1"],["1","1","1","1","1"],["1","0","0","1","0"]]
输出：4

输入：matrix = [["0","1"],["1","0"]]
输出：1

输入：matrix = [["0"]]
输出：0

(108 ms)
 */
var maximalSquare = function(matrix) {
 if (!matrix.length) return 0;
 let dp = new Array(matrix.length+1).fill(0).map(()=>new Array(matrix[0].length+1).fill(0));
 let max = 0;
 for (let r=1;r<dp.length;r++) { 
     for (let c=1;c<dp[0].length;c++) {
         if (matrix[r-1][c-1]!=0) {
             dp[r][c] = Math.min(dp[r][c-1], dp[r-1][c], dp[r-1][c-1])+1;
             max = Math.max(dp[r][c], max);
         }
     }
 }
 return max**2;
};
// @lc code=end

