//  색종이

const fs = require("fs");
const input = fs
  .readFileSync("./txt/step7_2563.txt")
  .toString()
  .trim()
  .split("\r\n");

let arr = [];

for (let i = 1; i < input.length; i++) {
  let [left, under] = input[i].split(" ").map(Number);
  for (let j = left; j < left + 10; j++) {
    for (let k = under; k < under + 10; k++) {
      let a = [j, k].join(" ");
      if (!arr.includes(a)) arr.push(a);
    }
  }
}

console.log(arr.length);
