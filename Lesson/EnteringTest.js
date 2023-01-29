//입출력만 봤을때 , 무조건 로그시간 = 이진탐색이다
// times 는 십만 이하기 때문에 선형로그시간으로 충분히 가능

//우리는 특정 값을 찾는 것이 아닙니다.
//우리가 찾는 것은 최소 몇 분에 모든  심사가 끝나는가?
// ㄴ 결정문제 = 이진 탐색 = 파라메트릭 서치(Parametric Search)

//최소 1분에서 10억분 * n 사이에 답이 있다는건 확실해
//면접관들이 몇명을 처리하는가?
//처리 가능한 입국자가 n 보다 작다면, 분을 올려야되고, 입국자가 n 보다 크다면 분을 낮춰야해요
//면접관이 시간대비 몇 명을 처리할 수 있는가?
// 시간 / 심사시간 = 심사관 당 처리 가능한 입국자 수

function solution(n, times) {
  const sortedTimes = times.sort((a, b) => a - b); //O(nlogn)
  let left = 1;
  let right = sortedTimes[sortedTimes.length - 1] * n;

  while (left <= right) {
    const mid = Math.floor((left + right) / 2);
    //sum(시간 / 심사시간)
    const sum = times.reduce((acc, time) => acc + Math.floor(mid / time), 0);

    if (sum < n) {
      left = mid + 1;
    } else {
      right = mid - 1;
    }
  }

  return left;
}
