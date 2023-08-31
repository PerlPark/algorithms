/**
 *  BAEKJOON ONLINE JUDGE
 *  https://www.acmicpc.net/problem/1158
 */

let [n, k] = `${require("fs").readFileSync("/dev/stdin")}`
  .trim()
  .split(" ")
  .map(Number);

const queue = [];
const numbers = Array.from({ length: n }, (_, i) => i + 1);

let i = 1;

while (numbers.length) {
  if (i % k === 0) {
    queue.push(numbers.shift());
  } else {
    numbers.push(numbers.shift());
  }
  i += 1;
}

console.log("<" + queue.join(", ") + ">");
