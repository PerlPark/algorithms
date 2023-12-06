/**
 *  BAEKJOON ONLINE JUDGE
 *  https://www.acmicpc.net/problem/1193
 *
 *  Title: 분수찾기
 *  Algorithm: 수학, 구현
 */

let n = +`${require('fs').readFileSync('/dev/stdin')}`.trim();

const sqrt = Math.ceil(Math.max((-1 + Math.sqrt(1 + 4 * 2 * n)) / 2, (-1 - Math.sqrt(1 + 4 * 2 * n)) / 2));
const s = (sqrt * sqrt + sqrt) / 2;
const start = s - sqrt + 1;
const m = n - start + 1;

if (sqrt % 2) {
  console.log(`${sqrt - m + 1}/${m}`);
} else {
  console.log(`${m}/${sqrt - m + 1}`);
}

/**
 * 1 1/1
 *
 * 2 1/2
 * 3 2/1
 *
 * 4 3/1
 * 5 2/2
 * 6 1/3
 *
 * 7 1/4
 * 8 2/3
 * 9 3/2
 * 10 4/1
 *
 * 11 5/1
 * 12 4/2
 * 13 3/3
 * 14 2/4
 * 15 1/5
 *
 * 16 1/6
 * 17 2/5
 * 18 3/4
 * 19 4/3
 * 20 5/2
 * 21 6/1
 */
