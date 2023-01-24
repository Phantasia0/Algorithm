class QueueWithArray {
  constructor() {
    this.queue = [];
    this.front = 0;
    this.rear = 0;
  }

  enqueue(data) {
    this.queue[this.rear++] = data;
  }

  dequeue() {
    const value = this.queue[this.front];
    delete this.queue[this.front];
    this.front += 1;
    return value;
  }

  peek() {
    return this.queue[this.front];
  }

  size() {
    return this.rear - this.front;
  }
}

// const queue = new Queue();
// queue.enqueue(1);
// queue.enqueue(2);
// queue.enqueue(4);
// console.log(queue.dequeue());
// queue.enqueue(8);
// console.log(queue.size());
// console.log(queue.peek());
// console.log(queue.dequeue());
// console.log(queue.dequeue());
class Node {
  constructor(data) {
    this.data = data;
    this.next = null;
  }
}

class QueueWithLinked {
  constructor() {
    this.header = null;
    this.tail = null;
  }

  enqueue(data) {
    const newNode = new Node(data);
    if (this.header === null) {
      this.header = newNode;
      this.tail = newNode;
    } else {
      this.tail.next = newNode;
      this.tail = newNode;
    }
  }

  dequeue() {
    if (this.header === null) return null;

    const value = this.header.data;
    this.header = this.header.next;

    return value;
  }

  peek() {
    return this.header.data;
  }

  size() {
    let size = 0;
    let curNode = this.header;
    while (curNode !== null) {
      curNode = curNode.next;
      size += 1;
    }

    return size;
  }
}

// const queue = new QueueWithLinked();
// queue.enqueue(1);
// queue.enqueue(2);
// queue.enqueue(3);
// console.log(queue.dequeue());
// console.log(queue.dequeue());
// console.log(queue.dequeue());
// queue.enqueue(3);

// console.log(queue.size());
