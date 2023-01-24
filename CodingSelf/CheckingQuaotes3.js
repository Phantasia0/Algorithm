function solution(s) {
  if (s.length < 1) return false;
  if (s.length % 2 !== 0) return false;
  const stack = [...s];

  let numR = 0;
  let numL = 0;
  const strLast = stack[stack.length - 1];
  const strFirst = stack[0];
  if (strLast !== ")" || strFirst !== "(") return false;
  if (stack.length > 4) {
    let end = stack.pop();
    let charOne = stack.pop();
    let charTwo = stack.pop();
    if (charOne === "(" && charTwo === "(") return false;
    stack.push(charTwo);
    stack.push(charOne);
    stack.push(end);
  }
  while (stack.length > 0) {
    let char = stack.pop();

    if (char === ")") {
      numR += 1;
    } else {
      numL += 1;
    }
  }
  if (numR !== numL) return false;
  return true;
}
