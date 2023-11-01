/**
 *  BAEKJOON ONLINE JUDGE
 *  https://www.acmicpc.net/problem/25206
 *
 *  Title: 너의 평점은
 *  Algorithm: 수학, 구현, 문자열
 */

const scores = `${require('fs').readFileSync('./dev/stdin')}`.trim().split('\n');

const grades = {
  'A+': 4.5,
  A0: 4.0,
  'B+': 3.5,
  B0: 3.0,
  'C+': 2.5,
  C0: 2.0,
  'D+': 1.5,
  D0: 1.0,
  F: 0.0
};

let P = 0;

let totalGrade = 0;
let totalMajorGrade = 0;

for (let i = 0; i < scores.length; i += 1) {
  const [_, grade, rating] = scores[i].split(' ');

  if (rating === 'P') {
    P += 1;
    continue;
  }

  totalGrade += Number(grade);
  totalMajorGrade += Number(grade) * grades[rating];
}

console.log((totalMajorGrade / totalGrade).toFixed(6));
