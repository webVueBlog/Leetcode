/*
 * @lc app=leetcode.cn id=23 lang=javascript
 *
 * [23] 合并K个升序链表
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
 * @param {ListNode[]} lists
 * @return {ListNode}

给你一个链表数组，每个链表都已经按升序排列。

请你将所有链表合并到一个升序链表中，返回合并后的链表。

输入：lists = [[1,4,5],[1,3,4],[2,6]]
输出：[1,1,2,3,4,4,5,6]
解释：链表数组如下：
[
  1->4->5,
  1->3->4,
  2->6
]
将它们合并到一个有序链表中得到。
1->1->2->3->4->4->5->6

输入：lists = []
输出：[]

输入：lists = [[]]
输出：[]

在JS中，数组有shift()和pop()方法，允许用户从原始数组中移除头部和尾部元素。
(80 ms)
 */
var mergeLists = function(a, b) {
 const dummy = new ListNode(0);
 let temp = dummy;
 while(a !== null && b !== null) {
  if(a.val < b.val) {
   temp.next = a;
   a = a.next
  } else {
   temp.next = b;
   b = b.next;
  }
  temp = temp.next;
 }
 if(a !== null) {
  temp.next = a;
 }
 if(b !== null) {
  temp.next = b;
 }
 return dummy.next;
};

var mergeKLists = function(lists) {
 if(lists.length === 0) {
  return null;
 }
 while(lists.length > 1) {
  let a = lists.shift();
  let b = lists.shift();
  const h = mergeLists(a, b);
  lists.push(h);
 }
 return lists[0];
}
// @lc code=end

