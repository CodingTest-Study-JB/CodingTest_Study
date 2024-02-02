// trim()을 쓰면 런타임 에러
const input = require('fs').readFileSync('/dev/stdin').toString().split('\n');

const word = input[0];
const num = Number(input[1]);

console.log(word[num-1]);