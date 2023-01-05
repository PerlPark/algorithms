/**
 *  BAEKJOON ONLINE JUDGE
 *  https://www.acmicpc.net/problem/2753
 */

{
  const readline = require('readline');

  const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdin,
  });

  rl.on('line', (line: string) => {
    const year = parseInt(line);
    console.log(
      (year % 4 === 0 && year % 100 !== 0) || year % 400 === 0 ? 1 : 0
    );
    rl.close();
  });

  rl.on('close', () => {
    process.exit();
  });
}
