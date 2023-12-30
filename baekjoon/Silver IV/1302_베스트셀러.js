/**
 *  BAEKJOON ONLINE JUDGE
 *  https://www.acmicpc.net/problem/1302
 *
 *  Title: 베스트셀러
 *  Algorithm: 자료 구조, 문자열, 정렬, 해시를 사용한 집합과 맵
 */

const [n, ...sales] = `${require('fs').readFileSync('/dev/stdin')}`.trim().split(/\n/);

const saller = new Map();

for (let i = 0; i < +n; i += 1) {
  const book = sales[i];
  saller.set(book, (saller.get(book) || 0) + 1);
}

const rank = [...saller];
rank.sort((a, b) => a[0].localeCompare(b[0]));
rank.sort((a, b) => b[1] - a[1]);

console.log(rank[0][0]);
