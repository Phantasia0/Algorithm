function solution(genres, plays) {
  const genresMap = new Map();

  genres
    .map((genre, index) => [genre, plays[index]])
    .forEach(([genre, play], index) => {
      const data = genresMap.get(genre) || { total: 0, songs: [] };
      genresMap.set(genre, {
        total: data.total + play,
        songs: [...data.songs, { play, index }]
          .sort((a, b) => b.play - a.play)
          .slice(0, 2),
      });
    });

  return [...genresMap.entries()]
    .sort((a, b) => b[1].total - a[1].total)
    .flatMap((v) => v[1].songs)
    .map((v) => v.index);
}

solution(
  ["classic", "pop", "classic", "classic", "pop"],
  [500, 600, 150, 800, 2500]
);
