/**
 *  BAEKJOON ONLINE JUDGE
 *  https://www.acmicpc.net/problem/1259
 */

const n = `${require('fs').readFileSync('/dev/stdin')}`.trim().split(/\n/);

for (let i = 0; i < n.length - 1; i++) {
  const r = n[i].split('').reverse().join('');

  if (n[i] === r) {
    console.log('yes');
  } else {
    console.log('no');
  }
}
