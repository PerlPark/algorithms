/**
 *  BAEKJOON ONLINE JUDGE
 *  https://www.acmicpc.net/problem/11286
 *
 *  Title: 절댓값 힙
 *  Algorithm: 자료 구조, 우선순위 큐
 */

const [n, ...inputs] = `${require('fs').readFileSync('/dev/stdin')}`.trim().split(/\s/).map(Number);
const max = 2147483648;

class Heap {
  constructor() {
    this.heap = [0];
  }

  swipe(val, curr, target) {
    this.heap[curr] = this.heap[target];
    this.heap[target] = val;
  }

  add(n) {
    this.heap.push(n);
    let currentIdx = this.heap.length - 1;
    let parentIdx = Math.floor(currentIdx / 2);

    // 부모보다 작은 수일 경우 자리 교체
    while (
      Math.abs(this.heap[currentIdx]) < Math.abs(this.heap[parentIdx]) ||
      (Math.abs(this.heap[currentIdx]) === Math.abs(this.heap[parentIdx]) &&
        this.heap[currentIdx] < this.heap[parentIdx])
    ) {
      this.swipe(n, currentIdx, parentIdx);
      currentIdx = parentIdx;
      parentIdx = Math.floor(currentIdx / 2);
    }
  }

  delete() {
    if (this.heap.length === 1) return 0;

    const root = this.heap[1];
    const current = this.heap.pop();
    if (this.heap.length === 1) return root;

    this.heap[1] = current;
    let currentIdx = 1;

    // 자식보다 큰 수일 경우, 두 자식 중에 작은 수와 자리 교체
    let leftChild = this.heap[currentIdx * 2] || max;
    let rightChild = this.heap[currentIdx * 2 + 1] || max;

    while (
      Math.min(Math.abs(leftChild), Math.abs(rightChild)) < Math.abs(current) ||
      (Math.min(Math.abs(leftChild), Math.abs(rightChild)) === Math.abs(current) &&
        Math.min(leftChild, rightChild) < current)
    ) {
      const childIdx =
        Math.abs(leftChild) < Math.abs(rightChild)
          ? currentIdx * 2
          : Math.abs(leftChild) === Math.abs(rightChild) && leftChild < rightChild
          ? currentIdx * 2
          : currentIdx * 2 + 1;

      this.swipe(current, currentIdx, childIdx);
      currentIdx = childIdx;
      leftChild = this.heap[currentIdx * 2] || max;
      rightChild = this.heap[currentIdx * 2 + 1] || max;
    }

    return root;
  }
}

const heap = new Heap();
let answer = '';

for (let i = 0; i < n; i += 1) {
  if (inputs[i] === 0) {
    answer += heap.delete() + '\n';
  } else {
    heap.add(inputs[i]);
  }
}
console.log(answer);
