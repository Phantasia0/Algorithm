function solution(s) {
  if (s.length < 1) return false;
  if (s.length % 2 !== 0) return false;

  const stack = [...s];

  const strLast = stack[stack.length - 1];
  const strFirst = stack[0];

  if (strLast !== ")" && strFirst !== "(") return false;

  let result;
  while (stack.length > 0) {
    result = remove(stack);
    if (!result) break;
  }

  if (stack.length === 0) return true;

  return false;
}

function remove(stack) {
  const num = stack.length;

  for (let i = stack.length - 1; i >= 0; i--) {
    if (stack[i] === ")") {
      if (stack[i - 1] === "(") {
        stack.splice(i - 1, 2);
        i -= 2;
      }
    }
  }

  if (stack.length === num) return false;
  return true;
}
