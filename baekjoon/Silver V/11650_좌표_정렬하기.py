"""
 *  BAEKJOON ONLINE JUDGE
 *  https://www.acmicpc.net/problem/11650
"""

N = int(input())
answer = []

for i in range(N):
    x, y = map(int, input().strip().split())
    answer.append((x, y))

answer.sort(key=lambda x:(x[0],x[1]))

for i in range(N):
    print(answer[i][0], answer[i][1])
