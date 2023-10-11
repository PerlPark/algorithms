/**
 *  BAEKJOON ONLINE JUDGE
 *  https://www.acmicpc.net/problem/1389
 *
 *  Title: 케빈 베이컨의 6단계 법칙
 *  Algorithm: 그래프 이론, 그래프 탐색, 너비 우선 탐색, 플로이드-워셜
 */

let [nm, ...relation] = `${require('fs').readFileSync('/dev/stdin')}`.trim().split(/\n/);
const [n, m] = nm.split(' ').map(Number);

const table = Array.from({ length: n + 1 }, () => []);
const visited = Array.from({ length: n + 1 }, () => new Array(n + 1).fill(0));

let min = Infinity;
let minNumber = 0;

for (let i = 0; i < m; i += 1) {
  const [a, b] = relation[i].split(' ').map(Number);
  table[a].push(b);
  table[b].push(a);
  visited[a][b] = 1;
  visited[b][a] = 1;
}

for (let i = 1; i <= n; i += 1) {
  const queue = [...table[i]];

  while (queue.length) {
    const m = queue.shift();
    for (let j = 0; j < table[m].length; j += 1) {
      if (table[m][j] === i) continue;
      if (visited[i][table[m][j]]) continue;

      visited[i][table[m][j]] = visited[i][m] + 1;
      queue.push(...table[m]);
    }
  }

  const sum = visited[i].reduce((p, c) => p + c);
  if (sum < min) {
    min = sum;
    minNumber = i;
  }
}

console.log(minNumber);
