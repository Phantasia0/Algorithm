class MaxHeap {
  constructor() {
    this.heap = [null]; //0번 인덱스는 편의를 위해서 비워둔다
  }

  push(value) {
    this.heap.push(value);
    let currentIndex = this.heap.length - 1;
    let parentIndex = Math.floor(currentIndex / 2);
    while (parentIndex !== 0 && value > this.heap[parentIndex]) {
      const temp = this.heap[parentIndex];
      this.heap[parentIndex] = value;
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
    const temp = this.heap[1];
    this.heap[1] = this.heap.pop();
    let currentIndex = 1;
    let level = Math.floor(Math.log2(this.heap.length - 1)) + 1;

    let leftChildIndex, rightChildIndex;
    let leftright;
    if (this.heap.length % 2 !== 0) {
      leftright = false;
    } else {
      leftright = true;
    }

    while (level > 1) {
      if (level === 2 && !leftright) {
        leftChildIndex = 2 * currentIndex;
        if (this.heap[leftChildIndex] > this.heap[currentIndex]) {
          const temp = this.heap[leftChildIndex];
          this.heap[leftChildIndex] = this.heap[currentIndex];
          this.heap[currentIndex] = temp;

          currentIndex = leftChildIndex;
        }
      } else {
        leftChildIndex = 2 * currentIndex;
        rightChildIndex = 2 * currentIndex + 1;

        if (
          this.heap[currentIndex] < this.heap[leftChildIndex] ||
          this.heap[currentIndex] < this.heap[rightChildIndex]
        ) {
          if (this.heap[leftChildIndex] > this.heap[rightChildIndex]) {
            const temp = this.heap[leftChildIndex];
            this.heap[leftChildIndex] = this.heap[currentIndex];
            this.heap[currentIndex] = temp;

            currentIndex = leftChildIndex;
          } else if (this.heap[leftChildIndex] < this.heap[rightChildIndex]) {
            const temp = this.heap[rightChildIndex];
            this.heap[rightChildIndex] = this.heap[currentIndex];
            this.heap[currentIndex] = temp;

            currentIndex = rightChildIndex;
          }
        }
      }

      //루프 끝내는 조건
      if (leftright) {
        if (
          this.heap[leftChildIndex] < this.heap[currentIndex] &&
          this.heap[rightChildIndex] < this.heap[currentIndex]
        ) {
          break;
        }
      } else {
        if (this.heap[leftChildIndex] < this.heap[currentIndex]) {
          break;
        }
      }

      level -= 1;
    }

    return temp;
  }
}

const heap = new MaxHeap();
heap.push(45);
heap.push(36);
heap.push(54);
heap.push(27);
heap.push(63);
heap.push(52);
heap.push(35);
heap.push(13);
heap.push(61);
heap.push(85);

console.log(heap.pop());
console.log(heap.pop());
console.log(heap.heap);
