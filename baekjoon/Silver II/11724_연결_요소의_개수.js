/**
 *  BAEKJOON ONLINE JUDGE
 *  https://www.acmicpc.net/problem/11724
 *
 *  Title: 연결 요소의 개수
 *  Algorithm: 그래프 이론, 그래프 탐색, 너비 우선 탐색, 깊이 우선 탐색
 */

const [n, m, ...nodes] = `${require('fs').readFileSync('/dev/stdin')}`.trim().split(/\s/).map(Number);

const graph = Array.from({ length: n + 1 }, () => new Array(n + 1).fill(0));

// 그래프 채우기
for (let i = 0; i < m; i += 1) {
  const a = nodes[i * 2];
  const b = nodes[i * 2 + 1];

  graph[a][b] = 1;
  graph[b][a] = 1;
}

// 방문 정보 저장
const visited = new Array(n + 1).fill(false);

// 그래프 순회
let connectionCount = 0;
for (let i = 1; i <= n; i += 1) {
  const queue = [];

  for (let j = 1; j <= n; j += 1) {
    if (!graph[i][j]) continue;
    if (visited[j]) continue;

    visited[j] = true;
    queue.push(j);
  }

  // 새로운 연결 정보가 있을 때 connectionCount +1
  if (queue.length) {
    connectionCount += 1;
  }

  // 인접한 노드에 대해 연결 처리
  while (queue.length) {
    const k = queue.pop();

    for (let j = 1; j <= n; j += 1) {
      if (!graph[k][j]) continue;
      if (visited[j]) continue;

      visited[j] = true;
      queue.push(j);
    }
  }
}

console.log(connectionCount + visited.slice(1).filter((v) => !v).length);
