/**
 * Initialize your data structure here.
 面试题 03.04. 化栈为队
 */
var MyQueue = function() {
    this.inStack = [] // 进
    this.outStack = [] // 出
};

/**
 * Push element x to the back of queue. 
 * @param {number} x
 * @return {void}
 */
MyQueue.prototype.push = function(x) {
    this.inStack.push(x)
};

/**
 * Removes the element from in front of queue and returns that element.
 * @return {number}
 */
MyQueue.prototype.pop = function() {
    if (this.empty()) return
    if (!this.outStack.length) {
        this.move()
    }
    return this.outStack.pop()
};

/**
 * Get the front element.
 * @return {number}
 */
MyQueue.prototype.peek = function() {
    if (this.empty()) return
    if (!this.outStack.length) {
        this.move()
    }
    return this.outStack[this.outStack.length - 1]
};

/**
 * Returns whether the queue is empty.
 * @return {boolean}
 */
MyQueue.prototype.empty = function() {
    return !this.inStack.length && !this.outStack.length
};

MyQueue.prototype.move = function() {
    while (this.inStack.length) {
        this.outStack.push(this.inStack.pop())
    }
}

/**
 * Your MyQueue object will be instantiated and called as such:
 * var obj = new MyQueue()
 * obj.push(x)
 * var param_2 = obj.pop()
 * var param_3 = obj.peek()
 * var param_4 = obj.empty()
 */