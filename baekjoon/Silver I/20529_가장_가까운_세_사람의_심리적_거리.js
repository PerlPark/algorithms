/**
 *  BAEKJOON ONLINE JUDGE
 *  https://www.acmicpc.net/problem/20529
 *
 *  Title: 가장 가까운 세 사람의 심리적 거리
 *  Algorithm: 브루트포스 알고리즘, 비둘기집 원리
 */

let [t, ...tests] = `${require('fs').readFileSync('/dev/stdin')}`.trim().split(/\n/);

const getDifference = (a, b) => {
  let value = 0;

  if (a[0] !== b[0]) value += 1;
  if (a[1] !== b[1]) value += 1;
  if (a[2] !== b[2]) value += 1;
  if (a[3] !== b[3]) value += 1;

  return value;
};

const getMinDistance = (n, mbti) => {
  let min = Infinity;

  for (let a = 0; a < n; a += 1) {
    for (let b = 0; b < n; b += 1) {
      // 같은 사람인 경우
      if (a === b) continue;

      const ab = mbti[a] === mbti[b] ? 0 : getDifference(mbti[a], mbti[b]);

      for (let c = 0; c < n; c += 1) {
        // 같은 사람인 경우
        if (a === c || b === c) continue;

        const bc = mbti[b] === mbti[c] ? 0 : getDifference(mbti[b], mbti[c]);
        const ac = mbti[a] === mbti[c] ? 0 : getDifference(mbti[a], mbti[c]);

        const currMin = ab + bc + ac;
        if (min > currMin) min = currMin;
      }
    }
  }

  return min;
};

for (let i = 0; i < +t; i += 1) {
  const n = Number(tests[i * 2]);
  const mbti = tests[i * 2 + 1].split(' ');

  if (n > 32) {
    console.log(0);
  } else {
    console.log(getMinDistance(n, mbti));
  }
}
