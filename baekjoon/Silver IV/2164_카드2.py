"""
 *  BAEKJOON ONLINE JUDGE
 *  https://www.acmicpc.net/problem/2164
"""

from collections import deque

N = int(input())

deq = deque(range(N, 0, -1))

while len(deq) > 1:
    deq.pop()
    back = deq.pop()
    deq.appendleft(back)

print(deq[0])
