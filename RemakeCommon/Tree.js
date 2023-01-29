//트리
//방향 그래프의 일정으로 정점을 가리키는 간선이 하나밖에 없는 구조
//조직도, 폴더 구조
//루트 정점을 제외한 모든 정점은 반드시 하나의 부모 정점을 가진다
//정점이 N개인 트리는 반드시 N-1 개의 간선을 가진다
//루트에서 특정 정점으로 가는 경로는 유일하다
//인접행렬, 인접리스트로 표현 가능

//이진트리
//각 정점이 최대 2개의 자식을 가지는 트리
//이진트리, 완전 이진 트리, 포화 이진 트리, 편향 트리
//정점이 N 개인 이진트리는 최악의 경우 높이가 N이 될 수 있다
//정점이 N 개인 포화 또는 완전 이진트리의 높이는 logN
//높이가 h 인 포화 이진 트리는 2^h -1 개의 정점을 가진다
//이진 탐색 트리, 힙, AVL 트리, 레드 블랙 트리에 응용된다
//배열, 연결리스트로 표현 가능

//연결리스트
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
}

const tree = new Tree(new Node(9));
tree.root.left = new Node(3);
tree.root.right = new Node(8);
tree.root.left.left = new Node(2);
tree.root.left.right = new Node(5);
