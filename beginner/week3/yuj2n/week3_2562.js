// 최댓값이 어디에 있는지 찾는 문제
const input = require('fs').readFileSync("/dev/stdin").toString().trim().split("\n");

// 변수인 경우 const가 아닌 let 사용 필수!!
let max = +input[0];
let N = 0;

for (let i = 0; i < 9; i++) {
    if (Number(input[i]) > max) {
        max = +input[i];
        N = i;
    }
}

console.log(max);
console.log(N + 1);
