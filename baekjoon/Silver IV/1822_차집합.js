/**
 *  BAEKJOON ONLINE JUDGE
 *  https://www.acmicpc.net/problem/1822
 *
 *  Title: 차집합
 *  Algorithm: 자료 구조, 정렬, 해시를 사용한 집합과 맵, 트리를 사용한 집합과 맵
 */

let [_, a, b] = `${require('fs').readFileSync('/dev/stdin')}`.trim().split(/\n/);

a = a.split(' ').map(Number);
a.sort((a, b) => a - b);
a = new Set(a);

b = b.split(' ').map(Number);
b.sort((a, b) => a - b);
b = new Set(b);

for (n of a) {
  if (b.has(n)) {
    a.delete(n);
  }
}

console.log(a.size && a.size + '\n' + [...a].join(' '));
