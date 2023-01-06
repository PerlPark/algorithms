/**
 *  BAEKJOON ONLINE JUDGE
 *  https://www.acmicpc.net/problem/2741
 */

{
  const length = +(require('fs').readFileSync('/dev/stdin').toString().trim());
  console.log(new Array(length).fill('').reduce((prev, _, idx) => {
    return idx + 1 < length ? `${prev}${idx + 1}\n` : `${prev}${idx + 1}`;
  }, ''));
}