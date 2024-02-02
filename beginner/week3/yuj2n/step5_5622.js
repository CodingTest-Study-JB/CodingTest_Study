// 1차시도
// let input = require('fs').readFileSync('dev/stdin').toString().trim();

// function sequentialSizes(val) {
//     let answer = 0;
//     switch (val){
//         case "A":
//         case "B": 
//         case "C": 
//         answer = 2; 
//         break;
//         case "D":
//         case "E":
//         case "F": 
//         answer = 3;
//         break;
//         case "G":
//         case "H": 
//         case "I":
//         answer = 4; 
//         break;
//         case "J":
//         case "K": 
//         case "L":
//         answer = 5; 
//         break;
//         case "M":
//         case "N": 
//         case "O":
//         answer = 6; 
//         break;
//         case "P":
//         case "Q": 
//         case "R":
//         case "S":
//         answer = 7; 
//         break;
//         case "T":
//         case "U": 
//         case "V":
//         answer = 8; 
//         break;
//         case "W":
//         case "X": 
//         case "Y":
//         case "Z":
//         answer = 9; 
//         break;
//     }
//     return answer;
// }


// let sum = 0;

// for (let i = 0; i < input.length; i++) {
//     sum += sequentialSizes(input[i]);
// }
// console.log(sum);


const fs = require('fs')
const filePath = process.platform === 'linux' ? '/dev/stdin' : 'input.txt'
const input = fs
  .readFileSync(filePath)
  .toString()
  .trim()

let sum = 0
const alphabets = {
  ABC: 3,
  DEF: 4,
  GHI: 5,
  JKL: 6,
  MNO: 7,
  PQRS: 8,
  TUV: 9,
  WXYZ: 10,
}

// input을 더해서 출력
for (let i = 0; i < input.length; ++i) {
  for (key in alphabets) {
    if (key.includes(input[i])) {
      sum += alphabets[key]
    }
  }
}

console.log(sum)