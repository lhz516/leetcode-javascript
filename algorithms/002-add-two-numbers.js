/**
 * 2. Add Two Numbers
 * https://leetcode.com/problems/add-two-numbers
 *
 * You are given two non-empty linked lists representing two non-negative integers.
 * The digits are stored in reverse order and each of their nodes contain a single digit.
 * Add the two numbers and return it as a linked list.
 *
 * You may assume the two numbers do not contain any leading zero, except the number 0 itself.
 * Input: (2 -> 4 -> 3) + (5 -> 6 -> 4)
 * Output: 7 -> 0 -> 8
 *
 * Author: Hanz Luo
 * Date: 6/29/2017
 *
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 *
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers = function(l1, l2) {
  const head = new ListNode();
  let addOneToNextNode;
  const addTwoLists = (l1node, l2node, current) => {
    const sum = (l1node ? l1node.val : 0) + (l2node ? l2node.val : 0) + (addOneToNextNode ? 1 : 0);
    addOneToNextNode = false;
    if (sum < 10) {
      current.val = sum;
    } else {
      current.val = sum - 10;
      addOneToNextNode = true;
    }
    if ((l1node && l1node.next) || (l2node && l2node.next) || addOneToNextNode) {
      current.next = new ListNode();
      addTwoLists(l1node ? l1node.next : null, l2node ? l2node.next : null, current.next);
    }
  };

  addTwoLists(l1, l2, head);
  return head;
};
