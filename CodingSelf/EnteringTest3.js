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

function solution(n, times) {
  const testerNum = times.length;
  let timeCount = 0;
  const copyTimes = [...times];
  let findIndex = 0;

  if (n <= testerNum) {
    copyTimes.sort((a, b) => a - b);
    timeCount = copyTimes[n - 1];
  } else {
    n = n - testerNum;
    while (n > 0) {
      findIndex = binarySearch(times, 0);
      if (findIndex === -1) {
        times.forEach((time, index, array) => {
          array[index] = time - 1;
        });
        timeCount += 1;
      } else {
        for (let i = 0; i < times.length; i++) {
          if (copyTimes[i] + times[i] < copyTimes[findIndex]) {
            findIndex = i;
            const waiting = times[findIndex];
            times.forEach((time, index, array) => {
              array[index] = time - waiting;
            });
            timeCount += waiting;
          }
        }
        times[findIndex] = copyTimes[findIndex];
        n -= 1;
      }
    }
    timeCount += copyTimes[findIndex];
  }

  //console.log(timeCount);
  return timeCount;
}

solution(6, [7, 10, 9, 4, 5, 7]);

//FAILED
