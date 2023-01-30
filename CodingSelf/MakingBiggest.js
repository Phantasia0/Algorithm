//문자열에서 k개 만큼 제거
//만들수 있는 조합 개수
//가장 큰수
//

function solution(number, k) {
  const list = [...number];
  let numbers = [];
  let indexs = [];

  ///

  for (let j = 1; j < list.length; j++) {
    if (list[0] < list[j]) {
      numbers.push(j);
    }
  }
  if (numbers[0] < k) {
    k -= numbers[0];
    for (let i = 0; i < numbers[0]; i++) {
      list[i] = 0;
    }
    indexs.push(numbers[0]);
  }
  ///
  console.log(k);
  console.log(numbers);
  console.log(list);

  ///
  const num = numbers.shift();
  numbers = [];
  for (let j = num + 1; j < list.length; j++) {
    if (list[num] < list[j]) {
      numbers.push(j - num);
    }
  }
  if (numbers[0] < k) {
    k -= numbers[0];
    for (let i = indexs[0]; i < indexs[0] + numbers[0]; i++) {
      list[i] = 0;
    }
    indexs.unshift(numbers[0]);
  }
  ///
  console.log(k);
  console.log(numbers);
  console.log(list);

  ///

  //console.log(numbers);
}

//FAILED

solution("4177252841", 4);
