/**
 *  BAEKJOON ONLINE JUDGE
 *  https://www.acmicpc.net/problem/15904
 *
 *  Title: UCPC는 무엇의 약자일까?
 *  Algorithm: 그리디 알고리즘, 문자열
 */

let string = `${require('fs').readFileSync('/dev/stdin')}`.trim();

const abbr = ['U', 'C', 'P', 'C'];

for (let i = 0; i < 4; i += 1) {
  const alphaIdx = string.indexOf(abbr[i]);

  if (alphaIdx === -1) {
    console.log('I hate UCPC');
    return;
  }

  string = string.slice(alphaIdx);
}

console.log('I love UCPC');
