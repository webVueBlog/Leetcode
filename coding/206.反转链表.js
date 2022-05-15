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

给你单链表的头节点 head ，请你反转链表，并返回反转后的链表。

输入：head = [1,2,3,4,5]
输出：[5,4,3,2,1]

输入：head = [1,2]
输出：[2,1]

输入：head = []
输出：[]

(60 ms)
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