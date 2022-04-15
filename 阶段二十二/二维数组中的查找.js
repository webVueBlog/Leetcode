/**
 * @param {number[][]} matrix
 * @param {number} target
 * @return {boolean}
 剑指 Offer 04. 二维数组中的查找
 */
var findNumberIn2DArray = function(matrix, target) {
    if(matrix.length === 0 || matrix[0].length===0) return false;
    const row = matrix.length;
    const col = matrix[0].length;
    let i = 0,
        j = col -1;
    while(j>=0 && i<=row-1) {
        let value = matrix[i][j]
        if(target === value) return true
        if(target>value) {
            i++;
        } else if(target < value) {
            j--;
        }
    }
    return false;
};