class Queen {
  constructor(posX, posY) {
    this.posX = posX;
    this.posY = posY;
    this.possible = [];
  }

  attack(stack) {
    const n = stack[0].length;
    for (let i = 0; i < n; i++) {
      stack[this.posY][i] = 1;
      stack[i][this.posX] = 1;

      if (this.posY + i < n && this.posX + i < n) {
        stack[this.posY + i][this.posX + i] = 1;
      }
      if (this.posY + i < n && this.posX - i >= 0) {
        stack[this.posY + i][this.posX - i] = 1;
      }
      if (this.posY - i >= 0 && this.posX + i < n) {
        stack[this.posY - i][this.posX + i] = 1;
      }
      if (this.posY - i >= 0 && this.posX - i >= 0) {
        stack[this.posY - i][this.posX - i] = 1;
      }
    }

    stack[this.posY][this.posX] = 2;
  }

  findPos(n, stack) {
    for (let i = 0; i < stack.length; i++) {
      if (stack[n][i] === 0) {
        this.possible.push([i, n]);
      }
    }
  }

  check(n, stack) {
    for (let i = 0; i < stack.length; i++) {
      if (stack[n][i] === 0) {
        return true;
      }
    }
    return false;
  }

  setPos(isInit) {
    if (!isInit) {
      const curPos = this.possible.shift();
      this.posX = curPos[0];
      this.posY = curPos[1];
    }
  }
}

function init(stack) {
  for (let i = 0; i < stack.length; i++) {
    for (let j = 0; j < stack.length; j++) {
      stack[i][j] = 0;
    }
  }
}

function solution(n) {
  const stack = Array.from(Array(n), () => Array(n).fill(0));

  const queenList = [];
  for (let i = 0; i < 3; i++) {
    queenList.push(new Queen(0, 0));
  }

  if (queenList[0].check(0, stack)) {
    queenList[0].findPos(0, stack);
    queenList[0].setPos(false);
    queenList[0].attack(stack);
  }

  if (queenList[1].check(1, stack)) {
    queenList[1].findPos(1, stack);
    queenList[1].setPos(false);
    queenList[1].attack(stack);
  }

  if (queenList[2].check(2, stack)) {
    queenList[2].findPos(2, stack);
    queenList[2].setPos(false);
    queenList[2].attack(stack);
  } else {
    init(stack);
    queenList[0].setPos(true);
    queenList[0].attack(stack);
    if (queenList[1].check(1, stack)) {
      queenList[1].setPos();
      queenList[1].attack(stack);
    }
  }

  for (let i = 0; i < n; i++) {
    console.log(stack[i]);
  }
}

solution(4);
