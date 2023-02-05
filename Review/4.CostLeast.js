class MaxHeap {
  constructor() {
    this.heap = [null];
  }

  push(data) {
    this.heap.push(data);
    let currentIdx = this.heap.length - 1;
    let parentIdx = Math.floor(currentIdx / 2);

    while (this.heap[parentIdx] !== null && this.heap[parentIdx] < data) {
      this.swap(parentIdx, currentIdx);

      currentIdx = parentIdx;
      parentIdx = Math.floor(currentIdx / 2);
    }
  }

  pop() {
    if (this.heap.length === 2) {
      const temp = this.heap[1];
      this.heap.pop();
      return temp;
    }

    const temp = this.heap[1];
    this.heap[1] = this.heap.pop();

    let currentIdx = 1;
    let leftIdx = 2;
    let rightIdx = 3;

    while (
      this.heap[currentIdx] < this.heap[leftIdx] ||
      this.heap[currentIdx] < this.heap[rightIdx]
    ) {
      if (this.heap[rightIdx] > this.heap[leftIdx]) {
        this.swap(rightIdx, currentIdx);

        currentIdx = rightIdx;
      } else {
        this.swap(leftIdx, currentIdx);

        currentIdx = leftIdx;
      }
      rightIdx = 2 * currentIdx + 1;
      leftIdx = 2 * currentIdx;
    }

    return temp;
  }

  swap(idx1, idx2) {
    const temp = this.heap[idx1];
    this.heap[idx1] = this.heap[idx2];
    this.heap[idx2] = temp;
  }
}

function solution(no, works) {
  const heap = new MaxHeap();

  for (let work of works) {
    heap.push(work);
  }

  while (no > 0) {
    let work = heap.pop();
    if (work === 0) return 0;
    no--;
    work--;
    heap.push(work);
  }

  //console.log(heap.heap.reduce((acc, cur) => acc + cur * cur));
  return heap.heap.reduce((acc, cur) => acc + cur * cur);
}

solution(3, [3]);
