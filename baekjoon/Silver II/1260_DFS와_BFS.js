/*
 * BAEKJOON ONLINE JUDGE
 * https://www.acmicpc.net
 * Problem Number: 1260
 * Level: Silver II
 * Algorithm: Graph Theory / Graph Traversal / Breadth-first Search / Depth-first Search
 */

const [condition, ...m] = `${require('fs').readFileSync('/dev/stdin')}`.trim().split(/\n/);

const [N, M, V] = condition.split(/\s/);
const newArray = (f) => new Array(+N).fill(f);

const g = [];
const start = +V - 1;

// 그래프 생성
for (let i = 0; i < +N; i++) {
  g[i] = newArray(false);
}
for (let i = 0; i < +M; i++) {
  const [start, end] = m[i].split(' ').map((v) => v - 1);
  g[start][end] = true;
  g[end][start] = true;
}

// BFS
function bfs() {
  const q = [];
  const vis = newArray(false);
  let result = '';

  q.push(start);
  vis[start] = true;

  while (q.length > 0) {
    const cur = q.shift();
    result += cur + 1 + ' ';

    for (let i = 0; i < +N; i++) {
      if (vis[i]) continue;
      if (!g[cur][i]) continue;

      q.push(i);
      vis[i] = true;
    }
  }
  console.log(result);
}

// DFS
function dfs() {
  const vis = newArray(false);
  let result = '';

  function search(cur) {
    vis[cur] = true;
    result += cur + 1 + ' ';

    for (let i = 0; i < +N; i++) {
      if (vis[i]) continue;
      if (!g[cur][i]) continue;

      search(i);
    }
  }
  search(start);
  console.log(result);
}

dfs();
bfs();
