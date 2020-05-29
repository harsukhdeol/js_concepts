//singly linked node points to next node
//doubly linked list- each node points to next and prev node

/*
Uses: 
- can add/ remove items from beginning of list
*/

class Node {
  constructor(data, next = null) {
    this.data = data;
    this.next = next;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
  }
}
LinkedList.prototype.insertAtEnd = function (data) {
  // A newNode object is created with property data and next=null

  let newNode = new Node(data);
  // When head = null i.e. the list is empty, then head itself will point to the newNode.
  if (!this.head) {
    this.head = newNode;
    return this.head;
  }
  // Else, traverse the list to find the tail (the tail node will initially be pointing at null), and update the tail's next pointer.
  let tail = this.head;
  while (tail.next !== null) {
    tail = tail.next;
  }
  tail.next = newNode;
  return this.head;
};

/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 *
 * ListNode is just an 'object' that has {val:#, next:[ListNode]}
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */

var reverseList = function (head) {
  let current = head;
  let prev = null;
  while (current) {
    let nextTemp = current.next; //store next node
    current.next = prev; //switch direction of pointer
    console.log(current);
    prev = current;
    current = nextTemp;
  }
  //current is null node

  return prev;
};

//using recursive

var reverseList = function (head, prev = null) {
  if (!head) return null;
  const next = reverseList(head.next, head);
  head.next = prev;
  return next || head;
};
