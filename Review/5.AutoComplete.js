class Node {
  constructor(str) {
    this.str = str;
    this.child = new Map();
    this.pathCount = 1;
  }
}

class Trie {
  constructor() {
    this.root = new Node("");
    this.pathList = [];
  }

  push(string) {
    let current = this.root;
    for (const char of string) {
      if (!current.child.has(char)) {
        current.child.set(char, new Node(current.str + char));
      } else {
        const node = current.child.get(char);
        node.pathCount++;
      }
      current = current.child.get(char);
    }
  }

  show(string) {
    let current = this.root;
    for (let char of string) {
      const node = current.child.get(char);
      this.pathList.push(node.pathCount);

      if (this.pathList[this.pathList.length - 1] === 1) {
        break;
      }

      current = current.child.get(char);
    }
    return this.pathList;
  }

  clearPath() {
    this.pathList = [];
  }
}

function solution(words) {
  const trie = new Trie();
  let answer = 0;

  for (let word of words) {
    trie.push(word);
  }

  for (let word of words) {
    const list = trie.show(word);

    if (list[list.length - 1] !== 1) {
      answer += word.length;
    } else {
      answer += list.length;
    }

    trie.clearPath();
  }
  return answer;
}

solution(["word", "war", "warrior", "world"]);
//solution(["a"]);
