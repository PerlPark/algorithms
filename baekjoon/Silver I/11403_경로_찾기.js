/**
 *  BAEKJOON ONLINE JUDGE
 *  https://www.acmicpc.net/problem/11403
 *
 *  Title: 경로 찾기
 *  Algorithm: 그래프 이론, 그래프 탐색, 최단 경로, 플로이드-워셜
 */

let [n, ...graph] = `${require('fs').readFileSync('./dev/stdin')}`.trim().split(/\n/);
n = +n;

const table = Array.from({ length: n }, () => new Set());
const map = Array.from({ length: n }, () => new Array(n).fill(0));

for (let i = 0; i < n; i += 1) {
  const g = graph[i].split(' ');

  for (let j = 0; j < n; j += 1) {
    if (g[j] === '1') {
      table[i].add(j);

      if (table[j].length) {
        table[i].add(...j);
      }
    }
  }
}

for (let i = 0; i < n; i += 1) {
  for (let j = 0; j < n; j += 1) {
    if (map[i][j]) continue;

    const queue = [...table[i]];
    while (queue.length) {
      const next = queue.pop();

      if (!map[i][next]) {
        map[i][next] = 1;
        queue.push(...table[next]);
      }
    }
  }
}

console.log(map.map((m) => m.join(' ')).join('\n'));
