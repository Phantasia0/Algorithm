function solution(n) {
  const primes = Array(n + 1).fill(true);
  primes[0] = false;
  primes[1] = false;

  for (let i = 2; i * i <= n; i++) {
    if (primes[i] === true) {
      for (let j = 2 * i; j <= n; j += i) {
        primes[j] = false;
      }
    }
  }

  return primes
    .map((v, i) => [v, i])
    .filter((v) => v[0] === true)
    .flatMap((v) => v[1]).length;
}

solution(10);
