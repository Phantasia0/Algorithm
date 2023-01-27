class Node {
  constructor(value = "") {
    this.value = value;
    this.children = new Map();
  }
}

class Trie {
  constructor() {
    this.root = new Node();
  }

  insert(string) {
    let currentNode = this.root;
    for (const char of string) {
      if (!currentNode.children.has(char)) {
        currentNode.children.set(char, new Node(currentNode.value + char));
      }
      currentNode = currentNode.children.get(char);
    }
  }

  has(string) {
    let currentNode = this.root;
    for (const char of string) {
      if (!currentNode.children.get(char)) {
        return false;
      }
      currentNode = currentNode.children.get(char);
    }

    return true;
  }

  belongsTo(string, parent) {
    let currentNode = this.root;
    for (const char of string) {
      currentNode = currentNode.children.get(char);
      if (currentNode.value === parent) {
        return true;
      }
    }
    return false;
  }
}

export function solution2(words) {
  const trie = new Trie();
  for (let word of words) {
    trie.insert(word);
  }

  let finalCount = 0;

  for (let word of words) {
    let string = "";
    let counter = 0;

    for (let i = 0; i < word.length; i++) {
      string = string + word[i];
      counter++;
      let count = 0;
      if (word === string) {
        finalCount += counter;
        continue;
      }
      for (let data of words) {
        if (trie.belongsTo(data, string)) {
          count++;
        }
      }

      if (count === 1) {
        finalCount += counter;
        break;
      }
    }
  }

  return console.log(finalCount);
}
