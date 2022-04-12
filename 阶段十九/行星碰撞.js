/**
 * @param {number[]} asteroids
 * @return {number[]}
 735. 行星碰撞
 */
var asteroidCollision = function(asteroids) {
    let stack = [];
    for(let i = 0; i < asteroids.length; i++) {
        let curr = asteroids[i];
        if (stack.length >= 0 &&  stack[stack.length - 1] > 0 && curr > 0) {
            stack.push(curr);
            continue;
        }
        // 栈顶的大就不用走了 [10,2] -5 [10,5] -5  [2, 1, -5]
        while(stack[stack.length - 1] > 0 && curr < 0) {
            if (Math.abs(stack[stack.length - 1]) < Math.abs(curr)) {
                stack.pop();
            } else if (Math.abs(stack[stack.length - 1]) === Math.abs(curr)) {
                stack.pop();
                curr = null;
            } else {
                curr = null;
                break;
            }
        }
        if (curr !== null) {
            stack.push(curr);
        }
    }
    return stack;
};