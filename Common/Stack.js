class StackWithArray {
  constructor() {
    this.array = [];
  }

  push(data) {
    this.array.push(data);
  }

  pop() {
    this.array.pop();
  }

  peek() {
    return this.array[this.array.length - 1];
  }

  display() {
    for (let i of this.array) {
      console.log(i);
    }
  }
}

class Node {
  constructor(data) {
    this.data = data;
    this.next = null;
  }
}

class StackWithLinked {
  constructor() {
    this.header = null;
    this.tail = null;
    this.size = 0;
  }

  push(data) {
    const newNode = new Node(data);
    if (this.header === null) {
      this.header = newNode;
      this.tail = newNode;
    } else {
      this.tail.next = newNode;
      this.tail = newNode;
    }
    this.size += 1;
  }

  peek() {
    return this.tail.data;
  }

  pop() {
    if (this.size <= 0) return null;
    const temp = this.tail.data;
    if (this.size === 1) {
      this.header = null;
      this.tail = null;
    } else {
      let curNode = this.header;
      let prevNode = this.header;
      while (curNode !== this.tail) {
        prevNode = curNode;
        curNode = curNode.next;
      }

      prevNode.next = null;
      this.tail = prevNode;
    }

    this.size -= 1;
    return temp;
  }

  display() {
    let curNode = this.header;
    while (curNode !== null) {
      console.log(curNode.data);
      curNode = curNode.next;
    }
  }
}

// const stack = new StackWithLinked();
// stack.push(1);
// stack.push(2);
// stack.push(3);
// stack.push(4);
// stack.display();
// stack.pop();

// stack.display();
