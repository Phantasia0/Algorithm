//N이 백만 이상이면, logN NlogN
//큰 값이 나오면 이전 중 더 작은 값은 전부 다 삭제한다!
//즉, 스택의 바닥에서부터 큰 수 부터 작은 수로 나열이 되어야한다

function solution(number, k) {
  const stack = [];
  let count = 0;

  for (let num of number) {
    while (true) {
      if (num > stack[stack.length - 1] && count < k) {
        stack.pop();
        count += 1;
      } else {
        break;
      }

      if (count === k) break;
    }

    stack.push(num);
  }

  while (count < k) {
    stack.pop();
    count += 1;
  }

  return stack.join("");
}

//Success

solution("4177252841", 4);
