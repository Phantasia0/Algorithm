function solution(n, edge) {
  const graph = Array.from(Array(n + 1), () => []);

  for (const [src, dest] of edge) {
    graph[src].push(dest);
    graph[dest].push(src);
  }

  const distance = Array(n + 1).fill(0);
  distance[1] = 1;

  const stack = [];
  stack.push(1);
  while (stack.length > 0) {
    const src = stack.pop();
    console.log("Node:" + src);
    for (const dest of graph[src]) {
      if (distance[dest] === 0) {
        stack.push(dest);
        distance[dest] = distance[src] + 1;
      }
    }
  }

  const max = Math.max(...distance);
  console.log(distance);
  return distance.filter((item) => item === max).length;
}

solution(6, [
  [3, 6],
  [4, 5],
  [3, 2],
  [1, 3],
  [1, 2],
  [2, 4],
  [5, 2],
]);
