class Node {
  constructor(value = "") {
    this.value = value;
    this.children = new Map();
  }
}

class Trie {
  constructor() {
    this.root = new Node();
    this.count = 0;
  }

  insert(string) {
    let currentNode = this.root;
    for (const char of string) {
      if (!currentNode.children.has(char)) {
        currentNode.children.set(char, new Node(currentNode.value + char));
      }
      currentNode = currentNode.children.get(char);
    }
  }

  has(string) {
    let currentNode = this.root;
    for (const char of string) {
      if (!currentNode.children.get(char)) {
        return false;
      }
      currentNode = currentNode.children.get(char);
    }

    return true;
  }

  belongsTo(string, parent) {
    let currentNode = this.root;
    this.count = 0;
    for (const char of string) {
      currentNode = currentNode.children.get(char);
      this.count++;
      if (currentNode.value === parent) {
        return true;
      }
    }
    return false;
  }
}

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

function solution(words) {
  const trie = new Trie();
  for (let word of words) {
    trie.insert(word);
  }

  const queue = new Queue();
  for (let word of words) {
    queue.enqueue(word);
  }

  let finalCount = 0;

  for (let word of words) {
    let string = "";
    let counter = 0;

    for (let i = 0; i < word.length; i++) {
      string = string + word[i];
      counter++;
      let count = 0;
      if (word === string) {
        //console.log("Set Complete:" + counter);
        finalCount += counter;
        continue;
      }
      while (true) {
        const literal = queue.dequeue();
        if (trie.belongsTo(literal, string)) {
          //console.log(literal + "," + string);
          count++;
          //console.log(count + "Called");
        }
        if (queue.size() === 0) break;
      }
      for (let word of words) {
        queue.enqueue(word);
      }

      if (count === 1) {
        finalCount += counter;
        //console.log("Set Complete:" + counter);
        break;
      }
    }
  }

  //console.log(finalCount);
  return finalCount;
}

solution(["word", "war", "warrior", "world"]);
