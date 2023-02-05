class Queue {
  constructor() {
    this.queue = [];
    this.front = 0;
    this.rear = 0;
  }

  enqueue(data) {
    this.queue[this.rear++] = data;
  }

  dequeue() {
    const temp = this.queue[this.front];
    delete this.queue[this.front];
    this.front++;
    return temp;
  }

  size() {
    return this.rear - this.front;
  }
}

function solution(priorities, location) {
  const queue = new Queue();
  const result = [];

  for (let i = 0; i < priorities.length; i++) {
    queue.enqueue([priorities[i], i]);
  }

  priorities.sort((a, b) => b - a);

  while (queue.size() > 0) {
    let max = priorities[0];
    let doc = queue.dequeue();
    if (max > doc[0]) {
      queue.enqueue(doc);
    } else {
      result.push(doc);
      priorities.shift();
    }
  }

  for (let i = 0; i < result.length; i++) {
    if (result[i][1] === location) {
      return i + 1;
    }
  }
}
