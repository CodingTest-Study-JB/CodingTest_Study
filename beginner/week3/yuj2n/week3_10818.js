// 최솟값과 최댓값을 찾는 문제
const input = require('fs').readFileSync("/dev/stdin").toString().trim().split("\n");
const N = Number(input[0]);
const arr = input[1].split(" ");

let max = Number(arr[0]);
let min = Number(arr[0]);

for (let i = 0; i < N; i++) {
    // 숫자간 값 비교 시 Number형으로의 형변환 필수
    if (Number(arr[i]) > max) {
        max = arr[i];
    }

    if (Number(arr[i]) < min) {
        min = arr[i];
    }
}

console.log(min + " " + max);