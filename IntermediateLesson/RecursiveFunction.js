//재귀함수 : 자기 자신을 호출하는 함수
//콜스택에 제한이 있다
//크롬의 경우 약 1만개
//꼬리 재귀가 제공되지 않는다
//성능이 좋지않다
//그럼에도 불구하고 알아야하는 이유는: 재귀로 작성하면 쉽게 풀리는 코딩문제가 있기 때문에

//Union-Find
//DFS
//Backtracking
//합병정렬

function recursion(a) {
  if (a > 10) {
    //무한 루프 방지를 위해
    //탈출 코드 적는다
    return a;
  }
  return recursion(a + 1);
}

//피보나치 수열
//앞 두 항의 합이 뒤 항의 값이 되는 수열

function fibonacci(x) {
  if (x <= 2) {
    return 1;
  }

  return fibonacci(x - 1) + fibonacci(x - 2);
}

console.log(fibonacci(7));

//재귀 함수를 이용한 트리 순회 알고리즘
//트리 순회는 트리 자료구조에서 각 노드를 한 번씩 탐색하는 알고리즘
//전위 순회, 중위 순회, 후위 순회

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

  preorder(currentNode) {
    // 전위 순회
    console.log(currentNode.value);
    if (currentNode.left) this.preorder(currentNode.left);
    if (currentNode.right) this.preorder(currentNode.right);
  }

  inorder(currentNode) {
    // 중위 순회
    if (currentNode.left) this.inorder(currentNode.left);
    console.log(currentNode.value);
    if (currentNode.right) this.inorder(currentNode.right);
  }

  postorder(currentNode) {
    // 후위 순회
    if (currentNode.left) this.postorder(currentNode.left);
    if (currentNode.right) this.postorder(currentNode.right);
    console.log(currentNode.value);
  }
}

const tree = new Tree(new Node(9));
tree.root.left = new Node(3);
tree.root.right = new Node(8);
tree.root.left.left = new Node(2);
tree.root.left.right = new Node(5);
tree.root.right.right = new Node(7);
tree.root.left.right.right = new Node(4);

tree.preorder(tree.root);
tree.inorder(tree.root);
tree.postorder(tree.root);
