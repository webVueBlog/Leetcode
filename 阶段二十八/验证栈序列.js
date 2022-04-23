/**
 * @param {number[]} pushed
 * @param {number[]} popped
 * @return {boolean}
946. 验证栈序列
pushed = [1,2,3,4,5], popped = [4,5,3,2,1]
 */
var validateStackSequences = function(pushed, popped) {
    const stack = []
    for (let i = 0; i < pushed.length; i++) {
        stack.push(pushed[i])
        while (popped.length && popped[0] === stack[stack.length - 1]) {
            stack.pop()
            popped.shift()
        }
    }
    return !stack.length
};