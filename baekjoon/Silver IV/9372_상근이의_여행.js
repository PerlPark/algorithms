/**
 *  BAEKJOON ONLINE JUDGE
 *  https://www.acmicpc.net/problem/1158
 */

const [_, ...tests] = `${require("fs").readFileSync("/dev/stdin")}`
  .trim()
  .split(/\n/);

let i = 0;
let answer = "";

while (i < tests.length) {
  const [n, m] = tests[i].split(" ").map(Number);

  answer += n - 1 + "\n";
  i += m + 1;
}

console.log(answer);
