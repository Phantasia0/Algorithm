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
  const heap = new MaxHeap();
  const reduceList = [];

  if (no >= works.reduce((a, b) => a + b)) return 0;
  if (works.length === 1) return (works[0] - no) * (works[0] - no);

  const targetNum = Math.round(
    (works.reduce((a, b) => a + b) - no) / works.length
  );

  for (let value of works) {
    heap.push(value);
  }
  console.log(works.sort((a, b) => b - a));

  while (true) {
    const max = heap.pop();
    reduceList.push(max - targetNum);
    if (reduceList.reduce((a, b) => a + b) < no) {
      if (reduceList.length === works.length) {
        let done = false;
        while (!done) {
          for (let i = 0; i < reduceList.length; i++) {
            reduceList[i] += 1;
            if (reduceList.reduce((a, b) => a + b) === no) {
              done = true;
              break;
            }
          }
        }
      }
    }

    if (reduceList.reduce((a, b) => a + b) === no) {
      break;
    }

    if (reduceList.reduce((a, b) => a + b) > no) {
      reduceList.pop();
      reduceList.push(no - reduceList.reduce((a, b) => a + b));
      break;
    }
  }

  const sortedWork = works.sort((a, b) => b - a);
  for (let i = 0; i < sortedWork.length; i++) {
    if (i < reduceList.length) {
      sortedWork[i] = sortedWork[i] - reduceList[i];
    } else {
      break;
    }
  }

  console.log(targetNum);
  console.log(reduceList);
  console.log(sortedWork);

  const cost = sortedWork.map((value) => value * value).reduce((a, b) => a + b);
  console.log(cost);

  return cost;
}

solution(13, [4, 3, 3, 6, 8, 4, 3]);

//This one Failed....
//보통은 맞으나, 반례 찾아야함.
