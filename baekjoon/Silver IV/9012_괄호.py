"""
 *  BAEKJOON ONLINE JUDGE
 *  https://www.acmicpc.net/problem/9012
"""

import sys

T = int(sys.stdin.readline())
data = sys.stdin.readlines()

for brackets in data:
    left = []
    answer = ""

    for b in brackets:
        if b == "(":
            left.append(b)
        elif b == ")":
            if len(left) == 0:
                answer = "NO"
                break

            left.pop()

    if answer != "":
        print(answer)
        continue

    if len(left) > 0:
        answer = "NO"
    else:
        answer = "YES"
    print(answer)
