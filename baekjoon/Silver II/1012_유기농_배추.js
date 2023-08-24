const input = `${require('fs').readFileSync('./test.txt')}`.trim().split(/\n/);
const t = parseInt(input.shift());
let answer = '';

function exploreGraph(field, x, y, count) {
    const queue = [[x, y]];

    while (queue.length) {
        const [curX, curY] = queue.shift();

        const isValidPosition = curX < 0 || curX >= field.length || curY < 0 || curY >= field[0].length;
        if (isValidPosition || field[curX][curY] !== 1) continue;

        field[curX][curY] = count;
        queue.push([curX + 1, curY], [curX - 1, curY], [curX, curY + 1], [curX, curY - 1]);
    }
}

function solveTest(m, n, k) {
    const field = Array.from({length: m}, () => new Array(n).fill(0));

    for (let j = 1; j <= k; j += 1) {
        const [x, y] = input.shift().split(" ").map(Number);
        field[x][y] = 1;
    }

    let count = 1;
    for (let x = 0; x < m; x += 1) {
        for (let y = 0; y < n; y += 1) {
            if (field[x][y] === 1) {
                exploreGraph(field, x, y, ++count);
            }
        }
    }
    return count - 1;
}

while (input.length) {
    const [m, n, k] = input.shift().split(' ').map(Number);
    answer += solveTest(m, n, k) + "\n";
}

console.log(answer);