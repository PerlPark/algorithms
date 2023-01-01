/**
 *  BAEKJOON ONLINE JUDGE
 *  https://www.acmicpc.net/problem/10998
 */

{
  const readline = require('readline');

  const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdin,
  });

  rl.on('line', (line: string) => {
    const a = parseInt(line[0]);
    const b = parseInt(line[2]);
    console.log(a * b);
    rl.close();
  });

  rl.on('close', () => {
    process.exit();
  });
}
