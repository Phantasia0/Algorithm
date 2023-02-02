function find(dest, array) {
  let parent = array[dest].get(dest);
  if (parent === dest) return parent;

  let finalParent = find(parent, array);
  return finalParent;
}

function isCycle(src, dest, array) {
  let finalParentSrc = find(src, array);
  let finalParentDest = find(dest, array);

  if (finalParentDest === finalParentSrc) {
    return true;
  }

  return false;
}

function union(src, dest, array) {
  src = find(src, array);
  dest = find(dest, array);

  if (src < dest) {
    array[dest].set(dest, src);
  } else {
    array[src].set(src, dest);
  }
}

function solution(n, costs) {
  const Degrees = [];
  for (const [src, dest, cost] of costs) {
    if (cost > 0) {
      Degrees.push({ src, dest, cost });
    }
  }

  const DisjointSet = Array.from({ length: n }, (value, i) => {
    value = new Map();
    value.set(i, i);
    return value;
  });

  Degrees.sort((a, b) => a.cost - b.cost);

  const resultCost = [];

  for (const { src, dest, cost } of Degrees) {
    if (!isCycle(src, dest, DisjointSet)) {
      resultCost.push(cost);
      union(src, dest, DisjointSet);
    }
  }

  console.log(Degrees);
  console.log(DisjointSet);
  console.log(resultCost);
  return resultCost.reduce((acc, cur) => acc + cur, 0);
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

//이렇게 고치면 맞음
//UNION 부분 주목
