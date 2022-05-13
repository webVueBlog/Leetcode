/*
 * @lc app=leetcode.cn id=141 lang=javascript
 *
 * [141] 环形链表
 */

// @lc code=start
/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} head
 * @return {boolean}
 * 给你一个链表的头节点 head ，判断链表中是否有环。

如果链表中有某个节点，可以通过连续跟踪 next 指针再次到达，则链表中存在环。 为了表示给定链表中的环，评测系统内部使用整数 pos 来表示链表尾连接到链表中的位置（索引从 0 开始）。注意：pos 不作为参数进行传递 。仅仅是为了标识链表的实际情况。

如果链表中存在环 ，则返回 true 。 否则，返回 false 。

输入：head = [3,2,0,-4], pos = 1
输出：true
解释：链表中有一个环，其尾部连接到第二个节点。

输入：head = [1,2], pos = 0
输出：true
解释：链表中有一个环，其尾部连接到第一个节点。

输入：head = [1], pos = -1
输出：false
解释：链表中没有环。

 (76 ms)
 
 */
// var hasCycle = function(head) {
//     if (!head || head.next === null) return false
//     let p = q = head
//     do {
//         p = p.next
//         q = q.next.next
//     } while (p !== q && q !== null && q.next !== null)
//     return p === q
// };

var hasCycle = function(head) {
    // head赋值给fast临时变量
    let fast = head;
    // fast存在，next也存在
    while(fast && fast.next) {
        // 头往一步
        head = head.next;
        // fast走两步
        fast = fast.next.next;
        if(head === fast) return true;
    }
    return false;
}

// @lc code=end

// var hasCycle = function(head) {
//     if (!head || head.next === null) return false
//     let p = head
//     const arr = []
//     while (p !== null) {
//         if (!arr.includes(p)) {
//             arr.push(p)
//             p = p.next
//         } else {
//             return true
//         }
//     }
//     return false;
// };