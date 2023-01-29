//이진 탐색
//정렬 되어있는 요소들을 반씩 제외하며 찾는 알고리즘
//O(log n)

//반드시 정렬이 되어있어야 사용할 수 있다
//배열 혹은 이진트리를 이용하여 구현할 수 있다

//배열은 left / mid / right
//mid 보다 클 경우 left = mid + 1 / mid보다 작을 경우 right = mid - 1

//이진 탐색 트리
//이진 탐색을 위한 이진트리로, 왼쪽 서브 트리는 루트보다 작은 값이 모여 있다
//오른쪽 서브 트리는 루트보다 큰 값이 모여있다.
//중복값 허용 불가 (자료보고 참고함)

//이진 탐색 트리 요소 추가
//이진 탐색 트리 요소 삭제

//이진 탐색 트리의 문제점
//최악의 경우 한쪽으로 편향된 트리가 될 수 있다 O(n)
//이를 해결하기 위해 AVL 트리 , 레드-블랙 트리가 있다

//binarySearch
const array = [1, 1, 5, 124, 400, 599, 1004, 2876, 8712];

function binarySearch(array, findValue) {
  let left = 0;
  let right = array.length - 1;
  let mid = Math.floor((left + right) / 2);
  while (left < right) {
    if (array[mid] === findValue) {
      return mid;
    }

    if (array[mid] < findValue) {
      left = mid + 1;
    } else {
      right = mid - 1;
    }

    mid = Math.floor((left + right) / 2);
  }

  return -1;
}

//binarySearchTree
class Node {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

class BinarySearchTree {
  constructor() {
    this.root = null;
  }

  insert(value) {
    const newNode = new Node(value);
    if (this.root === null) {
      this.root = newNode;
      return;
    }

    let currentNode = this.root;
    while (currentNode !== null) {
      if (currentNode.value < value) {
        if (currentNode.right === null) {
          currentNode.right = newNode;
          break;
        }
        currentNode = currentNode.right;
      } else {
        if (currentNode.left === null) {
          currentNode.left = newNode;
          break;
        }
        currentNode = currentNode.left;
      }
    }
  }

  has(value) {
    let currentNode = this.root;
    while (currentNode !== null) {
      if (currentNode.value === value) {
        return true;
      }

      if (currentNode.value < value) {
        currentNode = currentNode.right;
      } else {
        currentNode = currentNode.left;
      }
    }

    return false;
  }
}
