let [n, m, k, ...strings] = `${require('fs').readFileSync('/dev/stdin')}`.trim().split(/\s/);

const sortAlphabet = (string) => string.split("").sort().join("");

const sorted = strings.map(string => sortAlphabet(string));
sorted.sort((a, b) => a.localeCompare(b));

const joined = sorted.join("").slice(0, k * m);

console.log(joined.split("").sort().join(""));