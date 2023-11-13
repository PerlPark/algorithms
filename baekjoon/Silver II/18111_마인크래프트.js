/**
 *  BAEKJOON ONLINE JUDGE
 *  https://www.acmicpc.net/problem/18111
 *
 *  Title: 마인크래프트
 *  Algorithm: 구현, 브루트포스 알고리즘
 */

let [_, __, b, ...ground] = `${require('fs').readFileSync('/dev/stdin')}`.trim().split(/\s/).map(Number);

ground.sort((a, b) => b - a);

const max = ground[0];
const min = ground[ground.length - 1];

let minTime = 64_000_000 * 500;
let maxHeight = 0;

for (let targetHeight = min; targetHeight <= max; targetHeight += 1) {
  const totalTime = sumTime(targetHeight);

  if (minTime >= totalTime) {
    minTime = totalTime;
    maxHeight = Math.max(maxHeight, targetHeight);
  }
}

function sumTime(targetHeight) {
  let time = 0;
  let currentBlockCount = b;

  for (let i = 0; i < ground.length; i += 1) {
    const height = ground[i];

    // 제거하기
    if (height > targetHeight) {
      const gap = height - targetHeight;
      time += gap * 2;
      currentBlockCount += gap;
    }

    // 추가하기
    if (height < targetHeight) {
      const gap = targetHeight - height;
      if (currentBlockCount - gap < 0) {
        time = Infinity;
        break;
      } else {
        time += gap;
        currentBlockCount -= gap;
      }
    }
  }

  return time;
}

console.log(minTime, maxHeight);
