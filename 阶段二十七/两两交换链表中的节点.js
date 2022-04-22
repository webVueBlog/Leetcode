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
 24. 两两交换链表中的节点
 迭代法
 
 -1 -> 1 -> 2 -> 3 -> 4 -> 5
 pre  cur  next

  -1 ->   2  ->  1  -> 3 -> 4 -> 5
 pre -> next -> cur -> 3 -> 4 -> 5
                pre   cur  next
  -1 ->   2  ->  1  -> 4 -> 3 -> 5
                pre   next  cur
                      next  pre cur
 */
// 递归 重复过程，重复过程的条件
var swapPairs = function(head) {
    // if(!head || !head.next) return head
    // const newNode = new ListNode(-1, head);
    // let pre = newNode, cur = head, next
    // while(cur && cur.next) {
    //     // 成对
    //     next = cur.next // pre cur next
    //     pre.next = next // pre next
    //     cur.next = next.next // 下一个
    //     next.next = cur
    //     pre = cur // pre cur next
    //     cur = cur.next
    // }
    // return newNode.next

    // 递归
    // 1 -> 2 head head.next -> next.next
    // 2 -> 1 head.next(next) head
    if (!head || !head.next) return head
    const next = head.next
    head.next = swapPairs(next.next)
    next.next = head
    return next
};