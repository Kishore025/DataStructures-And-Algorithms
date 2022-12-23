class Stack {
  //initialize the stack
  constructor() {
    this.items = [];
  }

  //implement push method
  push(element) {
    this.items.push(element);
  }

  //implement pop method
  pop() {
    return this.items.pop();
  }

  //implement peek to get top element in the list
  peek() {
    return this.items[this.items.length - 1];
  }

  //implement size
  size() {
    return this.items.length;
  }

  //to check list is empty or not
  isEmpty() {
    return this.items.length == 0;
  }

  //to visualize the data
  print() {
    console.log(this.items.toString());
  }
}

const stack = new Stack();
console.log(stack.isEmpty());
stack.push(10);
stack.push(20);
stack.push(30);

console.log("Stack size : " + stack.size());
stack.print();

stack.pop();
console.log("The top element in the stack : " + stack.peek());
