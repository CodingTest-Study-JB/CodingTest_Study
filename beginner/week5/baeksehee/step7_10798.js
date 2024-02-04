//  세로 읽기
//  틀린 코드

// const fs = require("fs");
// const input = fs
//   .readFileSync("./txt/step7_10798.txt")
//   .toString()
//   .trim()
//   .split("\r\n")
//   .map((line) => line.split(""));

// let result = [];
// let maxRow = input[0].length;

// for (let i = 0; i < maxRow; i++) {
//   for (let j = 0; j < 5; j++) {
//     if (input[j].length > i) result.push(input[j][i]);
//   }
// }

// console.log(result.join(""));

// 수정 코드
const fs = require("fs");
const input = fs
  .readFileSync("./txt/step7_10798.txt")
  .toString()
  .trim()
  .split("\n") // \r 삭제
  .map((line) => line.split(""));

let rowArray = input.map((e) => e.length);
let result = [];
let maxRow = Math.max(...rowArray); // 1번째 코드의 행마다 최대 길이를 첫 번째 행의 기준으로 고정해버려서 틀림

for (let i = 0; i < maxRow; i++) {
  for (let j = 0; j < 5; j++) {
    if (input[j].length > i) result.push(input[j][i]);
  }
}

console.log(result.join(""));
