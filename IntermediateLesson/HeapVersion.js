class MinHeap {
  constructor() {
    this.heap = [null];
  }

  isEmpty() {
    return this.heap.length === 1;
  }

  _swap(a, b) {
    [this.heap[a], this.heap[b]] = [this.heap[b], this.heap[a]];
  }

  push(value) {
    this.heap.push(value);
    let currentIndex = this.heap.length - 1;
    let parentIndex = Math.floor(currentIndex / 2);

    //
    while (parentIndex !== 0 && this.heap[parentIndex].key > value.key) {
      this._swap(parentIndex, currentIndex);

      currentIndex = parentIndex;
      parentIndex = Math.floor(currentIndex / 2);
    }
  }

  pop() {
    if (this.isEmpty()) return;
    if (this.heap.length === 2) return this.heap.pop();

    const returnValue = this.heap[1];
    this.heap[1] = this.heap.pop();

    let currentIndex = 1;
    let leftIndex = 2;
    let rightIndex = 3;

    while (
      (this.heap[leftIndex] &&
        this.heap[currentIndex].key > this.heap[leftIndex].key) ||
      (this.heap[rightIndex] && this.heap[currentIndex].key > this.heap[rightIndex].key)
    ) {
      if (this.heap[rightIndex] === undefined) {
        this._swap(leftIndex, currentIndex);
        currentIndex = leftIndex;
      } else if (this.heap[rightIndex].key < this.heap[leftIndex].key) {
        this._swap(rightIndex, currentIndex);
        currentIndex = rightIndex;
      } else if (this.heap[rightIndex].key >= this.heap[leftIndex].key) {
        this._swap(leftIndex, currentIndex);
        currentIndex = leftIndex;
      }

      leftIndex = currentIndex * 2;
      rightIndex = currentIndex * 2 + 1;
    }

    return returnValue;
  }
}
