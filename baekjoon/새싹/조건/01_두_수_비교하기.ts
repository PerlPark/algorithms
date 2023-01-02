/**
 *  BAEKJOON ONLINE JUDGE
 *  https://www.acmicpc.net/problem/1330
 */

{
  const readline = require('readline');

  const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdin,
  });

  rl.on('line', (line: string) => {
    const [a, b] = line.split(' ').map((num) => parseInt(num));
    if (a > b) {
      console.log('>');
    }
    if (a < b) {
      console.log('<');
    }
    if (a == b) {
      console.log('==');
    }
    rl.close();
  });

  rl.on('close', () => {
    process.exit();
  });
}
