function solution(n, times) {
  let start = 1;
  let end = Math.max(...times) * n;
  let total = 0;

  while (start <= end) {
    const middle = Math.floor(start + (end - start) / 2);

    for (let i = 0; i < times.length; i++) {
      total += Math.floor(middle / times[i]);
    }

    if (total < n) {
      start = middle + 1;
    } else {
      end = middle - 1;
    }
    total = 0;
  }

  return start;
}

solution(6, [7, 10]);
