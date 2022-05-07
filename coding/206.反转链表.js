/*
 * @lc app=leetcode.cn id=206 lang=javascript
 *
 * [206] 反转链表
 */

// @lc code=start
/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var reverseList = function(head) {
    let [prev, current] = [null, head]
    while (current) {
        [current.next, prev, current] = [prev, current, current.next]
    }
    return prev
};

// var reverseList = function(head) {
//     if (!head) return null;
//     let cur = head,
//         next
//     while (head.next) {
//         next = head.next.next
//         head.next.next = cur
//         cur = head.next
//         head.next = next
//     }
//     return cur
// };
// @lc code=end