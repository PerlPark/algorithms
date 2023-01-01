/**
 *  BAEKJOON ONLINE JUDGE
 *  https://www.acmicpc.net/problem/1008
 */

{
  const readline = require('readline');

  const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdin,
  });

  rl.on('line', (line: string) => {
    const [a, b, c] = line.split(' ').map((num) => parseInt(num));
    console.log(a + b + c);
    rl.close();
  });

  rl.on('close', () => {
    process.exit();
  });
}
