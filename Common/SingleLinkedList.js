export class Node {
  constructor(data) {
    this.data = data;
    this.next = null;
  }
}

export class SingleLinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.size = 0;
  }

  append(data) {
    const newNode = new Node(data);
    if (this.head === null) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      this.tail.next = newNode;
      this.tail = newNode;
    }
    this.size += 1;
  }

  findMany(data) {
    const array = [];
    let curNode = this.head;
    while (curNode !== null) {
      if (curNode.data === data) {
        array.push(curNode);
      }
      curNode = curNode.next;
    }
    return console.log(array);
  }

  insert(data, index) {
    if (index > this.size) return;
    const newNode = new Node(data);
    let curNode = this.head;
    let prevNode = this.head;
    for (let i = 0; i < index; i++) {
      prevNode = curNode;
      curNode = curNode.next;
    }
    newNode.next = curNode;
    if (curNode !== this.head) {
      prevNode.next = newNode;
    } else {
      this.head = newNode;
    }
    this.size += 1;
  }

  removeMany(data) {
    let curNode = this.head;
    let prevNode = this.head;
    while (curNode !== null) {
      if (curNode.data === data) {
        if (curNode === this.head) {
          this.head = curNode.next;
        } else if (curNode === this.tail) {
          prevNode.next = null;
          this.tail = prevNode;
        } else {
          prevNode.next = curNode.next;
        }
        this.size -= 1;
      }
      prevNode = curNode;
      curNode = curNode.next;
    }
  }

  display() {
    let curNode = this.head;
    let str = "[";
    while (curNode !== null) {
      str += `${curNode.data},`;
      curNode = curNode.next;
    }
    str = str.substr(0, str.length - 1) + "]";
    console.log(str);
  }
}

// const single = new SingleLinkedList();
// console.log("-----------");
// single.append(1);
// single.append(2);
// single.append(3);
// single.append(4);
// single.append(5);
// single.display();
// console.log("-----------");
// single.insert(0, 0);
// single.display();
// single.insert(0, 3);
// single.display();
// single.insert(0, 7);
// single.insert(0, 9); //size: 8 / 추가 X
// single.display();
// console.log("-----------");
// single.findMany(0);
// console.log("-----------");
// single.removeMany(0);
// single.display();
