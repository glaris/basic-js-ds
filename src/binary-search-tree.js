const { NotImplementedError } = require('../lib');
// const { Node } = require('../extensions/list-tree.js');

/**
* Implement simple binary search tree according to task description
* using Node from extensions
*/
class BinarySearchTree {
  constructor() {
    this.treeRoot = null;
  }

  root() {
    return this.treeRoot;
  }

  add(data) {
    const addNode = (node, data) => {
      if (!node) {
        return { data, left: null, right: null };
      }
      if (data === node.data) {
        return node;
      }
      if (data < node.data) {
        node.left = addNode(node.left, data);
      } else {
        node.right = addNode(node.right, data);
      }
      return node;
    };

    this.treeRoot = addNode(this.treeRoot, data);
  }

  find(data) {
    const searchNode = (node, data) => {
      if (!node) return null;
      if (data === node.data) return node;
      return data < node.data
        ? searchNode(node.left, data)
        : searchNode(node.right, data);
    };

    return searchNode(this.treeRoot, data);
  }

  has(data) {
    return !!this.find(data);
  }

  remove(data) {
    const removeNode = (node, data) => {
      if (!node) return null;

      if (data < node.data) {
        node.left = removeNode(node.left, data);
        return node;
      } else if (data > node.data) {
        node.right = removeNode(node.right, data);
        return node;
      } else {
        if (!node.left && !node.right) return null;
        if (!node.left) return node.right;
        if (!node.right) return node.left;

        let minFromRight = node.right;
        while (minFromRight.left) {
          minFromRight = minFromRight.left;
        }
        node.data = minFromRight.data;
        node.right = removeNode(node.right, minFromRight.data);
        return node;
      }
    };

    this.treeRoot = removeNode(this.treeRoot, data);
  }

  min() {
    if (!this.treeRoot) return null;
    let node = this.treeRoot;
    while (node.left) {
      node = node.left;
    }
    return node.data;
  }

  max() {
    if (!this / this.treeRoot) return null;
    let node = this.treeRoot;
    while (node.right) {
      node = node.right;
    }
    return node.data;
  }
}

module.exports = {
  BinarySearchTree
};
