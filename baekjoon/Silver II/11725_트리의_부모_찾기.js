/**
 *  BAEKJOON ONLINE JUDGE
 *  https://www.acmicpc.net/problem/11725
 *
 *  Title: 트리의 부모 찾기
 *  Algorithm: 그래프 이론, 그래프 탐색, 트리, 너비 우선 탐색, 깊이 우선 탐색
 */

let [n, ...nodes] = `${require('fs').readFileSync('./test.txt')}`.trim().split(/\s/).map(Number);

// 노드 연결 관계 생성
const connections = Array.from({ length: n }, () => []);

for (let i = 0; i < nodes.length / 2; i += 1) {
  const node1 = nodes[i * 2] - 1;
  const node2 = nodes[i * 2 + 1] - 1;

  connections[node1].push(node2);
  connections[node2].push(node1);
}

// 부모 노드 정보 생성
const parentInfo = new Array(n);
parentInfo[0] = 'root';
getParent(0, connections[0]);

function getParent(nodeNumber, connection) {
  connection.forEach((number) => {
    if (parentInfo[number]) return;

    parentInfo[number] = nodeNumber + 1;
    getParent(number, connections[number]);
  });
}

console.log(parentInfo.slice(1).join('\n'));
