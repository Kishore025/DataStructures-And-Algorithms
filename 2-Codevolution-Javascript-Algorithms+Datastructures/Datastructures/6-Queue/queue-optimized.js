/***
 * Lets create the optimized queue why because previously implemened dequeue() method as Unshift-O(n) time complexity
 * so we can reduce to constant time O(1) by using objects
 */

class Queue {
  constructor() {
    this.items = {};
    this.rear = 0;
    this.front = 0;
  }

  enqueue(element) {
    this.items[this.rear] = element;
    this.rear++;
  }

  dequeue() {
    const item = this.items[this.front];
    delete this.items[this.front];
    this.front++;
    return item;
  }

  peek() {
    return this.items[this.front];
  }

  size() {
    return this.rear - this.front;
  }

  isEmpty() {
    return this.rear - this.front === 0;
  }

  print() {
    console.table(this.items);
  }
}

const queue = new Queue();
console.log(`Queue is empty ? \n${queue.isEmpty()}`);
queue.enqueue(10);
queue.enqueue(20);
queue.enqueue(30);

queue.print();
console.log(`deleting : ${queue.dequeue()}`);
console.log(`Peek : ${queue.peek()}`);
console.log(`Queue size : ${queue.size()}`);

console.log(`deleting : ${queue.dequeue()}`);
console.log(`Peek : ${queue.peek()}`);
console.log(`Queue size : ${queue.size()}`);
