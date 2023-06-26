"""
 *  BAEKJOON ONLINE JUDGE
 *  https://www.acmicpc.net/problem/11651
"""

N = int(input())
answer = []

for i in range(N):
    x, y = map(int, input().strip().split())
    answer.append((x, y))

answer.sort(key=lambda x:(x[1],x[0]))

for i in range(N):
    print(answer[i][0], answer[i][1])
