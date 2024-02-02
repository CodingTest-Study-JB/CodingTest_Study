let input = require('fs').readFileSync('dev/stdin').toString().trim().split(" ");

// 빈 문자열일 경우 0을 반환해주는 처리 필요
console.log(input[0] === "" ? 0 : input.length);