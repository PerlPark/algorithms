/**
 *  BAEKJOON ONLINE JUDGE
 *  https://www.acmicpc.net/problem/4963
 *
 *  Title: 섬의 개수
 *  Algorithm: 그래프 이론, 그래프 탐색, 너비 우선 탐색, 깊이 우선 탐색
 */

const test = `${require('fs').readFileSync('/dev/stdin')}`.trim().split(/\s/).map(Number);

let answer = '';

let w;
let h;
let graph;

const dx = [-1, 0, 1, -1, 1, -1, 0, 1];
const dy = [-1, -1, -1, 0, 0, 1, 1, 1];
const isVaildRange = (i, j) => i >= 0 || i < h || j >= 0 || j < w;

let i = 0;

while (i < test.length) {
  w = +test[i++];
  h = +test[i++];

  if (w === 0 && h === 0) break;

  let count = 0;
  graph = [];
  for (let y = 0; y < h; y += 1) {
    graph[y] = [];

    for (let x = 0; x < w; x += 1) {
      graph[y][x] = +test[i++];
    }
  }

  for (let i = 0; i < h; i += 1) {
    for (let j = 0; j < w; j += 1) {
      if (graph[i][j] === 1) {
        DFS(i, j);
        count += 1;
      }
    }
  }
  answer += count + '\n';
}

function DFS(i, j) {
  if (isVaildRange(i, j) && graph[i]?.[j] === 1) {
    graph[i][j] = 0;

    for (let d = 0; d < 8; d += 1) {
      DFS(i + dx[d], j + dy[d]);
    }
  }
}

console.log(answer);
