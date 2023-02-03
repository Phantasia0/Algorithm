function solution(strs, t) {
  const dp = Array.from({ length: t.length + 1 }, () => 0);

  const strsSet = new Set(strs);

  for (let i = 1; i < t.length + 1; i++) {
    dp[i] = Infinity;

    for (let j = 1; j < Math.min(i + 1, 6); j++) {
      if (strsSet.has(t.slice(i - j, i))) {
        dp[i] = Math.min(dp[i], dp[i - j] + 1);
      }
    }
  }

  if (dp[dp.length - 1] === Infinity) {
    return -1;
  }

  return dp[dp.length - 1];
}
