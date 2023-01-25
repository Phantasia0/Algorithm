import solution2 from "./asd.js";

class Queue {
  constructor() {
    this.queue = [];
    this.front = 0;
    this.rear = 0;
  }

  enqueue(data) {
    this.queue[this.rear++] = data;
  }

  dequeue() {
    const value = this.queue[this.front];
    delete this.queue[this.front];
    this.front += 1;
    return value;
  }

  peek() {
    return this.queue[this.front];
  }

  size() {
    return this.rear - this.front;
  }
}

function solution(priorities, location) {
  if (priorities.length === 1) {
    return 1;
  }

  const origin = [];
  const compareQueue = new Queue();

  for (let value of priorities) {
    origin.push({ data: value, who: "you", exist: false });
    compareQueue.enqueue(value);
  }

  const myPriorities = {
    data: priorities[location],
    who: "me",
    exist: false,
  };

  origin[location] = myPriorities;

  let numHigher = 0;
  const queue = new Queue();

  while (compareQueue.front !== compareQueue.rear) {
    countDown(compareQueue, origin);
  }

  console.log(origin);

  for (let value of origin) {
    if (value.data > myPriorities.data) {
      numHigher += 1;
    } else if (value.data === myPriorities.data) {
      queue.enqueue(value);
    }
  }

  console.log(queue);

  let trueExistNum = 0;
  let falseExistNumOne = 0;
  let falseExistNumTwo = 0;
  let finalResult = 0;
  if (myPriorities.exist) {
    for (let value of queue.queue) {
      if (value.who === "me") break;
      if (value.exist) trueExistNum += 1;
    }

    for (let i = queue.rear - 1; i > queue.front; i--) {
      if (queue.queue[i].who === "me") break;
      if (!queue.queue[i].exist) falseExistNumOne += 1;
    }

    finalResult = numHigher + trueExistNum + falseExistNumOne + 1;
  } else {
    for (let value of queue.queue) {
      if (value.who === "me") break;
      if (!value.exist) falseExistNumTwo += 1;
    }

    finalResult = numHigher + +falseExistNumTwo + 1;
  }
  //console.log(queue);
  //console.log(numHigher);
  //console.log(trueExistNum);
  //console.log(falseExistNumOne);
  //console.log(falseExistNumTwo);

  return console.log(finalResult);
}

function countDown(queue, origin) {
  let index = queue.front;
  let value = queue.dequeue();

  if (queue.size() === 0) {
    origin[index].exist = false;
    return;
  }

  for (let i = queue.front; i < queue.rear; i++) {
    if (value < queue.queue[i]) {
      origin[index].exist = true;
      break;
    } else {
      origin[index].exist = false;
    }
  }
}

const array = [];
for (let i = 0; i < 10; i++) {
  array.push(Math.floor(Math.random() * 9 + 1));
}
const array2 = array;

solution(array, 2);
console.log(solution2(array, 2));

//solution([5, 3, 3, 5, 1, 6, 3, 1, 8], 2);
//console.log(solution2([5, 3, 3, 5, 1, 6, 3, 1, 8], 2));
