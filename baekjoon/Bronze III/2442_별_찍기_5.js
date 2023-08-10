const n = +`${require('fs').readFileSync('/dev/stdin')}`.trim();

for (let i = 0; i < n; i+=1) {
    console.log(('*'+'*'.repeat(i*2)).padStart(n+i, ' '));
}
