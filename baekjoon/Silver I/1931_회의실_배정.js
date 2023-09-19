/**
 *  BAEKJOON ONLINE JUDGE
 *  https://www.acmicpc.net/problem/1931
 */

let [n, ...times] = `${require('fs').readFileSync('/dev/stdin')}`.trim().split(/\n/);

times = times.map((t) => t.split(' ').map(Number));

times.sort((a, b) => {
  const [aStart, aEnd] = a;
  const [bStart, bEnd] = b;

  return aEnd - bEnd || aStart - bStart;
});

const selected = [times[0]];

for (let i = 1; i < n; i += 1) {
  const lastSelected = selected[selected.length - 1];

  if (lastSelected[1] <= times[i][0]) {
    selected.push(times[i]);
  }
}

console.log(selected.length);
