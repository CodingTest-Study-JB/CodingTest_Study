//  10진수를 바꿔주는 메서드 검색해봄
const fs = require("fs");
const input = fs
  .readFileSync("./txt/step8_2745.txt")
  .toString()
  .trim()
  .split(" ");

let [str, n] = input;
console.log(parseInt(str, n));
