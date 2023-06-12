"""
 *  BAEKJOON ONLINE JUDGE
 *  https://www.acmicpc.net/problem/1110
"""

origin_number = int(input())

sum = origin_number
count = 0

left_number = 0 if sum < 10 else int(str(sum)[0])
right_number = sum if sum < 10 else int(str(sum)[1])

while True:
    sum = left_number + right_number
    left_number = right_number
    if (sum < 10):
        right_number = sum
    else:
        right_number = int(str(sum)[1])
    
    count = count + 1

    if (int(str(left_number)+str(right_number)) == origin_number):
        print(count)
        break