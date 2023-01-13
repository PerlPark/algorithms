/**
 *  BAEKJOON ONLINE JUDGE
 *  https://www.acmicpc.net/problem/5597
 */

const submitter = require('fs').readFileSync('/dev/stdin').toString().trim().split(/\s/);
const students = Array.from({length: 30}, (_, i) => String(i + 1));
console.log(students.filter((x) => !submitter.includes(x)).join("\n"));