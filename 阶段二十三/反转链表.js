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
 * 剑指 Offer 24. 反转链表
 */
var reverseList = function(head) {
    if (!head || !head.next) return head;
    let pre = null;
    let curr = head;

    while (curr) {
        let next = curr.next;
        curr.next = pre;
        pre = curr;
        curr = next;
    }
    return pre;
};