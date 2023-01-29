//배열
//연관된 데이터를 연속적인 형태로 구성된 구조를 가진다
//배열에 포함된 원소는 순서대로 번호(index) 가 붙는다
//자바스크립트에서는 동적으로 크기가 증감되도록 만들어져 있다
//원하는 원소의 index를 알고 있다면 O(1)로 원소를 찾을 수 있다
//배열 중간 요소 추가, 삭제는 O(n)

const arr = [];
const arr2 = [1, 2, 3, 4];
const arr3 = Array(10).fill(0);
const arr4 = Array.from({ length: 100 }, (_, i) => i);
const arr5 = Array.from(Array(5), () => []);
const arr6 = Array.from(Array(5), () => Array(5).fill(false));
const arr7 = Array.from("foo");
const arr8 = Array.from([1, 2, 3], (x) => x + x);

arr.push(4);
arr.push(5, 6, 7, 8, 9);
arr.splice(3, 0, 128); //[3]값부터 0개 제거 128 추가
arr.splice(3, 1); //[3]값부터 1개 제거
arr.length; //길이
arr.pop(); //배열 끝에서부터 항목 제거
arr.forEach(function (item, index, array) {
  console.log(item, index);
});
arr.unshift(3); //앞에 추가
arr.shift(); // 제일 앞에 요소 제거
arr.at(-1); // 제일 뒤에 요소 반환 arr[arr.length -1] 과 같다
const arr9 = arr.concat(arr3); //배열 붙이기
arr.every((value) => value < 40); //모든 원소가 콜백함수를 통과하면 true else false
const arr10 = arr.filter((value) => value > 4); //콜백함수를 통과하는 모든 요소를 새로운 배열로 반환
arr.find((value) => value > 7); //콜백함수를 만족하는 첫번째 요소의 값을 반환
arr.findIndex((value) => value > 7); //콜백함수를 만족하는 첫번째 요소의 index을 반환
arr.findLast((value) => value > 7); //콜백함수를 만족하는 마지막 요소의 값을 반환
arr.findLastIndex((value) => value > 7); //콜백함수를 만족하는 마지막 요소의 index을 반환
arr.flat(); //[1,2,[3,4]] -> [1,2,3,4] , [1,2,[[3,4]]] -> [1,2,[3,4]]
arr.flat(2); // [1,2,[[3,4]]] -> [1,2,3,4]

const arr11 = ["it's Sunny in", "", "California"];
arr11.map((x) => x.split(" "));
// [["it's","Sunny","in"],[""],["California"]]
arr11.flatMap((x) => x.split(" "));
// ["it's","Sunny","in", "", "California"]
arr11.indexOf("in"); // 지정된 요소를 찾을 수 있는 첫번째 index 반환, 없을경우 -1 반환
const string = arr11.join("-"); //모든 요소를 연결하여 새 문자열을 만들고 반환한다
const arr12 = arr.map((x) => x * 2); //배열의 모든 요소에서 제공된 함수를 호출하여 새 배열을 만듬
const sum = arr.reduce((a, b) => a + b * b); // a는 누적값(or arr[0]) b = 현재 요소값, 순서대로 실행하고 계산값 반환
arr.reverse(); // 원본 배열에 대한 참조가 반전되서 반환 ( 원본 배열이 바뀐다 )
const arr13 = arr.slice(0, 2); // arr13 에는 arr[0] arr[1] 두개가 들어있게 된다 . 새 배열로 반환
arr.toString(); // [1,2,3,4] 일 경우 "1,2,3,4"가 된다

const copy = [...arr]; //배열 얕은 복사 -> 원본 배열 바뀌어도 원시값 그대로 복사상태 유지
const copy2 = Array.from(arr); //얕은 복사이므로 중첩 배열이나 객체 요소일 경우에는 원본 배열 요소를 참조하게된다
const copy3 = arr.slice();

const deepCopy = JSON.parse(JSON.stringify(arr)); // 깊은복사

//정렬
//이런식으로 비교함수 작성 후
function compareFn(a, b) {
  if (a < b) {
    return -1;
  }
  if (a > b) {
    return 1;
  }
  // a must be equal to b
  return 0;
}
//양수 리턴이면 ba 순, 순서 바꿈 // 음수 리턴이면 , ab 순 // 0 리턴이면 그대로
arr.sort((a, b) => a - b); //오름차순 //1,2,3,4
arr.sort((a, b) => b - a); //내림차순 //4,3,2,1
//이중 조건
songArray.sort((prev, cur) => {
  if (prev[2] === cur[2]) {
    return prev[1] - cur[1] > 0 ? 1 : -1;
  }
  return cur[2] - prev[2];
});

//객체에서의 정렬 사용
const items = [
  { name: "Edward", value: 21 },
  { name: "Sharpe", value: 37 },
  { name: "And", value: 45 },
  { name: "The", value: -12 },
  { name: "Magnetic", value: 13 },
  { name: "Zeros", value: 37 },
];

// sort by value
items.sort((a, b) => a.value - b.value);

// sort by name
items.sort((a, b) => {
  const nameA = a.name.toUpperCase(); // ignore upper and lowercase
  const nameB = b.name.toUpperCase(); // ignore upper and lowercase
  if (nameA < nameB) {
    return -1;
  }
  if (nameA > nameB) {
    return 1;
  }

  // names must be equal
  return 0;
});

//map과 함께 사용
// the array to be sorted
const data = ["delta", "alpha", "charlie", "bravo"];

// temporary array holds objects with position and sort-value
const mapped = data.map((v, i) => {
  return { i, value: someSlowOperation(v) };
});

// sorting the mapped array containing the reduced values
mapped.sort((a, b) => {
  if (a.value > b.value) {
    return 1;
  }
  if (a.value < b.value) {
    return -1;
  }
  return 0;
});

const result = mapped.map((v) => data[v.i]);

//sort는 원본배열 참조를 리턴하므로 sort배열 변경시 원본배열도 바뀐다
