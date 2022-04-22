/**
 * @param {character[]} tasks
 * @param {number} n
 * @return {number}
 621. 任务调度器
 */
var leastInterval = function(tasks, n) {
    const obj = {}
    for (let i = 0; i < tasks.length; i++) {
        if (!obj[tasks[i]]) obj[tasks[i]] = 1
        else obj[tasks[i]]++
    }
    const max = Math.max(...Object.values(obj))
    let maxCount = 0
    Object.values(obj).forEach(i => {
        if (i === max) maxCount++
    })
    return Math.max((max - 1) * (n + 1) + maxCount, tasks.length)
};