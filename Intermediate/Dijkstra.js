//마을 개수 N
//도로 정보 road
//음식 배달 가능한 시간 K
//1번마을이 음식 주문을 받을 수 있는 마을의 개수

//최단 거리가 K 이하인 마을 갯수
//가중치가 있는 그래프에서 최단거리 => 다익스트라 알고리즘
//그래프의 정보를 매개변수로 부터 구해야함
//마을 개수: 1~N , road: 간선 정보

class MinHeap {
  constructor() {
    this.heap = [null];
  }

  push(value) {
    this.heap.push(value);
    let currentIndex = this.heap.length - 1;
    let parentIndex = Math.floor(currentIndex / 2);
    while (parentIndex !== 0 && this.heap[parentIndex][1] > value[1]) {
      const temp = this.heap[currentIndex];
      this.heap[currentIndex] = this.heap[parentIndex];
      this.heap[parentIndex] = temp;

      currentIndex = parentIndex;
      parentIndex = Math.floor(currentIndex / 2);
    }
  }

  pop() {
    if (this.heap.lengh === 1) {
      return;
    }

    if (this.heap.length === 2) {
      return this.heap.pop();
    }

    const returnValue = this.heap[1];

    this.heap[1] = this.heap.pop();
    let currentIndex = 1;
    let leftIndex = 2;
    let rightIndex = 3;

    if (
      this.heap[leftIndex] === undefined ||
      this.heap[rightIndex] === undefined
    ) {
      return returnValue;
    }

    while (
      this.heap[currentIndex][1] > this.heap[leftIndex][1] ||
      this.heap[currentIndex][1] > this.heap[rightIndex][1]
    ) {
      {
        if (this.heap[rightIndex][1] < this.heap[leftIndex][1]) {
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
      }
      rightIndex = 2 * currentIndex + 1;
      leftIndex = 2 * currentIndex;

      if (this.heap[leftIndex] === undefined) {
        const temp = this.heap[currentIndex];
        this.heap[currentIndex] = this.heap[rightIndex];
        this.heap[rightIndex] = temp;

        currentIndex = rightIndex;
      } else if (this.heap[rightIndex] === undefined) {
        const temp = this.heap[currentIndex];
        this.heap[currentIndex] = this.heap[leftIndex];
        this.heap[leftIndex] = temp;

        currentIndex = leftIndex;
      }
    }

    return returnValue;
  }
}

function solution(N, road, K) {
  if (N < 2) return 0;
  const graph = Array.from(Array(N + 1), () => []);

  for (const [src, dest, cost] of road) {
    graph[src].push([dest, cost]);
    graph[dest].push([src, cost]);
  }

  const distance = Array(N + 1).fill(3000);
  distance[1] = 0;

  const heap = new MinHeap();
  heap.push([1, distance[1]]);

  while (heap.heap.length > 1) {
    //console.log(heap.heap);
    const [src, dist] = heap.pop();
    for (const [dest, cost] of graph[src]) {
      if (distance[dest] > distance[src] + cost) {
        distance[dest] = distance[src] + cost;
        heap.push([dest, distance[dest]]);
      }
    }
  }
  //console.log(distance);
  //console.log(distance.filter((time) => time <= K).length);

  return distance.filter((time) => time <= K).length;
}

// solution(
//   6,
//   [
//     [1, 2, 1],
//     [1, 3, 2],
//     [2, 3, 2],
//     [3, 4, 3],
//     [3, 5, 2],
//     [3, 5, 3],
//     [5, 6, 1],
//   ],
//   4
// );
