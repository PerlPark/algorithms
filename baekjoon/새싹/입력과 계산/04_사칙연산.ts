/**
 *  BAEKJOON ONLINE JUDGE
 *  https://www.acmicpc.net/problem/10869
 */

{
  const readline = require('readline');

  const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdin,
  });

  rl.on('line', (line: string) => {
    const [a, b] = line.split(' ').map((num) => Number(num));
    console.log(a + b);
    console.log(a - b);
    console.log(a * b);
    console.log(Math.trunc(a / b));
    console.log(a % b);
    rl.close();
  });

  rl.on('close', () => {
    process.exit();
  });
}
