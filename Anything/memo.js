songParticle.set(i, genTable.get(genres[i]));
songParticle.set(i, plays[i]);

if (!songTable.has(genres[i])) {
  songTable.set(genres[i], songParticle);
}
