//비선형 자료형 구조 그래프

const graph = Array.from(Array(5), () => Array(5).fill(false));

graph[0][1] = true;

const graph2 = Array.from(Array(5), () => []);
graph2[0].push(1);
graph2[0].push(3);
graph2[1].push(2);
