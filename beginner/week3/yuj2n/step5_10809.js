// 1차시도
// const input = require('fs').readFileSync('/dev/stdin').toString();

// const S = input;

// let arr = new Array(26).fill(-1);

// for (let i = 0; i < S.length; i++) {
//     arr[S[i].charCodeAt() - '97'] == i;
// }

// console.log(arr.join(" "));

const input = require('fs').readFileSync('/dev/stdin').toString();
let list = [];

for (let i = 'a'.charCodeAt(); i <= 'z'.charCodeAt(); i++) {
    // String.fromCharCode() = 알파벳화
    // indexof()는 존재하지 않는 값일 경우 -1을 반환
    list.push(input.indexOf(String.fromCharCode(i)));
}

console.log(list.join(' '));