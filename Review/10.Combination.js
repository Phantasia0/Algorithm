//서로 다른 N 개 중 r 개 선택, 순서 상관 O

function permutations(arr, n) {
  if (n === 1) return arr.map((v) => [v]);
  let result = [];

  arr.forEach((fixed, idx, arr) => {
    const rest = arr.filter((_, index) => index != idx);

    const perms = permutations(rest, n - 1);
    const combine = perms.map((v) => [fixed, ...v]);
    result.push(...combine);
  });

  return result;
}

//서로 다른 N 개 중 r 개 선택, 순서 상관 X
function combinations(arr, n) {
  if (n === 1) return arr.map((v) => [v]);
  const result = [];

  arr.forEach((fixed, idx, arr) => {
    const rest = arr.slice(idx + 1);

    const combins = combinations((rest, n - 1));
    const combine = combins.map((v) => [fixed, ...v]);
    result.push(...combine);
  });

  return result;
}
