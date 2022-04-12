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
 328. 奇偶链表
 1 -> null

 1 -> 2 -> 3 -> 4 -> 5
 1 3 2 4 5
 1 3 5 2 4

 1 -> 3 -> 5 -> 2 -> 4
 odd: 已处理部分的最后一个奇节点
 start: 已知的第一个偶节点
 end: 已知的最后一个偶节点
 next: 下一个需要处理的奇节点(只要有下一个，就不断走)
 temp: 未处理部分的头结点

 1 -> 2 -> 3 -> 4 -> 5
 o    s(e) n    t

第一步：把 next 放在 odd 后面
1 -> 3 -> 4 -> 5      2 -> 3 -> 4 -> 5
o    n                s(e)      t
第二部：把 start 放在 next 后面
1 -> 3 -> 2 -> 3 -> 4 -> 5
o    n    s(e)      t
第三步：把 temp 放在 end 后面
1 -> 3 -> 2 -> 4 -> 5 - null
o    n    s(e) t
     o    s    e    n   t

// 第一轮
1 -> 3 -> 2 -> 4 -> 5 - null
     o    s    e    n   t
第一步：把 next 放在 odd 后面
1 -> 3 -> 5 - null   2 -> 4 -> 5 - null
     o    n   t      s    e
第二步：把 start 放在 next 后面
1 -> 3 -> 5 -> 2 -> 4 -> 5 - null
     o    n    s    e        t
第三步，把 temp 放在 end 后面
1 -> 3 -> 5 -> 2 -> 4 -> null
     o    n    s    e    t
          o    s         e  n t

(e.next) (n.next)
1 -> 3 -> 2 -> 4 -> 5 - null
     o    s    e    n   t


移动指针

 */

var oddEvenList = function(head) {
    if (!head || !head.next || !head.next.next) return head;
    let odd, start, end, next, temp;
    odd = head;
    start = end = odd.next;
    next = end.next;
    temp = next.next;
    while(next) {
        // 1. 把next放在odd后面
        odd.next = next;
        // 2. 把start放在next后面
        next.next = start;
        // 3. 把temp放在end后面
        end.next = temp;

        // 移动指针
        odd = odd.next;
        end = end.next;
        if(!end || !end.next) {
            break;
        }
        next = end.next;
        temp = next.next;
    }
    return head;
};










