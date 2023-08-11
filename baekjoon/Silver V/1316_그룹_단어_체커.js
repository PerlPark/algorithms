const [n, ...words] = `${require('fs').readFileSync('/dev/stdin')}`.trim().split(/\n/);

let count = 0;

function isGroupWord(word) {
    let current;
    const checked = [];

    for (let i = 0; i < word.length; i += 1) {
        if (current === word[i]) continue;

        if (checked.includes(word[i])) return false;

        current = word[i];
        checked.push(word[i]);
    }
    return true;
}

for (let i = 0; i < +n; i += 1) {
    if (isGroupWord(words[i])) {
        count += 1;
    }
}

console.log(count);

