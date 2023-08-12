const [n, m, ...names] = `${require('fs').readFileSync('/dev/stdin')}`.trim().split(/\s/);

names.sort();

let curr;
const result = names.filter((name) => {
    if (curr === name) {
        return true;
    }
    curr = name;
    return false;
});

console.log(result.length);
console.log(result.join("\n"));