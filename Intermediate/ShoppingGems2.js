function check(series, arr) {
  for (let i = 0; i < arr.length; i++) {
    if (series.get(arr[i]) < 1) {
      return false;
    }
  }
  return true;
}

function solution(gems) {
  const countSet = new Set([...gems]);
  const count = countSet.size;
  const arr = [...countSet.values()];
  const result = [];

  let head = 0;
  let tail = 0;
  let match = 1;

  const series = new Map();
  for (let i = 0; i < arr.length; i++) {
    series.set(arr[i], 0);
  }

  series.set(gems[0], 1);
  //console.log(arr);
  //console.log(series);

  while (tail < gems.length && head < gems.length) {
    let isFilled = check(series, arr);
    //console.log(series);

    if (!isFilled) {
      tail++;
      series.set(gems[tail], series.get(gems[tail]) + 1);
    } else {
      series.set(gems[head], series.get(gems[head]) - 1);
      head++;
    }

    if (isFilled) {
      result.push([head - 1, tail]);
    }
  }

  result.sort((a, b) => a[1] - a[0] - (b[1] - b[0]));
  console.log(result[0].map((v) => v + 1));
  return result[0].map((v) => v + 1);
}

solution(["ZZZ", "YYY", "NNNN", "YYY", "BBB"]);
