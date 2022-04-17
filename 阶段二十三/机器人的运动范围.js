/**
 * @param {number} m
 * @param {number} n
 * @param {number} k
 * @return {number}
 * dfs 往下或往右
 */
var movingCount = function(m, n, k) {
    let count = 0;
    const visited = new Array(m).fill(0).map(() => new Array(n).fill(false));
    const ways = [
        [0, 1],
        [1, 0]
    ]

    const calcSum = (num) => {
        // 15
        let sum = 0;
        while (num > 0) {
            sum += num % 10;
            num = Math.floor(num / 10);
        }
        return sum;
    }

    const crossBorder = (x, y) => {
        return x < 0 || x >= m || y < 0 || y >= n;
    }

    const dfs = (x, y) => {
        if (visited[x][y]) return;
        visited[x][y] = true;
        if (calcSum(x) + calcSum(y) <= k) {
            count++;
        } else {
            return;
        }

        for (const way of ways) {
            const [step_x, step_y] = way;
            const next_x = x + step_x;
            const next_y = y + step_y;
            if (crossBorder(next_x, next_y) || visited[next_x][next_y]) continue;
            dfs(next_x, next_y);
        }
    }
    dfs(0, 0);
    return count;
};