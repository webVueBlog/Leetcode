/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode[]} lists
 * @return {ListNode}
 23. 合并K个升序链表
 let t = p.next.next;
 const p = {
     val: 1,
     next: {
         val: 4,
         next: {}
     }
 }
 [1,4,5]
  i
 [1,3,4]
  j
 [2,6]
  k
  最小堆 [空着, 1, 1, 2]
               堆顶
[1, 1, 2]
 // 堆，分治
 queue = [[2,6,1,4,5,1,3,4]]
 [1,4,5]
    i
 [1,3,4]
      j
1->1->3->4->4->5...
 */
var mergeKLists = function(lists) {
    if(!lists.length) return null;
    const queue = [...lists]; // 队列
    while(queue.length >= 2) { // 至少两个队列
        // 合并两个链表
        const l1 = queue.shift();
        const l2 = queue.shift();
        const l3 = merge(l1, l2);
        queue.push(l3);
    }
    return queue[0];
};

function merge(l1, l2) {
    const head = new ListNode();
    // null ->
    let p = head;
    while (l1 && l2) {
        if(l1.val < l2.val) {
            p.next = l1;
            l1 = l1.next;
        } else {
            p.next = l2;
            l2 = l2.next;
        }
        p = p.next;
    }
    if(l1) {
        p.next = l1;
    }
    if(l2) {
        p.next = l2;
    }
    return head.next;
}
















