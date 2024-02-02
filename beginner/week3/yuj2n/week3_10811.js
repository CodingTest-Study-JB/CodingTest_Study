// 배열을 뒤집는 문제(1차 시도)
// const input = require('fs').readFileSync("/dev/stdin").trim().split("\n");

// const [N, M] = input[0].split(" ").map(v => +v);

// let arr = new Array(N);

// for (let i = 0; i < N; i++) {
//     arr[i] = i+1;
// }

// let save = 0;

// for (let a = 1; a <= M; a++) {
//     const [i, j] = input[a].split(" ").map(v => +v);
//     for (i; i < j-i+1; i++) {
//         save = arr[i-1];
//         arr[i-1] = arr[j-1];
//         arr[j-1] = save;
//     }
// }

// console.log(arr.join(" "));

// 1 2 -> 2 1
// 1 2 3 -> 3 2 1

// 1 2 3 4 5

// 검색 후 2차 시도
const fs = require("fs");

const input = fs.readFileSync("/dev/stdin").toString().split("\n");
const [N, M] = input[0].split(" ").map(Number);
let basket = Array(N)
  .fill(1)
  .map((a, b) => a + b);

for (let i = 1; i <= M; i++) {
  let [a, b] = input[i].split(" ").map(Number);
  let arr = [];

  for (let j = a - 1; j < b; j++) {
    arr.push(basket[j]);
  }

  arr.reverse();
  basket.splice(a - 1, b - a + 1, ...arr);
}

console.log(basket.join(" "));