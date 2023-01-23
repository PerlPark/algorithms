/**
 *  BAEKJOON ONLINE JUDGE
 *  https://www.acmicpc.net/problem/4101
 */

const arr = `${require('fs').readFileSync('/dev/stdin')}`.trim().split(/\s/);
while(arr.length - 2) {
    console.log(+arr.shift() > +arr.shift() ? 'Yes' : 'No');
}