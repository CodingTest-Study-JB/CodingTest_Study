// 배열을 활용하여 서로 다른 값의 개수를 찾는 문제
const input = require('fs').readFileSync("/dev/stdin").toString().trim().split("\n").map(v => +v);

// 1000 크기의 배열을 선언 후 0으로 채움 
let arr = new Array(1000).fill(0);

for (let i = 0; i < 10; i++) {
    // 각 배열에 나머지 값을 인덱스로 찾아 1을 넣어줌
    arr[(input[i]%42)] = 1;
}

let count = 0;

for (let i  = 0; i < arr.length; i++) {
    // 인덱스가 1인, 즉 나머지 값의 종류 세기
    if (arr[i] == 1) {
        count++;
    }
}

console.log(count);