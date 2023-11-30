"""
 *  BAEKJOON ONLINE JUDGE
 *  https://www.acmicpc.net/problem/11383
 *
 *  Title: 뚊
 *  Algorithm: 구현, 문자열
"""

n, m = input().split(" ")

compare = []
result = "Eyfa"


def multiple(s):
    return s * 2


for i in range(int(n)):
    string = list(map(multiple, list(input())))
    compare.append("".join(string))

for i in range(int(n)):
    double = input()

    if compare[i] != double:
        result = "Not Eyfa"
        break

print(result)
