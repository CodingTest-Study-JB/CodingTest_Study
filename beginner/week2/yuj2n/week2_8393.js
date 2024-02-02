// 1부터 N까지의 합을 구하는 문제. 물론 반복문 없이 풀 수도 있습니다.
const fs = require('fs');
const input = fs.readFileSync("/dev/stdin").toString().trim();

let n = input;
let sum = 0;

for (let i = 1; i <= n; i++) {
    sum += i;
}

console.log(sum);