class MinHeap {
  constructor() {
    this.heap = [null];
  }

  push(data) {
    this.heap.push(data);
    let currentIndex = this.heap.length - 1;
    let parentIndex = Math.floor(currentIndex / 2);

    while (parentIndex !== 0 && this.heap[parentIndex] > data) {
      const temp = this.heap[parentIndex];
      this.heap[parentIndex] = data;
      this.heap[currentIndex] = temp;

      currentIndex = parentIndex;
      parentIndex = Math.floor(currentIndex / 2);
    }
  }
}

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

function solution(no, works) {
  const origin = new Queue();
  const heap = new MinHeap();
  let count = 0;

  for (let i = 0; i < works.length; i++) {
    origin.enqueue([...works]);
  }
  //console.log(origin);

  while (true) {
    for (let i = 0; i < works.length; i++) {
      const test = origin.dequeue();

      if (test[i] > 0) {
        test[i] -= 1;
      }

      for (let i = 0; i < works.length; i++) {
        origin.enqueue([...test]);
      }

      const result = test.map((value) => value * value).reduce((a, b) => a + b);
      heap.push(result);
      //console.log(origin);
      count += 1;
    }
    let finalCount = Math.log10(count) / Math.log10(works.length);

    if (finalCount === no) break;
  }

  //console.log(heap);
  return heap.heap[1];
}

solution(4, [4, 3, 3]);
