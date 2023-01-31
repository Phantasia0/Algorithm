//순열과 조합
//코딩테스트에 자주 사용되는 기능
//자바스크립트에서는 built-in 함수가 없기에 직접 구현해서 사용해야한다
//재귀함수를 이용하면 쉽게 만들 수 있다

//순열의 시간복잡도
//O(n!)
//순열 : 서로 다른 n개 중 r개 선택. 순서 상관있음

function permutations(arr, n) {
  if (n === 1) return arr.map((v) => [v]);
  let result = [];

  arr.forEach((fixed, idx, arr) => {
    const rest = arr.filter((_, index) => index != idx);

    const perms = permutations(rest, n - 1);
    const combine = perms.map((v) => [fixed, ...v]);
    result.push(...combine);
  });

  console.log(result);
  return result;
}

permutations([1, 2, 3, 4, 5, 6], 2);

//조합의 시간복잡도
//O(2^n)
//조합 : 서로 다른 n개 중 r개 선택. 순서 상관없음

function combinations(arr, n) {
  if (n === 1) return arr.map((v) => [v]);
  let result = [];

  arr.forEach((fixed, idx, arr) => {
    const rest = arr.slice(idx + 1);

    const combis = combinations(rest, n - 1);
    const combine = combis.map((v) => [fixed, ...v]);
    result.push(...combine);
  });

  return result;
}
