/**
 *  BAEKJOON ONLINE JUDGE
 *  https://www.acmicpc.net/problem/17266
 */

let [road, _, lights] = `${require('fs').readFileSync('/dev/stdin')}`.trim().split(/\n/);
lights = lights.split(' ').map(Number);

let startDist = lights[0];
let endDist = +road - lights[lights.length - 1];

let max = Math.max(startDist, endDist);
let prev = lights.shift();
let next;

while (lights.length) {
  next = lights.shift();
  max = Math.max(max, Math.ceil(Math.abs(prev - next) / 2));
  prev = next;
}

console.log(max);
