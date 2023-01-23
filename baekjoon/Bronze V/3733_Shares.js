/**
 *  BAEKJOON ONLINE JUDGE
 *  https://www.acmicpc.net/problem/3733
 */

let answer='';
const arr = require('fs').readFileSync('/dev/stdin').toString().trim().split(/\s/);
while(arr.length){answer=Math.floor(arr.pop()/(+arr.pop()+1))+'\n'+answer}
console.log(answer);