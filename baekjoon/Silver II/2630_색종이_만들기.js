/**
 *  BAEKJOON ONLINE JUDGE
 *  https://www.acmicpc.net/problem/2630
 *
 *  Title: 색종이 만들기
 *  Algorithm: 분할 정복, 재귀
 */

let [_, ...paper] = `${require('fs').readFileSync('/dev/stdin')}`.trim().split(/\s/);
paper = [paper];
const count = { 1: 0, 0: 0 };

let head = 0;

while (head < paper.length) {
  const isCut = paper[head].every((p) => p === paper[head][0]);

  if (isCut) {
    count[paper[head][0]] += 1;
    head += 1;
  } else {
    const cutArr = cut(paper[head++]);
    paper.push(...cutArr);
  }
}

function cut(paper) {
  const n = Math.sqrt(paper.length);
  const m = n / 2;
  const sliced = Array.from({ length: 4 }, () => []);

  for (let i = 0; i < m; i += 1) {
    sliced[0].push(...paper.slice(i * n, i * n + m));
    sliced[1].push(...paper.slice(i * n + m, i * n + m * 2));
    sliced[2].push(...paper.slice(i * n + paper.length / 2, i * n + m + paper.length / 2));
    sliced[3].push(...paper.slice(i * n + m + paper.length / 2, i * n + m * 2 + paper.length / 2));
  }

  return sliced;
}

console.log(count[0]);
console.log(count[1]);
