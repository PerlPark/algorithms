/**
 *  BAEKJOON ONLINE JUDGE
 *  https://www.acmicpc.net/problem/9498
 */

{
  const readline = require('readline');

  const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdin,
  });

  rl.on('line', (line: string) => {
    const score = parseInt(line);
    if (score > 89) {
      console.log('A');
    } else if (score > 79) {
      console.log('B');
    } else if (score > 69) {
      console.log('C');
    } else if (score > 59) {
      console.log('D');
    } else {
      console.log('F');
    }
    rl.close();
  });

  rl.on('close', () => {
    process.exit();
  });
}
