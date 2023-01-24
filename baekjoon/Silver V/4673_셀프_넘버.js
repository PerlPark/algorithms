/**
 *  BAEKJOON ONLINE JUDGE
 *  https://www.acmicpc.net/problem/4673
 */

const selfNumbers = Array.from({ length: 10000 }, (_, i) => i + 1);
let n = 1;

function removeOne(n) {
  const idx = selfNumbers.indexOf(n);
  if (idx > -1) {
    selfNumbers.splice(idx, 1);
  }
}

while (n < 10000) {
  const dn = n + `${n}`.split('').reduce((p, c) => p + parseInt(c), 0);
  removeOne(dn);
  n++;
}

console.log(selfNumbers.join('\n'));
