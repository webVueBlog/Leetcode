var RecentCounter = function() {
    this.queue = []
};

/** 
 * @param {number} t
 * @return {number}
 933. 最近的请求次数
 队列，单调递增的队列
 RecentCounter recentCounter = new RecentCounter();
 首先初始化的时候是一个空的队列,他开始ping 的时候就把它推进队里入队
 recentCounter.ping(1)
 recentCounter.ping(100) 
 */
RecentCounter.prototype.ping = function(t) {
    this.queue.push(t)
    while (this.queue[0] < t - 3000) {
        this.queue.shift()
    }
    return this.queue.length
};

/**
 * Your RecentCounter object will be instantiated and called as such:
 * var obj = new RecentCounter()
 * var param_1 = obj.ping(t)
 */