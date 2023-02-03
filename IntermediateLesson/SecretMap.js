function solution(n, arr1, arr2) {
  let answer = [];
  for (let i = 0; i < n; i++) {
    const result = arr1[i] | arr2[i];
    const bit = result.toString(2);
    const blankString = " ".repeat(n - bit.length);
    const bitString = bit.replace(/1/gi, "#").replace(/0/gi, " ");
    answer.push(blankString + bitString);
  }

  return answer;
}
