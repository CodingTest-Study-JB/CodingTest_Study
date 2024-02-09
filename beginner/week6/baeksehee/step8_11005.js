const fs = require("fs");
const input = fs
  .readFileSync("./txt/step8_11005.txt")
  .toString()
  .trim()
  .split(" ");

const [num, n] = input.map(Number);

console.log(num.toString(n).toUpperCase());
