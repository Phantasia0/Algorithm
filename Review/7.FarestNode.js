class Queue {
  constructor() {
    this.queue = [];
    this.front = 0;
    this.rear = 0;
  }

  push(data) {
    this.queue[this.rear++] = data;
  }

  pop() {
    const temp = this.queue[this.front];
    delete this.queue[this.front];
    this.front++;
    return temp;
  }

  size() {
    return this.rear - this.front;
  }
}

function solution(n, edge) {
  const graph = Array.from({ length: n + 1 }, () => []);

  for (const [src, dest] of edge) {
    graph[src].push(dest);
    graph[dest].push(src);
  }

  const distance = Array(n + 1).fill(0);
  distance[1] = 1;

  const queue = new Queue();
  queue.push(1);
  while (queue.size() > 0) {
    const src = queue.pop();
    for (let dest of graph[src]) {
      if (distance[dest] === 0) {
        queue.push(dest);
        distance[dest] = distance[src] + 1;
      }
    }
  }

  return distance.sort((a, b) => b - a).filter((v) => v === distance[0]).length;
}

solution(6, [
  [3, 6],
  [4, 3],
  [3, 2],
  [1, 3],
  [1, 2],
  [2, 4],
  [5, 2],
]);
