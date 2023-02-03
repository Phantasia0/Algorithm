function makeArray(t) {
  const array = Array.from({ length: t.length }, () => []);

  for (let i = 0; i < t.length; i++) {
    array[0].push(t[i]);
  }

  for (let i = 1; i < t.length; i++) {
    for (let j = 0; j < t.length - i; j++) {
      array[i][j] = array[i - 1][j] + array[0][i + j];
    }
  }

  return array;
}

function search(arr, t, row) {
  // row => i = 1~ max = t.length
  const max = t.length;
  const array = makeArray(t);
  for (let j = 0; j < row; j++) {
    for (let k = 0; k < arr.length; k++) {
      if (array[max - row][j] === arr[k]) {
        return array[max - row][j];
      }
    }
  }
  return "";
}

function check(strs, t, count, row) {
  let part = "";
  if (t === "") return true;

  part = search(strs, t, row);
  if (part === "" && row <= t.length) {
    row++;
  }

  const temp = t;
  t = t.replace(part, "");
  if (temp !== t) {
    count++;
  }

  check(strs, t, count, row);
}

function solution(strs, t) {
  const array = makeArray(t);
  const max = t.length;
  let answer = 0;
  if (check(strs, t, answer, 1, array, max)) {
    return answer;
  } else {
    return -1;
  }
}

solution(["app", "ap", "p", "l", "e", "ple", "pp"], "apple");
