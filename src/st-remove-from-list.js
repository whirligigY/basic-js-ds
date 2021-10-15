const { NotImplementedError } = require("../extensions/index.js");

/**
 * Given a singly linked list of integers l and an integer k,
 * remove all elements from list l that have a value equal to k.
 *
 * @param {List} l
 * @param {Number} k
 * @return {List}
 *
 * @example
 * For l = [3, 1, 2, 3, 4, 5] and k = 3,
 * the output should be [1, 2, 4, 5]
 *
 * Singly - linked lists are already defined with this interface
 * function ListNode(x) {
 *   this.value = x;
 *   this.next = null;
 * }
 */

function delK(current, k) {
  if (current === null) return null;

  if (current.value === k) {
    if (current.next === null) return null;
    else {
      return delK(current.next, k);
    }
  } else {
    return {
      value: current.value,
      next: delK(current.next, k),
    };
  }
}

module.exports = function removeKFromList(l, k) {
  if (l === null) return null;

  if (l.value === k) {
    if (l.next === null) return null;
    else {
      return removeKFromList(l.next, k);
    }
  } else {
    return {
      value: l.value,
      next: removeKFromList(l.next, k),
    };
  }
};
