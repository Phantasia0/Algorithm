function solution(n) {
  const stack = Array.from(Array(n), () => Array(5).fill(0));

  for (let k = 0; k < n; k++) {
    if (k === 1) break;

    for (let i = 1; i < n; i++) {
      stack[k][i] = "Q";
      for (let j = i + 1; j < n; j++) {
        stack[k][j] = 1;
        stack[j][k] = 1;
      }
      if (i === 1) break;
    }

    for (let i = k; i < n; i++) {
      if (k + 1 < n && i + 1 < n) {
        stack[i + 1][i + 1] = 1;
      }

      if (k - 1 >= 0 && i - 1 >= 0) {
        stack[i - 1][i - 1] = 1;
      }
    }
  }

  console.log(stack);
}

solution(5);
