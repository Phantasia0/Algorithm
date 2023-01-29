//해시테이블
//키와 값을 받아 키를 해싱하여 나온 INDEX에 값을 저장하는 선형구조
//삽입 O(1), 키를 알고있다면 삭제, 탐색도 O(1)
//해시 함수 : 입력받은 값을 특정 범위 내 숫자로 변경하는 함수 . "gender" => 1523213
//해시 충돌: 해싱된 결과값이 겹칠경우
//해결방법 : 선형 탐사법, 제곱 탐사법, 이중 해싱, 분리 연결법

const table = new Map();
table.set("key", 100);
table.set("key2", "Hello");

const object = { a: 1 };
table.set(object, "A1");
table.delete(object);
table.get(object); // undefined
table.keys(); //{'key', 'key2'}
table.values(); //{100, "Hello"}
table.clear();

if (table.has("key")) {
  console.log(table.get("key"));
}

table.forEach((value, key) => {
  table.set(key, value * 2);
});

const tableSet = new Set();
tableSet.add("key"); //key와 value 값이 동일하게 들어감
tableSet.delete("key");
