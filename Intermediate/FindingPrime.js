function solution(n) {
  const primes = [false, false, ...Array(n - 1).fill(true)];

  for (let i = 2; i * i <= n; i++) {
    if (primes[i]) {
      for (let j = i * 2; j <= n; j += i) {
        primes[j] = false;
      }
    }
  }

  return primes.filter(Boolean).length;
}
