"""
 *  BAEKJOON ONLINE JUDGE
 *  https://www.acmicpc.net/problem/11866
"""

N, K = map(int, input().split(" "))

numbers = list(range(N, 0, -1))
count = 1
answer = []
queue = []

while len(answer) < N:
    queue.append(numbers.pop())

    if count % K == 0:
        answer.append(queue.pop())

    if not numbers:
        numbers = sorted(queue, reverse=True)
        queue = []

    count += 1

print("<", ", ".join(map(str, answer)), ">", sep="")
