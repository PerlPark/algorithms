/**
 *  BAEKJOON ONLINE JUDGE
 *  https://www.acmicpc.net/problem/2805
 *
 *  Title: 나무 자르기
 *  Algorithm: 이분 탐색, 매개 변수 탐색
 */

const [_, m, ...trees] = `${require('fs').readFileSync('/dev/stdin')}`.trim().split(/\s/).map(Number);

let max = Math.max(...trees);
let min = 0;

const getRemain = (mid) => {
  return trees.reduce((prev, curr) => {
    if (curr > mid) {
      return prev + curr - mid;
    }
    return prev;
  }, 0);
};

while (min <= max) {
  let mid = parseInt((max + min) / 2);
  if (getRemain(mid) >= m) {
    min = mid + 1;
  } else {
    max = mid - 1;
  }
}

console.log(max);
