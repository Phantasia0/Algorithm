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

  findData(data) {
    let curNode = this.header;
    while (curNode !== null) {
      if (curNode.data === data) {
        break;
      }
      curNode = curNode.next;
    }
    return curNode;
  }

  findIndex(index) {
    if (this.size <= 0) return null;
    if (index >= this.size) return null;
    let curNode;
    if (index <= this.size / 2) {
      curNode = this.header;
      for (let i = 0; i < index; i++) {
        curNode = curNode.next;
      }
    } else {
      curNode = this.tail;
      for (let i = this.size - 1; i > index; i--) {
        curNode = curNode.prev;
      }
    }
    return curNode;
  }

  insert(data, index) {
    const newNode = new Node(data);

    if (index > this.size) return;

    if (index > 0 && index < this.size) {
      let curNode = this.findIndex(index).prev;
      newNode.prev = curNode;
      newNode.next = curNode.next;
      curNode.next = newNode;
      newNode.next.prev = newNode;
    }

    if (index === 0) {
      newNode.next = this.header;
      this.header.prev = newNode;
      this.header = newNode;
    }

    if (index === this.size) {
      newNode.prev = this.tail;
      this.tail.next = newNode;
      this.tail = newNode;
    }

    this.size += 1;
  }

  removeData(data) {
    let curNode = this.findData(data);
    if (curNode === null) return;

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

    this.size -= 1;
  }

  removeIndex(index) {
    let curNode = this.findIndex(index);
    if (curNode === null) return;

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

    this.size -= 1;
  }

  display() {
    let str = "[";
    let curNode = this.header;
    while (curNode !== null) {
      str += `${curNode.data},`;
      curNode = curNode.next;
    }
    str = str.substr(0, str.length - 1) + "]";
    console.log(str);
    console.log(this.size);
  }

  displayRaw() {
    let curNode = this.header;
    while (curNode !== null) {
      console.log(curNode);
      curNode = curNode.next;
    }
  }
}

const double = new DoubleLinkedList();
double.append(1);
double.append(2);
double.append(3);
double.append(4);
double.append(5);
console.log(double.findData(2));
console.log(double.findIndex(1));
double.display();
double.insert(0, 0);
double.insert(0, 3);
double.insert(0, 5);
double.insert(0, 7);
double.insert(0, 9);
double.display();
double.removeData(0);
double.removeIndex(8);
double.display();
