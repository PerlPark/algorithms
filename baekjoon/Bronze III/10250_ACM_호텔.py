"""
 *  BAEKJOON ONLINE JUDGE
 *  https://www.acmicpc.net/problem/10250
"""

import sys

T = int(sys.stdin.readline())

for i in range(T):
    H, W, N = list(map(int, sys.stdin.readline().strip().split()))

    room, floor = divmod(N, H)

    if floor == 0:
        print(str(H) + str(room).zfill(2))
    else:
        print(str(floor) + str(room + 1).zfill(2))
