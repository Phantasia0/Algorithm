function solution(n, times) {
  let left = 1;
  let right = Math.max(...times) * n;

  while (left <= right) {
    const mid = Math.floor((left + right) / 2);
    const testedNumber = times.reduce(
      (a, time) => a + Math.floor(mid / time),
      0
    );
    if (testedNumber < n) {
      left = mid + 1;
    } else {
      right = mid - 1;
    }
  }

  console.log(left);
  return left;
}

solution(10, [7, 10, 5, 3, 4, 6, 43, 43, 5, 2, 5, 6, 3]);

//Correct

//파라메틱 서치의 중요성!!
//최적화의 문제를 결정화의 문제로
//여기서는 left :최선 시간, right: 최악 시간 (제일 심사시간이 긴 한 심사위원에게 모두가 받을 경우)
//정렬은 시간이므로 자동으로 left -> right /  +1 간격으로 나열됨
//mid는 중간 시간
//각자의 심사시간에 따라 주어진 mid 시간동안 심사할 수 있는 인원 수 K
//K1 + K2 + K3 + K4 + ... + Kn = N
//즉 mid 시간동안 N 명 심사 가능
//그런데 N 명이 주어진 n 보다 작을 경우, 시간이 부족하다를 의미
//그런데 N 명이 주어진 n 보다 클 경우, 시간이 남는다를 의미
//이를 통해 이진 탐색

//즉, 나열은 최선의 시간 ~ 최악의 시간 ( 이 사이에 정답 있음)
//시간이 남냐, 부족하냐 ( 이게 기준)
// 그 기준은 N n 과의 관계로 판단
