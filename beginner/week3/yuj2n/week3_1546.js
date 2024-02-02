// 평균을 조작하는 문제
const input = require('fs').readFileSync("/dev/stdin").toString().trim().split("\n");

const N = input[0] * 1;

const score = input[1].split(" ").map(v => +v);
// M을 for문 안에 선언하면 런타임 에러...(?)
let M = 0;

for (let i = 0; i < N; i++) {
    // 최댓값 구하기
    if (score[i] > M) {
        M = score[i];
    }
}

// 최댓값이 정해진 이후 합을 구해주어야 함.
let sum = 0;
for (let i = 0; i < score.length; i++) {
    sum += score[i]/M*100;
}

console.log(sum/N);