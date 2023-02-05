function find(parent, x) {
  if (parent[x] === x) return x;

  return (parent[x] = find(parent, parent[x]));
}

function compare(parent, a, b) {
  a = find(parent, a);
  b = find(parent, b);

  return a === b;
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
  const sortedCost = costs.sort((a, b) => a[2] - b[2]);
  const parent = Array.from({ length: n }, (_, i) => i);

  for (const [src, dest, cost] of sortedCost) {
    if (!compare(parent, src, dest)) {
      answer += cost;
      union(parent, src, dest);
    }
  }

  return answer;
}
