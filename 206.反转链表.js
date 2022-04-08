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
 * 
 * prev cur next
 * 
 * while {
 * 
 * }
 */
var reverseList = function(head) {
    // let prev = null;
    // let curr = head;
    // let next = null;
    // while (curr !== null) {
    //     next = curr.next;
    //     curr.next = prev;
    //     prev = curr;
    //     curr = next;
    // }
    // return prev;
    // next = curr.next
    // curr.next = prev
    // prev = curr
    // curr = next
    let [prev, current] = [null, head]
    while (current) {
        [current.next, prev, current] = [prev, current, current.next]
    }
    return prev

};
// @lc code=end
// 1. next = cur.next
// 2. cur.next = prev
// 3. prev = cur
// 4. cur = next