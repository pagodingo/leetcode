/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 * Given the head of a singly linked list, return the middle node of the linked list.
 *
 * If there are two middle nodes, return the second middle node.
 *
 *
 *
 * Example 1:
 *
 *
 * Input: head = [1,2,3,4,5]
 * Output: [3,4,5]
 * Explanation: The middle node of the list is node 3.
 */
var middleNode = function (head) {
  let list = [];
  let next = head;

  while (next) {
    list.push(next);
    next = next.next;
  }

  return array[
    array.length % 2 === 0 ? array.length / 2 : (array.length - 1) / 2
  ];
};
