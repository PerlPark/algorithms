/**
 *  BAEKJOON ONLINE JUDGE
 *  https://www.acmicpc.net/problem/17478
 *
 *  Title: 재귀함수가 뭔가요?
 *  Algorithm: 구현, 재귀
 */

const N = +`${require('fs').readFileSync('/dev/stdin')}`.trim();

console.log('어느 한 컴퓨터공학과 학생이 유명한 교수님을 찾아가 물었다.');

function recursive(n) {
  let line = '';
  if (n === N) {
    line += '____'.repeat(n) + '"재귀함수가 뭔가요?"\n';
    line += '____'.repeat(n) + '"재귀함수는 자기 자신을 호출하는 함수라네"\n';
  } else {
    line += '____'.repeat(n) + '"재귀함수가 뭔가요?"\n';
    line += '____'.repeat(n) + '"잘 들어보게. 옛날옛날 한 산 꼭대기에 이세상 모든 지식을 통달한 선인이 있었어.\n';
    line += '____'.repeat(n) + '마을 사람들은 모두 그 선인에게 수많은 질문을 했고, 모두 지혜롭게 대답해 주었지.\n';
    line +=
      '____'.repeat(n) + '그의 답은 대부분 옳았다고 하네. 그런데 어느 날, 그 선인에게 한 선비가 찾아와서 물었어."\n';
    line += recursive(n + 1);
  }
  line += '____'.repeat(n) + '라고 답변하였지.\n';
  return line;
}

console.log(recursive(0));
