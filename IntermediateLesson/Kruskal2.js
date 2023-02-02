function compare(parent, a, b) {
  a = find(parent, a);
  b = find(parent, b);

  return a === b;
}

function find(parent, x) {
  if (parent[x] === x) return x;

  return (parent[x] = find(parent, parent[x]));
}

function union(parent, a, b) {
  a = find(parent, a);
  b = find(parent, b);

  if (a < b) {
    parent[b] = a;
  } else {
    parent[a] = b;
  }
}

function solution(n, costs) {
  let answer = 0;
  const sortedCosts = costs.sort((a, b) => a[2] - b[2]);
  const parent = Array.from({ length: n }, (_, i) => i);

  for (const [a, b, cost] of sortedCosts) {
    if (!compare(parent, a, b)) {
      answer += cost;
      union(parent, a, b);
    }
  }

  console.log(parent);

  return answer;
}

solution(7, [
  [0, 3, 1],
  [0, 1, 2],
  [1, 2, 3],
  [1, 5, 3],
  [0, 2, 4],
  [5, 6, 5],
  [3, 4, 6],
  [4, 5, 7],
  [2, 5, 11],
]);
