/**
 *  BAEKJOON ONLINE JUDGE
 *  https://www.acmicpc.net/problem/3003
 */

const set = [1,1,2,2,2,8];
process.stdin.on('data',d=>console.log(d.toString().split(' ').map((v,i)=>set[i]-v).join(' ')));