/**
 * @param {string[]} ops
 * @return {number}
 682. 棒球比赛
 遍历数组 整数入栈,栈顶元素，入栈转number类型, + 前两个相加
 */
var calPoints = function(ops) {
    const stack = []
    for (let i = 0; i < ops.length; i++) {
        switch (ops[i]) {
            case '+':
                stack.push(stack[stack.length - 1] + stack[stack.length - 2])
                break;
            case 'D':
                stack.push(stack[stack.length - 1] * 2)
                break
            case 'C':
                stack.pop()
                break
            default:
                stack.push(Number(ops[i]))
                break
        }
    }
    const sum = stack.reduce((sum, val) => {
        return sum + val
    })
    return sum
};