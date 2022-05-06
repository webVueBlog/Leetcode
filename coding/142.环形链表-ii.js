/*
 * @lc app=leetcode.cn id=142 lang=javascript
 *
 * [142] 环形链表 II
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
 * @return {ListNode}
 * 2(x+y) = x+2y+z
 * x = z 
 */
var detectCycle = function(head) {
    if (!head || head.next === null) return null
    let p = q = head
    do {
        p = p.next
        q = q.next.next
    } while (p !== q && q && q.next)

    if (p !== q) return null
    p = head
    while (p !== q) {
        p = p.next
        q = q.next
    }
    return p
};
// @lc code=end

// var detectCycle = function(head) {
//     if (!head || head.next === null) return null

//     const map = new Map()
//     let p = head
//     while (p) {
//         if (!map.has(p)) {
//             map.set(p, p)
//             p = p.next
//         } else {
//             return p
//         }
//     }
//     return false
// };