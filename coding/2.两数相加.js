/*
 * @lc app=leetcode.cn id=2 lang=javascript
 *
 * [2] 两数相加
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
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}

给你两个 非空 的链表，表示两个非负的整数。它们每位数字都是按照 逆序 的方式存储的，并且每个节点只能存储 一位 数字。

请你将两个数相加，并以相同形式返回一个表示和的链表。

你可以假设除了数字 0 之外，这两个数都不会以 0 开头。

输入：l1 = [2,4,3], l2 = [5,6,4]
输出：[7,0,8]
解释：342 + 465 = 807.

输入：l1 = [0], l2 = [0]
输出：[0]

输入：l1 = [9,9,9,9,9,9,9], l2 = [9,9,9,9]
输出：[8,9,9,9,0,0,0,1]

 */
// (100 ms)
 var addTwoNumbers = function(l1, l2) {
  // 创建链表 List.next为结果值
  var List = new ListNode(0);
  // 临时链表
  var head = List;
  var sum = 0;
  // 进位
  var carry = 0;

  while(l1!==null||l2!==null||sum>0){
      // 2->4->3
      if(l1!==null){
          // 当前链表的值
          sum = sum + l1.val;
          l1 = l1.next;
      }
      if(l2!==null){
          sum = sum + l2.val;
          l2 = l2.next;
      }
      if(sum>=10){
          carry = 1;
          sum = sum - 10;
      }
      // head.next 就是下一个值
      head.next = new ListNode(sum);
      // 赋值下一个head
      head = head.next;
      // 有值的话下一个相加
      sum = carry;
      carry = 0;

  }

  return List.next;
};
// @lc code=end

