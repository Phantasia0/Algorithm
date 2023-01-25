//1.같은 장르끼리 묶는다
//2.묶인 노래들을 재생 순으로 정렬한다
//3.노래를 2개까지 자르는 작업한다

//핵심 키워드는 '묶는 것' , '정렬'

function solution(genres, plays) {
  const genreMap = new Map();

  //장르 배열과 재생배열을 하나로 묶는다
  genres
    .map((genre, index) => [genre, plays[index]])
    .forEach(([genre, play], index) => {
      //데이터 만들기
      const data = genreMap.get(genre) || { total: 0, songs: [] };
      genreMap.set(genre, {
        total: data.total + play,
        songs: [...data.songs, { play, index }]
          .sort((a, b) => b.play - a.play)
          .slice(0, 2),
      });
    });

  //genreMap에서 빼오고 리턴값만든다
  return [...genreMap.entries()]
    .sort((a, b) => b[1].total - a[1].total)
    .flatMap((item) => item[1].songs)
    .map((song) => song.index);
}

solution(
  ["classic", "pop", "classic", "classic", "pop"],
  [500, 600, 150, 800, 2500]
);
