const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');

const N = +input[0];
const str = input[1];
let sum = 0;

for (let i = 0; i < N; i++) {
    sum += Number(str[i]);
}

console.log(sum);