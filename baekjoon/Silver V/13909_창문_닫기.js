/**
 *  BAEKJOON ONLINE JUDGE
 *  https://www.acmicpc.net/problem/13909
 *
 *  Title: 창문 닫기
 *  Algorithm: 수학, 정수론
 */

const n = +`${require('fs').readFileSync('/dev/stdin')}`.trim();

let open = 1;
let windows = 1;
let pointer = 3;

while (windows <= n) {
  windows += pointer;
  pointer += 2;
  open += 1;
}

console.log(open - 1);
