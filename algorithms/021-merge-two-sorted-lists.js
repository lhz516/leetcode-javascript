/**
 * 21. Merge Two Sorted Lists
 * https://leetcode.com/problems/merge-two-sorted-lists
 *
 * Merge two sorted linked lists and return it as a new list. The new list should be
 * made by splicing together the nodes of the first two lists.
 *
 * Author: Hanz Luo
 * Date: 7/5/2017
 */

/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var mergeTwoLists = function(l1, l2) {
  const head = new ListNode();
  let headNew = head;
  while(l1 && l2) {
    if (l1.val > l2.val) {
      headNew.next = new ListNode(l2.val);
      l2 = l2.next;
    } else {
      headNew.next = new ListNode(l1.val);
      l1 = l1.next;
    }
    headNew = headNew.next;
  }
  headNew.next = l1 ? l1 : l2;
  return head.next;
};
