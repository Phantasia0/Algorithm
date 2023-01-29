//연결리스트
//각 요소를 포인터로 연결하여 관리하는 선형 자료구조
//각 요소는 노드이며 데이터 영역과 포인터 영역으로 구성
//탐색은 O(n), 요소 추가 제거는 O(1)
//SingleLinkedList, DoubleLinkedList, CircularLinkedList 가 있다
//핵심 로직 : 요소 찾기 / 요소 추가 / 요소 제거 /

//SingleList
class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class SingleLinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
  }

  find(value) {
    let curNode = this.head;
    while (curNode.value !== value) {
      curNode = curNode.next;
    }
    return curNode;
  }

  append(newValue) {
    const newNode = new Node(newValue);
    if (this.head === null) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      this.tail.next = newNode;
      this.tail = newNode;
    }
  }

  insert(node, newValue) {
    const newNode = new Node(newValue);
    newNode.next = node.next;
    node.next = newNode;
  }

  remove(value) {
    let prevNode = this.head;
    if (prevNode.value === value) {
      this.head = null;
      this.tail = null;
    }
    while (prevNode.next.value !== value) {
      prevNode = prevNode.next;
    }

    if (prevNode !== null) {
      prevNode.next = prevNode.next.next;
    }
  }
}

//DoubleLinkedList
class DNode {
  constructor(value) {
    this.value = value;
    this.next = null;
    this.prev = null;
  }
}

class DoubleLinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
  }

  find(value) {
    let curNode = this.head;
    while (curNode.value !== value) {
      curNode = curNode.next;
    }

    return curNode;
  }

  append(value) {
    const newNode = new DNode(value);
    if (this.head === null) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      this.tail.next = newNode;
      newNode.prev = this.tail;
      this.tail = newNode;
    }
  }

  insert(node, value) {
    const newNode = new DNode(value);
    node.next.prev = newNode;
    newNode.next = node.next.next;
    node.next = newNode;
    newNode.prev = node;
  }

  remove(value) {
    let prevNode = this.head;
    if (prevNode.value === value) {
      this.head = null;
      this.tail = null;
    }
    while (prevNode.next.value !== value) {
      prevNode = prevNode.next;
    }
    if (prevNode !== null) {
      prevNode.next = prevNode.next.next;
      prevNode.next.prev = prevNode;
    }
  }
}
