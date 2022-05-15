/*
 * @lc app=leetcode.cn id=735 lang=javascript
 *
 * [735] 行星碰撞
 */

// @lc code=start
/**
 * @param {number[]} asteroids
 * @return {number[]}

给定一个整数数组 asteroids，表示在同一行的行星。

对于数组中的每一个元素，其绝对值表示行星的大小，正负表示行星的移动方向（正表示向右移动，负表示向左移动）。每一颗行星以相同的速度移动。

找出碰撞后剩下的所有行星。碰撞规则：两个行星相互碰撞，较小的行星会爆炸。如果两颗行星大小相同，则两颗行星都会爆炸。两颗移动方向相同的行星，永远不会发生碰撞。

输入：asteroids = [5,10,-5]
输出：[5,10]
解释：10 和 -5 碰撞后只剩下 10 。 5 和 10 永远不会发生碰撞。

输入：asteroids = [8,-8]
输出：[]
解释：8 和 -8 碰撞后，两者都发生爆炸。

(72 ms)
 */
// (64 ms)
var asteroidCollision = function(asteroids) {
    const s = [];
    for (let i = 0; i < asteroids.length; i++) {
        const a = asteroids[i];
        if ((s.length === 0 || s[s.length - 1] < 0) && a < 0) {
            s.push(a);
        } else if (a > 0) {
            s.push(a);
        } else {
            const pop = s.pop();
            if (Math.abs(pop) > Math.abs(a)) {
                s.push(pop);
            } else if (Math.abs(pop) < Math.abs(a)) {
                i--;
            } else {
                continue;
            }
        }
    }
    return s;
};

// var asteroidCollision = function(asteroids) {
//     let stack = [];
//     for (let i = 0; i < asteroids.length; i++) {
//         let asteroid = asteroids[i];
//         if (stack.length === 0) {
//             stack.push(asteroid);
//             continue;
//         }
//         while (stack.length > 0 && stack[stack.length - 1] > 0 && asteroid < 0) {
//             let top = stack[stack.length - 1];
//             let sum = top + asteroid;
//             if (sum > 0) {
//                 // 栈顶的正数大
//                 asteroid = null;
//                 break;
//             }
//             if (sum === 0) {
//                 // 一起爆炸
//                 stack.pop();
//                 asteroid = null;
//             }
//             if (sum < 0) {
//                 // 栈顶行星爆炸
//                 stack.pop();
//             }
//         }
//         if (asteroid !== null) {
//             stack.push(asteroid);
//         }
//     }
//     return stack;
// };
// @lc code=ende