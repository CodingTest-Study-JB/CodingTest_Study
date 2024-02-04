//  행렬 덧셈

//  내 코드 1 -> 틀림!
const fs = require("fs");
const input = fs
  .readFileSync("./txt/step7_2738.txt")
  .toString()
  .trim()
  .split("\n")
  .map((e) => e.trim().split(" "));

let line = parseInt(input[0][0]); // 행
let row = parseInt(input[0][1]); //열
let answer = [];

for (let i = 1; i <= line; i++) {
  for (let j = 0; j < row; j++) {
    answer.push(parseInt(input[i][j]) + parseInt(input[i + line][j]));
  }
}

console.log(answer);

// for (let i = 0; i <= line * row; i = i + row) {
//   let result = answer.slice(i, i + row).join(" ");
//   console.log(result);
// }

// 다른 사람 참고해서 고친 코드
//  (알고보니 윗 코드도 맞음 console.log 잘 못 찍어서 틀렸었음)
//  공부기록/자바스크립트 코딩테스트
//  백준/JS 2738 행렬 덧셈
//  2022. 6. 15. 22:48

// const fs = require("fs");
// const input = fs
//   .readFileSync("./txt/step7_2738.txt")
//   .toString()
//   .trim()
//   .split("\n")
//   .map((e) =>
//     e
//       .trim()
//       .split(" ")
//       .map((x) => +x)
//   );

// const [line, row] = input.shift(); // shift()부분이 좋았음

// let answer = [];

// for (let i = 0; i < line; i++) {
//   for (let j = 0; j < row; j++) {
//     answer.push(parseInt(input[i][j]) + parseInt(input[i + line][j]));
//   }
// }

// for (let i = 0; i <= line * row; i = i + row) {
//   let result = answer.slice(i, i + row).join(" ");
//   console.log(result);
// }
