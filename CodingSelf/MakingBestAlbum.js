function solution(genres, plays) {
  //장르별 재생횟수 계산하기
  const genTable = new Map();
  const songTable = new Map();
  const songParticle = new Map();

  for (let i = 0; i < genres.length; i++) {
    if (genTable.has(genres[i])) {
      genTable.set(genres[i], genTable.get(genres[i]) + plays[i]);
    } else {
      genTable.set(genres[i], plays[i]);
    }
  }

  //console.log(genTable.entries());

  //장르 가장 많이 재생별로 정렬하기
  const priorities = [];
  genTable.forEach(function (value, key) {
    priorities.push([key, value]);
  });

  priorities.sort((a, b) => b[1] - a[1]);

  //console.log(priorities);
  //console.log(genTable);

  //각 장르별 노래리스트 만들기

  const songArray = [];

  for (let i = 0; i < genres.length; i++) {
    songParticle.set(genres[i], i);
    songTable.set(genres[i], songParticle.get(genres[i]));

    songTable.forEach(function (value, key) {
      songArray.push([key, value]);
    });

    songTable.delete(genres[i]);
  }

  //console.log(songArray);

  for (let i = 0; i < songArray.length; i++) {
    songArray[i].push(plays[songArray[i][1]]);
  }

  //각 Top1, Top2 선별하기
  songArray.sort((prev, cur) => {
    if (prev[2] === cur[2]) {
      return prev[1] - cur[1] > 0 ? 1 : -1;
    }
    return cur[2] - prev[2];
  });
  //console.log(songArray);

  let count = 0;
  const result = [];

  for (let i = 0; i < priorities.length; i++) {
    for (let j = 0; j < songArray.length; j++) {
      if (songArray[j][0] === priorities[i][0]) {
        result.push(songArray[j][1]);
        count += 1;
      }
      if (count === 2) {
        count = 0;
        break;
      }
    }
    count = 0;
  }

  console.log(result);
  return result;
}

solution(
  ["classic", "pop", "classic", "classic", "pop"],
  [500, 600, 150, 800, 2500]
);
