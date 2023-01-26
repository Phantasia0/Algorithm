class MaxHeap {
  constructor() {
    this.heap = [null];
  }

  push(data) {
    this.heap.push(data);
    let currentIndex = this.heap.length - 1;
    let parentIndex = Math.floor(currentIndex / 2);

    while (parentIndex !== 0 && this.heap[parentIndex] < data) {
      const temp = this.heap[parentIndex];
      this.heap[parentIndex] = data;
      this.heap[currentIndex] = temp;

      currentIndex = parentIndex;
      parentIndex = Math.floor(currentIndex / 2);
    }
  }

  pop() {
    if (this.heap.length === 1) return;
    if (this.heap.length === 2) {
      return this.heap.pop();
    }

    const returnValue = this.heap[1];

    this.heap[1] = this.heap.pop();
    let currentIndex = 1;
    let leftIndex = 2;
    let rightIndex = 3;

    while (
      this.heap[currentIndex] < this.heap[leftIndex] ||
      this.heap[currentIndex] < this.heap[rightIndex]
    ) {
      if (this.heap[leftIndex] < this.heap[rightIndex]) {
        const temp = this.heap[currentIndex];
        this.heap[currentIndex] = this.heap[rightIndex];
        this.heap[rightIndex] = temp;

        currentIndex = rightIndex;
      } else {
        const temp = this.heap[currentIndex];
        this.heap[currentIndex] = this.heap[leftIndex];
        this.heap[leftIndex] = temp;

        currentIndex = leftIndex;
      }

      leftIndex = currentIndex * 2;
      rightIndex = currentIndex * 2 + 1;
    }

    return returnValue;
  }
}

function solution(no, works) {
  let result = 0;
  const heap = new MaxHeap();

  for (let work of works) {
    heap.push(work);
  }

  for (let i = 0; i < no; i++) {
    let work = heap.pop() - 1;
    if (work < 0) return 0;
    heap.push(work);
  }
  while (heap.heap.length > 1) {
    let work = heap.pop();
    if (work === 0) break;
    result += work ** 2;
  }

  console.log(result);
  return result;
}

solution(13, [4, 3, 3, 6, 8, 4, 3]);
