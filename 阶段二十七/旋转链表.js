/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} k
 * @return {ListNode}
 61. 旋转链表
n=1, 遍历到尾节点的长度，记录链表的长度
n=5 k %= n k模拟链表的长度取余

 1  ->  2  ->  3  ->  4  ->  5
head                        cur
              cur    head
 */
var rotateRight = function(head, k) {
    // 判断一下它是不是空的，或者一个节点，或者 k为0
    if (!head || !head.next || k === 0) return head
    let cur = head,
        n = 1
        // 计算链表长度
    while (cur.next) {
        cur = cur.next
        n++
    }
    cur.next = head // 尾部指向头部
    k %= n // 取模
    let i = n - k
    while (--i) {
        head = head.next
    }
    cur = head
    head = head.next
    cur.next = null
    return head
};