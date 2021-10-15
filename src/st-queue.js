const { NotImplementedError } = require("../extensions/index.js");

// const { ListNode } = require('../extensions/list-node.js');

/**
 * Implement the Queue with a given interface via linked list (use ListNode extension above).
 *
 * @example
 * const queue = new Queue();
 *
 * queue.enqueue(1); // adds the element to the queue
 * queue.enqueue(3); // adds the element to the queue
 * queue.dequeue(); // returns the top element from queue and deletes it, returns 1
 * queue.getUnderlyingList() // returns { value: 3, next: null }
 */
module.exports = class Queue {
  constructor() {
    this.value = null;
  }
  getUnderlyingList() {
    return this;
  }
  enqueue(value, currentThis = this) {
    console.log(currentThis);
    if (currentThis.next === undefined) {
      this.value = value;
      this.next = null;
      return;
    }
    if (currentThis.next !== null) {
      this.enqueue(value, currentThis.next);
    } else if (currentThis.next === null) {
      currentThis.next = {};
      currentThis = currentThis.next;
      currentThis.value = value;
      currentThis.next = null;
      return;
    }
  }
  dequeue() {
    const valueFirst = this.value;
    const first = this.next;
    console.log(valueFirst, first);
    this.value = first.value;
    this.next = first.next;
    return valueFirst;
  }
};
