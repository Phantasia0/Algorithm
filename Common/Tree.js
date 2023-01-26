//비선형 자료형 구조 트리

//이진트리
//힙
//AVL트리
//레드블랙트리

//Node, leaf Node, Root

//이진트리(자식 최대2개)
//완전이진트리(맨 마지막 레벨 적어도 하나 leaf Node)
//포화이진트리(맨 마지막 레벨까지 모두 채워져있음)
//편향이진트리(한쪽으로만)

//Math.floor(Math.log2(MyIndex))+1 = Level

const treeArray = [
  undefined,
  //1
  9,
  //1*2, 1*2+1
  3,
  8,
  //2*2 2*2+1 3*2, 3*2+1
  2,
  5,
  undefined,
  7,
  //4*2 4*2+1 5*2, 5*2+1
  undefined,
  undefined,
  undefined,
  4,
];

class Queue {
  constructor() {
    this.queue = [];
    this.front = this.rear = 0;
  }

  enqueue(data) {
    this.queue[this.rear++] = data;
  }

  dequeue() {
    const temp = this.queue[this.front];
    delete this.queue[this.front];
    this.front += 1;
    return temp;
  }

  size() {
    return this.rear - this.front;
  }
}

class Node {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

class Tree {
  constructor(node) {
    this.root = node;
  }

  display() {
    //Level Order
    const queue = new Queue();
    queue.enqueue(this.root);
    while (queue.size()) {
      const currentNode = queue.dequeue();
      console.log(currentNode.value);
      if (currentNode.left) queue.enqueue(currentNode.left);
      if (currentNode.right) queue.enqueue(currentNode.right);
    }
  }
}

const tree = new Tree(new Node(9));
tree.root.left = new Node(3);
tree.root.right = new Node(8);
tree.root.left.left = new Node(2);
tree.root.left.right = new Node(5);
tree.root.right.right = new Node(7);
tree.root.left.right.right = new Node(4);
