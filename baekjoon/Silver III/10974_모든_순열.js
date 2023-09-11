/**
 *  BAEKJOON ONLINE JUDGE
 *  https://www.acmicpc.net/problem/10974
 */

const n = +require('fs').readFileSync('./test.txt').toString().trim();

let visited = new Array(n + 1).fill(false);
let answer = '';

for (let i = 1; i <= n; i++) {
  dfs(i, []);
  visited[i] = false;
}

function dfs(j, numbers) {
  visited[j] = true;
  numbers.push(j);

  if (numbers.length === n) {
    answer += numbers.join(' ') + '\n';
  }

  for (let k = 1; k <= n; k++) {
    if (!visited[k]) {
      dfs(k, numbers);
      numbers.pop();
    }
  }

  visited[j] = false;
}

console.log(answer);
