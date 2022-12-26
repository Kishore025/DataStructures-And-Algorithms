class Queue {
  constructor() {
    this.items = [];
  }

  //Add an element to the queue
  enqueue(element) {
    this.items.push(element);
  }
  //Remove the oldest element of the queue
  dequeue() {
    return this.items.shift();
  }
  //Get the value of an element at the front of the queue without removing it
  peek() {
    return this.items[0];
  }

  isEmpty() {
    if (!this.items.isEmpty) {
      return this.items.length === 0;
    }
    return null;
  }

  //Get the elements of the queue
  size() {
    return this.items.length;
  }

  //Visulize the element of the queue
  print() {
    console.log(this.items.toString());
  }
}

const queue = new Queue();
console.log(queue.isEmpty());

queue.enqueue(10);
queue.enqueue(20);
queue.enqueue(30);
console.log(queue.dequeue());
console.log(queue.size());
console.log(`peek ${queue.peek()}`);
queue.print();
