"""
 *  BAEKJOON ONLINE JUDGE
 *  https://www.acmicpc.net/problem/2193
 *
 *  Title: 이친수
 *  Algorithm: 다이나믹 프로그래밍
"""

n = int(input())

pinary = [0, 1, 1, 2, 3, 5]

if (len(pinary) <= n):
  for i in range(5, n):
    pinary.append(pinary[i] + pinary[i-1])

print(pinary[n])
