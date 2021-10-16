const { NotImplementedError } = require("../extensions/index.js");

const { Node } = require("../extensions/list-tree.js");

/**
 * Implement simple binary search tree according to task description
 * using Node from extensions
 */

module.exports = class BinarySearchTree {
  constructor() {
    this.rootElem = null;
  }
  root() {
    return this.rootElem;
  }

  add(data) {
    this.rootElem = addNode(this.rootElem, data);
    function addNode(node, value) {
      if (!node) {
        return new Node(data);
      }
      if (node.data === data) {
        return node;
      }
      if (node.data > data) {
        node.left = addNode(node.left, data);
      } else {
        node.right = addNode(node.right, data);
      }
      return node;
    }
  }
  has(data) {
    return findNode(this.rootElem, data);
    function findNode(node, data) {
      if (!node) return false;
      if (node.data === data) return true;
      return node.data > data
        ? findNode(node.left, data)
        : findNode(node.right, data);
    }
  }

  find(data) {
    return findNode(this.rootElem, data);
    function findNode(node, data) {
      if (!node) return null;
      if (node.data === data) return node;
      return node.data > data
        ? findNode(node.left, data)
        : findNode(node.right, data);
    }
  }

  remove(data) {
    this.rootElem = removeNode(this.rootElem, data);
    function removeNode(node, data) {
      if (!node) {
        return null;
      }
      if (node.data > data) {
        node.left = removeNode(node.left, data);
        return node;
      } else if (node.data < data) {
        node.right = removeNode(node.right, data);
        return node;
      } else if (node.data === data) {
        if (!node.left && !node.right) return null;
        if (!node.left && node.right) {
          return node.right;
        }
        if (node.left && !node.right) {
          return node.left;
        }
        let minFromRight = node.right;
        while (minFromRight.left) {
          minFromRight = minFromRight.left;
        }
        node.data = minFromRight.data;

        node.right = removeNode(node.right, minFromRight.data);
        return node;
      }
    }
  }

  min() {
    if (!this.rootElem) return;
    return findMinNode(this.rootElem);
    function findMinNode(node) {
      if (node.left) return findMinNode(node.left);
      return node.data;
    }
  }
  max() {
    if (!this.rootElem) return;
    return findMinNode(this.rootElem);
    function findMinNode(node) {
      if (node.right) return findMinNode(node.right);
      return node.data;
    }
  }
};
