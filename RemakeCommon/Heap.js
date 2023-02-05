//힙
//우선 순위 큐
//우선 순위가 높은 요소가 먼저 나가는 큐
//우선 순위 큐는 자료구조가 아닌 개념이다
//이진 트리 형태를 가지며, 우선 순위가 높은 요소가 먼저 나가기 위해 요소가 삽입,삭제 될때 바로 정렬된다

//힙의 특징
//우선 순위가 높은 요소가 먼저 나가는 특징을 가짐
//루트가 가장 큰 값이 되는 최대 힙, 루트가 가장 작은 값이 되는 최소 힙이 있다
//자바스크립트에서는 직접 구현해서 사용해야 한다

//힙 요소 추가 알고리즘
//요소가 처음 추가 될때는 트리의 가장 마지막 정점에 위치
//추가 후 부모 정점보다 우선순위가 높다면, 부모 정점과 순서를 바꾼다
//O(log n)

//힙 요소 제거 알고리즘
//요소제거는 루트 정점만 가능하다
//루트 정점이 제거된 후 가장 마지막 정점이 루트에 위치한다
//루트의 두 자식 정점 중 더 우선 순위가 높은 정점과 바꾼다
//두 자식 정점이 우선순위가 낮을 때까지 반복
//O(log n)

class MaxHeap {
  constructor() {
    this.heap = [null];
  }

  push(value) {
    this.heap.push(value);
    let currentIndex = this.heap.length - 1;
    let parentIndex = Math.floor(currentIndex / 2);
    while (parentIndex !== 0 && this.heap[parentIndex] < value) {
      const temp = this.heap[parentIndex];
      this.heap[parentIndex] = value;
      this.heap[currentIndex] = temp;

      currentIndex = parentIndex;
      parentIndex = Math.floor(currentIndex / 2);
    }
  }

  pop() {
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
        const temp = this.heap[rightIndex];
        this.heap[rightIndex] = this.heap[currentIndex];
        this.heap[currentIndex] = temp;

        currentIndex = rightIndex;
      } else {
        const temp = this.heap[leftIndex];
        this.heap[leftIndex] = this.heap[currentIndex];
        this.heap[currentIndex] = temp;

        currentIndex = leftIndex;
      }
      leftIndex = 2 * currentIndex;
      rightIndex = 2 * currentIndex + 1;
    }

    return returnValue;
  }
}

class MinHeap {
  constructor() {
    this.heap = [null];
  }

  push(value) {
    this.heap.push(value);
    let currentIndex = this.heap.length - 1;
    let parentIndex = Math.floor(currentIndex / 2);
    while (parentIndex !== 0 && this.heap[parentIndex] > value) {
      const temp = this.heap[parentIndex];
      this.heap[parentIndex] = this.heap[currentIndex];
      this.heap[currentIndex] = temp;

      currentIndex = parentIndex;
      parentIndex = Math.floor(currentIndex / 2);
    }
  }

  pop() {
    if (this.heap.length === 2) {
      return this.heap.pop();
    }

    const returnValue = this.heap[1];
    this.heap[1] = this.heap.pop();
    let currentIndex = 1;
    let leftIndex = 2;
    let rightIndex = 3;

    while (
      this.heap[currentIndex] > this.heap[leftIndex] ||
      this.heap[currentIndex] > this.heap[rightIndex]
    ) {
      if (this.heap[leftIndex] > this.heap[rightIndex]) {
        const temp = this.heap[rightIndex];
        this.heap[rightIndex] = this.heap[currentIndex];
        this.heap[currentIndex] = temp;

        currentIndex = rightIndex;
      } else {
        const temp = this.heap[leftIndex];
        this.heap[leftIndex] = this.heap[currentIndex];
        this.heap[currentIndex] = temp;

        currentIndex = leftIndex;
      }
      leftIndex = 2 * currentIndex;
      rightIndex = 2 * currentIndex + 1;
    }

    return returnValue;
  }
}

class MinHeapVersion2 {
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
    while (parentIndex !== 0 && this.heap[parentIndex] > value) {
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
        this.heap[currentIndex] > this.heap[leftIndex]) ||
      (this.heap[rightIndex] && this.heap[currentIndex] > this.heap[rightIndex])
    ) {
      if (this.heap[rightIndex] === undefined) {
        this._swap(leftIndex, currentIndex);
        currentIndex = leftIndex;
      } else if (this.heap[rightIndex] < this.heap[leftIndex]) {
        this._swap(rightIndex, currentIndex);
        currentIndex = rightIndex;
      } else if (this.heap[rightIndex] >= this.heap[leftIndex]) {
        this._swap(leftIndex, currentIndex);
        currentIndex = leftIndex;
      }

      leftIndex = currentIndex * 2;
      rightIndex = currentIndex * 2 + 1;
    }
  }
}
