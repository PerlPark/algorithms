/**
 *  BAEKJOON ONLINE JUDGE
 *  https://www.acmicpc.net/problem/7785
 *
 *  Title: 회사에 있는 사람
 *  Algorithm: 자료 구조, 해시를 사용한 집합과 맵
 */

const [n, ...logs] = `${require('fs').readFileSync('/dev/stdin')}`.trim().split(/\n/);
const set = new Set();

for (let i = 0; i < n; i += 1) {
  const [name, log] = logs[i].split(' ');
  if (log === 'enter') {
    set.add(name);
  }
  if (log === 'leave') {
    set.delete(name);
  }
}

const rest = [...set];
rest.sort().reverse();

console.log(rest.join('\n'));
