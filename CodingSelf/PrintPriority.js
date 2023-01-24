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

function solution(priorities, location) {
  const printQueue = new Queue();
  const copyQueue = new Queue();
  const resultQueue = new Queue();

  const exact = {
    data: priorities[location],
    marked: true,
  };

  for (let i = 0; i < priorities.length; i++) {
    if (i === location) {
      printQueue.enqueue(exact);
    } else {
      printQueue.enqueue({ data: priorities[i], marked: false });
    }

    copyQueue.enqueue(priorities[i]);
  }

  copyQueue.queue.sort(function (a, b) {
    return b - a;
  });

  while (copyQueue.size() !== 0) {
    let max = copyQueue.dequeue();

    for (let i = printQueue.front; i < printQueue.rear; i++) {
      if (printQueue.peek().data < max) {
        let temp = printQueue.dequeue();
        printQueue.enqueue(temp);
      } else {
        break;
      }
    }

    resultQueue.enqueue(printQueue.dequeue());
  }

  let finalNumber = 0;
  for (let request of resultQueue.queue) {
    if (!request.marked) {
      finalNumber += 1;
    } else {
      break;
    }
  }
  return finalNumber + 1;
}
