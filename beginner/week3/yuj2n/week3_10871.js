// 배열을 입력받고 X보다 작은 수를 찾는 문제
const fs = require('fs');
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

const arr = input[0].split(" ");
// Number형으로 변환해주어야 제대로 동작
const N = Number(arr[0]);
const X = Number(arr[1]);
// 배열 선언 줄을 반복문 안에 넣었더니 무한 루프 또는 1퍼에서 계속 멈춤..
let A = input[1].split(" ");
let B = "";

for (let i = 0; i < N; i++) {
    if (A[i] < X) {
        B += A[i] + " ";
    }
}

console.log(B);