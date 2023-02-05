function solution(gems) {
  let answer = [1, gems.length];
  const total = new Set([...gems]).size;
  const gemsMap = new Map();
  let head = 0;
  let tail = 0;
  gemsMap.set(gems[0], 1);

  while (head < gems.length && tail < gems.length) {
    if (gemsMap.size < total) {
      tail++;
      gemsMap.set(gems[tail], 1 + (gemsMap.get(gems[tail]) || 0));
    } else if (gemsMap.size === total) {
      if (answer[1] - answer[0] > tail - head) {
        answer = [head + 1, tail + 1];
      }

      gemsMap.set(gems[head], gemsMap.get(gems[head]) - 1);
      if (gemsMap.get(gems[head]) === 0) {
        gemsMap.delete(gems[head]);
      }
      head++;
    }
  }

  return answer;
}

solution(["DIA", "RUBY", "RUBY", "DIA", "DIA", "EMERALD", "SAPPHIRE", "DIA"]);
