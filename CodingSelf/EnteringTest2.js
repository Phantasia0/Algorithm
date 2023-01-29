function solution(n, times) {
  let left = 1;
  let right = Math.max(...times) * n;

  while (left <= right) {
    const mid = Math.floor((left + right) / 2);
    const testedNumber = times.reduce(
      (a, time) => a + Math.floor(mid / time),
      0
    );
    if (testedNumber < n) {
      left = mid + 1;
    } else {
      right = mid - 1;
    }
  }

  console.log(left);
  return left;
}

solution(10, [7, 10, 5, 3, 4, 6, 43, 43, 5, 2, 5, 6, 3]);

//Correct
