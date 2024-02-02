// toString()이후에 trim() 사용
const input = require('fs').readFileSync('/dev/stdin').toString().trim();

const word = input;

console.log(word.length);