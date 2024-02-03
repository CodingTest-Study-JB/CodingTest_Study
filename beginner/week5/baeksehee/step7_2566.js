//  최댓값

//    최댓값
//    행 열
//    9 * 9

// const fs = require("fs");
// const input = fs
//   .readFileSync("./txt/step7_2566.txt")
//   .toString()
//   .trim()
//   .split("\n")
//   .map((e) => e.split(" ").map((e) => +e))
//   .toString()
//   .split(",")
//   .map(Number);

// const max = Math.max(...input);
// const index = input.indexOf(max);

// const line = Math.floor(index / 9) + 1;
// const row = (index + 1) % 9;

// console.log(`${max}`);
// console.log(`${line} ${row}`);

//  내 코드 실패! for 문으로 수정

const fs = require("fs");
const input = fs
  .readFileSync("./txt/step7_2566.txt")
  .toString()
  .trim()
  .split("\n")
  .map((e) => e.split(" ").map((e) => Number(e)));

let max = 0;
let result = [];

for (let i = 0; i < input.length; i++) {
  for (let j = 0; j < input[i].length; j++) {
    if (max <= input[i][j]) {
      // = 가 중요하다공?
      max = input[i][j];
      result[0] = i;
      result[1] = j;
    }
  }
}

console.log(max);
console.log(`${result[0] + 1} ${result[1] + 1}`);
