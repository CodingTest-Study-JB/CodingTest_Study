// 과제 제출 기한이 지났습니다.
const input = require('fs').readFileSync("/dev/stdin").toString().trim().split("\n").map(v => +v);

let arr = new Array(30);

for (let i = 1; i < 31; i++) {
    if (input.includes(i)) continue;
    
    arr.push(i);
}

arr.sort((a, b) => a - b)

for (let i = 1; i < 30; i++) {
    if (arr[i] == "undefined") {
        console.log(i);
    }
}