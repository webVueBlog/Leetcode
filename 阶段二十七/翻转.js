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
 25. K 个一组翻转链表
 // 定义一个虚拟的头节点
 -1 -> 1 -> 2 -> 3 -> 4 -> 5
 pre.  s(开始的位置)
       e(终止的位置)
 -1 -> 1 -> 2 -> 3 -> 4 -> 5
       s    e
 -1 -> 2 -> 1 -> 3 -> 4 -> 5
pre    e    s
           pre   s
                 e
                 pre  s -> null
                                e
 */
var reverseKGroup = function(head, k) {
    if (k === 1) return head
    const newNode = new ListNode(-1, head)
    let pre = newNode,
        n = k,
        s = e = head
        // 开始节点
    while (s) {
        // n减少 e结束节点往下走
        while (--n && e) {
            e = e.next
        }
        // 如果走到null
        if (!e) return newNode.next
            // 然后翻转 指向s开始,k翻转
        pre.next = reverse(s, k)
            // 走下一步
        pre = s
        s = e = s.next
        n = k
    }
    return newNode.next
};

// 定义一个函数帮助我们进行链表的翻转
var reverse = function(head, k) {
    let cur = head,
        next = head.next
    while (--k) {
        head.next = next.next
        next.next = cur
        cur = next
        next = head.next
    }
    return cur
}