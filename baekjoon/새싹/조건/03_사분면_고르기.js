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

  const location = [];

  rl.on('line', (line) => {
    location.push(Number(line));
  });

  rl.on('close', () => {
    const [x, y] = location;
    if (x > 0 && y > 0) {
      console.log('1');
    }
    if (x > 0 && y < 0) {
      console.log('4');
    }
    if (x < 0 && y > 0) {
      console.log('2');
    }
    if (x < 0 && y < 0) {
      console.log('3');
    }
    process.exit();
  });
}
