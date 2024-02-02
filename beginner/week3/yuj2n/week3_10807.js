// 배열을 입력받고 v를 찾는 문제
const fs = require('fs');
const input = fs.readFileSync("/dev/stdin").toString().trim().trim().split("\n");

const N = +input[0];
let counter = 0;

for (let i = 0; i < N; i++) {
    let arr = input[1].split(" ");
    if (arr[i] == input[2]) {
        counter++;
    }
}

console.log(counter);
