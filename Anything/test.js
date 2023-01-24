import { SingleLinkedList } from "../Common/SingleLinkedList.js";

//
const singles = new SingleLinkedList();
for (let i = 0; i < 1000000; i++) {
  singles.append(Math.floor(Math.random() * 10));
}

let arr = Array.from({ length: 1000000 }, (_, i) =>
  Math.floor(Math.random() * 10)
);
//

//

const start = new Date().getTime();

singles.removeMany(4);

const end = new Date().getTime();
console.log((end - start) / 1000);

//

const start2 = new Date().getTime();

for (let i = 0; i < arr.length; i++) {
  if (arr[i] === 4) {
    arr.splice(i, 1);
    i--;
  }
}

const end2 = new Date().getTime();
console.log((end2 - start2) / 1000);

//
