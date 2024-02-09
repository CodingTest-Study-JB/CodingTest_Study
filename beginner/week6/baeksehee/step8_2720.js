const fs = require("fs");
const input = fs
  .readFileSync("./txt/step8_2720.txt")
  .toString()
  .trim()
  .split("\n")
  .map(Number);

const time = input[0];
const [quarter, dime, nickel, penny] = [25, 10, 5, 1];

for (let i = 1; i < time + 1; i++) {
  let q = input[i] / quarter;
  input[i] = input[i] % quarter;
  let d = input[i] / dime;
  input[i] = input[i] % dime;
  let n = input[i] / nickel;
  input[i] = input[i] % nickel;
  let p = input[i] / penny;
  input[i] = input[i] % penny;
  console.log(
    `${Math.floor(q)} ${Math.floor(d)} ${Math.floor(n)} ${Math.floor(p)}`
  );
}
