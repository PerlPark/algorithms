/**
 *  PROGRAMMERS SCHOOL
 *  https://school.programmers.co.kr/learn/courses/30/lessons/12909
 */

{
    // 테스트 1 〉	통과 (0.04ms, 33.4MB)
    // 테스트 2 〉	통과 (0.04ms, 33.4MB)
    // 테스트 3 〉	통과 (0.04ms, 31.4MB)
    // 테스트 4 〉	통과 (0.04ms, 31.5MB)
    // 테스트 5 〉	통과 (0.04ms, 33.4MB)
    // 테스트 6 〉	통과 (0.04ms, 33.4MB)
    // 테스트 7 〉	통과 (0.04ms, 33.4MB)
    // 테스트 8 〉	통과 (0.04ms, 33.4MB)
    // 테스트 9 〉	통과 (0.05ms, 33.5MB)
    // 테스트 10 〉	통과 (0.06ms, 33.4MB)
    // 테스트 11 〉	통과 (0.04ms, 33.4MB)
    // 테스트 12 〉	통과 (0.13ms, 33.5MB)
    // 테스트 13 〉	통과 (0.18ms, 33.4MB)
    // 테스트 14 〉	통과 (0.14ms, 33.4MB)
    // 테스트 15 〉	통과 (0.13ms, 33.4MB)
    // 테스트 16 〉	통과 (0.14ms, 33.4MB)
    // 테스트 17 〉	통과 (0.14ms, 33.4MB)
    // 테스트 18 〉	통과 (0.18ms, 33.4MB)
    // 효율성  테스트
    // 테스트 1 〉	통과 (5.20ms, 38.3MB)
    // 테스트 2 〉	통과 (5.21ms, 38.3MB)

    function solution(strings){
        let left = 0;
        
        for (const s of strings) {
            if (s === "(") {
                left++;
            } else {
                if (left > 0) {
                    left--;
                } else {
                    return false;
                }
            }
        }
        
        return left === 0 ? true : false;
    }
}

{
    /* 최고 효율! */
    // 테스트 1 〉	통과 (0.04ms, 33.5MB)
    // 테스트 2 〉	통과 (0.04ms, 33.6MB)
    // 테스트 3 〉	통과 (0.04ms, 33.4MB)
    // 테스트 4 〉	통과 (0.04ms, 33.5MB)
    // 테스트 5 〉	통과 (0.04ms, 33.4MB)
    // 테스트 6 〉	통과 (0.04ms, 33.6MB)
    // 테스트 7 〉	통과 (0.05ms, 33.4MB)
    // 테스트 8 〉	통과 (0.06ms, 33.4MB)
    // 테스트 9 〉	통과 (0.15ms, 33.5MB)
    // 테스트 10 〉	통과 (0.04ms, 33.5MB)
    // 테스트 11 〉	통과 (0.04ms, 33.5MB)
    // 테스트 12 〉	통과 (0.14ms, 33.4MB)
    // 테스트 13 〉	통과 (0.13ms, 33.5MB)
    // 테스트 14 〉	통과 (0.14ms, 33.4MB)
    // 테스트 15 〉	통과 (0.15ms, 33.5MB)
    // 테스트 16 〉	통과 (0.13ms, 33.6MB)
    // 테스트 17 〉	통과 (0.13ms, 33.4MB)
    // 테스트 18 〉	통과 (0.13ms, 33.4MB)
    // 효율성  테스트
    // 테스트 1 〉	통과 (4.12ms, 37.5MB)
    // 테스트 2 〉	통과 (4.15ms, 37.6MB)

    function solution(s){
        const stack = [];
        
        for (let i = 0; i < s.length; i = i + 1) {
            if (s[i] === "(") {
                stack.push(0);
            } else {
                if (stack.length) {
                    stack.pop();
                } else {
                    return false;
                }
            }
        }
        
        return !stack.length ? true : false;
    }
}

{
    // 테스트 1 〉	통과 (0.05ms, 33.4MB)
    // 테스트 2 〉	통과 (0.04ms, 33.4MB)
    // 테스트 3 〉	통과 (0.04ms, 33.4MB)
    // 테스트 4 〉	통과 (0.04ms, 33.5MB)
    // 테스트 5 〉	통과 (0.04ms, 33.5MB)
    // 테스트 6 〉	통과 (0.04ms, 33.6MB)
    // 테스트 7 〉	통과 (0.04ms, 33.4MB)
    // 테스트 8 〉	통과 (0.04ms, 33.5MB)
    // 테스트 9 〉	통과 (0.12ms, 33.4MB)
    // 테스트 10 〉	통과 (0.04ms, 33.5MB)
    // 테스트 11 〉	통과 (0.04ms, 33.5MB)
    // 테스트 12 〉	통과 (0.13ms, 33.4MB)
    // 테스트 13 〉	통과 (0.13ms, 33.4MB)
    // 테스트 14 〉	통과 (0.13ms, 33.4MB)
    // 테스트 15 〉	통과 (0.13ms, 33.5MB)
    // 테스트 16 〉	통과 (0.13ms, 33.5MB)
    // 테스트 17 〉	통과 (0.13ms, 33.5MB)
    // 테스트 18 〉	통과 (0.13ms, 33.5MB)
    // 효율성  테스트
    // 테스트 1 〉	통과 (4.27ms, 37.7MB)
    // 테스트 2 〉	통과 (4.28ms, 37.7MB)

    function solution(s){
        const stack = [];
        
        for (let i = 0; i < s.length; i = i + 1) {
            if (s[i] === "(") {
                stack.push(0);
            } else {
                if (stack.length) {
                    stack.pop();
                } else {
                    return false;
                }
            }
        }
        
        return stack.length === 0 ? true : false;
    }
}

{
    // 테스트 1 〉	통과 (0.05ms, 33.5MB)
    // 테스트 2 〉	통과 (0.04ms, 33.5MB)
    // 테스트 3 〉	통과 (0.04ms, 33.5MB)
    // 테스트 4 〉	통과 (0.05ms, 33.4MB)
    // 테스트 5 〉	통과 (0.06ms, 33.4MB)
    // 테스트 6 〉	통과 (0.06ms, 33.4MB)
    // 테스트 7 〉	통과 (0.06ms, 33.4MB)
    // 테스트 8 〉	통과 (0.05ms, 33.4MB)
    // 테스트 9 〉	통과 (0.05ms, 33.4MB)
    // 테스트 10 〉	통과 (0.05ms, 33.5MB)
    // 테스트 11 〉	통과 (0.05ms, 33.4MB)
    // 테스트 12 〉	통과 (0.14ms, 33.5MB)
    // 테스트 13 〉	통과 (0.14ms, 33.4MB)
    // 테스트 14 〉	통과 (0.14ms, 33.6MB)
    // 테스트 15 〉	통과 (0.14ms, 33.5MB)
    // 테스트 16 〉	통과 (0.14ms, 33.4MB)
    // 테스트 17 〉	통과 (0.14ms, 33.4MB)
    // 테스트 18 〉	통과 (0.16ms, 33.4MB)
    // 효율성  테스트
    // 테스트 1 〉	통과 (6.71ms, 38.5MB)
    // 테스트 2 〉	통과 (6.21ms, 38.2MB)

    function solution(strings){
        const stack = [];
        
        for (const s of strings) {
            if (s === "(") {
                stack.push(0);
            } else {
                if (stack.length) {
                    stack.pop();
                } else {
                    return false;
                }
            }
        }
        
        return !stack.length ? true : false;
    }
}
