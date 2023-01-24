class Node {
  constructor(data) {
    this.data = data;
    this.next = null;
    this.prev = null;
  }
}

class DoubleLinkedList {
  constructor() {
    this.header = null;
    this.tail = null;
    this.size = 0;
  }

  append(data) {
    const newNode = new Node(data);
    if (this.header === null) {
      this.header = newNode;
      this.tail = newNode;
    } else {
      newNode.prev = this.tail;
      this.tail.next = newNode;
      this.tail = newNode;
    }
    this.size += 1;
  }

  findData(data, option) {
    let curNode;
    if (option) {
      curNode = this.header;
    } else {
      curNode = this.tail;
    }
    while (curNode !== null) {
      if (curNode.data === data) {
        break;
      }
      if (option) {
        curNode = curNode.next;
      } else {
        curNode = curNode.prev;
      }
    }
    return curNode;
  }

  removeNode(curNode) {
    if (curNode === null) return;

    if (this.size > 1) {
      if (curNode === this.header) {
        curNode.next.prev = null;
        this.header = curNode.next;
        curNode.next = null;
      } else if (curNode === this.tail) {
        curNode.prev.next = null;
        this.tail = curNode.prev;
        curNode.prev = null;
      } else {
        curNode.prev.next = curNode.next;
        curNode.next.prev = curNode.prev;
      }
    }
    if (this.size === 1) {
      this.header = null;
      this.tail = null;
    }

    this.size -= 1;
  }
}

function solution(s) {
  if (s.length < 1) return false;
  if (s.length % 2 !== 0) return false;

  const stack = new DoubleLinkedList();

  for (let i = 0; i < s.length; i++) {
    stack.append(s[i]);
  }

  const strLast = stack.tail.data;
  const strFirst = stack.header.data;

  if (strLast !== ")" && strFirst !== "(") return false;

  let result;
  while (stack.size > 0) {
    result = remove(stack);
    if (!result) break;
  }

  if (stack.size === 0) return true;

  console.log(stack.size);
  return false;
}

function remove(stack) {
  const num = stack.size;
  let curNode = stack.findData(")", false);
  if (curNode === null) return false;

  while (true) {
    if (curNode.prev === null) break;
    if (curNode !== null) {
      if (curNode.prev.data === "(") {
        let prevNode = curNode.prev;
        stack.removeNode(curNode);
        stack.removeNode(prevNode);
        break;
      } else {
        curNode = curNode.prev;
      }
    }
  }

  if (stack.size === num) return false;
  return true;
}
