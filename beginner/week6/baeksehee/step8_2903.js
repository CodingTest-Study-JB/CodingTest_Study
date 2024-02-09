const fs = require("fs");
const input = fs.readFileSync("./txt/step8_2903.txt").toString().trim();

let answer = 4;

for (let i = 0; i < Number(input); i++) {
  let rootAnswer = Math.sqrt(answer);
  answer = (rootAnswer + rootAnswer - 1) * (rootAnswer + rootAnswer - 1);
}

console.log(answer);
