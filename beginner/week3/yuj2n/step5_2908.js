let input = require('fs').readFileSync('dev/stdin').toString().trim();

const line = input.split(" ");

let n1 = line[0];
let n2 = line[1];
let Rn1 = n1.split("").reverse().join("");
let Rn2 = n2.split("").reverse().join("");
let B = 100;

if (Number(Rn1) > Number(Rn2)) {
    B = Rn1;
}
else {
    B = Rn2;
}

console.log(B);