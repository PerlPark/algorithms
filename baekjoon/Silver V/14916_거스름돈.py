"""
 *  BAEKJOON ONLINE JUDGE
 *  https://www.acmicpc.net/problem/14916
 *
 *  Title: 거스름돈
 *  Algorithm: 수학, 다이나믹 프로그래밍, 그리디 알고리즘
"""

import math

n = int(input())

count5 = math.trunc(n / 5)
divideNby5 = n - (5 * count5)

while divideNby5 % 2 > 0 and count5 > 0:
    count5 -= 1
    divideNby5 = n - (5 * count5)

count2 = divideNby5 / 2

if count2 % 1 > 0:
    print(-1)
else:
    print(math.trunc(count5 + count2))
