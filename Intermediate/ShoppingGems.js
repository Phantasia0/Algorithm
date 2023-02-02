class Queue {
  constructor() {
    this.front = 0;
    this.rear = 0;
    this.queue = [];
  }

  enqueue(value) {
    this.queue[this.rear++] = value;
  }

  dequeue() {
    const value = this.queue[this.front];
    delete this.queue[this.front];
    this.front++;
    return value;
  }

  peek() {
    return this.queue[this.front];
  }

  size() {
    return this.rear - this.front;
  }
}

function solution(gems) {
  const count = new Set([...gems]).size;

  if (count === 1) {
    return [1, 1];
  }

  let match = 0;
  let result = [];

  let head = 0;
  let tail = 0;

  let compareSet = new Queue();
  compareSet.enqueue(gems[0]);

  while (compareSet.size() > 0) {
    console.log(compareSet);

    if (match < count && tail < gems.length) {
      tail++;
      if (tail < gems.length) {
        compareSet.enqueue(gems[tail]);
      }
    } else if (match === count || tail === gems.length) {
      compareSet.dequeue();
      head++;
    }

    match = new Set([...compareSet.queue.filter((v) => v !== undefined)]).size;

    // match = compareSet.queue
    //   .filter((v, i) => compareSet.queue.indexOf(v) === i)
    //   .filter((v) => v !== undefined).length;

    console.log(`${head} , ${tail} , ${match}`);

    if (match === count) {
      result.push([head, tail]);
    }

    if (tail === gems.length && match < count) {
      break;
    }
  }

  result.sort((a, b) => a[1] - a[0] - (b[1] - b[0]));
  result = result[0].map((v) => v + 1);
  console.log(result);
}

solution(["DIA", "RUBY", "RUBY", "DIA", "DIA", "EMERALD", "SAPPHIRE", "DIA"]);
