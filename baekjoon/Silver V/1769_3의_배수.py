"""
 *  BAEKJOON ONLINE JUDGE
 *  https://www.acmicpc.net/problem/1769
 *
 *  Title: 3의 배수
 *  Algorithm: 수학, 구현, 문자열
"""

numbers = list(input())
count = 0

while len(numbers) > 1:
    numbers = list(str(sum(map(int, numbers))))
    count += 1

print(count)
print("NO" if int(numbers[0]) % 3 > 0 else "YES")
