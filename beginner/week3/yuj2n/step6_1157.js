// 주어진 단어에서 가장 많이 사용된 알파벳을 출력하는 문제
const input = require('fs').readFileSync("/dev/stdin").toString().trim();

const newInput = input.toUpperCase();
const arr = new Array(26).fill(0);

for (let i = 0; i < input.length; i++) {
    arr[newInput.charCodeAt(i) - 65]++;
}

// 초기 시도: count와 max, char 변수를 선언

// arr 중에서 가장 큰 값 추출 
const max = Math.max(...arr);
// max의 인덱스 번호 추출
const index = arr.indexOf(max);
// 다중 max 값 방지용 변수 
let sameVal = false;

// for문은 알파벳 개수인 26번 돌려야함!!ㅠ
for (let i = 0; i < 26; i++) {
    if (arr[i] === max && index != i) {
        sameVal = true;
        break;
    }
}

console.log(sameVal ? "?" : String.fromCharCode(index + 65));