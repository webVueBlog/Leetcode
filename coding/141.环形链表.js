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
 */
var hasCycle = function(head) {
    if (!head || head.next === null) return false
    let p = q = head
    do {
        p = p.next
        q = q.next.next
    } while (p !== q && q !== null && q.next !== null)
    return p === q
};
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