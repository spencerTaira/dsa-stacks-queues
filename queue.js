const LinkedList = require("./linked-list");

/** Node: node for a queue. */

// class Node {
//   val = null;
//   next = null;

//   constructor(val) {
//     this.val = val;
//   }
// }

/** Queue: chained-together nodes where you can
 *  remove from the front or add to the back. */

class Queue {
  first = null;
  last = null;
  size = 0;

  constructor() {
    this._ll = new LinkedList();
  }
  /** enqueue(val): add new value to end of the queue. Returns undefined. */

  enqueue(val) {
    this._ll.push(val);

    if (this.size === 0) {
      this.first = this._ll.head;
    }

    this.last = this._ll.tail;
    this.size += 1;
  }

  /** dequeue(): remove the node from the start of the queue
   * and return its value. Should throw an error if the queue is empty. */

  dequeue() {
    const firstItem = this._ll.shift();
    this.first = this._ll.head;
    this.size -= 1;

    if (this.size === 0) {
      this.last = this._ll.tail;
    }

    return firstItem;
  }

  /** peek(): return the value of the first node in the queue. */

  peek() {
    return this._ll.getAt(0);
  }

  /** isEmpty(): return true if the queue is empty, otherwise false */

  isEmpty() {
    return this._ll.length === 0;
  }
}

module.exports = Queue;
