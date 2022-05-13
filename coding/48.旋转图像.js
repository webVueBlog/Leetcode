/*
 * @lc app=leetcode.cn id=48 lang=javascript
 *
 * [48] 旋转图像
 */

// @lc code=start
/**
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 * 给定一个 n × n 的二维矩阵 matrix 表示一个图像。请你将图像顺时针旋转 90 度。

你必须在 原地 旋转图像，这意味着你需要直接修改输入的二维矩阵。请不要 使用另一个矩阵来旋转图像。

输入：matrix = [[1,2,3],[4,5,6],[7,8,9]]
输出：[[7,4,1],[8,5,2],[9,6,3]]

输入：matrix = [[5,1,9,11],[2,4,8,10],[13,3,6,7],[15,14,12,16]]
输出：[[15,13,2,5],[14,3,4,1],[12,6,8,9],[16,7,10,11]]

提示：

n == matrix.length == matrix[i].length
1 <= n <= 20
-1000 <= matrix[i][j] <= 1000
 
这里的诀窍是要意识到我们的矩阵(M)中的细胞可以以一种独立的方式以4个为一组进行交换。这将允许我们将空间复杂度控制在O(1)以内。

剩下的困难在于设置我们的嵌套for循环，以完成所有这些四路交换。如果我们把数据的每一个环看作一个更大的迭代，我们可以注意到每一个连续的环其边的长度缩短了2。这意味着我们将需要执行这个过程的最大深度为(n / 2)次。我们可以在这里使用底，因为奇边矩阵的中心单元格不需要交换。

对于每个环，我们需要执行的迭代次数等于边的长度减1，因为我们已经交换了远角作为我们的第一次迭代。如前所述，每达到一层深度，环的边长就会缩短2 (len = n - 2 * i - 1)。

在嵌套的for循环中，我们需要在链接的单元格之间执行四路交换。为了节省一些处理时间，我们可以存储i (opp = n - 1 - i)的对边值，因为这个值会被多次使用。

(64 ms)
 */
var rotate = function(matrix) {
 let n = matrix.length, depth = ~~(n / 2)
 for(let i = 0; i<depth; i++) {
  let len = n - 2 * i - 1, opp = n - 1 - i
  for(let j = 0; j < len; j++) {
   let temp = matrix[i][i+j]
   matrix[i][i+j] = matrix[opp-j][i]
   matrix[opp-j][i] = matrix[opp][opp-j]
   matrix[opp][opp-j] = matrix[i+j][opp]
   matrix[i+j][opp] = temp
  }
 }
};
// @lc code=end

