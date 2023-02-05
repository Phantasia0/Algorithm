function solution(number, k) {
  const stack = [];

  stack.push(number[0]);

  for (let i = 1; i < number.length; i++) {
    if (number[i] <= stack[stack.length - 1] || k === 0) {
      stack.push(number[i]);
    } else if (number[i] > stack[stack.length - 1] && k > 0) {
      while (stack.length > 0 && k > 0) {
        const num = stack.pop();
        k--;

        if (num >= number[i]) {
          stack.push(num);
          k++;
          break;
        }
      }
      stack.push(number[i]);
    }
  }

  const result = stack.slice(0, stack.length - k);
  return result.join("");
}

solution("4177252841", 4);
