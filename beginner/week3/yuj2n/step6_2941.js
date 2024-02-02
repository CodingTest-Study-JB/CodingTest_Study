// 두세 문자가 한 글자로 묶일 수 있을 때 글자의 수를 세는 문제
const input = require('fs').readFileSync("/dev/stdin").toString().trim();

// 크로아티아 알파벳 따로 만듦
let croatia = ["c=", "c-", "dz=", "d-", "lj", "nj", "s=", "z="];

function solution(input) {
    for (let alphabet of croatia) {
        // 반복문으로 들어온 크로아티아 알파벳을 Q로 채움
        // 알파벳 길이와 상관없이 1개의 문자열로 반환.
        input = input.split(alphabet).join("Q");
    }

    // 전부 변환된 문자열 길이 반환
    return input.length;
}

console.log(solution(input));