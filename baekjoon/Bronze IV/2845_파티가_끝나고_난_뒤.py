"""
 *  BAEKJOON ONLINE JUDGE
 *  https://www.acmicpc.net/problem/2845
 *
 *  Title: 파티가 끝나고 난 뒤
 *  Algorithm: 수학, 구현, 사칙연산
"""

l, p = map(int, input().split(" "))

peoples = l * p

counts = list(map(int, input().split(" ")))

for i in range(5):
    print(counts[i] - peoples, end=" ")
