/**
 *  BAEKJOON ONLINE JUDGE
 *  https://www.acmicpc.net/problem/2920
 */

const scale = `${require('fs').readFileSync('/dev/stdin')}`.trim();
let answer = '';

const isAscending = (i) => (!answer || answer === 'ascending') && scale[i] == +scale[i - 2] + 1;
const isDescending = (i) => (!answer || answer === 'descending') && scale[i] == +scale[i - 2] - 1;

for (let i = 2; i < scale.length; i = i + 2) {
  if (isAscending(i)) {
    answer = 'ascending';
  } else if (isDescending(i)) {
    answer = 'descending';
  } else {
    answer = 'mixed';
    break;
  }
}

console.log(answer);
