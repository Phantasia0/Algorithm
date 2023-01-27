import * as memo from "./AutoCompleteString3.js";

class Node {
  constructor(value = "") {
    this.value = value;
    this.children = new Map();
    this.pathCount = 1;
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
      } else {
        currentNode.children.get(char).pathCount += 1;
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

  display(string) {
    let currentNode = this.root;
    for (const char of string) {
      console.log(
        currentNode.children.get(char).value +
          "," +
          currentNode.children.get(char).pathCount
      );
      currentNode = currentNode.children.get(char);
    }
  }

  findLeast(string) {
    let currentNode = this.root;
    const array = [];
    for (const char of string) {
      currentNode = currentNode.children.get(char);
      array.push([currentNode.pathCount, currentNode.value]);
    }
    //console.log(array);
    return array;
  }
}

function solution(words) {
  const trie = new Trie();
  for (let word of words) {
    trie.insert(word);
  }

  const resultList = [];

  for (let word of words) {
    if (word.length === 1) {
      resultList.push(1);
    }
    const array = trie.findLeast(word);
    while (array.length > 1) {
      if (array[0][0] === 1) {
        resultList.push(1);
        break;
      }

      if (array[array.length - 1][0] > 1) {
        resultList.push(array.length);
        break;
      }
      if (array[array.length - 1][0] === 1) {
        const num = array.pop()[0];
        if (array[array.length - 1][0] > num) {
          resultList.push(array.length + 1);
          break;
        }
      }
    }
  }

  //console.log(resultList);
  //onsole.log(resultList.reduce((a, b) => a + b));
  return resultList.reduce((a, b) => a + b);
}

solution(["a", "b", "c"]);

// const genS = (num) => {
//   const alphabet = "abcdefg";
//   let result;
//   const length = alphabet.length;
//   for (let i = 0; i < num; i++) {
//     result += alphabet.charAt(Math.floor(Math.random() * length));
//   }

//   return result;
// };

// let count = 0;

// while (count < 100) {
//   const arr = [
//     genS(10000),
//     genS(10000),
//     genS(10000),
//     genS(10000),
//     genS(10000),
//     genS(10000),
//     genS(10000),
//     genS(10000),
//     genS(10000),
//   ];

//   const num1 = memo.solution2(arr);
//   const num2 = solution(arr);

//   if (num1 !== num2) {
//     console.log("FIND THAT!" + "num1:" + num1 + ", num2:" + num2);
//     console.log(arr);
//     break;
//   }

//   count++;
// }
