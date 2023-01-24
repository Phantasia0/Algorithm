function solution(s) {
  const stack = [];
  for (i of s) {
    if (i === "(") {
      stack.push(i);
    } else {
      if (stack.length === 0) {
        return false;
      }
      stack.pop();
    }
  }
  return stack.length === 0;
}
