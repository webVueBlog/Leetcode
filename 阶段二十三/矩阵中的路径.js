/**
 * @param {character[][]} board
 * @param {string} word
 * @return {boolean}
 */
var exist = function(board, word) {
    let ans = false;
    const row = board.length;
    const col = board[0].length;
    const end = word.length - 1;
    const visited = new Array(row).fill(0).map(() => new Array(col).fill(false));
    const ways = [
        [-1, 0],
        [0, 1],
        [1, 0],
        [0, -1]
    ];

    const overBorder = (i, j) => {
        return i < 0 || i >= row || j < 0 || j >= col;
    }

    // k 索引
    const dfs = (i, j, k) => {
        // 1. 确定是否找到答案
        // 2. 是否终止

        if (k > end || ans) return;
        if (k === end) {
            return ans = true
        }

        // 3. 继续搜
        for (const way of ways) {
            let [si, sj] = way;
            const ni = i + si;
            const nj = j + sj;
            if (overBorder(ni, nj)) continue;
            if (board[ni][nj] !== word[k + 1]) continue;
            if (visited[ni][nj]) continue;
            visited[ni][nj] = true;
            dfs(ni, nj, k + 1);
            visited[ni][nj] = false;
        }
    }

    // 每一格尝试，四个方向搜索
    outer: for (let i = 0; i < row; i++) {
        for (let j = 0; j < col; j++) {
            if (ans) {
                break outer;
            }
            // 当前值 === 第一个字母
            if (board[i][j] === word[0]) {
                visited[i][j] = true;
                dfs(i, j, 0); // board[j][j] === word[0]
                visited[i][j] = false;
            }
        }
    }
    return ans;
};