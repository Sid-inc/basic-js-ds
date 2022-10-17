const { NotImplementedError } = require('../extensions/index.js');

// const { ListNode } = require('../extensions/list-node.js');

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
 * Singly - linked lists are already defined using interface
 * class ListNode {
 *   constructor(x) {
 *     this.value = x;
 *     this.next = null;
 *   }
 * }
 */
function removeKFromList(list, item) {
  let hasItem = true;
  
  while (hasItem) {
    let itemIndex = getIndex(list, item);

    if (itemIndex >= 0) {
      list = removeItem(list, itemIndex);
    } else {
      hasItem = false;
    }
  }

  return list;
}

function getIndex(list, item) {
  let current = list;
  let index = 0;
  let itemIndex = -1;
  
  while (current) {
    if (current.value === item) {
      itemIndex = index;
    }
    
    current = current.next;
    index++;
  }
  
  return itemIndex;
}

function removeItem(list, itemIndex) {
  let current = list;
  
  if (itemIndex === 0) {
    list = current.next;
  } else {
    let prev = null;
    let index = 0;

    while (index < itemIndex) {
      prev = current;
      current = current.next;
      index++;
    }

    prev.next = current.next;
  }

  return list;
}

module.exports = {
  removeKFromList
};
