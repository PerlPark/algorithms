"""
 *  BAEKJOON ONLINE JUDGE
 *  https://www.acmicpc.net/problem/21736
 *
 *  Title: 헌내기는 친구가 필요해
 *  Algorithm: 그래프 이론, 그래프 탐색, 너비 우선 탐색, 깊이 우선 탐색
"""

import sys
import math

n, m = map(int, sys.stdin.readline().split(" "))
map = []
for i in range(n):
    map.append(list(sys.stdin.readline().strip()))
queue = []
count = 0

# 도연이의 위치 얻기
for i in range(n * m):
    x, y = [math.trunc(i / m), i % m]
    if map[x][y] == "I":
        queue.append([x, y])
        break

# bfs - 사람 만나면 count 증가
while len(queue) > 0:
    x, y = queue.pop(0)

    for nx, ny in [[x - 1, y], [x + 1, y], [x, y - 1], [x, y + 1]]:
        if nx < 0 or nx >= n or ny < 0 or ny >= m:
            continue

        if map[nx][ny] == "O":
            queue.append([nx, ny])
            map[nx][ny] = "-"
        elif map[nx][ny] == "P":
            queue.append([nx, ny])
            map[nx][ny] = "-"
            count += 1

print(count if count > 0 else "TT")
