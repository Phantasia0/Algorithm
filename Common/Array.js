let arr1 = [];
console.log(arr1);

let arr2 = [1, 2, 3, 4, 5];
console.log(arr2);

let arr3 = Array(10).fill(0);
console.log(arr3);

let arr4 = Array.from({ length: 100 }, (_, i) => i);
console.log(arr4);

const arr6 = [1, 2, 3];
console.log(arr6);

arr6.push(4); // O(1)
arr6.push(5, 6); // O(1)
console.log(arr6);

arr6.splice(3, 0, 128); //O(n)
console.log(arr6);

arr6.splice(3, 1); //O(n)
console.log(arr6[3]);
console.log(arr6);

//자바스크립트 Array는 동적
const arr5 = [];
arr5["string"] = 10; //이것도 가능하다
console.log(arr5);
arr5[4] = 1;
console.log(arr5);
console.log(arr5.length);

//특징만 알고 사용은 NO

const arr = Array.from(new Array(5), (_, i) => i + 1);

//join
console.log(arr);
console.log(arr.join(""));
console.log(arr.join(","));
//reverse
console.log(arr.reverse()); // 원본배열도 변경하므로 사용 주의
console.log(arr);
//
const array1 = [1, 2, 3, 4];
const array2 = [4, 5, 6, 7];
//concat
const array3 = array1.concat(array2);
console.log(array1.concat(array2));
console.log(array3[5]);
//push,pop
array1.push(5);
array1.push(8, 9);
console.log(array1);
array1.pop();
array1.pop();
console.log(array1);
//shift, unshift
array1.shift(); //맨앞 제거
array1.shift();
console.log(array1);
array1.unshift(10); //맨앞 추가
console.log(array1);
//slice
const array4 = [1, 2, 3, 4, 5, 6];
console.log(array4.slice(2, 4));
console.log(array4);
//splice
array4.splice(4, 2);
console.log(array4);

//for of
for (const item of array4) {
  console.log(item);
}

console.log(typeof array4);
