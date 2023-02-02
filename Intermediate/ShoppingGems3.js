function solution(gems) {
  const count = new Set([...gems]).size;

  if (count === 1) return [1, 1];
  const result = [];

  let head = 0;
  let tail = 0;

  const series = new Map();

  series.set(gems[0], 1);
  //console.log(series);

  while (tail < gems.length && head < gems.length) {
    //console.log(series);

    if (series.size < count) {
      tail++;
      series.set(gems[tail], (series.get(gems[tail]) || 0) + 1);
    } else {
      series.set(gems[head], series.get(gems[head]) - 1);

      if (series.get(gems[head]) === 0) {
        series.delete(gems[head]);
      }

      head++;
    }

    if (series.size === count) {
      result.push([head, tail]);
    }
  }

  result.sort((a, b) => a[1] - a[0] - (b[1] - b[0]));
  //sconsole.log(result);
  //console.log(result[0].map((v) => v + 1));
  return result[0].map((v) => v + 1);
}

solution(["XYZ", "XYZ", "XYZ"]);
