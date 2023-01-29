function binarySearch(array, findValue) {
  let left = 0;
  let right = array.length - 1;
  let mid = Math.floor((left + right) / 2);
  while (left < right) {
    if (array[mid].remainTime === findValue) {
      return mid;
    }

    if (array[mid].remainTime < findValue) {
      left = mid + 1;
    } else {
      right = mid - 1;
    }

    mid = Math.floor((left + right) / 2);
  }

  return -1;
}

class MinHeap {
  constructor() {
    this.heap = [null];
  }

  push(value) {
    this.heap.push(value);
    let currentIndex = this.heap.length - 1;
    let parentIndex = Math.floor(currentIndex / 2);
    while (
      parentIndex !== 0 &&
      this.heap[parentIndex].testTime + this.heap[parentIndex].remainTime >
        value.testTime + value.remainTime
    ) {
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

function solution(n, times) {
  const heap = new MinHeap();
  let timeCount = 0;

  const testers = times.map((value) => ({ testTime: value, remainTime: 0 }));
  //console.log(tester);

  for (let i = 0; i < testers.length; i++) {
    heap.push(testers[i]);
  }
  //console.log(heap.heap);

  while (n > 0) {
    const tester = heap.pop();
    if (tester.remainTime != 0) {
      heap.push(tester);
    } else {
      tester.remainTime = tester.testTime;
      const temp = tester.remainTime;
      heap.push(tester);
      n = n - 1;
      //console.log("한명씩 줄음");
      if (n !== 0) {
        continue;
      }
      if (n === 0) {
        timeCount += temp;
      }
    }

    if (binarySearch(heap.heap, 0) !== -1) {
    }
    if (n !== 0) {
      timeCount += 1;
    }
    heap.heap.forEach((tester, index) => {
      if (index > 0) {
        if (tester.remainTime > 0) {
          tester.remainTime -= 1;
        }
      }
    });

    //console.log(heap.heap);
  }

  // console.log(heap.heap);
  console.log(timeCount);
  return timeCount;
}

solution(10, [7, 10, 5, 3, 4, 6, 43, 43, 5, 2, 5, 6, 3]);
//FAILED
