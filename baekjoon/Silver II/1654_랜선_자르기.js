/**
 *  BAEKJOON ONLINE JUDGE
 *  https://www.acmicpc.net/problem/1654
 *
 *  Title: 랜선 자르기
 *  Algorithm: 이분 탐색, 매개 변수 탐색
 */

let [_, n, ...cables] = `${require('fs').readFileSync('/dev/stdin')}`.trim().split(/\s/).map(Number);

let max = Math.max(...cables);
let min = 1;

while (min <= max) {
  let mid = parseInt((max + min) / 2);
  if (getPieces(mid) >= n) {
    min = mid + 1;
  } else {
    max = mid - 1;
  }
}

console.log(max);

// 중앙값으로 나눈 개수가 n보다 큰지 작은지 확인
function getPieces(mid) {
  return cables.reduce((prev, curr) => prev + parseInt(curr / mid), 0);
}
